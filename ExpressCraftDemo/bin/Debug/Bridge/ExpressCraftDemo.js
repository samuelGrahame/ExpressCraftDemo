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
                    this.ShowMenu = true;
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
        /**
         * Hide Tile Control Menu
         *
         * @instance
         * @protected
         * @override
         * @this ExpressCraftDemo.frmHub
         * @memberof ExpressCraftDemo.frmHub
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
         * @this ExpressCraftDemo.frmHub
         * @memberof ExpressCraftDemo.frmHub
         * @return  {void}
         */
        OnMenuClick: function () {
            if (Bridge.is(this.Pages, ExpressCraft.TileControl)) {
                this.Pages.ViewState = this.Pages.ViewState === ExpressCraft.TileViewState.Hidden ? ExpressCraft.TileViewState.Visible : ExpressCraft.TileViewState.Hidden;
            }

            ExpressCraft.Form.prototype.OnMenuClick.call(this);
        },
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJFeHByZXNzQ3JhZnREZW1vLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJmcm1EaWFsb2dzLmNzIiwiZnJtRW50aXR5LmNzIiwiZnJtSHViLmNzIiwiUHJvZ3JhbS5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O2dCQWFZQSxJQUFJQTtvQkFFQUEsbUJBQWNBO29CQUNkQTtvQkFDQUE7OztnQkFHSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDcUJBQSxxQkFBZ0JBO2dCQUNoQkE7O2dCQUVBQSxZQUFZQSxJQUFJQTs7Z0JBRWhCQSxJQUFHQTtvQkFFQ0E7b0JBQ0FBLGFBQVFBLElBQUlBOztvQkFJWkEsYUFBUUEsSUFBSUEsMkJBQWNBOztnQkFFOUJBLFdBQVdBLElBQUlBO2dCQUNmQSxzQkFBcUJBLElBQUlBLDJDQUF1QkEsbUJBQzVDQSxJQUFJQSxtQ0FDSkEsVUFBSUEscURBQXNDQTtnQkFJOUNBLCtDQUFxQkE7O2dCQUVyQkEsbUJBQVlBLFlBQVNBOzs7Ozs7Ozs7Ozs7Ozs7WUE3Q3JCQTtZQUNBQSxJQUFHQSxtREFDQ0EseUJBQXFDQTtnQkFFckNBLHVCQUFvQ0E7Ozs7Ozs7Ozs7Ozs7O1lBU3hDQSxJQUFJQTtnQkFDQUEsdUJBQW9DQSx5QkFBcUNBLG9DQUNyRUEscUNBQXdCQTs7O1lBRWhDQTs7Ozs7Ozs7Ozs7OztZQW9DQUEsSUFBSUE7Z0JBRUFBLG1CQUFjQTtnQkFDZEE7Z0JBQ0FBOzs7WUFHSkE7Ozs7Ozs7Ozs7Ozs7O1lBUUFBOztZQUVBQSxZQUFZQSxJQUFJQTs7WUFFaEJBLElBQUdBO2dCQUVDQSxlQUFlQSxJQUFJQTs7Z0JBSW5CQSxlQUFlQSxJQUFJQTs7O1lBR3ZCQSxvQkFDSUEsSUFBSUEsbUNBRUFBLElBQUlBLDJCQUVBQSxJQUFJQSxvREFDQUEsVUFBSUEsd0NBR0FBLElBQUlBLDhDQUVBQSxJQUFJQSxvRUFDUkEsSUFBSUEsK0NBRUFBLElBQUlBLCtIQUdaQSxV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WEEsZUFBVUE7O3NCQUlDQTtZQUNYQSxlQUFVQTs7c0JBSUNBO1lBQ1hBLGVBQVVBOztzQkFNQ0E7WUFDWEEsSUFBR0E7Z0JBRUNBO2dCQUNBQTs7Z0JBSUFBO2dCQUNBQTs7O1lBR0pBOzs7WUFsSUFBO1lBQ0FBOzt1QkFrSktBO1lBRVRBLElBQUlBOzt1QkFVS0E7WUFFVEEsSUFBSUE7Ozs7OztZQ3RNWkE7O1lBRUFBLDZCQUFnQkEsSUFBSUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgRXhwcmVzc0NyYWZ0O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgRXhwcmVzc0NyYWZ0RGVtb1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtRGlhbG9ncyA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblNob3dlZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFdpbmRvd1N0YXRlID0gV2luZG93U3RhdGVUeXBlLk1heGltaXplZDtcclxuICAgICAgICAgICAgICAgIEFsbG93U2l6ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgQWxsb3dNb3ZlQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhc2UuT25TaG93ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgRXhwcmVzc0NyYWZ0O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgRXhwcmVzc0NyYWZ0RGVtb1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtRW50aXR5IDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBMYXlvdXRDb250YWluZXIgQ3VzdG9tZXJEYXRhO1xyXG4gICAgICAgIHB1YmxpYyBJUGFnZXMgUGFnZXM7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSGlkZSBUaWxlIENvbnRyb2wgTWVudVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25Mb3N0Rm9jdXMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Pbkxvc3RGb2N1cygpO1xyXG4gICAgICAgICAgICBpZihQYWdlcyBpcyBUaWxlQ29udHJvbCAmJlxyXG4gICAgICAgICAgICAgICAgUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID09IFRpbGVWaWV3U3RhdGUuVmlzaWJsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID0gVGlsZVZpZXdTdGF0ZS5IaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSGlkZSBvciBTaG93XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBPbk1lbnVDbGljaygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoUGFnZXMgaXMgVGlsZUNvbnRyb2wpXHJcbiAgICAgICAgICAgICAgICBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPSBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPT0gVGlsZVZpZXdTdGF0ZS5IaWRkZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIFRpbGVWaWV3U3RhdGUuVmlzaWJsZSA6IFRpbGVWaWV3U3RhdGUuSGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5Pbk1lbnVDbGljaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZybUVudGl0eSgpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTdGFydFBvc2l0aW9uID0gRm9ybVN0YXJ0UG9zaXRpb24uQ2VudGVyO1xyXG4gICAgICAgICAgICB0aGlzLlRleHQgPSBcIk5ldyBFbnRpdHlcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuU2l6ZSA9IG5ldyBWZWN0b3IyKDU0NSwgMzc0KTsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTaG93TWVudSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBQYWdlcyA9IG5ldyBUaWxlQ29udHJvbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGFnZXMgPSBuZXcgUmliYm9uQ29udHJvbChSaWJib25Db250cm9sLlJpYmJvblR5cGUuQ29tcGFjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHBhZ2UgPSBuZXcgUmliYm9uUGFnZShcIkVudGl0eVwiKTtcclxuICAgICAgICAgICAgcGFnZS5BZGRSaWJib25Hcm91cHMobmV3IFJpYmJvbkdyb3VwKFwiQWN0aW9uc1wiLCBuZXcgUmliYm9uQnV0dG9uW10ge1xyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIlNhdmVcIiksXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQ2xvc2VcIikgeyBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBQYWdlcy5BZGRSaWJib25QYWdlcyhwYWdlKTtcclxuXHJcbiAgICAgICAgICAgIEFwcGVuZENoaWxkKChDb250cm9sKVBhZ2VzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRnVsbCBTY3JlZW4gd2luZG93IFN0YXRlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblNob3dlZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBXaW5kb3dTdGF0ZSA9IFdpbmRvd1N0YXRlVHlwZS5NYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgICAgICBBbGxvd1NpemVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEFsbG93TW92ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBiYXNlLk9uU2hvd2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFNldHVwIFBhbmVsIHdpdGggbGF5b3V0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblNob3dpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5PblNob3dpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IG5ldyBDb250cm9sKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuQm91bmRzID0gbmV3IFZlY3RvcjQoMCwgMCwgXCIxMDAlXCIsIFwiMTAwJVwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5Cb3VuZHMgPSBuZXcgVmVjdG9yNCgwLCAxMjksIFwiMTAwJVwiLCBcIigxMDAlIC0gMTI5cHgpXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBDdXN0b21lckRhdGEgPVxyXG4gICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRHcm91cChcIkVudGl0eSBEZXRhaWxzOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTmFtZTpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYXN0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiTGFzdCBOYW1lXCIsIDAuNW0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZpcnN0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiRmlyc3QgTmFtZVwiLCAwLjVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBVc2VQbGFjZWhvbGRlciA9IHRydWUsIEhpZGVUaW55TGFiZWwgPSB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBZGRyZXNzOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFkZHJlc3NMaW5lMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiQWRkcmVzcyBMaW5lIDFcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRkcmVzc0xpbmUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJBZGRyZXNzIExpbmUgMlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMb2NhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiQ2l0eSBvciBTdWJ1cmJcIiwgMC40bSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRJbnB1dCgpLCBcIlN0YXRlXCIsIDAuM20pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBvc3Rjb2RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJQb3N0Y29kZVwiLCAwLjNtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBVc2VQbGFjZWhvbGRlciA9IHRydWUsIEhpZGVUaW55TGFiZWwgPSB0cnVlLCBOb0dhcCA9IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIEN1c3RvbWVyRGF0YS5BcHBseShwYW5lbCk7XHJcblxyXG4gICAgICAgICAgICBBcHBlbmRDaGlsZChwYW5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEV4cHJlc3NDcmFmdDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEV4cHJlc3NDcmFmdERlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIGZybUh1YiA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSVBhZ2VzIFBhZ2VzO1xyXG4gICAgICAgIHB1YmxpYyBHcmlkVmlldyBWaWV3O1xyXG4gICAgICAgIHB1YmxpYyBTcGxpdEhpZGVDb250cm9sQ29udGFpbmVyIGhpZGVTcGxpdHRlcjtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBIaWRlIFRpbGUgQ29udHJvbCBNZW51XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPbkxvc3RGb2N1cygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uTG9zdEZvY3VzKCk7XHJcbiAgICAgICAgICAgIGlmIChQYWdlcyBpcyBUaWxlQ29udHJvbCAmJlxyXG4gICAgICAgICAgICAgICAgUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID09IFRpbGVWaWV3U3RhdGUuVmlzaWJsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID0gVGlsZVZpZXdTdGF0ZS5IaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSGlkZSBvciBTaG93XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBPbk1lbnVDbGljaygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoUGFnZXMgaXMgVGlsZUNvbnRyb2wpXHJcbiAgICAgICAgICAgICAgICBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPSBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPT0gVGlsZVZpZXdTdGF0ZS5IaWRkZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIFRpbGVWaWV3U3RhdGUuVmlzaWJsZSA6IFRpbGVWaWV3U3RhdGUuSGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5Pbk1lbnVDbGljaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkQ29sdW1uKERhdGFUeXBlIGRhdGEpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgZHQgPSBWaWV3LkRhdGFTb3VyY2U7XHJcbiAgICAgICAgICAgIGlmIChkdCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgZHQgPSBuZXcgRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoZHQuUm93Q291bnQgPiAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBNZXNzYWdlQm94Rm9ybShcIllvdSBjYW5ub3QgYWRkIGNvbHVtbnMgd2hlbiB0aGVyZSBpcyBkYXRhLCBXb3VsZCB5b3UgbGlrZSB0byBjbGVhciB2aWV3P1wiLCBNZXNzYWdlQm94TGF5b3V0LlF1ZXN0aW9uKS5TaG93RGlhbG9nKChuZXcgRGlhbG9nUmVzdWx0KERpYWxvZ1Jlc3VsdEVudW0uWWVzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuQ2xlYXJWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuUmVuZGVyR3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pICkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJpbmcgbmFtZSA9IFwiQ29sdW1uIFwiICsgZHQuQ29sdW1uQ291bnQ7XHJcbiAgICAgICAgICAgIGR0LkFkZENvbHVtbihuYW1lLCBkYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFZpZXcuRGF0YVNvdXJjZSA9IGR0O1xyXG5cclxuICAgICAgICAgICAgVmlldy5BZGRDb2x1bW4obmV3IEdyaWRWaWV3Q29sdW1uKFZpZXcpIHsgQ2FwdGlvbiA9IG5hbWUsIENvbHVtbiA9IFN5c3RlbS5MaW5xLkVudW1lcmFibGUuTGFzdDxnbG9iYWw6OkV4cHJlc3NDcmFmdC5EYXRhQ29sdW1uPihkdC5Db2x1bW5zKSwgVmlzaWJsZSA9IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFJhbmRvbSBybmcgPSBuZXcgUmFuZG9tKCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZFJvdygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gbmV3IG9iamVjdFtWaWV3LkRhdGFTb3VyY2UuQ29sdW1uQ291bnRdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBWaWV3LkRhdGFTb3VyY2UuQ29sdW1uQ291bnQ7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGF0eXBlID0gVmlldy5EYXRhU291cmNlLkNvbHVtbnNbaV0uRGF0YVR5cGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXR5cGUgPT0gRGF0YVR5cGUuRGF0ZVRpbWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gRGF0ZVRpbWUuTm93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YXR5cGUgPT0gRGF0YVR5cGUuU3RyaW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IFZpZXcuRGF0YVNvdXJjZS5Db2x1bW5zW2ldLkZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGF0eXBlID09IERhdGFUeXBlLkludGVnZXIgfHwgZGF0YXR5cGUgPT0gRGF0YVR5cGUuTG9uZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbaV0gPSBybmcuTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IHJuZy5OZXh0RG91YmxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFZpZXcuRGF0YVNvdXJjZS5BZGRSb3cob2JqKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1IdWIoKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5UZXh0ID0gXCJIdWIgLSBFeHByZXNzQ3JhZnQgRGVtb1wiO1xyXG5cclxuICAgICAgICAgICAgaWYoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNob3dNZW51ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFBhZ2VzID0gbmV3IFRpbGVDb250cm9sKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQYWdlcyA9IG5ldyBSaWJib25Db250cm9sKFJpYmJvbkNvbnRyb2wuUmliYm9uVHlwZS5Db21wYWN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZ2UgPSBuZXcgUmliYm9uUGFnZShcIkdyaWQgVmlld1wiKTtcclxuXHJcbiAgICAgICAgICAgIFZpZXcgPSBuZXcgR3JpZFZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICBWaWV3LlNldEJvdW5kc0Z1bGwoKTtcclxuXHJcbiAgICAgICAgICAgIFZpZXcuVXNlRWRpdEZvcm0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHBhZ2UuQWRkUmliYm9uR3JvdXBzKFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkdyb3VwKFwiQWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBSb3dcIikgeyBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVmlldy5EYXRhU291cmNlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBNZXNzYWdlQm94Rm9ybShcIlBsZWFzZSBhZGQgYSBjb2x1bW5cIiwgTWVzc2FnZUJveExheW91dC5JbmZvcm1hdGlvbikuU2hvd0RpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFJvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCAxMDAwIFJvdydzXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQmVnaW5Hcm91cCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChWaWV3LkRhdGFTb3VyY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBNZXNzYWdlQm94Rm9ybShcIlBsZWFzZSBhZGQgYSBjb2x1bW5cIiwgTWVzc2FnZUJveExheW91dC5JbmZvcm1hdGlvbikuU2hvd0RpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuRGF0YVNvdXJjZS5CZWdpbkRhdGFVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgMTAwMDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFJvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5EYXRhU291cmNlLkVuZERhdGFVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIFN0cmluZyBDb2x1bW5cIikgeyBCZWdpbkdyb3VwID0gdHJ1ZSwgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkQ29sdW1uKERhdGFUeXBlLlN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICB9IH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIERhdGUgQ29sdW1uXCIpIHsgQmVnaW5Hcm91cCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZENvbHVtbihEYXRhVHlwZS5EYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgSW50ZWdlciBDb2x1bW5cIikgeyBCZWdpbkdyb3VwID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkQ29sdW1uKERhdGFUeXBlLkludGVnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIExvbmcgQ29sdW1uXCIpIHsgQmVnaW5Hcm91cCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZENvbHVtbihEYXRhVHlwZS5Mb25nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBEZWNpbWFsIENvbHVtblwiKSB7IEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRDb2x1bW4oRGF0YVR5cGUuRGVjaW1hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBdXRvIENvbHVtbiBXaWR0aFwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihWaWV3LkNvbHVtbkF1dG9XaWR0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5Db2x1bW5BdXRvV2lkdGggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlci5DYXB0aW9uID0gXCJBdXRvIENvbHVtbiBXaWR0aFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5Db2x1bW5BdXRvV2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyLkNhcHRpb24gPSBcIk1hbnVhbCBDb2x1bW4gV2lkdGhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5SZW5kZXJHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgUGFnZXMuQWRkUmliYm9uUGFnZXMocGFnZSk7ICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uU2hvd2luZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoaWRlU3BsaXR0ZXIgPSBuZXcgU3BsaXRIaWRlQ29udHJvbENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBoaWRlU3BsaXR0ZXIuU2V0Qm91bmRzRnVsbCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5ld0VuID0gbmV3IFNpbXBsZUJ1dHRvbigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFRleHQgPSBcIk5ldyBFbnRpdHlcIixcclxuICAgICAgICAgICAgICAgIFdpZHRoID0gXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBIZWlnaHQgPSA0NSxcclxuICAgICAgICAgICAgICAgIEl0ZW1DbGljayA9IChzZW5kZXIpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IGZybUVudGl0eSgpLlNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdEaWFsb2cgPSBuZXcgU2ltcGxlQnV0dG9uKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVGV4dCA9IFwiRGlhbG9nc1wiLFxyXG4gICAgICAgICAgICAgICAgV2lkdGggPSBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIEhlaWdodCA9IDQ1LFxyXG4gICAgICAgICAgICAgICAgVG9wID0gNDYsXHJcbiAgICAgICAgICAgICAgICBJdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBmcm1EaWFsb2dzKCkuU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbmV3RW4uU3R5bGUuRm9udFNpemUgPSBcIjE0cHhcIjtcclxuICAgICAgICAgICAgbmV3RGlhbG9nLlN0eWxlLkZvbnRTaXplID0gXCIxNHB4XCI7XHJcblxyXG4gICAgICAgICAgICBoaWRlU3BsaXR0ZXIuUGFuZWwuQXBwZW5kQ2hpbGRyZW4obmV3RW4sIG5ld0RpYWxvZyk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgQXBwZW5kQ2hpbGQoaGlkZVNwbGl0dGVyKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IG5ldyBDb250cm9sKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLkJvdW5kcyA9IG5ldyBWZWN0b3I0KDAsIDAsIFwiMTAwJVwiLCBcIjEwMCVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5Cb3VuZHMgPSBuZXcgVmVjdG9yNCgwLCAxMjksIFwiMTAwJVwiLCBcIigxMDAlIC0gMTI5cHgpXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYW5lbC5BcHBlbmRDaGlsZChWaWV3KTtcclxuXHJcbiAgICAgICAgICAgIGhpZGVTcGxpdHRlci5Cb2R5LkFwcGVuZENoaWxkcmVuKChDb250cm9sKVBhZ2VzLCBwYW5lbCk7XHJcblxyXG4gICAgICAgICAgICBiYXNlLk9uU2hvd2luZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25TaG93ZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgV2luZG93U3RhdGUgPSBXaW5kb3dTdGF0ZVR5cGUuTWF4aW1pemVkO1xyXG5cclxuICAgICAgICAgICAgaWYgKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQWxsb3dTaXplQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBBbGxvd01vdmVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGlkZVNwbGl0dGVyLlNsaWRlclZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgTGlua2NoaWxkcmVuVG9Gb3JtKFZpZXcsIGhpZGVTcGxpdHRlcik7XHJcblxyXG4gICAgICAgICAgICBiYXNlLk9uU2hvd2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEV4cHJlc3NDcmFmdDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEV4cHJlc3NDcmFmdERlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZXR0aW5ncy5BbGxvd0Nsb3NlV2l0aG91dFF1ZXN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLlJ1bihuZXcgZnJtSHViKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
