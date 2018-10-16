using ExpressCraft;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpressCraftDemo
{
    public class frmEntity : Form
    {
        public LayoutContainer CustomerData;
        public IPages Pages;

        /// <summary>
        /// Hide Tile Control Menu
        /// </summary>
        protected override void OnLostFocus()
        {
            base.OnLostFocus();
            if(Pages is TileControl &&
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

        public frmEntity() : base()
        {
            StartPosition = FormStartPosition.Center;
            this.Text = "New Entity";

            this.Size = new Vector2(545, 374);            

            if(Helper.NotDesktop)
            {
                ShowMenu = true;
                Pages = new TileControl();
            }
            else
            {
                Pages = new RibbonControl();
            }
            var page = new RibbonPage("Entity");
            page.AddRibbonGroups(new RibbonGroup("Actions", new RibbonButton[] {
                new RibbonButton("Save") { Icon = Images.x32x32Save },
                new RibbonButton("Close") { Icon = Images.x32x32Close, ItemClick = (sender) => {
                    this.Close();
                } }
            }));
            Pages.AddRibbonPages(page);

            AppendChild((Control)Pages);
        }

        /// <summary>
        /// Full Screen window State
        /// </summary>
        protected override void OnShowed()
        {
            if (Helper.NotDesktop)
            {                
                WindowState = WindowStateType.Maximized;
                AllowSizeChange = false;
                AllowMoveChange = false;
            }   
            
            base.OnShowed();
        }

        /// <summary>
        /// Setup Panel with layout
        /// </summary>
        protected override void OnShowing()
        {
            base.OnShowing();

            var panel = new Control();
            
            if(Helper.NotDesktop)
            {
                panel.Bounds = new Vector4(0, 0, "100%", "100%");                
            }
            else
            {
                panel.Bounds = new Vector4(0, 129, "100%", "(100% - 129px)");
            }
            
            CustomerData =
                new LayoutContainer
                (
                    new LayoutColumn
                    (
                        new LayoutGroup("Entity Details:",
                            new LayoutRow
                            (
                                "Name:",
                                new LayoutControl(
                                    "LastName",
                                    new TextInput(), "Last Name", 0.5m),
                                new LayoutControl(
                                    "FirstName",
                                    new TextInput(), "First Name", 0.5m)
                            )
                            { UsePlaceholder = true, HideTinyLabel = true },
                            new LayoutRow
                            (
                                "Address:",
                                new LayoutControl(
                                    "AddressLine1",
                                    new TextInput(), "Address Line 1"),
                                new LayoutControl(
                                    "AddressLine2",
                                    new TextInput(), "Address Line 2"),
                                new LayoutControl(
                                    "Locality",
                                    new TextInput(), "City or Suburb", 0.4m),
                                new LayoutControl(
                                    "State",
                                    new TextInput(), "State", 0.3m),
                                new LayoutControl(
                                    "Postcode",
                                    new TextInput(), "Postcode", 0.3m)
                            )
                            { UsePlaceholder = true, HideTinyLabel = true, NoGap = true }
                        )
                    )
                );

            CustomerData.Apply(panel);

            AppendChild(panel);
        }
    }
}
