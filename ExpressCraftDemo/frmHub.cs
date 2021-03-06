﻿using ExpressCraft;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpressCraftDemo
{
    public class frmHub : Form
    {
        public IPages Pages;
        public GridView View;
        public SplitHideControlContainer hideSplitter;

        /// <summary>
        /// Hide Tile Control Menu
        /// </summary>
        protected override void OnLostFocus()
        {
            base.OnLostFocus();
            if (Pages is TileControl &&
                Pages.As<TileControl>().ViewState == TileViewState.Visible)
            {
                Pages.As<TileControl>().ViewState = TileViewState.Hidden;
            }
        }

        /// <summary>
        /// Hide or Show
        /// </summary>
        public override void OnMenuClick()
        {
            if (Pages is TileControl)
                Pages.As<TileControl>().ViewState = Pages.As<TileControl>().ViewState == TileViewState.Hidden ?
                    TileViewState.Visible : TileViewState.Hidden;

            base.OnMenuClick();
        }

        public void AddColumn(DataType data)
        {            
            var dt = View.DataSource;
            if (dt == null)
                dt = new DataTable();
            else
            {
                if(dt.RowCount > 0)
                {
                    new MessageBoxForm("You cannot add columns when there is data, Would you like to clear view?", MessageBoxLayout.Question).ShowDialog((new DialogResult(DialogResultEnum.Yes, () => {
                        View.ClearView();
                        View.RenderGrid();
                    }) ));
                    return;
                }
            }
            string name = "Column " + dt.ColumnCount;
            dt.AddColumn(name, data);
            
            View.DataSource = dt;

            View.AddColumn(new GridViewColumn(View) { Caption = name, Column = dt.Columns.Last(), Visible = true });
        }

        public static Random rng = new Random();

        public void AddRow()
        {
            var obj = new object[View.DataSource.ColumnCount];

            for (int i = 0; i < View.DataSource.ColumnCount; i++)
            {
                var datatype = View.DataSource.Columns[i].DataType;
                if (datatype == DataType.DateTime)
                {
                    obj[i] = DateTime.Now;
                }
                else if (datatype == DataType.String)
                {
                    obj[i] = View.DataSource.Columns[i].FieldName;
                }
                else if (datatype == DataType.Integer || datatype == DataType.Long)
                {
                    obj[i] = rng.Next();
                }
                else
                {
                    obj[i] = rng.NextDouble();
                }
            }

            View.DataSource.AddRow(obj);
        }

        public frmHub() : base()
        {
            this.Text = "Hub - ExpressCraft Demo";

            if(Helper.NotDesktop)
            {
                ShowMenu = true;
                Pages = new TileControl();
            }
            else
            {
                Pages = new RibbonControl();
            }

            var page = new RibbonPage("Grid View");

            View = new GridView(false);
            View.SetBoundsFull();
            View.ShowFindPanel();
            View.UseEditForm = false;

            page.AddRibbonGroups(
                new RibbonGroup("Actions",
                new RibbonButton("Add Row") { Icon = Images.x32x32New,
                    ItemClick = (sender) => {
                    if (View.DataSource == null)
                        new MessageBoxForm("Please add a column", MessageBoxLayout.Information).ShowDialog();
                    else
                    {
                        AddRow();
                    }
                } },
                new RibbonButton("Add 1000 Row's")
                {
                    BeginGroup = true,
                    Icon = Images.x32x32New,
                    ItemClick = (sender) => {
                        if (View.DataSource == null)
                            new MessageBoxForm("Please add a column", MessageBoxLayout.Information).ShowDialog();
                        else
                        {
                            View.DataSource.BeginDataUpdate();
                            for (int i = 0; i < 1000; i++)
                            {
                                AddRow();
                            }
                            View.DataSource.EndDataUpdate();
                        }
                    }
                },
                new RibbonButton("Add String Column") {
                    Icon = Images.x32x32Text,
                    BeginGroup = true,
                    ItemClick = (sender) => {
                        AddColumn(DataType.String);
                    } },
                new RibbonButton("Add Date Column") { BeginGroup = true,
                    Icon = Images.x32x32Date,
                    ItemClick = (sender) => {
                        AddColumn(DataType.DateTime);
                    }
                },
                new RibbonButton("Add Integer Column") { BeginGroup = true,
                    Icon = Images.x32x32Data,
                    ItemClick = (sender) => {
                        AddColumn(DataType.Integer);
                    }
                },
                new RibbonButton("Add Long Column") { BeginGroup = true,
                    Icon = Images.x32x32Data,
                    ItemClick = (sender) => {
                        AddColumn(DataType.Long);
                    }
                },
                new RibbonButton("Add Decimal Column") { BeginGroup = true,
                    Icon = Images.x32x32Currency,
                    ItemClick = (sender) => {
                        AddColumn(DataType.Decimal);
                    }
                },
                new RibbonButton("Auto Column Width")
                {
                    Icon = Images.x32x32Columns,
                    BeginGroup = true,
                    ItemClick = (sender) => {
                        if(View.ColumnAutoWidth)
                        {
                            View.ColumnAutoWidth = false;
                            sender.Caption = "Auto Column Width";
                        }
                        else
                        {
                            View.ColumnAutoWidth = true;
                            sender.Caption = "Manual Column Width";
                        }

                        View.RenderGrid();
                    }
                }));

            Pages.AddRibbonPages(page);           
        }

        protected override void OnShowing()
        {
            hideSplitter = new SplitHideControlContainer();
            hideSplitter.SetBoundsFull();

            var newEn = new SimpleButton()
            {
                Text = "New Entity",
                Width = "100%",
                Height = 45,
                ItemClick = (sender) =>
                {
                    new frmEntity().Show();
                }
            };

            var newDialog = new SimpleButton()
            {
                Text = "Dialogs",
                Width = "100%",
                Height = 45,
                Top = 46,
                ItemClick = (sender) =>
                {
                    new frmDialogs().Show();
                }
            };

            newEn.Style.fontSize = "14px";
            newDialog.Style.fontSize = "14px";

            hideSplitter.Panel.AppendChildren(newEn, newDialog);
            

            AppendChild(hideSplitter);

            var panel = new Control();

            if (Helper.NotDesktop)
            {
                panel.Bounds = new Vector4(0, 0, "100%", "100%");
            }
            else
            {
                panel.Bounds = new Vector4(0, 129, "100%", "(100% - 129px)");
            }

            panel.AppendChild(View);

            hideSplitter.Body.AppendChildren((Control)Pages, panel);

            base.OnShowing();
        }

        protected override void OnShowed()
        {
            WindowState = WindowStateType.Maximized;

            if (Helper.NotDesktop)
            {                
                AllowSizeChange = false;
                AllowMoveChange = false;
            }
            
            hideSplitter.SliderVisible = true;

            LinkchildrenToForm(View, hideSplitter);

            base.OnShowed();
        }
    }
}
