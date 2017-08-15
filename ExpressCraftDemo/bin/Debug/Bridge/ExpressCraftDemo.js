/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.0.1
 */
Bridge.assembly("ExpressCraftDemo", function ($asm, globals) {
    "use strict";

    Bridge.define("ExpressCraftDemo.frmDialogs", {
        inherits: [ExpressCraft.Form],
        methods: {
            OnShowed: function () {
                if (ExpressCraft.Helper.NotDesktop) {
                    this.WindowState = ExpressCraft.WindowStateType.Maximized;
                    this.AllowSizeChange = false;
                    this.AllowMoveChange = false;
                }

                ExpressCraft.Form.prototype.OnShowed.call(this);
            }
        }
    });

    Bridge.define("ExpressCraftDemo.frmEntity", {
        inherits: [ExpressCraft.Form],
        fields: {
            CustomerData: null,
            Pages: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.Form.ctor.call(this);
                var $t;
                this.StartPosition = ExpressCraft.FormStartPosition.Center;
                this.Text = "New Entity";

                this.Size = new ExpressCraft.Vector2.$ctor1(545, 374);

                if (ExpressCraft.Helper.NotDesktop) {
                    this.ShowMenu = true;
                    this.Pages = new ExpressCraft.TileControl();
                } else {
                    this.Pages = new ExpressCraft.RibbonControl(ExpressCraft.RibbonControl.RibbonType.Compact);
                }
                var page = new ExpressCraft.RibbonPage("Entity");
                page.AddRibbonGroups([new ExpressCraft.RibbonGroup.$ctor1("Actions", System.Array.init([new ExpressCraft.RibbonButton("Save"), ($t = new ExpressCraft.RibbonButton("Close"), $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmEntity.f1), $t)], ExpressCraft.RibbonButton))]);
                this.Pages.ExpressCraft$IPages$AddRibbonPages([page]);

                this.AppendChild$1(Bridge.cast(this.Pages, ExpressCraft.Control));
        }
    },
    methods: {
        /**
         * Hide Tile Control Menu
         *
         * @instance
         * @protected
         * @override
         * @this ExpressCraftDemo.frmEntity
         * @memberof ExpressCraftDemo.frmEntity
         * @return  {void}
         */
        OnLostFocus: function () {
            ExpressCraft.Form.prototype.OnLostFocus.call(this);
            if (Bridge.is(this.Pages, ExpressCraft.TileControl) && this.Pages.ViewState === ExpressCraft.TileViewState.Visible) {
                this.Pages.ViewState = ExpressCraft.TileViewState.Hidden;
            }
        },
        /**
         * Hide or Show
         *
         * @instance
         * @public
         * @override
         * @this ExpressCraftDemo.frmEntity
         * @memberof ExpressCraftDemo.frmEntity
         * @return  {void}
         */
        OnMenuClick: function () {
            if (Bridge.is(this.Pages, ExpressCraft.TileControl)) {
                this.Pages.ViewState = this.Pages.ViewState === ExpressCraft.TileViewState.Hidden ? ExpressCraft.TileViewState.Visible : ExpressCraft.TileViewState.Hidden;
            }

            ExpressCraft.Form.prototype.OnMenuClick.call(this);
        },
        /**
         * Full Screen window State
         *
         * @instance
         * @protected
         * @override
         * @this ExpressCraftDemo.frmEntity
         * @memberof ExpressCraftDemo.frmEntity
         * @return  {void}
         */
        OnShowed: function () {
            if (ExpressCraft.Helper.NotDesktop) {
                this.WindowState = ExpressCraft.WindowStateType.Maximized;
                this.AllowSizeChange = false;
                this.AllowMoveChange = false;
            }

            ExpressCraft.Form.prototype.OnShowed.call(this);
        },
        /**
         * Setup Panel with layout
         *
         * @instance
         * @protected
         * @override
         * @this ExpressCraftDemo.frmEntity
         * @memberof ExpressCraftDemo.frmEntity
         * @return  {void}
         */
        OnShowing: function () {
            var $t;
            ExpressCraft.Form.prototype.OnShowing.call(this);

            var panel = new ExpressCraft.Control.$ctor1();

            if (ExpressCraft.Helper.NotDesktop) {
                panel.Bounds = new ExpressCraft.Vector4.$ctor1(0, 0, "100%", "100%");
            } else {
                panel.Bounds = new ExpressCraft.Vector4.$ctor1(0, 129, "100%", "(100% - 129px)");
            }

            this.CustomerData = new ExpressCraft.LayoutContainer.ctor([new ExpressCraft.LayoutColumn([new ExpressCraft.LayoutGroup.$ctor1("Entity Details:", [($t = new ExpressCraft.LayoutRow.$ctor2("Name:", [new ExpressCraft.LayoutControl.$ctor2("LastName", new ExpressCraft.TextInput.$ctor1(), "Last Name", System.Decimal(0.5)), new ExpressCraft.LayoutControl.$ctor2("FirstName", new ExpressCraft.TextInput.$ctor1(), "First Name", System.Decimal(0.5))]), $t.UsePlaceholder = true, $t.HideTinyLabel = true, $t), ($t = new ExpressCraft.LayoutRow.$ctor2("Address:", [new ExpressCraft.LayoutControl.$ctor2("AddressLine1", new ExpressCraft.TextInput.$ctor1(), "Address Line 1"), new ExpressCraft.LayoutControl.$ctor2("AddressLine2", new ExpressCraft.TextInput.$ctor1(), "Address Line 2"), new ExpressCraft.LayoutControl.$ctor2("Locality", new ExpressCraft.TextInput.$ctor1(), "City or Suburb", System.Decimal(0.4)), new ExpressCraft.LayoutControl.$ctor2("State", new ExpressCraft.TextInput.$ctor1(), "State", System.Decimal(0.3)), new ExpressCraft.LayoutControl.$ctor2("Postcode", new ExpressCraft.TextInput.$ctor1(), "Postcode", System.Decimal(0.3))]), $t.UsePlaceholder = true, $t.HideTinyLabel = true, $t.NoGap = true, $t)])])]);

            this.CustomerData.Apply(panel);

            this.AppendChild$1(panel);
        }
    }
    });

    Bridge.ns("ExpressCraftDemo.frmEntity", $asm.$);

    Bridge.apply($asm.$.ExpressCraftDemo.frmEntity, {
        f1: function (sender) {
            this.Close();
        }
    });

    Bridge.define("ExpressCraftDemo.frmHub", {
        inherits: [ExpressCraft.Form],
        statics: {
            fields: {
                rng: null
            },
            ctors: {
                init: function () {
                    this.rng = new System.Random.ctor();
                }
            }
        },
        fields: {
            Pages: null,
            View: null,
            hideSplitter: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.Form.ctor.call(this);
                var $t;
                this.Text = "Hub - ExpressCraft Demo";

                if (ExpressCraft.Helper.NotDesktop) {
                    this.Pages = new ExpressCraft.TileControl();
                } else {
                    this.Pages = new ExpressCraft.RibbonControl(ExpressCraft.RibbonControl.RibbonType.Compact);
                }

                var page = new ExpressCraft.RibbonPage("Grid View");

                this.View = new ExpressCraft.GridView(false);
                ExpressCraft.Helper.SetBoundsFull(this.View);

                this.View.UseEditForm = false;

                page.AddRibbonGroups([new ExpressCraft.RibbonGroup.$ctor1("Actions", [($t = new ExpressCraft.RibbonButton("Add Row"), $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f1), $t), ($t = new ExpressCraft.RibbonButton("Add 1000 Row's"), $t.BeginGroup = true, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f2), $t), ($t = new ExpressCraft.RibbonButton("Add String Column"), $t.BeginGroup = true, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f3), $t), ($t = new ExpressCraft.RibbonButton("Add Date Column"), $t.BeginGroup = true, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f4), $t), ($t = new ExpressCraft.RibbonButton("Add Integer Column"), $t.BeginGroup = true, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f5), $t), ($t = new ExpressCraft.RibbonButton("Add Long Column"), $t.BeginGroup = true, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f6), $t), ($t = new ExpressCraft.RibbonButton("Add Decimal Column"), $t.BeginGroup = true, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f7), $t), ($t = new ExpressCraft.RibbonButton("Auto Column Width"), $t.BeginGroup = true, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f8), $t)])]);

                this.Pages.ExpressCraft$IPages$AddRibbonPages([page]);
        }
    },
    methods: {
        AddColumn: function (data) {
            var $t;
            var dt = this.View.DataSource;
            if (dt == null) {
                dt = new ExpressCraft.DataTable();
            } else {
                if (dt.RowCount > 0) {
                    new ExpressCraft.MessageBoxForm.ctor("You cannot add columns when there is data, Would you like to clear view?", ExpressCraft.MessageBoxLayout.Question).ShowDialog([(new ExpressCraft.DialogResult(ExpressCraft.DialogResultEnum.Yes, Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f9)))]);
                    return;
                }
            }
            var name = "Column " + dt.ColumnCount;
            dt.AddColumn(name, data);

            this.View.DataSource = dt;

            this.View.AddColumn(($t = new ExpressCraft.GridViewColumn(this.View), $t.Caption = name, $t.Column = System.Linq.Enumerable.from(dt.Columns).last(), $t.Visible = true, $t));
        },
        AddRow: function () {
            var obj = System.Array.init(this.View.DataSource.ColumnCount, null, System.Object);

            for (var i = 0; i < this.View.DataSource.ColumnCount; i = (i + 1) | 0) {
                var datatype = this.View.DataSource.Columns.getItem(i).DataType;
                if (datatype === ExpressCraft.DataType.DateTime) {
                    obj[System.Array.index(i, obj)] = Bridge.box(System.DateTime.getNow(), System.DateTime, System.DateTime.format);
                } else if (datatype === ExpressCraft.DataType.String) {
                    obj[System.Array.index(i, obj)] = this.View.DataSource.Columns.getItem(i).FieldName;
                } else if (datatype === ExpressCraft.DataType.Integer || datatype === ExpressCraft.DataType.Long) {
                    obj[System.Array.index(i, obj)] = Bridge.box(ExpressCraftDemo.frmHub.rng.next(), System.Int32);
                } else {
                    obj[System.Array.index(i, obj)] = Bridge.box(ExpressCraftDemo.frmHub.rng.nextDouble(), System.Double, System.Double.format, System.Double.getHashCode);
                }
            }

            this.View.DataSource.AddRow$1(obj);
        },
        OnShowing: function () {
            var $t;
            this.hideSplitter = new ExpressCraft.SplitHideControlContainer();
            ExpressCraft.Helper.SetBoundsFull(this.hideSplitter);

            var newEn = ($t = new ExpressCraft.SimpleButton(), $t.Text = "New Entity", $t.Width = "100%", $t.Height = 45, $t.ItemClick = $asm.$.ExpressCraftDemo.frmHub.f10, $t);

            var newDialog = ($t = new ExpressCraft.SimpleButton(), $t.Text = "Dialogs", $t.Width = "100%", $t.Height = 45, $t.Top = 46, $t.ItemClick = $asm.$.ExpressCraftDemo.frmHub.f11, $t);

            newEn.Style.fontSize = "14px";
            newDialog.Style.fontSize = "14px";

            ExpressCraft.Helper.AppendChildren(this.hideSplitter.Panel, [newEn, newDialog]);


            this.AppendChild$1(this.hideSplitter);

            var panel = new ExpressCraft.Control.$ctor1();

            if (ExpressCraft.Helper.NotDesktop) {
                panel.Bounds = new ExpressCraft.Vector4.$ctor1(0, 0, "100%", "100%");
            } else {
                panel.Bounds = new ExpressCraft.Vector4.$ctor1(0, 129, "100%", "(100% - 129px)");
            }

            ExpressCraft.Helper.AppendChild(panel, this.View);

            ExpressCraft.Helper.AppendChildren(this.hideSplitter.Body, [Bridge.cast(this.Pages, ExpressCraft.Control), panel]);

            ExpressCraft.Form.prototype.OnShowing.call(this);
        },
        OnShowed: function () {
            this.WindowState = ExpressCraft.WindowStateType.Maximized;

            if (ExpressCraft.Helper.NotDesktop) {
                this.AllowSizeChange = false;
                this.AllowMoveChange = false;
            }

            this.hideSplitter.SliderVisible = true;

            this.LinkchildrenToForm([this.View, this.hideSplitter]);

            ExpressCraft.Form.prototype.OnShowed.call(this);
        }
    }
    });

    Bridge.ns("ExpressCraftDemo.frmHub", $asm.$);

    Bridge.apply($asm.$.ExpressCraftDemo.frmHub, {
        f1: function (sender) {
            if (this.View.DataSource == null) {
                new ExpressCraft.MessageBoxForm.ctor("Please add a column", ExpressCraft.MessageBoxLayout.Information).ShowDialog();
            } else {
                this.AddRow();
            }
        },
        f2: function (sender) {
            if (this.View.DataSource == null) {
                new ExpressCraft.MessageBoxForm.ctor("Please add a column", ExpressCraft.MessageBoxLayout.Information).ShowDialog();
            } else {
                this.View.DataSource.BeginDataUpdate();
                for (var i = 0; i < 1000; i = (i + 1) | 0) {
                    this.AddRow();
                }
                this.View.DataSource.EndDataUpdate();
            }
        },
        f3: function (sender) {
            this.AddColumn(ExpressCraft.DataType.String);
        },
        f4: function (sender) {
            this.AddColumn(ExpressCraft.DataType.DateTime);
        },
        f5: function (sender) {
            this.AddColumn(ExpressCraft.DataType.Integer);
        },
        f6: function (sender) {
            this.AddColumn(ExpressCraft.DataType.Long);
        },
        f7: function (sender) {
            this.AddColumn(ExpressCraft.DataType.Decimal);
        },
        f8: function (sender) {
            if (this.View.ColumnAutoWidth) {
                this.View.ColumnAutoWidth = false;
                sender.Caption = "Auto Column Width";
            } else {
                this.View.ColumnAutoWidth = true;
                sender.Caption = "Manual Column Width";
            }

            this.View.RenderGrid();
        },
        f9: function () {
            this.View.ClearView();
            this.View.RenderGrid();
        },
        f10: function (sender) {
            new ExpressCraftDemo.frmEntity().Show();
        },
        f11: function (sender) {
            new ExpressCraftDemo.frmDialogs().Show();
        }
    });

    Bridge.define("ExpressCraftDemo.Program", {
        main: function Main () {
            ExpressCraft.Settings.AllowCloseWithoutQuestion = true;

            ExpressCraft.Application.Run(new ExpressCraftDemo.frmHub());
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJFeHByZXNzQ3JhZnREZW1vLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJmcm1EaWFsb2dzLmNzIiwiZnJtRW50aXR5LmNzIiwiZnJtSHViLmNzIiwiUHJvZ3JhbS5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O2dCQWFZQSxJQUFJQTtvQkFFQUEsbUJBQWNBO29CQUNkQTtvQkFDQUE7OztnQkFHSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDcUJBQSxxQkFBZ0JBO2dCQUNoQkE7O2dCQUVBQSxZQUFZQSxJQUFJQTs7Z0JBRWhCQSxJQUFHQTtvQkFFQ0E7b0JBQ0FBLGFBQVFBLElBQUlBOztvQkFJWkEsYUFBUUEsSUFBSUEsMkJBQWNBOztnQkFFOUJBLFdBQVdBLElBQUlBO2dCQUNmQSxzQkFBcUJBLElBQUlBLDJDQUF1QkEsbUJBQzVDQSxJQUFJQSxtQ0FDSkEsVUFBSUEscURBQXNDQTtnQkFJOUNBLCtDQUFxQkE7O2dCQUVyQkEsbUJBQVlBLFlBQVNBOzs7Ozs7Ozs7Ozs7Ozs7WUE3Q3JCQTtZQUNBQSxJQUFHQSxtREFDQ0EseUJBQXFDQTtnQkFFckNBLHVCQUFvQ0E7Ozs7Ozs7Ozs7Ozs7O1lBU3hDQSxJQUFJQTtnQkFDQUEsdUJBQW9DQSx5QkFBcUNBLG9DQUNyRUEscUNBQXdCQTs7O1lBRWhDQTs7Ozs7Ozs7Ozs7OztZQW9DQUEsSUFBSUE7Z0JBRUFBLG1CQUFjQTtnQkFDZEE7Z0JBQ0FBOzs7WUFHSkE7Ozs7Ozs7Ozs7Ozs7O1lBUUFBOztZQUVBQSxZQUFZQSxJQUFJQTs7WUFFaEJBLElBQUdBO2dCQUVDQSxlQUFlQSxJQUFJQTs7Z0JBSW5CQSxlQUFlQSxJQUFJQTs7O1lBR3ZCQSxvQkFDSUEsSUFBSUEsbUNBRUFBLElBQUlBLDJCQUVBQSxJQUFJQSxvREFDQUEsVUFBSUEsd0NBR0FBLElBQUlBLDhDQUVBQSxJQUFJQSxvRUFDUkEsSUFBSUEsK0NBRUFBLElBQUlBLCtIQUdaQSxV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dUJBVUtBO1lBRVRBLElBQUlBOzs7Ozs7WUM1S1pBOztZQUVBQSw2QkFBZ0JBLElBQUlBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIEV4cHJlc3NDcmFmdDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEV4cHJlc3NDcmFmdERlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIGZybURpYWxvZ3MgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25TaG93ZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBXaW5kb3dTdGF0ZSA9IFdpbmRvd1N0YXRlVHlwZS5NYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgICAgICBBbGxvd1NpemVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEFsbG93TW92ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiYXNlLk9uU2hvd2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEV4cHJlc3NDcmFmdDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEV4cHJlc3NDcmFmdERlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIGZybUVudGl0eSA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGF5b3V0Q29udGFpbmVyIEN1c3RvbWVyRGF0YTtcclxuICAgICAgICBwdWJsaWMgSVBhZ2VzIFBhZ2VzO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEhpZGUgVGlsZSBDb250cm9sIE1lbnVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uTG9zdEZvY3VzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuT25Mb3N0Rm9jdXMoKTtcclxuICAgICAgICAgICAgaWYoUGFnZXMgaXMgVGlsZUNvbnRyb2wgJiZcclxuICAgICAgICAgICAgICAgIFBhZ2VzLkFzPFRpbGVDb250cm9sPigpLlZpZXdTdGF0ZSA9PSBUaWxlVmlld1N0YXRlLlZpc2libGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFBhZ2VzLkFzPFRpbGVDb250cm9sPigpLlZpZXdTdGF0ZSA9IFRpbGVWaWV3U3RhdGUuSGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEhpZGUgb3IgU2hvd1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgT25NZW51Q2xpY2soKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKFBhZ2VzIGlzIFRpbGVDb250cm9sKVxyXG4gICAgICAgICAgICAgICAgUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID0gUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID09IFRpbGVWaWV3U3RhdGUuSGlkZGVuID9cclxuICAgICAgICAgICAgICAgICAgICBUaWxlVmlld1N0YXRlLlZpc2libGUgOiBUaWxlVmlld1N0YXRlLkhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIGJhc2UuT25NZW51Q2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1FbnRpdHkoKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU3RhcnRQb3NpdGlvbiA9IEZvcm1TdGFydFBvc2l0aW9uLkNlbnRlcjtcclxuICAgICAgICAgICAgdGhpcy5UZXh0ID0gXCJOZXcgRW50aXR5XCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNpemUgPSBuZXcgVmVjdG9yMig1NDUsIDM3NCk7ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpZihIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2hvd01lbnUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgUGFnZXMgPSBuZXcgVGlsZUNvbnRyb2woKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFBhZ2VzID0gbmV3IFJpYmJvbkNvbnRyb2woUmliYm9uQ29udHJvbC5SaWJib25UeXBlLkNvbXBhY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwYWdlID0gbmV3IFJpYmJvblBhZ2UoXCJFbnRpdHlcIik7XHJcbiAgICAgICAgICAgIHBhZ2UuQWRkUmliYm9uR3JvdXBzKG5ldyBSaWJib25Hcm91cChcIkFjdGlvbnNcIiwgbmV3IFJpYmJvbkJ1dHRvbltdIHtcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJTYXZlXCIpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkNsb3NlXCIpIHsgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgUGFnZXMuQWRkUmliYm9uUGFnZXMocGFnZSk7XHJcblxyXG4gICAgICAgICAgICBBcHBlbmRDaGlsZCgoQ29udHJvbClQYWdlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEZ1bGwgU2NyZWVuIHdpbmRvdyBTdGF0ZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25TaG93ZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgV2luZG93U3RhdGUgPSBXaW5kb3dTdGF0ZVR5cGUuTWF4aW1pemVkO1xyXG4gICAgICAgICAgICAgICAgQWxsb3dTaXplQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBBbGxvd01vdmVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYmFzZS5PblNob3dlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBTZXR1cCBQYW5lbCB3aXRoIGxheW91dFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25TaG93aW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuT25TaG93aW5nKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFuZWwgPSBuZXcgQ29udHJvbCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLkJvdW5kcyA9IG5ldyBWZWN0b3I0KDAsIDAsIFwiMTAwJVwiLCBcIjEwMCVcIik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuQm91bmRzID0gbmV3IFZlY3RvcjQoMCwgMTI5LCBcIjEwMCVcIiwgXCIoMTAwJSAtIDEyOXB4KVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQ3VzdG9tZXJEYXRhID1cclxuICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0R3JvdXAoXCJFbnRpdHkgRGV0YWlsczpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5hbWU6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFzdE5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRJbnB1dCgpLCBcIkxhc3QgTmFtZVwiLCAwLjVtKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGaXJzdE5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRJbnB1dCgpLCBcIkZpcnN0IE5hbWVcIiwgMC41bSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgVXNlUGxhY2Vob2xkZXIgPSB0cnVlLCBIaWRlVGlueUxhYmVsID0gdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRkcmVzczpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBZGRyZXNzTGluZTFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRJbnB1dCgpLCBcIkFkZHJlc3MgTGluZSAxXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFkZHJlc3NMaW5lMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiQWRkcmVzcyBMaW5lIDJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTG9jYWxpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRJbnB1dCgpLCBcIkNpdHkgb3IgU3VidXJiXCIsIDAuNG0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJTdGF0ZVwiLCAwLjNtKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQb3N0Y29kZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiUG9zdGNvZGVcIiwgMC4zbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgVXNlUGxhY2Vob2xkZXIgPSB0cnVlLCBIaWRlVGlueUxhYmVsID0gdHJ1ZSwgTm9HYXAgPSB0cnVlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBDdXN0b21lckRhdGEuQXBwbHkocGFuZWwpO1xyXG5cclxuICAgICAgICAgICAgQXBwZW5kQ2hpbGQocGFuZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBFeHByZXNzQ3JhZnQ7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBFeHByZXNzQ3JhZnREZW1vXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBmcm1IdWIgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIElQYWdlcyBQYWdlcztcclxuICAgICAgICBwdWJsaWMgR3JpZFZpZXcgVmlldztcclxuICAgICAgICBwdWJsaWMgU3BsaXRIaWRlQ29udHJvbENvbnRhaW5lciBoaWRlU3BsaXR0ZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZENvbHVtbihEYXRhVHlwZSBkYXRhKVxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGR0ID0gVmlldy5EYXRhU291cmNlO1xyXG4gICAgICAgICAgICBpZiAoZHQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGR0ID0gbmV3IERhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGR0LlJvd0NvdW50ID4gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTWVzc2FnZUJveEZvcm0oXCJZb3UgY2Fubm90IGFkZCBjb2x1bW5zIHdoZW4gdGhlcmUgaXMgZGF0YSwgV291bGQgeW91IGxpa2UgdG8gY2xlYXIgdmlldz9cIiwgTWVzc2FnZUJveExheW91dC5RdWVzdGlvbikuU2hvd0RpYWxvZygobmV3IERpYWxvZ1Jlc3VsdChEaWFsb2dSZXN1bHRFbnVtLlllcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3LkNsZWFyVmlldygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3LlJlbmRlckdyaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSApKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyaW5nIG5hbWUgPSBcIkNvbHVtbiBcIiArIGR0LkNvbHVtbkNvdW50O1xyXG4gICAgICAgICAgICBkdC5BZGRDb2x1bW4obmFtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBWaWV3LkRhdGFTb3VyY2UgPSBkdDtcclxuXHJcbiAgICAgICAgICAgIFZpZXcuQWRkQ29sdW1uKG5ldyBHcmlkVmlld0NvbHVtbihWaWV3KSB7IENhcHRpb24gPSBuYW1lLCBDb2x1bW4gPSBTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkxhc3Q8Z2xvYmFsOjpFeHByZXNzQ3JhZnQuRGF0YUNvbHVtbj4oZHQuQ29sdW1ucyksIFZpc2libGUgPSB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBSYW5kb20gcm5nID0gbmV3IFJhbmRvbSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSb3coKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IG5ldyBvYmplY3RbVmlldy5EYXRhU291cmNlLkNvbHVtbkNvdW50XTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgVmlldy5EYXRhU291cmNlLkNvbHVtbkNvdW50OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhdHlwZSA9IFZpZXcuRGF0YVNvdXJjZS5Db2x1bW5zW2ldLkRhdGFUeXBlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGF0eXBlID09IERhdGFUeXBlLkRhdGVUaW1lKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IERhdGVUaW1lLk5vdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGF0eXBlID09IERhdGFUeXBlLlN0cmluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbaV0gPSBWaWV3LkRhdGFTb3VyY2UuQ29sdW1uc1tpXS5GaWVsZE5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhdHlwZSA9PSBEYXRhVHlwZS5JbnRlZ2VyIHx8IGRhdGF0eXBlID09IERhdGFUeXBlLkxvbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gcm5nLk5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbaV0gPSBybmcuTmV4dERvdWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBWaWV3LkRhdGFTb3VyY2UuQWRkUm93KG9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZnJtSHViKCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuVGV4dCA9IFwiSHViIC0gRXhwcmVzc0NyYWZ0IERlbW9cIjtcclxuXHJcbiAgICAgICAgICAgIGlmKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQYWdlcyA9IG5ldyBUaWxlQ29udHJvbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGFnZXMgPSBuZXcgUmliYm9uQ29udHJvbChSaWJib25Db250cm9sLlJpYmJvblR5cGUuQ29tcGFjdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYWdlID0gbmV3IFJpYmJvblBhZ2UoXCJHcmlkIFZpZXdcIik7XHJcblxyXG4gICAgICAgICAgICBWaWV3ID0gbmV3IEdyaWRWaWV3KGZhbHNlKTtcclxuICAgICAgICAgICAgVmlldy5TZXRCb3VuZHNGdWxsKCk7XHJcblxyXG4gICAgICAgICAgICBWaWV3LlVzZUVkaXRGb3JtID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBwYWdlLkFkZFJpYmJvbkdyb3VwcyhcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25Hcm91cChcIkFjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgUm93XCIpIHsgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFZpZXcuRGF0YVNvdXJjZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTWVzc2FnZUJveEZvcm0oXCJQbGVhc2UgYWRkIGEgY29sdW1uXCIsIE1lc3NhZ2VCb3hMYXlvdXQuSW5mb3JtYXRpb24pLlNob3dEaWFsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRSb3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgMTAwMCBSb3cnc1wiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVmlldy5EYXRhU291cmNlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTWVzc2FnZUJveEZvcm0oXCJQbGVhc2UgYWRkIGEgY29sdW1uXCIsIE1lc3NhZ2VCb3hMYXlvdXQuSW5mb3JtYXRpb24pLlNob3dEaWFsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3LkRhdGFTb3VyY2UuQmVnaW5EYXRhVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IDEwMDA7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRSb3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuRGF0YVNvdXJjZS5FbmREYXRhVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBTdHJpbmcgQ29sdW1uXCIpIHsgQmVnaW5Hcm91cCA9IHRydWUsIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFkZENvbHVtbihEYXRhVHlwZS5TdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfSB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBEYXRlIENvbHVtblwiKSB7IEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRDb2x1bW4oRGF0YVR5cGUuRGF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIEludGVnZXIgQ29sdW1uXCIpIHsgQmVnaW5Hcm91cCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZENvbHVtbihEYXRhVHlwZS5JbnRlZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBMb25nIENvbHVtblwiKSB7IEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRDb2x1bW4oRGF0YVR5cGUuTG9uZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgRGVjaW1hbCBDb2x1bW5cIikgeyBCZWdpbkdyb3VwID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkQ29sdW1uKERhdGFUeXBlLkRlY2ltYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQXV0byBDb2x1bW4gV2lkdGhcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBCZWdpbkdyb3VwID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoVmlldy5Db2x1bW5BdXRvV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuQ29sdW1uQXV0b1dpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXIuQ2FwdGlvbiA9IFwiQXV0byBDb2x1bW4gV2lkdGhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuQ29sdW1uQXV0b1dpZHRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlci5DYXB0aW9uID0gXCJNYW51YWwgQ29sdW1uIFdpZHRoXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuUmVuZGVyR3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIFBhZ2VzLkFkZFJpYmJvblBhZ2VzKHBhZ2UpOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblNob3dpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGlkZVNwbGl0dGVyID0gbmV3IFNwbGl0SGlkZUNvbnRyb2xDb250YWluZXIoKTtcclxuICAgICAgICAgICAgaGlkZVNwbGl0dGVyLlNldEJvdW5kc0Z1bGwoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdFbiA9IG5ldyBTaW1wbGVCdXR0b24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBUZXh0ID0gXCJOZXcgRW50aXR5XCIsXHJcbiAgICAgICAgICAgICAgICBXaWR0aCA9IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgSGVpZ2h0ID0gNDUsXHJcbiAgICAgICAgICAgICAgICBJdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBmcm1FbnRpdHkoKS5TaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV3RGlhbG9nID0gbmV3IFNpbXBsZUJ1dHRvbigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFRleHQgPSBcIkRpYWxvZ3NcIixcclxuICAgICAgICAgICAgICAgIFdpZHRoID0gXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBIZWlnaHQgPSA0NSxcclxuICAgICAgICAgICAgICAgIFRvcCA9IDQ2LFxyXG4gICAgICAgICAgICAgICAgSXRlbUNsaWNrID0gKHNlbmRlcikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgZnJtRGlhbG9ncygpLlNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG5ld0VuLlN0eWxlLkZvbnRTaXplID0gXCIxNHB4XCI7XHJcbiAgICAgICAgICAgIG5ld0RpYWxvZy5TdHlsZS5Gb250U2l6ZSA9IFwiMTRweFwiO1xyXG5cclxuICAgICAgICAgICAgaGlkZVNwbGl0dGVyLlBhbmVsLkFwcGVuZENoaWxkcmVuKG5ld0VuLCBuZXdEaWFsb2cpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIEFwcGVuZENoaWxkKGhpZGVTcGxpdHRlcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFuZWwgPSBuZXcgQ29udHJvbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5Cb3VuZHMgPSBuZXcgVmVjdG9yNCgwLCAwLCBcIjEwMCVcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuQm91bmRzID0gbmV3IFZlY3RvcjQoMCwgMTI5LCBcIjEwMCVcIiwgXCIoMTAwJSAtIDEyOXB4KVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFuZWwuQXBwZW5kQ2hpbGQoVmlldyk7XHJcblxyXG4gICAgICAgICAgICBoaWRlU3BsaXR0ZXIuQm9keS5BcHBlbmRDaGlsZHJlbigoQ29udHJvbClQYWdlcywgcGFuZWwpO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5PblNob3dpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uU2hvd2VkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpbmRvd1N0YXRlID0gV2luZG93U3RhdGVUeXBlLk1heGltaXplZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEFsbG93U2l6ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgQWxsb3dNb3ZlQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhpZGVTcGxpdHRlci5TbGlkZXJWaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIExpbmtjaGlsZHJlblRvRm9ybShWaWV3LCBoaWRlU3BsaXR0ZXIpO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5PblNob3dlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBFeHByZXNzQ3JhZnQ7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBFeHByZXNzQ3JhZnREZW1vXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQcm9ncmFtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2V0dGluZ3MuQWxsb3dDbG9zZVdpdGhvdXRRdWVzdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBBcHBsaWNhdGlvbi5SdW4obmV3IGZybUh1YigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
