/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.2.1
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
                page.AddRibbonGroups([new ExpressCraft.RibbonGroup.$ctor1("Actions", System.Array.init([($t = new ExpressCraft.RibbonButton("Save"), $t.Icon = ExpressCraftDemo.Images.x32x32Save, $t), ($t = new ExpressCraft.RibbonButton("Close"), $t.Icon = ExpressCraftDemo.Images.x32x32Close, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmEntity.f1), $t)], ExpressCraft.RibbonButton))]);
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

                page.AddRibbonGroups([new ExpressCraft.RibbonGroup.$ctor1("Actions", [($t = new ExpressCraft.RibbonButton("Add Row"), $t.Icon = ExpressCraftDemo.Images.x32x32New, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f1), $t), ($t = new ExpressCraft.RibbonButton("Add 1000 Row's"), $t.BeginGroup = true, $t.Icon = ExpressCraftDemo.Images.x32x32New, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f2), $t), ($t = new ExpressCraft.RibbonButton("Add String Column"), $t.Icon = ExpressCraftDemo.Images.x32x32Text, $t.BeginGroup = true, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f3), $t), ($t = new ExpressCraft.RibbonButton("Add Date Column"), $t.BeginGroup = true, $t.Icon = ExpressCraftDemo.Images.x32x32Date, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f4), $t), ($t = new ExpressCraft.RibbonButton("Add Integer Column"), $t.BeginGroup = true, $t.Icon = ExpressCraftDemo.Images.x32x32Data, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f5), $t), ($t = new ExpressCraft.RibbonButton("Add Long Column"), $t.BeginGroup = true, $t.Icon = ExpressCraftDemo.Images.x32x32Data, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f6), $t), ($t = new ExpressCraft.RibbonButton("Add Decimal Column"), $t.BeginGroup = true, $t.Icon = ExpressCraftDemo.Images.x32x32Currency, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f7), $t), ($t = new ExpressCraft.RibbonButton("Auto Column Width"), $t.Icon = ExpressCraftDemo.Images.x32x32Columns, $t.BeginGroup = true, $t.OnItemClick = Bridge.fn.bind(this, $asm.$.ExpressCraftDemo.frmHub.f8), $t)])]);

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

    Bridge.define("ExpressCraftDemo.Images", {
        statics: {
            fields: {
                x32x32New: null,
                x32x32Text: null,
                x32x32Date: null,
                x32x32Data: null,
                x32x32Currency: null,
                x32x32Columns: null,
                x32x32Save: null,
                x32x32Close: null
            },
            ctors: {
                init: function () {
                    this.x32x32New = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD10RVh0VGl0bGUATmV3O1BhZ2U7QmFycztSaWJib247U3RhbmRhcmQ7SXRlbTtCbGFuaztEZWZhdWx0O0VtcHR5OxMEUu0AAABzSURBVHhe7c4xCoBADETRPV/OlTZH2KOlEjyEFnFtgwpZlrGZgd8Or0XEr70CCCBAVaPYNpJRe2gOUNmNMLOz9y7pCwdw94QAA8YyAg/ICDQgI44bAQdkhKoKAvDVvhpQxk0BCCCAAAIIIICARVUA+Ai4ADJ6HSY/hGadAAAAAElFTkSuQmCC";
                    this.x32x32Text = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZ0RVh0VGl0bGUAVGV4dDtQYWdlO1JlcG9ydHZhYQAAAACASURBVHhe7dexCYAwEIVh5wu4lKTNCNnDZa4SHEKL89IeKpyEp8IL/G34eEUgg6q+2ncBBOScNdhiJWs46RkgchqilLLXWpO7CwcQEYcAA+x4BB7gEWiAR2wNAQd4hAESAnDX2hsQxv0fME5zpD4ALsAFuAAX4FNMQM/4M7qKgAPfWMVvJ1VUSAAAAABJRU5ErkJggg==";
                    this.x32x32Date = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB10RVh0VGl0bGUAQ2FsZW5kYXI7U2NoZWR1bGVyO1ZpZXeFqTJSAAAAW0lEQVR4Xu3XsQkAIAwF0SzoUk7ldhGLELFRgmKKKw5EEF7xG0VVv5YbUGrTURTg7/MDXDwl63nX6ftjgBUFWAHA0/IDZOr6XToAAEYIgBGyAQCMEAAj5G8IoAOlW4QMCZMhGgAAAABJRU5ErkJggg==";
                    this.x32x32Data = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADB0RVh0VGl0bGUAREI7U291cmNlO1N0b3I7ZGF0YXNvdXJjZTtEYXRhYmFzZTtBZGQ7TmV3Ivv6ywAAARlJREFUeF7t1TFqhEAYBeAptl+w2xuk2MIzLFrGvUZKSWWTIsET2OUmCzYp0orY5RKmUbAIOHm7PGFBQX5mhmHB4iv8cWYe6FOltfZqNtgC/H6/3tvDCVL4hBJ+oIU/ajkreU8KJ65VJA5whDeoQJNUxT2O0gBnaEBb0sBZEICH29VIAnQOAnSSAIODAIP3AN4fgfeX8KFqmEFi8UOUQCatYQ3vEBl8iiPuUZvUsIcvKOAFYniCAHYUcBbznoJr+oet4eggwOirhmripYbX/Z4/Lppu13meX2cTtzUUBHBTQ0EANzU0CyA322spAGcTq39DHiYjrqH7AKyhzwAgqKHgHQAFqy2YHCCESFpDrgmFAcwtHLAaYAvwD8BJeZf39YQhAAAAAElFTkSuQmCC";
                    this.x32x32Currency = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB90RVh0VGl0bGUAQ3VycmVuY3k7RG9sbGFyO0J1Y2s7RXVyb/jzRY8AAAJ6SURBVHhexdZPSFRRFMfxUwOvwYxykZtIoWVkBUKbglZKQgbqjJsxoo0bd0FuykUtgrFFC/+0jCCmhbNxKblJAlsYRaQiQm9IaZeQEjpi3b6Lo8Rwz9O5I7T4zOJxzu/9mHnvzZO1d/d8IvSigBhlbGBRj2V1RmrhnBPfQBeW4ZLoTPdhFkghD1elPFK1F9CTB8rXWiADZ/iKx8ihHwVjLhNaIMKKEVpAumKxyZhdRRRSIGcELvwT2IdPmMNTOENfSIEJI6wfguv4A3cAxZACJU9QB9IQNOCc6oBLUAopsOUJegBRt9CvHsElKA++fi4HtFdg3RM0DVHP8EbNembXMIabaAopsOQJbYGovQU97tQmnnyYfthIWC8KiFHGBhb1WBaRUcC8COdxBYJOzKl5OMS4QEgXluGS6Ey3UcC8DccgSGMKDr8x+e3tYDMBebgq5ZGCYN8H0TauYvfrP4Pjupx08nGcTCpRWUCQhfP4hSG0oAERixkj+Cdeog0R7uMVyp7ZTGUBwTBcgh9z00OnWVzxBL5HI8Tjs2d+FZHv73gEzjDKUg7O4xIENzCAekziDhaMnT7rhaTHeCHpZGnCCBM16bkGLEVvARUhhyJibOMsSyUjrBWCU2g7YIFSRQEbw7u2jLCPaIaoI+jFIpyhHFJgHc6wiRe4DFEnMHuYBZbg9jGOetyG4OLh/QT2RfjF8yCagaAu4CI0Cti34TWcxwC6kEY7BO3WbRhSIDIeRHdxFFKh1ZhfxbGqC6gsnMd3TGmZOsxgx5jNQoIKqOHQPyPdlVoLpDACV6VRpEIKWHqqeCHJQFRAAVuEHIqIsa1iPZZLfCXj47/6C/mA3BgM9soUAAAAAElFTkSuQmCC";
                    this.x32x32Columns = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJ0RVh0VGl0bGUAQ29sdW1uO0dyaWQ74YXzFAAAAEJJREFUeF7t0iEOACAMBEEe338fwfAABK0YcUlNkxWzkrTuHgKqKg87f0+/IwO+blQAAwwwwAADDDDAAAMMMNA6ARty0kXERUW1agAAAABJRU5ErkJggg";
                    this.x32x32Save = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAt0RVh0VGl0bGUAU2F2ZTv56PkJAAAAj0lEQVR4Xu3XywnEMAxFUXVmyEq1pJ0UMnWkD4PKULTIIgqMGGzl4+EF7i48zsIYTKr6aA4AwDJ/irVaeohO6a/Z5/7ft0sEEEvTAT6JANoBIMvtfNtMAAAAQNyfA+LcXhMgux4AAJNFzWfA704tAOoD+IYEAAAAAJx4EfEwV3G9AVAjAFtyIUAsftXTDIANWgtqUyFPQYIAAAAASUVORK5CYII=";
                    this.x32x32Close = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB10RVh0VGl0bGUAQ2xvc2U7RXhpdDtCYXJzO1JpYmJvbjtGA7noAAAA90lEQVR4Xu3XQcrCMBCG4X/V+yhKpbj8b+L1LGgWOYuHsOgF0jjIyCyKhneCdGEX33a+JyFM9S/nPGuegMvhP8+RnwAsgFQLuEv2kugABEknuXGAlW8V2CiClDc6e6MIBEiSznaAIUj5K3oTI72Bow2yKIKUN5KT9w30hijeRFBkoZwAFPFmcAQnBwB4E5NyjZUjAEeAkwMAQIByAAAIXl4PCB8AsRLAyznCDwjgEUY/gG+4HmxMAAAbrrAnAACcnGzMIgC+9rNnY1LAKNlNB1k5RLSez/EgWYPyCULhK8nV+wYG1Vs5Q7RWTgGW9O0fpcv/ggUwax7deyAQitY//QAAAABJRU5ErkJggg==";
                }
            }
        }
    });

    Bridge.define("ExpressCraftDemo.Program", {
        main: function Main () {
            var $t;
            ExpressCraft.Settings.AllowCloseWithoutQuestion = true;
            if (ExpressCraft.Helper.NotDesktop) {
                document.head.appendChild(($t = document.createElement("meta"), $t.name = "viewport", $t.content = "width=device-width,maximum-scale=1,minimum-scale=1", $t));
            }

            ExpressCraft.Application.Run(new ExpressCraftDemo.frmHub());
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJFeHByZXNzQ3JhZnREZW1vLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJmcm1EaWFsb2dzLmNzIiwiZnJtRW50aXR5LmNzIiwiZnJtSHViLmNzIiwiUHJvZ3JhbS5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O2dCQWFZQSxJQUFJQTtvQkFFQUEsbUJBQWNBO29CQUNkQTtvQkFDQUE7OztnQkFHSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDcUJBQSxxQkFBZ0JBO2dCQUNoQkE7O2dCQUVBQSxZQUFZQSxJQUFJQTs7Z0JBRWhCQSxJQUFHQTtvQkFFQ0E7b0JBQ0FBLGFBQVFBLElBQUlBOztvQkFJWkEsYUFBUUEsSUFBSUEsMkJBQWNBOztnQkFFOUJBLFdBQVdBLElBQUlBO2dCQUNmQSxzQkFBcUJBLElBQUlBLDJDQUF1QkEsbUJBQzVDQSxVQUFJQSw2Q0FBOEJBLHlDQUNsQ0EsVUFBSUEsOENBQStCQSxzREFBa0NBO2dCQUl6RUEsK0NBQXFCQTs7Z0JBRXJCQSxtQkFBWUEsWUFBU0E7Ozs7Ozs7Ozs7Ozs7OztZQTdDckJBO1lBQ0FBLElBQUdBLG1EQUNDQSx5QkFBcUNBO2dCQUVyQ0EsdUJBQW9DQTs7Ozs7Ozs7Ozs7Ozs7WUFTeENBLElBQUlBO2dCQUNBQSx1QkFBb0NBLHlCQUFxQ0Esb0NBQ3JFQSxxQ0FBd0JBOzs7WUFFaENBOzs7Ozs7Ozs7Ozs7O1lBb0NBQSxJQUFJQTtnQkFFQUEsbUJBQWNBO2dCQUNkQTtnQkFDQUE7OztZQUdKQTs7Ozs7Ozs7Ozs7Ozs7WUFRQUE7O1lBRUFBLFlBQVlBLElBQUlBOztZQUVoQkEsSUFBR0E7Z0JBRUNBLGVBQWVBLElBQUlBOztnQkFJbkJBLGVBQWVBLElBQUlBOzs7WUFHdkJBLG9CQUNJQSxJQUFJQSxtQ0FFQUEsSUFBSUEsMkJBRUFBLElBQUlBLG9EQUNBQSxVQUFJQSx3Q0FHQUEsSUFBSUEsOENBRUFBLElBQUlBLG9FQUNSQSxJQUFJQSwrQ0FF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QVVBO29CQUV0QkE7O2dCQUVKQTs7O3NCQU0wQkE7WUFDOUJBLGVBQVVBOztzQkFJQ0E7WUFDWEEsZUFBVUE7O3NCQUtDQTtZQUNYQSxlQUFVQTs7c0JBS0NBO1lBQ1hBLGVBQVVBOztzQkFLQ0E7WUFDWEEsZUFBVUE7O3NCQU9DQTtZQUNYQSxJQUFHQTtnQkFFQ0E7Z0JBQ0FBOztnQkFJQUE7Z0JBQ0FBOzs7WUFHSkE7OztZQTFJQUE7WUFDQUE7O3VCQTBKS0E7WUFFVEEsSUFBSUE7O3VCQVVLQTtZQUVUQSxJQUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQzdNWkE7WUFDQUEsSUFBSUE7Z0JBRUFBLDBCQUNJQTs7O1lBR1JBLDZCQUFnQkEsSUFBSUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgRXhwcmVzc0NyYWZ0O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgRXhwcmVzc0NyYWZ0RGVtb1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtRGlhbG9ncyA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblNob3dlZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFdpbmRvd1N0YXRlID0gV2luZG93U3RhdGVUeXBlLk1heGltaXplZDtcclxuICAgICAgICAgICAgICAgIEFsbG93U2l6ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgQWxsb3dNb3ZlQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhc2UuT25TaG93ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgRXhwcmVzc0NyYWZ0O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgRXhwcmVzc0NyYWZ0RGVtb1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtRW50aXR5IDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBMYXlvdXRDb250YWluZXIgQ3VzdG9tZXJEYXRhO1xyXG4gICAgICAgIHB1YmxpYyBJUGFnZXMgUGFnZXM7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSGlkZSBUaWxlIENvbnRyb2wgTWVudVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25Mb3N0Rm9jdXMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Pbkxvc3RGb2N1cygpO1xyXG4gICAgICAgICAgICBpZihQYWdlcyBpcyBUaWxlQ29udHJvbCAmJlxyXG4gICAgICAgICAgICAgICAgUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID09IFRpbGVWaWV3U3RhdGUuVmlzaWJsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID0gVGlsZVZpZXdTdGF0ZS5IaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSGlkZSBvciBTaG93XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBPbk1lbnVDbGljaygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoUGFnZXMgaXMgVGlsZUNvbnRyb2wpXHJcbiAgICAgICAgICAgICAgICBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPSBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPT0gVGlsZVZpZXdTdGF0ZS5IaWRkZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIFRpbGVWaWV3U3RhdGUuVmlzaWJsZSA6IFRpbGVWaWV3U3RhdGUuSGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5Pbk1lbnVDbGljaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZybUVudGl0eSgpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTdGFydFBvc2l0aW9uID0gRm9ybVN0YXJ0UG9zaXRpb24uQ2VudGVyO1xyXG4gICAgICAgICAgICB0aGlzLlRleHQgPSBcIk5ldyBFbnRpdHlcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuU2l6ZSA9IG5ldyBWZWN0b3IyKDU0NSwgMzc0KTsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTaG93TWVudSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBQYWdlcyA9IG5ldyBUaWxlQ29udHJvbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGFnZXMgPSBuZXcgUmliYm9uQ29udHJvbChSaWJib25Db250cm9sLlJpYmJvblR5cGUuQ29tcGFjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHBhZ2UgPSBuZXcgUmliYm9uUGFnZShcIkVudGl0eVwiKTtcclxuICAgICAgICAgICAgcGFnZS5BZGRSaWJib25Hcm91cHMobmV3IFJpYmJvbkdyb3VwKFwiQWN0aW9uc1wiLCBuZXcgUmliYm9uQnV0dG9uW10ge1xyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIlNhdmVcIikgeyBJY29uID0gSW1hZ2VzLngzMngzMlNhdmUgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJDbG9zZVwiKSB7IEljb24gPSBJbWFnZXMueDMyeDMyQ2xvc2UsIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIFBhZ2VzLkFkZFJpYmJvblBhZ2VzKHBhZ2UpO1xyXG5cclxuICAgICAgICAgICAgQXBwZW5kQ2hpbGQoKENvbnRyb2wpUGFnZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBGdWxsIFNjcmVlbiB3aW5kb3cgU3RhdGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uU2hvd2VkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFdpbmRvd1N0YXRlID0gV2luZG93U3RhdGVUeXBlLk1heGltaXplZDtcclxuICAgICAgICAgICAgICAgIEFsbG93U2l6ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgQWxsb3dNb3ZlQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJhc2UuT25TaG93ZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gU2V0dXAgUGFuZWwgd2l0aCBsYXlvdXRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uU2hvd2luZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uU2hvd2luZygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gbmV3IENvbnRyb2woKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5Cb3VuZHMgPSBuZXcgVmVjdG9yNCgwLCAwLCBcIjEwMCVcIiwgXCIxMDAlXCIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLkJvdW5kcyA9IG5ldyBWZWN0b3I0KDAsIDEyOSwgXCIxMDAlXCIsIFwiKDEwMCUgLSAxMjlweClcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEN1c3RvbWVyRGF0YSA9XHJcbiAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dEdyb3VwKFwiRW50aXR5IERldGFpbHM6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOYW1lOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhc3ROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJMYXN0IE5hbWVcIiwgMC41bSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJGaXJzdCBOYW1lXCIsIDAuNW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFVzZVBsYWNlaG9sZGVyID0gdHJ1ZSwgSGlkZVRpbnlMYWJlbCA9IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFkZHJlc3M6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRkcmVzc0xpbmUxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJBZGRyZXNzIExpbmUgMVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBZGRyZXNzTGluZTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRJbnB1dCgpLCBcIkFkZHJlc3MgTGluZSAyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxvY2FsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJDaXR5IG9yIFN1YnVyYlwiLCAwLjRtKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiU3RhdGVcIiwgMC4zbSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUG9zdGNvZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRJbnB1dCgpLCBcIlBvc3Rjb2RlXCIsIDAuM20pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFVzZVBsYWNlaG9sZGVyID0gdHJ1ZSwgSGlkZVRpbnlMYWJlbCA9IHRydWUsIE5vR2FwID0gdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgQ3VzdG9tZXJEYXRhLkFwcGx5KHBhbmVsKTtcclxuXHJcbiAgICAgICAgICAgIEFwcGVuZENoaWxkKHBhbmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgRXhwcmVzc0NyYWZ0O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgRXhwcmVzc0NyYWZ0RGVtb1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtSHViIDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBJUGFnZXMgUGFnZXM7XHJcbiAgICAgICAgcHVibGljIEdyaWRWaWV3IFZpZXc7XHJcbiAgICAgICAgcHVibGljIFNwbGl0SGlkZUNvbnRyb2xDb250YWluZXIgaGlkZVNwbGl0dGVyO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEhpZGUgVGlsZSBDb250cm9sIE1lbnVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uTG9zdEZvY3VzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuT25Mb3N0Rm9jdXMoKTtcclxuICAgICAgICAgICAgaWYgKFBhZ2VzIGlzIFRpbGVDb250cm9sICYmXHJcbiAgICAgICAgICAgICAgICBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPT0gVGlsZVZpZXdTdGF0ZS5WaXNpYmxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPSBUaWxlVmlld1N0YXRlLkhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBIaWRlIG9yIFNob3dcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIE9uTWVudUNsaWNrKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChQYWdlcyBpcyBUaWxlQ29udHJvbClcclxuICAgICAgICAgICAgICAgIFBhZ2VzLkFzPFRpbGVDb250cm9sPigpLlZpZXdTdGF0ZSA9IFBhZ2VzLkFzPFRpbGVDb250cm9sPigpLlZpZXdTdGF0ZSA9PSBUaWxlVmlld1N0YXRlLkhpZGRlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgVGlsZVZpZXdTdGF0ZS5WaXNpYmxlIDogVGlsZVZpZXdTdGF0ZS5IaWRkZW47XHJcblxyXG4gICAgICAgICAgICBiYXNlLk9uTWVudUNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRDb2x1bW4oRGF0YVR5cGUgZGF0YSlcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBkdCA9IFZpZXcuRGF0YVNvdXJjZTtcclxuICAgICAgICAgICAgaWYgKGR0ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBkdCA9IG5ldyBEYXRhVGFibGUoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihkdC5Sb3dDb3VudCA+IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IE1lc3NhZ2VCb3hGb3JtKFwiWW91IGNhbm5vdCBhZGQgY29sdW1ucyB3aGVuIHRoZXJlIGlzIGRhdGEsIFdvdWxkIHlvdSBsaWtlIHRvIGNsZWFyIHZpZXc/XCIsIE1lc3NhZ2VCb3hMYXlvdXQuUXVlc3Rpb24pLlNob3dEaWFsb2coKG5ldyBEaWFsb2dSZXN1bHQoRGlhbG9nUmVzdWx0RW51bS5ZZXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5DbGVhclZpZXcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5SZW5kZXJHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0cmluZyBuYW1lID0gXCJDb2x1bW4gXCIgKyBkdC5Db2x1bW5Db3VudDtcclxuICAgICAgICAgICAgZHQuQWRkQ29sdW1uKG5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgVmlldy5EYXRhU291cmNlID0gZHQ7XHJcblxyXG4gICAgICAgICAgICBWaWV3LkFkZENvbHVtbihuZXcgR3JpZFZpZXdDb2x1bW4oVmlldykgeyBDYXB0aW9uID0gbmFtZSwgQ29sdW1uID0gU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5MYXN0PGdsb2JhbDo6RXhwcmVzc0NyYWZ0LkRhdGFDb2x1bW4+KGR0LkNvbHVtbnMpLCBWaXNpYmxlID0gdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgUmFuZG9tIHJuZyA9IG5ldyBSYW5kb20oKTtcclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkUm93KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBuZXcgb2JqZWN0W1ZpZXcuRGF0YVNvdXJjZS5Db2x1bW5Db3VudF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IFZpZXcuRGF0YVNvdXJjZS5Db2x1bW5Db3VudDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YXR5cGUgPSBWaWV3LkRhdGFTb3VyY2UuQ29sdW1uc1tpXS5EYXRhVHlwZTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhdHlwZSA9PSBEYXRhVHlwZS5EYXRlVGltZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbaV0gPSBEYXRlVGltZS5Ob3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhdHlwZSA9PSBEYXRhVHlwZS5TdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gVmlldy5EYXRhU291cmNlLkNvbHVtbnNbaV0uRmllbGROYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YXR5cGUgPT0gRGF0YVR5cGUuSW50ZWdlciB8fCBkYXRhdHlwZSA9PSBEYXRhVHlwZS5Mb25nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IHJuZy5OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gcm5nLk5leHREb3VibGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVmlldy5EYXRhU291cmNlLkFkZFJvdyhvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZybUh1YigpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlRleHQgPSBcIkh1YiAtIEV4cHJlc3NDcmFmdCBEZW1vXCI7XHJcblxyXG4gICAgICAgICAgICBpZihIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2hvd01lbnUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgUGFnZXMgPSBuZXcgVGlsZUNvbnRyb2woKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFBhZ2VzID0gbmV3IFJpYmJvbkNvbnRyb2woUmliYm9uQ29udHJvbC5SaWJib25UeXBlLkNvbXBhY3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFnZSA9IG5ldyBSaWJib25QYWdlKFwiR3JpZCBWaWV3XCIpO1xyXG5cclxuICAgICAgICAgICAgVmlldyA9IG5ldyBHcmlkVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgIFZpZXcuU2V0Qm91bmRzRnVsbCgpO1xyXG5cclxuICAgICAgICAgICAgVmlldy5Vc2VFZGl0Rm9ybSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgcGFnZS5BZGRSaWJib25Hcm91cHMoXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uR3JvdXAoXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIFJvd1wiKSB7IEljb24gPSBJbWFnZXMueDMyeDMyTmV3LCBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVmlldy5EYXRhU291cmNlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBNZXNzYWdlQm94Rm9ybShcIlBsZWFzZSBhZGQgYSBjb2x1bW5cIiwgTWVzc2FnZUJveExheW91dC5JbmZvcm1hdGlvbikuU2hvd0RpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFJvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgMTAwMCBSb3cnc1wiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIEljb24gPSBJbWFnZXMueDMyeDMyTmV3LFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVmlldy5EYXRhU291cmNlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTWVzc2FnZUJveEZvcm0oXCJQbGVhc2UgYWRkIGEgY29sdW1uXCIsIE1lc3NhZ2VCb3hMYXlvdXQuSW5mb3JtYXRpb24pLlNob3dEaWFsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3LkRhdGFTb3VyY2UuQmVnaW5EYXRhVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IDEwMDA7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRSb3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuRGF0YVNvdXJjZS5FbmREYXRhVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBTdHJpbmcgQ29sdW1uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBJY29uID0gSW1hZ2VzLngzMngzMlRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgQmVnaW5Hcm91cCA9IHRydWUsIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRDb2x1bW4oRGF0YVR5cGUuU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIERhdGUgQ29sdW1uXCIpIHsgQmVnaW5Hcm91cCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgSWNvbiA9IEltYWdlcy54MzJ4MzJEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRDb2x1bW4oRGF0YVR5cGUuRGF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIEludGVnZXIgQ29sdW1uXCIpIHsgQmVnaW5Hcm91cCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgSWNvbiA9IEltYWdlcy54MzJ4MzJEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRDb2x1bW4oRGF0YVR5cGUuSW50ZWdlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgTG9uZyBDb2x1bW5cIikgeyBCZWdpbkdyb3VwID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBJY29uID0gSW1hZ2VzLngzMngzMkRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZENvbHVtbihEYXRhVHlwZS5Mb25nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBEZWNpbWFsIENvbHVtblwiKSB7IEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIEljb24gPSBJbWFnZXMueDMyeDMyQ3VycmVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZENvbHVtbihEYXRhVHlwZS5EZWNpbWFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkF1dG8gQ29sdW1uIFdpZHRoXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWNvbiA9IEltYWdlcy54MzJ4MzJDb2x1bW5zLFxyXG4gICAgICAgICAgICAgICAgICAgIEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihWaWV3LkNvbHVtbkF1dG9XaWR0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5Db2x1bW5BdXRvV2lkdGggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlci5DYXB0aW9uID0gXCJBdXRvIENvbHVtbiBXaWR0aFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5Db2x1bW5BdXRvV2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyLkNhcHRpb24gPSBcIk1hbnVhbCBDb2x1bW4gV2lkdGhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5SZW5kZXJHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgUGFnZXMuQWRkUmliYm9uUGFnZXMocGFnZSk7ICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uU2hvd2luZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoaWRlU3BsaXR0ZXIgPSBuZXcgU3BsaXRIaWRlQ29udHJvbENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBoaWRlU3BsaXR0ZXIuU2V0Qm91bmRzRnVsbCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5ld0VuID0gbmV3IFNpbXBsZUJ1dHRvbigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFRleHQgPSBcIk5ldyBFbnRpdHlcIixcclxuICAgICAgICAgICAgICAgIFdpZHRoID0gXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBIZWlnaHQgPSA0NSxcclxuICAgICAgICAgICAgICAgIEl0ZW1DbGljayA9IChzZW5kZXIpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IGZybUVudGl0eSgpLlNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdEaWFsb2cgPSBuZXcgU2ltcGxlQnV0dG9uKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVGV4dCA9IFwiRGlhbG9nc1wiLFxyXG4gICAgICAgICAgICAgICAgV2lkdGggPSBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIEhlaWdodCA9IDQ1LFxyXG4gICAgICAgICAgICAgICAgVG9wID0gNDYsXHJcbiAgICAgICAgICAgICAgICBJdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBmcm1EaWFsb2dzKCkuU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbmV3RW4uU3R5bGUuRm9udFNpemUgPSBcIjE0cHhcIjtcclxuICAgICAgICAgICAgbmV3RGlhbG9nLlN0eWxlLkZvbnRTaXplID0gXCIxNHB4XCI7XHJcblxyXG4gICAgICAgICAgICBoaWRlU3BsaXR0ZXIuUGFuZWwuQXBwZW5kQ2hpbGRyZW4obmV3RW4sIG5ld0RpYWxvZyk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgQXBwZW5kQ2hpbGQoaGlkZVNwbGl0dGVyKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IG5ldyBDb250cm9sKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLkJvdW5kcyA9IG5ldyBWZWN0b3I0KDAsIDAsIFwiMTAwJVwiLCBcIjEwMCVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5Cb3VuZHMgPSBuZXcgVmVjdG9yNCgwLCAxMjksIFwiMTAwJVwiLCBcIigxMDAlIC0gMTI5cHgpXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYW5lbC5BcHBlbmRDaGlsZChWaWV3KTtcclxuXHJcbiAgICAgICAgICAgIGhpZGVTcGxpdHRlci5Cb2R5LkFwcGVuZENoaWxkcmVuKChDb250cm9sKVBhZ2VzLCBwYW5lbCk7XHJcblxyXG4gICAgICAgICAgICBiYXNlLk9uU2hvd2luZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25TaG93ZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgV2luZG93U3RhdGUgPSBXaW5kb3dTdGF0ZVR5cGUuTWF4aW1pemVkO1xyXG5cclxuICAgICAgICAgICAgaWYgKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQWxsb3dTaXplQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBBbGxvd01vdmVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGlkZVNwbGl0dGVyLlNsaWRlclZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgTGlua2NoaWxkcmVuVG9Gb3JtKFZpZXcsIGhpZGVTcGxpdHRlcik7XHJcblxyXG4gICAgICAgICAgICBiYXNlLk9uU2hvd2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgRXhwcmVzc0NyYWZ0O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgRXhwcmVzc0NyYWZ0RGVtb1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvZ3JhbVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNldHRpbmdzLkFsbG93Q2xvc2VXaXRob3V0UXVlc3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERvY3VtZW50LkhlYWQuQXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEhUTUxNZXRhRWxlbWVudCgpIHsgTmFtZSA9IFwidmlld3BvcnRcIiwgQ29udGVudCA9IFwid2lkdGg9ZGV2aWNlLXdpZHRoLG1heGltdW0tc2NhbGU9MSxtaW5pbXVtLXNjYWxlPTFcIiB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQXBwbGljYXRpb24uUnVuKG5ldyBmcm1IdWIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
