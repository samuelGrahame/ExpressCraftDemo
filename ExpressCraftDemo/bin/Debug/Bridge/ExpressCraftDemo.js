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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJFeHByZXNzQ3JhZnREZW1vLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJmcm1EaWFsb2dzLmNzIiwiZnJtRW50aXR5LmNzIiwiZnJtSHViLmNzIiwiUHJvZ3JhbS5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O2dCQWFZQSxJQUFJQTtvQkFFQUEsbUJBQWNBO29CQUNkQTtvQkFDQUE7OztnQkFHSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDcUJBQSxxQkFBZ0JBO2dCQUNoQkE7O2dCQUVBQSxZQUFZQSxJQUFJQTs7Z0JBRWhCQSxJQUFHQTtvQkFFQ0E7b0JBQ0FBLGFBQVFBLElBQUlBOztvQkFJWkEsYUFBUUEsSUFBSUEsMkJBQWNBOztnQkFFOUJBLFdBQVdBLElBQUlBO2dCQUNmQSxzQkFBcUJBLElBQUlBLDJDQUF1QkEsbUJBQzVDQSxJQUFJQSxtQ0FDSkEsVUFBSUEscURBQXNDQTtnQkFJOUNBLCtDQUFxQkE7O2dCQUVyQkEsbUJBQVlBLFlBQVNBOzs7Ozs7Ozs7Ozs7Ozs7WUE3Q3JCQTtZQUNBQSxJQUFHQSxtREFDQ0EseUJBQXFDQTtnQkFFckNBLHVCQUFvQ0E7Ozs7Ozs7Ozs7Ozs7O1lBU3hDQSxJQUFJQTtnQkFDQUEsdUJBQW9DQSx5QkFBcUNBLG9DQUNyRUEscUNBQXdCQTs7O1lBRWhDQTs7Ozs7Ozs7Ozs7OztZQW9DQUEsSUFBSUE7Z0JBRUFBLG1CQUFjQTtnQkFDZEE7Z0JBQ0FBOzs7WUFHSkE7Ozs7Ozs7Ozs7Ozs7O1lBUUFBOztZQUVBQSxZQUFZQSxJQUFJQTs7WUFFaEJBLElBQUdBO2dCQUVDQSxlQUFlQSxJQUFJQTs7Z0JBSW5CQSxlQUFlQSxJQUFJQTs7O1lBR3ZCQSxvQkFDSUEsSUFBSUEsbUNBRUFBLElBQUlBLDJCQUVBQSxJQUFJQSxvREFDQUEsVUFBSUEsd0NBR0FBLElBQUlBLDhDQUVBQSxJQUFJQSxvRUFDUkEsSUFBSUEsK0NBRUFBLElBQUlBLCtIQUdaQSxV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SUFBSUE7O3VCQVVLQTtZQUVUQSxJQUFJQTs7Ozs7O1lDN0taQTs7WUFFQUEsNkJBQWdCQSxJQUFJQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBFeHByZXNzQ3JhZnQ7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBFeHByZXNzQ3JhZnREZW1vXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBmcm1EaWFsb2dzIDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uU2hvd2VkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgV2luZG93U3RhdGUgPSBXaW5kb3dTdGF0ZVR5cGUuTWF4aW1pemVkO1xyXG4gICAgICAgICAgICAgICAgQWxsb3dTaXplQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBBbGxvd01vdmVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmFzZS5PblNob3dlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBFeHByZXNzQ3JhZnQ7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBFeHByZXNzQ3JhZnREZW1vXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBmcm1FbnRpdHkgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExheW91dENvbnRhaW5lciBDdXN0b21lckRhdGE7XHJcbiAgICAgICAgcHVibGljIElQYWdlcyBQYWdlcztcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBIaWRlIFRpbGUgQ29udHJvbCBNZW51XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPbkxvc3RGb2N1cygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uTG9zdEZvY3VzKCk7XHJcbiAgICAgICAgICAgIGlmKFBhZ2VzIGlzIFRpbGVDb250cm9sICYmXHJcbiAgICAgICAgICAgICAgICBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPT0gVGlsZVZpZXdTdGF0ZS5WaXNpYmxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPSBUaWxlVmlld1N0YXRlLkhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBIaWRlIG9yIFNob3dcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIE9uTWVudUNsaWNrKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChQYWdlcyBpcyBUaWxlQ29udHJvbClcclxuICAgICAgICAgICAgICAgIFBhZ2VzLkFzPFRpbGVDb250cm9sPigpLlZpZXdTdGF0ZSA9IFBhZ2VzLkFzPFRpbGVDb250cm9sPigpLlZpZXdTdGF0ZSA9PSBUaWxlVmlld1N0YXRlLkhpZGRlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgVGlsZVZpZXdTdGF0ZS5WaXNpYmxlIDogVGlsZVZpZXdTdGF0ZS5IaWRkZW47XHJcblxyXG4gICAgICAgICAgICBiYXNlLk9uTWVudUNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZnJtRW50aXR5KCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFN0YXJ0UG9zaXRpb24gPSBGb3JtU3RhcnRQb3NpdGlvbi5DZW50ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuVGV4dCA9IFwiTmV3IEVudGl0eVwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5TaXplID0gbmV3IFZlY3RvcjIoNTQ1LCAzNzQpOyAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNob3dNZW51ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFBhZ2VzID0gbmV3IFRpbGVDb250cm9sKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQYWdlcyA9IG5ldyBSaWJib25Db250cm9sKFJpYmJvbkNvbnRyb2wuUmliYm9uVHlwZS5Db21wYWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcGFnZSA9IG5ldyBSaWJib25QYWdlKFwiRW50aXR5XCIpO1xyXG4gICAgICAgICAgICBwYWdlLkFkZFJpYmJvbkdyb3VwcyhuZXcgUmliYm9uR3JvdXAoXCJBY3Rpb25zXCIsIG5ldyBSaWJib25CdXR0b25bXSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiU2F2ZVwiKSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJDbG9zZVwiKSB7IE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIFBhZ2VzLkFkZFJpYmJvblBhZ2VzKHBhZ2UpO1xyXG5cclxuICAgICAgICAgICAgQXBwZW5kQ2hpbGQoKENvbnRyb2wpUGFnZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBGdWxsIFNjcmVlbiB3aW5kb3cgU3RhdGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uU2hvd2VkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFdpbmRvd1N0YXRlID0gV2luZG93U3RhdGVUeXBlLk1heGltaXplZDtcclxuICAgICAgICAgICAgICAgIEFsbG93U2l6ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgQWxsb3dNb3ZlQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJhc2UuT25TaG93ZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gU2V0dXAgUGFuZWwgd2l0aCBsYXlvdXRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uU2hvd2luZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uU2hvd2luZygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gbmV3IENvbnRyb2woKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5Cb3VuZHMgPSBuZXcgVmVjdG9yNCgwLCAwLCBcIjEwMCVcIiwgXCIxMDAlXCIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLkJvdW5kcyA9IG5ldyBWZWN0b3I0KDAsIDEyOSwgXCIxMDAlXCIsIFwiKDEwMCUgLSAxMjlweClcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEN1c3RvbWVyRGF0YSA9XHJcbiAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dEdyb3VwKFwiRW50aXR5IERldGFpbHM6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOYW1lOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhc3ROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJMYXN0IE5hbWVcIiwgMC41bSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJGaXJzdCBOYW1lXCIsIDAuNW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFVzZVBsYWNlaG9sZGVyID0gdHJ1ZSwgSGlkZVRpbnlMYWJlbCA9IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFkZHJlc3M6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRkcmVzc0xpbmUxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJBZGRyZXNzIExpbmUgMVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBZGRyZXNzTGluZTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRJbnB1dCgpLCBcIkFkZHJlc3MgTGluZSAyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxvY2FsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJDaXR5IG9yIFN1YnVyYlwiLCAwLjRtKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiU3RhdGVcIiwgMC4zbSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUG9zdGNvZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRJbnB1dCgpLCBcIlBvc3Rjb2RlXCIsIDAuM20pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFVzZVBsYWNlaG9sZGVyID0gdHJ1ZSwgSGlkZVRpbnlMYWJlbCA9IHRydWUsIE5vR2FwID0gdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgQ3VzdG9tZXJEYXRhLkFwcGx5KHBhbmVsKTtcclxuXHJcbiAgICAgICAgICAgIEFwcGVuZENoaWxkKHBhbmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgRXhwcmVzc0NyYWZ0O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgRXhwcmVzc0NyYWZ0RGVtb1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtSHViIDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBJUGFnZXMgUGFnZXM7XHJcbiAgICAgICAgcHVibGljIEdyaWRWaWV3IFZpZXc7XHJcbiAgICAgICAgcHVibGljIFNwbGl0SGlkZUNvbnRyb2xDb250YWluZXIgaGlkZVNwbGl0dGVyO1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRDb2x1bW4oRGF0YVR5cGUgZGF0YSlcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBkdCA9IFZpZXcuRGF0YVNvdXJjZTtcclxuICAgICAgICAgICAgaWYgKGR0ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBkdCA9IG5ldyBEYXRhVGFibGUoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihkdC5Sb3dDb3VudCA+IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IE1lc3NhZ2VCb3hGb3JtKFwiWW91IGNhbm5vdCBhZGQgY29sdW1ucyB3aGVuIHRoZXJlIGlzIGRhdGEsIFdvdWxkIHlvdSBsaWtlIHRvIGNsZWFyIHZpZXc/XCIsIE1lc3NhZ2VCb3hMYXlvdXQuUXVlc3Rpb24pLlNob3dEaWFsb2coKG5ldyBEaWFsb2dSZXN1bHQoRGlhbG9nUmVzdWx0RW51bS5ZZXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5DbGVhclZpZXcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5SZW5kZXJHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0cmluZyBuYW1lID0gXCJDb2x1bW4gXCIgKyBkdC5Db2x1bW5Db3VudDtcclxuICAgICAgICAgICAgZHQuQWRkQ29sdW1uKG5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgVmlldy5EYXRhU291cmNlID0gZHQ7XHJcblxyXG4gICAgICAgICAgICBWaWV3LkFkZENvbHVtbihuZXcgR3JpZFZpZXdDb2x1bW4oVmlldykgeyBDYXB0aW9uID0gbmFtZSwgQ29sdW1uID0gU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5MYXN0PGdsb2JhbDo6RXhwcmVzc0NyYWZ0LkRhdGFDb2x1bW4+KGR0LkNvbHVtbnMpLCBWaXNpYmxlID0gdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgUmFuZG9tIHJuZyA9IG5ldyBSYW5kb20oKTtcclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkUm93KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBuZXcgb2JqZWN0W1ZpZXcuRGF0YVNvdXJjZS5Db2x1bW5Db3VudF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IFZpZXcuRGF0YVNvdXJjZS5Db2x1bW5Db3VudDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YXR5cGUgPSBWaWV3LkRhdGFTb3VyY2UuQ29sdW1uc1tpXS5EYXRhVHlwZTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhdHlwZSA9PSBEYXRhVHlwZS5EYXRlVGltZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbaV0gPSBEYXRlVGltZS5Ob3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhdHlwZSA9PSBEYXRhVHlwZS5TdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gVmlldy5EYXRhU291cmNlLkNvbHVtbnNbaV0uRmllbGROYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YXR5cGUgPT0gRGF0YVR5cGUuSW50ZWdlciB8fCBkYXRhdHlwZSA9PSBEYXRhVHlwZS5Mb25nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IHJuZy5OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gcm5nLk5leHREb3VibGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVmlldy5EYXRhU291cmNlLkFkZFJvdyhvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZybUh1YigpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlRleHQgPSBcIkh1YiAtIEV4cHJlc3NDcmFmdCBEZW1vXCI7XHJcblxyXG4gICAgICAgICAgICBpZihIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2hvd01lbnUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgUGFnZXMgPSBuZXcgVGlsZUNvbnRyb2woKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFBhZ2VzID0gbmV3IFJpYmJvbkNvbnRyb2woUmliYm9uQ29udHJvbC5SaWJib25UeXBlLkNvbXBhY3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFnZSA9IG5ldyBSaWJib25QYWdlKFwiR3JpZCBWaWV3XCIpO1xyXG5cclxuICAgICAgICAgICAgVmlldyA9IG5ldyBHcmlkVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgIFZpZXcuU2V0Qm91bmRzRnVsbCgpO1xyXG5cclxuICAgICAgICAgICAgVmlldy5Vc2VFZGl0Rm9ybSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgcGFnZS5BZGRSaWJib25Hcm91cHMoXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uR3JvdXAoXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIFJvd1wiKSB7IE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChWaWV3LkRhdGFTb3VyY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE1lc3NhZ2VCb3hGb3JtKFwiUGxlYXNlIGFkZCBhIGNvbHVtblwiLCBNZXNzYWdlQm94TGF5b3V0LkluZm9ybWF0aW9uKS5TaG93RGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkUm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIDEwMDAgUm93J3NcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBCZWdpbkdyb3VwID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFZpZXcuRGF0YVNvdXJjZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE1lc3NhZ2VCb3hGb3JtKFwiUGxlYXNlIGFkZCBhIGNvbHVtblwiLCBNZXNzYWdlQm94TGF5b3V0LkluZm9ybWF0aW9uKS5TaG93RGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5EYXRhU291cmNlLkJlZ2luRGF0YVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCAxMDAwOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkUm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3LkRhdGFTb3VyY2UuRW5kRGF0YVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgU3RyaW5nIENvbHVtblwiKSB7IEJlZ2luR3JvdXAgPSB0cnVlLCBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBZGRDb2x1bW4oRGF0YVR5cGUuU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIH0gfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgRGF0ZSBDb2x1bW5cIikgeyBCZWdpbkdyb3VwID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkQ29sdW1uKERhdGFUeXBlLkRhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBJbnRlZ2VyIENvbHVtblwiKSB7IEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRDb2x1bW4oRGF0YVR5cGUuSW50ZWdlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgTG9uZyBDb2x1bW5cIikgeyBCZWdpbkdyb3VwID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkQ29sdW1uKERhdGFUeXBlLkxvbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIERlY2ltYWwgQ29sdW1uXCIpIHsgQmVnaW5Hcm91cCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZENvbHVtbihEYXRhVHlwZS5EZWNpbWFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkF1dG8gQ29sdW1uIFdpZHRoXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQmVnaW5Hcm91cCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKFZpZXcuQ29sdW1uQXV0b1dpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3LkNvbHVtbkF1dG9XaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyLkNhcHRpb24gPSBcIkF1dG8gQ29sdW1uIFdpZHRoXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3LkNvbHVtbkF1dG9XaWR0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXIuQ2FwdGlvbiA9IFwiTWFudWFsIENvbHVtbiBXaWR0aFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3LlJlbmRlckdyaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBQYWdlcy5BZGRSaWJib25QYWdlcyhwYWdlKTsgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25TaG93aW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhpZGVTcGxpdHRlciA9IG5ldyBTcGxpdEhpZGVDb250cm9sQ29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIGhpZGVTcGxpdHRlci5TZXRCb3VuZHNGdWxsKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV3RW4gPSBuZXcgU2ltcGxlQnV0dG9uKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVGV4dCA9IFwiTmV3IEVudGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgV2lkdGggPSBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIEhlaWdodCA9IDQ1LFxyXG4gICAgICAgICAgICAgICAgSXRlbUNsaWNrID0gKHNlbmRlcikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgZnJtRW50aXR5KCkuU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIG5ld0RpYWxvZyA9IG5ldyBTaW1wbGVCdXR0b24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBUZXh0ID0gXCJEaWFsb2dzXCIsXHJcbiAgICAgICAgICAgICAgICBXaWR0aCA9IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgSGVpZ2h0ID0gNDUsXHJcbiAgICAgICAgICAgICAgICBUb3AgPSA0NixcclxuICAgICAgICAgICAgICAgIEl0ZW1DbGljayA9IChzZW5kZXIpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IGZybURpYWxvZ3MoKS5TaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBuZXdFbi5TdHlsZS5Gb250U2l6ZSA9IFwiMTRweFwiO1xyXG4gICAgICAgICAgICBuZXdEaWFsb2cuU3R5bGUuRm9udFNpemUgPSBcIjE0cHhcIjtcclxuXHJcbiAgICAgICAgICAgIGhpZGVTcGxpdHRlci5QYW5lbC5BcHBlbmRDaGlsZHJlbihuZXdFbiwgbmV3RGlhbG9nKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBBcHBlbmRDaGlsZChoaWRlU3BsaXR0ZXIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gbmV3IENvbnRyb2woKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuQm91bmRzID0gbmV3IFZlY3RvcjQoMCwgMCwgXCIxMDAlXCIsIFwiMTAwJVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLkJvdW5kcyA9IG5ldyBWZWN0b3I0KDAsIDEyOSwgXCIxMDAlXCIsIFwiKDEwMCUgLSAxMjlweClcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhbmVsLkFwcGVuZENoaWxkKFZpZXcpO1xyXG5cclxuICAgICAgICAgICAgaGlkZVNwbGl0dGVyLkJvZHkuQXBwZW5kQ2hpbGRyZW4oKENvbnRyb2wpUGFnZXMsIHBhbmVsKTtcclxuXHJcbiAgICAgICAgICAgIGJhc2UuT25TaG93aW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblNob3dlZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXaW5kb3dTdGF0ZSA9IFdpbmRvd1N0YXRlVHlwZS5NYXhpbWl6ZWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBBbGxvd1NpemVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEFsbG93TW92ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoaWRlU3BsaXR0ZXIuU2xpZGVyVmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBMaW5rY2hpbGRyZW5Ub0Zvcm0oVmlldywgaGlkZVNwbGl0dGVyKTtcclxuXHJcbiAgICAgICAgICAgIGJhc2UuT25TaG93ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgRXhwcmVzc0NyYWZ0O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgRXhwcmVzc0NyYWZ0RGVtb1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvZ3JhbVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNldHRpbmdzLkFsbG93Q2xvc2VXaXRob3V0UXVlc3Rpb24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgQXBwbGljYXRpb24uUnVuKG5ldyBmcm1IdWIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
