/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 17.4.0
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
                var $t;
                this.$initialize();
                ExpressCraft.Form.ctor.call(this);
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

                this.AppendChild(Bridge.cast(this.Pages, ExpressCraft.Control));
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

                this.CustomerData = new ExpressCraft.LayoutContainer.ctor([new ExpressCraft.LayoutColumn([new ExpressCraft.LayoutGroup.$ctor1("Entity Details:", [($t = new ExpressCraft.LayoutRow.$ctor2("Name:", [new ExpressCraft.LayoutControl.$ctor2("LastName", new ExpressCraft.TextInput.ctor(), "Last Name", System.Decimal(0.5)), new ExpressCraft.LayoutControl.$ctor2("FirstName", new ExpressCraft.TextInput.ctor(), "First Name", System.Decimal(0.5))]), $t.UsePlaceholder = true, $t.HideTinyLabel = true, $t), ($t = new ExpressCraft.LayoutRow.$ctor2("Address:", [new ExpressCraft.LayoutControl.$ctor2("AddressLine1", new ExpressCraft.TextInput.ctor(), "Address Line 1"), new ExpressCraft.LayoutControl.$ctor2("AddressLine2", new ExpressCraft.TextInput.ctor(), "Address Line 2"), new ExpressCraft.LayoutControl.$ctor2("Locality", new ExpressCraft.TextInput.ctor(), "City or Suburb", System.Decimal(0.4)), new ExpressCraft.LayoutControl.$ctor2("State", new ExpressCraft.TextInput.ctor(), "State", System.Decimal(0.3)), new ExpressCraft.LayoutControl.$ctor2("Postcode", new ExpressCraft.TextInput.ctor(), "Postcode", System.Decimal(0.3))]), $t.UsePlaceholder = true, $t.HideTinyLabel = true, $t.NoGap = true, $t)])])]);

                this.CustomerData.Apply(panel);

                this.AppendChild(panel);
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
                var $t;
                this.$initialize();
                ExpressCraft.Form.ctor.call(this);
                this.Text = "Hub - ExpressCraft Demo";

                if (ExpressCraft.Helper.NotDesktop) {
                    this.ShowMenu = true;
                    this.Pages = new ExpressCraft.TileControl();
                } else {
                    this.Pages = new ExpressCraft.RibbonControl(ExpressCraft.RibbonControl.RibbonType.Compact);
                }

                var page = new ExpressCraft.RibbonPage("Grid View");

                this.View = new ExpressCraft.GridView.$ctor1(false);
                ExpressCraft.Helper.SetBoundsFull(this.View);
                this.View.ShowFindPanel();
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
                        obj[System.Array.index(i, obj)] = Bridge.box(ExpressCraftDemo.frmHub.rng.Next(), System.Int32);
                    } else {
                        obj[System.Array.index(i, obj)] = Bridge.box(ExpressCraftDemo.frmHub.rng.NextDouble(), System.Double, System.Double.format, System.Double.getHashCode);
                    }
                }

                this.View.DataSource.AddRow$1(obj);
            },
            OnShowing: function () {
                var $t;
                this.hideSplitter = new ExpressCraft.SplitHideControlContainer();
                ExpressCraft.Helper.SetBoundsFull(this.hideSplitter);

                var newEn = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "New Entity", $t.Width = "100%", $t.Height = 45, $t.ItemClick = $asm.$.ExpressCraftDemo.frmHub.f10, $t);

                var newDialog = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "Dialogs", $t.Width = "100%", $t.Height = 45, $t.Top = 46, $t.ItemClick = $asm.$.ExpressCraftDemo.frmHub.f11, $t);

                newEn.Style.fontSize = "14px";
                newDialog.Style.fontSize = "14px";

                ExpressCraft.Helper.AppendChildren(this.hideSplitter.Panel, [newEn, newDialog]);


                this.AppendChild(this.hideSplitter);

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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJFeHByZXNzQ3JhZnREZW1vLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJmcm1EaWFsb2dzLmNzIiwiZnJtRW50aXR5LmNzIiwiZnJtSHViLmNzIiwiUHJvZ3JhbS5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O2dCQWFZQSxJQUFJQTtvQkFFQUEsbUJBQWNBO29CQUNkQTtvQkFDQUE7OztnQkFHSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDcUJBQSxxQkFBZ0JBO2dCQUNoQkE7O2dCQUVBQSxZQUFZQSxJQUFJQTs7Z0JBRWhCQSxJQUFHQTtvQkFFQ0E7b0JBQ0FBLGFBQVFBLElBQUlBOztvQkFJWkEsYUFBUUEsSUFBSUEsMkJBQWNBOztnQkFFOUJBLFdBQVdBLElBQUlBO2dCQUNmQSxzQkFBcUJBLElBQUlBLDJDQUF1QkEsbUJBQzVDQSxVQUFJQSw2Q0FBOEJBLHlDQUNsQ0EsVUFBSUEsOENBQStCQSxzREFBa0NBO2dCQUl6RUEsK0NBQXFCQTs7Z0JBRXJCQSxpQkFBWUEsWUFBU0E7Ozs7Ozs7Ozs7Ozs7OztnQkE3Q3JCQTtnQkFDQUEsSUFBR0EsbURBQ0NBLHlCQUFxQ0E7b0JBRXJDQSx1QkFBb0NBOzs7Ozs7Ozs7Ozs7OztnQkFTeENBLElBQUlBO29CQUNBQSx1QkFBb0NBLHlCQUFxQ0Esb0NBQ3JFQSxxQ0FBd0JBOzs7Z0JBRWhDQTs7Ozs7Ozs7Ozs7OztnQkFvQ0FBLElBQUlBO29CQUVBQSxtQkFBY0E7b0JBQ2RBO29CQUNBQTs7O2dCQUdKQTs7Ozs7Ozs7Ozs7Ozs7Z0JBUUFBOztnQkFFQUEsWUFBWUEsSUFBSUE7O2dCQUVoQkEsSUFBR0E7b0JBRUNBLGVBQWVBLElBQUlBOztvQkFJbkJBLGVBQWVBLElBQUlBOzs7Z0JBR3ZCQSxvQkFDSUEsSUFBSUEsbUNBRUFBLElBQUlBLDJCQUVBQSxJQUFJQSxvREFDQUEsVUFBSUEsd0NBR0FBLElBQUlBLDhDQUVBQSxJQUFJQSxrRUFDUkEs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Q25CQSxJQUFJQSx3REFBc0NBOztnQkFHMUNBO2dCQUNBQSxLQUFLQSxXQUFXQSxVQUFVQTtvQkFFdEJBOztnQkFFSkE7OztzQkFNMEJBO1lBQzlCQSxlQUFVQTs7c0JBSUNBO1lBQ1hBLGVBQVVBOztzQkFLQ0E7WUFDWEEsZUFBVUE7O3NCQUtDQTtZQUNYQSxlQUFVQTs7c0JBS0NBO1lBQ1hBLGVBQVVBOztzQkFPQ0E7WUFDWEEsSUFBR0E7Z0JBRUNBO2dCQUNBQTs7Z0JBSUFBO2dCQUNBQTs7O1lBR0pBOzs7WUExSUFBO1lBQ0FBOzt1QkEwSktBO1lBRVRBLElBQUlBOzt1QkFVS0E7WUFFVEEsSUFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUM3TVpBO1lBQ0FBLElBQUlBO2dCQUVBQSwwQkFDSUE7OztZQUdSQSw2QkFBZ0JBLElBQUlBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIEV4cHJlc3NDcmFmdDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEV4cHJlc3NDcmFmdERlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIGZybURpYWxvZ3MgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25TaG93ZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBXaW5kb3dTdGF0ZSA9IFdpbmRvd1N0YXRlVHlwZS5NYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgICAgICBBbGxvd1NpemVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEFsbG93TW92ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiYXNlLk9uU2hvd2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEV4cHJlc3NDcmFmdDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEV4cHJlc3NDcmFmdERlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIGZybUVudGl0eSA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGF5b3V0Q29udGFpbmVyIEN1c3RvbWVyRGF0YTtcclxuICAgICAgICBwdWJsaWMgSVBhZ2VzIFBhZ2VzO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEhpZGUgVGlsZSBDb250cm9sIE1lbnVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uTG9zdEZvY3VzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuT25Mb3N0Rm9jdXMoKTtcclxuICAgICAgICAgICAgaWYoUGFnZXMgaXMgVGlsZUNvbnRyb2wgJiZcclxuICAgICAgICAgICAgICAgIFBhZ2VzLkFzPFRpbGVDb250cm9sPigpLlZpZXdTdGF0ZSA9PSBUaWxlVmlld1N0YXRlLlZpc2libGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFBhZ2VzLkFzPFRpbGVDb250cm9sPigpLlZpZXdTdGF0ZSA9IFRpbGVWaWV3U3RhdGUuSGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEhpZGUgb3IgU2hvd1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgT25NZW51Q2xpY2soKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKFBhZ2VzIGlzIFRpbGVDb250cm9sKVxyXG4gICAgICAgICAgICAgICAgUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID0gUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID09IFRpbGVWaWV3U3RhdGUuSGlkZGVuID9cclxuICAgICAgICAgICAgICAgICAgICBUaWxlVmlld1N0YXRlLlZpc2libGUgOiBUaWxlVmlld1N0YXRlLkhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIGJhc2UuT25NZW51Q2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1FbnRpdHkoKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU3RhcnRQb3NpdGlvbiA9IEZvcm1TdGFydFBvc2l0aW9uLkNlbnRlcjtcclxuICAgICAgICAgICAgdGhpcy5UZXh0ID0gXCJOZXcgRW50aXR5XCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNpemUgPSBuZXcgVmVjdG9yMig1NDUsIDM3NCk7ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpZihIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2hvd01lbnUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgUGFnZXMgPSBuZXcgVGlsZUNvbnRyb2woKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFBhZ2VzID0gbmV3IFJpYmJvbkNvbnRyb2woUmliYm9uQ29udHJvbC5SaWJib25UeXBlLkNvbXBhY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwYWdlID0gbmV3IFJpYmJvblBhZ2UoXCJFbnRpdHlcIik7XHJcbiAgICAgICAgICAgIHBhZ2UuQWRkUmliYm9uR3JvdXBzKG5ldyBSaWJib25Hcm91cChcIkFjdGlvbnNcIiwgbmV3IFJpYmJvbkJ1dHRvbltdIHtcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJTYXZlXCIpIHsgSWNvbiA9IEltYWdlcy54MzJ4MzJTYXZlIH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQ2xvc2VcIikgeyBJY29uID0gSW1hZ2VzLngzMngzMkNsb3NlLCBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBQYWdlcy5BZGRSaWJib25QYWdlcyhwYWdlKTtcclxuXHJcbiAgICAgICAgICAgIEFwcGVuZENoaWxkKChDb250cm9sKVBhZ2VzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRnVsbCBTY3JlZW4gd2luZG93IFN0YXRlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblNob3dlZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBXaW5kb3dTdGF0ZSA9IFdpbmRvd1N0YXRlVHlwZS5NYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgICAgICBBbGxvd1NpemVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEFsbG93TW92ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBiYXNlLk9uU2hvd2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFNldHVwIFBhbmVsIHdpdGggbGF5b3V0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblNob3dpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5PblNob3dpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IG5ldyBDb250cm9sKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuQm91bmRzID0gbmV3IFZlY3RvcjQoMCwgMCwgXCIxMDAlXCIsIFwiMTAwJVwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5Cb3VuZHMgPSBuZXcgVmVjdG9yNCgwLCAxMjksIFwiMTAwJVwiLCBcIigxMDAlIC0gMTI5cHgpXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBDdXN0b21lckRhdGEgPVxyXG4gICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRHcm91cChcIkVudGl0eSBEZXRhaWxzOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTmFtZTpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYXN0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiTGFzdCBOYW1lXCIsIDAuNW0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZpcnN0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiRmlyc3QgTmFtZVwiLCAwLjVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBVc2VQbGFjZWhvbGRlciA9IHRydWUsIEhpZGVUaW55TGFiZWwgPSB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBZGRyZXNzOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFkZHJlc3NMaW5lMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiQWRkcmVzcyBMaW5lIDFcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRkcmVzc0xpbmUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJBZGRyZXNzIExpbmUgMlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0Q29udHJvbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMb2NhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dElucHV0KCksIFwiQ2l0eSBvciBTdWJ1cmJcIiwgMC40bSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dENvbnRyb2woXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRJbnB1dCgpLCBcIlN0YXRlXCIsIDAuM20pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXRDb250cm9sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBvc3Rjb2RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0SW5wdXQoKSwgXCJQb3N0Y29kZVwiLCAwLjNtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBVc2VQbGFjZWhvbGRlciA9IHRydWUsIEhpZGVUaW55TGFiZWwgPSB0cnVlLCBOb0dhcCA9IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIEN1c3RvbWVyRGF0YS5BcHBseShwYW5lbCk7XHJcblxyXG4gICAgICAgICAgICBBcHBlbmRDaGlsZChwYW5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEV4cHJlc3NDcmFmdDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEV4cHJlc3NDcmFmdERlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIGZybUh1YiA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSVBhZ2VzIFBhZ2VzO1xyXG4gICAgICAgIHB1YmxpYyBHcmlkVmlldyBWaWV3O1xyXG4gICAgICAgIHB1YmxpYyBTcGxpdEhpZGVDb250cm9sQ29udGFpbmVyIGhpZGVTcGxpdHRlcjtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBIaWRlIFRpbGUgQ29udHJvbCBNZW51XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPbkxvc3RGb2N1cygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uTG9zdEZvY3VzKCk7XHJcbiAgICAgICAgICAgIGlmIChQYWdlcyBpcyBUaWxlQ29udHJvbCAmJlxyXG4gICAgICAgICAgICAgICAgUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID09IFRpbGVWaWV3U3RhdGUuVmlzaWJsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGFnZXMuQXM8VGlsZUNvbnRyb2w+KCkuVmlld1N0YXRlID0gVGlsZVZpZXdTdGF0ZS5IaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSGlkZSBvciBTaG93XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBPbk1lbnVDbGljaygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoUGFnZXMgaXMgVGlsZUNvbnRyb2wpXHJcbiAgICAgICAgICAgICAgICBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPSBQYWdlcy5BczxUaWxlQ29udHJvbD4oKS5WaWV3U3RhdGUgPT0gVGlsZVZpZXdTdGF0ZS5IaWRkZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIFRpbGVWaWV3U3RhdGUuVmlzaWJsZSA6IFRpbGVWaWV3U3RhdGUuSGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5Pbk1lbnVDbGljaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkQ29sdW1uKERhdGFUeXBlIGRhdGEpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgZHQgPSBWaWV3LkRhdGFTb3VyY2U7XHJcbiAgICAgICAgICAgIGlmIChkdCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgZHQgPSBuZXcgRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoZHQuUm93Q291bnQgPiAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBNZXNzYWdlQm94Rm9ybShcIllvdSBjYW5ub3QgYWRkIGNvbHVtbnMgd2hlbiB0aGVyZSBpcyBkYXRhLCBXb3VsZCB5b3UgbGlrZSB0byBjbGVhciB2aWV3P1wiLCBNZXNzYWdlQm94TGF5b3V0LlF1ZXN0aW9uKS5TaG93RGlhbG9nKChuZXcgRGlhbG9nUmVzdWx0KERpYWxvZ1Jlc3VsdEVudW0uWWVzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuQ2xlYXJWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuUmVuZGVyR3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pICkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJpbmcgbmFtZSA9IFwiQ29sdW1uIFwiICsgZHQuQ29sdW1uQ291bnQ7XHJcbiAgICAgICAgICAgIGR0LkFkZENvbHVtbihuYW1lLCBkYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFZpZXcuRGF0YVNvdXJjZSA9IGR0O1xyXG5cclxuICAgICAgICAgICAgVmlldy5BZGRDb2x1bW4obmV3IEdyaWRWaWV3Q29sdW1uKFZpZXcpIHsgQ2FwdGlvbiA9IG5hbWUsIENvbHVtbiA9IFN5c3RlbS5MaW5xLkVudW1lcmFibGUuTGFzdDxEYXRhQ29sdW1uPihkdC5Db2x1bW5zKSwgVmlzaWJsZSA9IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFJhbmRvbSBybmcgPSBuZXcgUmFuZG9tKCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZFJvdygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gbmV3IG9iamVjdFtWaWV3LkRhdGFTb3VyY2UuQ29sdW1uQ291bnRdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBWaWV3LkRhdGFTb3VyY2UuQ29sdW1uQ291bnQ7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGF0eXBlID0gVmlldy5EYXRhU291cmNlLkNvbHVtbnNbaV0uRGF0YVR5cGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXR5cGUgPT0gRGF0YVR5cGUuRGF0ZVRpbWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gRGF0ZVRpbWUuTm93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YXR5cGUgPT0gRGF0YVR5cGUuU3RyaW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IFZpZXcuRGF0YVNvdXJjZS5Db2x1bW5zW2ldLkZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGF0eXBlID09IERhdGFUeXBlLkludGVnZXIgfHwgZGF0YXR5cGUgPT0gRGF0YVR5cGUuTG9uZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbaV0gPSBybmcuTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IHJuZy5OZXh0RG91YmxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFZpZXcuRGF0YVNvdXJjZS5BZGRSb3cob2JqKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1IdWIoKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5UZXh0ID0gXCJIdWIgLSBFeHByZXNzQ3JhZnQgRGVtb1wiO1xyXG5cclxuICAgICAgICAgICAgaWYoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNob3dNZW51ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFBhZ2VzID0gbmV3IFRpbGVDb250cm9sKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQYWdlcyA9IG5ldyBSaWJib25Db250cm9sKFJpYmJvbkNvbnRyb2wuUmliYm9uVHlwZS5Db21wYWN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZ2UgPSBuZXcgUmliYm9uUGFnZShcIkdyaWQgVmlld1wiKTtcclxuXHJcbiAgICAgICAgICAgIFZpZXcgPSBuZXcgR3JpZFZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICBWaWV3LlNldEJvdW5kc0Z1bGwoKTtcclxuICAgICAgICAgICAgVmlldy5TaG93RmluZFBhbmVsKCk7XHJcbiAgICAgICAgICAgIFZpZXcuVXNlRWRpdEZvcm0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHBhZ2UuQWRkUmliYm9uR3JvdXBzKFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkdyb3VwKFwiQWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBSb3dcIikgeyBJY29uID0gSW1hZ2VzLngzMngzMk5ldywgT25JdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFZpZXcuRGF0YVNvdXJjZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTWVzc2FnZUJveEZvcm0oXCJQbGVhc2UgYWRkIGEgY29sdW1uXCIsIE1lc3NhZ2VCb3hMYXlvdXQuSW5mb3JtYXRpb24pLlNob3dEaWFsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRSb3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIDEwMDAgUm93J3NcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBCZWdpbkdyb3VwID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBJY29uID0gSW1hZ2VzLngzMngzMk5ldyxcclxuICAgICAgICAgICAgICAgICAgICBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFZpZXcuRGF0YVNvdXJjZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE1lc3NhZ2VCb3hGb3JtKFwiUGxlYXNlIGFkZCBhIGNvbHVtblwiLCBNZXNzYWdlQm94TGF5b3V0LkluZm9ybWF0aW9uKS5TaG93RGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldy5EYXRhU291cmNlLkJlZ2luRGF0YVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCAxMDAwOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkUm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3LkRhdGFTb3VyY2UuRW5kRGF0YVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgU3RyaW5nIENvbHVtblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWNvbiA9IEltYWdlcy54MzJ4MzJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIEJlZ2luR3JvdXAgPSB0cnVlLCBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkQ29sdW1uKERhdGFUeXBlLlN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBEYXRlIENvbHVtblwiKSB7IEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIEljb24gPSBJbWFnZXMueDMyeDMyRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkQ29sdW1uKERhdGFUeXBlLkRhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IFJpYmJvbkJ1dHRvbihcIkFkZCBJbnRlZ2VyIENvbHVtblwiKSB7IEJlZ2luR3JvdXAgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIEljb24gPSBJbWFnZXMueDMyeDMyRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkQ29sdW1uKERhdGFUeXBlLkludGVnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgUmliYm9uQnV0dG9uKFwiQWRkIExvbmcgQ29sdW1uXCIpIHsgQmVnaW5Hcm91cCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgSWNvbiA9IEltYWdlcy54MzJ4MzJEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRDb2x1bW4oRGF0YVR5cGUuTG9uZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBZGQgRGVjaW1hbCBDb2x1bW5cIikgeyBCZWdpbkdyb3VwID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBJY29uID0gSW1hZ2VzLngzMngzMkN1cnJlbmN5LFxyXG4gICAgICAgICAgICAgICAgICAgIE9uSXRlbUNsaWNrID0gKHNlbmRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRDb2x1bW4oRGF0YVR5cGUuRGVjaW1hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBSaWJib25CdXR0b24oXCJBdXRvIENvbHVtbiBXaWR0aFwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEljb24gPSBJbWFnZXMueDMyeDMyQ29sdW1ucyxcclxuICAgICAgICAgICAgICAgICAgICBCZWdpbkdyb3VwID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBPbkl0ZW1DbGljayA9IChzZW5kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoVmlldy5Db2x1bW5BdXRvV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuQ29sdW1uQXV0b1dpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXIuQ2FwdGlvbiA9IFwiQXV0byBDb2x1bW4gV2lkdGhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuQ29sdW1uQXV0b1dpZHRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlci5DYXB0aW9uID0gXCJNYW51YWwgQ29sdW1uIFdpZHRoXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuUmVuZGVyR3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIFBhZ2VzLkFkZFJpYmJvblBhZ2VzKHBhZ2UpOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblNob3dpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGlkZVNwbGl0dGVyID0gbmV3IFNwbGl0SGlkZUNvbnRyb2xDb250YWluZXIoKTtcclxuICAgICAgICAgICAgaGlkZVNwbGl0dGVyLlNldEJvdW5kc0Z1bGwoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdFbiA9IG5ldyBTaW1wbGVCdXR0b24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBUZXh0ID0gXCJOZXcgRW50aXR5XCIsXHJcbiAgICAgICAgICAgICAgICBXaWR0aCA9IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgSGVpZ2h0ID0gNDUsXHJcbiAgICAgICAgICAgICAgICBJdGVtQ2xpY2sgPSAoc2VuZGVyKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBmcm1FbnRpdHkoKS5TaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV3RGlhbG9nID0gbmV3IFNpbXBsZUJ1dHRvbigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFRleHQgPSBcIkRpYWxvZ3NcIixcclxuICAgICAgICAgICAgICAgIFdpZHRoID0gXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBIZWlnaHQgPSA0NSxcclxuICAgICAgICAgICAgICAgIFRvcCA9IDQ2LFxyXG4gICAgICAgICAgICAgICAgSXRlbUNsaWNrID0gKHNlbmRlcikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgZnJtRGlhbG9ncygpLlNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG5ld0VuLlN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XHJcbiAgICAgICAgICAgIG5ld0RpYWxvZy5TdHlsZS5mb250U2l6ZSA9IFwiMTRweFwiO1xyXG5cclxuICAgICAgICAgICAgaGlkZVNwbGl0dGVyLlBhbmVsLkFwcGVuZENoaWxkcmVuKG5ld0VuLCBuZXdEaWFsb2cpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIEFwcGVuZENoaWxkKGhpZGVTcGxpdHRlcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFuZWwgPSBuZXcgQ29udHJvbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5Cb3VuZHMgPSBuZXcgVmVjdG9yNCgwLCAwLCBcIjEwMCVcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuQm91bmRzID0gbmV3IFZlY3RvcjQoMCwgMTI5LCBcIjEwMCVcIiwgXCIoMTAwJSAtIDEyOXB4KVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFuZWwuQXBwZW5kQ2hpbGQoVmlldyk7XHJcblxyXG4gICAgICAgICAgICBoaWRlU3BsaXR0ZXIuQm9keS5BcHBlbmRDaGlsZHJlbigoQ29udHJvbClQYWdlcywgcGFuZWwpO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5PblNob3dpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uU2hvd2VkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpbmRvd1N0YXRlID0gV2luZG93U3RhdGVUeXBlLk1heGltaXplZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEFsbG93U2l6ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgQWxsb3dNb3ZlQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhpZGVTcGxpdHRlci5TbGlkZXJWaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIExpbmtjaGlsZHJlblRvRm9ybShWaWV3LCBoaWRlU3BsaXR0ZXIpO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5PblNob3dlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIEV4cHJlc3NDcmFmdDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEV4cHJlc3NDcmFmdERlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZXR0aW5ncy5BbGxvd0Nsb3NlV2l0aG91dFF1ZXN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEb2N1bWVudC5IZWFkLkFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBIVE1MTWV0YUVsZW1lbnQoKSB7IE5hbWUgPSBcInZpZXdwb3J0XCIsIENvbnRlbnQgPSBcIndpZHRoPWRldmljZS13aWR0aCxtYXhpbXVtLXNjYWxlPTEsbWluaW11bS1zY2FsZT0xXCIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLlJ1bihuZXcgZnJtSHViKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
