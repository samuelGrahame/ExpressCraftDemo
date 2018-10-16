/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 17.4.0
 */
Bridge.assembly("ExpressCraft", function ($asm, globals) {
    "use strict";

    Bridge.define("ExpressCraft.Control", {
        inherits: function () { return [System.Collections.Generic.IList$1(ExpressCraft.Control)]; },
        statics: {
            fields: {
                ControlClass: null,
                cva: null
            },
            ctors: {
                init: function () {
                    this.ControlClass = "control";
                }
            },
            methods: {
                BaseClass: function (add, ac) {
                    if (add === void 0) { add = true; }
                    if (ac === void 0) { ac = true; }
                    return ac ? (add ? " control" : ExpressCraft.Control.ControlClass) : "";
                },
                GetImageString: function (s) {
                    return System.String.format("url('data:image/png;base64,{0}') no-repeat", [s]);
                },
                GetPdfString: function (s) {
                    return System.String.format("data:application/pdf;base64,{0}", [s]);
                },
                GetImageStringURI: function (s, useResourceURL) {
                    if (useResourceURL === void 0) { useResourceURL = true; }
                    return System.String.format("url('{0}{1}') no-repeat", useResourceURL ? ExpressCraft.Settings.ResourceURL : "", s);
                },
                Div: function (ac) {
                    var $t;
                    if (ac === void 0) { ac = true; }
                    return ($t = document.createElement("div"), $t.className = ExpressCraft.Control.BaseClass(false, ac), $t);
                },
                Div$1: function (cn, ac) {
                    var $t;
                    if (ac === void 0) { ac = true; }
                    return ($t = document.createElement("div"), $t.className = (cn || "") + (ExpressCraft.Control.BaseClass(true, ac) || ""), $t);
                },
                Span: function (ac) {
                    var $t;
                    if (ac === void 0) { ac = true; }
                    return ($t = document.createElement("span"), $t.className = ExpressCraft.Control.BaseClass(false, ac), $t);
                },
                Span$1: function (cn, ac) {
                    var $t;
                    if (ac === void 0) { ac = true; }
                    return ($t = document.createElement("span"), $t.className = (cn || "") + (ExpressCraft.Control.BaseClass(true, ac) || ""), $t);
                },
                Label$2: function (Caption, X, Y, IsBold, IsTiny, ac) {
                    var $t;
                    if (IsBold === void 0) { IsBold = false; }
                    if (IsTiny === void 0) { IsTiny = false; }
                    if (ac === void 0) { ac = true; }
                    var lbl = ($t = document.createElement("span"), $t.className = ExpressCraft.Control.BaseClass(false, ac), $t);

                    lbl.innerHTML = ExpressCraft.Helper.HtmlEscape$1(Caption);
                    ExpressCraft.Helper.SetLocation$2(lbl, X, Y);
                    ExpressCraft.Control.SetBT(lbl, IsBold, IsTiny);

                    return lbl;
                },
                Label$5: function (Caption, X, Y, width, height, IsBold, IsTiny, classr, Alignment, Forecolor, ac) {
                    var $t;
                    if (IsBold === void 0) { IsBold = false; }
                    if (IsTiny === void 0) { IsTiny = false; }
                    if (classr === void 0) { classr = ""; }
                    if (Alignment === void 0) { Alignment = "left"; }
                    if (Forecolor === void 0) { Forecolor = null; }
                    if (ac === void 0) { ac = true; }
                    var lbl = ($t = document.createElement("span"), $t.className = (classr || "") + (ExpressCraft.Control.BaseClass(!System.String.isNullOrWhiteSpace(classr), ac) || ""), $t);

                    lbl.innerHTML = ExpressCraft.Helper.HtmlEscape$1(Caption);
                    ExpressCraft.Helper.SetBounds$1(lbl, X, Y, width, height);
                    if (!Bridge.referenceEquals(Alignment, "left")) {
                        lbl.style.textAlign = Alignment;
                    }
                    ExpressCraft.Control.SetBT(lbl, IsBold, IsTiny);
                    if (Forecolor != null) {
                        lbl.style.color = Forecolor;
                    }

                    return lbl;
                },
                Label$3: function (Caption, X, Y, width, IsBold, IsTiny, classr, Alignment, Forecolor, ac) {
                    if (IsBold === void 0) { IsBold = false; }
                    if (IsTiny === void 0) { IsTiny = false; }
                    if (classr === void 0) { classr = ""; }
                    if (Alignment === void 0) { Alignment = "left"; }
                    if (Forecolor === void 0) { Forecolor = null; }
                    if (ac === void 0) { ac = true; }
                    var lbl = document.createElement("span");
                    lbl.className = (classr || "") + (ExpressCraft.Control.BaseClass(!System.String.isNullOrWhiteSpace(classr), ac) || "");
                    lbl.textContent = Caption;
                    lbl.style.left = ExpressCraft.Helper.ToPx(Bridge.box(X, System.Single, System.Single.format, System.Single.getHashCode));
                    lbl.style.top = ExpressCraft.Helper.ToPx(Bridge.box(Y, System.Single, System.Single.format, System.Single.getHashCode));
                    lbl.style.width = ExpressCraft.Helper.ToPx(Bridge.box(width, System.Single, System.Single.format, System.Single.getHashCode));

                    if (!Bridge.referenceEquals(Alignment, "left")) {
                        if (Bridge.referenceEquals(Alignment, "right")) {
                            lbl.style.direction = "rtl";
                        } else {
                            lbl.style.textAlign = Alignment;
                        }
                    }
                    ExpressCraft.Control.SetBT(lbl, IsBold, IsTiny);
                    if (Forecolor != null) {
                        lbl.style.color = Forecolor;
                    }

                    return lbl;
                },
                Label$4: function (c, X, Y, width, height, IsBold, IsTiny, classr, ac) {
                    var $t;
                    if (IsBold === void 0) { IsBold = false; }
                    if (IsTiny === void 0) { IsTiny = false; }
                    if (classr === void 0) { classr = ""; }
                    if (ac === void 0) { ac = true; }
                    var lbl = ($t = document.createElement("span"), $t.className = (classr || "") + (ExpressCraft.Control.BaseClass(!System.String.isNullOrWhiteSpace(classr), ac) || ""), $t);

                    lbl.innerHTML = ExpressCraft.Helper.HtmlEscape$1(c);
                    ExpressCraft.Helper.SetBounds$1(lbl, X, Y, width, height);
                    ExpressCraft.Control.SetBT(lbl, IsBold, IsTiny);

                    return lbl;
                },
                Label$1: function (c, X, Y, width, IsBold, IsTiny, classr, ac) {
                    var $t;
                    if (IsBold === void 0) { IsBold = false; }
                    if (IsTiny === void 0) { IsTiny = false; }
                    if (classr === void 0) { classr = ""; }
                    if (ac === void 0) { ac = true; }
                    var lbl = ($t = document.createElement("span"), $t.className = (classr || "") + (ExpressCraft.Control.BaseClass(!System.String.isNullOrWhiteSpace(classr), ac) || ""), $t);

                    lbl.innerHTML = ExpressCraft.Helper.HtmlEscape$1(c);
                    ExpressCraft.Helper.SetLocation$2(lbl, X, Y);
                    lbl.style.width = ExpressCraft.Helper.ToPx(Bridge.box(width, System.Int32));
                    ExpressCraft.Control.SetBT(lbl, IsBold, IsTiny);

                    return lbl;
                },
                Label: function (c, X, Y, IsBold, IsTiny, ac) {
                    if (IsBold === void 0) { IsBold = false; }
                    if (IsTiny === void 0) { IsTiny = false; }
                    if (ac === void 0) { ac = true; }
                    return ExpressCraft.Control.Label$2(c, X, Y, IsBold, IsTiny, ac);
                },
                DivLabel: function (Caption, X, Y, width, IsBold, IsTiny, classr, Alignment, Forecolor, ac) {
                    if (IsBold === void 0) { IsBold = false; }
                    if (IsTiny === void 0) { IsTiny = false; }
                    if (classr === void 0) { classr = ""; }
                    if (Alignment === void 0) { Alignment = "left"; }
                    if (Forecolor === void 0) { Forecolor = null; }
                    if (ac === void 0) { ac = true; }
                    var lbl = document.createElement("div");
                    lbl.className = (classr || "") + (ExpressCraft.Control.BaseClass(!System.String.isNullOrWhiteSpace(classr), ac) || "");
                    lbl.textContent = Caption;
                    lbl.style.left = ExpressCraft.Helper.ToPx(Bridge.box(X, System.Single, System.Single.format, System.Single.getHashCode));
                    lbl.style.top = ExpressCraft.Helper.ToPx(Bridge.box(Y, System.Single, System.Single.format, System.Single.getHashCode));
                    lbl.style.width = ExpressCraft.Helper.ToPx(Bridge.box(width, System.Single, System.Single.format, System.Single.getHashCode));

                    if (!Bridge.referenceEquals(Alignment, "left")) {
                        if (Bridge.referenceEquals(Alignment, "right")) {
                            lbl.style.direction = "rtl";
                        } else {
                            lbl.style.textAlign = Alignment;
                        }
                    }
                    if (IsBold) {
                        lbl.style.fontWeight = "bold";
                    }
                    if (IsTiny) {
                        lbl.style.fontSize = "6.75pt";
                    }
                    if (Forecolor != null) {
                        lbl.style.color = Forecolor;
                    }

                    return lbl;
                },
                SetBT: function (lbl, IsBold, IsTiny) {
                    if (IsBold) {
                        lbl.style.fontWeight = "bold";
                    }
                    if (IsTiny) {
                        lbl.style.fontSize = "6.75pt";
                    }
                },
                ComboBox: function (cn, ct, ac) {
                    var $t;
                    if (ac === void 0) { ac = true; }
                    var combo = ($t = document.createElement("select"), $t.className = (cn || "") + (ExpressCraft.Control.BaseClass(true, ac) || ""), $t);
                    if (ct === ExpressCraft.ComboBoxTypes.Default) {
                    }
                    return combo;
                },
                Button: function (cn, bt, ac) {
                    var $t;
                    if (ac === void 0) { ac = true; }
                    return ($t = document.createElement("button"), $t.className = (cn || "") + (ExpressCraft.Control.BaseClass(true, ac) || ""), $t.type = bt, $t);
                },
                Input: function (cn, it, ac) {
                    if (ac === void 0) { ac = true; }
                    var input = document.createElement("input");
                    input.className = (cn || "") + (ExpressCraft.Control.BaseClass(!System.String.isNullOrWhiteSpace(cn), ac) || "");
                    var ty = it;
                    if (Bridge.Browser.isIE && (Bridge.referenceEquals(ty, "text") || Bridge.referenceEquals(ty, "date") || Bridge.referenceEquals(ty, "color") || Bridge.referenceEquals(ty, 19) || Bridge.referenceEquals(ty, 3) || Bridge.referenceEquals(ty, 2))) {
                        return input;
                    }
                    input.type = it;

                    return input;
                },
                /**
                 * Returns Text Metrics for a given string
                 *
                 * @static
                 * @public
                 * @this ExpressCraft.Control
                 * @memberof ExpressCraft.Control
                 * @param   {string}                  t    the string
                 * @param   {string}                  f    the font used
                 * @return  {Retyped..TextMetrics}         TextMetrics
                 */
                GetTextMetrics: function (t, f) {
                    var $t;
                    if (Bridge.referenceEquals(f, "")) {
                        f = "8.25pt Tahoma";
                    }
                    var c = (ExpressCraft.Control.cva || (($t = document.createElement("canvas"), ExpressCraft.Control.cva = $t, $t))).getContext("2d");
                    c.font = f;
                    return c.measureText(t);
                },
                /**
                 * Returns text width
                 *
                 * @static
                 * @public
                 * @this ExpressCraft.Control
                 * @memberof ExpressCraft.Control
                 * @param   {string}    t    the string
                 * @param   {string}    f    the font used
                 * @return  {number}         double
                 */
                GetTextWidth: function (t, f) {
                    return ExpressCraft.Control.GetTextMetrics(t, f).width;
                },
                op_Implicit: function (control) {
                    if (ExpressCraft.Settings.AutoRender && !control.HasRendered) {
                        control.Render();
                    }
                    return control.Content;
                }
            }
        },
        fields: {
            Content: null,
            Name: null,
            HasRendered: false,
            _toolTip: null,
            _OnMouseEnterToolTip: null,
            _OnMouseLeaveToolTip: null,
            innerList: null,
            OnResize: null,
            OnLoaded: null,
            ContextMenu: null,
            LinkedForm: null
        },
        props: {
            ToolTip: {
                get: function () {
                    return this._toolTip;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._toolTip, value)) {
                        if (value != null) {
                            if (value.AttachedControl != null && !Bridge.referenceEquals(value.AttachedControl, this)) {
                                value = null;
                            } else {
                                value.AttachedControl = this;
                            }
                        }
                        this._toolTip = value;

                        if (this._toolTip != null && (!ExpressCraft.Helper.IsEmpty(this._toolTip.Heading) || !ExpressCraft.Helper.IsEmpty(this._toolTip.Description))) {
                            this._OnMouseEnterToolTip = Bridge.fn.bind(this, function (ev) {
                                if (!(Bridge.is(this, ExpressCraft.ToolTipControl))) {
                                    ExpressCraft.Form.ActiveToolTip = this._toolTip;
                                }
                            });
                            this._OnMouseLeaveToolTip = Bridge.fn.bind(this, function (ev) {
                                if (!(Bridge.is(this, ExpressCraft.ToolTipControl))) {
                                    ExpressCraft.Form.ActiveToolTip = null;
                                }
                            });

                            this.Content.addEventListener("moveenter", this._OnMouseEnterToolTip);
                            this.Content.addEventListener("mouseleave", this._OnMouseLeaveToolTip);
                            return;
                        }

                        if (!Bridge.staticEquals(this._OnMouseEnterToolTip, null)) {
                            this.Content.removeEventListener("MouseEnter", this._OnMouseEnterToolTip);
                            this._OnMouseEnterToolTip = null;
                        }
                        if (!Bridge.staticEquals(this._OnMouseLeaveToolTip, null)) {
                            this.Content.removeEventListener("MouseLeave", this._OnMouseLeaveToolTip);
                            this._OnMouseLeaveToolTip = null;
                        }
                    }
                }
            },
            Style: {
                get: function () {
                    return this.Content.style;
                }
            },
            ClassList: {
                get: function () {
                    return this.Content.classList;
                }
            },
            Width: {
                get: function () {
                    return this.Content.style.width;
                },
                set: function (value) {
                    var x = ExpressCraft.Helper.ToHtmlValue(value);
                    x = ExpressCraft.Vector2.pf(x);
                    if (!Bridge.referenceEquals(this.Content.style.width, x)) {
                        this.Content.style.width = x;
                        this.OnSizeChanged();
                    }
                }
            },
            Height: {
                get: function () {
                    return this.Content.style.height;
                },
                set: function (value) {
                    var x = ExpressCraft.Helper.ToHtmlValue(value);
                    x = ExpressCraft.Vector2.pf(x);
                    if (!Bridge.referenceEquals(x, this.Content.style.height)) {
                        this.Content.style.height = x;
                        this.OnSizeChanged();
                    }
                }
            },
            Left: {
                get: function () {
                    return this.Content.style.left;
                },
                set: function (value) {
                    var x = ExpressCraft.Helper.ToHtmlValue(value);
                    x = ExpressCraft.Vector2.pf(x);
                    if (!Bridge.referenceEquals(x, this.Content.style.left)) {
                        this.Content.style.left = x;
                        this.OnLocationChanged();
                    }
                }
            },
            Top: {
                get: function () {
                    return this.Content.style.top;
                },
                set: function (value) {
                    var x = ExpressCraft.Helper.ToHtmlValue(value);
                    x = ExpressCraft.Vector2.pf(x);
                    if (!Bridge.referenceEquals(this.Content.style.top, x)) {
                        this.Content.style.top = x;
                        this.OnLocationChanged();
                    }
                }
            },
            Size: {
                get: function () {
                    return new ExpressCraft.Vector2.$ctor1(this.Width, this.Height);
                },
                set: function (value) {
                    this.Width = value.X;
                    this.Height = value.Y;
                }
            },
            Location: {
                get: function () {
                    return new ExpressCraft.Vector2.$ctor1(this.Left, this.Top);
                },
                set: function (value) {
                    this.Left = value.X;
                    this.Top = value.Y;
                }
            },
            Bounds: {
                get: function () {
                    return new ExpressCraft.Vector4.$ctor1(this.Left, this.Top, this.Width, this.Height);
                },
                set: function (value) {
                    this.Left = value.X;
                    this.Top = value.Y;
                    this.Width = value.Z;
                    this.Height = value.M;
                }
            },
            Count: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            },
            IsReadOnly: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        alias: [
            "Count", "System$Collections$Generic$ICollection$1$ExpressCraft$Control$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$ExpressCraft$Control$IsReadOnly",
            "getItem", "System$Collections$Generic$IList$1$ExpressCraft$Control$getItem",
            "setItem", "System$Collections$Generic$IList$1$ExpressCraft$Control$setItem",
            "indexOf", "System$Collections$Generic$IList$1$ExpressCraft$Control$indexOf",
            "insert", "System$Collections$Generic$IList$1$ExpressCraft$Control$insert",
            "removeAt", "System$Collections$Generic$IList$1$ExpressCraft$Control$removeAt",
            "add", "System$Collections$Generic$ICollection$1$ExpressCraft$Control$add",
            "copyTo", "System$Collections$Generic$ICollection$1$ExpressCraft$Control$copyTo",
            "clear", "System$Collections$Generic$ICollection$1$ExpressCraft$Control$clear",
            "contains", "System$Collections$Generic$ICollection$1$ExpressCraft$Control$contains",
            "remove", "System$Collections$Generic$ICollection$1$ExpressCraft$Control$remove",
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$ExpressCraft$Control$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"]
        ],
        ctors: {
            init: function () {
                this.HasRendered = false;
                this.innerList = new (System.Collections.Generic.List$1(ExpressCraft.Control)).ctor();
            },
            $ctor1: function (ac) {
                if (ac === void 0) { ac = true; }

                this.$initialize();
                this.Content = ExpressCraft.Control.Div(ac);
            },
            ctor: function (element) {
                this.$initialize();
                this.Content = element;
            },
            $ctor3: function (cn, ac) {
                if (ac === void 0) { ac = true; }

                this.$initialize();
                this.Content = ExpressCraft.Control.Div$1(cn, ac);
            },
            $ctor2: function (cn, ct, ac) {
                if (ac === void 0) { ac = true; }

                this.$initialize();
                this.Content = ExpressCraft.Control.ComboBox(cn, ct, ac);
            },
            $ctor4: function (cn, IsInput, it, ac) {
                if (ac === void 0) { ac = true; }

                this.$initialize();
                this.Content = (IsInput ? ExpressCraft.Control.Input(cn, it, ac) : ExpressCraft.Control.Button(cn, it, ac));
            }
        },
        methods: {
            getItem: function (index) {
                throw new System.NotImplementedException.ctor();
            },
            setItem: function (index, value) {
                throw new System.NotImplementedException.ctor();
            },
            SetData: function (name, value) {
                return this.SetAttribute("data-" + (name || ""), value);
            },
            GetData: function (name) {
                return this.GetAttribute("data-" + (name || ""));
            },
            SetAttribute: function (name, value) {
                this.Content.setAttribute(name, ExpressCraft.Helper.ToStr(value));

                return this;
            },
            GetAttribute: function (name) {
                return this.Content.getAttribute(name);
            },
            GetAttributei: function (name) {
                return parseInt(this.Content.getAttribute(name));
            },
            GetAttributef: function (name) {
                return parseFloat(this.Content.getAttribute(name));
            },
            OnLocationChanged: function () { },
            OnSizeChanged: function () { },
            Render: function () {
                this.HasRendered = true;
            },
            Focus: function () {
                setTimeout(Bridge.fn.bind(this, function (a) {
                    this.Content.focus();
                }), 0);
            },
            GetControlBase: function () {
                return this.Content;
            },
            ChangeState: function (s, sf) {
                if (sf === void 0) { sf = "disabled"; }
                if (s) {
                    this.Content.classList.remove(sf);
                } else {
                    this.Content.classList.add(sf);
                }
            },
            indexOf: function (item) {
                return this.innerList.indexOf(item);
            },
            insert: function (index, item) {
                var content = this.GetControlBase();
                this.innerList.insert(index, item);
                content.insertBefore(item.Content, content.childNodes[index]);
            },
            removeAt: function (index) {
                var control = this.innerList.getItem(index);
                this.remove(control);
            },
            add: function (item) {
                this.innerList.add(item);
                var content = this.GetControlBase();
                content.appendChild(item.Content);
            },
            copyTo: function (array, arrayIndex) {
                this.innerList.copyTo(array, arrayIndex);
            },
            clear: function () {
                this.innerList.clear();
                var content = this.GetControlBase();
                ExpressCraft.Helper.Empty(content);
            },
            contains: function (item) {
                return this.innerList.contains(item);
            },
            remove: function (item) {
                this.innerList.remove(item);
                var content = this.GetControlBase();
                content.removeChild(item.Content);

                return true;
            },
            GetEnumerator: function () {
                return this.innerList.GetEnumerator().$clone();
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return this.innerList.GetEnumerator().$clone();
            }
        }
    });

    Bridge.define("ExpressCraft.AceModeTypes", {
        $kind: "enum",
        statics: {
            fields: {
                abap: 0,
                abc: 1,
                actionscript: 2,
                ada: 3,
                apache_conf: 4,
                asciidoc: 5,
                assembly_x86: 6,
                autohotkey: 7,
                batchfile: 8,
                bro: 9,
                c_cpp: 10,
                c9search: 11,
                cirru: 12,
                clojure: 13,
                cobol: 14,
                coffee: 15,
                coldfusion: 16,
                csharp: 17,
                css: 18,
                curly: 19,
                d: 20,
                dart: 21,
                diff: 22,
                dockerfile: 23,
                dot: 24,
                drools: 25,
                dummy: 26,
                dummysyntax: 27,
                eiffel: 28,
                ejs: 29,
                elixir: 30,
                elm: 31,
                erlang: 32,
                forth: 33,
                fortran: 34,
                ftl: 35,
                gcode: 36,
                gherkin: 37,
                gitignore: 38,
                glsl: 39,
                gobstones: 40,
                golang: 41,
                groovy: 42,
                haml: 43,
                handlebars: 44,
                haskell: 45,
                haskell_cabal: 46,
                haxe: 47,
                hjson: 48,
                html: 49,
                html_elixir: 50,
                html_ruby: 51,
                ini: 52,
                io: 53,
                jack: 54,
                jade: 55,
                java: 56,
                javascript: 57,
                json: 58,
                jsoniq: 59,
                jsp: 60,
                jsx: 61,
                julia: 62,
                kotlin: 63,
                latex: 64,
                less: 65,
                liquid: 66,
                lisp: 67,
                livescript: 68,
                logiql: 69,
                lsl: 70,
                lua: 71,
                luapage: 72,
                lucene: 73,
                makefile: 74,
                markdown: 75,
                mask: 76,
                matlab: 77,
                maze: 78,
                mel: 79,
                mushcode: 80,
                mysql: 81,
                nix: 82,
                nsis: 83,
                objectivec: 84,
                ocaml: 85,
                pascal: 86,
                perl: 87,
                pgsql: 88,
                php: 89,
                powershell: 90,
                praat: 91,
                prolog: 92,
                properties: 93,
                protobuf: 94,
                python: 95,
                r: 96,
                razor: 97,
                rdoc: 98,
                rhtml: 99,
                rst: 100,
                ruby: 101,
                rust: 102,
                sass: 103,
                scad: 104,
                scala: 105,
                scheme: 106,
                scss: 107,
                sh: 108,
                sjs: 109,
                smarty: 110,
                snippets: 111,
                soy_template: 112,
                space: 113,
                sql: 114,
                sqlserver: 115,
                stylus: 116,
                svg: 117,
                swift: 118,
                tcl: 119,
                tex: 120,
                text: 121,
                textile: 122,
                toml: 123,
                tsx: 124,
                twig: 125,
                typescript: 126,
                vala: 127,
                vbscript: 128,
                velocity: 129,
                verilog: 130,
                vhdl: 131,
                wollok: 132,
                xml: 133,
                xquery: 134,
                yaml: 135,
                django: 136
            }
        }
    });

    Bridge.define("ExpressCraft.AceThemeTypes", {
        $kind: "enum",
        statics: {
            fields: {
                label: 0,
                chrome: 1,
                clouds: 2,
                crimson_editor: 3,
                dawn: 4,
                dreamweaver: 5,
                eclipse: 6,
                github: 7,
                solarized_light: 8,
                textmate: 9,
                tomorrow: 10,
                xcode: 11,
                clouds_midnight: 12,
                cobalt: 13,
                idle_fingers: 14,
                kr_theme: 15,
                merbivore: 16,
                merbivore_soft: 17,
                mono_industrial: 18,
                monokai: 19,
                pastel_on_dark: 20,
                solarized_dark: 21,
                terminal: 22,
                tomorrow_night: 23,
                tomorrow_night_blue: 24,
                tomorrow_night_bright: 25,
                tomorrow_night_eighties: 26,
                twilight: 27,
                vibrant_ink: 28
            }
        }
    });

    Bridge.define("ExpressCraft.App", {
        main: function Main () {
            var $t;
            ExpressCraft.Helper.AppendChild$2(document.head, ($t = document.createElement("link"), $t.id = "ExpressCraft", $t.rel = "Stylesheet", $t.type = "text/css", $t.href = "data:text/css;base64," + (ExpressCraft.Settings.ExpressCraftCssBase64 || ""), $t));
            ExpressCraft.Settings.Setup();

















        }
    });

    Bridge.define("ExpressCraft.Application", {
        statics: {
            fields: {
                MainForm: null,
                _applicationDefition: 0
            },
            props: {
                AplicationDefition: {
                    get: function () {
                        return ExpressCraft.Application._applicationDefition;
                    }
                }
            },
            ctors: {
                init: function () {
                    this._applicationDefition = ExpressCraft.ApplicationDefitnion.BridgeConsole;
                }
            },
            methods: {
                Close: function () {
                    if (ExpressCraft.Application.MainForm != null) {
                        ExpressCraft.Application.MainForm.Close();
                    }
                    window.close();
                    window.location.reload();
                },
                Run: function (_Mainform) {
                    ExpressCraft.Application.MainForm = _Mainform;
                    ExpressCraft.Application.MainForm.ShowStartNewLevel();
                }
            }
        }
    });

    Bridge.define("ExpressCraft.ApplicationDefitnion", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                BrowserConsole: 1,
                BridgeConsole: 2,
                ExpressCraftConsole: 3
            }
        }
    });

    Bridge.define("ExpressCraft.BarcodeQuaggaJS", {
        statics: {
            fields: {
                ExternalQuaggaJS: null
            },
            ctors: {
                init: function () {
                    this.ExternalQuaggaJS = new ExpressCraft.ExternalPlugin("https://cdnjs.cloudflare.com/ajax/libs/quagga/0.12.1/quagga.min.js");
                }
            },
            methods: {
                Setup: function () {
                    ExpressCraft.BarcodeQuaggaJS.ExternalQuaggaJS.Setup(true, true);
                },
                DecodeSingle: function (source, onDetect, onNoDetect, locate, reader, sourceIsBase64) {
                    if (onNoDetect === void 0) { onNoDetect = null; }
                    if (locate === void 0) { locate = true; }
                    if (reader === void 0) { reader = 3; }
                    if (sourceIsBase64 === void 0) { sourceIsBase64 = false; }
                    if (!ExpressCraft.BarcodeQuaggaJS.ExternalQuaggaJS.SetupCompleted) {
                        return;
                    }

                    if (Bridge.staticEquals(onDetect, null)) {
                        return;
                    }

                    var codeName = System.Enum.format(ExpressCraft.BarcodeQuaggaJS.Readers, reader, "G").toLowerCase();
                    if (System.String.startsWith(codeName, "_")) {
                        codeName = codeName.substr(1);
                    }
                    if (sourceIsBase64 && !System.String.startsWith(source, "data:image")) {
                        source = "data:image/jpg;base64," + (source || "");
                    }
                    Quagga.decodeSingle({
                        decoder: {
                            readers: [codeName] // List of active readers
                        },
                        locate: locate,
                        src: source
                    }, function(ond, onnd) {
                        return function(result){
                            if(result.codeResult) {
                                ond(result.codeResult.code);
                            } else {
                                if(onnd != null)
                                {
                                    onnd();
                                }
                            }
                        }
                    }(onDetect, onNoDetect));
                }
            }
        }
    });

    Bridge.define("ExpressCraft.BarcodeQuaggaJS.Readers", {
        $kind: "nested enum",
        statics: {
            fields: {
                Code_128_Reader: 0,
                Ean_Reader: 1,
                Ean_8_Reader: 2,
                Code_39_Reader: 3,
                Code_39_Vin_Reader: 4,
                Codabar_Reader: 5,
                Upc_Reader: 6,
                Upc_e_Reader: 7,
                I2of5_Reader: 8,
                _2of5_Reader: 9,
                Code_93_Reader: 10
            }
        }
    });

    Bridge.define("ExpressCraft.Brush", {
        inherits: [System.IDisposable],
        alias: ["Dispose", "System$IDisposable$Dispose"],
        methods: {
            Dispose: function () {

            }
        }
    });

    Bridge.define("ExpressCraft.Color", {
        $kind: "struct",
        statics: {
            fields: {
                Empty: null,
                StateKnownColorValid: 0,
                StateARGBValueValid: 0,
                StateValueMask: 0,
                StateNameValid: 0,
                NotDefinedValue: System.Int64(0),
                ARGBAlphaShift: 0,
                ARGBRedShift: 0,
                ARGBGreenShift: 0,
                ARGBBlueShift: 0,
                q: 0
            },
            props: {
                Transparent: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Transparent);
                    }
                },
                AliceBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.AliceBlue);
                    }
                },
                AntiqueWhite: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.AntiqueWhite);
                    }
                },
                Aqua: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Aqua);
                    }
                },
                Aquamarine: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Aquamarine);
                    }
                },
                Azure: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Azure);
                    }
                },
                Beige: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Beige);
                    }
                },
                Bisque: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Bisque);
                    }
                },
                Black: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Black);
                    }
                },
                BlanchedAlmond: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.BlanchedAlmond);
                    }
                },
                Blue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Blue);
                    }
                },
                BlueViolet: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.BlueViolet);
                    }
                },
                Brown: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Brown);
                    }
                },
                BurlyWood: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.BurlyWood);
                    }
                },
                CadetBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.CadetBlue);
                    }
                },
                Chartreuse: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Chartreuse);
                    }
                },
                Chocolate: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Chocolate);
                    }
                },
                Coral: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Coral);
                    }
                },
                CornflowerBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.CornflowerBlue);
                    }
                },
                Cornsilk: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Cornsilk);
                    }
                },
                Crimson: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Crimson);
                    }
                },
                Cyan: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Cyan);
                    }
                },
                DarkBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkBlue);
                    }
                },
                DarkCyan: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkCyan);
                    }
                },
                DarkGoldenrod: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkGoldenrod);
                    }
                },
                DarkGray: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkGray);
                    }
                },
                DarkGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkGreen);
                    }
                },
                DarkKhaki: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkKhaki);
                    }
                },
                DarkMagenta: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkMagenta);
                    }
                },
                DarkOliveGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkOliveGreen);
                    }
                },
                DarkOrange: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkOrange);
                    }
                },
                DarkOrchid: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkOrchid);
                    }
                },
                DarkRed: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkRed);
                    }
                },
                DarkSalmon: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkSalmon);
                    }
                },
                DarkSeaGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkSeaGreen);
                    }
                },
                DarkSlateBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkSlateBlue);
                    }
                },
                DarkSlateGray: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkSlateGray);
                    }
                },
                DarkTurquoise: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkTurquoise);
                    }
                },
                DarkViolet: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DarkViolet);
                    }
                },
                DeepPink: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DeepPink);
                    }
                },
                DeepSkyBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DeepSkyBlue);
                    }
                },
                DimGray: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DimGray);
                    }
                },
                DodgerBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.DodgerBlue);
                    }
                },
                Firebrick: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Firebrick);
                    }
                },
                FloralWhite: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.FloralWhite);
                    }
                },
                ForestGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.ForestGreen);
                    }
                },
                Fuchsia: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Fuchsia);
                    }
                },
                Gainsboro: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Gainsboro);
                    }
                },
                GhostWhite: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.GhostWhite);
                    }
                },
                Gold: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Gold);
                    }
                },
                Goldenrod: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Goldenrod);
                    }
                },
                Gray: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Gray);
                    }
                },
                Green: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Green);
                    }
                },
                GreenYellow: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.GreenYellow);
                    }
                },
                Honeydew: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Honeydew);
                    }
                },
                HotPink: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.HotPink);
                    }
                },
                IndianRed: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.IndianRed);
                    }
                },
                Indigo: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Indigo);
                    }
                },
                Ivory: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Ivory);
                    }
                },
                Khaki: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Khaki);
                    }
                },
                Lavender: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Lavender);
                    }
                },
                LavenderBlush: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LavenderBlush);
                    }
                },
                LawnGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LawnGreen);
                    }
                },
                LemonChiffon: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LemonChiffon);
                    }
                },
                LightBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightBlue);
                    }
                },
                LightCoral: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightCoral);
                    }
                },
                LightCyan: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightCyan);
                    }
                },
                LightGoldenrodYellow: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightGoldenrodYellow);
                    }
                },
                LightGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightGreen);
                    }
                },
                LightGray: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightGray);
                    }
                },
                LightPink: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightPink);
                    }
                },
                LightSalmon: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightSalmon);
                    }
                },
                LightSeaGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightSeaGreen);
                    }
                },
                LightSkyBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightSkyBlue);
                    }
                },
                LightSlateGray: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightSlateGray);
                    }
                },
                LightSteelBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightSteelBlue);
                    }
                },
                LightYellow: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LightYellow);
                    }
                },
                Lime: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Lime);
                    }
                },
                LimeGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.LimeGreen);
                    }
                },
                Linen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Linen);
                    }
                },
                Magenta: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Magenta);
                    }
                },
                Maroon: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Maroon);
                    }
                },
                MediumAquamarine: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MediumAquamarine);
                    }
                },
                MediumBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MediumBlue);
                    }
                },
                MediumOrchid: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MediumOrchid);
                    }
                },
                MediumPurple: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MediumPurple);
                    }
                },
                MediumSeaGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MediumSeaGreen);
                    }
                },
                MediumSlateBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MediumSlateBlue);
                    }
                },
                MediumSpringGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MediumSpringGreen);
                    }
                },
                MediumTurquoise: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MediumTurquoise);
                    }
                },
                MediumVioletRed: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MediumVioletRed);
                    }
                },
                MidnightBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MidnightBlue);
                    }
                },
                MintCream: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MintCream);
                    }
                },
                MistyRose: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.MistyRose);
                    }
                },
                Moccasin: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Moccasin);
                    }
                },
                NavajoWhite: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.NavajoWhite);
                    }
                },
                Navy: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Navy);
                    }
                },
                OldLace: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.OldLace);
                    }
                },
                Olive: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Olive);
                    }
                },
                OliveDrab: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.OliveDrab);
                    }
                },
                Orange: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Orange);
                    }
                },
                OrangeRed: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.OrangeRed);
                    }
                },
                Orchid: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Orchid);
                    }
                },
                PaleGoldenrod: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.PaleGoldenrod);
                    }
                },
                PaleGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.PaleGreen);
                    }
                },
                PaleTurquoise: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.PaleTurquoise);
                    }
                },
                PaleVioletRed: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.PaleVioletRed);
                    }
                },
                PapayaWhip: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.PapayaWhip);
                    }
                },
                PeachPuff: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.PeachPuff);
                    }
                },
                Peru: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Peru);
                    }
                },
                Pink: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Pink);
                    }
                },
                Plum: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Plum);
                    }
                },
                PowderBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.PowderBlue);
                    }
                },
                Purple: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Purple);
                    }
                },
                Red: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Red);
                    }
                },
                RosyBrown: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.RosyBrown);
                    }
                },
                RoyalBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.RoyalBlue);
                    }
                },
                SaddleBrown: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.SaddleBrown);
                    }
                },
                Salmon: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Salmon);
                    }
                },
                SandyBrown: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.SandyBrown);
                    }
                },
                SeaGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.SeaGreen);
                    }
                },
                SeaShell: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.SeaShell);
                    }
                },
                Sienna: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Sienna);
                    }
                },
                Silver: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Silver);
                    }
                },
                SkyBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.SkyBlue);
                    }
                },
                SlateBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.SlateBlue);
                    }
                },
                SlateGray: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.SlateGray);
                    }
                },
                Snow: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Snow);
                    }
                },
                SpringGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.SpringGreen);
                    }
                },
                SteelBlue: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.SteelBlue);
                    }
                },
                Tan: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Tan);
                    }
                },
                Teal: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Teal);
                    }
                },
                Thistle: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Thistle);
                    }
                },
                Tomato: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Tomato);
                    }
                },
                Turquoise: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Turquoise);
                    }
                },
                Violet: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Violet);
                    }
                },
                Wheat: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Wheat);
                    }
                },
                White: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.White);
                    }
                },
                WhiteSmoke: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.WhiteSmoke);
                    }
                },
                Yellow: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.Yellow);
                    }
                },
                YellowGreen: {
                    get: function () {
                        return new ExpressCraft.Color.$ctor1(ExpressCraft.KnownColor.YellowGreen);
                    }
                }
            },
            ctors: {
                init: function () {
                    this.Empty = new ExpressCraft.Color();
                    this.ARGBAlphaShift = 24;
                    this.ARGBRedShift = 16;
                    this.ARGBGreenShift = 8;
                    this.ARGBBlueShift = 0;
                    this.q = 255.0;
                },
                ctor: function () {
                    ExpressCraft.Color.Empty = new ExpressCraft.Color.ctor();
                    ExpressCraft.Color.StateKnownColorValid = 1;
                    ExpressCraft.Color.StateARGBValueValid = 2;
                    ExpressCraft.Color.StateValueMask = ExpressCraft.Color.StateARGBValueValid;
                    ExpressCraft.Color.StateNameValid = 8;
                    ExpressCraft.Color.NotDefinedValue = System.Int64(0);
                }
            },
            methods: {
                CheckByte: function (value) {
                    if ((value < 0) || (value > 255)) {
                        throw new System.ArgumentException.$ctor1("InvalidEx2BoundArgument");
                    }
                },
                MakeArgb: function (alpha, red, green, blue) {
                    return System.Int64((alpha << 24) | (red << 16) | (green << 8) | blue);
                },
                FromArgb: function (argb) {
                    return new ExpressCraft.Color.$ctor2(System.Int64(argb).and((System.Int64([-1,0]))), ExpressCraft.Color.StateARGBValueValid, null, 0);
                },
                FromArgb$3: function (alpha, red, green, blue) {
                    ExpressCraft.Color.CheckByte(alpha);
                    ExpressCraft.Color.CheckByte(red);
                    ExpressCraft.Color.CheckByte(green);
                    ExpressCraft.Color.CheckByte(blue);
                    return new ExpressCraft.Color.$ctor2(ExpressCraft.Color.MakeArgb((alpha & 255), (red & 255), (green & 255), (blue & 255)), ExpressCraft.Color.StateARGBValueValid, null, 0);
                },
                FromArgb$1: function (alpha, baseColor) {
                    ExpressCraft.Color.CheckByte(alpha);
                    return new ExpressCraft.Color.$ctor2(ExpressCraft.Color.MakeArgb((alpha & 255), baseColor.R, baseColor.G, baseColor.B), ExpressCraft.Color.StateARGBValueValid, null, 0);
                },
                FromArgb$2: function (red, green, blue) {
                    return ExpressCraft.Color.FromArgb$3(255, red, green, blue);
                },
                IsEnumValid: function (enumValue, value, minValue, maxValue) {
                    return ((value >= minValue) && (value <= maxValue));
                },
                FromKnownColor: function (color) {
                    return new ExpressCraft.Color.$ctor1(color);
                },
                FromHex: function (value) {
                    if (System.String.startsWith(value, "#")) {
                        return ExpressCraft.Color.FromHex(value.substr(1));
                    } else {
                        return ExpressCraft.Color.FromArgb(parseInt(value));
                    }
                },
                op_Implicit$1: function (color) {
                    return color.ToHTMLColor();
                },
                op_Implicit: function (hexValue) {
                    return ExpressCraft.Color.FromHex(hexValue);
                },
                op_Equality: function (left, right) {
                    if (((left.value.ne(right.value)) || (left.state !== right.state)) || (left.knownColor !== right.knownColor)) {
                        return false;
                    }
                    return ((Bridge.referenceEquals(left.name, right.name)) || (((left.name != null) && (right.name != null)) && System.String.equals(left.name, right.name)));
                },
                op_Inequality: function (left, right) {
                    return !(ExpressCraft.Color.op_Equality(left.$clone(), right.$clone()));
                },
                getDefaultValue: function () { return new ExpressCraft.Color(); }
            }
        },
        fields: {
            name: null,
            value: System.Int64(0),
            knownColor: 0,
            state: 0
        },
        props: {
            R: {
                get: function () {
                    return System.Int64.clipu8((this.Value.shr(16)).and(System.Int64(255)));
                }
            },
            G: {
                get: function () {
                    return System.Int64.clipu8((this.Value.shr(8)).and(System.Int64(255)));
                }
            },
            B: {
                get: function () {
                    return System.Int64.clipu8(this.Value.and(System.Int64(255)));
                }
            },
            A: {
                get: function () {
                    return System.Int64.clipu8((this.Value.shr(24)).and(System.Int64(255)));
                }
            },
            IsKnownColor: {
                get: function () {
                    return ((this.state & ExpressCraft.Color.StateKnownColorValid) > 0);
                }
            },
            IsEmpty: {
                get: function () {
                    return (this.state === 0);
                }
            },
            IsNamedColor: {
                get: function () {
                    if ((this.state & ExpressCraft.Color.StateNameValid) === 0) {
                        return this.IsKnownColor;
                    }
                    return true;
                }
            },
            IsSystemColor: {
                get: function () {
                    if (!this.IsKnownColor) {
                        return false;
                    }
                    if (this.knownColor > 26) {
                        return (this.knownColor > 167);
                    }
                    return true;
                }
            },
            NameAndARGBValue: {
                get: function () {
                    return System.String.format("{{Name={0}, ARGB=({1}, {2}, {3}, {4})}}", this.Name, Bridge.box(this.A, System.Byte), Bridge.box(this.R, System.Byte), Bridge.box(this.G, System.Byte), Bridge.box(this.B, System.Byte));
                }
            },
            Name: {
                get: function () {
                    if ((this.state & ExpressCraft.Color.StateNameValid) !== 0) {
                        return this.name;
                    }
                    if (!this.IsKnownColor) {
                        return System.Convert.toStringInBase(this.value, 16, 11);
                    }
                    var str = ExpressCraft.KnownColorTable.KnownColorToName(this.knownColor);
                    if (str != null) {
                        return str;
                    }
                    return Bridge.toString(this.knownColor);
                }
            },
            Value: {
                get: function () {
                    if ((this.state & ExpressCraft.Color.StateValueMask) !== 0) {
                        return this.value;
                    }
                    if (this.IsKnownColor) {
                        return System.Int64(ExpressCraft.KnownColorTable.KnownColorToArgb(this.knownColor));
                    }
                    return ExpressCraft.Color.NotDefinedValue;
                }
            }
        },
        ctors: {
            $ctor1: function (knownColor) {
                this.$initialize();
                this.value = System.Int64(0);
                this.state = ExpressCraft.Color.StateKnownColorValid;
                this.name = null;
                this.knownColor = Bridge.Int.sxs(knownColor & 65535);
            },
            $ctor2: function (value, state, name, knownColor) {
                this.$initialize();
                this.value = value;
                this.state = state;
                this.name = name;
                this.knownColor = Bridge.Int.sxs(knownColor & 65535);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            componentToHex: function (value) {
                var x = value.toString(16);
                return ((x.length === 1 ? "0" : "") || "") + (x || "");
            },
            ToHTMLColor: function () {
                if (this.A !== 255) {
                    return System.String.format("#{0}{1}{2}{3}", this.componentToHex(this.A), this.componentToHex(this.R), this.componentToHex(this.G), this.componentToHex(this.B));
                } else {
                    return System.String.format("#{0}{1}{2}", this.componentToHex(this.R), this.componentToHex(this.G), this.componentToHex(this.B));
                }
            },
            GetBrightness: function () {
                var z = this.R / ExpressCraft.Color.q;
                var x = this.G / ExpressCraft.Color.q;
                var c = this.B / ExpressCraft.Color.q;
                var v = z;
                var b = z;
                if (x > v) {
                    v = x;
                }
                if (c > v) {
                    v = c;
                }
                if (x < b) {
                    b = x;
                }
                if (c < b) {
                    b = c;
                }
                return ((v + b) / 2.0);
            },
            GetHue: function () {
                if ((this.R === this.G) && (this.G === this.B)) {
                    return 0.0;
                }
                var z = this.R / ExpressCraft.Color.q;
                var x = this.G / ExpressCraft.Color.q;
                var c = this.B / ExpressCraft.Color.q;
                var v = 0.0;
                var b = z;
                var n = z;
                if (x > b) {
                    b = x;
                }
                if (c > b) {
                    b = c;
                }
                if (x < n) {
                    n = x;
                }
                if (c < n) {
                    n = c;
                }
                var num6 = b - n;
                if (z === b) {
                    v = (x - c) / num6;
                } else if (x === b) {
                    v = 2.0 + ((c - z) / num6);
                } else if (c === b) {
                    v = 4.0 + ((z - x) / num6);
                }
                v *= 60.0;
                if (v < 0.0) {
                    v += 360.0;
                }
                return v;
            },
            GetSaturation: function () {
                var z = this.R / ExpressCraft.Color.q;
                var x = this.G / ExpressCraft.Color.q;
                var c = this.B / ExpressCraft.Color.q;
                var v = 0.0;
                var b = z;
                var n = z;
                if (x > b) {
                    b = x;
                }
                if (c > b) {
                    b = c;
                }
                if (x < n) {
                    n = x;
                }
                if (c < n) {
                    n = c;
                }
                if (b === n) {
                    return v;
                }
                var m = (b + n) / 2.0;
                if (m <= 0.5) {
                    return ((b - n) / (b + n));
                }
                return ((b - n) / ((2.0 - b) - n));
            },
            ToArgb: function () {
                return System.Int64.clip32(this.Value);
            },
            ToKnownColor: function () {
                return this.knownColor;
            },
            toString: function () {
                var builder = new System.Text.StringBuilder("", 32);
                builder.append(Bridge.Reflection.getTypeName(Bridge.getType(this)));
                builder.append(" [");
                if ((this.state & ExpressCraft.Color.StateNameValid) !== 0) {
                    builder.append(this.Name);
                } else if ((this.state & ExpressCraft.Color.StateKnownColorValid) !== 0) {
                    builder.append(this.Name);
                } else if ((this.state & ExpressCraft.Color.StateValueMask) !== 0) {
                    builder.appendFormat("A={0}, R={1}, G={2}, B={3}", Bridge.box(this.A, System.Byte), Bridge.box(this.R, System.Byte), Bridge.box(this.G, System.Byte), Bridge.box(this.B, System.Byte));
                } else {
                    builder.append("Empty");
                }
                builder.append("]");
                return builder.toString();
            },
            equals: function (obj) {
                if (Bridge.is(obj, ExpressCraft.Color)) {
                    var color = System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, ExpressCraft.Color), ExpressCraft.Color));
                    if (((this.value.equals(color.value)) && (this.state === color.state)) && (this.knownColor === color.knownColor)) {
                        return ((Bridge.referenceEquals(this.name, color.name)) || (((this.name != null) && (color.name != null)) && System.String.equals(this.name, this.name)));
                    }
                }
                return false;
            },
            getHashCode: function () {
                return ((Bridge.getHashCode(this.value) ^ Bridge.getHashCode(this.state)) ^ Bridge.getHashCode(this.knownColor));
            },
            $clone: function (to) {
                var s = to || new ExpressCraft.Color();
                s.name = this.name;
                s.value = this.value;
                s.knownColor = this.knownColor;
                s.state = this.state;
                return s;
            }
        }
    });

    Bridge.define("ExpressCraft.ComboBoxTypes", {
        $kind: "enum",
        statics: {
            fields: {
                Default: 0
            }
        }
    });

    Bridge.define("ExpressCraft.ConsoleLogType", {
        $kind: "enum",
        statics: {
            fields: {
                Log: 0,
                Debug: 1,
                Error: 2
            }
        }
    });

    Bridge.define("ExpressCraft.ContextItem", {
        fields: {
            Caption: null,
            OnItemClick: null,
            BeginGroup: false,
            Enabled: false
        },
        ctors: {
            init: function () {
                this.Caption = "";
                this.BeginGroup = false;
                this.Enabled = true;
            },
            ctor: function () {
                this.$initialize();
            },
            $ctor2: function (caption, beginGroup) {
                if (beginGroup === void 0) { beginGroup = false; }

                this.$initialize();
                this.Caption = caption;
                this.BeginGroup = beginGroup;
            },
            $ctor1: function (caption, _OnItemClick, beginGroup) {
                if (beginGroup === void 0) { beginGroup = false; }

                this.$initialize();
                this.Caption = caption;
                this.BeginGroup = beginGroup;
                this.OnItemClick = _OnItemClick;
            }
        }
    });

    Bridge.define("ExpressCraft.DashStyle", {
        $kind: "enum",
        statics: {
            fields: {
                Solid: 0,
                Dash: 1,
                Dot: 2,
                DashDot: 3,
                DashDotDot: 4,
                Custom: 5
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumn", {
        fields: {
            FieldName: null,
            DataType: 0,
            Self: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this.Self = this;
            }
        },
        methods: {
            GetDisplayValue$1: function (rowIndex, formatString) {
                switch (this.DataType) {
                    default: 
                    case ExpressCraft.DataType.Object: 
                        return System.String.format(formatString, [(Bridge.cast(this, ExpressCraft.DataColumnObject).Cells.getItem(rowIndex))]);
                    case ExpressCraft.DataType.DateTime: 
                        var obj = Bridge.cast(this, ExpressCraft.DataColumnDateTime).Cells.getItem(rowIndex);
                        if (obj == null) {
                            return "";
                        }
                        var d = { };
                        if (Bridge.is(obj, System.DateTime)) {
                            d.v = Bridge.cast(obj, System.DateTime);
                            if (Bridge.equals(d.v, System.DateTime.getMinValue())) {
                                return "";
                            }
                            return System.String.format(formatString, [Bridge.box(d.v, System.DateTime, System.DateTime.format)]);
                        }
                        if (System.DateTime.tryParse(obj, null, d)) {
                            if (Bridge.equals(d.v, System.DateTime.getMinValue())) {
                                return "";
                            }
                            return System.String.format(formatString, [Bridge.box(d.v, System.DateTime, System.DateTime.format)]);
                        }
                        var str = Bridge.as(obj, System.String);
                        if (System.String.isNullOrWhiteSpace(str)) {
                            return "";
                        }
                        return System.String.format(formatString, [str]);
                    case ExpressCraft.DataType.String: 
                        return System.String.format(formatString, [Bridge.cast(this, ExpressCraft.DataColumnString).Cells.getItem(rowIndex)]);
                    case ExpressCraft.DataType.Integer: 
                        return System.String.format(formatString, [Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnInteger).Cells.getItem(rowIndex), System.Int32, System.Nullable.toString, System.Nullable.getHashCode)]);
                    case ExpressCraft.DataType.Long: 
                        return System.String.format(formatString, [Bridge.cast(this, ExpressCraft.DataColumnLong).Cells.getItem(rowIndex)]);
                    case ExpressCraft.DataType.Float: 
                        return System.String.format(formatString, [Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnFloat).Cells.getItem(rowIndex), System.Single, System.Nullable.toStringFn(System.Single.format), System.Nullable.getHashCodeFn(System.Single.getHashCode))]);
                    case ExpressCraft.DataType.Double: 
                        return System.String.format(formatString, [Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnDouble).Cells.getItem(rowIndex), System.Double, System.Nullable.toStringFn(System.Double.format), System.Nullable.getHashCodeFn(System.Double.getHashCode))]);
                    case ExpressCraft.DataType.Decimal: 
                        return System.String.format(formatString, [Bridge.cast(this, ExpressCraft.DataColumnDecimal).Cells.getItem(rowIndex)]);
                    case ExpressCraft.DataType.Byte: 
                        return System.String.format(formatString, [Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnByte).Cells.getItem(rowIndex), System.Byte, System.Nullable.toString, System.Nullable.getHashCode)]);
                    case ExpressCraft.DataType.Short: 
                        return System.String.format(formatString, [Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnShort).Cells.getItem(rowIndex), System.Int16, System.Nullable.toString, System.Nullable.getHashCode)]);
                    case ExpressCraft.DataType.Bool: 
                        return System.String.format(formatString, [Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnBool).Cells.getItem(rowIndex), System.Boolean, System.Nullable.toStringFn(System.Boolean.toString), System.Nullable.getHashCode)]);
                }
            },
            GetDisplayValue: function (rowIndex) {
                if (this.Self.Cells.Count <= rowIndex) {
                    return null;
                }

                switch (this.DataType) {
                    default: 
                    case ExpressCraft.DataType.Object: 
                        return System.Convert.toString(Bridge.cast(this, ExpressCraft.DataColumnObject).Cells.getItem(rowIndex));
                    case ExpressCraft.DataType.DateTime: 
                        return System.Convert.toString(Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnDateTime).Cells.getItem(rowIndex), System.DateTime, System.Nullable.toStringFn(System.DateTime.format), System.Nullable.getHashCode));
                    case ExpressCraft.DataType.String: 
                        return Bridge.cast(this, ExpressCraft.DataColumnString).Cells.getItem(rowIndex);
                    case ExpressCraft.DataType.Integer: 
                        return System.Convert.toString(Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnInteger).Cells.getItem(rowIndex), System.Int32, System.Nullable.toString, System.Nullable.getHashCode));
                    case ExpressCraft.DataType.Long: 
                        return System.Convert.toString(Bridge.cast(this, ExpressCraft.DataColumnLong).Cells.getItem(rowIndex));
                    case ExpressCraft.DataType.Float: 
                        return System.Convert.toString(Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnFloat).Cells.getItem(rowIndex), System.Single, System.Nullable.toStringFn(System.Single.format), System.Nullable.getHashCodeFn(System.Single.getHashCode)));
                    case ExpressCraft.DataType.Double: 
                        return System.Convert.toString(Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnDouble).Cells.getItem(rowIndex), System.Double, System.Nullable.toStringFn(System.Double.format), System.Nullable.getHashCodeFn(System.Double.getHashCode)));
                    case ExpressCraft.DataType.Decimal: 
                        return System.Convert.toString(Bridge.cast(this, ExpressCraft.DataColumnDecimal).Cells.getItem(rowIndex));
                    case ExpressCraft.DataType.Byte: 
                        return System.Convert.toString(Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnByte).Cells.getItem(rowIndex), System.Byte, System.Nullable.toString, System.Nullable.getHashCode));
                    case ExpressCraft.DataType.Bool: 
                        return System.Convert.toString(Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnBool).Cells.getItem(rowIndex), System.Boolean, System.Nullable.toStringFn(System.Boolean.toString), System.Nullable.getHashCode));
                    case ExpressCraft.DataType.Short: 
                        return System.Convert.toString(Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnShort).Cells.getItem(rowIndex), System.Int16, System.Nullable.toString, System.Nullable.getHashCode));
                }
            },
            GetCellValue: function (rowIndex) {
                if (this.Self.Cells.Count <= rowIndex) {
                    return null;
                }

                switch (this.DataType) {
                    default: 
                    case ExpressCraft.DataType.Object: 
                        return Bridge.cast(this, ExpressCraft.DataColumnObject).Cells.getItem(rowIndex);
                    case ExpressCraft.DataType.DateTime: 
                        return Bridge.box(Bridge.cast(this, ExpressCraft.DataColumnDateTime).Cells.getItem(rowIndex), System.DateTime, System.Nullable.toStringFn(System.DateTime.format), System.Nullable.getHashCode);
                    case ExpressCraft.DataType.String: 
                        return Bridge.cast(this, ExpressCraft.DataColumnString).Cells.getItem(rowIndex);
                    case ExpressCraft.DataType.Integer: 
                        return Bridge.box((Bridge.cast(this, ExpressCraft.DataColumnInteger).Cells.getItem(rowIndex)), System.Int32, System.Nullable.toString, System.Nullable.getHashCode);
                    case ExpressCraft.DataType.Long: 
                        return (Bridge.cast(this, ExpressCraft.DataColumnLong).Cells.getItem(rowIndex));
                    case ExpressCraft.DataType.Float: 
                        return Bridge.box((Bridge.cast(this, ExpressCraft.DataColumnFloat).Cells.getItem(rowIndex)), System.Single, System.Nullable.toStringFn(System.Single.format), System.Nullable.getHashCodeFn(System.Single.getHashCode));
                    case ExpressCraft.DataType.Double: 
                        return Bridge.box((Bridge.cast(this, ExpressCraft.DataColumnDouble).Cells.getItem(rowIndex)), System.Double, System.Nullable.toStringFn(System.Double.format), System.Nullable.getHashCodeFn(System.Double.getHashCode));
                    case ExpressCraft.DataType.Decimal: 
                        return (Bridge.cast(this, ExpressCraft.DataColumnDecimal).Cells.getItem(rowIndex));
                    case ExpressCraft.DataType.Byte: 
                        return Bridge.box((Bridge.cast(this, ExpressCraft.DataColumnByte).Cells.getItem(rowIndex)), System.Byte, System.Nullable.toString, System.Nullable.getHashCode);
                    case ExpressCraft.DataType.Bool: 
                        return Bridge.box((Bridge.cast(this, ExpressCraft.DataColumnBool).Cells.getItem(rowIndex)), System.Boolean, System.Nullable.toStringFn(System.Boolean.toString), System.Nullable.getHashCode);
                    case ExpressCraft.DataType.Short: 
                        return Bridge.box((Bridge.cast(this, ExpressCraft.DataColumnShort).Cells.getItem(rowIndex)), System.Int16, System.Nullable.toString, System.Nullable.getHashCode);
                }
            }
        }
    });

    Bridge.define("ExpressCraft.DataItem", {
        fields: {
            Text: null,
            Value: null
        },
        ctors: {
            $ctor1: function (text, value) {
                this.$initialize();
                this.Text = text;
                this.Value = value;
            },
            ctor: function (text) {
                this.$initialize();
                this.Text = text;
                this.Value = text;
            }
        }
    });

    Bridge.define("ExpressCraft.DataRow", {
        fields: {
            ParentTable: null,
            RowIndex: 0,
            batchData: null
        },
        ctors: {
            init: function () {
                this.RowIndex = -1;
            },
            ctor: function () {
                this.$initialize();
            },
            $ctor2: function (columnLength) {
                this.$initialize();
                this.ParentTable = null;
                this.RowIndex = -1;
                this.batchData = System.Array.init(columnLength, null, System.Object);
            },
            $ctor1: function (parentTable, rowIndex) {
                if (rowIndex === void 0) { rowIndex = -1; }

                this.$initialize();
                this.ParentTable = parentTable;
                this.RowIndex = rowIndex;
                if (rowIndex === -1) {
                    this.batchData = System.Array.init(parentTable.ColumnCount, null, System.Object);
                }
            }
        },
        methods: {
            getItem: function (columnIndex) {
                return this.GetValue(columnIndex);
            },
            setItem: function (columnIndex, value) {
                this.SetValue(columnIndex, value);
            },
            GetOfflineDataRow: function () {
                var dr = new ExpressCraft.DataRow.$ctor2(this.ParentTable.ColumnCount);
                var data = System.Array.init(this.ParentTable.ColumnCount, null, System.Object);
                for (var i = 0; i < this.ParentTable.ColumnCount; i = (i + 1) | 0) {
                    data[System.Array.index(i, data)] = this.getItem(i);
                }
                dr.batchData = data;
                return dr;
            },
            SetValue$1: function (fieldName, value) {
                for (var i = 0; i < this.ParentTable.ColumnCount; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals(this.ParentTable.Columns.getItem(i).FieldName, fieldName)) {
                        if (this.RowIndex === -1) {
                            if (!Bridge.referenceEquals(this.batchData[System.Array.index(i, this.batchData)], value)) {
                                this.batchData[System.Array.index(i, this.batchData)] = value;
                                this.ParentTable.RequireOnDataChangeEvent();
                            }

                            return;
                        }
                        var col = this.ParentTable.Columns.getItem(i);
                        if (!Bridge.referenceEquals(col.Cells._items[this.RowIndex], value)) {
                            col.Cells._items[this.RowIndex] = Bridge.unbox(value);
                            this.ParentTable.RequireOnDataChangeEvent();
                        }
                        return;
                    }
                }
            },
            SetValue: function (columnIndex, value) {
                if (this.RowIndex === -1) {
                    if (!Bridge.referenceEquals(this.batchData[System.Array.index(columnIndex, this.batchData)], value)) {
                        this.batchData[System.Array.index(columnIndex, this.batchData)] = value;
                        this.ParentTable.RequireOnDataChangeEvent();
                    }

                    return;
                }
                var col = this.ParentTable.Columns.getItem(columnIndex);
                if (!Bridge.referenceEquals(col.Cells._items[this.RowIndex], value)) {
                    col.Cells._items[this.RowIndex] = Bridge.unbox(value);
                    this.ParentTable.RequireOnDataChangeEvent();
                }
            },
            GetValue$1: function (fieldName) {
                for (var i = 0; i < this.ParentTable.ColumnCount; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals(this.ParentTable.Columns.getItem(i).FieldName, fieldName)) {
                        if (this.RowIndex === -1) {
                            return this.batchData[System.Array.index(i, this.batchData)];
                        }
                        var col = this.ParentTable.Columns.getItem(i);
                        return col.Cells._items[this.RowIndex];
                    }
                }
                return null;
            },
            GetValue: function (columnIndex) {
                if (this.RowIndex === -1) {
                    return this.batchData[System.Array.index(columnIndex, this.batchData)];
                }
                var col = this.ParentTable.Columns.getItem(columnIndex);
                return col.Cells._items[this.RowIndex];
            }
        }
    });

    Bridge.define("ExpressCraft.DataTable", {
        fields: {
            Columns: null,
            _searchResults: null,
            _searchActive: false,
            _searchString: null,
            _inDataChange: false,
            _requestedOnDataChange: false,
            _ColCount: 0,
            _RowCount: 0,
            NewRows: null
        },
        events: {
            OnDataSourceChanged: null
        },
        props: {
            SearchString: {
                get: function () {
                    return this._searchString;
                }
            },
            ColumnCount: {
                get: function () {
                    return this._ColCount;
                }
            },
            RowCount: {
                get: function () {
                    if (this._searchActive) {
                        return this._searchResults.Count;
                    }
                    return this._RowCount;
                }
            }
        },
        ctors: {
            init: function () {
                this.Columns = new (System.Collections.Generic.List$1(ExpressCraft.DataColumn)).ctor();
                this._searchResults = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this._searchActive = false;
                this._inDataChange = false;
                this._requestedOnDataChange = false;
                this.NewRows = new (System.Collections.Generic.List$1(ExpressCraft.DataRow)).ctor();
            }
        },
        methods: {
            getItem: function (rowIndex) {
                return new ExpressCraft.DataRow.$ctor1(this, rowIndex);
            },
            Search: function (searchData, view) {
                if (view == null) {
                    this._searchString = "";
                    this._searchActive = false;
                    this._searchResults = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                    this.RequireOnDataChangeEvent();

                    return;
                }
                this._searchString = searchData.toLowerCase();
                this._searchActive = !System.String.isNullOrWhiteSpace(this._searchString);


                if (this._searchActive) {
                    this._searchResults = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                    var count = view.ColumnCount();

                    var UseFormat = new (System.Collections.Generic.List$1(System.Tuple$2(System.Boolean,System.String))).ctor();
                    for (var x = 0; x < count; x = (x + 1) | 0) {
                        var gridCol = view.GetColumn(x);
                        if (gridCol.Visible) {
                            var FormatString = gridCol.FormatString;
                            UseFormat.add({ Item1: System.String.isNullOrWhiteSpace(FormatString), Item2: FormatString });
                        } else {
                            UseFormat.add({ Item1: false, Item2: "" });
                        }
                    }

                    for (var y = 0; y < this._RowCount; y = (y + 1) | 0) {
                        for (var x1 = 0; x1 < count; x1 = (x1 + 1) | 0) {
                            var gridCol1 = view.GetColumn(x1);
                            if (gridCol1.Visible) {
                                var Column = gridCol1.Column;
                                var helperWhatToDo = UseFormat.getItem(x1);

                                var value;

                                if (helperWhatToDo.Item1) {
                                    value = Column.GetDisplayValue(y);
                                } else {
                                    value = Column.GetDisplayValue$1(y, helperWhatToDo.Item2);
                                }

                                if (!System.String.isNullOrWhiteSpace(value) && System.String.startsWith(value.toLowerCase(), searchData)) {
                                    this._searchResults.add(y);
                                    break;
                                }
                            }
                        }
                    }
                } else {
                    this._searchResults = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                }

                this.RequireOnDataChangeEvent();
            },
            RequireOnDataChangeEvent: function () {
                if (!this._inDataChange) {
                    this._requestedOnDataChange = false;
                    if (!Bridge.staticEquals(this.OnDataSourceChanged, null)) {
                        this.OnDataSourceChanged(this, null);
                    }
                } else {
                    this._requestedOnDataChange = true;
                }
            },
            ClearRows: function () {
                this._RowCount = 0;
                for (var i = 0; i < this.Columns.Count; i = (i + 1) | 0) {
                    this.ClearCells(this.Columns.getItem(i));
                }
            },
            ClearCells$1: function (T, _column) {
                var _col = _column;
                _col.Cells = new (System.Collections.Generic.List$1(T)).ctor();
            },
            ClearCells: function (_column) {
                switch (_column.DataType) {
                    default: 
                    case ExpressCraft.DataType.Object: 
                        this.ClearCells$1(System.Object, _column);
                        break;
                    case ExpressCraft.DataType.DateTime: 
                        this.ClearCells$1(System.Nullable$1(System.DateTime), _column);
                        break;
                    case ExpressCraft.DataType.String: 
                        this.ClearCells$1(System.String, _column);
                        break;
                    case ExpressCraft.DataType.Integer: 
                        this.ClearCells$1(System.Nullable$1(System.Int32), _column);
                        break;
                    case ExpressCraft.DataType.Long: 
                        this.ClearCells$1(System.Nullable$1(System.Int64), _column);
                        break;
                    case ExpressCraft.DataType.Float: 
                        this.ClearCells$1(System.Nullable$1(System.Single), _column);
                        break;
                    case ExpressCraft.DataType.Double: 
                        this.ClearCells$1(System.Nullable$1(System.Double), _column);
                        break;
                    case ExpressCraft.DataType.Decimal: 
                        this.ClearCells$1(System.Nullable$1(System.Decimal), _column);
                        break;
                    case ExpressCraft.DataType.Bool: 
                        this.ClearCells$1(System.Nullable$1(System.Boolean), _column);
                        break;
                    case ExpressCraft.DataType.Byte: 
                        this.ClearCells$1(System.Nullable$1(System.Byte), _column);
                        break;
                    case ExpressCraft.DataType.Short: 
                        this.ClearCells$1(System.Nullable$1(System.Int16), _column);
                        break;
                }
                this.RequireOnDataChangeEvent();
            },
            GetColumnByDataType: function (type) {
                if (type === void 0) { type = 0; }
                switch (type) {
                    default: 
                    case ExpressCraft.DataType.Object: 
                        return new ExpressCraft.DataColumnObject();
                    case ExpressCraft.DataType.DateTime: 
                        return new ExpressCraft.DataColumnDateTime();
                    case ExpressCraft.DataType.String: 
                        return new ExpressCraft.DataColumnString();
                    case ExpressCraft.DataType.Integer: 
                        return new ExpressCraft.DataColumnInteger();
                    case ExpressCraft.DataType.Long: 
                        return new ExpressCraft.DataColumnLong();
                    case ExpressCraft.DataType.Float: 
                        return new ExpressCraft.DataColumnFloat();
                    case ExpressCraft.DataType.Double: 
                        return new ExpressCraft.DataColumnDouble();
                    case ExpressCraft.DataType.Decimal: 
                        return new ExpressCraft.DataColumnDecimal();
                    case ExpressCraft.DataType.Bool: 
                        return new ExpressCraft.DataColumnBool();
                    case ExpressCraft.DataType.Byte: 
                        return new ExpressCraft.DataColumnByte();
                    case ExpressCraft.DataType.Short: 
                        return new ExpressCraft.DataColumnShort();
                }
            },
            AddColumn: function (fieldName, type) {
                if (type === void 0) { type = 0; }
                var col = this.GetColumnByDataType(type);
                col.FieldName = fieldName;

                this.Columns.add(col);
                this._ColCount = this.Columns.Count;

                this.RequireOnDataChangeEvent();
            },
            BeginNewRow: function (EstimatedNewRows) {
                this.NewRows = new (System.Collections.Generic.List$1(ExpressCraft.DataRow)).$ctor2(EstimatedNewRows);
                this.BeginDataUpdate();
            },
            AddRow: function () {
                var dr = new ExpressCraft.DataRow.$ctor1(this, Bridge.identity(this._RowCount, (this._RowCount = (this._RowCount + 1) | 0)));
                var colLength = this.Columns.Count;
                for (var x = 0; x < colLength; x = (x + 1) | 0) {
                    var col = this.Columns.getItem(x);
                    col.Cells.add(null);
                }

                this.RequireOnDataChangeEvent();

                return dr;
            },
            AddRow$1: function (row) {
                if (row === void 0) { row = []; }
                if (row.length === this.ColumnCount) {
                    this._RowCount = (this._RowCount + 1) | 0;
                    var colLength = this.Columns.Count;
                    for (var x = 0; x < colLength; x = (x + 1) | 0) {
                        var col = this.Columns.getItem(x);
                        col.Cells.add(Bridge.unbox(row[System.Array.index(x, row)]));
                    }
                    this.RequireOnDataChangeEvent();
                }
            },
            NewRow: function () {
                var dr = new ExpressCraft.DataRow.$ctor1(this);

                this.NewRows.add(dr);

                return dr;
            },
            AcceptNewRows: function () {
                var $t, $t1, $t2;
                if (this.NewRows == null || this.NewRows.Count === 0) {
                    return;
                }
                var colLength = this.Columns.Count;
                var rowLength = this.NewRows.Count;
                var colN1 = (colLength - 1) | 0;

                for (var x = 0; x < colLength; x = (x + 1) | 0) {
                    var col = this.Columns.getItem(x);
                    var DataCells = System.Array.init(rowLength, null, System.Object);

                    if (x === 0) {
                        for (var y = 0; y < rowLength; y = (y + 1) | 0) {
                            this.NewRows.getItem(y).RowIndex = Bridge.identity(this._RowCount, (this._RowCount = (this._RowCount + 1) | 0));
                            DataCells[System.Array.index(y, DataCells)] = ($t = this.NewRows.getItem(y).batchData)[System.Array.index(x, $t)];
                        }
                    } else if (x === colN1) {
                        for (var y1 = 0; y1 < rowLength; y1 = (y1 + 1) | 0) {
                            DataCells[System.Array.index(y1, DataCells)] = ($t1 = this.NewRows.getItem(y1).batchData)[System.Array.index(x, $t1)];
                            this.NewRows.getItem(y1).batchData = null;
                        }
                    } else {
                        for (var y2 = 0; y2 < rowLength; y2 = (y2 + 1) | 0) {
                            DataCells[System.Array.index(y2, DataCells)] = ($t2 = this.NewRows.getItem(y2).batchData)[System.Array.index(x, $t2)];
                        }
                    }
                    col.Cells.AddRange(Bridge.unbox(DataCells));
                }
                this.NewRows.clear();

                this.EndDataUpdate();
            },
            BeginDataUpdate: function () {
                this._inDataChange = true;
                this._requestedOnDataChange = false;
            },
            EndDataUpdate: function () {
                this._inDataChange = false;
                if (this._requestedOnDataChange) {
                    this._requestedOnDataChange = false;
                    if (!Bridge.staticEquals(this.OnDataSourceChanged, null)) {
                        this.OnDataSourceChanged(this, null);
                    }
                }
            },
            RejectNewRows: function () {
                this.NewRows.clear();
                this._inDataChange = false;
            }
        }
    });

    Bridge.define("ExpressCraft.DataType", {
        $kind: "enum",
        statics: {
            fields: {
                Object: 0,
                DateTime: 1,
                String: 2,
                Integer: 3,
                Long: 4,
                Float: 5,
                Double: 6,
                Decimal: 7,
                Bool: 8,
                Byte: 9,
                Short: 10
            }
        }
    });

    Bridge.define("ExpressCraft.DateControl.DisplayMode", {
        $kind: "nested enum",
        statics: {
            fields: {
                Day: 0,
                Month: 1,
                Year: 2
            }
        }
    });

    Bridge.define("ExpressCraft.DialogResult", {
        fields: {
            ResultEnum: 0,
            CallBack: null
        },
        ctors: {
            init: function () {
                this.ResultEnum = ExpressCraft.DialogResultEnum.None;
            },
            ctor: function (resultEnum, callBack) {
                this.$initialize();
                this.ResultEnum = resultEnum;
                this.CallBack = callBack;
            }
        },
        methods: {
            InvokeIfResult: function (resultEnum) {
                if (resultEnum === this.ResultEnum && !Bridge.staticEquals(this.CallBack, null)) {
                    this.CallBack();
                }
            }
        }
    });

    Bridge.define("ExpressCraft.DialogResultEnum", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                OK: 1,
                Cancel: 2,
                Abort: 3,
                Send: 4,
                Ignore: 5,
                Yes: 6,
                No: 7
            }
        }
    });

    Bridge.define("ExpressCraft.ExternalPlugin", {
        fields: {
            SourceUrl: null,
            SetupCompleted: false,
            InLoad: false,
            OnReady: null
        },
        ctors: {
            init: function () {
                this.SetupCompleted = false;
                this.InLoad = false;
            },
            ctor: function (sourceUrl) {
                this.$initialize();
                this.SourceUrl = sourceUrl;
            }
        },
        methods: {
            Setup: function (async, defer) {
                var $t;
                if (async === void 0) { async = false; }
                if (defer === void 0) { defer = false; }
                if (!this.SetupCompleted) {
                    if (this.InLoad) {
                        return;
                    }
                    this.InLoad = true;
                    var script = ($t = document.createElement("script"), $t.onload = Bridge.fn.bind(this, function (ele) {
                        this.SetupCompleted = true;
                        this.InLoad = false;
                        if (!Bridge.staticEquals(this.OnReady, null)) {
                            this.OnReady();
                        }
                    }), $t.src = this.SourceUrl, $t);
                    if (async) {
                        script.async = async;
                    }
                    if (defer) {
                        script.defer = defer;
                    }
                    ExpressCraft.Helper.AppendChild$2(document.head, script);
                }
            },
            UsageCheck: function () {
                if (!this.SetupCompleted) {
                    throw new System.Exception("'" + (this.SourceUrl || "") + "' requires to be setup!");
                }
                if (this.InLoad) {
                    throw new System.Exception("'" + (this.SourceUrl || "") + "' is currently loading, Please try again in a few seconds!");
                }
            }
        }
    });

    Bridge.define("ExpressCraft.Firebase", {
        statics: {
            fields: {
                ExternalFireBase: null,
                DisplayName: null,
                PhotoURL: null,
                UserSignedIn: false
            },
            ctors: {
                init: function () {
                    this.ExternalFireBase = new ExpressCraft.ExternalPlugin("https://www.gstatic.com/firebasejs/3.6.8/firebase.js");
                }
            },
            methods: {
                Setup: function (OnReady) {
                    if (OnReady === void 0) { OnReady = null; }
                    ExpressCraft.Firebase.ExternalFireBase.OnReady = OnReady;
                    ExpressCraft.Firebase.ExternalFireBase.Setup();
                },
                InitializeApp: function (ApiKey, AuthDomain, DatabaseURL, ProjectId, StorageBucket, MessagingSenderId) {
                    ExpressCraft.Firebase.ExternalFireBase.UsageCheck();
                    if (System.String.isNullOrWhiteSpace(ApiKey)) {
                        throw new System.Exception(System.String.format("Invalid Firebase {0} !", ["ApiKey"]));
                    }
                    if (System.String.isNullOrWhiteSpace(AuthDomain)) {
                        throw new System.Exception(System.String.format("Invalid Firebase {0}!", ["AuthDomain"]));
                    }
                    if (System.String.isNullOrWhiteSpace(DatabaseURL)) {
                        throw new System.Exception(System.String.format("Invalid Firebase {0}!", ["DatabaseURL"]));
                    }
                    if (System.String.isNullOrWhiteSpace(ProjectId)) {
                        throw new System.Exception(System.String.format("Invalid Firebase {0}!", ["ProjectId"]));
                    }
                    if (System.String.isNullOrWhiteSpace(StorageBucket)) {
                        throw new System.Exception(System.String.format("Invalid Firebase {0}!", ["StorageBucket"]));
                    }
                    if (System.String.isNullOrWhiteSpace(MessagingSenderId)) {
                        throw new System.Exception(System.String.format("Invalid Firebase {0}!", ["MessagingSenderId"]));
                    }

                    			firebase.initializeApp({apiKey: ApiKey, authDomain: AuthDomain, databaseURL: DatabaseURL, projectId : ProjectId, storageBucket: StorageBucket, messagingSenderId: MessagingSenderId });
                    			firebase.auth().onAuthStateChanged(function(user) {
                    				if (user) {
                    					this.UserSignedIn = true;
                    					this.DisplayName = user.displayName;
                    					this.PhotoURL = user.photoURL;
                    				}else{
                    					this.UserSignedIn = false;
                    				}
                    			});
                    			
                },
                SignIn: function () {
                    			firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
                    			
                },
                SignOut: function () {
                    			firebase.auth().signOut();
                    			
                },
                DatabaseRef: function (name) {
                    var dataRef = firebase.database().ref(name);
                    dataRef.off();
                    return dataRef;
                },
                IsSignedInWithFirebase: function () {
                    return 
			if(firebase.auth().currentUser)
			{
				return true;
			}else
			{
				return false;
			};
                }
            }
        }
    });

    Bridge.define("ExpressCraft.FixedSplitterPosition", {
        $kind: "enum",
        statics: {
            fields: {
                Panel1: 0,
                Panel2: 1,
                None: 2
            }
        }
    });

    Bridge.define("ExpressCraft.Font", {
        fields: {
            FontString: null
        },
        ctors: {
            ctor: function (fontString) {
                this.$initialize();
                this.FontString = fontString;
            }
        }
    });

    Bridge.define("ExpressCraft.FormButtonType", {
        $kind: "enum",
        statics: {
            fields: {
                Close: 0,
                Maximize: 1,
                Minimize: 2,
                Restore: 3,
                Help: 4,
                Menu: 5
            }
        }
    });

    Bridge.define("ExpressCraft.FormCollection", {
        fields: {
            FormOwner: null,
            VisibleForms: null
        },
        ctors: {
            init: function () {
                this.VisibleForms = new (System.Collections.Generic.List$1(ExpressCraft.Form)).ctor();
            },
            ctor: function (formOwner) {
                this.$initialize();
                this.FormOwner = formOwner;
            }
        }
    });

    Bridge.define("ExpressCraft.FormStartPosition", {
        $kind: "enum",
        statics: {
            fields: {
                Manual: 0,
                Center: 1,
                WindowsDefaultLocation: 2
            }
        }
    });

    Bridge.define("ExpressCraft.Gmail", {
        statics: {
            fields: {
                ExternalGmail: null,
                ClientId: null,
                GoogleAuth: null,
                _oneTimeCall: null,
                _hasRan: false
            },
            ctors: {
                init: function () {
                    this.ExternalGmail = new ExpressCraft.ExternalPlugin("https://apis.google.com/js/api.js");
                    this._oneTimeCall = new (System.Collections.Generic.List$1(Function)).ctor();
                    this._hasRan = false;
                }
            },
            methods: {
                Authorize: function () {

                },
                PushEventsTimeCall: function () {

                },
                OnSignedIn: function (method) {

                },
                IsSignedIn: function () {
                    return false;


                },
                AccessToken: function () {
                    return null;



                },
                Fullname: function () {
                    return null;



                },
                Email: function () {
                    return null;



                },
                GetContentTypeFromFileName: function (filename) {
                    return null;



                },
                SendEmail: function (message) {












                },
                IconURL: function () {
                    return null;



                },
                Setup: function (clientId) {


                }
            }
        }
    });

    Bridge.define("ExpressCraft.GmailMessage", {
        fields: {
            ToEmail: null,
            Subject: null,
            Body: null,
            IsHTML: false,
            Attachments: null
        },
        ctors: {
            init: function () {
                this.Attachments = new (System.Collections.Generic.List$1(ExpressCraft.GmailMessageAttachment)).ctor();
            },
            ctor: function (toEmail, subject, body, isHTML) {
                this.$initialize();
                this.ToEmail = toEmail;
                this.Subject = subject;
                this.Body = body;
                this.IsHTML = isHTML;
            }
        }
    });

    Bridge.define("ExpressCraft.GmailMessageAttachment", {
        fields: {
            Filename: null,
            Data: null,
            IsBase64: false
        },
        ctors: {
            ctor: function (filename, data, isBase64) {
                if (isBase64 === void 0) { isBase64 = false; }

                this.$initialize();
                this.Filename = filename;
                this.Data = data;
                this.IsBase64 = isBase64;
            }
        }
    });

    Bridge.define("ExpressCraft.GoogleCloudPrint", {
        statics: {
            fields: {
                ExternalGoogleCloudPrint: null
            },
            ctors: {
                init: function () {
                    this.ExternalGoogleCloudPrint = new ExpressCraft.ExternalPlugin("https://www.google.com/cloudprint/client/cpgadget.js");
                }
            },
            methods: {
                Setup: function () {
                    ExpressCraft.GoogleCloudPrint.ExternalGoogleCloudPrint.Setup();
                }
            }
        },
        fields: {
            _source: null,
            _mimetype: null,
            _encoding: null,
            _title: null,
            _gadget: null
        },
        ctors: {
            init: function () {
                this._encoding = "";
            },
            ctor: function (source, title, gcpmt, encoding) {
                if (title === void 0) { title = ""; }
                if (gcpmt === void 0) { gcpmt = 0; }
                if (encoding === void 0) { encoding = ""; }

                this.$initialize();
                System.Object.call(this);
                this._title = title;
                this._source = source;
                this._encoding = encoding;
                this._mimetype = System.String.replaceAll(System.Enum.format(ExpressCraft.GoogleCloudPrintingMimeType, gcpmt, "G").toLowerCase(), "_", ".");
            }
        },
        methods: {
            Show: function () {
                ExpressCraft.GoogleCloudPrint.ExternalGoogleCloudPrint.UsageCheck();

                			this._gadget = new cloudprint.Gadget();
                			
                if (!System.String.isNullOrWhiteSpace(this._encoding)) {
                    				this._gadget.setPrintDocument(this._mimetype, this._title, this._source, this._encoding);
                    				
                } else {
                    				this._gadget.setPrintDocument(this._mimetype, this._title, this._source);
                    				
                }
                			this._gadget.openPrintDialog();
                			this._gadget.setOnCloseCallback(this.clearContent);
                			
            },
            clearContent: function () {
                try {
                    ExpressCraft.Helper.Delete$1(jQuery(".__gcp_dialog_container_cls").parent().get(0));
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            Close: function () {
                if (this._gadget != null) {
                    				this._gadget.closePrintDialog();
                    				this._gadget = null;
                    				
                }
            }
        }
    });

    Bridge.define("ExpressCraft.GoogleCloudPrintingMimeType", {
        $kind: "enum",
        statics: {
            fields: {
                Url: 0,
                DataUrl: 1,
                Google_Drawing: 2,
                Google_Drive: 3,
                Google_Kix: 4,
                Google_Mail: 5,
                Google_Presentation: 6,
                Google_Spreadsheet: 7
            }
        }
    });

    Bridge.define("ExpressCraft.Graphics", {
        statics: {
            fields: {
                cacheGetHeight: null
            },
            ctors: {
                init: function () {
                    this.cacheGetHeight = new (System.Collections.Generic.Dictionary$2(System.String,System.Single))();
                }
            },
            methods: {
                internalMeasureHeight: function (text, font) {
                    if (ExpressCraft.Graphics.cacheGetHeight.containsKey(font.FontString)) {
                        return ExpressCraft.Graphics.cacheGetHeight.get(font.FontString);
                    }

                    var div = new ExpressCraft.Control.$ctor1();
                    div.Content.textContent = text;
                    div.Left = -100;
                    div.Top = -100;
                    div.Style.font = font.FontString;

                    ExpressCraft.Helper.AppendChild$1(document.body, div);

                    var height = div.Content.getBoundingClientRect().height;

                    document.body.removeChild(ExpressCraft.Control.op_Implicit(div));

                    return (ExpressCraft.Graphics.cacheGetHeight.set(font.FontString, height), height);
                }
            }
        },
        fields: {
            _canvas: null,
            _context: null
        },
        ctors: {
            ctor: function (control) {
                this.$initialize();
                this._canvas = control.Canvas;
                this._context = this._canvas.getContext("2d");
            }
        },
        methods: {
            Clear: function (color) {
                this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
                if (ExpressCraft.Color.op_Inequality(ExpressCraft.Color.Transparent.$clone(), color.$clone())) {
                    this.FillRectangle$3(new ExpressCraft.SolidBrush(color.$clone()), 0, 0, this._canvas.width, this._canvas.height);
                }
            },
            ApplyFill: function (brush) {
                if (Bridge.is(brush, ExpressCraft.SolidBrush)) {
                    this._context.fillStyle = brush.Color.ToHTMLColor();
                } else if (Bridge.is(brush, ExpressCraft.StyleBrush)) {
                    this._context.fillStyle = brush.Style;
                }
            },
            ApplyPen: function (pen) {
                if (Bridge.is(pen.Brush, ExpressCraft.SolidBrush)) {
                    this._context.strokeStyle = pen.Brush.Color.ToHTMLColor();
                } else if (Bridge.is(pen.Brush, ExpressCraft.StyleBrush)) {
                    this._context.strokeStyle = pen.Brush.Style;
                }
                var width = pen.Width;
                if (width < 0) {
                    width = 1;
                }
                this._context.lineWidth = width;

                if (pen.DashStyle !== ExpressCraft.DashStyle.Solid) {
                    switch (pen.DashStyle) {
                        case ExpressCraft.DashStyle.Dash: 
                            this._context.setLineDash(System.Array.init([2, 2], System.Double));
                            break;
                        case ExpressCraft.DashStyle.Dot: 
                            this._context.setLineDash(System.Array.init([1, 1], System.Double));
                            break;
                        case ExpressCraft.DashStyle.DashDot: 
                            this._context.setLineDash(System.Array.init([2, 1, 1, 1], System.Double));
                            break;
                        case ExpressCraft.DashStyle.DashDotDot: 
                            break;
                        case ExpressCraft.DashStyle.Custom: 
                            break;
                        default: 
                            break;
                    }
                }
            },
            FillRectangle$3: function (brush, x, y, width, height) {
                this.FillRectangle$2(brush, Bridge.Int.clip32(x), Bridge.Int.clip32(y), Bridge.Int.clip32(width), Bridge.Int.clip32(height));
            },
            FillRectangle$2: function (brush, x, y, width, height) {
                this.ApplyFill(brush);
                this._context.fillRect(x, y, width, height);
            },
            FillRectangle: function (brush, rect) {
                this.FillRectangle$2(brush, rect.X, rect.Y, rect.Width, rect.Height);
            },
            FillRectangle$1: function (brush, rect) {
                this.FillRectangle$3(brush, rect.X, rect.Y, rect.Width, rect.Height);
            },
            FillEllipse$3: function (brush, x, y, width, height) {
                var width_over_2 = width / 2;
                var width_two_thirds = width * 2 / 3;
                var height_over_2 = height / 2;

                x += width_over_2;
                y += height_over_2;

                this._context.beginPath();
                this._context.moveTo(x, y - height_over_2);
                this._context.bezierCurveTo(x + width_two_thirds, y - height_over_2, x + width_two_thirds, y + height_over_2, x, y + height_over_2);
                this._context.bezierCurveTo(x - width_two_thirds, y + height_over_2, x - width_two_thirds, y - height_over_2, x, y - height_over_2);
                this._context.closePath();
                this.ApplyFill(brush);
                this._context.fill();
            },
            FillEllipse$2: function (brush, x, y, width, height) {
                this.FillEllipse$3(brush, x, y, width, height);
            },
            FillEllipse: function (brush, rect) {
                this.FillEllipse$2(brush, rect.X, rect.Y, rect.Width, rect.Height);
            },
            FillEllipse$1: function (brush, rect) {
                this.FillEllipse$3(brush, rect.X, rect.Y, rect.Width, rect.Height);
            },
            DrawEllipse$3: function (pen, x, y, width, height) {
                var width_over_2 = width / 2;
                var width_two_thirds = width * 2 / 3;
                var height_over_2 = height / 2;

                x += width_over_2;
                y += height_over_2;

                this._context.beginPath();
                this.ApplyPen(pen);
                this._context.moveTo(x, y - height_over_2);
                this._context.bezierCurveTo(x + width_two_thirds, y - height_over_2, x + width_two_thirds, y + height_over_2, x, y + height_over_2);
                this._context.bezierCurveTo(x - width_two_thirds, y + height_over_2, x - width_two_thirds, y - height_over_2, x, y - height_over_2);
                this._context.closePath();
                this._context.stroke();
            },
            DrawEllipse$2: function (pen, x, y, width, height) {
                this.DrawEllipse$3(pen, x, y, width, height);
            },
            DrawEllipse: function (pen, rect) {
                this.DrawEllipse$2(pen, rect.X, rect.Y, rect.Width, rect.Height);
            },
            DrawEllipse$1: function (pen, rect) {
                this.DrawEllipse$3(pen, rect.X, rect.Y, rect.Width, rect.Height);
            },
            DrawRectangle$3: function (pen, x, y, width, height) {
                this.DrawRectangle$2(pen, Bridge.Int.clip32(x), Bridge.Int.clip32(y), Bridge.Int.clip32(width), Bridge.Int.clip32(height));
            },
            DrawRectangle$2: function (pen, x, y, width, height) {
                this.ApplyPen(pen);
                this._context.strokeRect(x, y, width, height);
            },
            DrawRectangle: function (pen, rect) {
                this.DrawRectangle$2(pen, rect.X, rect.Y, rect.Width, rect.Height);
            },
            DrawRectangle$1: function (pen, rect) {
                this.DrawRectangle$3(pen, rect.X, rect.Y, rect.Width, rect.Height);
            },
            DrawLine$3: function (pen, x1, y1, x2, y2) {
                this._context.beginPath();
                this._context.moveTo(x1, y1);
                this._context.lineTo(x2, y2);
                this.ApplyPen(pen);
                this._context.stroke();
            },
            DrawLine$1: function (pen, pt1, pt2) {
                this.DrawLine$3(pen, pt1.X, pt1.Y, pt2.X, pt2.Y);
            },
            DrawLine$2: function (pen, x1, y1, x2, y2) {
                this._context.beginPath();
                this._context.moveTo(x1, y1);
                this._context.lineTo(x2, y2);
                this.ApplyPen(pen);
                this._context.stroke();
            },
            DrawLine: function (pen, pt1, pt2) {
                this.DrawLine$2(pen, pt1.X, pt1.Y, pt2.X, pt2.Y);
            },
            DrawString$3: function (s, font, brush, layoutRectangle, format) {
                this.DrawString$6(s, font, brush, layoutRectangle.X, layoutRectangle.Y, format);
            },
            DrawString$2: function (s, font, brush, layoutRectangle) {
                this.DrawString$3(s, font, brush, layoutRectangle, null);
            },
            DrawString$1: function (s, font, brush, point, format) {
                this.DrawString$6(s, font, brush, point.X, point.Y, format);
            },
            DrawString$6: function (s, font, brush, x, y, format) {
                this.ApplyFill(brush);
                this._context.font = font.FontString;
                this._context.fillText(s, x, y);
            },
            DrawString$4: function (s, font, brush, x, y, maxWidth, alignmentCentre, baseIsTop) {
                if (alignmentCentre === void 0) { alignmentCentre = false; }
                if (baseIsTop === void 0) { baseIsTop = true; }
                this.ApplyFill(brush);
                if (baseIsTop) {
                    this._context.textBaseline = "top";
                }

                if (alignmentCentre) {
                    this._context.textAlign = "center";
                } else {
                    this._context.textAlign = "left";
                }

                this._context.font = font.FontString;
                this._context.fillText(s, x, y, maxWidth);
            },
            DrawString: function (s, font, brush, point) {
                this.DrawString$5(s, font, brush, point.X, point.Y);
            },
            DrawString$5: function (s, font, brush, x, y) {
                this.DrawString$6(s, font, brush, x, y, null);
            },
            DrawBezier$2: function (pen, x1, y1, x2, y2, x3, y3, x4, y4) {
                this._context.beginPath();
                this.ApplyPen(pen);
                this._context.moveTo(x1, y1);
                this._context.bezierCurveTo(x2, y2, x3, y3, x4, y4);
                this._context.closePath();
                this._context.stroke();
            },
            DrawBezier$1: function (pen, pt1, pt2, pt3, pt4) {
                this.DrawBezier$2(pen, pt1.X, pt1.Y, pt2.X, pt2.Y, pt3.X, pt3.Y, pt4.X, pt4.Y);
            },
            DrawBezier: function (pen, pt1, pt2, pt3, pt4) {
                this.DrawBezier$2(pen, pt1.X, pt1.Y, pt2.X, pt2.Y, pt3.X, pt3.Y, pt4.X, pt4.Y);
            },
            DrawBeziers$1: function (pen, points) {
                this._context.beginPath();
                this.ApplyPen(pen);
                var point = points[System.Array.index(0, points)];
                this._context.moveTo(point.X, point.Y);
                for (var i = 1; i < points.length; i = (i + 3) | 0) {
                    point = points[System.Array.index(i, points)];
                    var point2 = points[System.Array.index(((i + 1) | 0), points)];
                    var point3 = points[System.Array.index(((i + 2) | 0), points)];
                    this._context.bezierCurveTo(point.X, point.Y, point2.X, point2.Y, point3.X, point3.Y);
                }
                this._context.closePath();
                this._context.stroke();
            },
            DrawBeziers: function (pen, points) {
                this._context.beginPath();
                this.ApplyPen(pen);
                var point = points[System.Array.index(0, points)];
                this._context.moveTo(point.X, point.Y);
                for (var i = 1; i < points.length; i = (i + 3) | 0) {
                    point = points[System.Array.index(i, points)];
                    var point2 = points[System.Array.index(((i + 1) | 0), points)];
                    var point3 = points[System.Array.index(((i + 2) | 0), points)];
                    this._context.bezierCurveTo(point.X, point.Y, point2.X, point2.Y, point3.X, point3.Y);
                }
                this._context.closePath();
                this._context.stroke();
            },
            MeasureString$4: function (text, font, layoutArea, stringFormat, charactersFitted, linesFilled) {
                throw new System.NotImplementedException.ctor();
            },
            MeasureString$5: function (text, font, width) {
                throw new System.NotImplementedException.ctor();
            },
            MeasureString$6: function (text, font, width, format) {
                throw new System.NotImplementedException.ctor();
            },
            MeasureString$1: function (text, font, origin, stringFormat) {
                throw new System.NotImplementedException.ctor();
            },
            MeasureString$3: function (text, font, layoutArea, stringFormat) {
                throw new System.NotImplementedException.ctor();
            },
            MeasureString: function (text, font) {
                this._context.font = font.FontString;
                var size = this._context.measureText(text);
                var sp = document.createElement("span");
                sp.style.font = font.FontString;

                return new ExpressCraft.SizeF.ctor(size.width, ExpressCraft.Graphics.internalMeasureHeight(text, font));
            },
            MeasureString$2: function (text, font, layoutArea) {
                throw new System.NotImplementedException.ctor();
            },
            MeasureStringWidth: function (text, font) {
                this._context.font = font.FontString;
                var size = this._context.measureText(text);
                var sp = document.createElement("span");
                sp.style.font = font.FontString;
                return size.width;
            },
            MeasureStringHeight: function (text, font) {
                return ExpressCraft.Graphics.internalMeasureHeight(text, font);
            }
        }
    });

    Bridge.define("ExpressCraft.IPrintable", {
        $kind: "interface"
    });

    Bridge.define("ExpressCraft.GridViewCellApparence", {
        fields: {
            IsBold: false,
            Alignment: null,
            Forecolor: null
        },
        ctors: {
            init: function () {
                this.IsBold = false;
                this.Alignment = "left";
            },
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (isBold) {
                this.$initialize();
                this.IsBold = isBold;
            },
            $ctor2: function (isBold, alignment) {
                this.$initialize();
                this.IsBold = isBold;
                this.Alignment = alignment;
            },
            $ctor3: function (isBold, alignment, forecolor) {
                this.$initialize();
                this.IsBold = isBold;
                this.Alignment = alignment;
                this.Forecolor = forecolor;
            }
        }
    });

    Bridge.define("ExpressCraft.GridViewCellDisplay", {
        fields: {
            UseDefaultElement: false
        },
        methods: {
            OnCreate: function (gridView, dataRowIndex, columnIndex) {
                return null;
            },
            OnCreateDefault: function (originalElement, gridView, dataRowIndex, columnIndex) {
                return originalElement;
            }
        }
    });

    Bridge.define("ExpressCraft.GridViewColumn", {
        fields: {
            Column: null,
            View: null,
            Caption: null,
            Visible: false,
            CachedX: 0,
            FormatString: null,
            HeadingApparence: null,
            BodyApparence: null,
            CellDisplay: null,
            SortedMode: 0,
            FilterEdit: null,
            filterValue: null,
            AllowEdit: false,
            ReadOnly: false,
            _width: 0
        },
        props: {
            FilterValue: {
                get: function () {
                    return this.filterValue;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this.filterValue, value)) {
                        this.filterValue = value;
                        if (this.View.ShowAutoFilterRow) {
                            this.View.CalculateVisibleRows();
                        }
                    }
                }
            },
            Width: {
                get: function () {
                    return this._width;
                },
                set: function (value) {
                    if (value < 24) {
                        value = 24;
                    }
                    if (this._width !== value) {
                        this._width = value;
                        this.View.RenderGrid();
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this.FormatString = "";
                this.HeadingApparence = new ExpressCraft.GridViewCellApparence.ctor();
                this.BodyApparence = new ExpressCraft.GridViewCellApparence.ctor();
                this.SortedMode = ExpressCraft.GridViewSortMode.None;
                this.AllowEdit = true;
                this.ReadOnly = false;
            },
            ctor: function (view, width) {
                if (width === void 0) { width = 100; }

                this.$initialize();
                this.View = view;
                this._width = width;
            }
        },
        methods: {
            ValueMatchFilter: function (index) {
                if (this.filterValue == null) {
                    return true;
                }

                var abc = this.GetDisplayValueByDataRowHandle(index);

                switch (this.Column.DataType) {
                    default: 
                    case ExpressCraft.DataType.Object: 
                    case ExpressCraft.DataType.Integer: 
                    case ExpressCraft.DataType.Long: 
                    case ExpressCraft.DataType.Float: 
                    case ExpressCraft.DataType.Double: 
                    case ExpressCraft.DataType.Decimal: 
                    case ExpressCraft.DataType.Bool: 
                    case ExpressCraft.DataType.Byte: 
                    case ExpressCraft.DataType.Short: 
                        return Bridge.referenceEquals(abc, this.filterValue);
                    case ExpressCraft.DataType.DateTime: 
                    case ExpressCraft.DataType.String: 
                        return System.String.startsWith((System.String.concat(abc, "")), System.String.concat(this.filterValue, ""));
                }
            },
            GetDataColumnIndex: function () {
                var length = this.View.DataSource.ColumnCount;
                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals(this.View.DataSource.Columns.getItem(i), this.Column)) {
                        return i;
                    }
                }
                return -1;
            },
            GetDisplayValueByDataRowHandle: function (RowHandle) {
                if (System.String.isNullOrWhiteSpace(this.FormatString)) {
                    return this.Column.GetDisplayValue(RowHandle);
                } else {
                    return this.Column.GetDisplayValue$1(RowHandle, this.FormatString);
                }
            },
            GetDisplayValue: function (RowHandle) {
                if (this.View.VisibleRowHandles != null) {
                    RowHandle = this.View.VisibleRowHandles.getItem(RowHandle);
                }

                if (System.String.isNullOrWhiteSpace(this.FormatString)) {
                    return this.Column.GetDisplayValue(RowHandle);
                } else {
                    return this.Column.GetDisplayValue$1(RowHandle, this.FormatString);
                }
            }
        }
    });

    Bridge.define("ExpressCraft.GridViewSortMode", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Asc: 1,
                Desc: 2
            }
        }
    });

    Bridge.define("ExpressCraft.HardSoftList$1", function (T) { return {
        fields: {
            _hhl: null,
            _hl: null,
            SL: null,
            Limit: 0,
            HardLength: 0,
            DefaultValue: Bridge.getDefaultValue(T)
        },
        ctors: {
            init: function () {
                this._hhl = new (System.Collections.Generic.List$1(T)).ctor();
                this._hl = new (System.Collections.Generic.List$1(ExpressCraft.IndexValue$1(T))).ctor();
                this.SL = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.HardLength = 0;
            },
            ctor: function (defaultValue, limit) {
                if (limit === void 0) { limit = 10000; }

                this.$initialize();
                this.DefaultValue = defaultValue;
                this.Limit = limit;
            }
        },
        methods: {
            GetIndexValueByHardListIndex: function (index) {
                return this._hl.getItem(index);
            },
            ClearAll: function () {
                this._hhl = new (System.Collections.Generic.List$1(T)).ctor();
                this._hl = new (System.Collections.Generic.List$1(ExpressCraft.IndexValue$1(T))).ctor();
                this.SL = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.HardLength = 0;
            },
            ClearAllSetHardRange: function (value, Indexs) {
                if (Indexs === void 0) { Indexs = []; }
                this.HardLength = 0;
                if (Indexs == null || Indexs.length === 0) {
                    this.ClearAll();
                } else {
                    if (Indexs.length > this.Limit) {
                        this.HardLength = Indexs.length;
                        this._hl = new (System.Collections.Generic.List$1(ExpressCraft.IndexValue$1(T))).ctor();
                        this.SL = new (System.Collections.Generic.List$1(System.Int32)).ctor();

                        var max = 0;
                        for (var i = 0; i < this.HardLength; i = (i + 1) | 0) {
                            if (Indexs[System.Array.index(i, Indexs)] > max) {
                                max = Indexs[System.Array.index(i, Indexs)];
                            }
                        }
                        var length = (max + 1) | 0;
                        this._hhl = new (System.Collections.Generic.List$1(T)).$ctor2(length);

                        if (length === Indexs.length) {
                            for (var i1 = 0; i1 < this.HardLength; i1 = (i1 + 1) | 0) {
                                this._hhl.add(value);
                            }
                        } else {
                            for (var i2 = 0; i2 < length; i2 = (i2 + 1) | 0) {
                                this._hhl.add(this.DefaultValue);
                            }
                            for (var i3 = 0; i3 < this.HardLength; i3 = (i3 + 1) | 0) {
                                this._hhl.setItem(Indexs[System.Array.index(i3, Indexs)], value);
                            }
                        }
                    } else {
                        this._hhl = new (System.Collections.Generic.List$1(T)).ctor();
                        this.HardLength = Indexs.length;
                        this._hl = new (System.Collections.Generic.List$1(ExpressCraft.IndexValue$1(T))).$ctor2(this.HardLength);
                        for (var i4 = 0; i4 < this.HardLength; i4 = (i4 + 1) | 0) {
                            this._hl.add(new (ExpressCraft.IndexValue$1(T))(Indexs[System.Array.index(i4, Indexs)], value));
                        }
                        this.SL = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                    }
                }
            },
            ClearSoftList: function () {
                this.SL = new (System.Collections.Generic.List$1(System.Int32)).ctor();
            },
            ClearAndAddOrSet: function (value, index, AddToSoftList) {
                if (AddToSoftList === void 0) { AddToSoftList = false; }
                this._hhl = new (System.Collections.Generic.List$1(T)).ctor();
                this._hl = new (System.Collections.Generic.List$1(ExpressCraft.IndexValue$1(T))).ctor();
                this.SL = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.HardLength = 0;
                this.AddOrSet(value, index, AddToSoftList);
            },
            GetHardOrSoftIndexValue: function (index, AddToSoftList) {
                if (AddToSoftList === void 0) { AddToSoftList = false; }
                var length = this.SL.Count;
                for (var i = 0; i < length; i = (i + 1) | 0) {
                    var slI = this.SL.getItem(i);
                    if (this._hl.getItem(slI).Index === index) {
                        return this._hl.getItem(slI);
                    }
                }

                length = this._hl.Count;

                for (var i1 = 0; i1 < length; i1 = (i1 + 1) | 0) {
                    var hli = this._hl.getItem(i1);
                    if (hli.Index === index) {
                        if (AddToSoftList) {
                            this.SL.add(i1);
                        }
                        return hli;
                    }
                }

                return null;
            },
            GetHardIndexValue: function (index) {
                var length = this._hl.Count;

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    var hli = this._hl.getItem(i);
                    if (hli.Index === index.v) {
                        index.v = i;
                        return hli;
                    }
                }
                index.v = length;

                return null;
            },
            GetValue: function (index, AddToSoftList) {
                if (AddToSoftList === void 0) { AddToSoftList = false; }
                if (this.HardLength > this.Limit) {
                    return this._hhl.getItem(index);
                }
                var hiv = this.GetHardOrSoftIndexValue(index, AddToSoftList);
                if (hiv == null) {
                    return this.DefaultValue;
                }
                return hiv.Value;
            },
            GetIndex: function (index) {
                if (this.HardLength > this.Limit) {
                    return index;
                }

                var hiv = this.GetHardOrSoftIndexValue(index);
                if (hiv == null) {
                    return -1;
                }
                return hiv.Index;
            },
            AddOrSet: function (value, index, AddToSoftList) {
                if (AddToSoftList === void 0) { AddToSoftList = false; }
                if (this.HardLength > this.Limit) {
                    if (index >= this.HardLength) {
                        var addDiff = ((((index + 1) | 0)) - this._hhl.Count) | 0;
                        if (addDiff > 0) {
                            var data = System.Array.init(addDiff, function (){
                                return Bridge.getDefaultValue(T);
                            }, T);
                            for (var i = 0; i < addDiff; i = (i + 1) | 0) {
                                data[System.Array.index(i, data)] = this.DefaultValue;
                            }
                            this._hhl.AddRange(data);
                        }
                        this._hhl.add(value);
                        this.HardLength = this._hhl.Count;
                    } else {
                        this._hhl.setItem(index, value);
                    }
                    return;
                }

                var length = this.SL.Count;
                for (var i1 = 0; i1 < length; i1 = (i1 + 1) | 0) {
                    var hli = this._hl.getItem(this.SL.getItem(i1));
                    if (hli.Index === index) {
                        hli.Value = value;
                        return;
                    }
                }

                var hindex = { v : index };
                var hiv = this.GetHardIndexValue(hindex);
                if (hiv == null) {
                    this._hl.add(((hiv = new (ExpressCraft.IndexValue$1(T))(index, value))));
                } else {
                    hiv.Value = value;
                }

                if (AddToSoftList) {
                    this.SL.add(hindex.v);
                }
            },
            Remove: function (index, OnlySoftList) {
                if (OnlySoftList === void 0) { OnlySoftList = false; }
                if (this.HardLength > this.Limit) {
                    if (((this.HardLength - 1) | 0) > this.Limit) {
                        this._hhl.setItem(index, this.DefaultValue);
                    } else {
                        for (var i = 0; i < this.HardLength; i = (i + 1) | 0) {
                            if (i !== index && !Bridge.equals(this._hhl.getItem(i), this.DefaultValue)) {
                                this._hl.add(new (ExpressCraft.IndexValue$1(T))(i, this._hhl.getItem(i)));
                            }
                        }

                        this.HardLength = (this.HardLength - 1) | 0;
                    }
                } else {
                    var Length = this.SL.Count;
                    for (var i1 = 0; i1 < Length; i1 = (i1 + 1) | 0) {
                        var sli = this.SL.getItem(i1);
                        if (this._hl.getItem(sli).Index === index) {
                            this.SL.removeAt(i1);
                            if (OnlySoftList) {
                                return;
                            }
                            this._hl.removeAt(sli);
                            return;
                        }
                    }
                    var length = this._hl.Count;

                    for (var i2 = 0; i2 < length; i2 = (i2 + 1) | 0) {
                        var hli = this._hl.getItem(i2);
                        if (hli.Index === index) {
                            this._hl.removeAt(i2);
                            return;
                        }
                    }
                }
            }
        }
    }; });

    Bridge.define("ExpressCraft.Helper", {
        statics: {
            fields: {
                _notDesktop: false,
                _setupDesktop: false
            },
            props: {
                NotDesktop: {
                    get: function () {
                        var $t;
                        var result = ExpressCraft.Helper._setupDesktop ? ExpressCraft.Helper._notDesktop : ($t = (!Bridge.Browser.isDesktop || ExpressCraft.Helper.IsIPhone() || ExpressCraft.Helper.IsIPad()), ExpressCraft.Helper._notDesktop = $t, $t);
                        ExpressCraft.Helper._setupDesktop = true;
                        return result;
                    }
                }
            },
            methods: {
                IsIPhone: function () {
                    var r = false;
                    r = !!navigator.userAgent.match(/iPhone/i);
                    return r;
                },
                IsIPad: function () {
                    var r = false;
                    r = !!navigator.userAgent.match(/iPad/i);
                    return r;
                },
                IsTrue: function (value) {
                    return (Bridge.referenceEquals(((value = value.toLowerCase())), "true") || Bridge.referenceEquals(value, "1") || Bridge.referenceEquals(value, "on")) ? 1 : 0;
                },
                ToInt: function (value) {
                    return parseInt(value);
                },
                ToFloat: function (value) {
                    return parseFloat(value);
                },
                ToStr: function (value) {
                    return value;
                },
                IsFireFox: function () {
                    var value = false;

                    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
                    {
                        value = true;
                    }
                    			
                    return value;
                },
                FocusElement: function (element) {
                    setTimeout(function (arg) {
                        element.focus();
                    }, 0);
                },
                StripNonNumberString: function (value) {
                    if (System.String.isNullOrWhiteSpace(value)) {
                        return System.Decimal(0);
                    }

                    var builder = new System.Text.StringBuilder();

                    var AddedDigits = false;

                    for (var i = 0; i < value.length; i = (i + 1) | 0) {
                        if (System.Char.isDigit(value.charCodeAt(i)) || value.charCodeAt(i) === 46) {
                            builder.append(String.fromCharCode(value.charCodeAt(i)));
                            AddedDigits = true;
                        } else if (value.charCodeAt(i) === 45 && !AddedDigits) {
                            builder.append(String.fromCharCode(value.charCodeAt(i)));
                            AddedDigits = true;
                        }
                    }

                    var value1 = { v : System.Decimal(0) };
                    System.Decimal.tryParse(builder.toString(), null, value1);

                    return value1.v;
                },
                StripNonDateString: function (value) {
                    if (System.String.isNullOrWhiteSpace(value)) {
                        return System.DateTime.getMinValue();
                    }

                    try {
                        value = System.String.replaceAll(value.trim(), String.fromCharCode(92), String.fromCharCode(ExpressCraft.Settings.DateSeperator));

                        var startsWithPlus = (System.String.startsWith(value, "+"));
                        var startsWithMunus = !startsWithPlus && (System.String.startsWith(value, "-"));

                        if (startsWithMunus) {
                            value = value.substr(1);
                        }

                        value = System.String.replaceAll(value, String.fromCharCode(45), String.fromCharCode(ExpressCraft.Settings.DateSeperator));

                        var endsWithMonth = (startsWithPlus || startsWithMunus) && (System.String.endsWith(value.toLowerCase(), "m"));
                        var endsWithyear = !endsWithMonth && (startsWithPlus || startsWithMunus) && (System.String.endsWith(value.toLowerCase(), "y"));

                        if (Bridge.referenceEquals(value.toLowerCase(), "d")) {
                            return System.DateTime.getToday();
                        }

                        var builder = new System.Text.StringBuilder();

                        var Values = new (System.Collections.Generic.List$1(System.Int32)).ctor();

                        for (var i = 0; i < value.length; i = (i + 1) | 0) {
                            if (System.Char.isDigit(value.charCodeAt(i))) {
                                builder.append(String.fromCharCode(value.charCodeAt(i)));
                            } else {
                                if (value.charCodeAt(i) === ExpressCraft.Settings.DateSeperator) {
                                    Values.add(System.Int32.parse(builder.toString()));
                                    builder = new System.Text.StringBuilder();
                                }
                            }
                        }

                        if (builder.getLength() > 0) {
                            Values.add(System.Int32.parse(builder.toString()));
                        }

                        builder = null;
                        if (Values.Count >= 3) {
                            return System.DateTime.create(Values.getItem(ExpressCraft.Settings.YearPosition), Values.getItem(ExpressCraft.Settings.MonthPosition), Values.getItem(ExpressCraft.Settings.DayPosition));
                        } else if (Values.Count === 1) {
                            if (ExpressCraft.Settings.DayPosition === ExpressCraft.Settings.DatePosition.First) {
                                if (startsWithPlus || startsWithMunus) {
                                    var date = System.DateTime.getToday();
                                    if (endsWithMonth) {
                                        date = System.DateTime.addMonths(date, startsWithMunus ? ((-Values.getItem(0)) | 0) : Values.getItem(0));
                                    } else if (endsWithyear) {
                                        if (startsWithMunus) {
                                            date = System.DateTime.addYears(date, ((-Values.getItem(0)) | 0));
                                        } else {
                                            date = System.DateTime.addYears(date, Values.getItem(0));
                                        }
                                    } else {
                                        date = System.DateTime.addDays(date, startsWithMunus ? ((-Values.getItem(0)) | 0) : Values.getItem(0));
                                    }
                                    if (System.DateTime.getHour(date) === 23) {
                                        System.DateTime.addHours(date, 1);
                                    }
                                    return date;
                                } else {
                                    return System.DateTime.create(System.DateTime.getYear(System.DateTime.getToday()), System.DateTime.getMonth(System.DateTime.getToday()), Values.getItem(0));
                                }
                            } else if (ExpressCraft.Settings.MonthPosition === ExpressCraft.Settings.DatePosition.First) {
                                return System.DateTime.create(System.DateTime.getYear(System.DateTime.getToday()), Values.getItem(0), System.DateTime.getDay(System.DateTime.getToday()));
                            } else if (ExpressCraft.Settings.YearPosition === ExpressCraft.Settings.DatePosition.First) {
                                return System.DateTime.create(Values.getItem(0), System.DateTime.getMonth(System.DateTime.getToday()), System.DateTime.getDay(System.DateTime.getToday()));
                            }
                        } else if (Values.Count === 2) {
                            if (ExpressCraft.Settings.DayPosition === ExpressCraft.Settings.DatePosition.First && ExpressCraft.Settings.MonthPosition === ExpressCraft.Settings.DatePosition.Second) {
                                return System.DateTime.create(System.DateTime.getYear(System.DateTime.getToday()), Values.getItem(1), Values.getItem(0));
                            } else if (ExpressCraft.Settings.DayPosition === ExpressCraft.Settings.DatePosition.Second && ExpressCraft.Settings.MonthPosition === ExpressCraft.Settings.DatePosition.First) {
                                return System.DateTime.create(System.DateTime.getYear(System.DateTime.getToday()), Values.getItem(0), Values.getItem(1));
                            } else if (ExpressCraft.Settings.YearPosition === ExpressCraft.Settings.DatePosition.Second && ExpressCraft.Settings.MonthPosition === ExpressCraft.Settings.DatePosition.First) {
                                return System.DateTime.create(Values.getItem(1), Values.getItem(0), System.DateTime.getDay(System.DateTime.getToday()));
                            } else if (ExpressCraft.Settings.YearPosition === ExpressCraft.Settings.DatePosition.First && ExpressCraft.Settings.MonthPosition === ExpressCraft.Settings.DatePosition.Second) {
                                return System.DateTime.create(Values.getItem(0), Values.getItem(1), System.DateTime.getDay(System.DateTime.getToday()));
                            }
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                    }

                    return System.DateTime.getMinValue();
                },
                AddTax: function (value, taxPercent) {
                    if (taxPercent === void 0) { taxPercent = System.Decimal(-1.0); }
                    if (value.equalsT(System.Decimal(0))) {
                        return value;
                    }

                    if (taxPercent.equalsT(System.Decimal(-1))) {
                        taxPercent = ExpressCraft.Settings.TaxPercent;
                    }
                    if (taxPercent.equalsT(System.Decimal(0))) {
                        return value;
                    }

                    return value.mul((System.Decimal(1).add(taxPercent)));
                },
                GetPortionTax: function (value, taxPercent) {
                    if (taxPercent === void 0) { taxPercent = System.Decimal(-1.0); }
                    if (value.equalsT(System.Decimal(0))) {
                        return value;
                    }

                    if (taxPercent.equalsT(System.Decimal(-1))) {
                        taxPercent = ExpressCraft.Settings.TaxPercent;
                    }
                    if (taxPercent.equalsT(System.Decimal(0))) {
                        return System.Decimal(0);
                    }

                    return value.sub(value.div((System.Decimal(1).add(taxPercent))));
                },
                DeductTax: function (value, taxPercent) {
                    if (taxPercent === void 0) { taxPercent = System.Decimal(-1.0); }
                    if (value.equalsT(System.Decimal(0))) {
                        return value;
                    }

                    if (taxPercent.equalsT(System.Decimal(-1))) {
                        taxPercent = ExpressCraft.Settings.TaxPercent;
                    }
                    if (taxPercent.equalsT(System.Decimal(0))) {
                        return value;
                    }

                    return value.sub(ExpressCraft.Helper.GetPortionTax(value, taxPercent));
                },
                IsNumber: function (value) {
                    return Bridge.is(value, System.SByte) || Bridge.is(value, System.Byte) || Bridge.is(value, System.Int16) || Bridge.is(value, System.UInt16) || Bridge.is(value, System.Int32) || Bridge.is(value, System.UInt32) || Bridge.is(value, System.Int64) || Bridge.is(value, System.UInt64) || Bridge.is(value, System.Single) || Bridge.is(value, System.Double) || Bridge.is(value, System.Decimal);
                },
                Empty: function (element) {
                    			var len = element.childNodes.length;
                    			while(len--)
                    			{
                    				element.removeChild(element.lastChild);
                    			};
                    			
                },
                GetClientMouseLocation: function (e) {
                    var x = 0;
                    var y = 0;
                    			  if (!e) var e = window.event;

                    			  if (e.pageX || e.pageY) {
                    				x = e.pageX;
                    				y = e.pageY;
                    			  } else if (e.clientX || e.clientY) {
                    				x = e.clientX + document.body.scrollLeft +
                    								   document.documentElement.scrollLeft;
                    				y = e.clientY + document.body.scrollTop +
                    								   document.documentElement.scrollTop;
                    			  }
                    			
                    return new ExpressCraft.Vector2.$ctor1(x, y);
                },
                SetChecked: function (input, value) {
                    ExpressCraft.Helper.SetChecked$1(input.Content, value);
                },
                SetChecked$1: function (input, value) {
                    var check = false;
                    if (value != null) {
                        if (Bridge.is(value, System.Boolean) || ExpressCraft.Helper.IsNumber(value)) {
                            check = System.Nullable.getValue(Bridge.cast(Bridge.unbox(value, System.Boolean), System.Boolean));
                        } else if (Bridge.is(value, System.String)) {
                            var strValue = Bridge.cast(value, System.String);
                            check = (Bridge.referenceEquals(strValue, "1") || System.String.compare(strValue.toLowerCase(), "true") === 0);
                        }
                    }
                    if (!check) {
                        input.removeAttribute(ExpressCraft.GridViewCellDisplayCheckBox.resource_checked);
                    } else {
                        input.setAttribute(ExpressCraft.GridViewCellDisplayCheckBox.resource_checked, null);
                    }
                },
                /**
                 * IE does not support .remove on Element use delete
                 *
                 * @static
                 * @public
                 * @this ExpressCraft.Helper
                 * @memberof ExpressCraft.Helper
                 * @param   {Retyped..Element}    c
                 * @return  {void}
                 */
                Delete: function (c) {
                    if (c != null && c.parentElement != null && c.parentElement.contains(c)) {
                        c.parentElement.removeChild(c);
                    }
                },
                /**
                 * IE does not support .remove on Element use delete
                 *
                 * @static
                 * @public
                 * @this ExpressCraft.Helper
                 * @memberof ExpressCraft.Helper
                 * @param   {Retyped..HTMLElement}    c
                 * @return  {void}
                 */
                Delete$1: function (c) {
                    if (c != null && c.parentElement != null && c.parentElement.contains(c)) {
                        c.parentElement.removeChild(c);
                    }
                },
                ToPx: function (i) {
                    return i + 'px';
                },
                Log: function (jso) {
                    console.log(Bridge.unbox(jso));
                },
                AppendChildren$2: function (c, Nodes) {
                    if (Nodes === void 0) { Nodes = []; }
                    if (Nodes != null && Nodes.length > 0) {
                        for (var i = 0; i < Nodes.length; i = (i + 1) | 0) {
                            if (Nodes[System.Array.index(i, Nodes)] != null) {
                                c.appendChild(Nodes[System.Array.index(i, Nodes)]);
                            }
                        }
                    }
                },
                AppendChildren: function (c, Nodes) {
                    if (Nodes === void 0) { Nodes = []; }
                    ExpressCraft.Helper.AppendChildren$1(c.Content, Nodes);

                    return c;
                },
                AppendChildren$1: function (c, Nodes) {
                    if (Nodes === void 0) { Nodes = []; }
                    if (Nodes != null && Nodes.length > 0) {
                        for (var i = 0; i < Nodes.length; i = (i + 1) | 0) {
                            if (Nodes[System.Array.index(i, Nodes)] != null) {
                                c.appendChild(ExpressCraft.Control.op_Implicit(Nodes[System.Array.index(i, Nodes)]));
                            }
                        }
                    }
                },
                AppendChildrenTabIndex$1: function (c, Nodes) {
                    if (Nodes === void 0) { Nodes = []; }
                    if (Nodes != null && Nodes.length > 0) {
                        for (var i = 0; i < Nodes.length; i = (i + 1) | 0) {
                            if (Nodes[System.Array.index(i, Nodes)] != null) {
                                Nodes[System.Array.index(i, Nodes)].Content.tabIndex = i;
                                c.appendChild(ExpressCraft.Control.op_Implicit(Nodes[System.Array.index(i, Nodes)]));
                            }
                        }
                    }
                },
                AppendChildrenTabIndex: function (c, Nodes) {
                    if (Nodes === void 0) { Nodes = []; }
                    ExpressCraft.Helper.AppendChildrenTabIndex$1(c.Content, Nodes);
                },
                AppendChild: function (c, Node) {
                    ExpressCraft.Helper.AppendChild$1(c.Content, Node);
                    return c;
                },
                AppendChild$1: function (c, b) {
                    c.appendChild(ExpressCraft.Control.op_Implicit(b));
                },
                AppendChild$2: function (c, b) {
                    c.appendChild(b);
                },
                SetBounds: function (c, left, top, width, height) {
                    ExpressCraft.Helper.SetBounds$1(c.Content, left, top, width, height);

                    return c;
                },
                SetBounds$1: function (c, left, top, width, height) {
                    c.style.left = ExpressCraft.Helper.ToHtmlValue(left);
                    c.style.top = ExpressCraft.Helper.ToHtmlValue(top);
                    c.style.width = ExpressCraft.Helper.ToHtmlValue(width);
                    c.style.height = ExpressCraft.Helper.ToHtmlValue(height);
                },
                SetBoundsFull: function (c) {
                    ExpressCraft.Helper.SetBoundsFull$1(c.Content);

                    return c;
                },
                SetBoundsFull$1: function (c) {
                    ExpressCraft.Helper.SetBounds$1(c, 0, 0, "100%", "100%");
                },
                SetSize: function (c, width, height) {
                    ExpressCraft.Helper.SetSize$1(c.Content, width, height);

                    return c;
                },
                SetSize$1: function (c, width, height) {
                    c.style.width = ExpressCraft.Helper.ToHtmlValue(width);
                    c.style.height = ExpressCraft.Helper.ToHtmlValue(height);
                },
                ToHtmlValue: function (value) {
                    if (Bridge.is(value, System.String)) {
                        return ExpressCraft.Vector2.pf(value);
                    } else {
                        if (Bridge.is(value, System.Int32)) {
                            return ExpressCraft.Helper.ToPx(Bridge.box(value, System.Int32));
                        } else {
                            return ExpressCraft.Helper.ToPx(Bridge.box(value, System.Single, System.Single.format, System.Single.getHashCode));
                        }
                    }
                },
                SetImage: function (c, str, useURL, useResource, center) {
                    if (useURL === void 0) { useURL = true; }
                    if (useResource === void 0) { useResource = true; }
                    if (center === void 0) { center = true; }
                    if (!System.String.startsWith(str, "url(")) {
                        str = useURL ? ExpressCraft.Control.GetImageStringURI(str, useResource) : ExpressCraft.Control.GetImageString(str);
                    }
                    ExpressCraft.Helper.SetImage$1(c.Content, str, useURL, center);
                },
                SetImage$1: function (c, str, useURL, center) {
                    if (useURL === void 0) { useURL = true; }
                    if (center === void 0) { center = true; }
                    if (System.String.isNullOrWhiteSpace(str)) {
                        c.style.background = "";
                        c.style.backgroundSize = "";
                        return;
                    } else if (!System.String.startsWith(str, "url(")) {
                        str = useURL ? ExpressCraft.Control.GetImageStringURI(str) : ExpressCraft.Control.GetImageString(str);
                    }
                    c.style.background = str;
                    if (center) {
                        c.style.backgroundSize = "100% 100%";
                    }
                },
                SetLocation$1: function (c, left, top) {
                    ExpressCraft.Helper.SetLocation$2(c.Content, ExpressCraft.Helper.ToPx(Bridge.box(left, System.Int32)), ExpressCraft.Helper.ToPx(Bridge.box(top, System.Int32)));
                },
                SetLocation: function (c, left, top) {
                    ExpressCraft.Helper.SetLocation$2(c.Content, left, top);
                },
                SetLocation$2: function (c, left, top) {
                    c.style.left = ExpressCraft.Helper.ToHtmlValue(left);
                    c.style.top = ExpressCraft.Helper.ToHtmlValue(top);
                },
                /**
                 * HtmlEscape XSS
                 *
                 * @static
                 * @public
                 * @this ExpressCraft.Helper
                 * @memberof ExpressCraft.Helper
                 * @param   {System.Object}    obj
                 * @return  {string}
                 */
                HtmlEscape: function (obj) {
                    return ExpressCraft.Helper.HtmlEscape$1((Bridge.as(obj, System.String)));
                },
                /**
                 * HtmlEscape XSS
                 *
                 * @static
                 * @public
                 * @this ExpressCraft.Helper
                 * @memberof ExpressCraft.Helper
                 * @param   {string}    input
                 * @return  {string}
                 */
                HtmlEscape$1: function (input) {
                    return !System.String.isNullOrEmpty(input) ? System.String.replaceAll(System.String.replaceAll(ExpressCraft.Helper.HtmlUrlEscape(input), "\\/", "&#x2F"), "\"", "&quot") : "";
                },
                /**
                 * HtmlUrlUnescape XSS
                 *
                 * @static
                 * @public
                 * @this ExpressCraft.Helper
                 * @memberof ExpressCraft.Helper
                 * @param   {string}    input
                 * @return  {string}
                 */
                HtmlUrlUnescape: function (input) {
                    return !System.String.isNullOrEmpty(input) ? System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(input, "&amp", "&"), "&lt", "<"), "&gt", ">"), "&#x27", "'") : "";
                },
                /**
                 * HtmlUrlEscape XSS
                 *
                 * @static
                 * @public
                 * @this ExpressCraft.Helper
                 * @memberof ExpressCraft.Helper
                 * @param   {string}    input
                 * @return  {string}
                 */
                HtmlUrlEscape: function (input) {
                    return !System.String.isNullOrEmpty(input) ? System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(input, "&", "&amp"), "<", "&lt"), ">", "&gt"), "'", "&#x27") : "";
                },
                /**
                 * HtmlUnescape XSS
                 *
                 * @static
                 * @public
                 * @this ExpressCraft.Helper
                 * @memberof ExpressCraft.Helper
                 * @param   {string}    input
                 * @return  {string}
                 */
                HtmlUnescape: function (input) {
                    return !ExpressCraft.Helper.IsEmpty(input) ? System.String.replaceAll(System.String.replaceAll(ExpressCraft.Helper.HtmlUrlUnescape(input), "&#x2F", "\\/"), "&quot", "\"") : "";
                },
                ExchangeClass: function (control, oldClass, newClass) {
                    ExpressCraft.Helper.ExchangeClass$1(control.Content, oldClass, newClass);
                },
                ExchangeClass$1: function (control, oldClass, newClass) {
                    if (!ExpressCraft.Helper.IsEmpty(oldClass) && control.classList.contains(oldClass)) {
                        control.classList.remove(oldClass);
                    }
                    if (!ExpressCraft.Helper.IsEmpty(newClass) && !control.classList.contains(newClass)) {
                        control.classList.add(newClass);
                    }
                },
                IsEmpty: function (value) {
                    return System.String.isNullOrWhiteSpace(value);
                },
                StopAndLog: function (sw, logName) {
                    if (logName === void 0) { logName = "Task"; }
                    sw.stop();
                    ExpressCraft.ConsoleForm.Log((logName || "") + " took " + sw.milliseconds() + "ms to finish");
                }
            }
        }
    });

    Bridge.define("ExpressCraft.Helper.DataTableJson", {
        $kind: "nested class",
        statics: {
            methods: {
                FromExternal: function (o) {
                    var x;
                    x = Bridge.merge(Bridge.createInstance(ExpressCraft.Helper.DataTableJson), o);
                    return x;
                },
                Parse: function (o) {
                    var dt = new ExpressCraft.DataTable();
                    var length = o.fieldNames.length;
                    for (var i = 0; i < length; i = (i + 1) | 0) {
                        dt.AddColumn(o.fieldNames[i], o.dataTypes[i]);
                    }
                    if (o.rows != null) {
                        length = o.rows.length;
                        dt.BeginNewRow(length);

                        for (var i1 = 0; i1 < length; i1 = (i1 + 1) | 0) {
                            var dr = dt.NewRow();
                            dr.batchData = o.rows[i1];
                        }
                        dt.AcceptNewRows();
                    }
                    return dt;
                }
            }
        },
        fields: {
            fieldNames: null,
            rows: null,
            dataTypes: null
        },
        methods: {
            ToTable: function () {
                var dt = new ExpressCraft.DataTable();

                for (var i = 0; i < this.fieldNames.length; i = (i + 1) | 0) {
                    dt.AddColumn(this.fieldNames[System.Array.index(i, this.fieldNames)], this.dataTypes[System.Array.index(i, this.dataTypes)]);
                }

                if (this.rows != null) {
                    dt.BeginNewRow(this.rows.length);

                    for (var i1 = 0; i1 < this.rows.length; i1 = (i1 + 1) | 0) {
                        var dr = dt.NewRow();
                        dr.batchData = this.rows[System.Array.index(i1, this.rows)];
                    }
                    dt.AcceptNewRows();
                }

                return dt;
            }
        }
    });

    Bridge.define("ExpressCraft.IndexValue$1", function (T) { return {
        fields: {
            Index: 0,
            Value: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (index, value) {
                this.$initialize();
                this.Index = index;
                this.Value = value;
            }
        }
    }; });

    Bridge.define("ExpressCraft.IPages", {
        $kind: "interface"
    });

    Bridge.define("ExpressCraft.KeyCodes", {
        statics: {
            fields: {
                Modifiers: 0,
                None: 0,
                LButton: 0,
                RButton: 0,
                Cancel: 0,
                MButton: 0,
                XButton1: 0,
                XButton2: 0,
                Back: 0,
                Tab: 0,
                LineFeed: 0,
                Clear: 0,
                Return: 0,
                Enter: 0,
                ShiftKey: 0,
                ControlKey: 0,
                Menu: 0,
                Pause: 0,
                Capital: 0,
                CapsLock: 0,
                KanaMode: 0,
                HanguelMode: 0,
                HangulMode: 0,
                JunjaMode: 0,
                FinalMode: 0,
                HanjaMode: 0,
                KanjiMode: 0,
                Escape: 0,
                IMEConvert: 0,
                IMENonconvert: 0,
                IMEAccept: 0,
                IMEAceept: 0,
                IMEModeChange: 0,
                Space: 0,
                Prior: 0,
                PageUp: 0,
                Next: 0,
                PageDown: 0,
                End: 0,
                Home: 0,
                Left: 0,
                Up: 0,
                Right: 0,
                Down: 0,
                Select: 0,
                Print: 0,
                Execute: 0,
                Snapshot: 0,
                PrintScreen: 0,
                Insert: 0,
                Delete: 0,
                Help: 0,
                D0: 0,
                D1: 0,
                D2: 0,
                D3: 0,
                D4: 0,
                D5: 0,
                D6: 0,
                D7: 0,
                D8: 0,
                D9: 0,
                A: 0,
                B: 0,
                C: 0,
                D: 0,
                E: 0,
                F: 0,
                G: 0,
                H: 0,
                I: 0,
                J: 0,
                K: 0,
                L: 0,
                M: 0,
                N: 0,
                O: 0,
                P: 0,
                Q: 0,
                R: 0,
                S: 0,
                T: 0,
                U: 0,
                V: 0,
                W: 0,
                X: 0,
                Y: 0,
                Z: 0,
                LWin: 0,
                RWin: 0,
                Apps: 0,
                Sleep: 0,
                NumPad0: 0,
                NumPad1: 0,
                NumPad2: 0,
                NumPad3: 0,
                NumPad4: 0,
                NumPad5: 0,
                NumPad6: 0,
                NumPad7: 0,
                NumPad8: 0,
                NumPad9: 0,
                Multiply: 0,
                Add: 0,
                Separator: 0,
                Subtract: 0,
                Decimal: 0,
                Divide: 0,
                F1: 0,
                F2: 0,
                F3: 0,
                F4: 0,
                F5: 0,
                F6: 0,
                F7: 0,
                F8: 0,
                F9: 0,
                F10: 0,
                F11: 0,
                F12: 0,
                F13: 0,
                F14: 0,
                F15: 0,
                F16: 0,
                F17: 0,
                F18: 0,
                F19: 0,
                F20: 0,
                F21: 0,
                F22: 0,
                F23: 0,
                F24: 0,
                NumLock: 0,
                Scroll: 0,
                LShiftKey: 0,
                RShiftKey: 0,
                LControlKey: 0,
                RControlKey: 0,
                LMenu: 0,
                RMenu: 0,
                BrowserBack: 0,
                BrowserForward: 0,
                BrowserRefresh: 0,
                BrowserStop: 0,
                BrowserSearch: 0,
                BrowserFavorites: 0,
                BrowserHome: 0,
                VolumeMute: 0,
                VolumeDown: 0,
                VolumeUp: 0,
                MediaNextTrack: 0,
                MediaPreviousTrack: 0,
                MediaStop: 0,
                MediaPlayPause: 0,
                LaunchMail: 0,
                SelectMedia: 0,
                LaunchApplication1: 0,
                LaunchApplication2: 0,
                OemSemicolon: 0,
                Oem1: 0,
                Oemplus: 0,
                Oemcomma: 0,
                OemMinus: 0,
                OemPeriod: 0,
                OemQuestion: 0,
                Oem2: 0,
                Oemtilde: 0,
                Oem3: 0,
                OemOpenBrackets: 0,
                Oem4: 0,
                OemPipe: 0,
                Oem5: 0,
                OemCloseBrackets: 0,
                Oem6: 0,
                OemQuotes: 0,
                Oem7: 0,
                Oem8: 0,
                OemBackslash: 0,
                Oem102: 0,
                ProcessKey: 0,
                Packet: 0,
                Attn: 0,
                Crsel: 0,
                Exsel: 0,
                EraseEof: 0,
                Play: 0,
                Zoom: 0,
                NoName: 0,
                Pa1: 0,
                OemClear: 0,
                KeyCode: 0,
                Shift: 0,
                Control: 0,
                Alt: 0
            },
            ctors: {
                init: function () {
                    this.Modifiers = -65536;
                    this.None = 0;
                    this.LButton = 1;
                    this.RButton = 2;
                    this.Cancel = 3;
                    this.MButton = 4;
                    this.XButton1 = 5;
                    this.XButton2 = 6;
                    this.Back = 8;
                    this.Tab = 9;
                    this.LineFeed = 10;
                    this.Clear = 12;
                    this.Return = 13;
                    this.Enter = 13;
                    this.ShiftKey = 16;
                    this.ControlKey = 17;
                    this.Menu = 18;
                    this.Pause = 19;
                    this.Capital = 20;
                    this.CapsLock = 20;
                    this.KanaMode = 21;
                    this.HanguelMode = 21;
                    this.HangulMode = 21;
                    this.JunjaMode = 23;
                    this.FinalMode = 24;
                    this.HanjaMode = 25;
                    this.KanjiMode = 25;
                    this.Escape = 27;
                    this.IMEConvert = 28;
                    this.IMENonconvert = 29;
                    this.IMEAccept = 30;
                    this.IMEAceept = 30;
                    this.IMEModeChange = 31;
                    this.Space = 32;
                    this.Prior = 33;
                    this.PageUp = 33;
                    this.Next = 34;
                    this.PageDown = 34;
                    this.End = 35;
                    this.Home = 36;
                    this.Left = 37;
                    this.Up = 38;
                    this.Right = 39;
                    this.Down = 40;
                    this.Select = 41;
                    this.Print = 42;
                    this.Execute = 43;
                    this.Snapshot = 44;
                    this.PrintScreen = 44;
                    this.Insert = 45;
                    this.Delete = 46;
                    this.Help = 47;
                    this.D0 = 48;
                    this.D1 = 49;
                    this.D2 = 50;
                    this.D3 = 51;
                    this.D4 = 52;
                    this.D5 = 53;
                    this.D6 = 54;
                    this.D7 = 55;
                    this.D8 = 56;
                    this.D9 = 57;
                    this.A = 65;
                    this.B = 66;
                    this.C = 67;
                    this.D = 68;
                    this.E = 69;
                    this.F = 70;
                    this.G = 71;
                    this.H = 72;
                    this.I = 73;
                    this.J = 74;
                    this.K = 75;
                    this.L = 76;
                    this.M = 77;
                    this.N = 78;
                    this.O = 79;
                    this.P = 80;
                    this.Q = 81;
                    this.R = 82;
                    this.S = 83;
                    this.T = 84;
                    this.U = 85;
                    this.V = 86;
                    this.W = 87;
                    this.X = 88;
                    this.Y = 89;
                    this.Z = 90;
                    this.LWin = 91;
                    this.RWin = 92;
                    this.Apps = 93;
                    this.Sleep = 95;
                    this.NumPad0 = 96;
                    this.NumPad1 = 97;
                    this.NumPad2 = 98;
                    this.NumPad3 = 99;
                    this.NumPad4 = 100;
                    this.NumPad5 = 101;
                    this.NumPad6 = 102;
                    this.NumPad7 = 103;
                    this.NumPad8 = 104;
                    this.NumPad9 = 105;
                    this.Multiply = 106;
                    this.Add = 107;
                    this.Separator = 108;
                    this.Subtract = 109;
                    this.Decimal = 110;
                    this.Divide = 111;
                    this.F1 = 112;
                    this.F2 = 113;
                    this.F3 = 114;
                    this.F4 = 115;
                    this.F5 = 116;
                    this.F6 = 117;
                    this.F7 = 118;
                    this.F8 = 119;
                    this.F9 = 120;
                    this.F10 = 121;
                    this.F11 = 122;
                    this.F12 = 123;
                    this.F13 = 124;
                    this.F14 = 125;
                    this.F15 = 126;
                    this.F16 = 127;
                    this.F17 = 128;
                    this.F18 = 129;
                    this.F19 = 130;
                    this.F20 = 131;
                    this.F21 = 132;
                    this.F22 = 133;
                    this.F23 = 134;
                    this.F24 = 135;
                    this.NumLock = 144;
                    this.Scroll = 145;
                    this.LShiftKey = 160;
                    this.RShiftKey = 161;
                    this.LControlKey = 162;
                    this.RControlKey = 163;
                    this.LMenu = 164;
                    this.RMenu = 165;
                    this.BrowserBack = 166;
                    this.BrowserForward = 167;
                    this.BrowserRefresh = 168;
                    this.BrowserStop = 169;
                    this.BrowserSearch = 170;
                    this.BrowserFavorites = 171;
                    this.BrowserHome = 172;
                    this.VolumeMute = 173;
                    this.VolumeDown = 174;
                    this.VolumeUp = 175;
                    this.MediaNextTrack = 176;
                    this.MediaPreviousTrack = 177;
                    this.MediaStop = 178;
                    this.MediaPlayPause = 179;
                    this.LaunchMail = 180;
                    this.SelectMedia = 181;
                    this.LaunchApplication1 = 182;
                    this.LaunchApplication2 = 183;
                    this.OemSemicolon = 186;
                    this.Oem1 = 186;
                    this.Oemplus = 187;
                    this.Oemcomma = 188;
                    this.OemMinus = 189;
                    this.OemPeriod = 190;
                    this.OemQuestion = 191;
                    this.Oem2 = 191;
                    this.Oemtilde = 192;
                    this.Oem3 = 192;
                    this.OemOpenBrackets = 219;
                    this.Oem4 = 219;
                    this.OemPipe = 220;
                    this.Oem5 = 220;
                    this.OemCloseBrackets = 221;
                    this.Oem6 = 221;
                    this.OemQuotes = 222;
                    this.Oem7 = 222;
                    this.Oem8 = 223;
                    this.OemBackslash = 226;
                    this.Oem102 = 226;
                    this.ProcessKey = 229;
                    this.Packet = 231;
                    this.Attn = 246;
                    this.Crsel = 247;
                    this.Exsel = 248;
                    this.EraseEof = 249;
                    this.Play = 250;
                    this.Zoom = 251;
                    this.NoName = 252;
                    this.Pa1 = 253;
                    this.OemClear = 254;
                    this.KeyCode = 65535;
                    this.Shift = 65536;
                    this.Control = 131072;
                    this.Alt = 262144;
                }
            }
        }
    });

    Bridge.define("ExpressCraft.KnownColor", {
        $kind: "enum",
        statics: {
            fields: {
                ActiveBorder: 1,
                ActiveCaption: 2,
                ActiveCaptionText: 3,
                AliceBlue: 28,
                AntiqueWhite: 29,
                AppWorkspace: 4,
                Aqua: 30,
                Aquamarine: 31,
                Azure: 32,
                Beige: 33,
                Bisque: 34,
                Black: 35,
                BlanchedAlmond: 36,
                Blue: 37,
                BlueViolet: 38,
                Brown: 39,
                BurlyWood: 40,
                ButtonFace: 168,
                ButtonHighlight: 169,
                ButtonShadow: 170,
                CadetBlue: 41,
                Chartreuse: 42,
                Chocolate: 43,
                Control: 5,
                ControlDark: 6,
                ControlDarkDark: 7,
                ControlLight: 8,
                ControlLightLight: 9,
                ControlText: 10,
                Coral: 44,
                CornflowerBlue: 45,
                Cornsilk: 46,
                Crimson: 47,
                Cyan: 48,
                DarkBlue: 49,
                DarkCyan: 50,
                DarkGoldenrod: 51,
                DarkGray: 52,
                DarkGreen: 53,
                DarkKhaki: 54,
                DarkMagenta: 55,
                DarkOliveGreen: 56,
                DarkOrange: 57,
                DarkOrchid: 58,
                DarkRed: 59,
                DarkSalmon: 60,
                DarkSeaGreen: 61,
                DarkSlateBlue: 62,
                DarkSlateGray: 63,
                DarkTurquoise: 64,
                DarkViolet: 65,
                DeepPink: 66,
                DeepSkyBlue: 67,
                Desktop: 11,
                DimGray: 68,
                DodgerBlue: 69,
                Firebrick: 70,
                FloralWhite: 71,
                ForestGreen: 72,
                Fuchsia: 73,
                Gainsboro: 74,
                GhostWhite: 75,
                Gold: 76,
                Goldenrod: 77,
                GradientActiveCaption: 171,
                GradientInactiveCaption: 172,
                Gray: 78,
                GrayText: 12,
                Green: 79,
                GreenYellow: 80,
                Highlight: 13,
                HighlightText: 14,
                Honeydew: 81,
                HotPink: 82,
                HotTrack: 15,
                InactiveBorder: 16,
                InactiveCaption: 17,
                InactiveCaptionText: 18,
                IndianRed: 83,
                Indigo: 84,
                Info: 19,
                InfoText: 20,
                Ivory: 85,
                Khaki: 86,
                Lavender: 87,
                LavenderBlush: 88,
                LawnGreen: 89,
                LemonChiffon: 90,
                LightBlue: 91,
                LightCoral: 92,
                LightCyan: 93,
                LightGoldenrodYellow: 94,
                LightGray: 95,
                LightGreen: 96,
                LightPink: 97,
                LightSalmon: 98,
                LightSeaGreen: 99,
                LightSkyBlue: 100,
                LightSlateGray: 101,
                LightSteelBlue: 102,
                LightYellow: 103,
                Lime: 104,
                LimeGreen: 105,
                Linen: 106,
                Magenta: 107,
                Maroon: 108,
                MediumAquamarine: 109,
                MediumBlue: 110,
                MediumOrchid: 111,
                MediumPurple: 112,
                MediumSeaGreen: 113,
                MediumSlateBlue: 114,
                MediumSpringGreen: 115,
                MediumTurquoise: 116,
                MediumVioletRed: 117,
                Menu: 21,
                MenuBar: 173,
                MenuHighlight: 174,
                MenuText: 22,
                MidnightBlue: 118,
                MintCream: 119,
                MistyRose: 120,
                Moccasin: 121,
                NavajoWhite: 122,
                Navy: 123,
                OldLace: 124,
                Olive: 125,
                OliveDrab: 126,
                Orange: 127,
                OrangeRed: 128,
                Orchid: 129,
                PaleGoldenrod: 130,
                PaleGreen: 131,
                PaleTurquoise: 132,
                PaleVioletRed: 133,
                PapayaWhip: 134,
                PeachPuff: 135,
                Peru: 136,
                Pink: 137,
                Plum: 138,
                PowderBlue: 139,
                Purple: 140,
                Red: 141,
                RosyBrown: 142,
                RoyalBlue: 143,
                SaddleBrown: 144,
                Salmon: 145,
                SandyBrown: 146,
                ScrollBar: 23,
                SeaGreen: 147,
                SeaShell: 148,
                Sienna: 149,
                Silver: 150,
                SkyBlue: 151,
                SlateBlue: 152,
                SlateGray: 153,
                Snow: 154,
                SpringGreen: 155,
                SteelBlue: 156,
                Tan: 157,
                Teal: 158,
                Thistle: 159,
                Tomato: 160,
                Transparent: 27,
                Turquoise: 161,
                Violet: 162,
                Wheat: 163,
                White: 164,
                WhiteSmoke: 165,
                Window: 24,
                WindowFrame: 25,
                WindowText: 26,
                Yellow: 166,
                YellowGreen: 167
            }
        }
    });

    Bridge.define("ExpressCraft.KnownColorTable", {
        statics: {
            fields: {
                AlphaShift: 0,
                BlueShift: 0,
                colorNameTable: null,
                colorTable: null,
                GreenShift: 0,
                RedShift: 0,
                Win32BlueShift: 0,
                Win32GreenShift: 0,
                Win32RedShift: 0
            },
            ctors: {
                init: function () {
                    this.AlphaShift = 24;
                    this.BlueShift = 0;
                    this.GreenShift = 8;
                    this.RedShift = 16;
                    this.Win32BlueShift = 16;
                    this.Win32GreenShift = 8;
                    this.Win32RedShift = 0;
                }
            },
            methods: {
                GetColorName: function (index) {
                    ExpressCraft.KnownColorTable.EnsureColorNameTable();
                    return ExpressCraft.KnownColorTable.colorNameTable[System.Array.index(index, ExpressCraft.KnownColorTable.colorNameTable)];
                },
                ArgbToKnownColor: function (targetARGB) {
                    ExpressCraft.KnownColorTable.EnsureColorTable();
                    for (var i = 0; i < ExpressCraft.KnownColorTable.colorTable.length; i = (i + 1) | 0) {
                        var num2 = ExpressCraft.KnownColorTable.colorTable[System.Array.index(i, ExpressCraft.KnownColorTable.colorTable)];
                        if (num2 === targetARGB) {
                            var color = ExpressCraft.Color.FromKnownColor(i);
                            if (!color.IsSystemColor) {
                                return color.$clone();
                            }
                        }
                    }
                    return ExpressCraft.Color.FromArgb(targetARGB);
                },
                Encode: function (alpha, red, green, blue) {
                    return ((((red << 16) | (green << 8)) | blue) | (alpha << 24));
                },
                EnsureColorNameTable: function () {
                    if (ExpressCraft.KnownColorTable.colorNameTable == null) {
                        ExpressCraft.KnownColorTable.InitColorNameTable();
                    }
                },
                EnsureColorTable: function () {
                    if (ExpressCraft.KnownColorTable.colorTable == null) {
                        ExpressCraft.KnownColorTable.InitColorTable();
                    }
                },
                FromWin32Value: function (value) {
                    return ExpressCraft.KnownColorTable.Encode(255, value & 255, (value >> 8) & 255, (value >> 16) & 255);
                },
                InitColorNameTable: function () {
                    var s = System.Array.init(175, null, System.String);
                    s[System.Array.index(1, s)] = "ActiveBorder";
                    s[System.Array.index(2, s)] = "ActiveCaption";
                    s[System.Array.index(3, s)] = "ActiveCaptionText";
                    s[System.Array.index(4, s)] = "AppWorkspace";
                    s[System.Array.index(168, s)] = "ButtonFace";
                    s[System.Array.index(169, s)] = "ButtonHighlight";
                    s[System.Array.index(170, s)] = "ButtonShadow";
                    s[System.Array.index(5, s)] = "Control";
                    s[System.Array.index(6, s)] = "ControlDark";
                    s[System.Array.index(7, s)] = "ControlDarkDark";
                    s[System.Array.index(8, s)] = "ControlLight";
                    s[System.Array.index(9, s)] = "ControlLightLight";
                    s[System.Array.index(10, s)] = "ControlText";
                    s[System.Array.index(11, s)] = "Desktop";
                    s[System.Array.index(171, s)] = "GradientActiveCaption";
                    s[System.Array.index(172, s)] = "GradientInactiveCaption";
                    s[System.Array.index(12, s)] = "GrayText";
                    s[System.Array.index(13, s)] = "Highlight";
                    s[System.Array.index(14, s)] = "HighlightText";
                    s[System.Array.index(15, s)] = "HotTrack";
                    s[System.Array.index(16, s)] = "InactiveBorder";
                    s[System.Array.index(17, s)] = "InactiveCaption";
                    s[System.Array.index(18, s)] = "InactiveCaptionText";
                    s[System.Array.index(19, s)] = "Info";
                    s[System.Array.index(20, s)] = "InfoText";
                    s[System.Array.index(21, s)] = "Menu";
                    s[System.Array.index(173, s)] = "MenuBar";
                    s[System.Array.index(174, s)] = "MenuHighlight";
                    s[System.Array.index(22, s)] = "MenuText";
                    s[System.Array.index(23, s)] = "ScrollBar";
                    s[System.Array.index(24, s)] = "Window";
                    s[System.Array.index(25, s)] = "WindowFrame";
                    s[System.Array.index(26, s)] = "WindowText";
                    s[System.Array.index(27, s)] = "Transparent";
                    s[System.Array.index(28, s)] = "AliceBlue";
                    s[System.Array.index(29, s)] = "AntiqueWhite";
                    s[System.Array.index(30, s)] = "Aqua";
                    s[System.Array.index(31, s)] = "Aquamarine";
                    s[System.Array.index(32, s)] = "Azure";
                    s[System.Array.index(33, s)] = "Beige";
                    s[System.Array.index(34, s)] = "Bisque";
                    s[System.Array.index(35, s)] = "Black";
                    s[System.Array.index(36, s)] = "BlanchedAlmond";
                    s[System.Array.index(37, s)] = "Blue";
                    s[System.Array.index(38, s)] = "BlueViolet";
                    s[System.Array.index(39, s)] = "Brown";
                    s[System.Array.index(40, s)] = "BurlyWood";
                    s[System.Array.index(41, s)] = "CadetBlue";
                    s[System.Array.index(42, s)] = "Chartreuse";
                    s[System.Array.index(43, s)] = "Chocolate";
                    s[System.Array.index(44, s)] = "Coral";
                    s[System.Array.index(45, s)] = "CornflowerBlue";
                    s[System.Array.index(46, s)] = "Cornsilk";
                    s[System.Array.index(47, s)] = "Crimson";
                    s[System.Array.index(48, s)] = "Cyan";
                    s[System.Array.index(49, s)] = "DarkBlue";
                    s[System.Array.index(50, s)] = "DarkCyan";
                    s[System.Array.index(51, s)] = "DarkGoldenrod";
                    s[System.Array.index(52, s)] = "DarkGray";
                    s[System.Array.index(53, s)] = "DarkGreen";
                    s[System.Array.index(54, s)] = "DarkKhaki";
                    s[System.Array.index(55, s)] = "DarkMagenta";
                    s[System.Array.index(56, s)] = "DarkOliveGreen";
                    s[System.Array.index(57, s)] = "DarkOrange";
                    s[System.Array.index(58, s)] = "DarkOrchid";
                    s[System.Array.index(59, s)] = "DarkRed";
                    s[System.Array.index(60, s)] = "DarkSalmon";
                    s[System.Array.index(61, s)] = "DarkSeaGreen";
                    s[System.Array.index(62, s)] = "DarkSlateBlue";
                    s[System.Array.index(63, s)] = "DarkSlateGray";
                    s[System.Array.index(64, s)] = "DarkTurquoise";
                    s[System.Array.index(65, s)] = "DarkViolet";
                    s[System.Array.index(66, s)] = "DeepPink";
                    s[System.Array.index(67, s)] = "DeepSkyBlue";
                    s[System.Array.index(68, s)] = "DimGray";
                    s[System.Array.index(69, s)] = "DodgerBlue";
                    s[System.Array.index(70, s)] = "Firebrick";
                    s[System.Array.index(71, s)] = "FloralWhite";
                    s[System.Array.index(72, s)] = "ForestGreen";
                    s[System.Array.index(73, s)] = "Fuchsia";
                    s[System.Array.index(74, s)] = "Gainsboro";
                    s[System.Array.index(75, s)] = "GhostWhite";
                    s[System.Array.index(76, s)] = "Gold";
                    s[System.Array.index(77, s)] = "Goldenrod";
                    s[System.Array.index(78, s)] = "Gray";
                    s[System.Array.index(79, s)] = "Green";
                    s[System.Array.index(80, s)] = "GreenYellow";
                    s[System.Array.index(81, s)] = "Honeydew";
                    s[System.Array.index(82, s)] = "HotPink";
                    s[System.Array.index(83, s)] = "IndianRed";
                    s[System.Array.index(84, s)] = "Indigo";
                    s[System.Array.index(85, s)] = "Ivory";
                    s[System.Array.index(86, s)] = "Khaki";
                    s[System.Array.index(87, s)] = "Lavender";
                    s[System.Array.index(88, s)] = "LavenderBlush";
                    s[System.Array.index(89, s)] = "LawnGreen";
                    s[System.Array.index(90, s)] = "LemonChiffon";
                    s[System.Array.index(91, s)] = "LightBlue";
                    s[System.Array.index(92, s)] = "LightCoral";
                    s[System.Array.index(93, s)] = "LightCyan";
                    s[System.Array.index(94, s)] = "LightGoldenrodYellow";
                    s[System.Array.index(95, s)] = "LightGray";
                    s[System.Array.index(96, s)] = "LightGreen";
                    s[System.Array.index(97, s)] = "LightPink";
                    s[System.Array.index(98, s)] = "LightSalmon";
                    s[System.Array.index(99, s)] = "LightSeaGreen";
                    s[System.Array.index(100, s)] = "LightSkyBlue";
                    s[System.Array.index(101, s)] = "LightSlateGray";
                    s[System.Array.index(102, s)] = "LightSteelBlue";
                    s[System.Array.index(103, s)] = "LightYellow";
                    s[System.Array.index(104, s)] = "Lime";
                    s[System.Array.index(105, s)] = "LimeGreen";
                    s[System.Array.index(106, s)] = "Linen";
                    s[System.Array.index(107, s)] = "Magenta";
                    s[System.Array.index(108, s)] = "Maroon";
                    s[System.Array.index(109, s)] = "MediumAquamarine";
                    s[System.Array.index(110, s)] = "MediumBlue";
                    s[System.Array.index(111, s)] = "MediumOrchid";
                    s[System.Array.index(112, s)] = "MediumPurple";
                    s[System.Array.index(113, s)] = "MediumSeaGreen";
                    s[System.Array.index(114, s)] = "MediumSlateBlue";
                    s[System.Array.index(115, s)] = "MediumSpringGreen";
                    s[System.Array.index(116, s)] = "MediumTurquoise";
                    s[System.Array.index(117, s)] = "MediumVioletRed";
                    s[System.Array.index(118, s)] = "MidnightBlue";
                    s[System.Array.index(119, s)] = "MintCream";
                    s[System.Array.index(120, s)] = "MistyRose";
                    s[System.Array.index(121, s)] = "Moccasin";
                    s[System.Array.index(122, s)] = "NavajoWhite";
                    s[System.Array.index(123, s)] = "Navy";
                    s[System.Array.index(124, s)] = "OldLace";
                    s[System.Array.index(125, s)] = "Olive";
                    s[System.Array.index(126, s)] = "OliveDrab";
                    s[System.Array.index(127, s)] = "Orange";
                    s[System.Array.index(128, s)] = "OrangeRed";
                    s[System.Array.index(129, s)] = "Orchid";
                    s[System.Array.index(130, s)] = "PaleGoldenrod";
                    s[System.Array.index(131, s)] = "PaleGreen";
                    s[System.Array.index(132, s)] = "PaleTurquoise";
                    s[System.Array.index(133, s)] = "PaleVioletRed";
                    s[System.Array.index(134, s)] = "PapayaWhip";
                    s[System.Array.index(135, s)] = "PeachPuff";
                    s[System.Array.index(136, s)] = "Peru";
                    s[System.Array.index(137, s)] = "Pink";
                    s[System.Array.index(138, s)] = "Plum";
                    s[System.Array.index(139, s)] = "PowderBlue";
                    s[System.Array.index(140, s)] = "Purple";
                    s[System.Array.index(141, s)] = "Red";
                    s[System.Array.index(142, s)] = "RosyBrown";
                    s[System.Array.index(143, s)] = "RoyalBlue";
                    s[System.Array.index(144, s)] = "SaddleBrown";
                    s[System.Array.index(145, s)] = "Salmon";
                    s[System.Array.index(146, s)] = "SandyBrown";
                    s[System.Array.index(147, s)] = "SeaGreen";
                    s[System.Array.index(148, s)] = "SeaShell";
                    s[System.Array.index(149, s)] = "Sienna";
                    s[System.Array.index(150, s)] = "Silver";
                    s[System.Array.index(151, s)] = "SkyBlue";
                    s[System.Array.index(152, s)] = "SlateBlue";
                    s[System.Array.index(153, s)] = "SlateGray";
                    s[System.Array.index(154, s)] = "Snow";
                    s[System.Array.index(155, s)] = "SpringGreen";
                    s[System.Array.index(156, s)] = "SteelBlue";
                    s[System.Array.index(157, s)] = "Tan";
                    s[System.Array.index(158, s)] = "Teal";
                    s[System.Array.index(159, s)] = "Thistle";
                    s[System.Array.index(160, s)] = "Tomato";
                    s[System.Array.index(161, s)] = "Turquoise";
                    s[System.Array.index(162, s)] = "Violet";
                    s[System.Array.index(163, s)] = "Wheat";
                    s[System.Array.index(164, s)] = "White";
                    s[System.Array.index(165, s)] = "WhiteSmoke";
                    s[System.Array.index(166, s)] = "Yellow";
                    s[System.Array.index(167, s)] = "YellowGreen";
                    ExpressCraft.KnownColorTable.colorNameTable = s;
                },
                InitColorTable: function () {
                    var c = System.Array.init(175, 0, System.Int32);

                    c[System.Array.index(27, c)] = 16777215;
                    c[System.Array.index(28, c)] = -984833;
                    c[System.Array.index(29, c)] = -332841;
                    c[System.Array.index(30, c)] = -16711681;
                    c[System.Array.index(31, c)] = -8388652;
                    c[System.Array.index(32, c)] = -983041;
                    c[System.Array.index(33, c)] = -657956;
                    c[System.Array.index(34, c)] = -6972;
                    c[System.Array.index(35, c)] = -16777216;
                    c[System.Array.index(36, c)] = -5171;
                    c[System.Array.index(37, c)] = -16776961;
                    c[System.Array.index(38, c)] = -7722014;
                    c[System.Array.index(39, c)] = -5952982;
                    c[System.Array.index(40, c)] = -2180985;
                    c[System.Array.index(41, c)] = -10510688;
                    c[System.Array.index(42, c)] = -8388864;
                    c[System.Array.index(43, c)] = -2987746;
                    c[System.Array.index(44, c)] = -32944;
                    c[System.Array.index(45, c)] = -10185235;
                    c[System.Array.index(46, c)] = -1828;
                    c[System.Array.index(47, c)] = -2354116;
                    c[System.Array.index(48, c)] = -16711681;
                    c[System.Array.index(49, c)] = -16777077;
                    c[System.Array.index(50, c)] = -16741493;
                    c[System.Array.index(51, c)] = -4684277;
                    c[System.Array.index(52, c)] = -5658199;
                    c[System.Array.index(53, c)] = -16751616;
                    c[System.Array.index(54, c)] = -4343957;
                    c[System.Array.index(55, c)] = -7667573;
                    c[System.Array.index(56, c)] = -11179217;
                    c[System.Array.index(57, c)] = -29696;
                    c[System.Array.index(58, c)] = -6737204;
                    c[System.Array.index(59, c)] = -7667712;
                    c[System.Array.index(60, c)] = -1468806;
                    c[System.Array.index(61, c)] = -7357301;
                    c[System.Array.index(62, c)] = -12042869;
                    c[System.Array.index(63, c)] = -13676721;
                    c[System.Array.index(64, c)] = -16724271;
                    c[System.Array.index(65, c)] = -7077677;
                    c[System.Array.index(66, c)] = -60269;
                    c[System.Array.index(67, c)] = -16728065;
                    c[System.Array.index(68, c)] = -9868951;
                    c[System.Array.index(69, c)] = -14774017;
                    c[System.Array.index(70, c)] = -5103070;
                    c[System.Array.index(71, c)] = -1296;
                    c[System.Array.index(72, c)] = -14513374;
                    c[System.Array.index(73, c)] = -65281;
                    c[System.Array.index(74, c)] = -2302756;
                    c[System.Array.index(75, c)] = -460545;
                    c[System.Array.index(76, c)] = -10496;
                    c[System.Array.index(77, c)] = -2448096;
                    c[System.Array.index(78, c)] = -8355712;
                    c[System.Array.index(79, c)] = -16744448;
                    c[System.Array.index(80, c)] = -5374161;
                    c[System.Array.index(81, c)] = -983056;
                    c[System.Array.index(82, c)] = -38476;
                    c[System.Array.index(83, c)] = -3318692;
                    c[System.Array.index(84, c)] = -11861886;
                    c[System.Array.index(85, c)] = -16;
                    c[System.Array.index(86, c)] = -989556;
                    c[System.Array.index(87, c)] = -1644806;
                    c[System.Array.index(88, c)] = -3851;
                    c[System.Array.index(89, c)] = -8586240;
                    c[System.Array.index(90, c)] = -1331;
                    c[System.Array.index(91, c)] = -5383962;
                    c[System.Array.index(92, c)] = -1015680;
                    c[System.Array.index(93, c)] = -2031617;
                    c[System.Array.index(94, c)] = -329006;
                    c[System.Array.index(95, c)] = -2894893;
                    c[System.Array.index(96, c)] = -7278960;
                    c[System.Array.index(97, c)] = -18751;
                    c[System.Array.index(98, c)] = -24454;
                    c[System.Array.index(99, c)] = -14634326;
                    c[System.Array.index(100, c)] = -7876870;
                    c[System.Array.index(101, c)] = -8943463;
                    c[System.Array.index(102, c)] = -5192482;
                    c[System.Array.index(103, c)] = -32;
                    c[System.Array.index(104, c)] = -16711936;
                    c[System.Array.index(105, c)] = -13447886;
                    c[System.Array.index(106, c)] = -331546;
                    c[System.Array.index(107, c)] = -65281;
                    c[System.Array.index(108, c)] = -8388608;
                    c[System.Array.index(109, c)] = -10039894;
                    c[System.Array.index(110, c)] = -16777011;
                    c[System.Array.index(111, c)] = -4565549;
                    c[System.Array.index(112, c)] = -7114533;
                    c[System.Array.index(113, c)] = -12799119;
                    c[System.Array.index(114, c)] = -8689426;
                    c[System.Array.index(115, c)] = -16713062;
                    c[System.Array.index(116, c)] = -12004916;
                    c[System.Array.index(117, c)] = -3730043;
                    c[System.Array.index(118, c)] = -15132304;
                    c[System.Array.index(119, c)] = -655366;
                    c[System.Array.index(120, c)] = -6943;
                    c[System.Array.index(121, c)] = -6987;
                    c[System.Array.index(122, c)] = -8531;
                    c[System.Array.index(123, c)] = -16777088;
                    c[System.Array.index(124, c)] = -133658;
                    c[System.Array.index(125, c)] = -8355840;
                    c[System.Array.index(126, c)] = -9728477;
                    c[System.Array.index(127, c)] = -23296;
                    c[System.Array.index(128, c)] = -47872;
                    c[System.Array.index(129, c)] = -2461482;
                    c[System.Array.index(130, c)] = -1120086;
                    c[System.Array.index(131, c)] = -6751336;
                    c[System.Array.index(132, c)] = -5247250;
                    c[System.Array.index(133, c)] = -2396013;
                    c[System.Array.index(134, c)] = -4139;
                    c[System.Array.index(135, c)] = -9543;
                    c[System.Array.index(136, c)] = -3308225;
                    c[System.Array.index(137, c)] = -16181;
                    c[System.Array.index(138, c)] = -2252579;
                    c[System.Array.index(139, c)] = -5185306;
                    c[System.Array.index(140, c)] = -8388480;
                    c[System.Array.index(141, c)] = -65536;
                    c[System.Array.index(142, c)] = -4419697;
                    c[System.Array.index(143, c)] = -12490271;
                    c[System.Array.index(144, c)] = -7650029;
                    c[System.Array.index(145, c)] = -360334;
                    c[System.Array.index(146, c)] = -744352;
                    c[System.Array.index(147, c)] = -13726889;
                    c[System.Array.index(148, c)] = -2578;
                    c[System.Array.index(149, c)] = -6270419;
                    c[System.Array.index(150, c)] = -4144960;
                    c[System.Array.index(151, c)] = -7876885;
                    c[System.Array.index(152, c)] = -9807155;
                    c[System.Array.index(153, c)] = -9404272;
                    c[System.Array.index(154, c)] = -1286;
                    c[System.Array.index(155, c)] = -16711809;
                    c[System.Array.index(156, c)] = -12156236;
                    c[System.Array.index(157, c)] = -2968436;
                    c[System.Array.index(158, c)] = -16744320;
                    c[System.Array.index(159, c)] = -2572328;
                    c[System.Array.index(160, c)] = -40121;
                    c[System.Array.index(161, c)] = -12525360;
                    c[System.Array.index(162, c)] = -1146130;
                    c[System.Array.index(163, c)] = -663885;
                    c[System.Array.index(164, c)] = -1;
                    c[System.Array.index(165, c)] = -657931;
                    c[System.Array.index(166, c)] = -256;
                    c[System.Array.index(167, c)] = -6632142;
                    ExpressCraft.KnownColorTable.colorTable = c;
                },
                KnownColorToArgb: function (color) {
                    ExpressCraft.KnownColorTable.EnsureColorTable();
                    if (color <= ExpressCraft.KnownColor.MenuHighlight) {
                        return ExpressCraft.KnownColorTable.colorTable[System.Array.index(color, ExpressCraft.KnownColorTable.colorTable)];
                    }
                    return 0;
                },
                KnownColorToName: function (color) {
                    ExpressCraft.KnownColorTable.EnsureColorNameTable();
                    if (color <= ExpressCraft.KnownColor.MenuHighlight) {
                        return ExpressCraft.KnownColorTable.colorNameTable[System.Array.index(color, ExpressCraft.KnownColorTable.colorNameTable)];
                    }
                    return null;
                }
            }
        }
    });

    Bridge.define("ExpressCraft.Layout", {
        $kind: "enum",
        statics: {
            fields: {
                Portrait: 0,
                Landscape: 1
            }
        }
    });

    Bridge.define("ExpressCraft.LayoutColumn", {
        fields: {
            Groups: null
        },
        ctors: {
            init: function () {
                this.Groups = new (System.Collections.Generic.List$1(ExpressCraft.LayoutGroup)).ctor();
            },
            ctor: function (groups) {
                if (groups === void 0) { groups = []; }
                var $t;

                this.$initialize();
                if (groups != null && groups.length > 0) {
                    $t = Bridge.getEnumerator(groups);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.Groups.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            }
        }
    });

    Bridge.define("ExpressCraft.LayoutContainer", {
        statics: {
            fields: {
                TabIndex: 0
            },
            ctors: {
                init: function () {
                    this.TabIndex = 2;
                }
            }
        },
        fields: {
            Columns: null,
            ColumnWidth: 0,
            ControlMargin: 0,
            appliedLayout: false,
            ButtinWidth: 0,
            Controls: null,
            ControlEditable: null
        },
        ctors: {
            init: function () {
                this.Columns = new (System.Collections.Generic.List$1(ExpressCraft.LayoutColumn)).ctor();
                this.appliedLayout = false;
                this.ButtinWidth = 73;
                this.Controls = new (System.Collections.Generic.List$1(ExpressCraft.LayoutControl)).ctor();
                this.ControlEditable = new (System.Collections.Generic.List$1(ExpressCraft.LayoutControl)).ctor();
            },
            $ctor1: function (columnWidth, controlMargin, columns) {
                if (columnWidth === void 0) { columnWidth = 500; }
                if (controlMargin === void 0) { controlMargin = 6; }
                if (columns === void 0) { columns = []; }
                var $t;

                this.$initialize();
                this.ColumnWidth = columnWidth;
                this.ControlMargin = controlMargin;

                if (columns != null && columns.length > 0) {
                    $t = Bridge.getEnumerator(columns);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.Columns.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            $ctor2: function (columnWidth, controlMargin, buttonWidth, columns) {
                if (columnWidth === void 0) { columnWidth = 500; }
                if (controlMargin === void 0) { controlMargin = 6; }
                if (buttonWidth === void 0) { buttonWidth = 73; }
                if (columns === void 0) { columns = []; }
                var $t;

                this.$initialize();
                this.ColumnWidth = columnWidth;
                this.ControlMargin = controlMargin;
                this.ButtinWidth = buttonWidth;

                if (columns != null && columns.length > 0) {
                    $t = Bridge.getEnumerator(columns);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.Columns.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            ctor: function (columns) {
                if (columns === void 0) { columns = []; }
                var $t;

                this.$initialize();
                this.ColumnWidth = 500;
                this.ControlMargin = 6;

                if (columns != null && columns.length > 0) {
                    $t = Bridge.getEnumerator(columns);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.Columns.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            }
        },
        methods: {
            AddInput: function (linkField, input) {
                var cl = new ExpressCraft.LayoutControl.ctor(linkField, input);
                this.Controls.add(cl);
                if (!input.Readonly) {
                    this.ControlEditable.add(cl);
                }
            },
            AppliedLayout: function () {
                return this.appliedLayout;
            },
            GetControl: function (name, allowReadonly) {
                if (allowReadonly === void 0) { allowReadonly = false; }
                name = name.toLowerCase();

                if (allowReadonly) {
                    for (var i = 0; i < this.Controls.Count; i = (i + 1) | 0) {
                        if (Bridge.referenceEquals(this.Controls.getItem(i).LinkFieldName.toLowerCase(), name)) {
                            return this.Controls.getItem(i);
                        }
                    }
                } else {
                    for (var i1 = 0; i1 < this.ControlEditable.Count; i1 = (i1 + 1) | 0) {
                        if (Bridge.referenceEquals(this.ControlEditable.getItem(i1).LinkFieldName.toLowerCase(), name)) {
                            return this.ControlEditable.getItem(i1);
                        }
                    }
                }

                return null;
            },
            GetText: function (name, allowReadyOnly) {
                var $t, $t1;
                if (allowReadyOnly === void 0) { allowReadyOnly = false; }
                return ($t = this.GetControl(name, allowReadyOnly)) != null && ($t1 = $t.Input) != null ? $t1.Text : null;
            },
            GetEditValue: function (name, allowReadyOnly) {
                var $t, $t1;
                if (allowReadyOnly === void 0) { allowReadyOnly = false; }
                return ($t = this.GetControl(name, allowReadyOnly)) != null && ($t1 = $t.Input) != null ? $t1.GetEditValue() : null;
            },
            SetText: function (name, value, allowReadyOnly) {
                var $t;
                if (allowReadyOnly === void 0) { allowReadyOnly = false; }
                var input = ($t = this.GetControl(name, allowReadyOnly)) != null ? $t.Input : null;
                if (input != null) {
                    input.Text = value;
                }
            },
            Focus: function () {
                if (ExpressCraft.Helper.NotDesktop) {
                    return;
                }
                if (this.Controls == null || this.Controls.Count === 0) {
                    return;
                }
                var input = System.Linq.Enumerable.from(this.Controls).firstOrDefault(null, null).Input;
                var x = input.GetInput();

                if (x != null) {
                    ExpressCraft.Helper.FocusElement(x);
                } else {
                    ExpressCraft.Helper.FocusElement(input.Content);
                }
            },
            CreateLoadSQL: function () {
                var builderSQL = new System.Text.StringBuilder();

                var length = this.Controls.Count;
                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (this.Controls.getItem(i) == null || this.Controls.getItem(i).Input == null || System.String.isNullOrWhiteSpace(this.Controls.getItem(i).LinkFieldName)) {
                        continue;
                    }
                    builderSQL.append("`" + (this.Controls.getItem(i).LinkFieldName || "") + "`, ");

                    var control = this.Controls.getItem(i);

                    if (Bridge.is(control.Input, ExpressCraft.SearchInput)) {
                        var search = control.Input;

                        var editValue = (System.String.concat(search.EditValue, ""));
                        if (Bridge.referenceEquals(search.DisplayMember, search.ValueMember) || search.ValueMember == null) {
                        } else {

                        }

                        continue;
                    } else if (control.Input.Controller != null) {
                        if (Bridge.is(control.Input.Controller, ExpressCraft.CheckEdit)) {

                            continue;
                        }
                    }

                    if (control.Input.IsNumericType()) {

                    } else if (control.Input.IsDateType()) {

                    } else {
                    }
                }

                return builderSQL.toString();
            },
            ApplyReadOnly: function (documentreadonly) {
                var length = this.ControlEditable.Count;
                for (var i = 0; i < length; i = (i + 1) | 0) {
                    this.ApplyReadOnlyOnControl(documentreadonly, this.ControlEditable.getItem(i).Input);
                }
            },
            ApplyReadOnlyOnControl: function (documentreadonly, input) {
                if (input.Controller != null) {
                    if (Bridge.is(input.Controller, ExpressCraft.CheckEdit)) {
                        input.Enabled = !documentreadonly;
                    }
                } else {
                    if (Bridge.is(input, ExpressCraft.TextInputDropDown)) {
                        input.GetInput().readOnly = documentreadonly;
                    }
                    input.Readonly = documentreadonly;
                }
            },
            OnControlCreated: function (Control) { },
            Apply: function (parent, documentreadonly) {
                var $t, $t1, $t2, $t3;
                if (documentreadonly === void 0) { documentreadonly = false; }
                if (parent == null) {
                    throw new System.ArgumentNullException.ctor();
                }

                if (this.appliedLayout) {
                    return;
                }
                this.appliedLayout = true;

                var leftMargin = 10;
                var topMargin = 5;

                var leftLabel = 15;

                var currentLeft = leftMargin;
                var AppendX = 0;
                var AppendY = 0;

                var EditStartX = 125;

                if (ExpressCraft.Helper.NotDesktop) {
                    EditStartX = 15;
                }

                var XIncrement = (leftMargin + this.ColumnWidth) | 0;

                var inputHeight;
                if (ExpressCraft.Helper.NotDesktop) {
                    this.ButtinWidth = 0;
                    inputHeight = 45;
                } else {
                    inputHeight = 20;
                }
                var GroupLabelIncrement = (this.ControlMargin + (ExpressCraft.Helper.NotDesktop ? (((inputHeight - 30) | 0)) : (((inputHeight - 4) | 0)))) | 0;
                var RowIncrement = (inputHeight + this.ControlMargin) | 0;

                var TinyLabelIncrement = (inputHeight - 8) | 0;

                $t = Bridge.getEnumerator(this.Columns);
                try {
                    while ($t.moveNext()) {
                        var column = $t.Current;
                        var autoDiv = new ExpressCraft.Control.$ctor1();
                        var y = topMargin;
                        if (ExpressCraft.Helper.NotDesktop) {
                            autoDiv.Width = "(100% - 12px)";
                            autoDiv.Top = AppendY;
                        } else {
                            autoDiv.Top = y;
                            autoDiv.Width = this.ColumnWidth;
                        }
                        autoDiv.Left = AppendX;

                        var docFragment = document.createDocumentFragment();

                        var groups = column.Groups;

                        $t1 = Bridge.getEnumerator(groups);
                        try {
                            while ($t1.moveNext()) {
                                var group = $t1.Current;
                                if (!System.String.isNullOrWhiteSpace(group.GroupLabel)) {
                                    var label = ExpressCraft.Control.Label$2(group.GroupLabel, currentLeft, y, true);
                                    if (ExpressCraft.Helper.NotDesktop) {
                                        label.style.fontSize = "14px";
                                    }
                                    docFragment.appendChild(label);
                                    y += GroupLabelIncrement;
                                }
                                var rows = group.Rows;

                                $t2 = Bridge.getEnumerator(rows);
                                try {
                                    while ($t2.moveNext()) {
                                        var row = $t2.Current;
                                        if (Bridge.is(row, ExpressCraft.LayoutRowControl)) {
                                            var height = row.Height;

                                            var control = row.Control;

                                            if (control != null) {
                                                control.Height = height;
                                                control.Left = (currentLeft + leftLabel) | 0;
                                                control.Top = y;

                                                if (ExpressCraft.Helper.NotDesktop) {
                                                    control.Width = "(100% - " + System.Single.format((currentLeft + (leftLabel * 2.0))) + "px)";
                                                } else {
                                                    control.Width = (((this.ColumnWidth - currentLeft) | 0) - (leftLabel)) | 0;
                                                }

                                                docFragment.appendChild(ExpressCraft.Control.op_Implicit(control));

                                                y += this.ControlMargin;
                                            }

                                            y += height;

                                            continue;
                                        }

                                        if (!System.String.isNullOrWhiteSpace(row.Label)) {
                                            var label1 = ExpressCraft.Control.Label$2(row.Label, ((currentLeft + leftLabel) | 0) + System.Decimal.toFloat(row.Offset), y, row.Bold);
                                            if (ExpressCraft.Helper.NotDesktop) {
                                                label1.style.fontSize = "12px";
                                                y += (GroupLabelIncrement - 5) | 0;
                                            }
                                            docFragment.appendChild(label1);
                                        }

                                        if (Bridge.is(row, ExpressCraft.LayoutRowGap)) {
                                            y += row.Height;
                                            continue;
                                        }

                                        if (row.Button != null && !ExpressCraft.Helper.NotDesktop) {
                                            row.Button.Location = new ExpressCraft.Vector2.$ctor1(((((this.ColumnWidth - this.ButtinWidth) | 0) + 6) | 0), y);
                                            row.Button.Width = this.ButtinWidth;
                                            docFragment.appendChild(ExpressCraft.Control.op_Implicit(row.Button));
                                        }

                                        var controls = row.Controls;
                                        var HasTinyLabel = false;

                                        if (controls.Count > 0) {
                                            var TotalPercent = System.Decimal(0);

                                            TotalPercent = System.Decimal(0);
                                            var AddWidth = 0;
                                            $t3 = Bridge.getEnumerator(controls);
                                            try {
                                                while ($t3.moveNext()) {
                                                    var control1 = $t3.Current;
                                                    if (control1.Percent.gt(System.Decimal(1.0)) || control1.Percent.lte(System.Decimal(0.0))) {
                                                        control1.Percent = System.Decimal(1.0);
                                                    }

                                                    TotalPercent = TotalPercent.add(control1.Percent);

                                                    if (TotalPercent.gt(System.Decimal(1.0))) {
                                                        if (Bridge.is(control1.Input, ExpressCraft.MemoInput)) {
                                                            y += (ExpressCraft.Helper.ToInt(control1.Input.Height) + this.ControlMargin) | 0;
                                                        } else {
                                                            y += RowIncrement;
                                                        }

                                                        if (row.NoGap) {
                                                            y -= (this.ControlMargin + 1) | 0;
                                                        }

                                                        if (HasTinyLabel) {
                                                            y += TinyLabelIncrement;
                                                            HasTinyLabel = false;
                                                        }

                                                        TotalPercent = TotalPercent.sub(System.Decimal(1.0));
                                                        AddWidth = 0;
                                                    }
                                                    var Add = (((((((currentLeft + AddWidth) | 0) + EditStartX) | 0) + this.ButtinWidth) | 0) + System.Decimal.toFloat(row.Offset));
                                                    var o100Percent = "((100% - " + (ExpressCraft.Helper.ToPx(Bridge.box(Add, System.Single, System.Single.format, System.Single.getHashCode)) || "") + ") * " + (TotalPercent.sub(control1.Percent)) + ")";
                                                    var o100Percent2 = "(100% - " + (ExpressCraft.Helper.ToPx(Bridge.box(Add, System.Single, System.Single.format, System.Single.getHashCode)) || "") + ")";

                                                    var width = "(" + (o100Percent2 || "") + " * " + control1.Percent + ")";
                                                    var loc = new ExpressCraft.Vector2.$ctor1("(" + (o100Percent || "") + " + " + (ExpressCraft.Helper.ToPx(Bridge.box((Add - this.ButtinWidth), System.Single, System.Single.format, System.Single.getHashCode)) || "") + ")", y);
                                                    if (!row.NoGap) {
                                                        AddWidth = (AddWidth + 6) | 0;
                                                    }

                                                    if (control1.Input.Controller != null) {
                                                        control1.Input.Controller.Width = width;
                                                        control1.Input.Controller.Location = loc.$clone();
                                                        control1.Input.Content.tabIndex = ExpressCraft.LayoutContainer.TabIndex;
                                                        control1.Input.ClassList.remove("control");
                                                        if (Bridge.is(control1.Input.Controller, ExpressCraft.CheckEdit)) {
                                                            var span = control1.Input.Controller.span;
                                                            span.style.top = "0";
                                                            span.style.left = ExpressCraft.Helper.ToPx(Bridge.box((((inputHeight - 2) | 0)), System.Int32));

                                                            span.style.position = "absolute";

                                                            span.style.whiteSpace = "pre";
                                                            if (ExpressCraft.Helper.NotDesktop) {
                                                                span.style.fontSize = "14px";
                                                                span.style.whiteSpace = "normal";
                                                            }

                                                            if (Bridge.referenceEquals(control1.Input.Content.type, "checkbox")) {
                                                                control1.Input.Width = ExpressCraft.Helper.ToPx(Bridge.box((((inputHeight - 4) | 0)), System.Int32));
                                                                control1.Input.Height = ExpressCraft.Helper.ToPx(Bridge.box((((inputHeight - 4) | 0)), System.Int32));
                                                            }
                                                        }

                                                        docFragment.appendChild(ExpressCraft.Control.op_Implicit(control1.Input.Controller));
                                                    } else {
                                                        control1.Input.Width = width;
                                                        control1.Input.Location = loc.$clone();
                                                        control1.Input.GetInput().tabIndex = ExpressCraft.LayoutContainer.TabIndex;

                                                        docFragment.appendChild(ExpressCraft.Control.op_Implicit(control1.Input));
                                                    }
                                                    if (ExpressCraft.Helper.NotDesktop) {
                                                        control1.Input.Height = inputHeight;
                                                        control1.Input.Style.fontSize = "14px";

                                                        if (control1.Input.GetInput() != null) {
                                                            control1.Input.GetInput().style.fontSize = "14px";
                                                        }
                                                    }

                                                    this.OnControlCreated(control1);

                                                    if (!row.NoGap && !row.HideTinyLabel && !System.String.isNullOrWhiteSpace(control1.TinyLabel)) {
                                                        var label2 = ExpressCraft.Control.Label$2(control1.TinyLabel, 0, y + (((inputHeight + 3) | 0)), false, true);
                                                        label2.style.left = "calc(" + (o100Percent || "") + " + " + (ExpressCraft.Helper.ToPx(Bridge.box((Add - this.ButtinWidth), System.Single, System.Single.format, System.Single.getHashCode)) || "") + ")";
                                                        docFragment.appendChild(label2);
                                                        if (ExpressCraft.Helper.NotDesktop) {
                                                            label2.style.fontSize = "12px";
                                                        }
                                                        HasTinyLabel = true;
                                                    }

                                                    if (row.UsePlaceholder && !System.String.isNullOrWhiteSpace(control1.TinyLabel)) {
                                                        control1.Input.SetAttribute("placeholder", control1.TinyLabel);
                                                        if (control1.Input.ToolTip == null) {
                                                            if (System.String.isNullOrWhiteSpace(row.Label) && System.String.isNullOrWhiteSpace(group.GroupLabel)) {
                                                                control1.Input.ToolTip = new ExpressCraft.ToolTip.ctor(control1.TinyLabel);
                                                            } else {
                                                                control1.Input.ToolTip = new ExpressCraft.ToolTip.$ctor1(System.String.isNullOrWhiteSpace(row.Label) ? group.GroupLabel : row.Label, control1.TinyLabel);
                                                            }
                                                        }
                                                    }

                                                    ExpressCraft.LayoutContainer.TabIndex = (ExpressCraft.LayoutContainer.TabIndex + 1) | 0;

                                                    if (!control1.Input.Readonly) {
                                                        this.ApplyReadOnlyOnControl(documentreadonly, control1.Input);
                                                        this.ControlEditable.add(control1);
                                                    }
                                                    this.Controls.add(control1);
                                                }
                                            } finally {
                                                if (Bridge.is($t3, System.IDisposable)) {
                                                    $t3.System$IDisposable$Dispose();
                                                }
                                            }

                                            if (HasTinyLabel) {
                                                y += TinyLabelIncrement;
                                            }
                                            var last = System.Linq.Enumerable.from(row.Controls).lastOrDefault(null, null);
                                            if (last != null && Bridge.is(last.Input, ExpressCraft.MemoInput)) {
                                                y += (ExpressCraft.Helper.ToInt(last.Input.Height) + this.ControlMargin) | 0;
                                            } else {
                                                y += RowIncrement;
                                            }
                                        }
                                    }
                                } finally {
                                    if (Bridge.is($t2, System.IDisposable)) {
                                        $t2.System$IDisposable$Dispose();
                                    }
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }

                        autoDiv.Height = y;
                        if (!ExpressCraft.Helper.NotDesktop) {
                            AppendX = (AppendX + XIncrement) | 0;
                        } else {
                            AppendY = (AppendY + Bridge.Int.clip32(y)) | 0;
                        }
                        ExpressCraft.Helper.AppendChild$2(autoDiv.Content, docFragment);
                        ExpressCraft.Helper.AppendChild$1(parent.Content, autoDiv);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var LastControl = System.Linq.Enumerable.from(this.Controls).lastOrDefault(null, null);
                if (LastControl != null) {
                    var FirstControl = System.Linq.Enumerable.from(this.Controls).firstOrDefault(null, null);

                    var PreventDefaultMoveForward = function (ev) {
                        if (ev.keyCode === 9 && !ev.shiftKey) {
                            ev.preventDefault();
                            var x = FirstControl.Input.GetInput();
                            if (x != null) {
                                ExpressCraft.Helper.FocusElement(x);
                            } else {
                                ExpressCraft.Helper.FocusElement(LastControl.Input.Content);
                            }
                        }
                    };

                    var PreventDefaultMoveBack = function (ev) {
                        if (ev.keyCode === 9 && ev.shiftKey) {
                            ev.preventDefault();
                            var x = LastControl.Input.GetInput();
                            if (x != null) {
                                ExpressCraft.Helper.FocusElement(x);
                            } else {
                                ExpressCraft.Helper.FocusElement(LastControl.Input.Content);
                            }
                        }
                    };

                    LastControl.Input.Content.onkeydown = PreventDefaultMoveForward;
                    FirstControl.Input.Content.onkeydown = PreventDefaultMoveBack;
                }
            }
        }
    });

    Bridge.define("ExpressCraft.LayoutControl", {
        fields: {
            LinkFieldName: null,
            Input: null,
            TinyLabel: null,
            Percent: System.Decimal(0.0),
            /**
             * Calculated
             *
             * @instance
             * @public
             * @memberof ExpressCraft.LayoutControl
             * @function Width
             * @type string
             */
            Width: null,
            /**
             * Calculated
             *
             * @instance
             * @public
             * @memberof ExpressCraft.LayoutControl
             * @function LineNumber
             * @type System.Decimal
             */
            LineNumber: System.Decimal(0.0)
        },
        ctors: {
            $ctor2: function (linkFieldName, input, tinyLabel, percent) {
                if (tinyLabel === void 0) { tinyLabel = ""; }
                if (percent === void 0) { percent = System.Decimal(1.0); }

                this.$initialize();
                this.LinkFieldName = linkFieldName;
                this.Input = input;
                this.TinyLabel = tinyLabel;
                this.Percent = percent;
            },
            $ctor1: function (linkFieldName, input, percent) {
                if (percent === void 0) { percent = System.Decimal(1.0); }

                ExpressCraft.LayoutControl.$ctor2.call(this, linkFieldName, input, "", percent);
            },
            ctor: function (linkFieldName, input) {
                ExpressCraft.LayoutControl.$ctor2.call(this, linkFieldName, input, "");
            }
        }
    });

    Bridge.define("ExpressCraft.LayoutGroup", {
        fields: {
            Rows: null,
            GroupLabel: null
        },
        ctors: {
            init: function () {
                this.Rows = new (System.Collections.Generic.List$1(ExpressCraft.LayoutRow)).ctor();
            },
            ctor: function (rows) {
                if (rows === void 0) { rows = []; }
                var $t;

                this.$initialize();
                this.GroupLabel = "";
                if (rows != null && rows.length > 0) {
                    $t = Bridge.getEnumerator(rows);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.Rows.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            $ctor1: function (groupLabel, rows) {
                if (rows === void 0) { rows = []; }
                var $t;

                this.$initialize();
                this.GroupLabel = groupLabel;
                if (rows != null && rows.length > 0) {
                    $t = Bridge.getEnumerator(rows);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.Rows.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            }
        }
    });

    Bridge.define("ExpressCraft.LayoutRow", {
        fields: {
            Controls: null,
            Label: null,
            Button: null,
            /**
             * If this is true - tiny labels are ignored
             *
             * @instance
             * @public
             * @memberof ExpressCraft.LayoutRow
             * @function NoGap
             * @type boolean
             */
            NoGap: false,
            UsePlaceholder: false,
            HideTinyLabel: false,
            Offset: System.Decimal(0.0),
            Bold: false
        },
        ctors: {
            init: function () {
                this.Controls = new (System.Collections.Generic.List$1(ExpressCraft.LayoutControl)).ctor();
                this.NoGap = false;
                this.UsePlaceholder = false;
                this.HideTinyLabel = false;
                this.Offset = System.Decimal(0);
                this.Bold = false;
            },
            $ctor2: function (label, controls) {
                if (controls === void 0) { controls = []; }
                var $t;

                this.$initialize();
                this.Label = label;
                if (controls != null && controls.length > 0) {
                    $t = Bridge.getEnumerator(controls);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.Controls.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            ctor: function (controls) {
                if (controls === void 0) { controls = []; }

                ExpressCraft.LayoutRow.$ctor2.call(this, "", controls);
            },
            $ctor1: function (offset, controls) {
                if (controls === void 0) { controls = []; }

                ExpressCraft.LayoutRow.$ctor2.call(this, "", controls);
                this.Offset = offset;
            },
            $ctor3: function (label, button, controls) {
                if (controls === void 0) { controls = []; }

                ExpressCraft.LayoutRow.$ctor2.call(this, label, controls);
                this.Button = button;
            }
        }
    });

    Bridge.define("ExpressCraft.MessageBoxButtons", {
        $kind: "enum",
        statics: {
            fields: {
                Auto: 0,
                Ok: 1,
                YesNo: 2,
                YesNoCancel: 3,
                AbortSendCancel: 4
            }
        }
    });

    Bridge.define("ExpressCraft.MessageBoxLayout", {
        $kind: "enum",
        statics: {
            fields: {
                Information: 0,
                Exclamation: 1,
                Question: 2,
                Error: 3
            }
        }
    });

    Bridge.define("ExpressCraft.MouseMoveAction", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Move: 1,
                TopLeftResize: 2,
                LeftResize: 3,
                BottomLeftResize: 4,
                BottomResize: 5,
                BottomRightResize: 6,
                RightResize: 7,
                TopResize: 8,
                TopRightResize: 9
            }
        }
    });

    Bridge.define("ExpressCraft.Network", {
        statics: {
            methods: {
                GetAjaxOptions: function (JsonFile, Async) {
                    if (Async === void 0) { Async = true; }
                    return { async: Async, url: ExpressCraft.Settings.NetworkURL, cache: false, data: JsonFile == null ? "" : JSON.stringify(Bridge.unbox(JsonFile)), dataType: "json", contentType: "application/json", type: "POST" };
                },
                InvokeMethodUI: function (interfaceName, method, Success, Error, $arguments) {
                    if (Success === void 0) { Success = null; }
                    if (Error === void 0) { Error = null; }
                    if ($arguments === void 0) { $arguments = []; }

                },
                InvokeMethodUIControl: function (interfaceName, method, progressControl, Success, Error, $arguments) {
                    if (Success === void 0) { Success = null; }
                    if (Error === void 0) { Error = null; }
                    if ($arguments === void 0) { $arguments = []; }

                },
                InvokeMethod: function (interfaceName, method, Success, Error, $arguments) {
                    if (Success === void 0) { Success = null; }
                    if (Error === void 0) { Error = null; }
                    if ($arguments === void 0) { $arguments = []; }
                    ExpressCraft.Network.PostJson(new ExpressCraft.Network.MethodRequest(interfaceName, method, $arguments), Success, Error);
                },
                PostJson: function (JsonFile, Success, Error, Async) {
                    if (Success === void 0) { Success = null; }
                    if (Error === void 0) { Error = null; }
                    if (Async === void 0) { Async = true; }

                },
                PostJsonProgressControl: function (JsonFile, progressControl, Success, Error, Async) {
                    if (Success === void 0) { Success = null; }
                    if (Error === void 0) { Error = null; }
                    if (Async === void 0) { Async = true; }

                },
                PostJsonProgressForm: function (JsonFile, Success, Error, Async) {
                    if (Success === void 0) { Success = null; }
                    if (Error === void 0) { Error = null; }
                    if (Async === void 0) { Async = true; }

                }
            }
        }
    });

    Bridge.define("ExpressCraft.Network.MethodRequest", {
        $kind: "nested class",
        fields: {
            Method: null,
            Arguments: null,
            Interface: null
        },
        ctors: {
            ctor: function (interfaceName, method, $arguments) {
                if ($arguments === void 0) { $arguments = []; }

                this.$initialize();
                this.Method = method;
                this.Arguments = $arguments;
                this.Interface = interfaceName;
            }
        }
    });

    Bridge.define("ExpressCraft.PageSize", {
        $kind: "enum",
        statics: {
            fields: {
                A4: 0,
                A5: 1
            }
        }
    });

    Bridge.define("ExpressCraft.PdfSourceType", {
        $kind: "enum",
        statics: {
            fields: {
                Url: 0,
                Base64: 1
            }
        }
    });

    Bridge.define("ExpressCraft.Pen", {
        inherits: [System.IDisposable],
        fields: {
            Brush: null,
            Width: 0,
            DashStyle: 0
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            $ctor2: function (color) {
                ExpressCraft.Pen.$ctor3.call(this, color, 1);

            },
            $ctor3: function (color, width) {
                this.$initialize();
                this.Width = width;
                this.Brush = new ExpressCraft.SolidBrush(color.$clone());
            },
            $ctor1: function (brush, width) {
                this.$initialize();
                this.Width = width;
                this.Brush = brush;
            },
            ctor: function (brush) {
                ExpressCraft.Pen.$ctor1.call(this, brush, 1);

            }
        },
        methods: {
            Dispose: function () {

            }
        }
    });

    Bridge.define("ExpressCraft.Point", {
        fields: {
            X: 0,
            Y: 0
        }
    });

    Bridge.define("ExpressCraft.PointF", {
        fields: {
            X: 0,
            Y: 0
        }
    });

    Bridge.define("ExpressCraft.Rectangle", {
        fields: {
            X: 0,
            Y: 0,
            Width: 0,
            Height: 0
        }
    });

    Bridge.define("ExpressCraft.RectangleF", {
        fields: {
            X: 0,
            Y: 0,
            Width: 0,
            Height: 0
        }
    });

    Bridge.define("ExpressCraft.ResourceManager", {
        statics: {
            fields: {
                cacheResourceString: null
            },
            ctors: {
                init: function () {
                    this.cacheResourceString = new (System.Collections.Generic.Dictionary$2(System.String,System.String))();
                }
            },
            methods: {
                GetResourceString: function (name) {
                    var $t;
                    if (ExpressCraft.ResourceManager.cacheResourceString.containsKey(name)) {
                        return ExpressCraft.ResourceManager.cacheResourceString.get(name);
                    }
                    return (($t = ExpressCraft.Settings.GetStyleRuleValue$1(ExpressCraft.Settings.resourceManangerSheets, "content", "." + (name || "")), ExpressCraft.ResourceManager.cacheResourceString.set(name, $t), $t));
                }
            }
        }
    });

    Bridge.define("ExpressCraft.RibbonControl.RibbonType", {
        $kind: "nested enum",
        statics: {
            fields: {
                Full: 0,
                Compact: 1
            }
        }
    });

    Bridge.define("ExpressCraft.RibbonGroup.RenderInfo", {
        $kind: "nested class",
        fields: {
            Left: 0,
            Width: 0,
            IsSmall: false,
            FirstItem: null,
            SecondItem: null,
            ThirdItem: null,
            BeginGroup: false
        },
        ctors: {
            init: function () {
                this.IsSmall = false;
                this.BeginGroup = false;
            }
        }
    });

    Bridge.define("ExpressCraft.Settings", {
        statics: {
            fields: {
                NetworkURL: null,
                ResourceURL: null,
                AutoRender: false,
                Font: null,
                TaxPercent: System.Decimal(0.0),
                AlignFormToGrid: false,
                AlignmentForForm: 0,
                DefaultFont: null,
                /**
                 * Only for firefox - as no error with number input
                 *
                 * @static
                 * @public
                 * @memberof ExpressCraft.Settings
                 * @default true
                 * @type boolean
                 */
                OnFocusSelectAll: false,
                DefaultStyleSheet: null,
                PluginStyleSheet: null,
                resourceManangerSheets: null,
                GridViewAutoColumnGenerateFormatAsDate: false,
                GridViewAutoColumnFormatDates: false,
                GridViewBlurOnScroll: false,
                GridViewRowScrollPadding: 0,
                GridViewScrollDelayed: false,
                GridViewScrollDelayMS: 0,
                ContextMenuStartingZIndex: 0,
                ContextMenuMinWidth: 0,
                MessageFormTextMaximumHeightInPx: 0,
                MessageFormTextMinimumHeightInPx: 0,
                MessageFormMinimumWidthInPx: 0,
                DayPosition: 0,
                MonthPosition: 0,
                YearPosition: 0,
                DisableTextPopupEditor: false,
                ExpressCraftCssBase64: null,
                DateSeperator: 0,
                ConsoleDefaultSize: null,
                MessageFormBeep: false,
                MaximumPixelScrollingRows: 0,
                OnSendError: null,
                IsChrome: false,
                AllowCloseWithoutQuestion: false,
                OnApplicationClose: null,
                ShowExceptionDialog: false,
                FormFadeDuration: 0,
                _dpi: 0,
                _dpiSetup: false,
                /**
                 * Increase Render Speed
                 *
                 * @static
                 * @public
                 * @memberof ExpressCraft.Settings
                 * @type boolean
                 */
                RemoveAttributesOffElementsWhenLoseFocus: false,
                ToolTipPopupDelayMs: 0,
                ToolTipPopupStayOpenDelayPerWordMs: 0
            },
            ctors: {
                init: function () {
                    this.ConsoleDefaultSize = new ExpressCraft.Vector2();
                    this.NetworkURL = "Host.ashx";
                    this.ResourceURL = "./images/";
                    this.AutoRender = true;
                    this.Font = "8.25pt \"Tahoma\"";
                    this.TaxPercent = System.Decimal(0.1);
                    this.AlignFormToGrid = false;
                    this.AlignmentForForm = 0;
                    this.DefaultFont = "8.25pt \"Tahoma\"";
                    this.OnFocusSelectAll = true;
                    this.resourceManangerSheets = new (System.Collections.Generic.List$1(StyleSheet)).ctor();
                    this.GridViewAutoColumnGenerateFormatAsDate = false;
                    this.GridViewAutoColumnFormatDates = true;
                    this.GridViewBlurOnScroll = false;
                    this.GridViewRowScrollPadding = 0;
                    this.GridViewScrollDelayed = false;
                    this.GridViewScrollDelayMS = 25;
                    this.ContextMenuStartingZIndex = 500;
                    this.ContextMenuMinWidth = 200;
                    this.MessageFormTextMaximumHeightInPx = 500;
                    this.MessageFormTextMinimumHeightInPx = 32;
                    this.MessageFormMinimumWidthInPx = 195;
                    this.DayPosition = ExpressCraft.Settings.DatePosition.First;
                    this.MonthPosition = ExpressCraft.Settings.DatePosition.Second;
                    this.YearPosition = ExpressCraft.Settings.DatePosition.Third;
                    this.DisableTextPopupEditor = false;
                    this.ExpressCraftCssBase64 = "LmNvbnRyb2wsLmRpc2FibGVkOm5vdCgucmliYm9uYnV0dG9uKXstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lfS5pbnB1dGNvbnRyb2wsLnNpbXBsZWJ1dHRvbntib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfS5mb3JtLWhlYWRpbmcsLmZvcm0taGVhZGluZy1idXR0b24sLmZvcm0taGVhZGluZy1idXR0b24tY2xvc2UsLmZvcm0taGVhZGluZy1taW57dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4yNXMgZWFzZX0uY29udHJvbHtjb2xvcjojNDA0MDQwO3Bvc2l0aW9uOmFic29sdXRlO3VzZXItc2VsZWN0Om5vbmU7Zm9udDo4LjI1cHQgVGFob21hfS5zZWxlY3Rpb257LW1vei11c2VyLXNlbGVjdDp0ZXh0Oy1tcy11c2VyLXNlbGVjdDp0ZXh0Oy13ZWJraXQtdXNlci1zZWxlY3Q6dGV4dDt1c2VyLXNlbGVjdDp0ZXh0fS5jb250cm9sOmZvY3VzOm5vdCguZ3JpZCl7Ym9yZGVyOjFweCBzb2xpZCAjMDA3YWNjO2JveC1zaGFkb3c6MCAwIDEwcHggLTJweCByZ2JhKDAsMCwwLC4yNSl9LnJpYmJvbmNvbnRyb2wsLnRhYmNvbnRyb2xwYWdle2JvcmRlci1ib3R0b20tY29sb3I6I0M1QzVDNTtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20td2lkdGg6dGhpbjtib3JkZXItbGVmdC1zdHlsZTpzb2xpZDtib3JkZXItbGVmdC13aWR0aDp0aGluO2JvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtib3JkZXItcmlnaHQtd2lkdGg6dGhpbn0uZGlzYWJsZWQ6bm90KC5yaWJib25idXR0b24pe2N1cnNvcjpub3QtYWxsb3dlZDtmaWx0ZXI6YnJpZ2h0bmVzcyg5MCUpIGdyYXlzY2FsZSgxMDAlKSBjb250cmFzdCg2MCUpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoNjAlKTt1c2VyLXNlbGVjdDpub25lfS5jb250cm9sOmRpc2FibGVkey1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjojQ0NDO2N1cnNvcjpub3QtYWxsb3dlZDt1c2VyLXNlbGVjdDpub25lfS5pbnB1dGNvbnRyb2w6cmVhZC1vbmx5ey1tb3otdXNlci1zZWxlY3Q6dGV4dDstbXMtdXNlci1zZWxlY3Q6dGV4dDstd2Via2l0LXVzZXItc2VsZWN0OnRleHQ7YmFja2dyb3VuZC1jb2xvcjojRjBGMEYwO3VzZXItc2VsZWN0OnRleHR9LnN5c3RlbS1mb3JtLWNvbGxlY3Rpb24tb3ZlcmxheXtoZWlnaHQ6MTAwJTtvcGFjaXR5Oi41O3dpZHRoOjEwMCV9LmJsdXJ7ZmlsdGVyOmJsdXIoNnB4KX0uYXBwbGljYXRpb24taWNvbntiYWNrZ3JvdW5kLWNvbG9yOiNGMEYwRjA7Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjQ4cHg7bGVmdDo0cHg7dG9wOjRweDt3aWR0aDo0OHB4O3otaW5kZXg6MTAwMDB9LmFwcGxpY2F0aW9uLWljb246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5hcHBsaWNhdGlvbi1pY29uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNDQ0UzRjR9LmZhdi1pY29ue2hlaWdodDozMnB4O2xlZnQ6OHB4O3RvcDo4cHg7d2lkdGg6MzJweDt6LWluZGV4OjEwMDAwfS5yaWJib25jb250cm9se2hlaWdodDoxNTRweDtsZWZ0OjA7dG9wOjA7d2lkdGg6Y2FsYygxMDAlIC0gMnB4KX0ucmliYm9uY29udHJvbC1jb21wYWN0e2hlaWdodDoxMjhweCFpbXBvcnRhbnR9LnJpYmJvbnBhZ2V7aGVpZ2h0OjEwMHB4O2xlZnQ6MDtvdmVyZmxvdy14OmF1dG87b3ZlcmZsb3cteTpoaWRkZW47dG9wOjU0cHg7d2lkdGg6MTAwJX0ucmliYm9ucGFnZS1jb21wYWN0e3RvcDoyOHB4IWltcG9ydGFudH0ucmliYm9uZ3JvdXB7aGVpZ2h0OjEwMCU7bGVmdDowfS5yaWJib25idXR0b257Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjY4cHg7dG9wOjNweH0ucmliYm9uYnV0dG9uY2FwdGlvbntib3R0b206MDtsZWZ0OjA7dGV4dC1hbGlnbjpjZW50ZXI7dG9wOjQxcHg7d2lkdGg6MTAwJX0ucmliYm9uYnV0dG9uaWNvbntoZWlnaHQ6MzJweDtsZWZ0OmNhbGMoNTAlIC0gMTZweCk7dG9wOjNweDt3aWR0aDozMnB4fS5yaWJib25idXR0b25zbWFsbHtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6MjJweH0ucmliYm9uYnV0dG9uc21hbGxjYXB0aW9ue2JvdHRvbTowO2hlaWdodDpjYWxjKDEwMCUgLSA2cHgpO2xpbmUtaGVpZ2h0OjE5cHg7dGV4dC1hbGlnbjpsZWZ0O3RvcDowfS5yaWJib25idXR0b25zbWFsbGljb257aGVpZ2h0OjE2cHg7bGVmdDo2cHg7dG9wOjNweDt3aWR0aDoxNnB4fS5yaWJib25zZXBlcmF0b3J7YmFja2dyb3VuZC1jb2xvcjojQzVDNUM1O2hlaWdodDo1OHB4O3RvcDo4cHg7d2lkdGg6MXB4fS5yaWJib25ncm91cGNhcHRpb257Ym90dG9tOjA7bGVmdDowO3RleHQtYWxpZ246Y2VudGVyO3RvcDo3N3B4O3dpZHRoOjEwMCV9LnJpYmJvbnBhZ2VoZWFkZXJ7aGVpZ2h0OjIzcHg7bGluZS1oZWlnaHQ6MjJweDt0ZXh0LWFsaWduOmNlbnRlcjt0b3A6MjlweH0ucmliYm9ucGFnZWhlYWRlci1jb21wYWN0e3RvcDo1cHghaW1wb3J0YW50fS50YWJjb250cm9scGFnZXtib3JkZXItbGVmdC1jb2xvcjojQzVDNUM1O2JvcmRlci1yaWdodC1jb2xvcjojQzVDNUM1O2hlaWdodDpjYWxjKDEwMCUgLSAyNnB4KTtsZWZ0OjA7b3ZlcmZsb3c6YXV0bzt0b3A6MjVweDt3aWR0aDpjYWxjKDEwMCUgLSAycHgpfS50YWJjb250cm9scGFnZWhlYWRlcntoZWlnaHQ6MjFweDtsaW5lLWhlaWdodDoyMnB4O3RleHQtYWxpZ246Y2VudGVyO3RvcDowfS50YWJjb250cm9scGFnZWhlYWRlci1oaWRkZW57Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDp0aGluO2N1cnNvcjpwb2ludGVyfS50YWJjb250cm9scGFnZWhlYWRlci1jbG9zZWJ1dHRvbntib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2NvbG9yOiNDNUM1QzU7aGVpZ2h0OjEycHg7bGluZS1oZWlnaHQ6MTJweDtyaWdodDozcHg7dG9wOjRweDt3aWR0aDoxMnB4fS50YWJjb250cm9scGFnZWhlYWRlci1jbG9zZWJ1dHRvbjphZnRlcntjb250ZW50OidYJ30uaW5wdXRjb250cm9sey1tb3otdXNlci1zZWxlY3Q6dGV4dDstbXMtdXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0OnRleHQ7Ym9yZGVyOjFweCBzb2xpZCAjQzVDNUM1O2hlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjE4cHg7bWFyZ2luOjA7dGV4dC1pbmRlbnQ6M3B4O3VzZXItc2VsZWN0OnRleHR9LmRyb3Bkb3due2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBRkNBWUFBQUNYVThackFBQUFDWEJJV1hNQUFBN0RBQUFPd3dISGI2aGtBQUFLVDJsRFExQlFhRzkwYjNOb2IzQWdTVU5ESUhCeWIyWnBiR1VBQUhqYW5WTm5WRlBwRmozMzN2UkNTNGlBbEV0dlVoVUlJRkpDaTRBVWtTWXFJUWtRU29naG9ka1ZVY0VSUlVVRUc4aWdpQU9Pam9DTUZWRXNESW9LMkFma0lhS09nNk9JaXNyNzRYdWphOWE4OStiTi9yWFhQdWVzODUyenp3ZkFDQXlXU0ROUk5ZQU1xVUllRWVDRHg4VEc0ZVF1UUlFS0pIQUFFQWl6WkNGei9TTUJBUGgrUER3cklzQUh2Z0FCZU5NTENBREFUWnZBTUJ5SC93L3FRcGxjQVlDRUFjQjBrVGhMQ0lBVUFFQjZqa0ttQUVCR0FZQ2RtQ1pUQUtBRUFHRExZMkxqQUZBdEFHQW5mK2JUQUlDZCtKbDdBUUJibENFVkFhQ1JBQ0FUWlloRUFHZzdBS3pQVm9wRkFGZ3dBQlJtUzhRNUFOZ3RBREJKVjJaSUFMQzNBTURPRUF1eUFBZ01BREJSaUlVcEFBUjdBR0RJSXlONEFJU1pBQlJHOGxjODhTdXVFT2NxQUFCNG1iSTh1U1E1UllGYkNDMXhCMWRYTGg0b3pra1hLeFEyWVFKaG1rQXV3bm1aR1RLQk5BL2c4OHdBQUtDUkZSSGdnL1A5ZU00T3JzN09ObzYyRGw4dDZyOEcveUppWXVQKzVjK3JjRUFBQU9GMGZ0SCtMQyt6R29BN0JvQnQvcUlsN2dSb1hndWdkZmVMWnJJUFFMVUFvT25hVi9OdytINDhQRVdoa0xuWjJlWGs1TmhLeEVKYlljcFhmZjVud2wvQVYvMXMrWDQ4L1BmMTRMN2lKSUV5WFlGSEJQamd3c3owVEtVY3o1SUpoR0xjNW85SC9MY0wvL3dkMHlMRVNXSzVXQ29VNDFFU2NZNUVtb3p6TXFVaWlVS1NLY1VsMHY5azR0OHMrd00rM3pVQXNHbytBWHVSTGFoZFl3UDJTeWNRV0hUQTR2Y0FBUEs3YjhIVUtBZ0RnR2lENGM5My8rOC8vVWVnSlFDQVprbVNjUUFBWGtRa0xsVEtzei9IQ0FBQVJLQ0JLckJCRy9UQkdDekFCaHpCQmR6QkMveGdOb1JDSk1UQ1FoQkNDbVNBSEhKZ0theUNRaWlHemJBZEttQXYxRUFkTk1CUmFJYVRjQTR1d2xXNERqMXdEL3BoQ0o3QktMeUJDUVJCeUFnVFlTSGFpQUZpaWxnampnZ1htWVg0SWNGSUJCS0xKQ0RKaUJSUklrdVJOVWd4VW9wVUlGVklIZkk5Y2dJNWgxeEd1cEU3eUFBeWd2eUd2RWN4bElHeVVUM1VETFZEdWFnM0dvUkdvZ3ZRWkhReG1vOFdvSnZRY3JRYVBZdzJvZWZRcTJnUDJvOCtROGN3d09nWUJ6UEViREF1eHNOQ3NUZ3NDWk5qeTdFaXJBeXJ4aHF3VnF3RHU0bjFZOCt4ZHdRU2dVWEFDVFlFZDBJZ1lSNUJTRmhNV0U3WVNLZ2dIQ1EwRWRvSk53a0RoRkhDSnlLVHFFdTBKcm9SK2NRWVlqSXhoMWhJTENQV0VvOFRMeEI3aUVQRU55UVNpVU15SjdtUUFrbXhwRlRTRXRKRzBtNVNJK2tzcVpzMFNCb2prOG5hWkd1eUJ6bVVMQ0FyeUlYa25lVEQ1RFBrRytRaDhsc0tuV0pBY2FUNFUrSW9Vc3BxU2hubEVPVTA1UVpsbURKQlZhT2FVdDJvb1ZRUk5ZOWFRcTJodGxLdlVZZW9FelIxbWpuTmd4WkpTNld0b3BYVEdtZ1hhUGRwcitoMHVoSGRsUjVPbDlCWDBzdnBSK2lYNkFQMGR3d05oaFdEeDRobktCbWJHQWNZWnhsM0dLK1lUS1laMDRzWngxUXdOekhybU9lWkQ1bHZWVmdxdGlwOEZaSEtDcFZLbFNhVkd5b3ZWS21xcHFyZXFndFY4MVhMVkkrcFhsTjlya1pWTTFQanFRblVscXRWcXAxUTYxTWJVMmVwTzZpSHFtZW9iMVEvcEg1Wi9Za0dXY05NdzA5RHBGR2dzVi9qdk1ZZ0MyTVpzM2dzSVdzTnE0WjFnVFhFSnJITjJYeDJLcnVZL1IyN2l6MnFxYUU1UXpOS00xZXpVdk9VWmo4SDQ1aHgrSngwVGdubktLZVg4MzZLM2hUdktlSXBHNlkwVExreFpWeHJxcGFYbGxpclNLdFJxMGZydlRhdTdhZWRwcjFGdTFuN2dRNUJ4MG9uWENkSFo0L09CWjNuVTlsVDNhY0tweFpOUFRyMXJpNnFhNlVib2J0RWQ3OXVwKzZZbnI1ZWdKNU1iNmZlZWIzbitoeDlMLzFVL1czNnAvVkhERmdHc3d3a0J0c016aGc4eFRWeGJ6d2RMOGZiOFZGRFhjTkFRNlZobFdHWDRZU1J1ZEU4bzlWR2pVWVBqR25HWE9NazQyM0diY2FqSmdZbUlTWkxUZXBON3BwU1RibW1LYVk3VER0TXg4M016YUxOMXBrMW16MHgxekxubStlYjE1dmZ0MkJhZUZvc3RxaTJ1R1ZKc3VSYXBsbnV0cnh1aFZvNVdhVllWVnBkczBhdG5hMGwxcnV0dTZjUnA3bE9rMDZybnRabnc3RHh0c20ycWJjWnNPWFlCdHV1dG0yMmZXRm5ZaGRudDhXdXcrNlR2Wk45dW4yTi9UMEhEWWZaRHFzZFdoMStjN1J5RkRwV090NmF6cHp1UDMzRjlKYnBMMmRZenhEUDJEUGp0aFBMS2NScG5WT2IwMGRuRjJlNWM0UHppSXVKUzRMTExwYytMcHNieHQzSXZlUktkUFZ4WGVGNjB2V2RtN09id3UybzI2L3VOdTVwN29mY244dzBueW1lV1ROejBNUElRK0JSNWRFL0M1K1ZNR3Zmckg1UFEwK0JaN1huSXk5akw1RlhyZGV3dDZWM3F2ZGg3eGMrOWo1eW4rTSs0enczM2pMZVdWL01OOEMzeUxmTFQ4TnZubCtGMzBOL0kvOWsvM3IvMFFDbmdDVUJad09KZ1VHQld3TDcrSHA4SWIrT1B6cmJaZmF5MmUxQmpLQzVRUlZCajRLdGd1WEJyU0ZveU95UXJTSDM1NWpPa2M1cERvVlFmdWpXMEFkaDVtR0x3MzRNSjRXSGhWZUdQNDV3aUZnYTBUR1hOWGZSM0VOejMwVDZSSlpFM3B0bk1VODVyeTFLTlNvK3FpNXFQTm8zdWpTNlA4WXVabG5NMVZpZFdFbHNTeHc1TGlxdU5tNXN2dC84N2ZPSDRwM2lDK043RjVndnlGMXdlYUhPd3ZTRnB4YXBMaElzT3BaQVRJaE9PSlR3UVJBcXFCYU1KZklUZHlXT0NubkNIY0puSWkvUk50R0kyRU5jS2g1TzhrZ3FUWHFTN0pHOE5Ya2t4VE9sTE9XNWhDZXBrTHhNRFV6ZG16cWVGcHAySUcweVBUcTlNWU9Ta1pCeFFxb2hUWk8yWitwbjVtWjJ5NnhsaGJMK3hXNkx0eThlbFFmSmE3T1FyQVZaTFFxMlFxYm9WRm9vMXlvSHNtZGxWMmEvelluS09aYXJuaXZON2N5enl0dVFONXp2bi8vdEVzSVM0WksycFlaTFZ5MGRXT2E5ckdvNXNqeHhlZHNLNHhVRks0WldCcXc4dUlxMkttM1ZUNnZ0VjVldWZyMG1lazFyZ1Y3QnlvTEJ0UUZyNnd0VkN1V0ZmZXZjMSsxZFQxZ3ZXZCsxWWZxR25ScytGWW1LcmhUYkY1Y1ZmOWdvM0hqbEc0ZHZ5citaM0pTMHFhdkV1V1RQWnRKbTZlYmVMWjViRHBhcWwrYVhEbTROMmRxMERkOVd0TzMxOWtYYkw1Zk5LTnU3ZzdaRHVhTy9QTGk4WmFmSnpzMDdQMVNrVlBSVStsUTI3dExkdFdIWCtHN1I3aHQ3dlBZMDdOWGJXN3ozL1Q3SnZ0dFZBVlZOMVdiVlpmdEorN1AzUDY2SnF1bjRsdnR0WGExT2JYSHR4d1BTQS8wSEl3NjIxN25VMVIzU1BWUlNqOVlyNjBjT3h4KysvcDN2ZHkwTk5nMVZqWnpHNGlOd1JIbms2ZmNKMy9jZURUcmFkb3g3ck9FSDB4OTJIV2NkTDJwQ212S2FScHRUbXZ0YllsdTZUOHcrMGRicTNucjhSOXNmRDV3MFBGbDVTdk5VeVduYTZZTFRrMmZ5ejR5ZGxaMTlmaTc1M0dEYm9yWjc1MlBPMzJvUGIrKzZFSFRoMGtYL2krYzd2RHZPWFBLNGRQS3kyK1VUVjdoWG1xODZYMjNxZE9vOC9wUFRUOGU3bkx1YXJybGNhN251ZXIyMWUyYjM2UnVlTjg3ZDlMMTU4UmIvMXRXZU9UM2R2Zk42Yi9mRjkvWGZGdDErY2lmOXpzdTcyWGNuN3EyOFQ3eGY5RUR0UWRsRDNZZlZQMXYrM05qdjNIOXF3SGVnODlIY1IvY0doWVBQL3BIMWp3OURCWStaajh1R0RZYnJuamcrT1RuaVAzTDk2ZnluUTg5a3p5YWVGLzZpL3N1dUZ4WXZmdmpWNjlmTzBaalJvWmZ5bDVPL2JYeWwvZXJBNnhtdjI4YkN4aDYreVhnek1WNzBWdnZ0d1hmY2R4M3ZvOThQVCtSOElIOG8vMmo1c2ZWVDBLZjdreG1Uay84RUE1anovR016TGRzQUFBQWdZMGhTVFFBQWVpVUFBSUNEQUFENS93QUFnT2tBQUhVd0FBRHFZQUFBT3BnQUFCZHZrbC9GUmdBQUFFVkpSRUZVZU5wMHlzRU53REFNUWxHYzNkaUFHYndjSTNnNGVrclZWZzBTbDY5WHRqTXpPSTBrbHFRaWVRU1NhZ0hBSDl3QUFKRGt2dTEwZDJ6bjJWOW93Mis3QmdENUVFSTk0WHAwM1FBQUFBQkpSVTVFcmtKZ2dnPT0pIHJpZ2h0IDNweCBjZW50ZXIgbm8tcmVwZWF0fS5zaW1wbGVidXR0b257Ym9yZGVyOjFweCBzb2xpZCAjQTZBNkE2O2N1cnNvcjpwb2ludGVyO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0uZm9ybS1tYW5hZ2VyLXN0YXJ0e2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBb0NBSUFBQUEzNWU0bUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFDU1NVUkJWRmhIN2RiUkNZQWdGSVhoUm5BU04zQURKM0dTdTRnYnVJR0QxU1VsZWpDT0JwTEUrUjROT1QvMFVKdFpESU1RQmlFTVFoaUVNQWo1YjVDMTFuc2ZRaENSbEZMT2VUL1Z4OTNlQkRubmRGdUhZNHc2ckNkbHU2bGM2VGNjVkhkdW1vZVhjcXNmZ3hBR0ljTkJzL0dWSVF4Q0dJUU1CNm0xUHE1UHZ2ejltSXBCQ0lNUUJpRU1RaGlFTEJaa3pBR29SWS8xYThZT3ZRQUFBQUJKUlU1RXJrSmdnZz09KSBuby1yZXBlYXQ7Zm9udC1zaXplOjEycHQ7aGVpZ2h0OjQwcHg7bGVmdDowO3RvcDowO3dpZHRoOjQ4cHh9LmZvcm0tbWFuYWdlci1zdGFydDpob3ZlcntiYWNrZ3JvdW5kOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQW9DQUlBQUFBMzVlNG1BQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBQ21TVVJCVkZoSDdkWXhDb1F3RUlWaGI1TmFzTkJHWkNzdEJVRmtMN0RnOXR0cTZRRzhnSjJGQi9JMkRrUzJFT1VsZ2hqa2ZVd1ZDZk9EaFhyS01ReENHSVF3Q0dFUXdpRGt1VUYrR0VkcDhhcnE3Tk9VN2ZEdXB1ODR5NnlQalowSkNwSk1kc3ZpL05mTFlqblJ1M2RIWHpGbkhiVFpKN043K0I5OXl4eURFQVloMWtGWDR5dERHSVF3Q0xFT0VtNTlYSS9jK2Z0eEtRWWhERUlZaERBSVlSRGlXSkJTQzNlZGovREdJdjgvQUFBQUFFbEZUa1N1UW1DQykgbm8tcmVwZWF0fS5mb3JtLW1hbmFnZXItc3RhcnQ6YWN0aXZle2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBb0NBSUFBQUEzNWU0bUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFDblNVUkJWRmhIWTVBWlpHRFVRWVRBcUlNSWdWRUhFUUtqRGlJRVJoMUVDQXhmQnluckdHdmJlaHY2SkZuR1ZybVV6bld2WFJFMjd6b1FRYVdKQnVRNFNOM1VIbWczMEdMSHZJbEFpNEVpRUx1eElvZ1c0Z0hKRGtLekQ0aXdDc0lSUkJmeFlOUkJoTUNvZ3dnQmtoMUVhekFhWllUQXFJTUlnVkVIRVFJa093Z0lCbGZsaWdzTVpQT0RwbURVUVlUQXFJTUlnVkVIRVFLakRpSUVSaDFFQ0F3eUI4bklBQURIRUpiRE1ZNDdyUUFBQUFCSlJVNUVya0pnZ2c9PSkgbm8tcmVwZWF0fS5mb3JtLW1hbmFnZXItc2VhcmNoe2JhY2tncm91bmQtY29sb3I6IzNGM0YzRjtib3JkZXI6bm9uZTtjb2xvcjojMDAwO2ZvbnQ6MTFwdCBTZWdvZSBVSTtoZWlnaHQ6NDBweDtsZWZ0OjQ4cHg7bWFyZ2luOjA7cGFkZGluZzowO3RleHQtaW5kZW50OjEzcHg7dG9wOjA7d2lkdGg6MzQ0cHh9LmNlbGwsLmhlYWRpbmd7dGV4dC1pbmRlbnQ6NHB4O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5mb3JtLW1hbmFnZXItc2VhcmNoOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I0YzRjNGMztvdXRsaW5lOjAhaW1wb3J0YW50fS5mb3JtLW1hbmFnZXItc2VhcmNoOmhvdmVyOm5vdCg6Zm9jdXMpe2JhY2tncm91bmQtY29sb3I6IzU3NTc1N30uZm9ybS1tYW5hZ2VyLXNlYXJjaDpob3Zlcjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNGM0YzRjN9LmZvcm0tbWFuYWdlcntiYWNrZ3JvdW5kLWNvbG9yOiMxMDEwMTA7aGVpZ2h0OjQwcHg7bGVmdDowO3RvcDpjYWxjKDEwMCUgLSA0MHB4KTt3aWR0aDoxMDAlfS5mb3JtLWNvbnRhaW5lcntoZWlnaHQ6MTAwJTtsZWZ0OjA7b3ZlcmZsb3c6YXV0bzt0b3A6MDt3aWR0aDoxMDAlO3otaW5kZXg6MH0uY2VsbCwuY29udGV4dGl0ZW0sLmZvcm0tYm9keSwuaGVhZGluZ3tvdmVyZmxvdzpoaWRkZW59LmZvcm0tYmFzZXtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweDtib3gtc2hhZG93OjAgNXB4IDI1cHggLTRweCByZ2JhKDAsMCwwLC43NSl9LmZvcm0taGVhZGluZy1mbGFzaHthbmltYXRpb24tZGlyZWN0aW9uOmFsdGVybmF0ZS1yZXZlcnNlO2FuaW1hdGlvbi1kdXJhdGlvbjouMDdzO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ODthbmltYXRpb24tbmFtZTpDb2xvckZsYXNofS5mb3JtLWhlYWRpbmd7aGVpZ2h0OjMwcHg7bWFyZ2luOjA7dmVydGljYWwtYWxpZ246dG9wO3dpZHRoOjEwMCV9LmZvcm0taGVhZGluZy10aXRsZXtmb250LXNpemU6MTBwdDtsZWZ0OjUwJTttYXJnaW4tcmlnaHQ6LTUwJTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX0uZm9ybS1oZWFkaW5nLWJ1dHRvbntib3JkZXItd2lkdGg6MDtjdXJzb3I6aGFuZDtmb250LWZhbWlseTpMdWNpZGEgU2FucyBVbmljb2RlO2ZvbnQtc2l6ZToxMnB0O2hlaWdodDoyOXB4O21hcmdpbjowO3BhZGRpbmc6MDt0ZXh0LWFsaWduOmNlbnRlcjt0b3A6MDt3aWR0aDo0NXB4fS5mb3JtLWJvZHksLmZvcm0tYm9keS1vdmVybGF5e2hlaWdodDpjYWxjKDEwMCUgLSAzMHB4KTt0b3A6MzBweH0uZm9ybS1ib2R5e3dpZHRoOjEwMCV9LmZvcm0tYm9keS1vdmVybGF5e3dpZHRoOjEwMCU7ei1pbmRleDo2NTU1M30uZm9ybS1oZWFkaW5nLWJ1dHRvbi1jbG9zZXtsZWZ0OmNhbGMoMTAwJSAtIDQ1cHgpfS5jZWxse2hlaWdodDoxOXB4IWltcG9ydGFudDtsaW5lLWhlaWdodDoxOXB4O21hcmdpbjowIWltcG9ydGFudH0uY2VsbC1yZXNwb25zaXZle2ZvbnQtc2l6ZToxNHB4O2hlaWdodDo1M3B4IWltcG9ydGFudDtsaW5lLWhlaWdodDo1M3B4fS5mb2N1c2Vkcm93e291dGxpbmU6IzAwMCBkb3R0ZWQgMXB4IWltcG9ydGFudDtvdXRsaW5lLW9mZnNldDotMXB4fS5oZWFkaW5ne2JvcmRlci1ib3R0b206bm9uZSFpbXBvcnRhbnQ7Ym9yZGVyLWxlZnQ6bm9uZSFpbXBvcnRhbnQ7Ym9yZGVyLXRvcDpub25lIWltcG9ydGFudDtoZWlnaHQ6MjFweCFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MjFweDtjdXJzb3I6cG9pbnRlcn0uaGVhZGluZy1yZXNwb25zaXZle2ZvbnQtc2l6ZToxNHB4O2hlaWdodDo1M3B4IWltcG9ydGFudDtsaW5lLWhlaWdodDo1M3B4fS5ncmlkOmZvY3Vze291dGxpbmU6MCFpbXBvcnRhbnR9LmdyaWQtc29ydC11cHtiYWNrZ3JvdW5kOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQUZDQVlBQUFDWFU4WnJBQUFBQ1hCSVdYTUFBQTdEQUFBT3d3SEhiNmhrQUFBS1QybERRMUJRYUc5MGIzTm9iM0FnU1VORElIQnliMlpwYkdVQUFIamFuVk5uVkZQcEZqMzMzdlJDUzRpQWxFdHZVaFVJSUZKQ2k0QVVrU1lxSVFrUVNvZ2hvZGtWVWNFUlJVVUVHOGlnaUFPT2pvQ01GVkVzRElvSzJBZmtJYUtPZzZPSWlzcjc0WHVqYTlhODkrYk4vclhYUHVlczg1Mnp6d2ZBQ0F5V1NETlJOWUFNcVVJZUVlQ0R4OFRHNGVRdVFJRUtKSEFBRUFpelpDRnovU01CQVBoK1BEd3JJc0FIdmdBQmVOTUxDQURBVFp2QU1CeUgvdy9xUXBsY0FZQ0VBY0Iwa1RoTENJQVVBRUI2amtLbUFFQkdBWUNkbUNaVEFLQUVBR0RMWTJMakFGQXRBR0FuZitiVEFJQ2QrSmw3QVFCYmxDRVZBYUNSQUNBVFpZaEVBR2c3QUt6UFZvcEZBRmd3QUJSbVM4UTVBTmd0QURCSlYyWklBTEMzQU1ET0VBdXlBQWdNQURCUmlJVXBBQVI3QUdESUl5TjRBSVNaQUJSRzhsYzg4U3V1RU9jcUFBQjRtYkk4dVNRNVJZRmJDQzF4QjFkWExoNG96a2tYS3hRMllRSmhta0F1d25tWkdUS0JOQS9nODh3QUFLQ1JGUkhnZy9QOWVNNE9yczdPTm82MkRsOHQ2cjhHL3lKaVl1UCs1YytyY0VBQUFPRjBmdEgrTEMrekdvQTdCb0J0L3FJbDdnUm9YZ3VnZGZlTFpySVBRTFVBb09uYVYvTncrSDQ4UEVXaGtMbloyZVhrNU5oS3hFSmJZY3BYZmY1bndsL0FWLzFzK1g0OC9QZjE0TDdpSklFeVhZRkhCUGpnd3N6MFRLVWN6NUlKaEdMYzVvOUgvTGNMLy93ZDB5TEVTV0s1V0NvVTQxRVNjWTVFbW96ek1xVWlpVUtTS2NVbDB2OWs0dDhzK3dNKzN6VUFzR28rQVh1UkxhaGRZd1AyU3ljUVdIVEE0dmNBQVBLN2I4SFVLQWdEZ0dpRDRjOTMvKzgvL1VlZ0pRQ0Faa21TY1FBQVhrUWtMbFRLc3ovSENBQUFSS0NCS3JCQkcvVEJHQ3pBQmh6QkJkekJDL3hnTm9SQ0pNVENRaEJDQ21TQUhISmdLYXlDUWlpR3piQWRLbUF2MUVBZE5NQlJhSWFUY0E0dXdsVzREajF3RC9waENKN0JLTHlCQ1FSQnlBZ1RZU0hhaUFGaWlsZ2pqZ2dYbVlYNEljRklCQktMSkNESmlCUlJJa3VSTlVneFVvcFVJRlZJSGZJOWNnSTVoMXhHdXBFN3lBQXlndnlHdkVjeGxJR3lVVDNVRExWRHVhZzNHb1JHb2d2UVpIUXhtbzhXb0p2UWNyUWFQWXcyb2VmUXEyZ1AybzgrUThjd3dPZ1lCelBFYkRBdXhzTkNzVGdzQ1pOank3RWlyQXlyeGhxd1Zxd0R1NG4xWTgreGR3UVNnVVhBQ1RZRWQwSWdZUjVCU0ZoTVdFN1lTS2dnSENRMEVkb0pOd2tEaEZIQ0p5S1RxRXUwSnJvUitjUVlZakl4aDFoSUxDUFdFbzhUTHhCN2lFUEVOeVFTaVVNeUo3bVFBa214cEZUU0V0SkcwbTVTSStrc3FaczBTQm9qazhuYVpHdXlCem1VTENBcnlJWGtuZVRENURQa0crUWg4bHNLbldKQWNhVDRVK0lvVXNwcVNobmxFT1UwNVFabG1ESkJWYU9hVXQyb29WUVJOWTlhUXEyaHRsS3ZVWWVvRXpSMW1qbk5neFpKUzZXdG9wWFRHbWdYYVBkcHIraDB1aEhkbFI1T2w5Qlgwc3ZwUitpWDZBUDBkd3dOaGhXRHg0aG5LQm1iR0FjWVp4bDNHSytZVEtZWjA0c1p4MVF3TnpIcm1PZVpENWx2VlZncXRpcDhGWkhLQ3BWS2xTYVZHeW92VkttcXBxcmVxZ3RWODFYTFZJK3BYbE45cmtaVk0xUGpxUW5VbHF0VnFwMVE2MU1iVTJlcE82aUhxbWVvYjFRL3BINVovWWtHV2NOTXcwOURwRkdnc1YvanZNWWdDMk1aczNnc0lXc05xNFoxZ1RYRUpySE4yWHgyS3J1WS9SMjdpejJxcWFFNVF6TktNMWV6VXZPVVpqOEg0NWh4K0p4MFRnbm5LS2VYODM2SzNoVHZLZUlwRzZZMFRMa3haVnhycXBhWGxsaXJTS3RScTBmcnZUYXU3YWVkcHIxRnUxbjdnUTVCeDBvblhDZEhaNC9PQlozblU5bFQzYWNLcHhaTlBUcjFyaTZxYTZVYm9idEVkNzl1cCs2WW5yNWVnSjVNYjZmZWViM24raHg5TC8xVS9XMzZwL1ZIREZnR3N3d2tCdHNNemhnOHhUVnhiendkTDhmYjhWRkRYY05BUTZWaGxXR1g0WVNSdWRFOG85VkdqVVlQakduR1hPTWs0MjNHYmNhakpnWW1JU1pMVGVwTjdwcFNUYm1tS2FZN1REdE14ODNNemFMTjFwazFtejB4MXpMbm0rZWIxNXZmdDJCYWVGb3N0cWkydUdWSnN1UmFwbG51dHJ4dWhWbzVXYVZZVlZwZHMwYXRuYTBsMXJ1dHU2Y1JwN2xPazA2cm50Wm53N0R4dHNtMnFiY1pzT1hZQnR1dXRtMjJmV0ZuWWhkbnQ4V3V3KzZUdlpOOXVuMk4vVDBIRFlmWkRxc2RXaDErYzdSeUZEcFdPdDZhenB6dVAzM0Y5SmJwTDJkWXp4RFAyRFBqdGhQTEtjUnBuVk9iMDBkbkYyZTVjNFB6aUl1SlM0TExMcGMrTHBzYnh0M0l2ZVJLZFBWeFhlRjYwdldkbTdPYnd1Mm8yNi91TnU1cDdvZmNuOHcwbnltZVdUTnowTVBJUStCUjVkRS9DNStWTUd2ZnJINVBRMCtCWjdYbkl5OWpMNUZYcmRld3Q2VjNxdmRoN3hjKzlqNXluK00rNHp3MzNqTGVXVi9NTjhDM3lMZkxUOE52bmwrRjMwTi9JLzlrLzNyLzBRQ25nQ1VCWndPSmdVR0JXd0w3K0hwOEliK09QenJiWmZheTJlMUJqS0M1UVJWQmo0S3RndVhCclNGb3lPeVFyU0gzNTVqT2tjNXBEb1ZRZnVqVzBBZGg1bUdMdzM0TUo0V0hoVmVHUDQ1d2lGZ2EwVEdYTlhmUjNFTnozMFQ2UkpaRTNwdG5NVTg1cnkxS05TbytxaTVxUE5vM3VqUzZQOFl1WmxuTTFWaWRXRWxzU3h3NUxpcXVObTVzdnQvODdmT0g0cDNpQytON0Y1Z3Z5RjF3ZWFIT3d2U0ZweGFwTGhJc09wWkFUSWhPT0pUd1FSQXFxQmFNSmZJVGR5V09Dbm5DSGNKbklpL1JOdEdJMkVOY0toNU84a2dxVFhxUzdKRzhOWGtreFRPbExPVzVoQ2Vwa0x4TURVemRtenFlRnBwMklHMHlQVHE5TVlPU2taQnhRcW9oVFpPMlorcG41bVoyeTZ4bGhiTCt4VzZMdHk4ZWxRZkphN09RckFWWkxRcTJRcWJvVkZvbzF5b0hzbWRsVjJhL3pZbktPWmFybml2TjdjeXp5dHVRTjV6dm4vL3RFc0lTNFpLMnBZWkxWeTBkV09hOXJHbzVzanh4ZWRzSzR4VUZLNFpXQnF3OHVJcTJLbTNWVDZ2dFY1ZXVmcjBtZWsxcmdWN0J5b0xCdFFGcjZ3dFZDdVdGZmV2YzErMWRUMWd2V2QrMVlmcUduUnMrRlltS3JoVGJGNWNWZjlnbzNIamxHNGR2eXIrWjNKUzBxYXZFdVdUUFp0Sm02ZWJlTFo1YkRwYXFsK2FYRG00TjJkcTBEZDlXdE8zMTlrWGJMNWZOS051N2c3WkR1YU8vUExpOFphZkp6czA3UDFTa1ZQUlUrbFEyN3RMZHRXSFgrRzdSN2h0N3ZQWTA3TlhiVzd6My9UN0p2dHRWQVZWTjFXYlZaZnRKKzdQM1A2NkpxdW40bHZ0dFhhMU9iWEh0eHdQU0EvMEhJdzYyMTduVTFSM1NQVlJTajlZcjYwY094eCsrL3AzdmR5ME5OZzFWalp6RzRpTndSSG5rNmZjSjMvY2VEVHJhZG94N3JPRUgweDkySFdjZEwycENtdkthUnB0VG12dGJZbHU2VDh3KzBkYnEzbnI4UjlzZkQ1dzBQRmw1U3ZOVXlXbmE2WUxUazJmeXo0eWRsWjE5Zmk3NTNHRGJvclo3NTJQTzMyb1BiKys2RUhUaDBrWC9pK2M3dkR2T1hQSzRkUEt5MitVVFY3aFhtcTg2WDIzcWRPbzgvcFBUVDhlN25MdWFycmxjYTdudWVyMjFlMmIzNlJ1ZU44N2Q5TDE1OFJiLzF0V2VPVDNkdmZONmIvZkY5L1hmRnQxK2NpZjl6c3U3MlhjbjdxMjhUN3hmOUVEdFFkbEQzWWZWUDF2KzNOanYzSDlxd0hlZzg5SGNSL2NHaFlQUC9wSDFqdzlEQlkrWmo4dUdEWWJybmpnK09UbmlQM0w5NmZ5blE4OWt6eWFlRi82aS9zdXVGeFl2ZnZqVjY5Zk8wWmpSb1pmeWw1Ty9iWHlsL2VyQTZ4bXYyOGJDeGg2K3lYZ3pNVjcwVnZ2dHdYZmNkeDN2bzk4UFQrUjhJSDhvLzJqNXNmVlQwS2Y3a3htVGsvOEVBNWp6L0dNekxkc0FBQUFnWTBoU1RRQUFlaVVBQUlDREFBRDUvd0FBZ09rQUFIVXdBQURxWUFBQU9wZ0FBQmR2a2wvRlJnQUFBREpKUkVGVWVOcGkrUC8vUHdNeVhyMTY5WDkwTVF3RmFXbHAvOUVWWWlpQVlXU0ZXQldnSzhTcEFGa2hBQUFBLy84REFDVjdlZFY5Z21VWkFBQUFBRWxGVGtTdVFtQ0MpIG5vLXJlcGVhdH0uZ3JpZC1zb3J0LWRvd257YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFGQ0FZQUFBQ1hVOFpyQUFBQUNYQklXWE1BQUE3REFBQU93d0hIYjZoa0FBQUtUMmxEUTFCUWFHOTBiM05vYjNBZ1NVTkRJSEJ5YjJacGJHVUFBSGphblZOblZGUHBGajMzM3ZSQ1M0aUFsRXR2VWhVSUlGSkNpNEFVa1NZcUlRa1FTb2dob2RrVlVjRVJSVVVFRzhpZ2lBT09qb0NNRlZFc0RJb0syQWZrSWFLT2c2T0lpc3I3NFh1amE5YTg5K2JOL3JYWFB1ZXM4NTJ6endmQUNBeVdTRE5STllBTXFVSWVFZUNEeDhURzRlUXVRSUVLSkhBQUVBaXpaQ0Z6L1NNQkFQaCtQRHdySXNBSHZnQUJlTk1MQ0FEQVRadkFNQnlIL3cvcVFwbGNBWUNFQWNCMGtUaExDSUFVQUVCNmprS21BRUJHQVlDZG1DWlRBS0FFQUdETFkyTGpBRkF0QUdBbmYrYlRBSUNkK0psN0FRQmJsQ0VWQWFDUkFDQVRaWWhFQUdnN0FLelBWb3BGQUZnd0FCUm1TOFE1QU5ndEFEQkpWMlpJQUxDM0FNRE9FQXV5QUFnTUFEQlJpSVVwQUFSN0FHRElJeU40QUlTWkFCUkc4bGM4OFN1dUVPY3FBQUI0bWJJOHVTUTVSWUZiQ0MxeEIxZFhMaDRvemtrWEt4UTJZUUpobWtBdXdubVpHVEtCTkEvZzg4d0FBS0NSRlJIZ2cvUDllTTRPcnM3T05vNjJEbDh0NnI4Ry95SmlZdVArNWMrcmNFQUFBT0YwZnRIK0xDK3pHb0E3Qm9CdC9xSWw3Z1JvWGd1Z2RmZUxacklQUUxVQW9PbmFWL053K0g0OFBFV2hrTG5aMmVYazVOaEt4RUpiWWNwWGZmNW53bC9BVi8xcytYNDgvUGYxNEw3aUpJRXlYWUZIQlBqZ3dzejBUS1VjejVJSmhHTGM1bzlIL0xjTC8vd2QweUxFU1dLNVdDb1U0MUVTY1k1RW1venpNcVVpaVVLU0tjVWwwdjlrNHQ4cyt3TSszelVBc0dvK0FYdVJMYWhkWXdQMlN5Y1FXSFRBNHZjQUFQSzdiOEhVS0FnRGdHaUQ0YzkzLys4Ly9VZWdKUUNBWmttU2NRQUFYa1FrTGxUS3N6L0hDQUFBUktDQktyQkJHL1RCR0N6QUJoekJCZHpCQy94Z05vUkNKTVRDUWhCQ0NtU0FISEpnS2F5Q1FpaUd6YkFkS21BdjFFQWROTUJSYUlhVGNBNHV3bFc0RGoxd0QvcGhDSjdCS0x5QkNRUkJ5QWdUWVNIYWlBRmlpbGdqamdnWG1ZWDRJY0ZJQkJLTEpDREppQlJSSWt1Uk5VZ3hVb3BVSUZWSUhmSTljZ0k1aDF4R3VwRTd5QUF5Z3Z5R3ZFY3hsSUd5VVQzVURMVkR1YWczR29SR29ndlFaSFF4bW84V29KdlFjclFhUFl3Mm9lZlFxMmdQMm84K1E4Y3d3T2dZQnpQRWJEQXV4c05Dc1Rnc0NaTmp5N0VpckF5cnhocXdWcXdEdTRuMVk4K3hkd1FTZ1VYQUNUWUVkMElnWVI1QlNGaE1XRTdZU0tnZ0hDUTBFZG9KTndrRGhGSENKeUtUcUV1MEpyb1IrY1FZWWpJeGgxaElMQ1BXRW84VEx4QjdpRVBFTnlRU2lVTXlKN21RQWtteHBGVFNFdEpHMG01U0kra3NxWnMwU0Jvams4bmFaR3V5QnptVUxDQXJ5SVhrbmVURDVEUGtHK1FoOGxzS25XSkFjYVQ0VStJb1VzcHFTaG5sRU9VMDVRWmxtREpCVmFPYVV0Mm9vVlFSTlk5YVFxMmh0bEt2VVllb0V6UjFtam5OZ3haSlM2V3RvcFhUR21nWGFQZHByK2gwdWhIZGxSNU9sOUJYMHN2cFIraVg2QVAwZHd3TmhoV0R4NGhuS0JtYkdBY1laeGwzR0srWVRLWVowNHNaeDFRd056SHJtT2VaRDVsdlZWZ3F0aXA4RlpIS0NwVktsU2FWR3lvdlZLbXFwcXJlcWd0VjgxWExWSStwWGxOOXJrWlZNMVBqcVFuVWxxdFZxcDFRNjFNYlUyZXBPNmlIcW1lb2IxUS9wSDVaL1lrR1djTk13MDlEcEZHZ3NWL2p2TVlnQzJNWnMzZ3NJV3NOcTRaMWdUWEVKckhOMlh4MktydVkvUjI3aXoycXFhRTVRek5LTTFlelV2T1VaajhINDVoeCtKeDBUZ25uS0tlWDgzNkszaFR2S2VJcEc2WTBUTGt4WlZ4cnFwYVhsbGlyU0t0UnEwZnJ2VGF1N2FlZHByMUZ1MW43Z1E1Qngwb25YQ2RIWjQvT0JaM25VOWxUM2FjS3B4Wk5QVHIxcmk2cWE2VWJvYnRFZDc5dXArNllucjVlZ0o1TWI2ZmVlYjNuK2h4OUwvMVUvVzM2cC9WSERGZ0dzd3drQnRzTXpoZzh4VFZ4Ynp3ZEw4ZmI4VkZEWGNOQVE2VmhsV0dYNFlTUnVkRThvOVZHalVZUGpHbkdYT01rNDIzR2JjYWpKZ1ltSVNaTFRlcE43cHBTVGJtbUthWTdURHRNeDgzTXphTE4xcGsxbXoweDF6TG5tK2ViMTV2ZnQyQmFlRm9zdHFpMnVHVkpzdVJhcGxudXRyeHVoVm81V2FWWVZWcGRzMGF0bmEwbDFydXR1NmNScDdsT2swNnJudFpudzdEeHRzbTJxYmNac09YWUJ0dXV0bTIyZldGblloZG50OFd1dys2VHZaTjl1bjJOL1QwSERZZlpEcXNkV2gxK2M3UnlGRHBXT3Q2YXpwenVQMzNGOUpicEwyZFl6eERQMkRQanRoUExLY1JwblZPYjAwZG5GMmU1YzRQemlJdUpTNExMTHBjK0xwc2J4dDNJdmVSS2RQVnhYZUY2MHZXZG03T2J3dTJvMjYvdU51NXA3b2Zjbjh3MG55bWVXVE56ME1QSVErQlI1ZEUvQzUrVk1HdmZySDVQUTArQlo3WG5JeTlqTDVGWHJkZXd0NlYzcXZkaDd4Yys5ajV5bitNKzR6dzMzakxlV1YvTU44QzN5TGZMVDhOdm5sK0YzME4vSS85ay8zci8wUUNuZ0NVQlp3T0pnVUdCV3dMNytIcDhJYitPUHpyYlpmYXkyZTFCaktDNVFSVkJqNEt0Z3VYQnJTRm95T3lRclNIMzU1ak9rYzVwRG9WUWZ1alcwQWRoNW1HTHczNE1KNFdIaFZlR1A0NXdpRmdhMFRHWE5YZlIzRU56MzBUNlJKWkUzcHRuTVU4NXJ5MUtOU28rcWk1cVBObzN1alM2UDhZdVpsbk0xVmlkV0Vsc1N4dzVMaXF1Tm01c3Z0Lzg3Zk9INHAzaUMrTjdGNWd2eUYxd2VhSE93dlNGcHhhcExoSXNPcFpBVEloT09KVHdRUkFxcUJhTUpmSVRkeVdPQ25uQ0hjSm5JaS9STnRHSTJFTmNLaDVPOGtncVRYcVM3Skc4Tlhra3hUT2xMT1c1aENlcGtMeE1EVXpkbXpxZUZwcDJJRzB5UFRxOU1ZT1NrWkJ4UXFvaFRaTzJaK3BuNW1aMnk2eGxoYkwreFc2THR5OGVsUWZKYTdPUXJBVlpMUXEyUXFib1ZGb28xeW9Ic21kbFYyYS96WW5LT1phcm5pdk43Y3l6eXR1UU41enZuLy90RXNJUzRaSzJwWVpMVnkwZFdPYTlyR281c2p4eGVkc0s0eFVGSzRaV0Jxdzh1SXEyS20zVlQ2dnRWNWV1ZnIwbWVrMXJnVjdCeW9MQnRRRnI2d3RWQ3VXRmZldmMxKzFkVDFndldkKzFZZnFHblJzK0ZZbUtyaFRiRjVjVmY5Z28zSGpsRzRkdnlyK1ozSlMwcWF2RXVXVFBadEptNmViZUxaNWJEcGFxbCthWERtNE4yZHEwRGQ5V3RPMzE5a1hiTDVmTktOdTdnN1pEdWFPL1BMaThaYWZKenMwN1AxU2tWUFJVK2xRMjd0TGR0V0hYK0c3UjdodDd2UFkwN05YYlc3ejMvVDdKdnR0VkFWVk4xV2JWWmZ0Sis3UDNQNjZKcXVuNGx2dHRYYTFPYlhIdHh3UFNBLzBISXc2MjE3blUxUjNTUFZSU2o5WXI2MGNPeHgrKy9wM3ZkeTBOTmcxVmpaekc0aU53UkhuazZmY0ozL2NlRFRyYWRveDdyT0VIMHg5MkhXY2RMMnBDbXZLYVJwdFRtdnRiWWx1NlQ4dyswZGJxM25yOFI5c2ZENXcwUEZsNVN2TlV5V25hNllMVGsyZnl6NHlkbFoxOWZpNzUzR0Rib3JaNzUyUE8zMm9QYisrNkVIVGgwa1gvaStjN3ZEdk9YUEs0ZFBLeTIrVVRWN2hYbXE4NlgyM3FkT284L3BQVFQ4ZTduTHVhcnJsY2E3bnVlcjIxZTJiMzZSdWVOODdkOUwxNThSYi8xdFdlT1QzZHZmTjZiL2ZGOS9YZkZ0MStjaWY5enN1NzJYY243cTI4VDd4ZjlFRHRRZGxEM1lmVlAxdiszTmp2M0g5cXdIZWc4OUhjUi9jR2hZUFAvcEgxanc5REJZK1pqOHVHRFlicm5qZytPVG5pUDNMOTZmeW5RODlrenlhZUYvNmkvc3V1RnhZdmZ2alY2OWZPMFpqUm9aZnlsNU8vYlh5bC9lckE2eG12MjhiQ3hoNit5WGd6TVY3MFZ2dnR3WGZjZHgzdm85OFBUK1I4SUg4by8yajVzZlZUMEtmN2t4bVRrLzhFQTVqei9HTXpMZHNBQUFBZ1kwaFNUUUFBZWlVQUFJQ0RBQUQ1L3dBQWdPa0FBSFV3QUFEcVlBQUFPcGdBQUJkdmtsL0ZSZ0FBQUVWSlJFRlVlTnAweXNFTndEQU1RbEdjM2RpQUdid2NJM2c0ZWtyVlZnMFNsNjlYdGpNek9JMGtscVFpZVFTU2FnSEFIOXdBQUpEa3Z1MTBkMnpuMlY5b3cyKzdCZ0Q1RUVJOTRYcDAzUUFBQUFCSlJVNUVya0pnZ2c9PSkgbm8tcmVwZWF0fS5wcm9ncmVzc2JhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnByb2dyZXNzYmFyYm9keXtjb2xvcjojZmZmO2hlaWdodDpjYWxjKDEwMCUgLSAycHgpO2xlZnQ6MXB4O3RleHQtYWxpZ246Y2VudGVyO3RvcDoxcHh9LmNvbnRleHRpdGVte2hlaWdodDoyNHB4O2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC1pbmRlbnQ6MzRweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0uY29udGV4dGl0ZW1zZXBlcmF0b3J7aGVpZ2h0OjFweDtsZWZ0OjMxcHg7cmlnaHQ6OHB4fS5kaWFsb2didXR0b25zZWN0aW9ue2hlaWdodDo0OHB4O2xlZnQ6MDt0b3A6Y2FsYygxMDAlIC0gNDhweCk7d2lkdGg6MTAwJX0uaW1hZ2UzMntiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO2hlaWdodDozMnB4O2xlZnQ6MjVweDt0b3A6MzJweDt3aWR0aDozMnB4fS5pbWFnZWVycm9ye2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBQkYwUlZoMFZHbDBiR1VBUlhKeWIzSTdSbUZwYkR2b2cxMERBQUFJVDBsRVFWUjRYcTJYZTR4Y1ZSM0hQK2ZPWTNkbWRtWjNaM2EzMjIyN3ROQmRlUlVKTFZRSWFVQnFFZjVRcW1CaVFBbUswUldLSWhTMFJIbElnTmlLZnloRWlxbVB4RUFwS1FXVTkxS0xwZGpTdEVEcDJ5N2IxNzQ3c3p2UCt6ajNIQ2NuZStOa0Exa0ozc2x2dnJsM012ZnpQYi9mK1oxN2orRFRIOVA5UjMrR20wMExGYlh4Q1dCZEc1L1ZRQUN4QVBIdXloK2YxeENOWFJPeXhCV1dJQ1lFNTJtbFVjcmZveFVWUjdwdm5pcVhOMTMrMk5vUEFHVmlHaU5pR3JnQVFydnZ1bU41UTMzMHdXZ3ExWlhvUG9QNjB6cXdJbEdpYlJsQTR3eVBvUnlIU3Y4Sml2c1BZMmNuRG85WHl2ZGY4dmdUendKK1lPYlRHQkNBMWJ2aWUzTm5KZE4vYlpqZHNianBrb1hVemNnZ3g4ZnhKeWJRMHNNdkZrQXJyRmdDTEl0d1l5UGhkQnA3K0JSamIyMm4wSGY4M1YwRGc5KythZVBHUGtBRzJaak9nQm4xTzdmZGNuazYxYkMrZGNuRnpZbnV1YmdESjZ2Z2NRQUQxZG9vS0ZVVlBhbSt1UlpLTlZKMzJqenlCNDh5OU1ZL2MzMWoyUnVXUC9WVUwrQk5OU0UrRHI2MXArZUxiUzNOTDdaLzVVdlJrUEJ4aDA0R3Z0Rm9oREowQXpZbXRFWUhCbnlqNktyV3orbkVqOFRwZitidjNwR1RnOWRjdTNGallFSVJBS2VtL1lVYmIrdzZmVWJMMXM1cnI4N29ZZzQ1TVlHb3NSd0EwUmpGWkVNSEdUQkc4SDNNZVZYRHpXbEV5MHdPLzJWVGRzZlJvNWV0Nk8wOUNNakFSSGpxNkR0VHlYV3RsMTZZVWJuUktqd0hDSFJ0cCtsQVRmd1hycFVadlRGa3NpRE51VE0wUk1SeDZiamlrdlNDNXl0UEFrdHJ1OE9xSGYyV203OXpYYXcxZlhHc3NSNTNiQVR0eVdwNEp1enhQRHVlZVlXWFZxOWo5NHYvUUZiczREZWtiYlA3YjIveHdwby9zMjNEYTlqNUF0cnpVWjQwazlVZEdpQ2VzRWkwWnhZL3ZleXE2NER3SkpOYUE2RzRDTjJiWG5nMmxXUDlhTmREZVNad0pncnNmTzROS3ZNK1QrdlBIMlU4UG9PZG0zcnhLcll4c21QVG00d25PK2g0OEhlNFhZdDRaK09iVlBJRkF6ZjNxR3I1MEFFNkZpK2d1YTcrSGlBNnlSWWlnSzlmZHZYU004L3Rlbm4ya3ZOeGhnY1I1aWVNN241bEcwNzNRbHErZGozdExTazg2YlB2MTQ4UVBYa0l0S2JjUHA4WjM3MlZHYTJOV0tFdyt4Ly9MYnkzbFF1V0xnVGxnMVJWa2RUUG1zMi90KzVuOTk0RFgxMnhjL3VyZ0JmTUFhdEJjR1VrRWFHNDV6MUNqYzJJa0JXa2h2elFHRXQrODMwcUlrSnpZd01JamJYeVozeTQrbUdrcjJpNzZSYmEyOU8wWkZMRzBKSTdmOFNtcGMrRDU2SjhqZWtLS1NrZFBreWlKVWxUS0xJTTZBV2tGZFEvakw0b2pJZmQveEhGdmU4amMxbTA2NW9VdHMyZlM5L2F4NWpabWdRMFNrR210WWx6VnE3aXRKN2JtVm1GWjVxVHBpMFRkU0UrV1BNcjJ1ZDM0bnNTNWJuSVloRjdjTkRNcTJoWUVkRmlFUkNxN1FKTCsvcHpPR1drNTRLaktSNDhRRGpSUURqVFF2ZmlzOW03ZVJmdlBmSVE1LzkwRlVYYkJ5Q1RTWkd1Qm9BR2tsWDR6Z2Z1SS8vaExzNjc3QUs4d1FIOFFnSGZ0VTE3Z2lEc09lRHJya2tESXBpTlFpcVZvbEpHT1Q1WXB2WjRoVHhlc1lCOTRoaG5kSFZ5OE4xdDdMai9QczY4Nng3QUFxMEpEdVVyL3ZYd0ErUjNidU9jQzdzcDdkMWoxb0dnVmJWcFZRZzdSYXJYa3dFM3lJQlFubCtGbGN4a1FRc0VBb1F4WXZxNjFOK0h0bTJ5MlFLam8wVmFhMGF1TUJ4S2hZcXBlK2xvUHhZR0RKckFnREhqbFVwSXFReXp0Z1Q0dnBkM0trN0dDdFoxSVJBQ295QTRQbHJCN1Y1RTZ2b2ZvZ1g0V2h1NHdXc0Fpem0zM2MyaDFiL2t5TDd0ekp1Vk5BU1VScU9OZ3NBdU9ranBGUUt1RmF4SXRxTU9PUlVQcFh4ODZhTjlpYXFxa3BMQnJJTjM1b1VrYitpaHJUMU51aW1CMW9xbWVJakdlQVJ0N3E5SXA1TjAzWEVQK3B6RkhCc3NvcVRDOTMyVTUyTlVLVXBGbDRxVVI0TEVCUmxRUmRmZFdTeUZMNDdFQlVnUGFRVmxFRlE4V1BDVGxaUjBHQU9IS2p4U2JjT0hEUHpjYWpka2l4NEF6ZWtVWC9qRnZXeFpmcFV4cjRNbnA5S200UG04UjhGMWR3RSt0UVpHM2NvYnpmbndpbFFVa0w2Qkt3c3NCUEZFQTNidkM4ejkxczJVYkVrcUZtWi9kU0hLdnIzRjFIZXZnTFB2WEVXKzdORVFpL0xSdW5Va1UzRjg2U0tVUnVzZ0lKZXpHWGJzemJVR05PQ3ZPcmhueTdxekx1akxSemc5R1JQbUR5aFFXTFMxMVhQc3VRMEFuTDc4Nit4ZDgzdE9iZHZDN1BZa0NEaXhkVFA3dE9iY0gvUncrSThiNkg5MlBaMnpHbkZHaDBGcERObXl5R1ZMNVBKKy82UEQvWnNCV1d0QUFkN0ppdjFJM1hqZDJsaEVJYlNlWEtnVjlzZ1FNOXZhR1h4eEkzM1BQRTBpVVVkN0prWnBZQUFCZExTMU1ieDlLeSsvL2pyeFdJUTVIVlg0eUlpWlF3YXV3ZGVLRTJNK3grelNHc0FHNU5TMzNUQ1FlR3plZ3RjN2ttcFJKaWxNK3JFRW9CR2hNUEcyRmtMMWNXUzVoRE02aHRJNmVGNVEzOUpDSkI0elQ4Ynl5S2hwWjZHRm1RTkthUWF6SGtmSDFmdDNqeHhaQmt3QWJwQUJnaklBenU2SjdBcDA0MHNoNFRXbm9pRkVTR0ErMHFGd2ZBQ0VSa3g5SzBkVEdoZ0VnUUdpaldsTXEvcUtYRkZ5Y2x5TWJ5OVAzQWFVQWZsSis0SXdVSDk3YStlVjgrdmlUN1VudlVoanpDSVVzckFBSllSUkRVYlYxRzFCOEsyMVVlbEpjaVdmRXpuTDIrK1didnhEZnVSbG9CVFVmNnFCMmxMRWJrMVhUVVRybjJ5TnU0MU5NWWhHTFN4aDF1Z3B6blV3NGtrUlpoMXhwQ1JiaE1FQytRT3UzZk9uMHNnclFCSHdwbnNwSmNqRU5hbjBXWXZEVFU4MDF1bnowL1dTZUZSamhTeWkxUUJCeUxJd3RWTSthS3FxY0tWUHlZRlRwUkE1UjMvd3RsZnNlYzNPN1FQS2szQSt5Y0RVYXlHZ0RvaXZTSFY4bzkySzNCVVAwNW1JK01RakNpR2dMcXdNMkpFQ3BRVmxUMUIwTENxUzQ4ZVV1M3B0YVhnRFVLcWQ5Uit6TDVoMlN4YWVOQkw3Wml4ejBaeHc5TXR4d3BkYVd0UkhMTHJSNENwMXlOZllKZnkzVDBqMzFmWHVxUjFBcFFic0IvRFBzamNNQVpHYUNOVzhVNnJKOEdyQ3J3WC9QM2ZIMXNmc2tIVk5LS1AvNDFiOVA3RmV0YTJOZXpIeEFBQUFBRWxGVGtTdVFtQ0MpIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlfS5pbWFnZWluZGV4e2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFJWFJGV0hSVWFYUnNaUUJFYjJOMWJXVnVkR0YwYVc5dU8waGxiSEE3VVhWbGMzUnBiMjdnazh5WUFBQUpna2xFUVZSNFhwMVhDM0JVNVJYKzl1N2R6ZWE1TEF0SmlGcVVSeUF6SUEwMTJwcldBWHhRMmpnQzlURzBkS1NqbzFXcm5hbnRhRWZiV2xxTFZRZDhGMXNWS29TR0drTkFVMEFUZVF1QkdQSlN6Q1ltSVNFSm05ZHVOcnZaeDkxNy81N3piMjdjWnBpeDQ4bWMzTHYvL2YvemZlZDVkeTM0K25LcHMrSnJHZGxSMlFCajBxS0FNTzhOTWJGaXdkMXJDMDFBeTFjUk1LOXZ2bk5HUUVoN2ZKRmdRbjVPTE55Mzd0dFFRYUliQnU1ZVUzaHBoaVFBcEw3eXowT0xiZmJVTllwVnVja2lMQTU2dEVSWUNNQXdtZ2dnck90YVRXaHN0UExYUC85aEUwUGNjMGVSSWJGSU1FVzI3anFKU1hucm5UckpMRmxKVEdEcmF6dVAzLzczM2FkYnk5NXZGR2NhZTBTdk55QUdSNEtFYTdESys5NkxvNksyb1Z1VTdqc3IvbFo2d3ZQQ0d6WHJBTmo0UE51WmF2K1Z0NDlqVXQ3WWZmcFM0TW96cit5YnM3WDA1S2w5MVorSlBnSTFoVUhqdWlHMHVDNWltazVYVmtQb3RFWkNlMGRGNVFmTjRxVnRSMnNmLy9PMitZQ010SktNOGVLMkk4bmhPRFVWM1ByODFnTTNVWmhHbWovdm53QVZJaHFMQzgrRmdOaGYzeS9LanZlSVovZDZ4S2JLVnZIMjRmT2k0dVFGMGZqRmlBZ0VZeUpHKzVoa3cyZDk0dVh0UjBhZWVyNThKVWNqbWNUbWZ4d0NpMElLMnB5Y2IrWFoxLzZ6ZkpyTFZYWHJpZ0xYb2dXNUlHL1JjdDZQMTJ2T282cHBHSjdCR0FiR0JSeXBLWEE0VXVBZE05QjZNWXc5ZFFONDhmMDIxSHFHRVJyWFVEQXZHNnR2dWRvMWMyYnV2aWMyN2JxUkhTTUl4cFEySnduRTQvcGtzZjMrdWJLNTZSbFpaU1hMQyt4NU9VNkVvM0g4KzhRRkhHZ1pockNxc0twV1JLTWFmS05CZUFmSE1EQVlRQ0F3RG8wTXF2Uk10MWp4SGhGNXE3b1RvOEVvM0s1MHJGNjUyRDdkblZQNndLTXY1RXNTSkxvZVR5S2c2NU9oZHpwbmJ2OWUwUngzenN4TWhNSWEzaVN2TDR4cVVPMnFCQmtjRGlBbnhjRGFwZGw0YkUwK25yaTlBR3VMWnNKbGpjUG5ENEZLQWFyTmlwN2hHRjdlMXc0L2tYQm1PYkRpK3Z6cGVWZk1lOE5NeFc4ZldtbVoydFBXalZ2MjNubmxOMmFWL25SdEVhaTRzUFBJZWZSVGVPMEVEa1hBTnh6RTZtdHlzSGlPZThyRUVGQW9nTTN0dzNTbUcybnBEbWh4eUVqbE9WWGN2Mm9lcFVyRnJvb3pPTmZhdG1IenhnMWxBRFJTUTBrbVlMT2xQblhEZFhOQjlZTzZ0aEYwRGthNGdhUlhZMk1SRk9Ta1l0R2M2VENFakNNcXF0dEFsUThoTExRbXNHaWVHOFg1MHhBS2FxQkZHZDRPYnhqSFdyd0lSelFzdTM0K1VsT2R2ek9qd0xpSzJYSy8yYmhqMlF4Myt2elpsMDFIaURZZk9PdUZJQkRPanFZWkdBL0ZVTHdvbSsxQ1VZQytvU0NxNm5weDRlS1lCT002cGk3RThxV1hFVmlVSWtERWFaMWwvK2wrV3RNeFkzb21jbk95NXQ3N3l5M0x6ZlJQUm9BbTNNb0ZjN0tsOTIyOW94aUw2dEFGT08ra09wSFFrWlZtQjR1cVdORFNPUUtiellacGxOOHZCN1lGcVNrcWdSdEVYQ2ROdEZ5UXdEOXBHMEtFQ25yaDNGeWtwamx2NW9nblI4Q3FXS3pYWHA0N0RkVHJ0TmtuRCtvYWdjY1M0QmJWaW9wam5mQUhvampWY2hGVjVOWFZWem1SVHFRTWtZQzNxMFRzaTJGd1A4V0pSRnlMYzFTa3JaWU92MHlYMjUwRlJWR0wyQS9HVnMwSWtPY0wzYTRNMmI4OUErTWNVdW1KWXJVQXVnVUtjVzNxamVDVDNaOUt6ckc0anR1K2V5WFBXSXFFQXRXcW9IOG9oQjNWSFhUR0txTm02RUtDQ2dObzd4MURqTll5MGxLWWJMNVpBNnBaQTNwY3oySnZBcFJiVDVjUHJ1d3NtVy9vQ25tVUNLK0ZRRklVaC9SczRXVVp5SjZlVHVCV3FBcFFYdTNCL3ZxTFpERkY3aGVHa0MrNXVNNnF3KzhMdzVBT0tUejRNcE9Ma01YQ214SkRLWTVvV0lPM0w0QllOTTZmdVFpNUxXVllhZTRuMnN1VmhoVDJYTEdnOUdBckttdTlFaHdDQkNqa2NOTTVEWlRDOFVDVUl5WFRvZkc2T1hlU2lwQVBCSUtocUF4OVJxcUtTRGdtU1l3SFkwU0FpTERHNG14QTdtbnM5R1BJTnc1UHR3OGYxbnRoczlzWWdNQVpPQzRKeENJeGhBSVI2VVJtdWlvTFBFUVlaRzhNQ1JFcS8yT05SV01lNzlEb2QyeTJGTXpJc21QUVR4c0pjTWdib0psdlIxcW1IVmJLTFlzQkF4ZEhEVHk2dFo0TFRLWkJFRERka2hxeWFLTVJJaHZWZUkxRGp1eXNGRW5RNXh1ajlXZzdtMG1PZ0JHSmhPbzZ1Z2FoVXRGOWM1NkxpNGNQeWx5R2lmV3dONGdSbXYzQjBRZ2k0M0ZFSXByMFV0UGpDRlBLb3BTdVVEQ0NnRCtDRU8zUjZEbVRNL1JFU3hiTWRrcDcvVjRmN1EvV0E5RE5DTEFZZnQ5QVRWMUR4OE5MbDh5aGFlZUNYZTJTQUxES0RtQmp4RndualpOUkhWZmxwV0g5RHdyNE1YYnViMFY3VHhBV1JURm5BaE9YMHhHNmdOMm1vSENCVzZiZzAzTTk4STk0RDVzRWxJa1VHSHQyYmp6YzBkbmY0UjN3eWVKYXNUVHhHalpZRFIyQzFKQkdEVmtUdjFwZmlBVlh1bkIxL2t3OGVRKy9PelFKS09TWmliM2NBWFJ1UmVFc2FiTzdad0JkM1gxZEgreDk0U01BOFdRQ3pFYnorZnFmcVhqL05GSWROaXdyek1Vc3R6MUJJQzVUSVVrSTJkY0cwbE5VT0tsdGJkeFc4aGtTNEVMV0FwT1ErL0xjRHR4QXR1Z1doNDgxd2pmVSt4eUFDR01tMTRCZ0FwV2xHOHRiMjd2cjJqdjY1RFM3cHlRZjZRNGxVZG1Kd1NMemFGRXNlSFo3SFliOVlWYSs1eldPamlTamM5NlpwTU9LbjVVc2dFTFBHcHJiMGRYVjIvakIzczNsQUdLa2hoa0IvUGorbDh3b1JMcmE2aDhwcXpqcUM0ZkN5RXl6NGVIYkM5Z0wyZE9HTGxXeWJXb2Z4bDJQNzVmYTJEWU1Bd3hzN3RGeHVUc1Z2NkN6V1drcSt2dUdVUE5SdmIrajdjd2pBTVlud2c4ekF2S1FHWVdUaDNhMG5PODhkOSsyWGRYYXdLQVB6blE3SGx4VGdGdUtjcUdxRE1MNVpUZ0xlYVpJaGVEd0N3bXNXb0diaS9Kdy85cUZjR2JZWmQ3TDl4elJ1anFiSDJ5bzNkTUVJTXFRdC8xa2t6QUpKQXlTbUZFNFZQWHFoMjJmTjZ6ZjhhK2FVVTk3ajN3ZkxQOVdIaDVidndTM0ZsK0IrWGswaHAwcFJDWU9HdUhJZGptUVQ2T1puL0VlM3NzVHNyRzVBN3ZMYXdMdG5yTWJUbjYwN2FEcHZXQXhkTENvcE5LckpJbnp4cU1IWHordytKcVNsZUZ3NlBYOHViT1hYSGR0QVhKejNiaCtjYlpVOGVXWG9lVGZVbktodDNjUXgwNDBvck96cDZuRDgvRUQ1eG8vUEFjZ1JLcVpJRndyazdKbS9WOHY5WU9FeWFXVFppLzcva01QM2JydTZlNTdIM2xOYkhweHI5aTFwMWE4VzFVdmpwN3VrRnBPOTZVVnA4UmZ0bFNLRFErK0xFcnUvR04zOFkzM2NiNW5rV2FTMmt5N0pzNnFPNTRDaTJxbXdCUkJZaUV4MDBFYVAzemcxUjBBM3IybWVGMVJWMmZlS3Jzam94aUFRMVh0K2VBQkZZKzFBU0ljRFFjLzlnMzNIRHg3cXZ3MFI5RTh6N2FtL2tRVGpHbkdyZVN1cCtVcmRLcThWL2FrR1ZkbGdxd3RTYTNKbzV4QkpzQmlFNkhXVGVCVlAvcERBcGk5dDB4Y0JYQnd6NTlnd2Y4bmxxU3JrblJORnNPY3FxYVRVcjlDL2d0V0tqbW8rclhpc2dBQUFBQkpSVTVFcmtKZ2dnPT0pIG5vLXJlcGVhdH0uaW1hZ2VpbmZve2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFDM1JGV0hSVWFYUnNaUUJKYm1adk8yMFNMWVlBQUFsYVNVUkJWSGhlalZjSmtGVFZGVDIvLys5bG1LVnRCb1p4SUpvYTlnS0NSRWNTcVJCQWhSQ3hGT05HQWdWVkd0eFNtcXFZeW00TWljR3RSTndDeG9pUlJWQmswMUZXMmJkeEFneU1BajA0SzhQUU04ejA5RGJkL2JlWGU5L3ZicnVVS3IxZGQ5N3YxKy9kYys2NTk3M3VVWVFReURkRlVmQXQ3WElMQmI3QnZvYkhFNnMyMThIT1JSUVEyV2RiWkdZVXpMOWpncElEL21ZQ2N2elBlNThLQ0JtUEJ5Z1pBZ0xPeEMvdm5RZ05aSlp0WS83c0NaZFAwNUZFK2l2LzNUM083U21ZN1ZKZE55bEM4ZEZINDRWQ0FMWjlrZ0NTbG1Yc1NzUWlteDUvOEphVERISGZYVlYySnV1dktiTnN6ZUdjSkhqenZWbzU1anRaRmxoOWJkV0JPMTlmVjNOMjdZZDE0dE82TnRFZWlvcXVuampoMnV6eXVmMWlSQnc5MFNwV2J6a3Uvclg2WVBERk4zYk5BZURtL1ZtbDgvMlZ0dzhneCt1TmRUV1hBM2M5L2NxV3ltV3JEeC9ac3ZOemNZRkFzOGFncG1VTHc3U0VibGcwc3R2Q29qa3lXaHNSbTdhZkVpK3QySGYwOS85WU1SeVFTcnZ5TVphdTJKc3Z4NUd2Z3F2UEw5dDZFOG5VYytwTVJ3WlVpTFJ1aXVENXFQajRXSWRZZTZCTlBMczVLQlp2T2l2ZTN0TWlOaHcrTCtxKzZCSFJ1QzUwM1pRa1QzeCtRYno4MXQ2ZUo1OWZQNFBWeUNmeHdyOTNnODFGRGxxY1gyL1hzNjk5TlBXS1FLRDYxbW1qQTJOSGxvT3lSWDFMTDVidmFrSDF5VzRFdTNSMDlnbjRDcnp3K2J3SXhXeWN2WmpFeHRwT0xQMndBVWVEM1VqMEdSZzlyQXkzVC85ZVlPREE4aTEvV3J6bVJrNk1JQmhUeHN3Uk1FMHIxMnhQUExkMmFHRlJ5ZHBaVTBkN0tnYjVrVXliZVBmZ2VXeXQ3NFpRTmJnOUdsVE5CVVZWSURnV2JYT3A1SnJ6bWFXbytJQ0l2TG16Q1pGNEdxV0JRdHcrWTV5bmYrbWcxUS85NXNVUkdSS0taWmxnMHh3MlZrNTZ2My9nV3orcXFpd2ROTEFZaWFTQkZidGIwV2NCYnE4R1FXQ21FTEFOZ1RHRGZSZzdwQmdGYmhXbldxUFlINHpJNHdvaXBkRmNXN2VPbDdlY3cwTzNWTUpmNHNPMEcwYjA3K3RMdmdHQWxiRC84TWdNbGtEa24ybDEwWkxOZDMvM3FpdFh6N3VqQ3RSY1dMVzNCUjBrcjRjeWMya0tJQUJxT053MDZncU11Y29QQVFIVjVZS3dCUmE5ZXdZZW53ZTJhY09paE5LNmpYVGFRSVZmd3dNemgxR3BOS3paOENsT24yMVk4TUtpQldzQkdFekVsVS9BN1M1NGN2TEVvYUQrUVcxREQ1cTZVb0FpUUEwdUNWSERJeDVMWW5EQUI0VmViZ0wzVWpuT3R2VElVcGtFenJVMURBRUlJZXZiR0VwaWYzMEl5WlNCS1RjTVIwR0IveS9aaGdUcmxUMXl2MTIwY3NxQTBzTGhWdy91andRdDNubzhKQ1huNmhnR0JUWUZERWtDMkZIYkpzc1dKT0IzdHAvQjBrMmZreElLVElQQVdRR2JSeUhMeGZaeFRRY1JzRENnZnpIS0I1VU12Zit4SlZNekJLQmxGYUFiYnNiSXlqS1pmVU43QkxHMFJWMnVFcUF0VlZBc0JXREpWUmRxV3hMWThkSkJHQ2tUTGxLaHZLeFlaczh2WVRNQkFac0lXcFp6NU9JRS9yK0dTNWc0YWlCR0RTMUhzS0hsWmdBN3ljMk1BcHlBZXYyUThpdEFaNTBXaCtWR2l6UFNMWm01YnByT1NHN1I4L1hEU3ZIck84ZGcyZU9UOGN4OTF5SktIVzlhcHV3UjA1RGw0SkhKeUZqMWpiMUV5RVpwYVFtUjFxb3l5U3M1QlNqelVhV0JJbmwrMnpyN1NBbXduUEtJd2NsZTltd2lrY1NEMHl0Uk9jU2Z2Y3ZoMWx6UVUwU0FtekNidlJ5RkJCVTJjSzQ5QnAzbWkvcDVJYUNNK0ZvUFdLWlZVdGpQZ3hTeERqYUhPVnQ1UCtnNk41WEo5V1VWcEt3TjUzdGhPMzBHRzQ1Wm5MSE1ucHo3d01nMHBIUUxvVXNKMkRJaEYxOTh4ZmtFMkpUTVhVQ2dKdEpKQTZFTFVlamMyU3c5ZzNOZ0dVREZPanFlM05VMk14QmdZN0FjdU9HUWNVanBGdnFpYVNoQ1NGVU1ucy9kTzBDV0FHK0l4aE5wS1gxUmdZWlVVcGNrK3VLNm93Qzc3dFJVZGFub2phVUFPUFZsczNMQXRJWmNxcGZTa1lpbTVGeHhvU2JMa3lBTWloZURZNElKQ0hZOXJRZERseUx5ZkE4b29WcXlkQVI0S1JSRnVDdUJGR1ZzR0U1R3BtMHhzS3l0N2JTQmt6RVRwSkdWUzFCVHhva2taY3VTbzZ6RUs4bUh3ekVZNmZRNUFIYStBbllxbGFodGJPNkNwaXE0WmxpQW00YzN5bHN1U2F5N1EzSDBkTVVRNjAwaTFhZlRPdFdKSUp4YXU0UkFMSjVDdERlRlJDUUZnd2d6U1U2RVNZeSsyaS9qZFlUQ1NDYmp4MWcwY3BFajBCdnUzRlY3b2hGZXJ4dGpLd1B3YUlETldUblo4bVppYmlBZTdVT1JLaER3K3poejZiR2tnYXRLdlVoU3hsd3FXMGp5emdrZzk3aGRtREN5VkpiZ3M5TnQ2TzBKN2NrbklKakF4bFdMOWpRMmRUU0dPc1B3MG9acDMzZStobTEySmtIT0FRekR3Sy91SFo4QkYxQmNDbndlRlU4cy9JRzhIWVhjSTlmeVhsbXVhUk91bERGYjJ6clIzSHFoZWZ2bUZ6OEJZREsyeG44eWJJeHd1T1BwRFIvV3ZENzM3aDlqeW9SeUhBOWVRa2QzR3JBVkNRVFlVQVJRVC9PVjVTVVlQS2dZYk0wWElxamUzeVE3M1JZY1NtRVNrbUJGcVErVEtSWTM5NTc5ZFFoZmFuOE9RSW94di9vTGw4a1V6Vm00WlB2OGUyKzhibUJaZjBUaU9wYXMrd3l4UHI1eUZmQkxLTTdsWXBrT0FNZ1ZWWUhxMHB4THk1bVNKU2d1MFBEWVBXUGhML0xnVlAwWCtPampRM1ViVnYxeE9vQUl1Wjc3T3Y3NUF5OWh6ZkpIdVJ6ZUgwNmRkODNJTVJPcjc1ODNJK0F0OENFY1MrT3Q2Z2EwZHlYaFVoU0hxaHh5L0owZWtjanlqWHcvWkVBL3pQdnBNQVNLdmJoNHNRZnIxdS91UFYyLy83WVRSemR5QXliSjdWd1RjcTB5cFRBTzcxNVozOUowZXVHS05UdU56cTR3L0lVZVBEeDdOS1pYbFVQVE9IdHVUSnVkbjZYYjBvVWNOUlc0dWFvQ0Q5d3hpak9YZFYrL2NhL1IzSFRxWVFJL0NTRE5rTGY5WXJISS8wM0lyTE85a05wZC9lcU9oak1uNXE1OFoxY2tlSzVOU2p2MTJncjhidTU0M0RycE94aGVVWVF5djVmQW5YTmZGdkJoeE9BaS9velh5TFVhbGF6dVZDTmx2aXQ2TG5oOHdlRlBWbXdEMEVkdUNqYWJvWnk2eXl6eXpPU0YrN1l0M3pydXVsa3prc25FOGhGRHJ4NC84ZnJSS0M4dnhRM2p5cVJMdXRudktHVGZzQW0wdDNkaC84RTZORFcxbld3TUhucm9kTjJPMHdBUzVBWWNrNmNrWjdQblBuTzVmMGlZWENGNTJaU2ZQUExJclhPZWFyMy8wZGZFNHFXYnhacU5SOFg3MWNmRXZwcEc2ZXZwZWZXR0krS2ZTemFKQlErL0xHYmQvYmZXU1RjdWZCVEFsZVRGNU81czNDek96THVlekNrZ1M1QTFRYWFRWmN0QmJ1N1ordXBLQU85Zk4ybE9WWE5UeFV5UHIyZ1NBSittZVVhd0ZJYXBOd0FpbVU3R0Q0VzcyN1lkUDdLK2hsWE03dWRZMmRnNUhNYk02amJybnFlZ0tBSmZ0US9XL2ptcnF5dEQxcDNuYXY1VnppQVpNRDBqdFpWeHpQelpYeDFnemw3SmpBTFl0dkh2VVBEdFRNa2JYWGxqdmpFSklVZkhoUFJ2c1A4RFlsUnYvZlk1N3FrQUFBQUFTVVZPUks1Q1lJST0pIG5vLXJlcGVhdH0uaW1hZ2V3YXJuaW5ne2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUVuMGxFUVZSNDJ1MlVlVXhVVnhURzI2WlN4RzVKLzJuYXRQR1BpbEMyTW1VWENhVjJzV2thR2hjc0ZhdXlsUllKWUNvU1VCQVlVd2JDVWtaQW5BSlNsckREc0JSa0dSZ1lnWTZBRExLRFVnakRPc08rVTc3ZSs5SmFWTkJhR1UwVGIvSkx2bnpuM0hmT08yZmVQQVBnaWZMMC9IK1BLTUw4dGZxTEZtY0pwMHFEVFZVZWQvM254SkVXbDNxdStLSDcxek1nbWt1OXgxWDgyUktPNmE3NktJdVY1ZWt1TEU5M2dtcnEwWmpDcTRjNmFhdlVSWmkzOVlzaXNDUVRNL1JWaGVFM3JuazcxMWxubThMZnZqcGtkMkJyaGd1V0p5UllISzZrTUUyMFpqaUR4RUlVT29YaUFHUEQybEN6NWZuaGVpd09DckEwSXFJUVhZRTVxUWdrdGxMa2IyeW1rQ2FDam11b1ZIRk1XM29GWVZnY3FjWENlQWNFSlh3S294ZElFN2ZLT0tnTzJ0M0pkZEorY2ROSEwyQ2JCRXFTbmJBODNvNkZJUkhpZU5Fd01qOUVvWnJ4RnFXVmtDUTVnZVNHYitvVThyME5ESVhuVFpibmhwc3cxMWVJZVdrRm9yaGhNREE3eUJCOUlaeng1bnI1bU9rVGdPU3U1SG5wZjdBcFRmaGFxVzR0OHpWcTZiN0N3ZUpvSTJhN1V6SC9leEZ5MHk5RHozUS9oV3JxMFJocEloOWRoUUVvUDJmY3piWFRmT21SUjEva3BjOXVpTFVsMzNzL1pqcFNDRW1ZN2NtR1dKZ0xsc21YRktxcFIyTk16aHhwcGlIT0RzWGUrby8yQjVYaHh0SXI4VEpZbWgxb0pHOVdpT21XZUlhWnRpUU10QXVoWS9nRmhXcnEvUlB2U01iTXJXS1F1MzlrdXJNKy9FK3JPUG5aZHVYQ0g5Nlh0T2Y2WVZIV2hzbm1TNWlVeE54bVlVZ01sdEhuRktyWHhwamM2WTVVdEdlZlJkRXB2WnZoTnVvdlAvVG9jMTExMmJVWERqT2puN29SajhuR0MzY3czMStKanovZFI2R2FlbmZTZEJFem5WbW9pN1FCMzQwVjlWQ3JTSEhVMGl0dzFWMmE2Q3dtNDh5QXZJYU5pV3NobUtnUHY4MU1WdzU4dlR3b1ZLK04wVng2aCtBUGVTTVA1Rm1yYVU3YWUvN1ZLbHozdksyYzg3Mk81SHFDQytZSGFqRmE3bzdSVWxlQ0c4WUVIcEFKejBBdThzZmtkUjc1NFJVUUNzbmI4cWhIWXpTSHlXWHVsTGxEZnBXTnBzdE80RHUvMXh0cXBmcktBMGVmNnFEcEwrUllrdUkxNUtFQkdDbis3aDVrbGQ1b3JraUE5ZGYyc0xhMnA1cDY2K2JTUnNiRllSQUdXU0xkVVN2bXZxdUlQNkt1bSttZ3RUUmFuNFNwcG5nTUY5aXZCeGx6Rkp3ZEhmQXVheStGYXVwdGxFK2FjTWRZWFFTeUhMUldFNDlxZkxMdUtrNWF2S1dVZWt5alVSempRSGFhajZIQ2J6SEkvMlpkWkZjRDRlOTVBdHQzR2pQNG5UNUJQUnBibjd4akdCVjRvb0Zuai9Uam1uM0JsdSs4ZXMvb0V3K3IrWmFmMjB1S0YyQ3MwZ2ZTYk91TklBKzBoYnc1RGRFY0R3cWpCL050NzMrSGZ4U3k2dk1vODdGQXNvMDY3KzVWUEo5aW85N1RWLzRUcHBvVE1WYkZoalRyRUFZeURteE1waFZHeWs1VHFLYmVBeG5LczhkTnZpZG9MVkp6eTlvR2xPS3NWRXRxUWc1Z1hCd0plVjA0WkRYQmtJbCtaSkRYaGpEK1JHTXNKaVcvWUtvbERkUHQyWmh1eThKVWF3WW1iNlNRTHlFQjQ5ZWl3TndWY1RCYTRZT1JVZzhNRjd0aUtOOFIwcHdqa0daYVF4andFV0lQcWhhUm1pK3NiV0NMeTY0M3pIN2V2Nk10K2F1ZHF3UW9pRlhldmgzTmRnYXY2OTg5QWJxUGJZUTNDV29FRFFXaDlsY05sZlUrUjJvb0ViWXFFR1ZhZzZuMTlQeDlBRHhSL2dScWFqVjNJZVZlWkFBQUFBQkpSVTVFcmtKZ2dnPT0pIG5vLXJlcGVhdH0ubWVzc2FnLWJveC1jb250ZW50e2hlaWdodDphdXRvO2xlZnQ6NjVweDtyaWdodDowO3dvcmQtd3JhcDpicmVhay13b3JkfS5zcGxpdHZlcnRpY2Fse2hlaWdodDoxMDAlfS5zcGxpdGhvcml6b250YWx7d2lkdGg6MTAwJX0uc3BsaXR0ZXJ2ZXJ0aWNhbHtoZWlnaHQ6MTAwJTt3aWR0aDoxMHB4fS5zcGxpdHRlcmhvcml6b250YWx7aGVpZ2h0OjEycHg7d2lkdGg6MTAwJX0uY29uc29sZS1ib2R5e2NvbG9yOiNmZmYhaW1wb3J0YW50O2hlaWdodDphdXRvO3dpZHRoOjEwMCU7d29yZC13cmFwOmJyZWFrLXdvcmR9LmNvbnNvbGUtcGFyYXstbW96LXVzZXItc2VsZWN0OnRleHQ7LW1zLXVzZXItc2VsZWN0OnRleHQ7LXdlYmtpdC11c2VyLXNlbGVjdDp0ZXh0O21hcmdpbjo0cHggNXB4IDNweDt1c2VyLXNlbGVjdDp0ZXh0fS5jb25zb2xlLXBhcmE6OnNlbGVjdGlvbntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjk5NikhaW1wb3J0YW50O2NvbG9yOiMwMDAhaW1wb3J0YW50fS5jb25zb2xlLXBhcmE6Oi1tb3otc2VsZWN0aW9ue2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuOTk2KSFpbXBvcnRhbnQ7Y29sb3I6IzAwMCFpbXBvcnRhbnR9LnRvb2wtdGlwLWhlYWRpbmd7Zm9udC13ZWlnaHQ6NzAwO21hcmdpbjo0cHh9LnRvb2wtdGlwLWJvZHl7bWFyZ2luOjRweH0uYWpheC1sb2FkaW5nLXNjcmVlbntiYWNrZ3JvdW5kOnVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJqYkdGemN6MGliR1J6TFhOd2FXNXVaWElpSUhkcFpIUm9QU0l5TURCd2VDSWdJR2hsYVdkb2REMGlNakF3Y0hnaUlDQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCMmFXVjNRbTk0UFNJd0lEQWdNVEF3SURFd01DSWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcFpGbE5hV1FpSUhOMGVXeGxQU0ppWVdOclozSnZkVzVrT2lCdWIyNWxPeUkrUEdjZ2RISmhibk5tYjNKdFBTSnliM1JoZEdVb01DQTFNQ0ExTUNraVBpQWdQSEpsWTNRZ2VEMGlORGNpSUhrOUlqSTBJaUJ5ZUQwaU9TNDBJaUJ5ZVQwaU5DNDRJaUIzYVdSMGFEMGlOaUlnYUdWcFoyaDBQU0l4TWlJZ1ptbHNiRDBpSXpBd05UVmhOU0krSUNBZ0lEeGhibWx0WVhSbElHRjBkSEpwWW5WMFpVNWhiV1U5SW05d1lXTnBkSGtpSUhaaGJIVmxjejBpTVRzd0lpQjBhVzFsY3owaU1Ec3hJaUJrZFhJOUlqRnpJaUJpWldkcGJqMGlMVEF1T1RFMk5qWTJOalkyTmpZMk5qWTJObk1pSUhKbGNHVmhkRU52ZFc1MFBTSnBibVJsWm1sdWFYUmxJajQ4TDJGdWFXMWhkR1UrSUNBOEwzSmxZM1ErUEM5blBqeG5JSFJ5WVc1elptOXliVDBpY205MFlYUmxLRE13SURVd0lEVXdLU0krSUNBOGNtVmpkQ0I0UFNJME55SWdlVDBpTWpRaUlISjRQU0k1TGpRaUlISjVQU0kwTGpnaUlIZHBaSFJvUFNJMklpQm9aV2xuYUhROUlqRXlJaUJtYVd4c1BTSWpNREExTldFMUlqNGdJQ0FnUEdGdWFXMWhkR1VnWVhSMGNtbGlkWFJsVG1GdFpUMGliM0JoWTJsMGVTSWdkbUZzZFdWelBTSXhPekFpSUhScGJXVnpQU0l3T3pFaUlHUjFjajBpTVhNaUlHSmxaMmx1UFNJdE1DNDRNek16TXpNek16TXpNek16TXpNMGN5SWdjbVZ3WldGMFEyOTFiblE5SW1sdVpHVm1hVzVwZEdVaVBqd3ZZVzVwYldGMFpUNGdJRHd2Y21WamRENDhMMmMrUEdjZ2RISmhibk5tYjNKdFBTSnliM1JoZEdVb05qQWdOVEFnTlRBcElqNGdJRHh5WldOMElIZzlJalEzSWlCNVBTSXlOQ0lnY25nOUlqa3VOQ0lnY25rOUlqUXVPQ0lnZDJsa2RHZzlJallpSUdobGFXZG9kRDBpTVRJaUlHWnBiR3c5SWlNd01EVTFZVFVpUGlBZ0lDQThZVzVwYldGMFpTQmhkSFJ5YVdKMWRHVk9ZVzFsUFNKdmNHRmphWFI1SWlCMllXeDFaWE05SWpFN01DSWdkR2x0WlhNOUlqQTdNU0lnWkhWeVBTSXhjeUlnWW1WbmFXNDlJaTB3TGpjMWN5SWdjbVZ3WldGMFEyOTFiblE5SW1sdVpHVm1hVzVwZEdVaVBqd3ZZVzVwYldGMFpUNGdJRHd2Y21WamRENDhMMmMrUEdjZ2RISmhibk5tYjNKdFBTSnliM1JoZEdVb09UQWdOVEFnTlRBcElqNGdJRHh5WldOMElIZzlJalEzSWlCNVBTSXlOQ0lnY25nOUlqa3VOQ0lnY25rOUlqUXVPQ0lnZDJsa2RHZzlJallpSUdobGFXZG9kRDBpTVRJaUlHWnBiR3c5SWlNd01EVTFZVFVpUGlBZ0lDQThZVzVwYldGMFpTQmhkSFJ5YVdKMWRHVk9ZVzFsUFNKdmNHRmphWFI1SWlCMllXeDFaWE05SWpFN01DSWdkR2x0WlhNOUlqQTdNU0lnWkhWeVBTSXhjeUlnWW1WbmFXNDlJaTB3TGpZMk5qWTJOalkyTmpZMk5qWTJOalp6SWlCeVpYQmxZWFJEYjNWdWREMGlhVzVrWldacGJtbDBaU0krUEM5aGJtbHRZWFJsUGlBZ1BDOXlaV04wUGp3dlp6NDhaeUIwY21GdWMyWnZjbTA5SW5KdmRHRjBaU2d4TWpBZ05UQWdOVEFwSWo0Z0lEeHlaV04wSUhnOUlqUTNJaUI1UFNJeU5DSWdjbmc5SWprdU5DSWdjbms5SWpRdU9DSWdkMmxrZEdnOUlqWWlJR2hsYVdkb2REMGlNVElpSUdacGJHdzlJaU13TURVMVlUVWlQaUFnSUNBOFlXNXBiV0YwWlNCaGRIUnlhV0oxZEdWT1lXMWxQU0p2Y0dGamFYUjVJaUIyWVd4MVpYTTlJakU3TUNJZ2RHbHRaWE05SWpBN01TSWdaSFZ5UFNJeGN5SWdZbVZuYVc0OUlpMHdMalU0TXpNek16TXpNek16TXpNek16UnpJaUJ5WlhCbFlYUkRiM1Z1ZEQwaWFXNWtaV1pwYm1sMFpTSStQQzloYm1sdFlYUmxQaUFnUEM5eVpXTjBQand2Wno0OFp5QjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3hOVEFnTlRBZ05UQXBJajRnSUR4eVpXTjBJSGc5SWpRM0lpQjVQU0l5TkNJZ2NuZzlJamt1TkNJZ2NuazlJalF1T0NJZ2QybGtkR2c5SWpZaUlHaGxhV2RvZEQwaU1USWlJR1pwYkd3OUlpTXdNRFUxWVRVaVBpQWdJQ0E4WVc1cGJXRjBaU0JoZEhSeWFXSjFkR1ZPWVcxbFBTSnZjR0ZqYVhSNUlpQjJZV3gxWlhNOUlqRTdNQ0lnZEdsdFpYTTlJakE3TVNJZ1pIVnlQU0l4Y3lJZ1ltVm5hVzQ5SWkwd0xqVnpJaUJ5WlhCbFlYUkRiM1Z1ZEQwaWFXNWtaV1pwYm1sMFpTSStQQzloYm1sdFlYUmxQaUFnUEM5eVpXTjBQand2Wno0OFp5QjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3hPREFnTlRBZ05UQXBJajRnSUR4eVpXTjBJSGc5SWpRM0lpQjVQU0l5TkNJZ2NuZzlJamt1TkNJZ2NuazlJalF1T0NJZ2QybGtkR2c5SWpZaUlHaGxhV2RvZEQwaU1USWlJR1pwYkd3OUlpTXdNRFUxWVRVaVBpQWdJQ0E4WVc1cGJXRjBaU0JoZEhSeWFXSjFkR1ZPWVcxbFBTSnZjR0ZqYVhSNUlpQjJZV3gxWlhNOUlqRTdNQ0lnZEdsdFpYTTlJakE3TVNJZ1pIVnlQU0l4Y3lJZ1ltVm5hVzQ5SWkwd0xqUXhOalkyTmpZMk5qWTJOalkyTmpkeklpQnlaWEJsWVhSRGIzVnVkRDBpYVc1a1pXWnBibWwwWlNJK1BDOWhibWx0WVhSbFBpQWdQQzl5WldOMFBqd3ZaejQ4WnlCMGNtRnVjMlp2Y20wOUluSnZkR0YwWlNneU1UQWdOVEFnTlRBcElqNGdJRHh5WldOMElIZzlJalEzSWlCNVBTSXlOQ0lnY25nOUlqa3VOQ0lnY25rOUlqUXVPQ0lnZDJsa2RHZzlJallpSUdobGFXZG9kRDBpTVRJaUlHWnBiR3c5SWlNd01EVTFZVFVpUGlBZ0lDQThZVzVwYldGMFpTQmhkSFJ5YVdKMWRHVk9ZVzFsUFNKdmNHRmphWFI1SWlCMllXeDFaWE05SWpFN01DSWdkR2x0WlhNOUlqQTdNU0lnWkhWeVBTSXhjeUlnWW1WbmFXNDlJaTB3TGpNek16TXpNek16TXpNek16TXpNek56SWlCeVpYQmxZWFJEYjNWdWREMGlhVzVrWldacGJtbDBaU0krUEM5aGJtbHRZWFJsUGlBZ1BDOXlaV04wUGp3dlp6NDhaeUIwY21GdWMyWnZjbTA5SW5KdmRHRjBaU2d5TkRBZ05UQWdOVEFwSWo0Z0lEeHlaV04wSUhnOUlqUTNJaUI1UFNJeU5DSWdjbmc5SWprdU5DSWdjbms5SWpRdU9DSWdkMmxrZEdnOUlqWWlJR2hsYVdkb2REMGlNVElpSUdacGJHdzlJaU13TURVMVlUVWlQaUFnSUNBOFlXNXBiV0YwWlNCaGRIUnlhV0oxZEdWT1lXMWxQU0p2Y0dGamFYUjVJaUIyWVd4MVpYTTlJakU3TUNJZ2RHbHRaWE05SWpBN01TSWdaSFZ5UFNJeGN5SWdZbVZuYVc0OUlpMHdMakkxY3lJZ2NtVndaV0YwUTI5MWJuUTlJbWx1WkdWbWFXNXBkR1VpUGp3dllXNXBiV0YwWlQ0Z0lEd3ZjbVZqZEQ0OEwyYytQR2NnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTWpjd0lEVXdJRFV3S1NJK0lDQThjbVZqZENCNFBTSTBOeUlnZVQwaU1qUWlJSEo0UFNJNUxqUWlJSEo1UFNJMExqZ2lJSGRwWkhSb1BTSTJJaUJvWldsbmFIUTlJakV5SWlCbWFXeHNQU0lqTURBMU5XRTFJajRnSUNBZ1BHRnVhVzFoZEdVZ1lYUjBjbWxpZFhSbFRtRnRaVDBpYjNCaFkybDBlU0lnZG1Gc2RXVnpQU0l4T3pBaUlIUnBiV1Z6UFNJd096RWlJR1IxY2owaU1YTWlJR0psWjJsdVBTSXRNQzR4TmpZMk5qWTJOalkyTmpZMk5qWTJObk1pSUhKbGNHVmhkRU52ZFc1MFBTSnBibVJsWm1sdWFYUmxJajQ4TDJGdWFXMWhkR1UrSUNBOEwzSmxZM1ErUEM5blBqeG5JSFJ5WVc1elptOXliVDBpY205MFlYUmxLRE13TUNBMU1DQTFNQ2tpUGlBZ1BISmxZM1FnZUQwaU5EY2lJSGs5SWpJMElpQnllRDBpT1M0MElpQnllVDBpTkM0NElpQjNhV1IwYUQwaU5pSWdhR1ZwWjJoMFBTSXhNaUlnWm1sc2JEMGlJekF3TlRWaE5TSStJQ0FnSUR4aGJtbHRZWFJsSUdGMGRISnBZblYwWlU1aGJXVTlJbTl3WVdOcGRIa2lJSFpoYkhWbGN6MGlNVHN3SWlCMGFXMWxjejBpTURzeElpQmtkWEk5SWpGeklpQmlaV2RwYmowaUxUQXVNRGd6TXpNek16TXpNek16TXpNek16TnpJaUJ5WlhCbFlYUkRiM1Z1ZEQwaWFXNWtaV1pwYm1sMFpTSStQQzloYm1sdFlYUmxQaUFnUEM5eVpXTjBQand2Wno0OFp5QjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3pNekFnTlRBZ05UQXBJajRnSUR4eVpXTjBJSGc5SWpRM0lpQjVQU0l5TkNJZ2NuZzlJamt1TkNJZ2NuazlJalF1T0NJZ2QybGtkR2c5SWpZaUlHaGxhV2RvZEQwaU1USWlJR1pwYkd3OUlpTXdNRFUxWVRVaVBpQWdJQ0E4WVc1cGJXRjBaU0JoZEhSeWFXSjFkR1ZPWVcxbFBTSnZjR0ZqYVhSNUlpQjJZV3gxWlhNOUlqRTdNQ0lnZEdsdFpYTTlJakE3TVNJZ1pIVnlQU0l4Y3lJZ1ltVm5hVzQ5SWpCeklpQnlaWEJsWVhSRGIzVnVkRDBpYVc1a1pXWnBibWwwWlNJK1BDOWhibWx0WVhSbFBpQWdQQzl5WldOMFBqd3ZaejQ4TDNOMlp6ND0pIGNlbnRlciBuby1yZXBlYXR9bWFya3tiYWNrZ3JvdW5kLWNvbG9yOiNmZjA7Y29sb3I6IzAwMDtmb250LXdlaWdodDo3MDB9LmNvbnRyb2w6OnNlbGVjdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNDNUM1QzV9LmNvbnRyb2w6Oi1tb3otc2VsZWN0aW9ue2JhY2tncm91bmQtY29sb3I6I0M1QzVDNX0ucmliYm9uYnV0dG9uOmhvdmVyOm5vdCg6YWN0aXZlKTpub3QoLmRpc2FibGVkKXtmaWx0ZXI6YnJpZ2h0bmVzcyg5MCUpfS5yaWJib25idXR0b246YWN0aXZlOm5vdCguZGlzYWJsZWQpe2ZpbHRlcjpicmlnaHRuZXNzKDgwJSl9LnJpYmJvbmJ1dHRvbnNtYWxsOmhvdmVyOm5vdCg6YWN0aXZlKTpub3QoLmRpc2FibGVkKXtmaWx0ZXI6YnJpZ2h0bmVzcyg5MCUpfS5yaWJib25idXR0b25zbWFsbDphY3RpdmU6bm90KC5kaXNhYmxlZCl7ZmlsdGVyOmJyaWdodG5lc3MoODAlKX0uY2VsbHJvdy1zZWxlY3RlZDpob3ZlciwuY2VsbHJvdzpob3ZlciwuaGVhZGluZzpob3ZlciwuaW5wdXRjb250cm9sOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCgucG9wdXApLC5zaW1wbGVidXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCl7ZmlsdGVyOmJyaWdodG5lc3MoOTAlKX0udGFiY29udHJvbHBhZ2VoZWFkZXItY2xvc2VidXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojQ0NDO2JvcmRlcjoxcHggc29saWQgI0E2QTZBNjtjb2xvcjojMDAwfS5zaW1wbGVidXR0b246YWN0aXZlOm5vdCguZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6IzAwN2FjYztib3JkZXI6MXB4IHNvbGlkICMwMDdhY2M7Y29sb3I6I2ZmZn1Aa2V5ZnJhbWVzIENvbG9yRmxhc2h7ZnJvbXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9dG97YmFja2dyb3VuZC1jb2xvcjojMDA3YWNjfX0uZm9ybS1iYXNle2JvcmRlci1jb2xvcjojMDA3YWNjfS5mb3JtLWhlYWRpbmctYnV0dG9uOmhvdmVyOm5vdCguZm9ybS1oZWFkaW5nLWJ1dHRvbi1jbG9zZSl7YmFja2dyb3VuZC1jb2xvcjojMkE4QUQ0fS5mb3JtLWhlYWRpbmctYnV0dG9uOmFjdGl2ZTpub3QoLmZvcm0taGVhZGluZy1idXR0b24tY2xvc2Upe2JhY2tncm91bmQtY29sb3I6IzAxNUM5Rn0uZm9ybS1oZWFkaW5nLWJ1dHRvbi1jbG9zZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNFODExMjN9LmZvcm0taGVhZGluZy1idXR0b24tY2xvc2U6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I0YxNzA3QX0uY2VsbHJvd3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmNlbGxyb3c6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I0FFQUVBRSFpbXBvcnRhbnR9LmV2ZW57YmFja2dyb3VuZC1jb2xvcjojZjZmN2Y5IWltcG9ydGFudH0uaGVhZGluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNGMEYwRjA7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjQTZBNkE2IWltcG9ydGFudH0uaGVhZGluZzphY3RpdmV7ZmlsdGVyOmJyaWdodG5lc3MoODAlKX0uc3RhY2staXRlbS1hY3RpdmU6aG92ZXIsLnN0YWNrLWl0ZW06aG92ZXJ7ZmlsdGVyOmJyaWdodG5lc3MoOTAlKX0uaGVhZGluZy1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojRjBGMEYwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNBNkE2QTYhaW1wb3J0YW50fS5ncmlkLC5wcm9ncmVzc2JhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjQTZBNkE2fS5wcm9ncmVzc2JhcmJvZHl7YmFja2dyb3VuZC1jb2xvcjojMDA3YWNjfS5jb250ZXh0bWVudXtib3gtc2hhZG93OjAgMCA2M3B4IC0xN3B4IHJnYmEoMCwwLDAsLjc1KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjODA4NjhBfS5jb250ZXh0aXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNDRkNGQ0Z9LmNvbnRleHRpdGVtc2VwZXJhdG9ye2JhY2tncm91bmQtY29sb3I6I0I5QjlCOX0uZGlhbG9nYnV0dG9uc2VjdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNGMEYwRjB9LnNwbGl0Y29udHJvbHtib3JkZXI6MXB4IHNvbGlkICNBNkE2QTZ9LnNwbGl0dGVydmVydGljYWx7Ym9yZGVyLWxlZnQ6MXB4ICNDM0MzQzMgc29saWQ7Ym9yZGVyLXJpZ2h0OjFweCAjQzNDM0MzIHNvbGlkfS5zcGxpdHRlcmhvcml6b250YWx7Ym9yZGVyLWJvdHRvbToxcHggI0MzQzNDMyBzb2xpZDtib3JkZXItdG9wOjFweCAjQzNDM0MzIHNvbGlkfS5wcmltYXJ5OmhvdmVyLC5zcGxpdHRlcmhvcml6b250YWw6aG92ZXIsLnNwbGl0dGVydmVydGljYWw6aG92ZXJ7ZmlsdGVyOmJyaWdodG5lc3MoOTAlKTtjdXJzb3I6cG9pbnRlcn0udG9vbC10aXB7aGVpZ2h0OmF1dG87d2lkdGg6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjODA4NjhBO3RleHQtc2hhZG93Oi4ycHggLjJweCByZ2JhKDAsMCwwLC41KX0uZm9ybS1oZWFkaW5nLW1pbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyQThBRDR9LnNpbXBsZWJ1dHRvbi1hY3RpdmV7Ym9yZGVyOjFweCBzb2xpZCAjNzc3fS5wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwN2FjY30uc3RhY2staXRlbXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWJvdHRvbToxcHggI0M1QzVDNSBzb2xpZH0uc3RhY2staXRlbS1hY3RpdmV7b3V0bGluZTojMDAwIGRvdHRlZCAxcHghaW1wb3J0YW50O291dGxpbmUtb2Zmc2V0Oi0xcHg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEsMTE1LDE5OSwuMykhaW1wb3J0YW50fS5jZWxscm93LXNlbGVjdGVkLC5mb2N1c2Vkcm93OmhvdmVye291dGxpbmU6IzkyYzBlMCBzb2xpZCAxcHghaW1wb3J0YW50fS5zdGFjay1pdGVtOmhvdmVye2N1cnNvcjpwb2ludGVyfS5wcmludC1ib2R5e2JhY2tncm91bmQ6I2NjY31wYWdlOmZpcnN0LWNoaWxke21hcmdpbi10b3A6LjVjbX1wYWdle2JhY2tncm91bmQ6I2ZmZjtkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG8gLjVjbTtib3gtc2hhZG93OjAgMCAuNWNtIHJnYmEoMCwwLDAsLjUpfS5wYWdlLWZvY3VzZWR7Ym94LXNoYWRvdzowIDAgMmNtIHJnYmEoNjMsNzIsMjA0LC44KX1wYWdlW3NpemU9QTRde3dpZHRoOjIxY207aGVpZ2h0OjI5LjdjbX1wYWdlW3NpemU9QTRdW2xheW91dD1MYW5kc2NhcGVde3dpZHRoOjI5LjdjbTtoZWlnaHQ6MjFjbX1wYWdlW3NpemU9QTNde3dpZHRoOjI5LjdjbTtoZWlnaHQ6NDJjbX1wYWdlW3NpemU9QTNdW2xheW91dD1MYW5kc2NhcGVde3dpZHRoOjQyY207aGVpZ2h0OjI5LjdjbX1wYWdlW3NpemU9QTVde3dpZHRoOjE0LjhjbTtoZWlnaHQ6MjFjbX1wYWdlW3NpemU9QTVdW2xheW91dD1MYW5kc2NhcGVde3dpZHRoOjIxY207aGVpZ2h0OjE0LjhjbX1AbWVkaWEgcHJpbnR7LnByaW50LWJvZHkscGFnZXttYXJnaW46MDtib3gtc2hhZG93OjB9fTpyb290ey0tcHJpbWFyeTojNGI4MmU1fS5ncmlke2JvcmRlcjoxcHggc29saWQgI2Q0ZDRkNCFpbXBvcnRhbnR9LnNpbXBsZWJ1dHRvbi1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojOTJjMGUwIWltcG9ydGFudDtjb2xvcjppbml0aWFsIWltcG9ydGFudDtmaWx0ZXI6dW5zZXQhaW1wb3J0YW50fS50YWJjb250cm9scGFnZWhlYWRlci1hY3RpdmV7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDp0aGluO2xpbmUtaGVpZ2h0OjIxcHg7aGVpZ2h0OjIzcHh9LnByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmltYXJ5KSFpbXBvcnRhbnR9LmZvcm0tYmFzZXtib3JkZXItY29sb3I6dmFyKC0tcHJpbWFyeSl9Knstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkfS5yaWJib25wYWdlaGVhZGVyLWFjdGl2ZXtjb2xvcjojMDA3MmM2O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZmZmO2JvcmRlci10b3A6MXB4IHNvbGlkICNkNGQ0ZDQ7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNkNGQ0ZDQ7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZDRkNGQ0O3otaW5kZXg6MX0uY2VsbHJvdy1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNiMWQ2ZjAhaW1wb3J0YW50fS5jZWxscm93OmhvdmVyLC5mb2N1c2Vkcm93OmhvdmVye2JhY2tncm91bmQtY29sb3I6I2NkZTZmNyFpbXBvcnRhbnR9LnJpYmJvbnBhZ2VoZWFkZXItaGlkZGVue2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjppbml0aWFsIWltcG9ydGFudDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZDRkNGQ0O2JvcmRlci10b3A6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1sZWZ0OjFweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHRyYW5zcGFyZW50fS5yaWJib25wYWdlaGVhZGVyLWhpZGRlbjpob3ZlcntmaWx0ZXI6dW5zZXQhaW1wb3J0YW50O2NvbG9yOiMwMDcyYzYhaW1wb3J0YW50fS5mb3JtLWhlYWRpbmctYnV0dG9ue2NvbG9yOiNiZmJmYmZ9LmZvcm0taGVhZGluZy1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2RlNmY3IWltcG9ydGFudDtjb2xvcjojMmE4ZGQ0IWltcG9ydGFudH0uZm9ybS1oZWFkaW5nLC5yaWJib25idXR0b24sLnJpYmJvbmNvbnRyb2wsLnJpYmJvbmdyb3VwLC5yaWJib25wYWdle2JhY2tncm91bmQtY29sb3I6I2ZmZn0uZm9ybS1oZWFkaW5nLXRpdGxle2NvbG9yOiNhZWFlYWV9LnJpYmJvbmNvbnRyb2x7Ym9yZGVyLWxlZnQtY29sb3I6I2ZmZjtib3JkZXItcmlnaHQtY29sb3I6I2ZmZn0ucmliYm9ucGFnZXtib3JkZXItdG9wOjFweCBzb2xpZCAjZDRkNGQ0fS5yaWJib25idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2RlNmY3O2ZpbHRlcjp1bnNldCFpbXBvcnRhbnR9LnJpYmJvbmJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojOTJjMGUwO2ZpbHRlcjp1bnNldCFpbXBvcnRhbnR9LnJpYmJvbmJ1dHRvbnNtYWxse2JhY2tncm91bmQtY29sb3I6I2ZmZn0ucmliYm9uYnV0dG9uc21hbGw6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2RlNmY3O2ZpbHRlcjp1bnNldCFpbXBvcnRhbnR9LnJpYmJvbmJ1dHRvbnNtYWxsOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiM5MmMwZTA7ZmlsdGVyOnVuc2V0IWltcG9ydGFudH0udGFiY29udHJvbCwudGFiY29udHJvbHBhZ2UsLnRhYmNvbnRyb2xwYWdlaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2ZmZn0udGFiY29udHJvbHBhZ2VoZWFkZXItYWN0aXZle2JvcmRlci1jb2xvcjojZGNkZGRkICNDNUM1QzUgI2ZmZiFpbXBvcnRhbnQ7Y29sb3I6IzAwNzJjNn0ubW9iaWxlLXRvb2wtYnV0dG9uOmFjdGl2ZSwubW9iaWxlLXRvb2wtYnV0dG9uOmZvY3VzLC5zaW1wbGVidXR0b246YWN0aXZle2NvbG9yOmluaXRpYWwhaW1wb3J0YW50fS50YWJjb250cm9scGFnZWhlYWRlci1oaWRkZW46aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2RlNmY3O2ZpbHRlcjp1bnNldCFpbXBvcnRhbnQ7Ym9yZGVyLWNvbG9yOiNGMEYwRjAgI0YwRjBGMCAjY2RlNmY3IWltcG9ydGFudH0udGFiY29udHJvbHBhZ2VoZWFkZXItaGlkZGVue2JvcmRlci1jb2xvcjojRjBGMEYwICNGMEYwRjAgI2ZmZiFpbXBvcnRhbnR9LnRhYmhlYWRlci1jb250YWluZXJ7Ym9yZGVyLWJvdHRvbToxcHggI2RjZGRkZCBzb2xpZCFpbXBvcnRhbnR9LnNpbXBsZWJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czowfS5zaW1wbGVidXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2RlNmY3O2ZpbHRlcjp1bnNldCFpbXBvcnRhbnR9LnNpbXBsZWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojOTJjMGUwIWltcG9ydGFudDtmaWx0ZXI6dW5zZXQhaW1wb3J0YW50fS5zaW1wbGVidXR0b246Zm9jdXN7b3V0bGluZTowIWltcG9ydGFudH0uZm9ybS1ib2R5e2JhY2tncm91bmQtY29sb3I6I2ZmZiFpbXBvcnRhbnR9LmlucHV0Y29udHJvbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czowfS5pbnB1dGNvbnRyb2w6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2RlNmY3IWltcG9ydGFudDtmaWx0ZXI6dW5zZXQhaW1wb3J0YW50fS5tb2JpbGUtdG9vbC1idXR0b257YmFja2dyb3VuZC1jb2xvcjojZWVlIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjA7Ym9yZGVyOjB9Lm1vYmlsZS10b29sLWJ1dHRvbjphY3RpdmUsLm1vYmlsZS10b29sLWJ1dHRvbjpmb2N1cywubW9iaWxlLXRvb2wtYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U1ZTVlNSFpbXBvcnRhbnQ7ZmlsdGVyOnVuc2V0IWltcG9ydGFudDtib3JkZXI6MH0=";
                    this.DateSeperator = 47;
                    this.ConsoleDefaultSize = new ExpressCraft.Vector2.$ctor1(540, 240);
                    this.MessageFormBeep = false;
                    this.MaximumPixelScrollingRows = 500000;
                    this.IsChrome = Bridge.Browser.isChrome;
                    this.AllowCloseWithoutQuestion = false;
                    this.ShowExceptionDialog = true;
                    this.FormFadeDuration = 100;
                    this._dpiSetup = false;
                    this.ToolTipPopupDelayMs = 1000;
                    this.ToolTipPopupStayOpenDelayPerWordMs = 250;
                }
            },
            methods: {
                GetCmToPixel: function (pixel) {
                    var ppcm = ExpressCraft.Settings.GetPixelPerCm();
                    if (pixel === 0 || ppcm === 0) {
                        return 0;
                    }
                    return ((Bridge.Int.div(pixel, ppcm)) | 0);
                },
                GetPixelPerCm: function () {
                    if (ExpressCraft.Settings._dpiSetup) {
                        return ExpressCraft.Settings._dpi;
                    }

                    var div = new ExpressCraft.Control.$ctor1();
                    div.Top = "-1000cm";
                    div.Left = "-1000cm";
                    div.Height = "1000cm";
                    div.Width = "1000cm";

                    ExpressCraft.Helper.AppendChild$1(document.body, div);
                    ExpressCraft.Settings._dpi = Bridge.Int.clip32(div.Content.getBoundingClientRect().height / 1000.0);
                    document.body.removeChild(ExpressCraft.Control.op_Implicit(div));
                    ExpressCraft.Settings._dpiSetup = true;
                    return ExpressCraft.Settings._dpi;
                },
                Setup: function () {
                    ExpressCraft.Settings.SetupStyleDefaults();
                },
                SetupStyleDefaults: function () {
                    try {
                        var sheets = document.styleSheets;
                        for (var i = 0; i < sheets.length; i = (i + 1) >>> 0) {
                            var ownerNode = sheets[i].ownerNode;
                            if (ownerNode == null) {
                                continue;
                            }
                            if (Bridge.referenceEquals(ownerNode.id.toLowerCase(), "expresscraft")) {
                                ExpressCraft.Settings.DefaultStyleSheet = sheets[i];
                            }
                            if (Bridge.referenceEquals(ownerNode.id.toLowerCase(), "expresscraftplugin")) {
                                ExpressCraft.Settings.PluginStyleSheet = sheets[i];
                            }
                            if (Bridge.referenceEquals(ownerNode.id.toLowerCase(), "resourcemanager")) {
                                ExpressCraft.Settings.resourceManangerSheets.add(sheets[i]);
                            }
                        }
                        if (ExpressCraft.Settings.DefaultStyleSheet == null) {
                            return;
                        }
                        var df = ExpressCraft.Settings.GetExpressStyleRuleValue("font", ".control");
                        if (df != null) {
                            ExpressCraft.Settings.DefaultFont = df;
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                    }
                },
                GetStyleRuleValue$1: function (cssFile, style, className) {
                    var $t;
                    try {
                        if (cssFile != null) {
                            $t = Bridge.getEnumerator(cssFile);
                            try {
                                while ($t.moveNext()) {
                                    var item = $t.Current;
                                    var value = ExpressCraft.Settings.GetStyleRuleValue(item, style, className);
                                    if (value != null) {
                                        return value;
                                    }
                                }
                            } finally {
                                if (Bridge.is($t, System.IDisposable)) {
                                    $t.System$IDisposable$Dispose();
                                }
                            }
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                    }
                    return null;
                },
                GetStyleRuleValue: function (cssFile, style, className) {
                    try {
                        if (cssFile != null) {
                            var pStyles = cssFile;
                            if (pStyles.cssRules) {
                                for (var i = 0; i < pStyles.cssRules.length; i = (i + 1) | 0) {
                                    var rule = pStyles.cssRules[i];
                                    if (rule.selectorText && !Bridge.referenceEquals(rule.selectorText.split(44).indexOf(className), -1)) {
                                        return rule.style[style];
                                    }
                                }
                            }
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                    }
                    return null;
                },
                GetExpressStyleRuleValue: function (style, className) {
                    var value = ExpressCraft.Settings.GetStyleRuleValue(ExpressCraft.Settings.PluginStyleSheet, style, className);
                    if (value == null) {
                        value = ExpressCraft.Settings.GetStyleRuleValue(ExpressCraft.Settings.DefaultStyleSheet, style, className);
                    }
                    return value;
                }
            }
        }
    });

    Bridge.define("ExpressCraft.Settings.DatePosition", {
        $kind: "nested enum",
        statics: {
            fields: {
                First: 0,
                Second: 1,
                Third: 2
            }
        }
    });

    Bridge.define("ExpressCraft.SheetCell", {
        fields: {
            _value: null,
            _sheet: null
        },
        props: {
            Value: {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._value, value)) {
                        this._value = value;
                        this._sheet != null ? this._sheet.RequestRefresh() : null;
                    }
                }
            }
        },
        ctors: {
            ctor: function (sheet) {
                this.$initialize();
                this._sheet = sheet;
            }
        }
    });

    Bridge.define("ExpressCraft.SheetColumn", {
        fields: {
            _width: 0,
            _sheet: null
        },
        props: {
            Width: {
                get: function () {
                    return this._width;
                },
                set: function (value) {
                    if (this._width !== value) {
                        this._width = value;
                        this._sheet != null ? this._sheet.RequestRefresh() : null;
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this._width = 100;
            },
            ctor: function (sheet) {
                this.$initialize();
                this._sheet = sheet;
            }
        }
    });

    Bridge.define("ExpressCraft.SheetRow", {
        fields: {
            _height: 0,
            _sheet: null
        },
        props: {
            Height: {
                get: function () {
                    return this._height;
                },
                set: function (value) {
                    if (this._height !== value) {
                        this._height = value;
                        this._sheet != null ? this._sheet.RequestRefresh() : null;
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this._height = 22;
            },
            ctor: function (sheet) {
                this.$initialize();
                this._sheet = sheet;
            }
        }
    });

    Bridge.define("ExpressCraft.Size", {
        fields: {
            Width: 0,
            Height: 0
        }
    });

    Bridge.define("ExpressCraft.SizeF", {
        fields: {
            Width: 0,
            Height: 0
        },
        ctors: {
            $ctor1: function (width, height) {
                this.$initialize();
                this.Width = width;
                this.Height = height;
            },
            ctor: function (width, height) {
                this.$initialize();
                this.Width = width;
                this.Height = height;
            }
        },
        methods: {
            toString: function () {
                return System.String.format("{0}, {1}", Bridge.box(this.Width, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(this.Height, System.Single, System.Single.format, System.Single.getHashCode));
            }
        }
    });

    Bridge.define("ExpressCraft.SliderLocation", {
        $kind: "enum",
        statics: {
            fields: {
                Left: 0,
                Right: 1
            }
        }
    });

    Bridge.define("ExpressCraft.SortSetting", {
        fields: {
            Column: null,
            SortMode: 0
        }
    });

    Bridge.define("ExpressCraft.StringFormat");

    Bridge.define("ExpressCraft.TextBlock", {
        fields: {
            OriginalSource: null,
            MaxWidth: 0,
            ComputedHeight: 0,
            LinesComputed: 0,
            ElelemtsOverMax: false,
            MaxCalculatedWidth: 0
        },
        ctors: {
            init: function () {
                this.ElelemtsOverMax = false;
                this.MaxCalculatedWidth = 0;
            },
            ctor: function (source, maxWidth) {
                this.$initialize();
                this.OriginalSource = source;
                this.MaxWidth = maxWidth;
            }
        },
        methods: {
            ComputeString: function () {
                this.ElelemtsOverMax = false;
                var Lines = System.String.split(this.OriginalSource, System.Array.init([13, 10], System.Char).map(function (i) {{ return String.fromCharCode(i); }}));

                var sizePerChar = ExpressCraft.Control.GetTextWidth("M", ExpressCraft.Settings.DefaultFont);

                this.LinesComputed = 0;

                for (var i = 0; i < Lines.length; i = (i + 1) | 0) {
                    var line = Lines[System.Array.index(i, Lines)];

                    var lineWidth = ExpressCraft.Control.GetTextWidth(this.OriginalSource, ExpressCraft.Settings.DefaultFont);

                    if (lineWidth > this.MaxWidth) {
                        this.ElelemtsOverMax = true;
                        this.MaxCalculatedWidth = this.MaxWidth;
                        var yy = 0;
                        for (var x = 0; x < line.length; x = (x + 1) | 0) {
                            yy = (yy + 1) | 0;

                            if (yy * sizePerChar > this.MaxWidth) {
                                this.LinesComputed = (this.LinesComputed + 1) | 0;
                                yy = 0;
                            }
                        }

                        if (yy > 0) {
                            this.LinesComputed = (this.LinesComputed + 1) | 0;
                        }
                    } else {
                        this.LinesComputed = (this.LinesComputed + 1) | 0;
                        if (lineWidth > this.MaxCalculatedWidth) {
                            this.MaxCalculatedWidth = lineWidth;
                        }
                    }
                }
                this.ComputedHeight = this.GetFontSize(ExpressCraft.Settings.DefaultFont) * this.LinesComputed;
            },
            GetFontSize: function (fontWithSize) {
                var strs = System.String.split(fontWithSize, System.Array.init([32], System.Char).map(function (i) {{ return String.fromCharCode(i); }}), null, 1);

                for (var i = 0; i < strs.length; i = (i + 1) | 0) {
                    if (System.String.endsWith(strs[System.Array.index(i, strs)], "pt")) {
                        return parseFloat(strs[System.Array.index(i, strs)]) * 1.333333;
                    } else if (System.String.endsWith(strs[System.Array.index(i, strs)], "px")) {
                        return parseFloat(strs[System.Array.index(i, strs)]);
                    }
                }

                return 10.9999971;
            }
        }
    });

    Bridge.define("ExpressCraft.TileViewState", {
        $kind: "enum",
        statics: {
            fields: {
                Hidden: 0,
                Visible: 1
            }
        }
    });

    Bridge.define("ExpressCraft.ToolTip", {
        fields: {
            Description: null,
            Heading: null,
            AttachedControl: null
        },
        ctors: {
            ctor: function (content) {
                this.$initialize();
                this.Description = content;
            },
            $ctor1: function (heading, description) {
                this.$initialize();
                this.Description = description;
                this.Heading = heading;
            }
        },
        methods: {
            GetWordCount: function () {
                var fullContent = System.String.concat(this.Heading, " ", this.Description).trim();
                var length = fullContent.length;
                var prevChar = 0;
                var builder = new System.Text.StringBuilder();
                var current;
                var WordCount = 1;
                for (var i = 0; i < length; i = (i + 1) | 0) {
                    current = fullContent.charCodeAt(i);
                    if (System.Char.isWhiteSpace(String.fromCharCode(current))) {
                        if (System.Char.isWhiteSpace(String.fromCharCode(prevChar))) {
                            prevChar = current;
                            continue;
                        } else {
                            WordCount = (WordCount + 1) | 0;
                        }
                    }
                    prevChar = current;
                }
                return WordCount;
            }
        }
    });

    Bridge.define("ExpressCraft.Vector2", {
        $kind: "struct",
        statics: {
            methods: {
                /**
                 * adds calc to (100% - 50px) turns to calc(100% - 50px)
                 *
                 * @static
                 * @this ExpressCraft.Vector2
                 * @memberof ExpressCraft.Vector2
                 * @param   {string}    a
                 * @return  {string}
                 */
                pf: function (a) {
                    return !System.String.isNullOrWhiteSpace(a) && System.String.startsWith(a, "(") && System.String.endsWith(a, ")") ? "calc" + (a || "") : a;
                },
                getDefaultValue: function () { return new ExpressCraft.Vector2(); }
            }
        },
        fields: {
            X: null,
            Y: null
        },
        props: {
            Xi: {
                get: function () {
                    return this.X;
                },
                set: function (value) {
                    this.X = value;
                }
            },
            Yi: {
                get: function () {
                    return this.Y;
                },
                set: function (value) {
                    this.Y = value;
                }
            },
            Xf: {
                get: function () {
                    return this.X;
                },
                set: function (value) {
                    this.X = value;
                }
            },
            Yf: {
                get: function () {
                    return this.Y;
                },
                set: function (value) {
                    this.Y = value;
                }
            }
        },
        ctors: {
            $ctor1: function (x, y) {
                this.$initialize();
                this.X = x;
                this.Y = y;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([1955977157, this.X, this.Y]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, ExpressCraft.Vector2)) {
                    return false;
                }
                return Bridge.equals(this.X, o.X) && Bridge.equals(this.Y, o.Y);
            },
            $clone: function (to) {
                var s = to || new ExpressCraft.Vector2();
                s.X = this.X;
                s.Y = this.Y;
                return s;
            }
        }
    });

    Bridge.define("ExpressCraft.Vector4", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new ExpressCraft.Vector4(); }
            }
        },
        fields: {
            X: null,
            Y: null,
            Z: null,
            M: null
        },
        props: {
            Xi: {
                get: function () {
                    return this.X;
                },
                set: function (value) {
                    this.X = value;
                }
            },
            Yi: {
                get: function () {
                    return this.Y;
                },
                set: function (value) {
                    this.Y = value;
                }
            },
            Zi: {
                get: function () {
                    return this.Z;
                },
                set: function (value) {
                    this.Z = value;
                }
            },
            Mi: {
                get: function () {
                    return this.M;
                },
                set: function (value) {
                    this.M = value;
                }
            },
            Xf: {
                get: function () {
                    return this.X;
                },
                set: function (value) {
                    this.X = value;
                }
            },
            Yf: {
                get: function () {
                    return this.Y;
                },
                set: function (value) {
                    this.Y = value;
                }
            },
            Zf: {
                get: function () {
                    return this.Z;
                },
                set: function (value) {
                    this.Z = value;
                }
            },
            Mf: {
                get: function () {
                    return this.M;
                },
                set: function (value) {
                    this.M = value;
                }
            }
        },
        ctors: {
            $ctor1: function (x, y, z, m) {
                this.$initialize();
                this.X = x;
                this.Y = y;
                this.Z = z;
                this.M = m;
            },
            $ctor2: function (a, b) {
                this.$initialize();
                this.X = a.X;
                this.Y = a.Y;
                this.Z = b.X;
                this.M = b.Y;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([1956108229, this.X, this.Y, this.Z, this.M]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, ExpressCraft.Vector4)) {
                    return false;
                }
                return Bridge.equals(this.X, o.X) && Bridge.equals(this.Y, o.Y) && Bridge.equals(this.Z, o.Z) && Bridge.equals(this.M, o.M);
            },
            $clone: function (to) {
                var s = to || new ExpressCraft.Vector4();
                s.X = this.X;
                s.Y = this.Y;
                s.Z = this.Z;
                s.M = this.M;
                return s;
            }
        }
    });

    Bridge.define("ExpressCraft.WindowStateType", {
        $kind: "enum",
        statics: {
            fields: {
                Normal: 0,
                Minimized: 1,
                Maximized: 2
            }
        }
    });

    Bridge.define("ExpressCraft.xaml.XAMLDefinitions", {
        statics: {
            fields: {
                HasLoaded: false,
                XAMLFiles: null
            },
            ctors: {
                init: function () {
                    this.XAMLFiles = new (System.Collections.Generic.Dictionary$2(System.String,System.String))();
                }
            },
            methods: {
                BuildUI: function (page) {
                    if (!ExpressCraft.xaml.XAMLDefinitions.HasLoaded) {
                        return;
                    }

                    var fileName = (Bridge.Reflection.getTypeName(Bridge.getType(page)).toLowerCase() || "") + ".xaml";

                    if (ExpressCraft.xaml.XAMLDefinitions.XAMLFiles.containsKey(fileName)) {
                        var file = ExpressCraft.xaml.XAMLDefinitions.XAMLFiles.get(fileName);

                        var xmlDoc = new DOMParser();
                        var document = xmlDoc.parseFromString(file, "text/xml");

                        ExpressCraft.xaml.XAMLDefinitions.ApplyDocument(page, document.documentElement, Bridge.Reflection.getMembers(Bridge.getType(page), 8, 36), page, true);
                    }
                },
                GetNamespace: function (namespaceURI) {
                    if (System.String.isNullOrWhiteSpace(namespaceURI) || !System.String.contains(namespaceURI,"clr-namespace:") || !System.String.contains(namespaceURI,";")) {
                        return namespaceURI;
                    }
                    return System.Linq.Enumerable.from(System.String.split(System.String.replaceAll(namespaceURI, "clr-namespace:", ""), [59].map(function (i) {{ return String.fromCharCode(i); }}))).firstOrDefault(null, null);
                },
                ApplyDocument: function (control, element, pageMethods, Page, parent) {
                    if (parent === void 0) { parent = false; }
                    var child = null;
                    if (!parent) {
                        var x = ExpressCraft.xaml.XAMLDefinitions.GetNamespace(element.namespaceURI);
                        if (System.String.isNullOrWhiteSpace(x)) {
                            x = element.tagName;

                        } else {
                            x = (x || "") + "." + (element.tagName || "");
                        }
                        child = Bridge.unbox(Bridge.createInstance(Bridge.Reflection.getType(x)));
                    } else {
                        child = control;
                    }
                    var fields = Bridge.Reflection.getMembers(Bridge.getType(child), 4, 28);
                    var props = Bridge.Reflection.getMembers(Bridge.getType(child), 16, 28);

                    var events = Bridge.Reflection.getMembers(Bridge.getType(child), 2, 28);
                    for (var i = 0; i < element.attributes.length; i = (i + 1) >>> 0) {
                        try {
                            var attribute = element.attributes[i];
                            var found = false;
                            for (var j = 0; j < fields.length; j = (j + 1) | 0) {
                                if (Bridge.referenceEquals(fields[System.Array.index(j, fields)].n, attribute.nodeName)) {
                                    Bridge.Reflection.fieldAccess(fields[System.Array.index(j, fields)], child, attribute.value);
                                    found = true;
                                    break;
                                }
                            }

                            if (!found) {
                                for (var j1 = 0; j1 < props.length; j1 = (j1 + 1) | 0) {
                                    if (Bridge.referenceEquals(props[System.Array.index(j1, props)].n, attribute.nodeName)) {
                                        Bridge.Reflection.midel(props[System.Array.index(j1, props)].s, child)(attribute.value);
                                        found = true;
                                        break;
                                    }
                                }
                            }
                            if (!found && !System.String.isNullOrWhiteSpace(attribute.nodeName)) {
                                for (var j2 = 0; j2 < events.length; j2 = (j2 + 1) | 0) {
                                    if (Bridge.referenceEquals(events[System.Array.index(j2, events)].n, attribute.nodeName)) {
                                        for (var jj = 0; jj < pageMethods.length; jj = (jj + 1) | 0) {
                                            if (Bridge.referenceEquals(pageMethods[System.Array.index(jj, pageMethods)].n, attribute.value)) {
                                                Bridge.Reflection.midel(events[System.Array.index(j2, events)].ad, child)(Bridge.Reflection.midel(pageMethods[System.Array.index(jj, pageMethods)], Page));



                                                break;
                                            }
                                        }
                                        break;
                                    }
                                }
                            }
                        } catch ($e1) {
                            $e1 = System.Exception.create($e1);

                        }

                    }

                    if (element.childElementCount > 0) {
                        for (var i1 = 0; i1 < element.childElementCount; i1 = (i1 + 1) >>> 0) {
                            ExpressCraft.xaml.XAMLDefinitions.ApplyDocument(child, element.children[i1], pageMethods, Page, false);
                        }
                    }

                    if (!parent) {
                        control.add(child);
                    }
                },
                Load: function (ass) {
                    var $t;
                    if (ExpressCraft.xaml.XAMLDefinitions.HasLoaded) {
                        return;
                    }

                    try {

                        $t = Bridge.getEnumerator(ass.getManifestResourceNames());
                        try {
                            while ($t.moveNext()) {
                                var item = $t.Current;
                                if (!System.String.endsWith(item.toLowerCase(), ".xaml")) {
                                    continue;
                                }
                                var doc = window.atob(ass.getManifestResourceDataAsBase64(item));
                                if (System.String.startsWith(doc, "ï»¿")) {
                                    doc = doc.substr(("ï»¿").length);
                                }
                                var name = item;
                                if (System.String.startsWith(name, (ass.name || "") + ".")) {
                                    name = name.substr(((ass.name.length + 1) | 0));
                                }
                                ExpressCraft.xaml.XAMLDefinitions.XAMLFiles.set(name.toLowerCase(), doc);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);

                    }

                    ExpressCraft.xaml.XAMLDefinitions.HasLoaded = true;
                }
            }
        }
    });

    Bridge.define("ExpressCraft.AceCodeEditor", {
        inherits: [ExpressCraft.Control],
        statics: {
            fields: {
                ExternalAceCodeEditor: null
            },
            ctors: {
                init: function () {
                    this.ExternalAceCodeEditor = new ExpressCraft.ExternalPlugin("https://cdnjs.cloudflare.com/ajax/libs/ace/1.0.0/ace.js");
                }
            },
            methods: {
                Setup: function () {
                    ExpressCraft.AceCodeEditor.ExternalAceCodeEditor.Setup();
                }
            }
        },
        fields: {
            editor: null,
            _modeType: 0,
            _themeType: 0,
            OnFocus: null,
            OnBlur: null
        },
        props: {
            ReadOnly: {
                get: function () {
                    return this.editor.getReadOnly();
                },
                set: function (value) {
                    this.editor.setReadOnly(value);
                }
            },
            Source: {
                get: function () {
                    return this.editor.getValue();
                },
                set: function (value) {
                    this.editor.setValue(value);
                }
            }
        },
        ctors: {
            ctor: function (modeType, themeType) {
                if (modeType === void 0) { modeType = 17; }
                if (themeType === void 0) { themeType = 11; }

                this.$initialize();
                ExpressCraft.Control.$ctor1.call(this);
                this._modeType = modeType;
                this._themeType = themeType;
            }
        },
        methods: {
            ClearSelection: function () {
                this.editor.clearSelection();
            },
            Render: function () {
                ExpressCraft.AceCodeEditor.ExternalAceCodeEditor.UsageCheck();

                var theme = System.Enum.format(ExpressCraft.AceThemeTypes, this._themeType, "G");
                var mode = System.Enum.format(ExpressCraft.AceModeTypes, this._modeType, "G");

                			this.editor = ace.edit(this.Content);
                			this.editor.setTheme("ace/theme/" + theme);
                			this.editor.getSession().setMode("ace/mode/" + mode);
                            this.editor.on("focus", function() {
                                if(this.OnFocus != null)
                                {
                                    this.OnFocus();                    
                                }            
                            });
                            this.editor.on("blur", function() {
                                if(this.OnBlur != null)
                                {
                                    this.OnBlur();                    
                                }            
                            });
                			
                this.OnResize = function (cont) {
                    				this.editor.resize(true);
                    				
                };

                this.Content.addEventListener("mousedown", function (ev) {
                    ExpressCraft.Form.InExternalMouseEvent = true;
                });

                this.Content.addEventListener("mouseup", function (ev) {
                    ExpressCraft.Form.InExternalMouseEvent = false;
                });

                ExpressCraft.Control.prototype.Render.call(this);
            }
        }
    });

    Bridge.define("ExpressCraft.Form", {
        inherits: [ExpressCraft.Control],
        statics: {
            fields: {
                WindowHolder: null,
                MinimizedForms: null,
                WindowLoader: null,
                _activeToolTip: null,
                _toolTipTimerHandle: 0,
                _activeToolTipMouseMove: null,
                _activeToolTipControl: null,
                _oepntoolTipTimerHandle: 0,
                KeyHooks: null,
                ResizeCorners: 0,
                MovingForm: null,
                Parent: null,
                Mouse_Down: false,
                MenuOpen: false,
                FormOverLay: null,
                _hasSetup: false,
                InExternalMouseEvent: false,
                InErrorDialog: false,
                standAloneForms: null,
                FormCollections: null,
                ShowBodyOverLay: false,
                Window_DefaultHeight: 0,
                Window_DefaultWidth: 0,
                _ActiveForm: null,
                _PrevActiveForm: null,
                MoveAction: 0,
                WindowHolderSelectionBoxX: 0,
                WindowHolderSelectionBoxY: 0,
                WindowHolderSelectionBoxXOff: 0,
                WindowHolderSelectionBoxYOff: 0,
                LoadingCount: 0,
                ToClean: null
            },
            props: {
                ActiveToolTip: {
                    get: function () {
                        return ExpressCraft.Form._activeToolTip;
                    },
                    set: function (value) {
                        if (!Bridge.referenceEquals(ExpressCraft.Form._activeToolTip, value)) {
                            if (value != null && value.AttachedControl != null && value.AttachedControl.Content != null) {
                                if (!Bridge.staticEquals(ExpressCraft.Form._activeToolTipMouseMove, null)) {
                                    value.AttachedControl.Content.removeEventListener("mousemove", ExpressCraft.Form._activeToolTipMouseMove);
                                    ExpressCraft.Form._activeToolTipMouseMove = null;
                                }
                            }
                            if (ExpressCraft.Form._activeToolTipControl != null) {
                                ExpressCraft.Form._activeToolTipControl.Close();
                                ExpressCraft.Form._activeToolTipControl = null;
                            }
                            if (ExpressCraft.Form._toolTipTimerHandle > -1) {
                                clearTimeout(ExpressCraft.Form._toolTipTimerHandle);
                                ExpressCraft.Form._toolTipTimerHandle = -1;
                            }

                            ExpressCraft.Form._activeToolTip = value;

                            var messageLength;
                            if (ExpressCraft.Form._activeToolTip != null && ((messageLength = ExpressCraft.Form._activeToolTip.GetWordCount())) > 0 && ExpressCraft.Form._activeToolTip.AttachedControl != null) {
                                ExpressCraft.Form._activeToolTipMouseMove = function (ev) {
                                    if (ExpressCraft.Form._toolTipTimerHandle > -1) {
                                        clearTimeout(ExpressCraft.Form._toolTipTimerHandle);
                                    }
                                    ExpressCraft.Form._toolTipTimerHandle = Bridge.Int.clip32(setTimeout(function (ab) {
                                        if (ExpressCraft.Form._activeToolTipControl != null) {
                                            ExpressCraft.Form._activeToolTipControl.Close();
                                            ExpressCraft.Form._activeToolTipControl = null;
                                        }
                                        if (ExpressCraft.Form._oepntoolTipTimerHandle > -1) {
                                            clearTimeout(ExpressCraft.Form._oepntoolTipTimerHandle);
                                            ExpressCraft.Form._oepntoolTipTimerHandle = -1;
                                        }
                                        ExpressCraft.Form._activeToolTipControl = new ExpressCraft.ToolTipControl(ExpressCraft.Form._activeToolTip);
                                        ExpressCraft.Form._activeToolTipControl.Show(ev);

                                        ExpressCraft.Form._oepntoolTipTimerHandle = Bridge.Int.clip32(setTimeout(function (ab2) {
                                            if (ExpressCraft.Form._activeToolTipControl != null) {
                                                ExpressCraft.Form._activeToolTipControl.Close();
                                                ExpressCraft.Form._activeToolTipControl = null;
                                            }
                                        }, Math.max(1000, Bridge.Int.mul(messageLength, Math.max(ExpressCraft.Settings.ToolTipPopupStayOpenDelayPerWordMs, 10)))));

                                        if (!Bridge.staticEquals(ExpressCraft.Form._activeToolTipMouseMove, null)) {
                                            value.AttachedControl.Content.removeEventListener("mousemove", ExpressCraft.Form._activeToolTipMouseMove);
                                            ExpressCraft.Form._activeToolTipMouseMove = null;
                                        }
                                    }, Math.max(1, ExpressCraft.Settings.ToolTipPopupDelayMs)));
                                };
                                value.AttachedControl.Content.addEventListener("mousemove", ExpressCraft.Form._activeToolTipMouseMove);
                            }
                        }
                    }
                },
                ActiveForm: {
                    get: function () {
                        return ExpressCraft.Form._ActiveForm;
                    },
                    set: function (value) {
                        if (!Bridge.referenceEquals(ExpressCraft.Form._ActiveForm, value)) {
                            ExpressCraft.Form._PrevActiveForm = ExpressCraft.Form._ActiveForm;

                            if (ExpressCraft.Form._ActiveForm != null) {
                                ExpressCraft.Form._ActiveForm.OnLostFocus();
                                if (ExpressCraft.Form._ActiveForm.Content != null) {
                                    if (ExpressCraft.Form._ActiveForm.InDesign) {
                                        ExpressCraft.Form._ActiveForm.BodyOverLay.style.visibility = "collapse";
                                        return;
                                    }
                                    ExpressCraft.Form._ActiveForm.BodyOverLay.style.visibility = "visible";
                                }
                            }
                            ExpressCraft.Form._ActiveForm = value;
                            if (ExpressCraft.Form._ActiveForm != null) {
                                ExpressCraft.Form._ActiveForm.OnGotFocus();
                                if (ExpressCraft.Form._ActiveForm.Content != null) {
                                    ExpressCraft.Form._ActiveForm.BodyOverLay.style.visibility = "collapse";
                                    ExpressCraft.Form._ActiveForm.BringToFront();
                                }
                            }
                            if (Bridge.is(ExpressCraft.Form._PrevActiveForm, ExpressCraft.FormPopup) && ((ExpressCraft.Form._ActiveForm != null && !(Bridge.is(ExpressCraft.Form._ActiveForm, ExpressCraft.FormPopup))) || ExpressCraft.Form._ActiveForm == null)) {
                                ExpressCraft.Form.CloseFormPopups();
                            }
                        }
                    }
                }
            },
            ctors: {
                init: function () {
                    this.MinimizedForms = new (System.Collections.Generic.List$1(ExpressCraft.Form)).ctor();
                    this._toolTipTimerHandle = -1;
                    this._oepntoolTipTimerHandle = -1;
                    this.KeyHooks = new (System.Collections.Generic.List$1(Function)).ctor();
                    this.ResizeCorners = 2;
                    this.Mouse_Down = false;
                    this.MenuOpen = false;
                    this._hasSetup = false;
                    this.InExternalMouseEvent = false;
                    this.InErrorDialog = false;
                    this.standAloneForms = new ExpressCraft.FormCollection(null);
                    this.FormCollections = new (System.Collections.Generic.List$1(ExpressCraft.FormCollection)).ctor();
                    this.ShowBodyOverLay = false;
                    this.Window_DefaultHeight = 480;
                    this.Window_DefaultWidth = 640;
                    this.MoveAction = ExpressCraft.MouseMoveAction.Move;
                    this.LoadingCount = 0;
                    this.ToClean = new (System.Collections.Generic.List$1(ExpressCraft.Form)).ctor();
                }
            },
            methods: {
                MidleOfAction: function () {
                    return ExpressCraft.Form.MovingForm != null;
                },
                GetActiveFormCollection: function () {
                    for (var i = (ExpressCraft.Form.FormCollections.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        var frmCol = ExpressCraft.Form.FormCollections.getItem(i);
                        if (frmCol.FormOwner == null) {
                            for (var x = 0; x < frmCol.VisibleForms.Count; x = (x + 1) | 0) {
                                if (frmCol.VisibleForms.getItem(x) != null) {
                                    frmCol.VisibleForms.getItem(x).Close();
                                }
                            }
                            ExpressCraft.Form.FormCollections.removeAt(i);
                        } else {
                            return frmCol;
                        }
                    }

                    return null;
                },
                SetBodyOverLay: function () {
                    var ActiveCollection = ExpressCraft.Form.GetActiveFormCollection();
                    if (ActiveCollection == null) {
                        return;
                    }

                    ActiveCollection.FormOwner.ShowBodyOverLayStyle();

                    var VisibleForms = ActiveCollection.VisibleForms;

                    for (var i = 0; i < VisibleForms.Count; i = (i + 1) | 0) {
                        var form = VisibleForms.getItem(i);
                        if (form != null) {
                            form.ShowBodyOverLayStyle();
                        }
                    }
                },
                ChangeStateTextSelection: function (element, state) {
                    element.style.userSelect = state ? "text" : "none";
                },
                PerformFocusShake: function () {
                    if (ExpressCraft.Form.ActiveForm != null) {
                        var form = ExpressCraft.Form.ActiveForm;
                        form.Heading.classList.add("form-heading-flash");
                        setTimeout(function (ab) {
                            form.Heading.classList.remove("form-heading-flash");
                        }, 800);
                    }
                },
                DisableStateDrag: function (element) {
                    if (element) {
                        element.ondragstart = function (ev) {
                            ev.preventDefault();
                        };
                    } else {
                        var el = element;
                        el.style.webkitUserDrag = "none";
                    }
                },
                SetupHideElementsOnView: function () {
                    window.onblur = function (ev) {
                        if (document.body.contains(ExpressCraft.Form.WindowHolder)) {
                            document.body.removeChild(ExpressCraft.Form.WindowHolder);
                        }
                    };

                    window.onfocus = function (ev) {
                        if (!document.body.contains(ExpressCraft.Form.WindowHolder)) {
                            document.body.appendChild(ExpressCraft.Form.WindowHolder);
                        }
                    };
                },
                CloseFormPopups: function () {
                    try {
                        var x = ExpressCraft.Form.GetActiveFormCollection();

                        for (var i = 0; i < x.VisibleForms.Count; i = (i + 1) | 0) {
                            if (x.VisibleForms.getItem(i) != null && Bridge.is(x.VisibleForms.getItem(i), ExpressCraft.FormPopup) && x.VisibleForms.getItem(i).IsContentVisible()) {
                                x.VisibleForms.getItem(i).Close();
                            }
                        }
                        if (Bridge.is(x.FormOwner, ExpressCraft.FormPopup)) {
                            x.FormOwner.Close();
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                    }
                },
                BeginLoading: function () {
                    ExpressCraft.Form.LoadingCount = (ExpressCraft.Form.LoadingCount + 1) | 0;
                    ExpressCraft.Form.SetCursor("wait");
                    ExpressCraft.Form.WindowLoader.style.visibility = "visible";
                    ExpressCraft.Form.WindowLoader.style.opacity = "0.4";
                },
                EndLoading: function () {
                    ExpressCraft.Form.LoadingCount = (ExpressCraft.Form.LoadingCount - 1) | 0;
                    if (ExpressCraft.Form.LoadingCount === 0) {
                        ExpressCraft.Form.SetCursor("default");
                        ExpressCraft.Form.WindowLoader.style.visibility = "hidden";
                        ExpressCraft.Form.WindowLoader.style.opacity = "0";
                    }
                },
                Setup: function (parent) {
                    if (parent === void 0) { parent = null; }
                    if (ExpressCraft.Form._hasSetup) {
                        return;
                    }
                    ExpressCraft.Form._hasSetup = true;

                    if (parent == null) {
                        ExpressCraft.Form.Parent = document.body;
                    } else {
                        ExpressCraft.Form.Parent = parent;
                    }

                    ExpressCraft.Form.WindowHolder = ExpressCraft.Control.Div$1("form-container");

                    ExpressCraft.Form.FormOverLay = ExpressCraft.Control.Div$1("system-form-collection-overlay");

                    ExpressCraft.Form.WindowLoader = document.createElement("div");
                    ExpressCraft.Form.WindowLoader.className = "ajax-loading-screen";
                    ExpressCraft.Form.WindowLoader.style.visibility = "hidden";
                    ExpressCraft.Form.WindowLoader.style.opacity = "0";
                    ExpressCraft.Form.WindowLoader.style.backgroundColor = "white";
                    ExpressCraft.Helper.SetBoundsFull$1(ExpressCraft.Form.WindowLoader);
                    ExpressCraft.Form.WindowLoader.style.position = "fixed";
                    ExpressCraft.Form.WindowLoader.style.zIndex = "100000";
                    ExpressCraft.Form.WindowLoader.oncontextmenu = function (ev) {
                        ev.preventDefault();
                    };
                    ExpressCraft.Form.WindowLoader.onmousedown = function (ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    };
                    ExpressCraft.Form.WindowLoader.style.transition = "opacity 1s ease";

                    document.body.appendChild(ExpressCraft.Form.WindowLoader);

                    ExpressCraft.Form.FormOverLay.onmousedown = function (ev) {
                        if (Bridge.is(ExpressCraft.Form.ActiveForm, ExpressCraft.FormPopup)) {
                            ExpressCraft.Form.CloseFormPopups();
                        }

                        if (document.activeElement != null) {
                            document.activeElement.focus();
                            ev.preventDefault();
                            ExpressCraft.Form.SetCursor("default");
                        }
                    };
                    ExpressCraft.Form.FormOverLay.onclick = function (ev) {
                        ExpressCraft.Form.PerformFocusShake();
                    };
                    ExpressCraft.Form.FormOverLay.oncontextmenu = function (ev) {
                        ev.stopPropagation();
                        ev.preventDefault();
                    };
                    ExpressCraft.Form.FormOverLay.style.visibility = "visible";

                    window.onkeydown = function (ev) {
                        var length = ExpressCraft.Form.KeyHooks.Count;
                        for (var i = 0; i < length; i = (i + 1) | 0) {
                            if (!Bridge.staticEquals(ExpressCraft.Form.KeyHooks.getItem(i), null)) {
                                ExpressCraft.Form.KeyHooks.getItem(i)(ev);
                            }
                        }
                    };

                    window.onresize = function (ev) {
                        if (ExpressCraft.Form.FormCollections == null) {
                            return;
                        }

                        for (var i = 0; i < ExpressCraft.Form.FormCollections.Count; i = (i + 1) | 0) {
                            if (ExpressCraft.Form.FormCollections.getItem(i) == null) {
                                continue;
                            }
                            var fc = ExpressCraft.Form.FormCollections.getItem(i);
                            if (fc.FormOwner != null) {
                                fc.FormOwner.Resizing();
                            }
                            for (var x = 0; x < fc.VisibleForms.Count; x = (x + 1) | 0) {
                                if (fc.VisibleForms.getItem(x) != null) {
                                    fc.VisibleForms.getItem(x).Resizing();
                                }
                            }
                        }

                        ExpressCraft.Form.CalculateMinmizedFormsLocation();
                    };

                    window.onmousemove = function (ev) {
                        if (ExpressCraft.Form.InExternalMouseEvent) {
                            return;
                        }

                        var mev = ev;

                        if (ExpressCraft.Form.MovingForm != null) {
                            ev.preventDefault();
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();

                            if (!ExpressCraft.Form.MovingForm.DisableBoxShadow) {
                                ExpressCraft.Form.MovingForm.Style.boxShadow = "none";
                            }

                            if (System.String.equals(ExpressCraft.Form.MovingForm.BodyOverLay.style.visibility, "collapse")) {
                                if (ExpressCraft.Form.MovingForm.InDesign) {
                                    ExpressCraft.Form._ActiveForm.BodyOverLay.style.visibility = "collapse";
                                } else {
                                    ExpressCraft.Form.MovingForm.BodyOverLay.style.visibility = "visible";
                                }

                                ExpressCraft.Form.MovingForm.Heading.focus();
                            }

                            var mousePos = ExpressCraft.Helper.GetClientMouseLocation(ev);

                            var mX;
                            var mY;

                            var newX = (((mX = mousePos.Xf)) + ExpressCraft.Form.MovingForm.prev_px);
                            var newY = (((mY = mousePos.Yf)) + ExpressCraft.Form.MovingForm.prev_py);

                            if (ExpressCraft.Form.MovingForm.windowState === ExpressCraft.WindowStateType.Maximized && ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.Move) {
                                ExpressCraft.Form.MovingForm.changeWindowState();
                                newX = mousePos.Xf - (((Bridge.Int.div(ExpressCraft.Form.MovingForm.prev_width, 2)) | 0));
                                ExpressCraft.Form.MovingForm.prev_px = newX - mousePos.Xf;
                            }

                            var x = parseFloat(ExpressCraft.Form.MovingForm.Style.left);
                            var y = parseFloat(ExpressCraft.Form.MovingForm.Style.top);
                            var w = parseFloat(ExpressCraft.Form.MovingForm.Style.width);
                            var h = parseFloat(ExpressCraft.Form.MovingForm.Style.height);

                            var px = x;
                            var py = y;
                            var pw = w;
                            var ph = h;

                            if (newY < 1) {
                                newY = 1;
                            }
                            if (newX < 1) {
                                newX = 1;
                            }

                            if (mX < 1) {
                                mX = 1;
                            }
                            if (mY < 1) {
                                mY = 1;
                            }

                            switch (ExpressCraft.Form.MoveAction) {
                                case ExpressCraft.MouseMoveAction.Move: 
                                    x = newX;
                                    y = newY;
                                    break;
                                case ExpressCraft.MouseMoveAction.TopLeftResize: 
                                    w -= newX - x;
                                    h -= newY - y;
                                    if (w < ExpressCraft.Form.MovingForm.MinWidth) {
                                        newX -= ExpressCraft.Form.MovingForm.MinWidth - w;
                                        w = ExpressCraft.Form.MovingForm.MinWidth;
                                    }
                                    if (h < ExpressCraft.Form.MovingForm.MinHeight) {
                                        newY -= ExpressCraft.Form.MovingForm.MinHeight - h;
                                        h = ExpressCraft.Form.MovingForm.MinHeight;
                                    }
                                    x = newX;
                                    y = newY;
                                    break;
                                case ExpressCraft.MouseMoveAction.TopResize: 
                                    h -= newY - y;
                                    if (h < ExpressCraft.Form.MovingForm.MinHeight) {
                                        newY -= ExpressCraft.Form.MovingForm.MinHeight - h;
                                        h = ExpressCraft.Form.MovingForm.MinHeight;
                                    }
                                    y = newY;
                                    break;
                                case ExpressCraft.MouseMoveAction.TopRightResize: 
                                    h -= newY - y;
                                    w = mX - x;
                                    if (h < ExpressCraft.Form.MovingForm.MinHeight) {
                                        newY -= ExpressCraft.Form.MovingForm.MinHeight - h;
                                        h = ExpressCraft.Form.MovingForm.MinHeight;
                                    }
                                    if (w < ExpressCraft.Form.MovingForm.MinWidth) {
                                        w = ExpressCraft.Form.MovingForm.MinWidth;
                                    }
                                    y = newY;
                                    break;
                                case ExpressCraft.MouseMoveAction.LeftResize: 
                                    w -= newX - x;
                                    if (w < ExpressCraft.Form.MovingForm.MinWidth) {
                                        newX -= ExpressCraft.Form.MovingForm.MinWidth - w;
                                        w = ExpressCraft.Form.MovingForm.MinWidth;
                                    }
                                    x = newX;
                                    break;
                                case ExpressCraft.MouseMoveAction.BottomLeftResize: 
                                    w -= newX - x;
                                    h = mY - y;
                                    if (w < ExpressCraft.Form.MovingForm.MinWidth) {
                                        newX -= ExpressCraft.Form.MovingForm.MinWidth - w;
                                        w = ExpressCraft.Form.MovingForm.MinWidth;
                                    }
                                    if (h < ExpressCraft.Form.MovingForm.MinHeight) {
                                        h = ExpressCraft.Form.MovingForm.MinHeight;
                                    }
                                    x = newX;
                                    break;
                                case ExpressCraft.MouseMoveAction.BottomResize: 
                                    h = mY - y;
                                    if (h < ExpressCraft.Form.MovingForm.MinHeight) {
                                        h = ExpressCraft.Form.MovingForm.MinHeight;
                                    }
                                    break;
                                case ExpressCraft.MouseMoveAction.RightResize: 
                                    w = mX - x;
                                    if (w < ExpressCraft.Form.MovingForm.MinWidth) {
                                        w = ExpressCraft.Form.MovingForm.MinWidth;
                                    }
                                    break;
                                case ExpressCraft.MouseMoveAction.BottomRightResize: 
                                    w = mX - x;
                                    h = mY - y;
                                    if (h < ExpressCraft.Form.MovingForm.MinHeight) {
                                        h = ExpressCraft.Form.MovingForm.MinHeight;
                                    }
                                    if (w < ExpressCraft.Form.MovingForm.MinWidth) {
                                        w = ExpressCraft.Form.MovingForm.MinWidth;
                                    }
                                    break;
                            }
                            var changed = false;
                            if (px !== x) {
                                if (ExpressCraft.Settings.AlignFormToGrid && ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.Move && ExpressCraft.Settings.AlignmentForForm > 1 && x !== 0) {
                                    x = Bridge.Int.mul((Bridge.Int.clip32(x / ExpressCraft.Settings.AlignmentForForm)), ExpressCraft.Settings.AlignmentForForm);
                                    if (px !== x) {
                                        ExpressCraft.Form.MovingForm.Style.left = x + 'px';
                                    }
                                } else {
                                    ExpressCraft.Form.MovingForm.Style.left = x + 'px';
                                }
                            }

                            if (py !== y) {
                                if (ExpressCraft.Settings.AlignFormToGrid && ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.Move && ExpressCraft.Settings.AlignmentForForm > 1 && y !== 0) {
                                    y = Bridge.Int.mul((Bridge.Int.clip32(y / ExpressCraft.Settings.AlignmentForForm)), ExpressCraft.Settings.AlignmentForForm);
                                    if (py !== y) {
                                        ExpressCraft.Form.MovingForm.Style.top = y + 'px';
                                    }
                                } else {
                                    ExpressCraft.Form.MovingForm.Style.top = y + 'px';
                                }
                            }

                            if (pw !== w) {
                                changed = true;
                                ExpressCraft.Form.MovingForm.Style.width = w + 'px';
                            }

                            if (ph !== h) {
                                changed = true;
                                ExpressCraft.Form.MovingForm.Style.height = h + 'px';
                            }

                            if (changed) {
                                ExpressCraft.Form.MovingForm.Resizing();
                            }
                        }
                    };

                    window.onmouseup = function (ev) {
                        ExpressCraft.Form.InExternalMouseEvent = false;
                        if (ExpressCraft.Form.MovingForm != null) {
                            if (!ExpressCraft.Form.MovingForm.DisableBoxShadow) {
                                ExpressCraft.Form.MovingForm.Style.boxShadow = null;
                            }
                            ExpressCraft.Form.MovingForm.BodyOverLay.style.visibility = "collapse";
                        }

                        ExpressCraft.Form.MovingForm = null;
                        ExpressCraft.Form.Mouse_Down = false;
                        ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.Move;
                        ExpressCraft.Form.SetCursor("default");
                    };
                    window.onbeforeunload = function (ev) {
                        if (!ExpressCraft.Settings.AllowCloseWithoutQuestion) {
                            return 'Would you like to close this application?';
                        }
                    };
                    window.onunload = function (ev) {
                        if (!Bridge.staticEquals(ExpressCraft.Settings.OnApplicationClose, null)) {
                            ExpressCraft.Settings.OnApplicationClose();
                        }
                    };

                    var window2 = window;

                    var errorFunc = function (message, url, lineNumber, columnNumber, error) {
                        if (ExpressCraft.Form.InErrorDialog) {
                            return false;
                        }
                        try {
                            ExpressCraft.Form.InErrorDialog = true;
                            var errStr;
                            if (System.String.isNullOrWhiteSpace(message) || Bridge.referenceEquals(message, "Script error.")) {
                                errStr = "Script Error: See Browser Console for Detail's";
                            } else {
                                errStr = "Script Error: " + (message || "");
                            }

                            if (ExpressCraft.Application.AplicationDefition === ExpressCraft.ApplicationDefitnion.ExpressCraftConsole) {
                                ExpressCraft.ConsoleForm.Log(errStr, ExpressCraft.ConsoleLogType.Error);
                            }

                            if (ExpressCraft.Settings.ShowExceptionDialog) {
                                var msgBox = new ExpressCraft.MessageBoxForm.ctor(errStr, ExpressCraft.MessageBoxLayout.Error);
                                msgBox.ShowDialog();
                            }
                        } catch ($e1) {
                            $e1 = System.Exception.create($e1);
                        } finally {
                            ExpressCraft.Form.InErrorDialog = false;
                        }

                        return false;
                    };

                    window2.onerror = errorFunc;

                    ExpressCraft.Form.WindowHolder.appendChild(ExpressCraft.Form.FormOverLay);

                    ExpressCraft.Helper.AppendChildren$2(ExpressCraft.Form.Parent, [ExpressCraft.Form.WindowHolder]);
                },
                SetCursor: function (cursor) {
                    document.body.style.cursor = cursor;
                    var x = document.body.style.backgroundColor;
                    document.body.style.backgroundColor = "white";
                    document.body.style.backgroundColor = x;
                },
                CalculateMinmizedFormsLocation: function () {
                    var $t, $t1;
                    if (ExpressCraft.Form.MinimizedForms.Count > 0 && ExpressCraft.Form.MinimizedForms.contains(null)) {
                        ExpressCraft.Form.MinimizedForms.remove(null);
                    }
                    var RemoveList = new (System.Collections.Generic.List$1(ExpressCraft.Form)).ctor();
                    var count = 0;
                    var widthTotal = 0;
                    var y = 30;

                    var viewSize = ExpressCraft.Form.Parent.getBoundingClientRect();

                    $t = Bridge.getEnumerator(ExpressCraft.Form.MinimizedForms);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item.Content == null || item.windowState !== ExpressCraft.WindowStateType.Minimized) {
                                RemoveList.add(item);
                            } else {
                                var ToIncrement = 3 + ExpressCraft.Helper.ToFloat(item.Width);

                                if (widthTotal + ToIncrement > viewSize.width) {
                                    widthTotal = 0;
                                    count = 0;
                                    y = (y + 33) | 0;
                                }

                                item.Location = new ExpressCraft.Vector2.$ctor1(widthTotal, "(100% - " + (((y + 2) | 0)) + "px)");

                                count = (count + 1) | 0;

                                widthTotal += ToIncrement;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    $t1 = Bridge.getEnumerator(RemoveList);
                    try {
                        while ($t1.moveNext()) {
                            var item1 = $t1.Current;
                            ExpressCraft.Form.MinimizedForms.remove(item1);
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }

                },
                ClearZIndex: function () {
                    var x = ExpressCraft.Form.GetActiveFormCollection().FormOwner;
                    ExpressCraft.Form.WindowHolder.style.zIndex = "-" + System.Double.format(ExpressCraft.Form.WindowHolder.childElementCount);
                    var Found = false;

                    for (var i = 0; i < ExpressCraft.Form.WindowHolder.childElementCount; i = (i + 1) >>> 0) {
                        if (Found || Bridge.referenceEquals(x.Content, ExpressCraft.Form.WindowHolder.children[i])) {
                            ExpressCraft.Form.WindowHolder.children[i].style.zIndex = "";
                            Found = true;
                        } else {
                            ExpressCraft.Form.WindowHolder.children[i].style.zIndex = System.Double.format((i - ExpressCraft.Form.WindowHolder.childElementCount - 1));
                        }
                    }
                },
                ApplyZIndex: function () {
                    ExpressCraft.Form.WindowHolder.style.zIndex = "";
                    for (var i = 0; i < ExpressCraft.Form.WindowHolder.childElementCount; i = (i + 1) >>> 0) {
                        ExpressCraft.Form.WindowHolder.children[i].style.zIndex = Bridge.toString(i);
                    }
                },
                CalculateZOrder$1: function (formCollection, zIndex) {
                    var TopMostForms = new (System.Collections.Generic.List$1(ExpressCraft.Form)).ctor();

                    var VisibleForms = formCollection.VisibleForms;
                    if (VisibleForms != null) {
                        for (var i = 0; i < VisibleForms.Count; i = (i + 1) | 0) {
                            if (VisibleForms.getItem(i).Content == null) {
                                ExpressCraft.Form.ToClean.add(VisibleForms.getItem(i));
                            } else {
                                if (VisibleForms.getItem(i).TopMost) {
                                    TopMostForms.add(VisibleForms.getItem(i));
                                }
                            }
                        }
                        for (var i1 = 0; i1 < ExpressCraft.Form.ToClean.Count; i1 = (i1 + 1) | 0) {
                            if (VisibleForms.contains(ExpressCraft.Form.ToClean.getItem(i1))) {
                                VisibleForms.remove(ExpressCraft.Form.ToClean.getItem(i1));
                                ExpressCraft.Form.ToClean.setItem(i1, null);
                            }
                        }

                        ExpressCraft.Form.ToClean.remove(null);

                        if (formCollection.FormOwner != null) {
                            formCollection.FormOwner.ManagePlaceHolders();
                            formCollection.FormOwner.Style.zIndex = Bridge.toString(zIndex);
                            zIndex = (zIndex + 1) | 0;

                        }

                        for (var i2 = 0; i2 < TopMostForms.Count; i2 = (i2 + 1) | 0) {
                            var form = TopMostForms.getItem(i2);
                            VisibleForms.remove(form);
                            VisibleForms.add(form);
                        }
                        var length = VisibleForms.Count;
                        for (var i3 = 0; i3 < length; i3 = (i3 + 1) | 0) {
                            if (VisibleForms.getItem(i3) != null && VisibleForms.getItem(i3).Content != null) {
                                VisibleForms.getItem(i3).ManagePlaceHolders();
                                VisibleForms.getItem(i3).Style.zIndex = Bridge.toString(zIndex);
                                zIndex = (zIndex + 1) | 0;

                            }
                        }
                    }

                    return zIndex;
                },
                CalculateZOrder: function () {
                    ExpressCraft.Form.GetActiveFormCollection();

                    if (ExpressCraft.Form.FormCollections == null && ExpressCraft.Form.standAloneForms.VisibleForms.Count === 0) {
                        return;
                    }
                    ExpressCraft.Form.FormCollections.remove(null);
                    var count = ExpressCraft.Form.FormCollections.Count;
                    var zIndex = 1;


                    ExpressCraft.Form.FormOverLay.style.opacity = count === 0 ? "" : count === 1 ? "0" : "0.4";

                    for (var x = 0; x < count; x = (x + 1) | 0) {
                        if (x === ((count - 1) | 0)) {
                            ExpressCraft.Form.FormOverLay.style.zIndex = Bridge.toString(zIndex);
                            zIndex = (zIndex + 1) | 0;
                        }
                        zIndex = ExpressCraft.Form.CalculateZOrder$1(ExpressCraft.Form.FormCollections.getItem(x), zIndex);
                    }
                    zIndex = ExpressCraft.Form.CalculateZOrder$1(ExpressCraft.Form.standAloneForms, zIndex);


                    if (ExpressCraft.Form.ActiveForm != null) {
                        ExpressCraft.Form.ActiveForm.Body.focus();
                    }
                }
            }
        },
        fields: {
            _disableBoxShadow: false,
            InDesign: false,
            PreviousSizeChange: false,
            PreviousMoveChange: false,
            PreviousShowMax: false,
            PreviousShowMin: false,
            PreviousOpacity: null,
            HasRemovedPlaceHolder: false,
            AllowSizeChange: false,
            AllowMoveChange: false,
            ForReuse: false,
            _IsDialog: false,
            Children: null,
            StartPosition: 0,
            TopMost: false,
            DialogResult: 0,
            Heading: null,
            ButtonClose: null,
            ButtonExpand: null,
            ButtonMinimize: null,
            ButtonMenu: null,
            HeadingTitle: null,
            Body: null,
            BodyOverLay: null,
            prev_px: 0,
            prev_py: 0,
            prev_width: 0,
            prev_height: 0,
            prev_top: 0,
            prev_left: 0,
            MinWidth: 0,
            MinHeight: 0,
            windowState: 0,
            _prevwindowState: 0,
            OnFormClosed: null,
            previousDisplay: null,
            DialogResults: null,
            _seperateInstance: false,
            closeAction: null,
            InClose: false,
            InDialogResult: false
        },
        props: {
            DisableBoxShadow: {
                get: function () {
                    return this._disableBoxShadow;
                },
                set: function (value) {
                    this._disableBoxShadow = value;
                    if (this._disableBoxShadow) {
                        this.Content.style.boxShadow = "none";
                    } else {
                        this.Content.style.boxShadow = null;
                    }
                }
            },
            HasSetup: {
                get: function () {
                    return ExpressCraft.Form._hasSetup;
                }
            },
            Controls: {
                get: function () {
                    return this.Body.children;
                }
            },
            ShowMinimize: {
                get: function () {
                    return this.ButtonMinimize != null;
                },
                set: function (value) {
                    this.ChangeHeadingButton(ExpressCraft.FormButtonType.Minimize, value);
                }
            },
            BodyStyle: {
                get: function () {
                    return this.Body.style;
                }
            },
            ShowClose: {
                get: function () {
                    return this.ButtonClose != null;
                },
                set: function (value) {
                    this.ChangeHeadingButton(ExpressCraft.FormButtonType.Close, value);
                }
            },
            ShowMaximize: {
                get: function () {
                    return this.ButtonExpand != null;
                },
                set: function (value) {
                    this.ChangeHeadingButton(ExpressCraft.FormButtonType.Maximize, value);
                }
            },
            ShowMenu: {
                get: function () {
                    return this.ButtonMenu != null;
                },
                set: function (value) {
                    this.ChangeHeadingButton(ExpressCraft.FormButtonType.Menu, value);
                }
            },
            WindowState: {
                get: function () {
                    return this.windowState;
                },
                set: function (value) {
                    this.SetWindowState(value);
                }
            },
            Text: {
                get: function () {
                    return this.HeadingTitle.innerHTML;
                },
                set: function (value) {
                    this.HeadingTitle.innerHTML = value;
                }
            },
            BackColor: {
                get: function () {
                    return this.Body.style.backgroundColor;
                },
                set: function (value) {
                    this.Body.style.backgroundColor = value;
                }
            },
            ForeColor: {
                get: function () {
                    return this.Body.style.color;
                },
                set: function (value) {
                    this.Body.style.color = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.InDesign = false;
                this.PreviousSizeChange = true;
                this.PreviousMoveChange = true;
                this.PreviousShowMax = true;
                this.PreviousShowMin = true;
                this.PreviousOpacity = "";
                this.AllowSizeChange = true;
                this.AllowMoveChange = true;
                this.ForReuse = false;
                this._IsDialog = false;
                this.Children = new (System.Collections.Generic.List$1(ExpressCraft.Control)).ctor();
                this.StartPosition = ExpressCraft.FormStartPosition.WindowsDefaultLocation;
                this.TopMost = false;
                this.DialogResult = ExpressCraft.DialogResultEnum.None;
                this.MinWidth = 200;
                this.MinHeight = 50;
                this._prevwindowState = ExpressCraft.WindowStateType.Normal;
                this.DialogResults = new (System.Collections.Generic.List$1(ExpressCraft.DialogResult)).ctor();
                this._seperateInstance = false;
                this.InClose = false;
                this.InDialogResult = false;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "form-base");
                this.Heading = ExpressCraft.Control.Div$1("form-heading");

                this.Heading.oncontextmenu = function (ev) {
                    ev.stopPropagation();
                    ev.preventDefault();
                };

                this.HeadingTitle = ExpressCraft.Control.Span$1("form-heading-title");

                this.Body = ExpressCraft.Control.Div$1("form-body");

                this.Body.oncontextmenu = Bridge.fn.bind(this, function (ev) {
                    if (Bridge.referenceEquals(ev.target, this.Body)) {
                        ev.stopPropagation();
                        ev.preventDefault();
                    }
                });

                this.BackColor = "#F0F0F0";

                this.BodyOverLay = ExpressCraft.Control.Div$1("form-body-overlay");

                this.BodyOverLay.style.opacity = ExpressCraft.Form.ShowBodyOverLay ? "0.5" : "0";

                this.ChangeHeadingButton(ExpressCraft.FormButtonType.Close);
                if (!ExpressCraft.Helper.NotDesktop) {
                    this.ChangeHeadingButton(ExpressCraft.FormButtonType.Maximize);
                    this.ChangeHeadingButton(ExpressCraft.FormButtonType.Minimize);
                }

                if (ExpressCraft.Helper.NotDesktop) {
                    this.Heading.style.height = "50px";
                    this.HeadingTitle.style.fontSize = "14px";

                    this.Body.style.top = "50px";
                    this.Body.style.height = "calc(100% - 50px)";

                    this.BodyOverLay.style.top = "50px";
                    this.BodyOverLay.style.height = "calc(100% - 50px)";
                }

                this.BodyOverLay.style.visibility = "collapse";

                this.Content.addEventListener("mousedown", Bridge.fn.bind(this, function (ev) {
                    if (ExpressCraft.Form.InExternalMouseEvent) {
                        return;
                    }
                    var mev = ev;

                    mev.stopPropagation();
                    mev.stopImmediatePropagation();

                    if (!this.IsActiveFormCollection()) {
                        return;
                    }

                    ExpressCraft.Form.Mouse_Down = true;

                    ExpressCraft.Form.MovingForm = this;
                    ExpressCraft.Form.ActiveForm = this;

                    ExpressCraft.Form.SetBodyOverLay();

                    var clientRec = this.Content.getBoundingClientRect();

                    var mousePos = ExpressCraft.Helper.GetClientMouseLocation(ev);

                    this.prev_px = clientRec.left - mousePos.Xf;
                    this.prev_py = clientRec.top - mousePos.Yf;

                    var width = clientRec.width;
                    var height = clientRec.height;

                    var X = mousePos.Xf - clientRec.left;
                    var Y = mousePos.Yf - clientRec.top;

                    if (this.windowState === ExpressCraft.WindowStateType.Maximized) {
                        ExpressCraft.Form.SetCursor("default");
                        ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.Move;
                    } else if (this.windowState === ExpressCraft.WindowStateType.Minimized) {
                        ExpressCraft.Form.SetCursor("default");
                        ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.None;
                        this.changeWindowState();
                    } else {
                        if (this.InDesign) {
                            return;
                        }

                        if (this.HeadingTitle != null && Bridge.referenceEquals(ev.target, this.HeadingTitle)) {
                            ExpressCraft.Form.SetCursor("default");
                            ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.Move;
                        } else {
                            if (this.AllowSizeChange) {
                                if (X <= ExpressCraft.Form.ResizeCorners && Y <= ExpressCraft.Form.ResizeCorners) {
                                    ExpressCraft.Form.SetCursor("nwse-resize");
                                    ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.TopLeftResize;
                                } else if (Y <= ExpressCraft.Form.ResizeCorners && X >= width - ExpressCraft.Form.ResizeCorners) {
                                    ExpressCraft.Form.SetCursor("nesw-resize");
                                    ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.TopRightResize;
                                } else if (Y <= ExpressCraft.Form.ResizeCorners) {
                                    ExpressCraft.Form.SetCursor("n-resize");
                                    ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.TopResize;
                                } else if (X <= ExpressCraft.Form.ResizeCorners && Y >= height - ExpressCraft.Form.ResizeCorners) {
                                    ExpressCraft.Form.SetCursor("nesw-resize");
                                    ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.BottomLeftResize;
                                } else if (Y >= height - ExpressCraft.Form.ResizeCorners && X >= width - ExpressCraft.Form.ResizeCorners) {
                                    ExpressCraft.Form.SetCursor("nwse-resize");
                                    ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.BottomRightResize;
                                } else if (Y >= height - ExpressCraft.Form.ResizeCorners) {
                                    ExpressCraft.Form.SetCursor("s-resize");
                                    ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.BottomResize;
                                } else if (X <= ExpressCraft.Form.ResizeCorners) {
                                    ExpressCraft.Form.SetCursor("w-resize");
                                    ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.LeftResize;
                                } else if (X >= width - ExpressCraft.Form.ResizeCorners) {
                                    ExpressCraft.Form.SetCursor("e-resize");
                                    ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.RightResize;
                                } else {
                                    ExpressCraft.Form.SetCursor("default");
                                    ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.Move;
                                }
                            }
                        }
                    }

                    if (!this.AllowMoveChange && ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.Move) {
                        ExpressCraft.Form.SetCursor("default");
                        ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.None;
                    }
                }));

                this.Heading.addEventListener("dblclick", Bridge.fn.bind(this, function (ev) {
                    if (this.AllowSizeChange) {
                        this.changeWindowState();
                    }

                    ev.preventDefault();
                    ev.stopPropagation();
                }));

                this.Content.addEventListener("mouseleave", function (ev) {
                    if (ExpressCraft.Form.MovingForm == null) {
                        ExpressCraft.Form.SetCursor("default");
                    }
                });

                this.Body.addEventListener("mouseenter", function (ev) {
                    ExpressCraft.Form.SetCursor("default");
                });

                this.Content.addEventListener("mousemove", Bridge.fn.bind(this, function (ev) {
                    if (ExpressCraft.Form.InExternalMouseEvent) {
                        return;
                    }

                    if (Bridge.referenceEquals(ev.target, this.HeadingTitle)) {
                        return;
                    }
                    var mev = ev;

                    var width = this.Content.clientWidth;
                    var height = this.Content.clientHeight;
                    var X = mev.pageX - this.Content.offsetLeft;
                    var Y = mev.pageY - this.Content.offsetTop;

                    if (ExpressCraft.Form.MovingForm != null && ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.Move) {
                        ExpressCraft.Form.SetCursor("default");
                        return;
                    } else if (this.windowState === ExpressCraft.WindowStateType.Maximized) {
                        ExpressCraft.Form.SetCursor("default");
                        return;
                    }
                    if (this.InDesign) {
                        return;
                    }

                    if (this.AllowSizeChange) {
                        if (ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.TopLeftResize || X <= ExpressCraft.Form.ResizeCorners && Y <= ExpressCraft.Form.ResizeCorners) {
                            ExpressCraft.Form.SetCursor("nwse-resize");
                        } else if (ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.TopRightResize || Y <= ExpressCraft.Form.ResizeCorners && X >= ((width - ExpressCraft.Form.ResizeCorners) | 0)) {
                            ExpressCraft.Form.SetCursor("nesw-resize");
                        } else if (Y <= ExpressCraft.Form.ResizeCorners || ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.TopResize) {
                            ExpressCraft.Form.SetCursor("n-resize");
                        } else if (ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.BottomLeftResize || X <= ExpressCraft.Form.ResizeCorners && Y >= ((height - ExpressCraft.Form.ResizeCorners) | 0)) {
                            ExpressCraft.Form.SetCursor("nesw-resize");
                        } else if (ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.BottomRightResize || Y >= ((height - ExpressCraft.Form.ResizeCorners) | 0) && X >= ((width - ExpressCraft.Form.ResizeCorners) | 0)) {
                            ExpressCraft.Form.SetCursor("nwse-resize");
                        } else if (ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.BottomResize || Y >= ((height - ExpressCraft.Form.ResizeCorners) | 0)) {
                            ExpressCraft.Form.SetCursor("s-resize");
                        } else if (ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.LeftResize || X <= ExpressCraft.Form.ResizeCorners) {
                            ExpressCraft.Form.SetCursor("w-resize");
                        } else if (ExpressCraft.Form.MoveAction === ExpressCraft.MouseMoveAction.RightResize || X >= ((width - ExpressCraft.Form.ResizeCorners) | 0)) {
                            ExpressCraft.Form.SetCursor("e-resize");
                        } else {
                            ExpressCraft.Form.SetCursor("default");
                        }
                    } else {
                        ExpressCraft.Form.SetCursor("default");
                    }
                }));

                this.Heading.addEventListener("mousedown", Bridge.fn.bind(this, function (ev) {
                    ExpressCraft.Form.SetBodyOverLay();
                    if (!this.IsActiveFormCollection()) {
                        return;
                    }

                    if (this.windowState === ExpressCraft.WindowStateType.Maximized) {
                        ExpressCraft.Form.MovingForm = this;
                        ExpressCraft.Form.SetCursor("default");

                        ExpressCraft.Form.MoveAction = ExpressCraft.MouseMoveAction.Move;
                    } else {
                        ExpressCraft.Form.MovingForm = this;
                    }

                    ExpressCraft.Form.ActiveForm = this;
                }));

                this.Body.addEventListener("mousedown", Bridge.fn.bind(this, function (ev) {
                    if (ExpressCraft.Form.InExternalMouseEvent) {
                        return;
                    }
                    if (!this.IsActiveFormCollection()) {
                        return;
                    }

                    ExpressCraft.Form.ActiveForm = this;
                    ExpressCraft.Form.MovingForm = null;
                    ev.stopPropagation();
                }));

                this.Body.addEventListener("mousemove", Bridge.fn.bind(this, function (ev) {
                    if (ExpressCraft.Form.InExternalMouseEvent) {
                        return;
                    }

                    if (ExpressCraft.Form.MovingForm == null) {
                        if (!this.IsActiveFormCollection()) {
                            return;
                        }
                        ev.stopPropagation();
                    }
                }));

                this.BodyOverLay.addEventListener("mousedown", Bridge.fn.bind(this, function (ev) {
                    if (this.InDesign) {
                        this.BodyOverLay.style.visibility = "collapse";
                        return;
                    }
                    if (!this.IsActiveFormCollection()) {
                        return;
                    }
                    this.BodyOverLay.style.visibility = "collapse";
                    ExpressCraft.Form.ActiveForm = this;
                }));

                this.Body.addEventListener("mouseleave", Bridge.fn.bind(this, function (ev) {
                    if (this.InDesign) {
                        this.BodyOverLay.style.visibility = "collapse";
                        return;
                    }

                    if (ExpressCraft.Form.MovingForm == null) {
                        ExpressCraft.Form.SetBodyOverLay();
                    }
                }));

                this.BodyOverLay.addEventListener("mouseenter", Bridge.fn.bind(this, function (ev) {
                    if (this.InDesign) {
                        this.BodyOverLay.style.visibility = "collapse";
                        return;
                    }
                    if (ExpressCraft.Form.MovingForm == null && this.IsActiveFormCollection()) {
                        ExpressCraft.Form.SetCursor("default");
                        this.BodyOverLay.style.visibility = "collapse";
                    } else {
                        this.BodyOverLay.style.visibility = "visible";
                    }
                }));

                this.Content.style.width = ExpressCraft.Helper.ToPx(Bridge.box(ExpressCraft.Form.Window_DefaultWidth, System.Int32));
                this.Content.style.height = ExpressCraft.Helper.ToPx(Bridge.box(ExpressCraft.Form.Window_DefaultHeight, System.Int32));

                ExpressCraft.Helper.AppendChild$2(this.Content, this.Heading);
                ExpressCraft.Helper.AppendChild$2(this.Content, this.Body);
                ExpressCraft.Helper.AppendChild$2(this.Content, this.BodyOverLay);

                ExpressCraft.Helper.AppendChild$2(this.Heading, this.HeadingTitle);

                this.closeAction = Bridge.fn.bind(this, function () {
                    ExpressCraft.Helper.Empty(this.Content);
                    if (this.Content != null) {
                        ExpressCraft.Helper.Delete$1(this.Content);
                        this.Content = null;
                    }
                });

                this.Initialise();
            }
        },
        methods: {
            IsDialog: function () {
                return this._IsDialog;
            },
            LinkchildToForm: function (child) {
                if (child == null) {
                    return;
                }
                this.Children.add(child);
                child.LinkedForm = this;
            },
            LinkchildrenToForm: function (children) {
                if (children === void 0) { children = []; }
                if (children == null || children.length === 0) {
                    return;
                }
                this.Children.AddRange(children);
                for (var i = 0; i < children.length; i = (i + 1) | 0) {
                    if (children[System.Array.index(i, children)] != null) {
                        children[System.Array.index(i, children)].LinkedForm = this;
                    }
                }
            },
            AppendChild: function (node) {
                this.Body.appendChild(ExpressCraft.Control.op_Implicit(node));

                return this;
            },
            AppendChild$1: function (node) {
                this.Body.appendChild(node);

                return this;
            },
            AppendChildren: function (node) {
                if (node === void 0) { node = []; }
                ExpressCraft.Helper.AppendChildren$1(this.Body, node);

                return this;
            },
            AppendChildren$1: function (node) {
                if (node === void 0) { node = []; }
                ExpressCraft.Helper.AppendChildren$2(this.Body, node);

                return this;
            },
            ResizeChildren: function (parent) {
                if (!Bridge.staticEquals(this.OnResize, null)) {
                    this.OnResize(this);
                }
                this.OnResizing();

                for (var x = 0; x < parent.children.length; x = (x + 1) >>> 0) {
                    if (!parent.children[x].classList.contains("control")) {
                        continue;
                    }
                    for (var i = 0; i < this.Children.Count; i = (i + 1) | 0) {
                        if (this.Children.getItem(i) != null && !Bridge.staticEquals(this.Children.getItem(i).OnResize, null)) {
                            if (Bridge.referenceEquals(this.Children.getItem(i).Content, parent.children[x])) {
                                this.Children.getItem(i).OnResize(this.Children.getItem(i));
                                break;
                            }
                        }
                    }
                    this.ResizeChildren(parent.children[x]);
                }
            },
            Resizing: function () {
                if (!Bridge.staticEquals(this.OnResize, null)) {
                    this.OnResize(this);
                }
                this.OnResizing();

                for (var i = 0; i < this.Children.Count; i = (i + 1) | 0) {
                    if (this.Children.getItem(i) != null && !Bridge.staticEquals(this.Children.getItem(i).OnResize, null)) {
                        this.Children.getItem(i).OnResize(this.Children.getItem(i));
                    }
                }
            },
            OnResizing: function () { },
            IsContentVisible: function () {
                return this.Content != null && System.String.equals(this.Content.style.visibility, "visible");
            },
            ChangeHeadingButton: function (button, visible) {
                if (visible === void 0) { visible = true; }
                switch (button) {
                    case ExpressCraft.FormButtonType.Minimize: 
                        if (this.ButtonMinimize != null) {
                            ExpressCraft.Helper.Delete$1(this.ButtonMinimize);
                            this.ButtonMinimize = null;
                        }
                        if (visible) {
                            this.ButtonMinimize = this.CreateFormButton(button);
                        }
                        break;
                    case ExpressCraft.FormButtonType.Maximize: 
                        if (this.ButtonExpand != null) {
                            ExpressCraft.Helper.Delete$1(this.ButtonExpand);
                            this.ButtonExpand = null;
                        }
                        if (visible) {
                            this.ButtonExpand = this.CreateFormButton(button);
                        }
                        break;
                    case ExpressCraft.FormButtonType.Close: 
                        if (this.ButtonClose != null) {
                            ExpressCraft.Helper.Delete$1(this.ButtonClose);
                            this.ButtonClose = null;
                        }
                        if (visible) {
                            this.ButtonClose = this.CreateFormButton(button);
                        }
                        break;
                    case ExpressCraft.FormButtonType.Menu: 
                        if (this.ButtonMenu != null) {
                            ExpressCraft.Helper.Delete$1(this.ButtonMenu);
                            this.ButtonMenu = null;
                        }
                        if (visible) {
                            this.ButtonMenu = this.CreateFormButton(button);
                        }
                        break;
                    default: 
                        break;
                }

                this.CalculateButtonLocations();
            },
            Initialise: function () { },
            OnShowing: function () { },
            OnShowed: function () { },
            OnClosing: function () { },
            OnClosed: function () { },
            ShowBodyOverLayStyle: function () {
                if (this.BodyOverLay != null && System.String.equals(this.BodyOverLay.style.visibility, "collapse")) {
                    if (this.InDesign) {
                        return;
                    }
                    this.BodyOverLay.style.visibility = "visible";
                }
            },
            OnGotFocus: function () { },
            OnLostFocus: function () { },
            SetWindowState: function (State) {
                if (State === this.windowState) {
                    return;
                }

                this._prevwindowState = this.windowState;

                if (this._prevwindowState === ExpressCraft.WindowStateType.Minimized) {
                    this.Body.style.opacity = this.PreviousOpacity;
                    this.AllowSizeChange = this.PreviousSizeChange;
                    this.AllowMoveChange = this.PreviousMoveChange;
                    this.ShowMaximize = this.PreviousShowMax;
                    this.ShowMinimize = this.PreviousShowMin;
                    this.HeadingTitle.style.left = "";
                    this.HeadingTitle.style.marginRight = "";
                    this.HeadingTitle.style.transform = "";

                    if (this.ButtonMinimize != null) {
                        this.ButtonMinimize.innerHTML = "-";
                    }
                    this.Heading.classList.remove("form-heading-min");

                    ExpressCraft.Form.MinimizedForms.remove(this);

                    this.Body.style.display = this.previousDisplay;

                    ExpressCraft.Form.CalculateMinmizedFormsLocation();
                }

                if (!this.AllowSizeChange) {
                    return;
                }

                if (((this.windowState = State)) === ExpressCraft.WindowStateType.Normal) {
                    ExpressCraft.Helper.SetBounds(this, this.prev_left, this.prev_top, this.prev_width, this.prev_height);
                    this.Resizing();
                    this.Style.borderWidth = "1px";
                } else if (this.windowState === ExpressCraft.WindowStateType.Maximized) {
                    if (this._prevwindowState === ExpressCraft.WindowStateType.Normal) {
                        this.prev_left = ExpressCraft.Helper.ToInt(this.Left);
                        this.prev_top = ExpressCraft.Helper.ToInt(this.Top);
                        this.prev_width = ExpressCraft.Helper.ToInt(this.Width);
                        this.prev_height = ExpressCraft.Helper.ToInt(this.Height);
                    }

                    this.Style.borderWidth = "0";

                    ExpressCraft.Helper.SetBounds(this, 0, 0, "100%", "100%");
                } else if (this.windowState === ExpressCraft.WindowStateType.Minimized) {
                    this.PreviousSizeChange = this.AllowSizeChange;
                    this.PreviousMoveChange = this.AllowMoveChange;
                    this.PreviousOpacity = this.Body.style.opacity;
                    this.PreviousShowMax = this.ShowMaximize;
                    this.PreviousShowMin = this.ShowMinimize;

                    this.AllowSizeChange = false;
                    this.Body.style.opacity = "0";
                    this.ShowMaximize = false;
                    this.ShowMinimize = false;
                    this.AllowMoveChange = false;

                    if (this._prevwindowState === ExpressCraft.WindowStateType.Normal) {
                        this.prev_left = ExpressCraft.Helper.ToInt(this.Left);
                        this.prev_top = ExpressCraft.Helper.ToInt(this.Top);
                        this.prev_width = ExpressCraft.Helper.ToInt(this.Width);
                        this.prev_height = ExpressCraft.Helper.ToInt(this.Height);
                    } else {
                        this.Style.borderWidth = "1px";
                    }

                    this.HeadingTitle.style.marginRight = "0";
                    this.HeadingTitle.style.left = "3px";
                    this.HeadingTitle.style.transform = "translate(0, -50%)";

                    var offset = (this.ShowClose ? 45.5 : 0);

                    this.Width = Math.max(ExpressCraft.Control.GetTextWidth(this.Text, "10pt Tahoma") + 32, 100) + offset;
                    this.Height = 30;

                    this.Heading.classList.add("form-heading-min");

                    if (this.ButtonMinimize != null) {
                        this.ButtonMinimize.innerHTML = "+";
                    }

                    this.previousDisplay = this.Body.style.display;
                    this.Body.style.display = "none";

                    ExpressCraft.Form.MinimizedForms.add(this);

                    ExpressCraft.Form.CalculateMinmizedFormsLocation();
                }

                this.Resizing();
            },
            changeWindowState: function () {
                if (this.windowState === ExpressCraft.WindowStateType.Maximized) {
                    this.SetWindowState(ExpressCraft.WindowStateType.Normal);
                } else if (this.windowState === ExpressCraft.WindowStateType.Minimized) {
                    this.SetWindowState(this._prevwindowState);
                } else {
                    this.SetWindowState(ExpressCraft.WindowStateType.Maximized);
                }
            },
            CalculateButtonLocations: function () {
                var RightOffset = 0;
                var append = 45.5;

                if (ExpressCraft.Helper.NotDesktop) {
                    append = 65.5;
                }

                if (this.ShowClose) {
                    if (ExpressCraft.Helper.NotDesktop) {
                        this.ButtonClose.style.left = "calc(100% - " + System.Single.format(append) + "px)";
                    }
                    RightOffset += append;
                    if (!this.Heading.contains(this.ButtonClose)) {
                        ExpressCraft.Helper.AppendChild$2(this.Heading, this.ButtonClose);
                    }
                }

                if (this.ShowMaximize) {
                    RightOffset += append;
                    this.ButtonExpand.style.left = "calc(100% - " + System.Single.format(RightOffset) + "px)";
                    if (!this.Heading.contains(this.ButtonExpand)) {
                        ExpressCraft.Helper.AppendChild$2(this.Heading, this.ButtonExpand);
                    }
                }
                if (this.ShowMinimize) {
                    RightOffset += append;
                    this.ButtonMinimize.style.left = "calc(100% - " + System.Single.format(RightOffset) + "px)";
                    if (!this.Heading.contains(this.ButtonMinimize)) {
                        ExpressCraft.Helper.AppendChild$2(this.Heading, this.ButtonMinimize);
                    }
                }

                if (this.ShowMenu) {
                    this.ButtonMenu.style.left = "0";
                    if (!this.Heading.contains(this.ButtonMenu)) {
                        ExpressCraft.Helper.AppendChild$2(this.Heading, this.ButtonMenu);
                    }
                }
            },
            CreateFormButton: function (Type) {
                var butt = ExpressCraft.Control.Div$1("form-heading-button");

                switch (Type) {
                    case ExpressCraft.FormButtonType.Close: 
                        butt.classList.add("form-heading-button-close");
                        butt.innerHTML = "&times;";
                        butt.onmousedown = Bridge.fn.bind(this, function (ev) {
                            if (ExpressCraft.Form.MovingForm != null) {
                                return;
                            }
                            ExpressCraft.Form.Mouse_Down = true;

                            ev.stopPropagation();
                            ev.preventDefault();

                            ExpressCraft.Form.ActiveForm = this;
                        });
                        butt.onmouseup = Bridge.fn.bind(this, function (ev) {
                            if (ExpressCraft.Form.MovingForm != null) {
                                return;
                            }

                            ev.stopPropagation();
                            ev.preventDefault();

                            if (this.InDesign) {
                                return;
                            }

                            this.Close();
                        });
                        break;
                    case ExpressCraft.FormButtonType.Maximize: 
                        butt.innerHTML = "&#9633;";
                        butt.onmouseup = Bridge.fn.bind(this, function (ev) {
                            if (ExpressCraft.Form.MovingForm != null) {
                                return;
                            }

                            ev.stopPropagation();
                            ev.preventDefault();

                            ExpressCraft.Form.Mouse_Down = false;

                            this.changeWindowState();
                        });
                        break;
                    case ExpressCraft.FormButtonType.Minimize: 
                        butt.innerHTML = "-";
                        butt.onmouseup = Bridge.fn.bind(this, function (ev) {
                            if (ExpressCraft.Form.MovingForm != null) {
                                return;
                            }

                            ev.stopPropagation();
                            ev.preventDefault();

                            if (Bridge.referenceEquals(butt.innerHTML, "-")) {
                                butt.innerHTML = "+";
                                this.WindowState = ExpressCraft.WindowStateType.Minimized;
                            } else {
                                this.WindowState = this._prevwindowState === ExpressCraft.WindowStateType.Minimized ? ExpressCraft.WindowStateType.Normal : this._prevwindowState;
                                butt.innerHTML = "-";
                            }

                            ExpressCraft.Form.Mouse_Down = false;
                        });
                        break;
                    case ExpressCraft.FormButtonType.Restore: 
                        break;
                    case ExpressCraft.FormButtonType.Help: 
                        break;
                    default: 
                        butt.onmouseup = function (ev) {
                            if (ExpressCraft.Form.MovingForm != null) {
                                return;
                            }

                            ev.stopPropagation();
                            ev.preventDefault();

                            ExpressCraft.Form.Mouse_Down = false;
                        };
                        break;
                    case ExpressCraft.FormButtonType.Menu: 
                        butt.innerHTML = "&#9776;";
                        butt.onmouseup = Bridge.fn.bind(this, function (ev) {
                            if (ExpressCraft.Form.MovingForm != null) {
                                return;
                            }

                            ev.stopPropagation();
                            ev.preventDefault();

                            ExpressCraft.Form.Mouse_Down = false;

                            this.OnMenuClick();
                        });
                        break;
                }

                butt.onmouseenter = function (ev) {
                    if (ExpressCraft.Form.MovingForm != null) {
                        return;
                    }
                    ExpressCraft.Form.SetCursor("default");
                };

                butt.ondblclick = function (ev) {
                    ev.stopPropagation();
                };

                butt.onmousemove = function (ev) {
                    if (ExpressCraft.Form.MovingForm != null) {
                        return;
                    }

                    ev.stopImmediatePropagation();
                    ev.preventDefault();
                };

                if (Type !== ExpressCraft.FormButtonType.Close) {
                    butt.onmousedown = Bridge.fn.bind(this, function (ev) {
                        if (ExpressCraft.Form.MovingForm != null) {
                            return;
                        }

                        ExpressCraft.Form.Mouse_Down = true;

                        ev.stopPropagation();
                        ev.preventDefault();

                        ExpressCraft.Form.ActiveForm = this;
                    });
                }

                if (ExpressCraft.Helper.NotDesktop) {
                    butt.style.width = "65px";
                    butt.style.height = "49px";
                    butt.style.fontSize = "16pt";
                    butt.style.lineHeight = "49px";
                    ExpressCraft.Helper.ExchangeClass$1(butt, "primary", "primary");
                    butt.style.filter = "brightness(110%)";
                }

                return butt;
            },
            OnMenuClick: function () { },
            TitleBarHeight: function () {
                return this.Heading.clientHeight;
            },
            TitleBarWidth: function () {
                return this.Heading.clientWidth;
            },
            ClientX: function () {
                return this.Body.clientLeft;
            },
            ClientY: function () {
                return this.Body.clientTop;
            },
            GetFormCollectionFromForm: function (form) {
                if (form._seperateInstance) {
                    var visibleForms = ExpressCraft.Form.standAloneForms.VisibleForms;
                    for (var x = 0; x < visibleForms.Count; x = (x + 1) | 0) {
                        if (Bridge.referenceEquals(visibleForms.getItem(x), this)) {
                            return ExpressCraft.Form.standAloneForms;
                        }
                    }
                } else {
                    for (var i = 0; i < ExpressCraft.Form.FormCollections.Count; i = (i + 1) | 0) {
                        if (Bridge.referenceEquals(this, ExpressCraft.Form.FormCollections.getItem(i).FormOwner)) {
                            return ExpressCraft.Form.FormCollections.getItem(i);
                        }
                        var visibleForms1 = ExpressCraft.Form.FormCollections.getItem(i).VisibleForms;
                        for (var x1 = 0; x1 < visibleForms1.Count; x1 = (x1 + 1) | 0) {
                            if (Bridge.referenceEquals(visibleForms1.getItem(x1), this)) {
                                return ExpressCraft.Form.FormCollections.getItem(i);
                            }
                        }
                    }
                }

                return null;
            },
            IsActiveFormCollection: function () {
                if (this._seperateInstance) {
                    return Bridge.referenceEquals(this.GetFormCollectionFromForm(this), ExpressCraft.Form.standAloneForms);
                } else {
                    return Bridge.referenceEquals(this.GetFormCollectionFromForm(this), ExpressCraft.Form.GetActiveFormCollection());
                }
            },
            IsVisible: function () {
                return this.GetFormCollectionFromForm(this) != null;
            },
            ShowStartNewLevel: function () {
                if (!this.HasSetup) {
                    ExpressCraft.Form.Setup();
                }

                if (this.IsVisible()) {
                    throw new System.Exception("Invalid request to open form as a dialog that is already visible!");
                }

                ExpressCraft.Form.FormCollections.add(new ExpressCraft.FormCollection(this));
                ExpressCraft.Helper.AppendChild$1(ExpressCraft.Form.WindowHolder, this);

                ExpressCraft.Form.CalculateZOrder();

                if (this.StartPosition === ExpressCraft.FormStartPosition.Center) {
                    this.CentreForm();
                }

                this.OnShowed();

                this.Resizing();

                ExpressCraft.Form.ActiveForm = this;

                ExpressCraft.Helper.FocusElement(this.Body);
            },
            ShowDialog: function (dialogResults) {
                if (dialogResults === void 0) { dialogResults = []; }
                if (!this.HasSetup) {
                    ExpressCraft.Form.Setup();
                }

                this.InDialogResult = false;

                if (this.ButtonMinimize != null) {
                    ExpressCraft.Helper.Delete$1(this.ButtonMinimize);
                }
                if (this.ButtonExpand != null) {
                    ExpressCraft.Helper.Delete$1(this.ButtonExpand);
                }
                if (this.ButtonClose != null) {
                    ExpressCraft.Helper.Delete$1(this.ButtonClose);
                }

                this._IsDialog = true;
                if (this.StartPosition !== ExpressCraft.FormStartPosition.Manual) {
                    if (!ExpressCraft.Helper.NotDesktop) {
                        this.StartPosition = ExpressCraft.FormStartPosition.Center;
                    }
                }
                this.ShowStartNewLevel();

                if (dialogResults != null && dialogResults.length > 0) {
                    this.DialogResults.AddRange(dialogResults);
                }
            },
            MinZero$1: function (input) {
                return input < 0 ? 0 : input;
            },
            MinZero: function (input) {
                return input < 0 ? 0 : input;
            },
            CentreForm: function () {
                if (ExpressCraft.Form.WindowHolder == null) {
                    return;
                }

                this.Content.style.left = ExpressCraft.Helper.ToPx(Bridge.box(this.MinZero$1((((Bridge.Int.div(ExpressCraft.Form.WindowHolder.clientWidth, 2)) | 0)) - (((Bridge.Int.div(parseInt(ExpressCraft.Helper.ToHtmlValue(this.Width)), 2)) | 0))), System.Single, System.Single.format, System.Single.getHashCode));
                this.Content.style.top = ExpressCraft.Helper.ToPx(Bridge.box(this.MinZero$1((((Bridge.Int.div(ExpressCraft.Form.WindowHolder.clientHeight, 2)) | 0)) - (((Bridge.Int.div(parseInt(ExpressCraft.Helper.ToHtmlValue(this.Height)), 2)) | 0))), System.Single, System.Single.format, System.Single.getHashCode));
            },
            Render: function () {
                if (!this.HasRendered) {
                    ExpressCraft.Control.prototype.Render.call(this);
                    this.OnShowing();
                    this.Shown();
                }
            },
            Shown: function () {
                this.InClose = false;
                if (this.Children == null) {
                    return;
                }
                for (var i = 0; i < this.Children.Count; i = (i + 1) | 0) {
                    if (this.Children.getItem(i) != null && !Bridge.staticEquals(this.Children.getItem(i).OnLoaded, null)) {
                        this.Children.getItem(i).OnLoaded(this.Children.getItem(i));
                    }
                }
                this.Children.remove(null);
            },
            Show: function (seperateInstance) {
                if (seperateInstance === void 0) { seperateInstance = false; }
                if (!this.HasSetup) {
                    ExpressCraft.Form.Setup();
                }

                if (this._IsDialog) {
                    return;
                }
                this._seperateInstance = seperateInstance;
                if (!seperateInstance && (ExpressCraft.Form.FormCollections == null || ExpressCraft.Form.FormCollections.Count === 0)) {
                    this.ShowStartNewLevel();
                    return;
                }

                var activeCollect = !seperateInstance ? ExpressCraft.Form.GetActiveFormCollection() : ExpressCraft.Form.standAloneForms;
                var visbileForms = activeCollect.VisibleForms;

                if (!visbileForms.contains(this)) {
                    visbileForms.add(this);
                    ExpressCraft.Helper.AppendChild$1(ExpressCraft.Form.WindowHolder, this);

                    this.Content.style.visibility = "visible";

                    ExpressCraft.Form.CalculateZOrder();

                    if (this.StartPosition !== ExpressCraft.FormStartPosition.Manual && this.windowState === ExpressCraft.WindowStateType.Normal) {
                        if (this.StartPosition === ExpressCraft.FormStartPosition.Center || (activeCollect == null || visbileForms == null || visbileForms.Count === 0 || visbileForms.getItem(((visbileForms.Count - 1) | 0)).windowState !== ExpressCraft.WindowStateType.Normal || visbileForms.getItem(((visbileForms.Count - 1) | 0)).Content == null)) {
                            this.CentreForm();
                        } else if (this.StartPosition === ExpressCraft.FormStartPosition.WindowsDefaultLocation) {
                            var obj = visbileForms.getItem(((visbileForms.Count - 1) | 0));

                            var x = Bridge.box(parseInt(ExpressCraft.Helper.ToHtmlValue(obj.Left)), System.Int32);
                            var y = Bridge.box(parseInt(ExpressCraft.Helper.ToHtmlValue(obj.Top)), System.Int32);

                            if (isNaN(Bridge.unbox(x))) {
                                x = Bridge.box(0, System.Int32);
                            }
                            if (isNaN(Bridge.unbox(y))) {
                                y = Bridge.box(0, System.Int32);
                            }

                            var rec = ExpressCraft.Form.WindowHolder.getBoundingClientRect();

                            var pw25 = rec.width * 0.15;
                            var ph25 = rec.height * 0.15;

                            var pw75 = rec.width * 0.55;
                            var ph75 = rec.height * 0.55;

                            if (System.Nullable.getValue(Bridge.cast(Bridge.unbox(x, System.Int32), System.Int32)) < pw25) {
                                x = Bridge.box(Bridge.Int.clip32(pw25), System.Int32);
                            }
                            if (System.Nullable.getValue(Bridge.cast(Bridge.unbox(y, System.Int32), System.Int32)) < ph25) {
                                y = Bridge.box(Bridge.Int.clip32(ph25), System.Int32);
                            }

                            if (System.Nullable.getValue(Bridge.cast(Bridge.unbox(x, System.Int32), System.Int32)) > pw75) {
                                x = Bridge.box(Bridge.Int.clip32(pw25), System.Int32);
                            }
                            if (System.Nullable.getValue(Bridge.cast(Bridge.unbox(y, System.Int32), System.Int32)) > ph75) {
                                y = Bridge.box(Bridge.Int.clip32(ph25), System.Int32);
                            }
                            x = Bridge.box((System.Nullable.getValue(Bridge.cast(Bridge.unbox(x, System.Int32), System.Int32)) + 10) | 0, System.Int32);
                            y = Bridge.box((System.Nullable.getValue(Bridge.cast(Bridge.unbox(y, System.Int32), System.Int32)) + 10) | 0, System.Int32);

                            this.Content.style.left = ExpressCraft.Helper.ToPx(Bridge.box(this.MinZero(System.Nullable.getValue(Bridge.cast(Bridge.unbox(x, System.Int32), System.Int32))), System.Int32));
                            this.Content.style.top = ExpressCraft.Helper.ToPx(Bridge.box(this.MinZero(System.Nullable.getValue(Bridge.cast(Bridge.unbox(x, System.Int32), System.Int32))), System.Int32));
                        }
                    }

                    this.OnShowed();

                    this.Resizing();
                }

                ExpressCraft.Form.ActiveForm = this;

                if (ExpressCraft.Helper.NotDesktop) {
                    setTimeout(Bridge.fn.bind(this, function (a) {
                        this.Content.focus();
                        this.Content.click();
                    }), 0);
                }
            },
            BringToFront: function () {
                var activeCollect = ExpressCraft.Form.GetActiveFormCollection();
                if (activeCollect != null) {
                    if (Bridge.referenceEquals(activeCollect.FormOwner, this)) {
                        return;
                    }
                    var visibleForms = activeCollect.VisibleForms;
                    if (visibleForms != null && visibleForms.Count > 1) {
                        visibleForms.remove(this);
                        visibleForms.add(this);
                    }

                    ExpressCraft.Form.CalculateZOrder();
                }
            },
            SetZIndex: function (zIndex) {
                this.Content.style.zIndex = Bridge.toString((Bridge.identity(zIndex.v, (zIndex.v = (zIndex.v + 1) | 0))));
            },
            GetControlBase: function () {
                return this.Body;
            },
            ManagePlaceHolders: function () {
                if (!ExpressCraft.Settings.RemoveAttributesOffElementsWhenLoseFocus) {
                    return;
                }

                var shouldHidePlaceholders = !Bridge.referenceEquals(ExpressCraft.Form.ActiveForm, this);

                if (shouldHidePlaceholders !== this.HasRemovedPlaceHolder) {
                    this.HasRemovedPlaceHolder = shouldHidePlaceholders;
                    var que = new (System.Collections.Generic.Queue$1(HTMLElement)).ctor();
                    que.Enqueue(this.Body);

                    while (que.Count > 0) {
                        var element = que.Dequeue();
                        if (shouldHidePlaceholders) {
                            var a = element.getAttribute("placeholder");
                            if (!System.String.isNullOrWhiteSpace(a)) {
                                element.removeAttribute("placeholder");
                                element.setAttribute("data-placeholder", a);
                            }
                        } else {
                            var a1 = element.getAttribute("data-placeholder");
                            if (!System.String.isNullOrWhiteSpace(a1)) {
                                element.removeAttribute("data-placeholder");
                                element.setAttribute("placeholder", a1);
                            }
                        }
                        var length = Bridge.Int.clip32(element.childElementCount);
                        if (length > 0) {
                            for (var i = 0; System.Int64(i).lt(System.Int64(length)); i = (i + 1) >>> 0) {
                                que.Enqueue(element.children[i]);
                            }
                        }
                    }
                }
            },
            Close: function () {
                if (this._IsDialog && this.InDialogResult) {
                    return;
                }

                this.InClose = true;

                this.OnClosing();

                ExpressCraft.Form.ToClean.add(this);

                var ownerFormCollection = this.GetFormCollectionFromForm(this);

                if (ownerFormCollection != null) {
                    if (Bridge.referenceEquals(ownerFormCollection.FormOwner, this)) {
                        ownerFormCollection.FormOwner = null;
                        for (var i = 0; i < ownerFormCollection.VisibleForms.Count; i = (i + 1) | 0) {
                            if (Bridge.referenceEquals(ownerFormCollection.VisibleForms.getItem(i), this)) {
                                continue;
                            }
                            ownerFormCollection.VisibleForms.getItem(i).Close();
                        }
                        if (ExpressCraft.Form.FormCollections.Count === 1) {
                            ExpressCraft.Form.FormCollections = new (System.Collections.Generic.List$1(ExpressCraft.FormCollection)).ctor();
                        }
                    } else {
                        ownerFormCollection.VisibleForms.remove(this);
                    }
                }

                if (this.Content != null) {
                    if (!this.ForReuse) {
                        if (ExpressCraft.Settings.FormFadeDuration > 0) {

                        } else {
                            this.closeAction();
                        }
                        this.closeAction();
                    } else {
                        this.Content.style.visibility = "collapse";
                    }
                }

                ExpressCraft.Form.CalculateZOrder();

                ExpressCraft.Form.ActiveForm = ExpressCraft.Form._PrevActiveForm;
                if (this._IsDialog) {
                    this.InDialogResult = true;
                    if (this.DialogResult !== ExpressCraft.DialogResultEnum.None && this.DialogResults != null && this.DialogResults.Count > 0) {
                        for (var i1 = 0; i1 < this.DialogResults.Count; i1 = (i1 + 1) | 0) {
                            this.DialogResults.getItem(i1).InvokeIfResult(this.DialogResult);
                        }
                    }
                }

                if (!Bridge.staticEquals(this.OnFormClosed, null)) {
                    this.OnFormClosed();
                }
                this.OnClosed();

                if (this.WindowState === ExpressCraft.WindowStateType.Minimized) {
                    ExpressCraft.Form.MinimizedForms.remove(this);
                    ExpressCraft.Form.CalculateMinmizedFormsLocation();
                }

                this.InClose = false;
            }
        }
    });

    Bridge.define("ExpressCraft.CalculatorControl", {
        inherits: [ExpressCraft.Control],
        fields: {
            DisplayInput: null,
            btnClose: null,
            btnBack: null,
            btnCE: null,
            btnC: null,
            btnPTAX: null,
            btnMTAX: null,
            btnTAX: null,
            btnDbl: null,
            btn7: null,
            btn8: null,
            btn9: null,
            btnDiv: null,
            btnSqrt: null,
            btn4: null,
            btn5: null,
            btn6: null,
            btnMul: null,
            btnPer: null,
            btn1: null,
            btn2: null,
            btn3: null,
            btnMinus: null,
            btn1OverX: null,
            btn0: null,
            btnplusOrNeg: null,
            btnDot: null,
            btnPlus: null,
            btnEq: null,
            Value: System.Decimal(0.0),
            _commands: null,
            current_command: null,
            OnEqual: null,
            OnClose: null,
            DontRefresh: false
        },
        ctors: {
            init: function () {
                this._commands = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.current_command = "";
                this.DontRefresh = false;
            },
            ctor: function (startingValue, CloseButtonVisible) {
                if (CloseButtonVisible === void 0) { CloseButtonVisible = false; }
                var $t;

                this.$initialize();
                ExpressCraft.Control.$ctor1.call(this);
                this.Value = startingValue;

                this.current_command = this.Value.toString();

                var doc = document.createDocumentFragment();

                var AddHeight = (ExpressCraft.Helper.NotDesktop ? 45 : 22);


                doc.appendChild(((this.DisplayInput = ($t = new ExpressCraft.MemoInput(), $t.Readonly = true, $t.Bounds = new ExpressCraft.Vector4.$ctor1(4, 4, "(100% - 8px)", AddHeight), $t))).Content);

                if (ExpressCraft.Helper.NotDesktop) {
                    this.DisplayInput.Style.fontSize = "14px";
                    this.DisplayInput.Height = 45;
                }

                var buttons = new (System.Collections.Generic.List$1(ExpressCraft.SimpleButton)).ctor();

                buttons.AddRange(System.Array.init([(this.btnPTAX = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "+TAX", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btn7 = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "7", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btn8 = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "8", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btn9 = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "9", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btnDiv = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "/", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btnSqrt = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "sqrt", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btnMTAX = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "-TAX", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btn4 = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "4", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btn5 = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "5", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btn6 = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "6", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btnMul = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "*", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btnPer = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "%", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btnTAX = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "TAX", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btn1 = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "1", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btn2 = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "2", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btn3 = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "3", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btnMinus = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "-", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btn1OverX = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "1/x", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btnDbl = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "Dbl", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btn0 = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "0", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btnplusOrNeg = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "+/-", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btnDot = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = ".", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddTextToCommand), $t)), (this.btnPlus = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "+", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t)), (this.btnEq = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "=", $t.ItemClick = Bridge.fn.cacheBind(this, this.AddOperator), $t))], ExpressCraft.SimpleButton));
                var index = 0;
                var y = 0;
                var yOffset = (28 + AddHeight) | 0;
                this.btnClose = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "&times;", $t.Size = new ExpressCraft.Vector2.$ctor1("((100% - 28px) * 0.1666666666666667)", "((100% - " + yOffset + "px) * 0.2)"), $t.Location = new ExpressCraft.Vector2.$ctor1("(((100% - 28px) * " + (System.Decimal("0.8333333333333335")) + ") + " + (24) + "px)", "(((100% - " + yOffset + "px) * " + (System.Decimal(y).mul(System.Decimal(0.2))) + ") + " + (((((((Bridge.Int.mul(y, 4)) + 8) | 0)) + AddHeight) | 0)) + "px)"), $t.ItemClick = Bridge.fn.bind(this, function (ev) {
                    if (!Bridge.staticEquals(this.OnClose, null)) {
                        this.OnClose();
                    }
                }), $t);
                if (ExpressCraft.Helper.NotDesktop) {
                    this.btnClose.Style.fontSize = "26px";
                    this.btnClose.Style.fontWeight = "bold";
                }
                this.btnBack = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "Back", $t.Size = new ExpressCraft.Vector2.$ctor1("(((100% - 24px) - ((100% - 28px) * 0.1666666666666667)) * 0.333)", "((100% - " + yOffset + "px) * 0.2)"), $t.Location = new ExpressCraft.Vector2.$ctor1("(((((100% - 24px) - ((100% - 28px) * 0.1666666666666667)) * 0.333) * 0) + 4px)", "(((100% - " + yOffset + "px) * " + (System.Decimal(y).mul(System.Decimal(0.2))) + ") + " + (((((((Bridge.Int.mul(y, 4)) + 8) | 0)) + AddHeight) | 0)) + "px)"), $t.ItemClick = Bridge.fn.cacheBind(this, this.Back), $t);
                if (ExpressCraft.Helper.NotDesktop) {
                    this.btnBack.Style.fontSize = "14px";
                }
                this.btnCE = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "CE", $t.Size = new ExpressCraft.Vector2.$ctor1("(((100% - 24px) - ((100% - 28px) * 0.1666666666666667)) * 0.333)", "((100% - " + yOffset + "px) * 0.2)"), $t.Location = new ExpressCraft.Vector2.$ctor1("(((((100% - 24px) - ((100% - 28px) * 0.1666666666666667)) * 0.333) * 1) + 8px)", "(((100% - " + yOffset + "px) * " + (System.Decimal(y).mul(System.Decimal(0.2))) + ") + " + (((((((Bridge.Int.mul(y, 4)) + 8) | 0)) + AddHeight) | 0)) + "px)"), $t.ItemClick = Bridge.fn.bind(this, function (ev) {
                    this.current_command = "";
                    this.RefreshValue();
                }), $t);
                if (ExpressCraft.Helper.NotDesktop) {
                    this.btnCE.Style.fontSize = "14px";
                }
                this.btnC = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "C", $t.Size = new ExpressCraft.Vector2.$ctor1("((((100% - 24px) - ((100% - 28px) * 0.1666666666666667)) * 0.333) + 4px)", "((100% - " + yOffset + "px) * 0.2)"), $t.Location = new ExpressCraft.Vector2.$ctor1("(((((100% - 24px) - ((100% - 28px) * 0.1666666666666667)) * 0.333) * 2) + 12px)", "(((100% - " + yOffset + "px) * " + (System.Decimal(y).mul(System.Decimal(0.2))) + ") + " + (((((((Bridge.Int.mul(y, 4)) + 8) | 0)) + AddHeight) | 0)) + "px)"), $t.ItemClick = Bridge.fn.bind(this, function (ev) {
                    this._commands = new (System.Collections.Generic.List$1(System.String)).ctor();
                    this.current_command = "";
                    this.RefreshValue();
                }), $t);
                if (ExpressCraft.Helper.NotDesktop) {
                    this.btnC.Style.fontSize = "14px";
                }

                ExpressCraft.Helper.AppendChildren$2(doc, [this.btnClose.Content, this.btnBack.Content, this.btnCE.Content, this.btnC.Content]);

                y = (y + 1) | 0;

                for (var i = 0; i < buttons.Count; i = (i + 1) | 0) {
                    buttons.getItem(i).Size = new ExpressCraft.Vector2.$ctor1("((100% - 28px) * 0.1666666666666667)", "((100% - " + yOffset + "px) * 0.2)");
                    buttons.getItem(i).Location = new ExpressCraft.Vector2.$ctor1("(((100% - 28px) * " + (System.Decimal(index).mul(System.Decimal("0.1666666666666667"))) + ") + " + ((((Bridge.Int.mul(index, 4)) + 4) | 0)) + "px)", "(((100% - " + yOffset + "px) * " + (System.Decimal(y).mul(System.Decimal(0.2))) + ") + " + (((((((Bridge.Int.mul(y, 4)) + 8) | 0)) + AddHeight) | 0)) + "px)");
                    if (ExpressCraft.Helper.NotDesktop) {
                        buttons.getItem(i).Style.fontSize = "14px";
                    }

                    doc.appendChild(buttons.getItem(i).Content);
                    index = (index + 1) | 0;
                    if (index === 6) {
                        index = 0;
                        y = (y + 1) | 0;
                    }
                }

                this.btnDbl.Style.fontSize = "6.5pt";
                this.btnTAX.Style.fontSize = "6.5pt";
                this.btnPTAX.Style.fontSize = "6.5pt";
                this.btnMTAX.Style.fontSize = "6.5pt";

                this.btnClose.Style.color = "red";
                this.btnClose.Style.fontWeight = "bold";

                if (!CloseButtonVisible) {
                    this.btnClose.Style.visibility = "hidden";
                }

                this.RefreshValue();

                this.Content.appendChild(doc);
            }
        },
        methods: {
            AddTextToCommand: function (button) {
                if (Bridge.referenceEquals(button.Text, ".") && System.String.contains(this.current_command,".")) {
                    return;
                }

                if (Bridge.referenceEquals(this.current_command, "0")) {
                    this.current_command = "";
                }

                this.current_command = (this.current_command || "") + (button.Text || "");

                this.RefreshValue();
            },
            CalculateAndClose: function () {
                var x = this.Calculate();

                if (!Bridge.staticEquals(this.OnEqual, null)) {
                    this.OnEqual(x);
                }
                if (!this.DontRefresh) {
                    if (!Bridge.staticEquals(this.OnClose, null)) {
                        this.OnClose();
                    }
                }
            },
            Calculate: function () {
                var previousValue = System.Decimal(0);

                var previousOp = "";
                var length = this._commands.Count;

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    var command = this._commands.getItem(i);

                    if (System.String.endsWith(command, "%")) {
                        command = command.substr(0, ((command.length - 1) | 0));
                    }

                    var tryDec = { };
                    if (System.Decimal.tryParse(command, null, tryDec)) {
                        if (!Bridge.referenceEquals(previousOp, "")) {
                            if (System.String.endsWith(this._commands.getItem(i), "%")) {
                                try {
                                    tryDec.v = previousValue.mul((tryDec.v.div(System.Decimal(100))));
                                } catch ($e1) {
                                    $e1 = System.Exception.create($e1);
                                    tryDec.v = System.Decimal(0);
                                }
                            }

                            if (Bridge.referenceEquals(previousOp, "+")) {
                                previousValue = previousValue.add(tryDec.v);
                            } else if (Bridge.referenceEquals(previousOp, "-")) {
                                previousValue = previousValue.sub(tryDec.v);
                            } else if (Bridge.referenceEquals(previousOp, "/")) {
                                try {
                                    previousValue = previousValue.div(tryDec.v);
                                } catch ($e2) {
                                    $e2 = System.Exception.create($e2);
                                    previousValue = System.Decimal(0);
                                }
                            } else if (Bridge.referenceEquals(previousOp, "*")) {
                                previousValue = previousValue.mul(tryDec.v);
                            } else if (Bridge.referenceEquals(previousOp, "*")) {
                                previousValue = previousValue.mul(tryDec.v);
                            }

                            previousOp = "";
                        } else {
                            previousValue = tryDec.v;
                        }
                    } else {
                        previousOp = command;
                        if (Bridge.referenceEquals(previousOp, "+TAX")) {
                            previousValue = ExpressCraft.Helper.AddTax(previousValue);
                            previousOp = "";
                        } else if (Bridge.referenceEquals(previousOp, "-TAX")) {
                            previousValue = ExpressCraft.Helper.DeductTax(previousValue);
                            previousOp = "";
                        } else if (Bridge.referenceEquals(previousOp, "TAX")) {
                            previousValue = ExpressCraft.Helper.GetPortionTax(previousValue);
                            previousOp = "";
                        } else if (Bridge.referenceEquals(previousOp, "Dbl")) {
                            previousValue = previousValue.mul(System.Decimal(2));
                            previousOp = "";
                        } else if (Bridge.referenceEquals(previousOp, "sqrt")) {
                            try {
                                previousValue = System.Decimal(Math.sqrt(System.Decimal.toFloat(previousValue)), null, System.Double);
                            } catch ($e3) {
                                $e3 = System.Exception.create($e3);
                                previousValue = System.Decimal(0);
                            }
                            previousOp = "";
                        } else if (Bridge.referenceEquals(previousOp, "1/x")) {
                            try {
                                previousValue = System.Decimal(1.0).div(previousValue);
                            } catch ($e4) {
                                $e4 = System.Exception.create($e4);
                                previousValue = System.Decimal(0);
                            }

                            previousOp = "";
                        } else if (Bridge.referenceEquals(previousOp, "+/-")) {
                            previousValue = previousValue.neg();
                            previousOp = "";
                        }
                    }
                }

                return previousValue;
            },
            RefreshValue: function () {
                if (this.DontRefresh) {
                    return;
                }
                var builder = new System.Text.StringBuilder();

                var length = this._commands.Count;

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    builder.append((this._commands.getItem(i) || "") + " ");
                }
                builder.append(this.current_command);
                this.DisplayInput.Text = "";
                this.DisplayInput.Text = builder.toString();
            },
            IsAllNumbers: function (value) {
                var x = { };
                return System.Decimal.tryParse(value, null, x);
            },
            Back: function (button) {
                if (!Bridge.referenceEquals(this.current_command, "")) {
                    this.current_command = this.current_command.substr(0, ((this.current_command.length - 1) | 0));
                } else {
                    if (this._commands.Count > 0) {
                        var x = System.Linq.Enumerable.from(this._commands).last();
                        if (this.IsAllNumbers(x)) {
                            this.current_command = x;
                            this.current_command = this.current_command.substr(0, ((this.current_command.length - 1) | 0));
                        } else {
                            this.current_command = "";
                        }
                        this._commands.removeAt(((this._commands.Count - 1) | 0));
                    }
                }
                this.RefreshValue();
            },
            IsSingleOperator: function (x) {
                return (System.String.contains(x,"TAX") || Bridge.referenceEquals(x, "Dbl") || Bridge.referenceEquals(x, "1/x") || Bridge.referenceEquals(x, "+/-") || Bridge.referenceEquals(x, "sqrt"));
            },
            AddOperator: function (button) {
                if (this.IsSingleOperator(button.Text)) {
                    if (this._commands.Count > 0) {
                        var x = System.Linq.Enumerable.from(this._commands).last();
                        if (!this.IsSingleOperator(x)) {
                            if (Bridge.referenceEquals(this.current_command, "") && !this.IsAllNumbers(x)) {
                                return;
                            }
                        }
                    }

                    if (!Bridge.referenceEquals(this.current_command, "")) {
                        this._commands.add(this.current_command);
                        this.current_command = "";
                    }

                    this._commands.add(button.Text);

                    this.RefreshValue();
                } else {
                    if (Bridge.referenceEquals(this.current_command, "")) {
                        if (Bridge.referenceEquals(button.Text, "=")) {
                            this.CalculateAndClose();
                            return;
                        } else {
                            if (this._commands.Count > 0) {
                                var x1 = System.Linq.Enumerable.from(this._commands).last();
                                if (!this.IsSingleOperator(x1)) {
                                    return;
                                }
                            } else {
                                return;
                            }
                        }
                    }

                    if (Bridge.referenceEquals(button.Text, "%")) {
                        if (this._commands.Count > 0) {
                            var x2 = System.Linq.Enumerable.from(this._commands).last();

                            if (!this.IsSingleOperator(x2)) {
                                this.current_command = (this.current_command || "") + "%";
                                this._commands.add(this.current_command);
                                this.current_command = "";
                            } else {
                                return;
                            }
                        }
                    } else {
                        this._commands.add(this.current_command);
                        this.current_command = "";

                        if (Bridge.referenceEquals(button.Text, "=")) {
                            this.CalculateAndClose();
                        } else {
                            this._commands.add(button.Text);
                        }
                    }
                    this.RefreshValue();
                }
            }
        }
    });

    Bridge.define("ExpressCraft.CanvasControl", {
        inherits: [ExpressCraft.Control],
        fields: {
            Context: null,
            Canvas: null,
            ClearOnResize: false
        },
        ctors: {
            init: function () {
                this.ClearOnResize = true;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.ctor.call(this, document.createElement("canvas"));
                this.Canvas = this.Content;

                this.Context = this.Canvas.getContext("2d");

                this.OnResize = Bridge.fn.bind(this, function (sender) {
                    var bounds = this.Content.getBoundingClientRect();
                    this.Canvas.width = Bridge.Int.clipu32(bounds.width);
                    this.Canvas.height = Bridge.Int.clipu32(bounds.height);

                    this.Refresh();
                });
            }
        },
        methods: {
            Render: function () {
                ExpressCraft.Control.prototype.Render.call(this);

                this.Refresh();
            },
            /**
             * Refresh control..
             *
             * @instance
             * @public
             * @this ExpressCraft.CanvasControl
             * @memberof ExpressCraft.CanvasControl
             * @return  {void}
             */
            Refresh: function () {
                if (this.ClearOnResize) {
                    this.OnClear();
                }
                this.OnPaint();
            },
            CreateGraphics: function () {
                return new ExpressCraft.Graphics(this);
            },
            OnClear: function () {
                this.Context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
            },
            OnPaint: function () {

            }
        }
    });

    Bridge.define("ExpressCraft.CheckEdit", {
        inherits: [ExpressCraft.Control],
        statics: {
            methods: {
                op_Implicit: function (checkEdit) {
                    return checkEdit.Edit;
                }
            }
        },
        fields: {
            Edit: null,
            span: null,
            OnCheckChanged: null
        },
        props: {
            Checked: {
                get: function () {
                    return ExpressCraft.Helper.IsTrue(this.Edit.Text) === 1;
                },
                set: function (value) {
                    this.Edit.Text = System.Boolean.toString(value);
                }
            },
            Text: {
                get: function () {
                    return this.span.innerHTML;
                },
                set: function (value) {
                    this.span.innerHTML = value;
                }
            }
        },
        ctors: {
            ctor: function (label) {
                if (label === void 0) { label = ""; }
                var $t;

                this.$initialize();
                ExpressCraft.Control.ctor.call(this, ($t = document.createElement("label"), $t.className = ExpressCraft.Control.BaseClass(false, true), $t));
                this.Edit = new ExpressCraft.TextInput.$ctor2("checkbox");
                this.Edit.Controller = this;
                this.Edit.OnTextChanged = Bridge.fn.bind(this, function (sender) {
                    if (!Bridge.staticEquals(this.OnCheckChanged, null)) {
                        this.OnCheckChanged(this);
                    }
                });
                this.span = document.createElement("span");

                this.Text = label;

                ExpressCraft.Helper.AppendChildren$2(this.Content, [ExpressCraft.Control.op_Implicit(this.Edit), this.span]);
            }
        }
    });

    Bridge.define("ExpressCraft.TextInput", {
        inherits: [ExpressCraft.Control],
        statics: {
            methods: {
                FixInput: function (type) {
                    if (Bridge.referenceEquals(type, "date") || (ExpressCraft.Helper.IsFireFox() && !Bridge.referenceEquals(type, "password") && !Bridge.referenceEquals(type, "checkbox") && !Bridge.referenceEquals(type, "radio"))) {
                        return "text";
                    } else {
                        return type;
                    }
                }
            }
        },
        fields: {
            prevText: null,
            OnTextChanged: null,
            OnKeyDown: null,
            OnKeyUp: null,
            OnKeyPress: null,
            OnGotFocus: null,
            OnLostFocus: null,
            OnValidateData: null,
            DisableFocus: false,
            IsSubmit: false,
            GoNext: false,
            OnFocusDontSelectAll: false,
            _displayFormat: null,
            Controller: null,
            Type: null,
            DisableFocusPopup: false,
            IsOverride: false,
            PreZIndex: null,
            enabled: false,
            _readonly: false
        },
        props: {
            DisplayFormat: {
                get: function () {
                    return this._displayFormat;
                },
                set: function (value) {
                    this.SetDisplayFormat(value);
                }
            },
            Text: {
                get: function () {
                    if (this.IsOverride) {
                        return this.GetValue();
                    } else {
                        if (Bridge.referenceEquals(this.Type, "checkbox") || Bridge.referenceEquals(this.Type, "radio")) {
                            return System.Boolean.toString(this.Content.checked);
                        } else {
                            return this.Content.value;
                        }
                    }
                },
                set: function (value) {
                    if (this.IsOverride) {
                        this.SetValue(value);
                    } else {
                        if (Bridge.referenceEquals(this.Type, "checkbox") || Bridge.referenceEquals(this.Type, "radio")) {
                            value = value.toLowerCase();
                            this.Content.checked = ExpressCraft.Helper.IsTrue(value) === 1;
                        } else {
                            this.Content.value = value;
                            this.formatText();
                        }
                    }

                    this.CheckTextChanged();
                }
            },
            Enabled: {
                get: function () {
                    return this.enabled;
                },
                set: function (value) {
                    this.enabled = value;

                    if (Bridge.is(this, ExpressCraft.TextInputDropDown)) {
                        var inp = this;
                        inp.UsedEdit.Enabled = value;
                    } else if (Bridge.is(this, ExpressCraft.RadioElement)) {
                        var inp1 = this;
                        if (inp1.labelElement != null) {
                            inp1.ProcessIsEnabled();
                        }
                    }


                    if (this.enabled) {
                        this.Content.removeAttribute("disabled");
                    } else {
                        this.Content.setAttribute("disabled", "");
                    }
                }
            },
            Readonly: {
                get: function () {
                    return this._readonly;
                },
                set: function (value) {
                    this._readonly = value;
                    if (this._readonly) {
                        this.Content.setAttribute("readonly", System.Boolean.toString((this._readonly)));
                    } else {
                        this.Content.removeAttribute("readonly");
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this.prevText = "";
                this._displayFormat = "";
                this.IsOverride = false;
                this.enabled = true;
                this._readonly = false;
            },
            $ctor1: function (overrideElement, addInputControl, addEventsOnControl) {
                if (addInputControl === void 0) { addInputControl = true; }
                if (addEventsOnControl === void 0) { addEventsOnControl = true; }

                this.$initialize();
                ExpressCraft.Control.ctor.call(this, overrideElement);
                overrideElement.className = ((addInputControl ? "inputcontrol" : "") || "") + (ExpressCraft.Control.BaseClass(addInputControl) || "");
                this.IsOverride = true;
                if (addEventsOnControl) {
                    this.addEvents();
                }
            },
            ctor: function () {
                ExpressCraft.TextInput.$ctor2.call(this, "text", true);

            },
            $ctor2: function (type, ac) {
                if (type === void 0) { type = "text"; }
                if (ac === void 0) { ac = true; }

                this.$initialize();
                ExpressCraft.Control.$ctor4.call(this, "inputcontrol", true, ExpressCraft.TextInput.FixInput(type), ac);
                this.Type = type;

                if (Bridge.referenceEquals(this.Type, "number")) {
                    this.Content.style.textAlign = "right";
                    this.Content.style.textIndent = "3px";
                    this.Content.style.paddingRight = "3px";

                    this.DisplayFormat = "n2";
                } else if (Bridge.referenceEquals(this.Type, "date")) {
                    var str = System.Array.init(3, null, System.String);
                    str[System.Array.index(ExpressCraft.Settings.DayPosition, str)] = "dd";
                    str[System.Array.index(ExpressCraft.Settings.MonthPosition, str)] = "MM";
                    str[System.Array.index(ExpressCraft.Settings.YearPosition, str)] = "yyyy";
                    var builder = new System.Text.StringBuilder();

                    for (var i = 0; i < 3; i = (i + 1) | 0) {
                        builder.append((str[System.Array.index(i, str)] || "") + String.fromCharCode(ExpressCraft.Settings.DateSeperator));
                    }
                    builder.setLength((builder.getLength() - 1) | 0);
                    this.DisplayFormat = builder.toString();
                }

                this.addEvents();

                this.formatText();
            }
        },
        methods: {
            ValidateData: function () {
                if (Bridge.is(this, ExpressCraft.TextInputDropDown)) {
                    var c = this;
                    if (c.UsedEdit != null && !Bridge.staticEquals(c.OnValidateData, null)) {
                        c.OnValidateData(c.UsedEdit);
                    }
                }
                if (!Bridge.staticEquals(this.OnValidateData, null)) {
                    this.OnValidateData(this);
                }
            },
            SetDisplayFormat: function (value) {
                this._displayFormat = value;
                this.formatText();
            },
            GetDisplayFormat: function () {
                return this._displayFormat;
            },
            GetValue: function () {
                return this.Content.innerHTML;
            },
            SetValue: function (value) {
                this.Content.innerHTML = value;
            },
            SetDateTime: function (date) {
                this.SetDate(System.String.format("{0:" + (this.GetDisplayFormat() || "") + "}", [Bridge.box(date, System.DateTime, System.DateTime.format)]));
            },
            OnFocus: function () { },
            GetInput: function () {
                if (Bridge.is(this.Content, HTMLInputElement)) {
                    return this.Content;
                } else {
                    return this.Content;
                }
            },
            GetNumberValue: function () {
                var value = ExpressCraft.Helper.StripNonNumberString(this.Text);
                return value;
            },
            GetEditValue: function () {
                if (Bridge.is(this, ExpressCraft.SearchInput)) {
                    var value = Bridge.cast(this, ExpressCraft.SearchInput).EditValue;
                    if (value == null) {
                        return Bridge.box(0, System.Int32);
                    }
                    return value;
                } else {
                    if (Bridge.referenceEquals(this.Type, "number")) {
                        var value1 = ExpressCraft.Helper.StripNonNumberString(this.Text);
                        return value1;
                    } else if (Bridge.referenceEquals(this.Type, "date")) {
                        var date = this.GetDateTime();
                        return Bridge.box(date, System.DateTime, System.DateTime.format);
                    } else {
                        return this.Text;
                    }
                }
            },
            Scroll: function (value, parent) {
                if (parent == null) {
                    return;
                }
                parent.scrollTop = value;
            },
            GetDisplayValue: function () {
                if (System.String.isNullOrWhiteSpace(this.DisplayFormat)) {
                    return this.Text;
                } else {
                    if (Bridge.referenceEquals(this.Type, "number")) {
                        var value = ExpressCraft.Helper.StripNonNumberString(this.Text);
                        if (System.String.startsWith(this.DisplayFormat.toLowerCase(), "c")) {
                            var wasNeg = false;
                            if (value.lt(System.Decimal(0))) {
                                wasNeg = true;
                                value = value.neg();
                            }

                            return ((wasNeg ? "-" : "") || "") + (System.String.format("${0:" + (System.String.replaceAll(System.String.replaceAll(this.DisplayFormat, "c", "n"), "C", "N") || "") + "}", [value]) || "");
                        } else if (System.String.startsWith(this.DisplayFormat.toLowerCase(), "p")) {
                            return System.String.format("{0:" + (this.DisplayFormat || "") + "}", [value.equalsT(System.Decimal(0)) ? System.Decimal(0) : value.div(System.Decimal(100.0))]);
                        } else {
                            return System.String.format("{0:" + (this.DisplayFormat || "") + "}", [value]);
                        }
                    } else if (Bridge.referenceEquals(this.Type, "date")) {
                        var value1 = ExpressCraft.Helper.StripNonDateString(this.Text);
                        if (Bridge.equals(value1, System.DateTime.getMinValue())) {
                            return "";
                        } else {
                            return System.String.format("{0:" + (this.DisplayFormat || "") + "}", [Bridge.box(value1, System.DateTime, System.DateTime.format)]);
                        }
                    } else {
                        return System.String.format("{0:" + (this.DisplayFormat || "") + "}", [this.Text]);
                    }
                }
            },
            formatText: function () {
                var input = this.GetInput();
                if (input != null && !Bridge.referenceEquals(input, document.activeElement)) {
                    if (!System.String.isNullOrWhiteSpace(this.DisplayFormat)) {
                        input.type = "text";
                        var newText = this.GetDisplayValue();

                        if (!Bridge.referenceEquals(newText, this.Text)) {
                            this.Text = newText;
                        }
                    }
                }
            },
            addEvents: function () {
                if (!this.IsOverride) {
                    var input = this.GetInput();
                    if (input != null) {
                        if (!System.String.isNullOrWhiteSpace(this.DisplayFormat)) {
                            if (Bridge.referenceEquals(this.Type, "password")) {
                                return;
                            }
                            input.type = "text";
                        }
                    }
                }

                this.Content.onblur = Bridge.fn.bind(this, function (ev) {
                    this.Content.style.zIndex = this.PreZIndex;

                    this.formatText();

                    if (!Bridge.staticEquals(this.OnLostFocus, null)) {
                        this.OnLostFocus(this);
                    }
                });
                this.Content.onfocus = Bridge.fn.bind(this, function (ev) {
                    if (this.DisableFocus) {
                        this.Content.blur();
                        return;
                    }

                    this.PreZIndex = this.Content.style.zIndex;
                    this.Content.style.zIndex = "10000";

                    this.OnFocus();
                    var input1 = this.GetInput();
                    if (input1 != null) {
                        if (!System.String.isNullOrWhiteSpace(this.DisplayFormat)) {
                            if (Bridge.referenceEquals(this.Type, "number")) {
                                try {
                                    this.Text = ExpressCraft.Helper.StripNonNumberString(this.Text).toString();
                                } catch ($e1) {
                                    $e1 = System.Exception.create($e1);
                                    this.Text = "0.00";
                                }
                            }

                            if (!ExpressCraft.Helper.IsFireFox() && !this.Readonly && !Bridge.referenceEquals(this.Type, "date")) {
                                input1.type = this.Type;
                            }
                        }
                        if (!Bridge.referenceEquals(this.Type, "checkbox") && ExpressCraft.Settings.OnFocusSelectAll && !this.OnFocusDontSelectAll) {
                            input1.select();
                        }
                    }



                    if (!Bridge.staticEquals(this.OnGotFocus, null)) {
                        this.OnGotFocus(this);
                    }

                    if (!this.DisableFocusPopup && !this.Readonly && this.Enabled && ExpressCraft.Helper.NotDesktop && !(Bridge.is(this, ExpressCraft.TextInputDropDown)) && this.Controller == null) {
                        if (!ExpressCraft.Settings.DisableTextPopupEditor) {
                            new ExpressCraft.TextForm(this).ShowPopup(new ExpressCraft.Vector2.$ctor1(0, 0));
                        }
                    }
                });
                this.Content.onchange = Bridge.fn.bind(this, function (ev) {
                    this.CheckTextChanged();
                });
                this.Content.oncontextmenu = function (ev) {
                    ev.stopPropagation();
                };
                this.Content.onkeypress = Bridge.fn.bind(this, function (ev) {
                    this.CheckTextChanged();
                    if (!Bridge.staticEquals(this.OnKeyPress, null)) {
                        this.OnKeyPress(this, ev);
                    }
                });
                this.Content.onkeydown = Bridge.fn.bind(this, function (ev) {
                    this.CheckTextChanged();
                    if (!Bridge.staticEquals(this.OnKeyDown, null)) {
                        this.OnKeyDown(this, ev);
                    }
                });
                this.Content.onkeyup = Bridge.fn.bind(this, function (ev) {
                    this.CheckTextChanged();
                    if (!Bridge.staticEquals(this.OnKeyUp, null)) {
                        this.OnKeyUp(this, ev);
                    }
                });
                this.Content.addEventListener("paste", Bridge.fn.bind(this, function () {
                    this.CheckTextChanged();
                }));
                this.Content.addEventListener("cut", Bridge.fn.bind(this, function () {
                    this.CheckTextChanged();
                }));
            },
            CheckTextChanged: function () {
                if (!Bridge.referenceEquals(this.Text, this.prevText)) {
                    if (!Bridge.staticEquals(this.OnTextChanged, null)) {
                        this.OnTextChanged(this);
                    }
                    this.prevText = this.Text;
                }
            },
            Render: function () {
                ExpressCraft.Control.prototype.Render.call(this);
                this.prevText = this.Text;
            },
            SetDate: function (date) {
                if (!System.String.isNullOrWhiteSpace(date)) {
                    var dd = ExpressCraft.Helper.StripNonDateString(date);
                    if (Bridge.equals(dd, System.DateTime.getMinValue())) {
                        this.Text = "";
                    } else {
                        this.Text = System.String.format("{0:" + (this.DisplayFormat || "") + "}", [Bridge.box(dd, System.DateTime, System.DateTime.format)]);
                    }
                } else {
                    this.Text = "";
                }
            },
            GetDate: function () {
                if (!System.String.isNullOrWhiteSpace(this.Text)) {
                    var dd = ExpressCraft.Helper.StripNonDateString(this.Text);
                    if (Bridge.equals(dd, System.DateTime.getMinValue())) {
                        return "";
                    } else {
                        return System.String.format("{0:" + (this.DisplayFormat || "") + "}", [Bridge.box(dd, System.DateTime, System.DateTime.format)]);
                    }
                } else {
                    return "";
                }
            },
            GetDateTime: function () {
                return ExpressCraft.Helper.StripNonDateString(this.Text);
            },
            IsNumericType: function () {
                return Bridge.referenceEquals(this.Type, "number");
            },
            IsDateType: function () {
                return Bridge.referenceEquals(this.Type, "date");
            }
        }
    });

    Bridge.define("ExpressCraft.ComboBoxEdit", {
        inherits: [ExpressCraft.Control],
        fields: {
            ComboBoxBase: null,
            previousSelectedIndex: 0,
            SelectedIndexChanged: null,
            enabled: false,
            _readonly: false
        },
        props: {
            Text: {
                get: function () {
                    if (this.ComboBoxBase.selectedIndex === -1) {
                        return "";
                    }
                    return this.ComboBoxBase.options[this.ComboBoxBase.selectedIndex].innerHTML;
                },
                set: function (value) {
                    for (var i = 0; System.Int64(i).lt(System.Int64(this.ComboBoxBase.options.length)); i = (i + 1) | 0) {
                        if (Bridge.referenceEquals(this.ComboBoxBase.options[i].innerHTML, value)) {
                            this.ComboBoxBase.selectedIndex = i;
                        }
                    }
                    this.ComboBoxBase.selectedIndex = -1;
                }
            },
            Value: {
                get: function () {
                    if (this.ComboBoxBase.selectedIndex === -1) {
                        return "";
                    }
                    return this.ComboBoxBase.options[this.ComboBoxBase.selectedIndex].value;
                },
                set: function (value) {
                    for (var i = 0; System.Int64(i).lt(System.Int64(this.ComboBoxBase.options.length)); i = (i + 1) | 0) {
                        if (Bridge.referenceEquals(this.ComboBoxBase.options[i].value, value)) {
                            this.ComboBoxBase.selectedIndex = i;
                        }
                    }
                    this.ComboBoxBase.selectedIndex = -1;
                }
            },
            Enabled: {
                get: function () {
                    return this.enabled;
                },
                set: function (value) {
                    this.enabled = value;
                    this.Content.setAttribute("disabled", System.Boolean.toString((!this.enabled)));
                }
            },
            Readonly: {
                get: function () {
                    return this._readonly;
                },
                set: function (value) {
                    this._readonly = value;
                    this.Content.setAttribute("readonly", System.Boolean.toString((this._readonly)));
                }
            }
        },
        ctors: {
            init: function () {
                this.previousSelectedIndex = -1;
                this.enabled = true;
                this._readonly = false;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor2.call(this, "inputcontrol", ExpressCraft.ComboBoxTypes.Default);
                this.ComboBoxBase = this.Content;

                this.Content.oncontextmenu = function (ev) {
                    ev.stopPropagation();
                };

                this.ComboBoxBase.onchange = Bridge.fn.bind(this, function (ev) {
                    if (this.previousSelectedIndex !== this.ComboBoxBase.selectedIndex) {
                        if (!Bridge.staticEquals(this.SelectedIndexChanged, null)) {
                            this.SelectedIndexChanged(this);
                        }

                        this.previousSelectedIndex = this.ComboBoxBase.selectedIndex;
                    }
                    ev.stopPropagation();
                });
            }
        },
        methods: {
            FillData: function (dataitems) {
                var $t;
                if (dataitems === void 0) { dataitems = []; }
                jQuery(this.ComboBoxBase).empty();

                if (dataitems == null) {
                    for (var i = 0; i < dataitems.length; i = (i + 1) | 0) {
                        ExpressCraft.Helper.AppendChild$2(this.ComboBoxBase, ($t = document.createElement("option"), $t.innerHTML = dataitems[System.Array.index(i, dataitems)].Text, $t.value = dataitems[System.Array.index(i, dataitems)].Value, $t));
                    }
                }
            },
            Render: function () {
                ExpressCraft.Control.prototype.Render.call(this);
            }
        }
    });

    Bridge.define("ExpressCraft.ContextMenu", {
        inherits: [ExpressCraft.Control],
        statics: {
            fields: {
                TotalContextHandles: 0,
                MainContextMenu: null
            },
            ctors: {
                init: function () {
                    this.TotalContextHandles = 0;
                }
            }
        },
        fields: {
            /**
             * For internal use only - so if we click on document - we can close all context menus ---
             *
             * @instance
             * @protected
             * @memberof ExpressCraft.ContextMenu
             * @type ExpressCraft.ContextMenu
             */
            SubContextOpened: null,
            ContextItems: null,
            Visible: false
        },
        ctors: {
            init: function () {
                this.ContextItems = new (System.Collections.Generic.List$1(ExpressCraft.ContextItem)).ctor();
                this.Visible = false;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "contextmenu");
                this.Content.onmouseleave = Bridge.fn.bind(this, function (ev) {
                    this.Close();
                });
            }
        },
        methods: {
            RenderContextMenu: function () {
                var x = 0;
                var ii = -1;

                ExpressCraft.Helper.Empty(this.Content);

                for (var i = 0; i < this.ContextItems.Count; i = (i + 1) | 0) {
                    var y = this.ContextItems.getItem(i).Caption.length;
                    if (y > x) {
                        x = y;
                        ii = i;
                    }
                }

                if (ii === -1) {
                    return;
                }
                var calwidth = Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(this.ContextItems.getItem(ii).Caption, ExpressCraft.Settings.DefaultFont));
                if (calwidth < ExpressCraft.Settings.ContextMenuMinWidth) {
                    calwidth = ExpressCraft.Settings.ContextMenuMinWidth;
                }
                var width = (((((((calwidth + 34) | 0) + 8) | 0) + 2) | 0));

                var top = 1;

                for (var i1 = 0; i1 < this.ContextItems.Count; i1 = (i1 + 1) | 0) {
                    var contextItem = { v : this.ContextItems.getItem(i1) };
                    var y1 = contextItem.v.Caption.length;
                    var item = ExpressCraft.Control.Label$1(contextItem.v.Caption, 1, top, ((width - 2) | 0), false, false, "contextitem");

                    item.onclick = (function ($me, contextItem) {
                        return Bridge.fn.bind($me, function (ev) {
                            if (contextItem.v.Enabled) {
                                if (!Bridge.staticEquals(contextItem.v.OnItemClick, null)) {
                                    contextItem.v.OnItemClick(contextItem.v);
                                }
                                this.Close();
                            }
                        });
                    })(this, contextItem);

                    ExpressCraft.Helper.AppendChild$2(this.Content, item);

                    top = (top + 24) | 0;

                    if (this.ContextItems.getItem(i1).BeginGroup && i1 !== this.ContextItems.Count) {
                        top = (top + 1) | 0;
                        var sep = ExpressCraft.Control.Div$1("contextitemseperator");

                        sep.style.top = ExpressCraft.Helper.ToPx(Bridge.box(top, System.Int32));
                        sep.style.width = ExpressCraft.Helper.ToPx(Bridge.box(calwidth, System.Int32));

                        ExpressCraft.Helper.AppendChild$2(this.Content, sep);

                        top = (top + 2) | 0;
                    }
                }

                top = (top + 1) | 0;

                ExpressCraft.Helper.SetSize$1(this.Content, width, top);
            },
            Show: function (Location) {
                if (ExpressCraft.ContextMenu.MainContextMenu != null) {
                    ExpressCraft.ContextMenu.MainContextMenu.Close();
                    ExpressCraft.ContextMenu.MainContextMenu = null;
                }
                ExpressCraft.ContextMenu.MainContextMenu = this;

                if (this.Visible) {
                    this.Close();
                }
                if (!this.Visible) {
                    ExpressCraft.Helper.SetLocation$2(this.Content, ((Location.Xi - 5) | 0), ((Location.Yi - 5) | 0));
                    this.RenderContextMenu();

                    ExpressCraft.ContextMenu.TotalContextHandles = (ExpressCraft.ContextMenu.TotalContextHandles + 1) | 0;
                    this.Content.style.zIndex = Bridge.toString((((ExpressCraft.ContextMenu.TotalContextHandles + ExpressCraft.Settings.ContextMenuStartingZIndex) | 0)));
                    ExpressCraft.Helper.AppendChild$1(document.body, this);
                    this.Visible = true;
                }
            },
            Close: function () {
                if (this.Visible) {
                    ExpressCraft.ContextMenu.TotalContextHandles = (ExpressCraft.ContextMenu.TotalContextHandles - 1) | 0;
                    document.body.removeChild(ExpressCraft.Control.op_Implicit(this));
                    this.Visible = false;
                }

                if (this.SubContextOpened != null) {
                    this.SubContextOpened.Close();
                    this.SubContextOpened = null;
                }
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnBool", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.Nullable$1(System.Boolean))).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.Bool;
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnByte", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.Nullable$1(System.Byte))).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.Byte;
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnDateTime", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.Nullable$1(System.DateTime))).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.DateTime;
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnDecimal", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.Nullable$1(System.Decimal))).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.Decimal;
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnDouble", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.Nullable$1(System.Double))).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.Double;
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnFloat", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.Nullable$1(System.Single))).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.Float;
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnInteger", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.Nullable$1(System.Int32))).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.Integer;
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnLong", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.Nullable$1(System.Int64))).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.Long;
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnObject", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.Object)).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.Object;
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnShort", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.Nullable$1(System.Int16))).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.Short;
            }
        }
    });

    Bridge.define("ExpressCraft.DataColumnString", {
        inherits: [ExpressCraft.DataColumn],
        fields: {
            Cells: null
        },
        ctors: {
            init: function () {
                this.Cells = new (System.Collections.Generic.List$1(System.String)).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.DataColumn.ctor.call(this);
                this.DataType = ExpressCraft.DataType.String;
            }
        }
    });

    Bridge.define("ExpressCraft.DateControl", {
        inherits: [ExpressCraft.Control],
        statics: {
            fields: {
                Days: null
            },
            ctors: {
                init: function () {
                    this.Days = System.Array.init(["MO", "TU", "WE", "TH", "FR", "SA", "SU"], System.String);
                }
            }
        },
        fields: {
            btnTop: null,
            btnSelectedRange: null,
            btnToday: null,
            btnLeft: null,
            btnRight: null,
            ContentRange: null,
            SelectedYear: 0,
            SelectedMonth: 0,
            SelectedDay: 0,
            _activeDisplayMode: 0,
            OnDateChanged: null,
            OnRequestToClose: null
        },
        props: {
            ActiveDisplayMode: {
                get: function () {
                    return this._activeDisplayMode;
                },
                set: function (value) {
                    if (this._activeDisplayMode !== value) {
                        this._activeDisplayMode = value;
                        this.RefreshView();
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this._activeDisplayMode = ExpressCraft.DateControl.DisplayMode.Day;
            },
            ctor: function (startDate) {
                var $t;
                this.$initialize();
                ExpressCraft.Control.$ctor1.call(this);
                this.Size = new ExpressCraft.Vector2.$ctor1(230, 245);


                var doc = document.createDocumentFragment();

                this.Content.onkeydown = Bridge.fn.cacheBind(this, this.BlockTabEvent);

                this.btnTop = new ExpressCraft.SimpleButton.ctor();
                this.btnTop.Style.transform = "translate(-50%, 0)";
                this.btnTop.Style.left = "50%";
                this.btnTop.Style.marginRight = "50%";
                this.btnTop.Top = 6;
                this.btnTop.Width = "auto";
                this.btnTop.Style.borderColor = "transparent";
                this.btnTop.Content.onkeydown = Bridge.fn.cacheBind(this, this.BlockTabEvent);

                this.btnSelectedRange = ($t = new ExpressCraft.SimpleButton.ctor(), $t.ItemClick = Bridge.fn.bind(this, function (ev) {
                    this.MoveUp();
                }), $t);

                this.btnSelectedRange.Style.transform = "translate(-50%, 0)";
                this.btnSelectedRange.Style.left = "50%";
                this.btnSelectedRange.Style.marginRight = "50%";
                this.btnSelectedRange.Top = 30;
                this.btnSelectedRange.Width = "auto";
                this.btnSelectedRange.Style.borderColor = "transparent";
                this.btnSelectedRange.Content.onkeydown = Bridge.fn.cacheBind(this, this.BlockTabEvent);

                this.btnLeft = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "<", $t.Location = new ExpressCraft.Vector2.$ctor1(14, 36), $t.Size = new ExpressCraft.Vector2.$ctor1(13, 13), $t.ItemClick = Bridge.fn.bind(this, function (ev) {
                    this.MoveLeft();
                }), $t);
                this.btnLeft.Content.onkeydown = Bridge.fn.cacheBind(this, this.BlockTabEvent);

                this.btnRight = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = ">", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 26px)", 36), $t.Size = new ExpressCraft.Vector2.$ctor1(13, 13), $t.ItemClick = Bridge.fn.bind(this, function (ev) {
                    this.MoveRight();
                }), $t);
                this.btnRight.Content.onkeydown = Bridge.fn.cacheBind(this, this.BlockTabEvent);

                this.btnLeft.Style.borderRadius = "50%";
                this.btnRight.Style.borderRadius = "50%";

                this.btnLeft.Style.lineHeight = "0";
                this.btnRight.Style.lineHeight = "0";

                if (ExpressCraft.Helper.NotDesktop) {
                    this.btnSelectedRange.Style.fontSize = "14px";
                    this.btnSelectedRange.Height = 36;
                    this.btnSelectedRange.Top = 42;

                    this.btnTop.Style.fontSize = "14px";
                    this.btnTop.Height = 36;

                    this.btnLeft.Size = new ExpressCraft.Vector2.$ctor1(36, 36);
                    this.btnLeft.Style.fontSize = "14px";
                    this.btnLeft.Top = 20;

                    this.btnRight.Size = new ExpressCraft.Vector2.$ctor1(36, 36);
                    this.btnRight.Style.fontSize = "14px";
                    this.btnRight.Top = 20;
                    this.btnRight.Left = "(100% - 50px)";

                    this.ContentRange = ($t = new ExpressCraft.Control.$ctor1(), $t.Size = new ExpressCraft.Vector2.$ctor1("(100% - 20px)", "(100% - 147px)"), $t.Location = new ExpressCraft.Vector2.$ctor1(11, 90), $t);
                } else {
                    this.ContentRange = ($t = new ExpressCraft.Control.$ctor1(), $t.Size = new ExpressCraft.Vector2.$ctor1("(100% - 20px)", "(100% - 92px)"), $t.Location = new ExpressCraft.Vector2.$ctor1(11, 60), $t);
                }

                this.ContentRange.Content.onkeydown = Bridge.fn.cacheBind(this, this.BlockTabEvent);

                this.btnToday = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "Today", $t.Width = 50, $t.ItemClick = Bridge.fn.bind(this, function (ev) {
                    this.ActiveDisplayMode = ExpressCraft.DateControl.DisplayMode.Day;
                    this.SetViewDateTime(System.DateTime.getToday());

                    if (!Bridge.staticEquals(this.OnDateChanged, null)) {
                        this.OnDateChanged(System.DateTime.getToday());
                    }

                    if (Bridge.equals(this.GetViewDateTime(), System.DateTime.getToday())) {
                        if (!Bridge.staticEquals(this.OnRequestToClose, null)) {
                            this.OnRequestToClose();
                        }
                    }
                }), $t);

                this.btnToday.Style.transform = "translate(-50%, 0)";
                this.btnToday.Style.left = "50%";
                this.btnToday.Style.marginRight = "50%";

                if (ExpressCraft.Helper.NotDesktop) {
                    this.btnToday.Top = "(100% - 51px)";
                    this.btnToday.Style.fontSize = "14px";
                    this.btnToday.Height = 45;
                    this.btnToday.Style.minWidth = "60px";
                    this.btnToday.Width = "(100% * 0.1428)";
                } else {
                    this.btnToday.Top = "(100% - 26px)";
                }

                this.btnToday.Content.onkeydown = Bridge.fn.cacheBind(this, this.BlockTabEvent);

                ExpressCraft.Helper.AppendChildren$1(doc, [this.btnTop, this.btnLeft, this.btnSelectedRange, this.btnRight, this.ContentRange, this.btnToday]);
                if (Bridge.equals(startDate, System.DateTime.getMinValue())) {
                    startDate = System.DateTime.getToday();
                }

                this.Content.appendChild(doc);

                this.SetViewDateTime(startDate);
            }
        },
        methods: {
            GetViewDateTime: function () {
                return System.DateTime.create(this.SelectedYear, this.SelectedMonth, this.SelectedDay);
            },
            SetViewDateTime: function (date) {
                var newSelectedYear = System.DateTime.getYear(date);
                var newSelectedMonth = System.DateTime.getMonth(date);
                var newSelectedDay = System.DateTime.getDay(date);

                if (newSelectedYear !== this.SelectedYear || newSelectedMonth !== this.SelectedMonth || newSelectedDay !== this.SelectedDay || Bridge.equals(date, System.DateTime.getToday())) {
                    this.SelectedYear = newSelectedYear;
                    this.SelectedMonth = newSelectedMonth;
                    this.SelectedDay = newSelectedDay;

                    if (!Bridge.staticEquals(this.OnDateChanged, null)) {
                        this.OnDateChanged(date);
                    }

                    this.RefreshView();
                }
            },
            RefreshView: function () {
                var $t;
                var date = this.GetViewDateTime();
                this.btnTop.Text = System.DateTime.format(date, "ddd, dd MMM yyyy");

                var doc = document.createDocumentFragment();

                switch (this._activeDisplayMode) {
                    case ExpressCraft.DateControl.DisplayMode.Day: 
                        this.btnSelectedRange.Text = System.DateTime.format(date, "MMM yyyy");
                        var startDate = System.DateTime.create(System.DateTime.getYear(date), System.DateTime.getMonth(date), 1);
                        var endDate = System.DateTime.addDays(System.DateTime.addMonths(startDate, 1), -1);
                        var TotalDays = (System.DateTime.subdd(endDate, startDate)).getDays();
                        var startDayIndex = ((System.DateTime.getDayOfWeek(startDate) === System.DayOfWeek.Sunday ? 7 : System.DateTime.getDayOfWeek(startDate)) - 1) | 0;
                        var offsetStart = 0;
                        var row = 1;
                        var startOutside = startDayIndex === 0 ? startDate : System.DateTime.addDays(startDate, ((-startDayIndex) | 0));
                        var endDayIndex = ((System.DateTime.getDayOfWeek(endDate) === System.DayOfWeek.Sunday ? 7 : System.DateTime.getDayOfWeek(endDate)) - 1) | 0;
                        for (var i = 0; i < 42; i = (i + 1) | 0) {
                            var curDate = { v : startOutside };

                            var btn = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = Bridge.toString(System.DateTime.getDay(curDate.v)), $t.Bounds = new ExpressCraft.Vector4.$ctor1("(100% * " + System.Double.format((offsetStart * 0.1428)) + ")", "(((100% - " + (ExpressCraft.Helper.NotDesktop ? 29 : 16) + "px) * " + System.Double.format(((((row - 1) | 0)) * 0.1666)) + ") + " + (ExpressCraft.Helper.NotDesktop ? 29 : 16) + "px)", "(100% * 0.1428)", "((100% - " + (ExpressCraft.Helper.NotDesktop ? 29 : 16) + "px) * " + System.Double.format(0.1666) + ")"), $t.ItemClick = (function ($me, curDate) {
                                return Bridge.fn.bind($me, function (ev) {
                                    if (Bridge.equals(this.GetViewDateTime(), curDate.v)) {
                                        if (!Bridge.staticEquals(this.OnRequestToClose, null)) {
                                            this.OnRequestToClose();
                                        }
                                    }
                                    this.SetViewDateTime(curDate.v);
                                });
                            })(this, curDate), $t);
                            if (ExpressCraft.Helper.NotDesktop) {
                                btn.Style.fontSize = "14px";
                                btn.Style.fontWeight = "bold";
                            }
                            if (Bridge.equals(curDate.v, date)) {
                                btn.ClassList.add("simplebutton-active");
                            }
                            btn.Style.borderColor = "transparent";

                            if (System.DateTime.lt(curDate.v, startDate) || System.DateTime.gt(curDate.v, endDate)) {
                                btn.Style.color = "rgb(211, 211, 211)";
                            } else if (System.DateTime.getDayOfWeek(curDate.v) === System.DayOfWeek.Saturday || System.DateTime.getDayOfWeek(curDate.v) === System.DayOfWeek.Sunday) {
                                btn.Style.color = "rgb(191, 11, 11)";
                                btn.Style.filter = "brightness(110%)";
                            } else {
                                btn.Style.filter = "brightness(110%)";
                            }
                            btn.Content.onkeydown = Bridge.fn.cacheBind(this, this.BlockTabEvent);

                            doc.appendChild(ExpressCraft.Control.op_Implicit(btn));

                            offsetStart = (offsetStart + 1) | 0;

                            if (offsetStart > 6) {
                                row = (row + 1) | 0;
                                offsetStart = 0;
                            }

                            startOutside = System.DateTime.addDays(System.DateTime.getDate(startOutside), 1);
                            if (System.DateTime.getHour(startOutside) === 23) {
                                startOutside = System.DateTime.addHours(startOutside, 1);
                            }
                        }
                        for (var x = 0; x < 7; x = (x + 1) | 0) {
                            var label = ExpressCraft.Control.Label(ExpressCraft.DateControl.Days[System.Array.index(x, ExpressCraft.DateControl.Days)], 0, 0);
                            ExpressCraft.Helper.SetLocation$2(label, "(100% * " + System.Double.format((x * 0.1428)) + " + ((100% * 0.1428) * 0.45) - 6px)", 0);
                            if (ExpressCraft.Helper.NotDesktop) {
                                label.style.fontSize = "14px";
                            }

                            doc.appendChild(label);
                        }
                        break;
                    case ExpressCraft.DateControl.DisplayMode.Month: 
                        break;
                    case ExpressCraft.DateControl.DisplayMode.Year: 
                        break;
                    default: 
                        break;
                }

                ExpressCraft.Helper.Empty(this.ContentRange.Content);
                ExpressCraft.Helper.AppendChild$2(this.ContentRange.Content, doc);
            },
            BlockTabEvent: function (ev) {
                if (ev.keyCode === 9) {
                    if (!Bridge.staticEquals(this.OnRequestToClose, null)) {
                        this.OnRequestToClose();
                    }
                    ev.preventDefault();
                }
            },
            MoveLeft: function () {
                this.MoveLeftOrRight(-1);
            },
            MoveUp: function () {
                return;
            },
            MoveLeftOrRight: function (timesValue) {
                var date = this.GetViewDateTime();

                switch (this._activeDisplayMode) {
                    default: 
                    case ExpressCraft.DateControl.DisplayMode.Day: 
                        date = System.DateTime.addMonths(date, (Bridge.Int.mul(1, timesValue)));
                        break;
                    case ExpressCraft.DateControl.DisplayMode.Month: 
                        date = System.DateTime.addMonths(date, (Bridge.Int.mul(12, timesValue)));
                        break;
                    case ExpressCraft.DateControl.DisplayMode.Year: 
                        date = System.DateTime.addYears(date, (Bridge.Int.mul(120, timesValue)));
                        break;
                }

                this.SetViewDateTime(date);
            },
            MoveRight: function () {
                this.MoveLeftOrRight(1);
            }
        }
    });

    Bridge.define("ExpressCraft.SimpleButton", {
        inherits: [ExpressCraft.Control],
        fields: {
            ItemClick: null,
            ParentForm: null,
            DialogResult: 0,
            _imageElement: null,
            _image: null,
            _useBase64Image: false,
            _imageRightAlign: false,
            _buttonImageSize: 0,
            enabled: false
        },
        events: {
            Click: null
        },
        props: {
            Image: {
                get: function () {
                    return this._image;
                },
                set: function (value) {
                    value = ((value || "") + "").trim();
                    if (!Bridge.referenceEquals(value, this._image)) {
                        this._image = value;
                        this._ProcessButtonImage();
                    }
                }
            },
            UseBase64Image: {
                get: function () {
                    return this._useBase64Image;
                },
                set: function (value) {
                    if (this._useBase64Image !== value) {
                        this._useBase64Image = value;
                        this._ProcessButtonImage();
                    }
                }
            },
            ImageRightAlign: {
                get: function () {
                    return this._imageRightAlign;
                },
                set: function (value) {
                    if (this._imageRightAlign !== value) {
                        this._imageRightAlign = value;
                        this._ProcessButtonImage();
                    }

                }
            },
            ButtonImageSize: {
                get: function () {
                    return this._buttonImageSize;
                },
                set: function (value) {
                    if (this._buttonImageSize !== value) {
                        this._buttonImageSize = value;
                        this._ProcessButtonImage();
                    }

                }
            },
            Text: {
                get: function () {
                    return this.Content.innerHTML;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this.Text, value)) {
                        this.Content.innerHTML = value;

                        if (this._imageElement != null) {
                            ExpressCraft.Helper.Delete$1(this._imageElement);
                            this._imageElement = null;
                        }
                        this._ProcessButtonImage();
                    }
                }
            },
            Enabled: {
                get: function () {
                    return this.enabled;
                },
                set: function (value) {
                    this.enabled = value;
                    if (this.enabled) {
                        this.Content.removeAttribute("disabled");
                    } else {
                        this.Content.setAttribute("disabled", System.Boolean.toString((!this.enabled)));
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this.DialogResult = ExpressCraft.DialogResultEnum.None;
                this.enabled = true;
            },
            ctor: function () {
                ExpressCraft.SimpleButton.$ctor1.call(this, "button", true);

            },
            $ctor1: function (button, ac) {
                if (button === void 0) { button = "button"; }
                if (ac === void 0) { ac = true; }

                this.$initialize();
                ExpressCraft.Control.$ctor4.call(this, "simplebutton", false, button, ac);
                this.Content.oncontextmenu = function (ev) {
                    ev.stopPropagation();
                    ev.preventDefault();
                };

                if (ac) {
                    this.Style.font = ExpressCraft.Settings.Font;
                }

                ExpressCraft.Helper.SetSize(this, "69px", "20px");

                this.Content.onclick = Bridge.fn.bind(this, function (ev) {
                    if (this.enabled) {
                        this.Content.blur();

                        if (this.DialogResult !== ExpressCraft.DialogResultEnum.None && this.ParentForm != null && this.ParentForm.IsDialog()) {
                            this.ParentForm.DialogResult = this.DialogResult;
                        }

                        if (!Bridge.staticEquals(this.ItemClick, null)) {
                            this.ItemClick(this);
                        }

                        if (!Bridge.staticEquals(this.Click, null)) {
                            this.Click(this, { });
                        }

                        if (this.DialogResult !== ExpressCraft.DialogResultEnum.None && this.ParentForm.DialogResult !== ExpressCraft.DialogResultEnum.None && this.ParentForm != null && this.ParentForm.IsDialog()) {
                            this.ParentForm.Close();
                        }
                    }

                    ev.stopPropagation();
                    ev.stopImmediatePropagation();
                });
                this.Content.ondblclick = function (ev) {
                    ev.stopPropagation();
                    ev.stopImmediatePropagation();
                };
                this.Content.onmousedown = function (ev) {
                    ev.stopPropagation();
                    ev.stopImmediatePropagation();
                };
                this.Content.onmouseup = function (ev) {
                    ev.stopPropagation();
                    ev.stopImmediatePropagation();
                };
            }
        },
        methods: {
            _ProcessButtonImage: function () {
                if (System.String.isNullOrWhiteSpace(this._image)) {
                    if (this._imageElement != null) {
                        ExpressCraft.Helper.Delete$1(this._imageElement);
                        this._imageElement = null;
                    }
                } else {
                    if (this._imageElement == null) {
                        this._imageElement = document.createElement("img");
                    } else {
                        ExpressCraft.Helper.Delete$1(this._imageElement);
                    }
                    ExpressCraft.Helper.SetImage$1(this._imageElement, this._image, !this._useBase64Image, false);
                    var padding = this._buttonImageSize === 0 ? "16px" : ExpressCraft.Helper.ToPx(Bridge.box(this._buttonImageSize, System.Int32));

                    this._imageElement.style.height = padding;
                    this._imageElement.style.position = "absolute";
                    this._imageElement.style.top = "1px";

                    if (!this._imageRightAlign) {
                        this._imageElement.style.backgroundPosition = "left";
                        this._imageElement.style.paddingLeft = padding;
                        this._imageElement.style.paddingRight = "";

                        this._imageElement.style.left = "1px";

                        if (this.Content.lastChild == null) {
                            this.Content.appendChild(this._imageElement);
                        } else {
                            this.Content.insertBefore(this._imageElement, this.Content.lastChild);
                        }
                    } else {
                        this._imageElement.style.right = "1px";
                        this._imageElement.style.left = "";
                        this._imageElement.style.backgroundPosition = "right";
                        this._imageElement.style.paddingRight = padding;
                        this._imageElement.style.paddingLeft = "";

                        this.Content.appendChild(this._imageElement);
                    }
                }
            }
        }
    });

    Bridge.define("ExpressCraft.GridLookupEdit", {
        inherits: [ExpressCraft.Control],
        fields: {
            gridView: null,
            FieldName: null,
            DisplayName: null,
            Visible: false
        },
        ctors: {
            ctor: function () {
                var $t;
                this.$initialize();
                ExpressCraft.Control.$ctor2.call(this, "inputcontrol", ExpressCraft.ComboBoxTypes.Default);
                this.gridView = ($t = new ExpressCraft.GridView.$ctor1(true, true), $t.Size = new ExpressCraft.Vector2.$ctor1(250, 400), $t);
                this.gridView.ContextMenu = null;
                this.gridView.OnFocusedRowChanged = Bridge.fn.bind(this, function (rowHandle, PrevRowhandle) {
                    var $t1;
                    ExpressCraft.Helper.Empty(this.Content);

                    if (rowHandle > -1) {
                        ExpressCraft.Helper.AppendChild$2(this.Content, ($t1 = document.createElement("option"), $t1.innerHTML = (Bridge.as(this.gridView.GetRowCellValue$3(rowHandle, this.DisplayName), System.String)), $t1.value = (Bridge.as(this.gridView.GetRowCellValue$3(rowHandle, this.FieldName), System.String)), $t1));
                    }
                    if (this.Visible) {
                        this.ClosePopup();
                    }
                });

                this.gridView.Content.onmouseleave = Bridge.fn.bind(this, function (ev) {
                    this.ClosePopup();
                });
                this.Content.onmousedown = Bridge.fn.bind(this, function (ev) {
                    ev.preventDefault();
                    ev.stopImmediatePropagation();
                    if (this.Visible) {
                        this.ClosePopup();
                    } else {
                        this.ShowPopup();
                    }
                });
            }
        },
        methods: {
            ShowPopup: function () {
                if (this.Visible) {
                    return;
                }
                var x = this.Content.getBoundingClientRect();
                this.gridView.Location = new ExpressCraft.Vector2.$ctor1(x.left, x.top + x.height);

                ExpressCraft.ContextMenu.TotalContextHandles = (ExpressCraft.ContextMenu.TotalContextHandles + 1) | 0;
                ExpressCraft.Helper.AppendChild$1(this.Content.parentElement, this.gridView);

                this.gridView.RenderGrid();

                this.gridView.Content.style.zIndex = Bridge.toString((((ExpressCraft.ContextMenu.TotalContextHandles + ExpressCraft.Settings.ContextMenuStartingZIndex) | 0)));
                this.Visible = true;
            },
            ClosePopup: function () {
                if (this.Visible) {
                    this.gridView.Content.parentElement.removeChild(ExpressCraft.Control.op_Implicit(this.gridView));
                    ExpressCraft.ContextMenu.TotalContextHandles = (ExpressCraft.ContextMenu.TotalContextHandles - 1) | 0;
                    this.Visible = false;
                }
            }
        }
    });

    Bridge.define("ExpressCraft.GridView", {
        inherits: [ExpressCraft.Control,ExpressCraft.IPrintable],
        fields: {
            GridFindPanel: null,
            GridHeader: null,
            GridHeaderContainer: null,
            GridBodyContainer: null,
            GridBody: null,
            BottonOfTable: null,
            RightOfTable: null,
            RightOfTableHeader: null,
            SearchTextInput: null,
            btnFind: null,
            btnClear: null,
            btnClose: null,
            _showFindPanelContextItem: null,
            _findPanelVisible: false,
            _highlighSearchResults: false,
            _dataSource: null,
            OnFocusedRowChanged: null,
            OnFocusedColumnChanged: null,
            OnRowDoubleClick: null,
            OnCustomRowStyle: null,
            OnRowClick: null,
            OnDoubleClick: null,
            OnCellRowMouseDown: null,
            SelectedRows: null,
            VisibleRowHandles: null,
            _allowRowDrag: false,
            AutoGenerateColumnsFromSource: false,
            AllowMultiSelection: false,
            showAutoFilterRow: false,
            UnitHeight: 0,
            _columnAutoWidth: false,
            _focusedcolumn: 0,
            _focusedDataHandle: 0,
            _columnHeadersVisible: false,
            _useEditForm: false,
            SortSettings: null,
            Columns: null,
            PrevRenderGridScrollId: 0,
            clickTimeDiff: null,
            headingClass: null,
            cellClass: null,
            CacheRow: null,
            CountOfDeletion: 0,
            _searchTimer: 0,
            _useDrawNotDom: false,
            DragIndex: 0,
            ResizeIndex: 0,
            ResizePageX: 0,
            ResizeSpan: null,
            OnColumnOnClick: null,
            OnColumnDragStart: null,
            OnColumnDragOver: null,
            OnColumnDrop: null,
            OnColumnMouseDown: null,
            OnColumnMouseMove: null,
            OnColumnMouseLeave: null,
            OnRowDragStart: null,
            lastId: 0,
            PrevScroll: 0,
            FilterRowOnChange: null,
            RenderTime: 0,
            renderGridInternal: null,
            _disableRender: false
        },
        props: {
            FindPanelVisible: {
                get: function () {
                    return this._findPanelVisible;
                },
                set: function (value) {
                    if (this._findPanelVisible !== value) {
                        if (value) {
                            this.ShowFindPanel();
                        } else {
                            this.CloseFindPanel();
                        }

                    }

                }
            },
            HighlighSearchResults: {
                get: function () {
                    return this._highlighSearchResults;
                },
                set: function (value) {
                    if (this._highlighSearchResults !== value) {
                        this._highlighSearchResults = value;
                        this.RenderGrid();
                    }
                }
            },
            AllowRowDrag: {
                get: function () {
                    return this._allowRowDrag;
                },
                set: function (value) {
                    if (this._allowRowDrag !== value) {
                        this._allowRowDrag = value;
                        this.RenderGrid();
                    }
                }
            },
            ShowAutoFilterRow: {
                get: function () {
                    return this.showAutoFilterRow;
                },
                set: function (value) {
                    if (this.showAutoFilterRow !== value) {
                        this.showAutoFilterRow = value;
                        if (!this.showAutoFilterRow) {
                            for (var i = 0; i < this.ColumnCount(); i = (i + 1) | 0) {
                                this.Columns.getItem(i).FilterEdit = null;
                                this.Columns.getItem(i).FilterValue = null;
                            }
                            this.CalculateVisibleRows();
                        }
                        this.RenderGrid();
                    }
                }
            },
            FocusedColumn: {
                get: function () {
                    return this._focusedcolumn;
                },
                set: function (value) {
                    if (value !== this.FocusedColumn) {
                        var prev = this._focusedcolumn;
                        this._focusedcolumn = value;
                        if (!Bridge.staticEquals(this.OnFocusedColumnChanged, null)) {
                            this.OnFocusedColumnChanged(this._focusedcolumn, prev);
                        }
                    }
                }
            },
            FocusedDataHandle: {
                get: function () {
                    return this._focusedDataHandle;
                },
                set: function (value) {
                    if (value !== this._focusedDataHandle) {
                        var prev = this._focusedDataHandle;

                        this._focusedDataHandle = value;
                        this.RenderGrid();
                        if (!Bridge.staticEquals(this.OnFocusedRowChanged, null)) {
                            this.OnFocusedRowChanged(this._focusedDataHandle, prev);
                        }
                    }
                }
            },
            ColumnHeadersVisible: {
                get: function () {
                    return this._columnHeadersVisible;
                },
                set: function (value) {
                    if (value !== this._columnHeadersVisible) {
                        this._columnHeadersVisible = value;

                        this.SetDefaultSizes();

                        this.RenderGrid();
                    }
                }
            },
            ColumnAutoWidth: {
                get: function () {
                    return this._columnAutoWidth;
                },
                set: function (value) {
                    if (value) {
                        this.GridBodyContainer.style.overflowX = "hidden";
                    } else {
                        this.GridBodyContainer.style.overflowX = "auto";
                    }

                    if (this._columnAutoWidth !== value) {
                        this._columnAutoWidth = value;
                        this.RenderGrid();
                    }
                }
            },
            UseEditForm: {
                get: function () {
                    return this._useEditForm;
                },
                set: function (value) {
                    if (value !== this._useEditForm) {
                        this._useEditForm = value;
                        this.RenderGrid();
                    }
                }
            },
            DataSource: {
                get: function () {
                    return this._dataSource;
                },
                set: function (value) {
                    this.FocusedDataHandle = -1;
                    this.SelectedRows = new (ExpressCraft.HardSoftList$1(System.Boolean))(false);
                    this.VisibleRowHandles = new (System.Collections.Generic.List$1(System.Int32)).ctor();

                    if (this._dataSource != null) {
                        this._dataSource.removeOnDataSourceChanged(Bridge.fn.cacheBind(this, this.DataSource_OnDataSourceChanged));
                    }

                    this._dataSource = value;

                    if (this._dataSource != null) {
                        this._dataSource.addOnDataSourceChanged(Bridge.fn.cacheBind(this, this.DataSource_OnDataSourceChanged));

                        if (this.Columns.Count === 0 && this.AutoGenerateColumnsFromSource) {
                            var sw = System.Diagnostics.Stopwatch.startNew();

                            for (var i = 0; i < this._dataSource.ColumnCount; i = (i + 1) | 0) {
                                var sw1 = System.Diagnostics.Stopwatch.startNew();

                                var gvc = new ExpressCraft.GridViewColumn(this);
                                gvc.Caption = this._dataSource.Columns.getItem(i).FieldName;
                                gvc.Column = this._dataSource.Columns.getItem(i);
                                gvc.Visible = true;

                                switch (this._dataSource.Columns.getItem(i).DataType) {
                                    case ExpressCraft.DataType.Byte: 
                                    case ExpressCraft.DataType.Short: 
                                    case ExpressCraft.DataType.Integer: 
                                    case ExpressCraft.DataType.Long: 
                                    case ExpressCraft.DataType.Float: 
                                    case ExpressCraft.DataType.Double: 
                                    case ExpressCraft.DataType.Decimal: 
                                        gvc.BodyApparence.Alignment = "right";
                                        break;
                                    case ExpressCraft.DataType.DateTime: 
                                        if (ExpressCraft.Settings.GridViewAutoColumnFormatDates) {
                                            if (ExpressCraft.Settings.GridViewAutoColumnGenerateFormatAsDate) {
                                                gvc.FormatString = "{0:d}";
                                            } else {
                                                gvc.FormatString = "{0:yyyy-MM-dd}";
                                            }
                                        }
                                        break;
                                    case ExpressCraft.DataType.Bool: 
                                        gvc.CellDisplay = new ExpressCraft.GridViewCellDisplayCheckBox();
                                        break;
                                }

                                this.Columns.add(gvc);

                                sw.stop();
                                System.Console.WriteLine("DataSource AddColumn Auto: " + sw1.milliseconds());
                            }

                            sw.stop();
                            System.Console.WriteLine("DataSource AutoColumns: " + sw.milliseconds());
                        }
                        this.RenderGrid();
                    }
                }
            },
            UseDrawNotDom: {
                get: function () {
                    return this._useDrawNotDom;
                },
                set: function (value) {
                    if (this._useDrawNotDom !== value) {
                        this._useDrawNotDom = value;
                        this.RenderGrid();
                    }
                }
            }
        },
        alias: ["GetPages", "ExpressCraft$IPrintable$GetPages"],
        ctors: {
            init: function () {
                this._highlighSearchResults = true;
                this.SelectedRows = new (ExpressCraft.HardSoftList$1(System.Boolean))(false);
                this._allowRowDrag = false;
                this.AutoGenerateColumnsFromSource = true;
                this.AllowMultiSelection = true;
                this.showAutoFilterRow = false;
                this.UnitHeight = 28.0;
                this._columnAutoWidth = false;
                this._focusedcolumn = -1;
                this._focusedDataHandle = -1;
                this._columnHeadersVisible = true;
                this._useEditForm = true;
                this.Columns = new (System.Collections.Generic.List$1(ExpressCraft.GridViewColumn)).ctor();
                this.PrevRenderGridScrollId = -1;
                this.CacheRow = new (System.Collections.Generic.Dictionary$2(System.Int32,HTMLElement))();
                this.CountOfDeletion = 0;
                this._searchTimer = -1;
                this.DragIndex = -1;
                this.ResizeIndex = -1;
                this.ResizePageX = 0;
                this.lastId = -1;
                this.PrevScroll = -1;
                this.RenderTime = -1;
                this._disableRender = false;
            },
            ctor: function () {
                ExpressCraft.GridView.$ctor1.call(this, true, false);

            },
            $ctor1: function (autoGenerateColumns, columnAutoWidth) {
                if (autoGenerateColumns === void 0) { autoGenerateColumns = true; }
                if (columnAutoWidth === void 0) { columnAutoWidth = false; }
                var $t;

                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "grid");
                if (ExpressCraft.Helper.NotDesktop) {
                    this.UnitHeight = 53;
                    this.headingClass = "heading heading-responsive";

                    this.cellClass = "cell cell-responsive";
                } else {
                    this.UnitHeight = 20;
                    this.headingClass = "heading";
                    this.cellClass = "cell";
                }

                this.Content.style.overflow = "hidden";
                this.renderGridInternal = Bridge.fn.bind(this, function () {
                    if (this._disableRender) {
                        return;
                    }

                    var StartedWith = this.RenderTime;

                    this.GridHeaderContainer.scrollLeft = this.GridBodyContainer.scrollLeft;
                    if (ExpressCraft.Settings.GridViewBlurOnScroll) {
                        this.ProcessBlur();
                    }

                    this.ValidateGridSize();

                    if (this.ColumnCount() === 0) {
                        this.ClearGrid();
                        return;
                    }

                    var RawLeftCellIndex = 0;
                    var RawLeftCellScrollPadding = 0;

                    var RawLeftCellCount = this.Columns.Count;

                    var LeftLocation = 0;
                    var foundLeftLocation = false;
                    var foundRightLocation = false;

                    var ClientWidth = this.GridBodyContainer.clientWidth;


                    var ViewWidth = this.GridBodyContainer.scrollLeft + ClientWidth;
                    var _columnAutoWidthSingle = 0.0;

                    if (this._columnAutoWidth) {
                        _columnAutoWidthSingle = ClientWidth === 0 ? 0.0 : ClientWidth / this.GetVisibleCount();
                    }

                    var MaxWidth;
                    var LastWidth;

                    for (var x = 0; x < this.Columns.Count; x = (x + 1) | 0) {
                        if (!this.Columns.getItem(x).Visible) {
                            continue;
                        }

                        this.Columns.getItem(x).CachedX = LeftLocation;
                        LastWidth = this._columnAutoWidth ? _columnAutoWidthSingle : this.Columns.getItem(x).Width;
                        LeftLocation += LastWidth;
                        if (!foundLeftLocation && LeftLocation >= this.GridBodyContainer.scrollLeft) {
                            foundLeftLocation = true;
                            RawLeftCellIndex = x;
                            RawLeftCellScrollPadding = LeftLocation - this.GridBodyContainer.scrollLeft;
                        }
                        if (foundLeftLocation && !foundRightLocation && LeftLocation >= ViewWidth) {
                            foundRightLocation = true;
                            RawLeftCellCount = (x + 1) | 0;
                            break;
                        }
                        if (StartedWith !== this.RenderTime) {
                            return;
                        }
                    }

                    MaxWidth = LeftLocation;

                    var colFragment = document.createDocumentFragment();

                    var uboundRowCount = (RawLeftCellCount - 1) | 0;

                    if (this._columnHeadersVisible) {
                        for (var x1 = RawLeftCellIndex; x1 < RawLeftCellCount; x1 = (x1 + 1) | 0) {
                            if (x1 >= this.Columns.Count) {
                                break;
                            }
                            if (!this.Columns.getItem(x1).Visible) {
                                continue;
                            }

                            var gcol = this.Columns.getItem(x1);
                            var colIndex = x1;
                            var apparence = gcol.HeadingApparence;

                            var col = ExpressCraft.Control.Label$3(gcol.Caption, (this._columnAutoWidth ? gcol.CachedX : gcol.CachedX), 0, (this._columnAutoWidth ? _columnAutoWidthSingle : gcol.Width) - (x1 === uboundRowCount ? 0 : 1), apparence.IsBold, false, this.headingClass, apparence.Alignment, apparence.Forecolor);
                            if (gcol.SortedMode !== ExpressCraft.GridViewSortMode.None) {
                                var sortImage = ExpressCraft.Control.Div$1(gcol.SortedMode === ExpressCraft.GridViewSortMode.Asc ? "grid-sort-up" : "grid-sort-down");
                                ExpressCraft.Helper.SetBounds$1(sortImage, "(100% - 13px)", 11, 9, 5);
                                ExpressCraft.Helper.AppendChild$2(col, sortImage);
                            }

                            this.SetupColumn(col, x1, gcol);

                            colFragment.appendChild(col);

                            if (StartedWith !== this.RenderTime) {
                                return;
                            }
                        }
                    }


                    if (this._dataSource == null || this._dataSource.RowCount === 0 || this._dataSource.ColumnCount === 0) {
                        this.ClearGrid();
                        ExpressCraft.Helper.AppendChild$2(this.GridHeader, colFragment);
                        return;
                    }

                    var ppr = this.PixelsPerRow(this._dataSource.RowCount);

                    var RawTopRowIndex = this.GetRawTopRowIndex();
                    var RawTopRowScrollPadding = RawTopRowIndex % 1.0;
                    var RawVisibleRowCount = this.GetRawVisibleRowCount();

                    var Length = (Bridge.Int.clip32((RawVisibleRowCount + RawTopRowIndex)) + 1) | 0;
                    var start = Bridge.Int.clip32(RawTopRowIndex);


                    for (var x2 = (this.SelectedRows.SL.Count - 1) | 0; x2 >= 0; x2 = (x2 - 1) | 0) {
                        var Found = false;
                        for (var i = start; i < Length; i = (i + 1) | 0) {
                            if (i < this.DataSource.RowCount) {
                                var DataRowhandle = this.GetDataSourceRow(i);
                                if (this.SelectedRows.GetIndexValueByHardListIndex(this.SelectedRows.SL.getItem(x2)).Index === DataRowhandle) {
                                    Found = true;
                                    break;
                                }
                            }
                            if (StartedWith !== this.RenderTime) {
                                return;
                            }
                        }
                        if (StartedWith !== this.RenderTime) {
                            return;
                        }
                        if (!Found) {
                            this.SelectedRows.SL.removeAt(x2);
                        }
                    }


                    var rowFragment = document.createDocumentFragment();

                    if (ExpressCraft.Settings.GridViewRowScrollPadding > 0) {
                        start = (start - ExpressCraft.Settings.GridViewRowScrollPadding) | 0;
                        Length = (Length + ExpressCraft.Settings.GridViewRowScrollPadding) | 0;
                    }

                    var Y = (start * ppr);

                    if (this.ShowAutoFilterRow) {
                        Length = (Length - 1) | 0;
                        Y += this.UnitHeight;
                    }

                    if (start < 0) {
                        start = 0;
                    }
                    if (Length > this.DataSource.RowCount) {
                        Length = this.DataSource.RowCount;
                    }

                    if (this.CacheRow.count > 10) {
                        if (this.CountOfDeletion > 8) {
                            this.CacheRow = new (System.Collections.Generic.Dictionary$2(System.Int32,HTMLElement))();
                            this.CountOfDeletion = 0;
                        } else {
                            var MaxDelete = (this.CacheRow.count - 10) | 0;
                            var __length = this.CacheRow.count;
                            var KeysToDelete = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                            for (var i1 = 0; i1 < __length; i1 = (i1 + 1) | 0) {
                                var fieldIndex = System.Linq.Enumerable.from(this.CacheRow).elementAt(i1).key;
                                if (fieldIndex < start || fieldIndex >= Length) {
                                    KeysToDelete.add(fieldIndex);
                                    if (KeysToDelete.Count > MaxDelete) {
                                        break;
                                    }
                                }
                            }
                            __length = KeysToDelete.Count;
                            if (__length > 0) {
                                this.CountOfDeletion = (this.CountOfDeletion + 1) | 0;
                            }
                            for (var i2 = 0; i2 < __length; i2 = (i2 + 1) | 0) {
                                if (this.CacheRow.containsKey(KeysToDelete.getItem(i2))) {
                                    var x3 = this.CacheRow.get(KeysToDelete.getItem(i2));
                                    x3.onclick = null;
                                    x3.ondblclick = null;
                                    ExpressCraft.Helper.Empty(x3);
                                    x3.ondragstart = null;
                                    ExpressCraft.Helper.Delete$1(x3);

                                    this.CacheRow.remove(KeysToDelete.getItem(i2));
                                }
                            }
                        }

                    }

                    var prevRowCache = this.CacheRow.count;

                    for (var i3 = start; i3 < Length; i3 = (i3 + 1) | 0) {
                        if (!this.CacheRow.containsKey(i3)) {
                            var DataRowhandle1 = this.GetDataSourceRow(i3);
                            var dr = document.createElement("row");
                            dr.className = ((i3 % 2 === 0 ? "cellrow even" : "cellrow") || "") + ((this.SelectedRows.GetValue(DataRowhandle1, true) ? " cellrow-selected" : "") || "") + ((DataRowhandle1 === this.FocusedDataHandle ? " focusedrow" : "") || "");
                            dr.style.position = "absolute";
                            ExpressCraft.Helper.SetBounds$1(dr, 0, Y, this._columnAutoWidth ? ClientWidth : MaxWidth, this.UnitHeight);
                            dr.setAttribute("i", System.Convert.toString(Bridge.box(DataRowhandle1, System.Int32)));


                            dr.onclick = this.OnRowClick;
                            if (ExpressCraft.Settings.IsChrome) {
                                dr.ondblclick = this.OnDoubleClick;
                            }
                            var docFrag = document.createDocumentFragment();

                            for (var x4 = RawLeftCellIndex; x4 < RawLeftCellCount; x4 = (x4 + 1) | 0) {
                                var col1 = this.Columns.getItem(x4);
                                if (!col1.Visible) {
                                    continue;
                                }

                                var apparence1 = col1.BodyApparence;
                                var useDefault = false;
                                var cell = null;
                                if (col1.CellDisplay == null || ((useDefault = col1.CellDisplay.UseDefaultElement))) {
                                    var displayValue = col1.GetDisplayValueByDataRowHandle(DataRowhandle1);

                                    cell = document.createElement("cell");
                                    cell.className = this.cellClass;
                                    cell.style.position = "absolute";
                                    cell.style.left = System.Single.format(col1.CachedX) + "px";
                                    cell.style.width = System.Single.format((this._columnAutoWidth ? _columnAutoWidthSingle : col1.Width)) + "px";
                                    cell.setAttribute("x", System.Convert.toString(Bridge.box(x4, System.Int32)));
                                    cell.onclick = this.OnCellRowMouseDown;

                                    if (!System.String.isNullOrWhiteSpace(displayValue)) {
                                        cell.textContent = displayValue;
                                        if (!Bridge.referenceEquals(apparence1.Alignment, "left")) {
                                            if (Bridge.referenceEquals(apparence1.Alignment, "right")) {
                                                cell.style.direction = "rtl";
                                            } else {
                                                cell.style.textAlign = apparence1.Alignment;
                                            }
                                        }
                                        if (apparence1.IsBold) {
                                            cell.style.fontWeight = "bold";
                                        }

                                        if (apparence1.Forecolor != null) {
                                            cell.style.color = apparence1.Forecolor;
                                        }
                                    }

                                    var newCell = useDefault ? col1.CellDisplay.OnCreateDefault(cell, this, DataRowhandle1, x4) : cell;

                                    if (this._highlighSearchResults && this.DataSource._searchActive && !useDefault && !System.String.isNullOrWhiteSpace(displayValue) && System.String.startsWith(displayValue.toLowerCase(), this.DataSource.SearchString)) {
                                        ExpressCraft.Helper.Empty(newCell);
                                        var markelement = document.createElement("mark");
                                        var Slength = this.DataSource.SearchString.length;
                                        markelement.textContent = displayValue.substr(0, Slength);
                                        ExpressCraft.Helper.AppendChildren$2(newCell, [markelement, document.createTextNode(displayValue.substr(Slength))]);
                                    }

                                    docFrag.appendChild(newCell);
                                } else {
                                    cell = col1.CellDisplay.OnCreate(this, DataRowhandle1, x4);
                                    cell.style.left = System.Single.format(col1.CachedX) + "px";
                                    cell.style.width = ExpressCraft.Helper.ToPx(Bridge.box((this._columnAutoWidth ? _columnAutoWidthSingle : col1.Width), System.Single, System.Single.format, System.Single.getHashCode));

                                    docFrag.appendChild(cell);
                                }
                                if (cell != null) {

                                }

                            }

                            ExpressCraft.Helper.AppendChild$2(dr, docFrag);

                            if (this.AllowRowDrag) {
                                dr.setAttribute("draggable", "true");

                                dr.ondragstart = this.OnRowDragStart;
                            }

                            rowFragment.appendChild(dr);

                            this.CacheRow.set(i3, dr);
                        }

                        if (StartedWith !== this.RenderTime) {
                            if (prevRowCache === 0) {
                                this.ClearGrid();
                            }

                            ExpressCraft.Helper.AppendChild$2(this.GridBody, rowFragment);

                            return;
                        }

                        Y += this.UnitHeight;
                    }
                    if (prevRowCache === 0) {
                        this.ClearGrid();
                    }

                    if (!Bridge.staticEquals(this.OnCustomRowStyle, null) && rowFragment.childNodes != null) {
                        var count = rowFragment.childNodes.length;
                        for (var i4 = 0; i4 < count; i4 = (i4 + 1) | 0) {
                            if (StartedWith !== this.RenderTime) {
                                ExpressCraft.Helper.AppendChild$2(this.GridBody, rowFragment);

                                return;
                            }

                            try {
                                var child = rowFragment.childNodes[i4];
                                this.OnCustomRowStyle(child, parseInt(child.getAttribute("i")));
                            } catch (ex) {
                                ex = System.Exception.create(ex);
                                if (ExpressCraft.Application.AplicationDefition === ExpressCraft.ApplicationDefitnion.ExpressCraftConsole) {
                                    ExpressCraft.ConsoleForm.Log(Bridge.toString(ex), ExpressCraft.ConsoleLogType.Error);
                                }
                            }
                        }
                    }

                    ExpressCraft.Helper.AppendChild$2(this.GridHeader, colFragment);
                    ExpressCraft.Helper.AppendChild$2(this.GridBody, rowFragment);

                    if (StartedWith !== this.RenderTime) {
                        return;
                    }

                    this.RenderTime = -1;
                });

                this.GridHeaderContainer = ExpressCraft.Control.Div$1("heading-container");

                this.GridHeader = ExpressCraft.Control.Div();
                ExpressCraft.Helper.SetBounds$1(this.GridHeader, 0, 0, 0, "29px");
                this.GridBodyContainer = ExpressCraft.Control.Div();

                this.GridBodyContainer.style.overflowX = "auto !important";
                this.GridBodyContainer.style.overflowY = "auto !important";

                this.GridHeaderContainer.style.overflow = "hidden";

                this.GridBody = ExpressCraft.Control.Div();
                ExpressCraft.Helper.SetBounds$1(this.GridBody, 0, 0, 0, 0);

                ExpressCraft.Helper.AppendChild$2(this.GridBodyContainer, this.GridBody);
                ExpressCraft.Helper.AppendChild$2(this.GridHeaderContainer, this.GridHeader);

                this.GridFindPanel = ExpressCraft.Control.Div$1("heading-container");
                this.GridFindPanel.style.visibility = "hidden";
                ExpressCraft.Helper.SetBounds$1(this.GridFindPanel, 0, 0, "100%", 46);

                this.SearchTextInput = ($t = new ExpressCraft.TextInput.ctor(), $t.OnTextChanged = Bridge.fn.bind(this, function (sender) {
                    if (this._searchTimer > -1) {
                        clearTimeout(this._searchTimer);
                    }
                    if (System.String.isNullOrWhiteSpace(this.SearchTextInput.Text)) {
                        this._search();
                    } else {
                        this._searchTimer = Bridge.Int.clip32(setTimeout(Bridge.fn.bind(this, function (a) {
                            this._search();
                        }), 500));
                    }
                }), $t.OnKeyDown = Bridge.fn.bind(this, function (sender, ev) {
                    if (ev.keyCode === ExpressCraft.KeyCodes.Enter) {
                        this.btnFind.Content.click();
                    }
                }), $t);
                this.SearchTextInput.Bounds = new ExpressCraft.Vector4.$ctor1(30, 13, 350, 22);
                this.SearchTextInput.SetAttribute("placeholder", "Enter text to search...");

                this.btnFind = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "Find", $t.ItemClick = Bridge.fn.bind(this, function (sender) {
                    if (this._searchTimer > -1) {
                        clearTimeout(this._searchTimer);
                    }
                    this._search();
                }), $t.Bounds = new ExpressCraft.Vector4.$ctor1(385, 13, 60, 22), $t);
                this.btnClear = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "Clear", $t.ItemClick = Bridge.fn.bind(this, function (sender) {
                    if (this._searchTimer > -1) {
                        clearTimeout(this._searchTimer);
                    }
                    this.SearchTextInput.Text = "";
                }), $t.Bounds = new ExpressCraft.Vector4.$ctor1(449, 13, 60, 22), $t);

                this.btnClose = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Bounds = new ExpressCraft.Vector4.$ctor1(7, 15, 18, 18), $t.ItemClick = Bridge.fn.bind(this, function (sender) {
                    this.btnClear.Content.click();
                    this.CloseFindPanel();
                }), $t);
                this.btnClose.Content.innerHTML = "&times;";


                ExpressCraft.Helper.AppendChildren$1(this.GridFindPanel, [this.btnClose, this.SearchTextInput, this.btnFind, this.btnClear]);

                this.SetDefaultSizes();

                this.Content.onmouseup = Bridge.fn.bind(this, function (ev) {
                    if (this.ResizeIndex === -1) {
                        return;
                    }
                    var x = ev.pageX;
                    x = (this.Columns.getItem(this.ResizeIndex).Width + (((x - this.ResizePageX) | 0))) | 0;
                    if (x < 24) {
                        x = 24;
                    }
                    this.Columns.getItem(this.ResizeIndex).Width = x;

                    ExpressCraft.Form.SetCursor("default");

                    ev.preventDefault();
                    ev.stopImmediatePropagation();
                    ev.stopPropagation();

                    this.ResizeIndex = -1;
                    this.ResizeSpan = null;
                });

                this.OnResize = Bridge.fn.bind(this, function (ev) {
                    this.CacheRow = new (System.Collections.Generic.Dictionary$2(System.Int32,HTMLElement))();
                    this.DelayedRenderGrid();
                });

                var prevleft = 0;
                if (ExpressCraft.Settings.IsChrome && !ExpressCraft.Helper.NotDesktop) {
                    this.GridBodyContainer.onmousewheel = Bridge.fn.bind(this, function (ev) {
                        ev.preventDefault();

                        if (ev.deltaY !== 0) {
                            this.GridBodyContainer.scrollTop += (this.UnitHeight * (ev.deltaY / 100.0)) * 3;
                        }
                    });
                }

                var ignoreScroll = false;
                this.GridBodyContainer.onscroll = Bridge.fn.bind(this, function (ev) {
                    if (ignoreScroll) {
                        return;
                    }

                    if (prevleft !== this.GridBodyContainer.scrollLeft) {
                        this.CacheRow = new (System.Collections.Generic.Dictionary$2(System.Int32,HTMLElement))();
                        prevleft = Bridge.Int.clip32(this.GridBodyContainer.scrollLeft);
                        this.DelayedRenderGrid();
                    } else {
                        if (ExpressCraft.Settings.IsChrome && !ExpressCraft.Helper.NotDesktop) {
                            if (this.GridBodyContainer.scrollTop !== 0 && this.GridBodyContainer.scrollTop + this.GridBodyContainer.clientHeight !== this.GridBodyContainer.scrollHeight) {
                                var diff = this.GridBodyContainer.scrollTop % this.UnitHeight;
                                if (diff !== 0) {
                                    ignoreScroll = true;
                                    this.GridBodyContainer.scrollTop -= diff;
                                    ignoreScroll = false;
                                }
                            }
                        }

                        this.DelayedRenderGrid(true);
                    }
                });
                this.OnLoaded = Bridge.fn.bind(this, function (ev) {
                    this.RenderGrid();
                });
                this.OnCellRowMouseDown = Bridge.fn.bind(this, function (ev) {
                    this.FocusedColumn = parseInt(ev.currentTarget.getAttribute("x"));
                });
                this.OnRowClick = Bridge.fn.bind(this, function (ev) {
                    if (!ExpressCraft.Settings.IsChrome) {
                        if (this.clickTimeDiff == null) {
                            this.clickTimeDiff = System.Diagnostics.Stopwatch.startNew();
                        } else {
                            this.clickTimeDiff.stop();
                            var ems = this.clickTimeDiff.milliseconds();
                            this.clickTimeDiff = null;

                            if (ems.lt(System.Int64(200))) {
                                this.OnDoubleClick(ev);
                            }
                        }
                    }

                    var DataRowHandle = parseInt(ev.currentTarget.getAttribute("i"));

                    var mev = ev;
                    if (this.AllowMultiSelection) {
                        if (mev.ctrlKey) {
                            this.SelectedRows.AddOrSet(true, DataRowHandle, true);
                            this.RenderGrid();
                        } else if (mev.shiftKey && this.FocusedDataHandle > -1) {
                            this._disableRender = true;
                            this.SelectedRows.ClearAll();
                            if (DataRowHandle < this.FocusedDataHandle) {
                                for (var i = DataRowHandle; i < ((this.FocusedDataHandle + 1) | 0); i = (i + 1) | 0) {
                                    this.SelectedRows.AddOrSet(true, i, true);
                                }
                            } else {
                                for (var i1 = this.FocusedDataHandle; i1 < ((DataRowHandle + 1) | 0); i1 = (i1 + 1) | 0) {
                                    this.SelectedRows.AddOrSet(true, i1, true);
                                }
                            }
                            this._disableRender = false;
                            this.RenderGrid();
                            return;
                        }
                    }
                    this.SelectedRows.ClearAndAddOrSet(true, DataRowHandle, true);
                    if (DataRowHandle !== this._focusedDataHandle) {
                        this.FocusedDataHandle = DataRowHandle;
                    } else {
                        this.RenderGrid();
                    }
                });
                this.Content.tabIndex = 0;
                this.OnDoubleClick = Bridge.fn.bind(this, function (ev) {
                    var drh = parseInt(ev.currentTarget.getAttribute("i"));
                    if (!Bridge.staticEquals(this.OnRowDoubleClick, null)) {
                        this.OnRowDoubleClick(drh);
                    }

                    if (this._useEditForm) {
                        var idr = this.DataSource.getItem(drh);

                        var fdre = new ExpressCraft.DataRowEditForm(idr, this, true);
                        fdre.ShowDialog();
                    }
                });

                this.Content.onkeydown = Bridge.fn.bind(this, function (ev) {
                    var kev = ev;
                    if (this.AllowMultiSelection && kev.ctrlKey && (kev.keyCode === 65 || kev.keyCode === 97)) {
                        this.SelectAllRows();
                    } else {
                        if (kev.keyCode === ExpressCraft.KeyCodes.Up || kev.keyCode === ExpressCraft.KeyCodes.Down) {
                            this._disableRender = true;
                            var prevFocused = this.FocusedDataHandle;
                            if (kev.keyCode === ExpressCraft.KeyCodes.Up) {
                                if (!(((this.FocusedDataHandle - 1) | 0) < 0)) {
                                    this.FocusedDataHandle = (this.FocusedDataHandle - 1) | 0;
                                }
                            } else if (kev.keyCode === ExpressCraft.KeyCodes.Down) {
                                if (!(this.FocusedDataHandle > this.RowCount())) {
                                    this.FocusedDataHandle = (this.FocusedDataHandle + 1) | 0;
                                }
                            }
                            if (prevFocused !== this.FocusedDataHandle) {
                                if (kev.shiftKey) {
                                    this.SelectedRows.AddOrSet(true, this.FocusedDataHandle, true);
                                } else {
                                    this.SelectedRows.ClearAndAddOrSet(true, this.FocusedDataHandle, true);
                                }

                                this.MakeRowVisible(this.FocusedDataHandle);

                                this._disableRender = false;

                                this.RenderGrid();
                            } else {
                                this._disableRender = false;
                            }
                        }

                    }
                });

                this.ContextMenu = new ExpressCraft.ContextMenu();

                this.ContextMenu.ContextItems.AddRange(System.Array.init([new ExpressCraft.ContextItem.$ctor1("Sort Ascending", Bridge.fn.bind(this, function (cm) {
                    if (this.FocusedColumn > -1) {
                        this.SortColumn$1(this.Columns.getItem(this.FocusedColumn), ExpressCraft.GridViewSortMode.Asc);
                    }
                })), new ExpressCraft.ContextItem.$ctor1("Sort Descending", Bridge.fn.bind(this, function (cm) {
                    if (this.FocusedColumn > -1) {
                        this.SortColumn$1(this.Columns.getItem(this.FocusedColumn), ExpressCraft.GridViewSortMode.Desc);
                    }
                })), new ExpressCraft.ContextItem.$ctor1("Clear All Sorting", Bridge.fn.bind(this, function (cm) {
                    this.ClearSortColumn();
                }), true), new ExpressCraft.ContextItem.$ctor1("Hide This Column", Bridge.fn.bind(this, function (ci) {
                    if (this.FocusedColumn > -1) {
                        this.Columns.getItem(this.FocusedColumn).Visible = false;
                        this.RenderGrid();
                    }
                })), new ExpressCraft.ContextItem.$ctor1("Best Fit", Bridge.fn.bind(this, function (ci) {
                    if (this.FocusedColumn > -1) {
                        this.Columns.getItem(this.FocusedColumn).Width = this.GetBestFitForColumn(this.Columns.getItem(this.FocusedColumn));
                    }
                })), new ExpressCraft.ContextItem.$ctor1("Best Fit (all columns)", Bridge.fn.bind(this, function (ci) {
                    this.BestFitAllColumns();
                }), true), new ExpressCraft.ContextItem.$ctor1("Export to Excel", Bridge.fn.bind(this, function (ci) {
                    this.ExportToXLS("export.xls");
                }), true), (this._showFindPanelContextItem = ($t = new ExpressCraft.ContextItem.$ctor2("Show Find Panel"), $t.OnItemClick = Bridge.fn.bind(this, function (sender) {
                    if (this.FindPanelVisible) {
                        this.FindPanelVisible = false;
                    } else {
                        this.FindPanelVisible = true;
                    }
                }), $t)), new ExpressCraft.ContextItem.$ctor1("Select All", Bridge.fn.bind(this, function (cm) {
                    this.SelectAllRows();
                })), new ExpressCraft.ContextItem.$ctor1("Unselect All", Bridge.fn.bind(this, function (cm) {
                    this.ClearSelection();
                }))], ExpressCraft.ContextItem));

                this.Content.oncontextmenu = Bridge.fn.bind(this, function (ev) {
                    if (ExpressCraft.Helper.NotDesktop) {
                        ev.preventDefault();
                        ev.stopPropagation();

                        this.OnDoubleClick(ev);
                    } else {
                        if (this.ContextMenu != null) {
                            this.ContextMenu.Show(ExpressCraft.Helper.GetClientMouseLocation(ev));
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                    }
                });

                this.OnColumnOnClick = Bridge.fn.bind(this, function (ev) {
                    if (this.ResizeIndex >= 0) {
                        return;
                    }

                    var gcol = this.Columns.getItem(parseInt(ev.currentTarget.getAttribute("i")));

                    for (var i = 0; i < this.ColumnCount(); i = (i + 1) | 0) {
                        if (!Bridge.referenceEquals(this.Columns.getItem(i), gcol)) {
                            this.Columns.getItem(i).SortedMode = ExpressCraft.GridViewSortMode.None;
                        }
                    }
                    switch (gcol.SortedMode) {
                        default: 
                        case ExpressCraft.GridViewSortMode.None: 
                            this.SortColumn$1(gcol, ExpressCraft.GridViewSortMode.Asc);
                            break;
                        case ExpressCraft.GridViewSortMode.Asc: 
                            this.SortColumn$1(gcol, ExpressCraft.GridViewSortMode.Desc);
                            break;
                        case ExpressCraft.GridViewSortMode.Desc: 
                            this.SortColumn$1(gcol, ExpressCraft.GridViewSortMode.None);
                            break;
                    }
                });
                this.OnColumnDragStart = function (ev) {
                    ev.dataTransfer.setData("gridviewColumnDrag", ev.currentTarget.getAttribute("i"));
                };
                this.OnColumnDragOver = function (ev) {
                    ev.preventDefault();
                };
                this.OnColumnDrop = Bridge.fn.bind(this, function (ev) {
                    if (ev.target == null || !(ev.target)) {
                        return;
                    }

                    var target = ev.target;

                    if (!Bridge.referenceEquals(target.parentElement, this.GridHeader)) {
                        return;
                    }

                    var HoverIndex = parseInt(target.getAttribute("i"));
                    var SelectedIndex = parseInt(ev.dataTransfer.getData("gridviewColumnDrag"));
                    if (SelectedIndex === HoverIndex) {
                        return;
                    }

                    if (HoverIndex < 0) {
                        return;
                    }

                    var x = ev.layerX;
                    x = (x - target.clientLeft) | 0;
                    var w = (Bridge.Int.div(target.clientWidth, 2)) | 0;

                    if (HoverIndex === ((SelectedIndex - 1) | 0) && x > w) {
                        return;
                    }
                    if (HoverIndex === ((SelectedIndex + 1) | 0) && x < w) {
                        return;
                    }

                    if (x < w) {
                        this.DragIndex = HoverIndex;
                    } else {
                        this.DragIndex = (HoverIndex + 1) | 0;
                    }

                    if (this.DragIndex < 0 || SelectedIndex < 0) {
                        return;
                    }
                    var col = this.Columns.getItem(SelectedIndex);
                    if (this.DragIndex === this.Columns.Count) {
                        this.Columns.remove(col);
                        this.Columns.add(col);
                    } else {
                        var col1 = this.Columns.getItem(this.DragIndex);
                        this.Columns.remove(col);
                        this.Columns.insert(this.Columns.indexOf(col1), col);
                    }

                    this.RenderGrid();
                });
                this.OnColumnMouseDown = Bridge.fn.bind(this, function (ev) {
                    var x = ev.layerX;
                    var target = ev.target;
                    x = (x - target.clientLeft) | 0;
                    this.ResizePageX = ev.pageX;

                    this.FocusedColumn = parseInt(ev.currentTarget.getAttribute("i"));

                    if (x >= ((target.clientWidth - 2) | 0)) {
                        this.ResizeIndex = parseInt(target.getAttribute("i"));
                        this.ResizeSpan = target;
                        ExpressCraft.Form.SetCursor("east-west-resize");

                        ev.preventDefault();
                    } else {
                        this.ResizeSpan = null;
                        this.ResizeIndex = -1;
                    }
                });
                this.OnColumnMouseMove = Bridge.fn.bind(this, function (ev) {
                    if (this.ResizeIndex === -1) {
                        var x = ev.layerX;
                        var target = ev.target;
                        x = (x - target.clientLeft) | 0;

                        if (x >= ((target.clientWidth - 2) | 0)) {
                            ExpressCraft.Form.SetCursor("east-west-resize");
                            return;
                        }
                        ExpressCraft.Form.SetCursor("default");
                    }
                });

                this.OnColumnMouseLeave = Bridge.fn.bind(this, function (ev) {
                    if (this.ResizeIndex === -1) {
                        ExpressCraft.Form.SetCursor("default");
                    }
                });

                this.OnRowDragStart = Bridge.fn.bind(this, function (ev) {
                    ev.dataTransfer.setData("gridviewRowDrag", JSON.stringify(this.DataSource.getItem(parseInt(ev.currentTarget.getAttribute("i"))).GetOfflineDataRow()));
                });

                ExpressCraft.Helper.AppendChildren$2(this.Content, [this.GridFindPanel, this.GridHeaderContainer, this.GridBodyContainer]);

                this.FilterRowOnChange = Bridge.fn.bind(this, function (te) {
                    this.Columns.getItem(parseInt(te.Content.getAttribute("i"))).FilterValue = te.Text;
                });

                this.AutoGenerateColumnsFromSource = autoGenerateColumns;
                this.ColumnAutoWidth = columnAutoWidth;
            }
        },
        methods: {
            ResolveSearchDataIndex: function () {
                return (this.VisibleRowHandles != null && this.VisibleRowHandles.Count > 0);
            },
            ShowFindPanel: function () {
                if (!this._findPanelVisible) {
                    this._showFindPanelContextItem.Caption = "Close Find Panel";
                    this._findPanelVisible = true;
                    this.GridFindPanel.style.visibility = "inherit";

                    this.SetDefaultSizes();

                    this.RenderGrid();
                }

            },
            CloseFindPanel: function () {
                if (this._findPanelVisible) {
                    this._showFindPanelContextItem.Caption = "Show Find Panel";
                    this._findPanelVisible = false;
                    this.GridFindPanel.style.visibility = "hidden";

                    this.SetDefaultSizes();

                    this.RenderGrid();
                }
            },
            SetVisibleRowHandles: function (T, Cells, asc) {
                if (this.DataSource._searchActive) {
                    if (asc) {
                        var sorted = System.Linq.Enumerable.from(Cells).select(function (x, i) {
                                return new (System.Collections.Generic.KeyValuePair$2(System.Int32,T)).$ctor1(i, x);
                            }).where(Bridge.fn.bind(this, function (p) {
                            return this.DataSource._searchResults.contains(p.key);
                        })).orderBy(function (x) {
                            return x.value;
                        }).toList(System.Collections.Generic.KeyValuePair$2(System.Int32,T));

                        this.VisibleRowHandles = System.Linq.Enumerable.from(sorted).select(function (x) {
                                return x.key;
                            }).toList(System.Int32);
                    } else {
                        var sorted1 = System.Linq.Enumerable.from(Cells).select(function (x, i) {
                                return new (System.Collections.Generic.KeyValuePair$2(System.Int32,T)).$ctor1(i, x);
                            }).where(Bridge.fn.bind(this, function (p) {
                            return this.DataSource._searchResults.contains(p.key);
                        })).orderByDescending(function (x) {
                            return x.value;
                        }).toList(System.Collections.Generic.KeyValuePair$2(System.Int32,T));

                        this.VisibleRowHandles = System.Linq.Enumerable.from(sorted1).select(function (x) {
                                return x.key;
                            }).toList(System.Int32);
                    }
                } else {
                    if (asc) {
                        var sorted2 = System.Linq.Enumerable.from(Cells).select(function (x, i) {
                                return new (System.Collections.Generic.KeyValuePair$2(System.Int32,T)).$ctor1(i, x);
                            }).orderBy(function (x) {
                            return x.value;
                        }).toList(System.Collections.Generic.KeyValuePair$2(System.Int32,T));

                        this.VisibleRowHandles = System.Linq.Enumerable.from(sorted2).select(function (x) {
                                return x.key;
                            }).toList(System.Int32);
                    } else {
                        var sorted3 = System.Linq.Enumerable.from(Cells).select(function (x, i) {
                                return new (System.Collections.Generic.KeyValuePair$2(System.Int32,T)).$ctor1(i, x);
                            }).orderByDescending(function (x) {
                            return x.value;
                        }).toList(System.Collections.Generic.KeyValuePair$2(System.Int32,T));

                        this.VisibleRowHandles = System.Linq.Enumerable.from(sorted3).select(function (x) {
                                return x.key;
                            }).toList(System.Int32);
                    }
                }

            },
            CalculateVisibleRows: function () {
                var calcVisibleRows = new (System.Collections.Generic.List$1(System.Int32)).ctor();

                for (var y = 0; y < this.RowCount(); y = (y + 1) | 0) {
                    var AddIndex = true;

                    for (var x = 0; x < this.ColumnCount(); x = (x + 1) | 0) {
                        if (!this.Columns.getItem(x).ValueMatchFilter(y)) {
                            AddIndex = false;
                            break;
                        }
                    }
                    if (AddIndex) {
                        calcVisibleRows.add(y);
                    }
                }

                this.VisibleRowHandles = calcVisibleRows;
                this.RenderGrid();
            },
            SetDefaultSizes: function () {
                if (this._columnHeadersVisible) {
                    this.GridHeader.style.visibility = "inherit";
                    this.GridHeaderContainer.style.visibility = "inherit";

                    if (this.FindPanelVisible) {
                        ExpressCraft.Helper.SetBounds$1(this.GridHeaderContainer, 0, 47, "100%", this.UnitHeight + 1);
                        ExpressCraft.Helper.SetBounds$1(this.GridBodyContainer, 0, this.UnitHeight + 2 + 47, "100%", "(100% - " + System.Single.format((this.UnitHeight + 2 + 47)) + "px)");
                    } else {
                        ExpressCraft.Helper.SetBounds$1(this.GridHeaderContainer, 0, 0, "100%", this.UnitHeight + 1);
                        ExpressCraft.Helper.SetBounds$1(this.GridBodyContainer, 0, this.UnitHeight + 2, "100%", "(100% - " + System.Single.format((this.UnitHeight + 2)) + "px)");
                    }
                } else {
                    this.GridHeader.style.visibility = "hidden";
                    this.GridHeaderContainer.style.visibility = "hidden";

                    if (this.FindPanelVisible) {
                        ExpressCraft.Helper.SetBounds$1(this.GridBodyContainer, 0, 47, "100%", "(100% - " + (47) + "px)");
                    } else {
                        ExpressCraft.Helper.SetBounds$1(this.GridBodyContainer, 0, 1, "100%", "(100% - 1px)");
                    }
                }
            },
            SortColumn: function () {
                if (this.SortSettings != null) {
                    this.SortColumn$1(this.SortSettings.Column, this.SortSettings.SortMode);
                }
            },
            SortColumn$1: function (column, sort) {
                var $t;
                if (sort === void 0) { sort = 1; }
                column.SortedMode = sort;

                if (this.SortSettings != null && !Bridge.referenceEquals(this.SortSettings.Column, column)) {
                    this.SortSettings.Column.SortedMode = ExpressCraft.GridViewSortMode.None;
                    this.VisibleRowHandles = null;
                }

                if (sort === ExpressCraft.GridViewSortMode.None) {
                    this.VisibleRowHandles = null;
                } else {
                    var sort1 = sort === ExpressCraft.GridViewSortMode.Asc;

                    switch (column.Column.DataType) {
                        default: 
                        case ExpressCraft.DataType.Object: 
                            this.SetVisibleRowHandles(System.Object, (Bridge.as(column.Column, ExpressCraft.DataColumnObject)).Cells, sort1);
                            break;
                        case ExpressCraft.DataType.Bool: 
                            this.SetVisibleRowHandles(System.Nullable$1(System.Boolean), (Bridge.as(column.Column, ExpressCraft.DataColumnBool)).Cells, sort1);
                            break;
                        case ExpressCraft.DataType.DateTime: 
                            this.SetVisibleRowHandles(System.Nullable$1(System.DateTime), (Bridge.as(column.Column, ExpressCraft.DataColumnDateTime)).Cells, sort1);
                            break;
                        case ExpressCraft.DataType.String: 
                            this.SetVisibleRowHandles(System.String, (Bridge.as(column.Column, ExpressCraft.DataColumnString)).Cells, sort1);
                            break;
                        case ExpressCraft.DataType.Byte: 
                            this.SetVisibleRowHandles(System.Nullable$1(System.Byte), (Bridge.as(column.Column, ExpressCraft.DataColumnByte)).Cells, sort1);
                            break;
                        case ExpressCraft.DataType.Short: 
                            this.SetVisibleRowHandles(System.Nullable$1(System.Int16), (Bridge.as(column.Column, ExpressCraft.DataColumnShort)).Cells, sort1);
                            break;
                        case ExpressCraft.DataType.Integer: 
                            this.SetVisibleRowHandles(System.Nullable$1(System.Int32), (Bridge.as(column.Column, ExpressCraft.DataColumnInteger)).Cells, sort1);
                            break;
                        case ExpressCraft.DataType.Long: 
                            this.SetVisibleRowHandles(System.Nullable$1(System.Int64), (Bridge.as(column.Column, ExpressCraft.DataColumnLong)).Cells, sort1);
                            break;
                        case ExpressCraft.DataType.Float: 
                            this.SetVisibleRowHandles(System.Nullable$1(System.Single), (Bridge.as(column.Column, ExpressCraft.DataColumnFloat)).Cells, sort1);
                            break;
                        case ExpressCraft.DataType.Double: 
                            this.SetVisibleRowHandles(System.Nullable$1(System.Double), (Bridge.as(column.Column, ExpressCraft.DataColumnDouble)).Cells, sort1);
                            break;
                        case ExpressCraft.DataType.Decimal: 
                            this.SetVisibleRowHandles(System.Nullable$1(System.Decimal), (Bridge.as(column.Column, ExpressCraft.DataColumnDecimal)).Cells, sort1);
                            break;
                    }
                }

                this.RenderGrid();
                this.SortSettings = ($t = new ExpressCraft.SortSetting(), $t.Column = column, $t.SortMode = sort, $t);
            },
            ClearSortColumn: function () {
                if (this.SortSettings != null) {
                    this.SortColumn$1(this.SortSettings.Column, ExpressCraft.GridViewSortMode.None);
                }
            },
            ColumnCount: function () {
                return this.Columns.Count;
            },
            RowCount: function () {
                if (this._dataSource == null) {
                    return 0;
                }
                return this._dataSource.RowCount;
            },
            ScrollToBottom: function () {
                this.GridBodyContainer.scrollTop = (this.GridBody.clientHeight - this.GridBodyContainer.clientHeight) | 0;
            },
            ScrollToTop: function () {
                this.GridBodyContainer.scrollTop = 0;
            },
            GetColumn: function (i) {
                return this.Columns.getItem(i);
            },
            GetFocusedRowCellValue$2: function (columnIndex) {
                return this.GetFocusedRowCellValue$1(this.Columns.getItem(columnIndex));
            },
            GetFocusedRowCellValue$3: function (FieldName) {
                return this.GetFocusedRowCellValue(this.GetColumnByFieldName(FieldName));
            },
            GetFocusedRowCellValue$1: function (column) {
                return this.GetRowCellValue$1(this.FocusedDataHandle, column);
            },
            GetFocusedRowCellValue: function (column) {
                return this.GetRowCellValue(this.FocusedDataHandle, column);
            },
            GetGridViewColumnByFieldName: function (FieldName) {
                for (var i = 0; i < this.ColumnCount(); i = (i + 1) | 0) {
                    if (Bridge.referenceEquals(this.Columns.getItem(i).Column.FieldName, FieldName)) {
                        return this.Columns.getItem(i);
                    }
                }
                return null;
            },
            GetGridViewColumnByFieldName$1: function (fieldName, IgnoreCase) {
                if (IgnoreCase === void 0) { IgnoreCase = false; }
                for (var i = 0; i < this.ColumnCount(); i = (i + 1) | 0) {
                    if (this.Columns.getItem(i) != null && this.Columns.getItem(i).Column != null && System.String.compare(this.Columns.getItem(i).Column.FieldName, fieldName, IgnoreCase) === 0) {
                        return this.Columns.getItem(i);
                    }
                }

                return null;
            },
            GetRowCellValue$1: function (Datahandle, column) {
                return this.GetRowCellValue(Datahandle, column.Column);
            },
            GetRowCellValue: function (Datahandle, column) {
                if (Datahandle === -1) {
                    return null;
                }
                return column.GetCellValue(Datahandle);
            },
            GetRowCellValue$3: function (Datahandle, FieldName) {
                return this.GetRowCellValue(Datahandle, this.GetColumnByFieldName(FieldName));
            },
            GetRowCellValue$2: function (Datahandle, columnIndex) {
                return this.GetRowCellValue$1(Datahandle, this.Columns.getItem(columnIndex));
            },
            GetColumnByFieldName: function (fieldName, IgnoreCase) {
                if (IgnoreCase === void 0) { IgnoreCase = false; }
                if (this.DataSource == null) {
                    return null;
                }

                for (var i = 0; i < this.DataSource.ColumnCount; i = (i + 1) | 0) {
                    if (this.DataSource.Columns.getItem(i) != null && System.String.compare(this.DataSource.Columns.getItem(i).FieldName, fieldName, IgnoreCase) === 0) {
                        return this.DataSource.Columns.getItem(i);
                    }
                }

                return null;
            },
            AddColumn$2: function (caption, fieldname, width, formatstring, alignment, forecolor, isBold) {
                if (width === void 0) { width = 100; }
                if (formatstring === void 0) { formatstring = ""; }
                if (alignment === void 0) { alignment = "left"; }
                if (forecolor === void 0) { forecolor = null; }
                if (isBold === void 0) { isBold = false; }
                var col = this.GetColumnByFieldName(fieldname);
                if (col == null) {
                    return;
                }
                this.AddColumn$1(caption, col, width, formatstring, alignment, forecolor, isBold);
            },
            AddColumn$1: function (caption, column, width, formatstring, alignment, forecolor, isBold) {
                var $t;
                if (width === void 0) { width = 100; }
                if (formatstring === void 0) { formatstring = ""; }
                if (alignment === void 0) { alignment = "left"; }
                if (forecolor === void 0) { forecolor = null; }
                if (isBold === void 0) { isBold = false; }
                this.AddColumn(($t = new ExpressCraft.GridViewColumn(this, width), $t.Caption = caption, $t.BodyApparence = new ExpressCraft.GridViewCellApparence.$ctor3(isBold, alignment, forecolor), $t.FormatString = formatstring, $t.Column = column, $t));
            },
            AddColumn: function (column) {
                if (column == null) {
                    return;
                }

                this.Columns.add(column);

                this.RenderGrid();
            },
            AddColumns: function (columns) {
                if (columns === void 0) { columns = []; }
                if (columns == null || columns.length === 0) {
                    return;
                }

                this.Columns.AddRange(columns);

                this.RenderGrid();
            },
            RemoveColumn: function (column) {
                this.Columns.remove(column);

                this.RenderGrid();
            },
            GetDataSourceRow: function (i) {
                if (this.VisibleRowHandles == null || this.VisibleRowHandles.Count === 0) {
                    if (this.DataSource._searchActive) {
                        return this.DataSource._searchResults.getItem(i);
                    }
                    return i;
                }

                return this.VisibleRowHandles.getItem(i);
            },
            GetColumnWidths: function () {
                if (this._columnAutoWidth) {
                    return this.GridBodyContainer.clientWidth;
                } else {
                    var width = 0.0;
                    for (var i = 0; i < this.Columns.Count; i = (i + 1) | 0) {
                        if (this.Columns.getItem(i).Visible) {
                            width += this.Columns.getItem(i).Width;
                        }
                    }
                    return width;
                }
            },
            ClearSelection: function () {
                this.SelectedRows = new (ExpressCraft.HardSoftList$1(System.Boolean))(false);
                this.RenderGrid();
            },
            SelectAllRows: function () {
                var length = this.RowCount();
                if (length === 0) {
                    this.SelectedRows.ClearAll();
                } else {
                    var index = System.Array.init(length, 0, System.Int32);
                    for (var i = 0; i < length; i = (i + 1) | 0) {
                        index[System.Array.index(i, index)] = this.GetDataSourceRow(i);
                    }
                    this.SelectedRows.ClearAllSetHardRange(true, index);
                }
                this.RenderGrid();
            },
            DelayedRenderGrid: function (renderNoLag) {
                if (renderNoLag === void 0) { renderNoLag = false; }
                if (renderNoLag) {
                    this.RenderGrid(false);
                } else {
                    if (ExpressCraft.Settings.GridViewScrollDelayed) {
                        if (this.PrevRenderGridScrollId !== -1) {
                            clearTimeout(this.PrevRenderGridScrollId);
                            this.PrevRenderGridScrollId = -1;
                        }
                        this.PrevRenderGridScrollId = Bridge.Int.clip32(setTimeout(Bridge.fn.bind(this, function (a) {
                            this.RenderGrid();
                        }), Math.max(1, ExpressCraft.Settings.GridViewScrollDelayMS)));
                    } else {
                        this.RenderGrid();
                    }
                }

            },
            GetFocusedRow: function () {
                if (this.FocusedDataHandle > -1) {
                    return this.DataSource.getItem(this.GetDataSourceRow(this.FocusedDataHandle));
                } else {
                    return null;
                }
            },
            GetVisibleCount: function () {
                if (this.Columns == null || this.Columns.Count === 0) {
                    return 0;
                }
                var length = this.Columns.Count;
                var length1 = this.Columns.Count;

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (!this.Columns.getItem(i).Visible) {
                        length1 = (length1 - 1) | 0;
                    }
                }
                return length1;
            },
            GetBestFitForColumn: function (column, includeColumnHeader) {
                if (includeColumnHeader === void 0) { includeColumnHeader = false; }
                if (!column.Visible) {
                    return 0;
                }

                var maxLength = 0;
                var maxStr = "";

                if (includeColumnHeader && !System.String.isNullOrWhiteSpace(column.Caption)) {
                    maxStr = column.Caption;
                    maxLength = column.Caption.length;
                }

                for (var i = 0; i < this.RowCount(); i = (i + 1) | 0) {
                    var value = column.GetDisplayValueByDataRowHandle(i);
                    if (!System.String.isNullOrWhiteSpace(value)) {
                        var v = value.length;
                        if (v > maxLength) {
                            maxLength = v;
                            maxStr = value;
                        }
                    }
                }

                if (maxLength > 0) {
                    return ((Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(maxStr, ExpressCraft.Settings.DefaultFont)) + 20) | 0);
                } else {
                    return 0;
                }
            },
            BestFitAllColumns: function (includeColumnHeader) {
                if (includeColumnHeader === void 0) { includeColumnHeader = false; }
                this._disableRender = true;
                for (var i = 0; i < this.Columns.Count; i = (i + 1) | 0) {
                    if (this.Columns.getItem(i).Visible) {
                        this.Columns.getItem(i).Width = this.GetBestFitForColumn(this.Columns.getItem(i), includeColumnHeader);
                    }
                }
                this._disableRender = false;
                this.RenderGrid();
            },
            _search: function () {
                if (this.DataSource == null || !this.FindPanelVisible) {
                    return;
                }
                this.DataSource.Search(this.SearchTextInput.Text, this);
            },
            MakeRowVisible: function (rowHandle) {
                if (rowHandle < 0) {
                    return;
                }

                var getTopMostRowIndex = this.GetRawTopRowIndex();

                if (rowHandle < getTopMostRowIndex) {
                    this.GridBodyContainer.scrollTop -= Bridge.Int.clip32((getTopMostRowIndex - rowHandle) * this.PixelsPerRow(this.RowCount()));
                } else {
                    getTopMostRowIndex = this.GetRawVisibleRowCount() + getTopMostRowIndex;
                    if (rowHandle >= getTopMostRowIndex) {
                        this.GridBodyContainer.scrollTop += Bridge.Int.clip32(((rowHandle - getTopMostRowIndex) + 1) * this.PixelsPerRow(this.RowCount()));
                    }
                }
            },
            ExportToXLS: function (fileName) {

                var builder = new System.Text.StringBuilder();

                if (this.ColumnCount() === 0 || this.RowCount() === 0) {
                    return;
                }
                var columnLength = this.ColumnCount();

                builder.append("<table><thead><tr>");

                for (var i = 0; i < columnLength; i = (i + 1) | 0) {
                    var col = this.Columns.getItem(i);
                    if (col.Visible) {
                        builder.append(System.String.format("<th>{0}</th>", [this.Columns.getItem(i).Caption]));
                    }
                }

                builder.append("</tr></thead>");

                builder.append("<tbody>");

                var rowLength = this.RowCount();

                for (var y = 0; y < rowLength; y = (y + 1) | 0) {
                    builder.append("<tr>");
                    var DataRowhandle = this.GetDataSourceRow(y);


                    for (var x = 0; x < columnLength; x = (x + 1) | 0) {
                        var col1 = this.Columns.getItem(x);
                        if (!col1.Visible) {
                            continue;
                        }

                        var displayValue = col1.GetDisplayValueByDataRowHandle(DataRowhandle);

                        builder.append(System.String.format("<td>{0}</td>", [displayValue]));
                    }

                    builder.append("</tr>");
                }


                builder.append("</tbody>");


                builder.append("</table>");

                var ua = window.navigator.userAgent;
                var msie = System.String.indexOf(ua, "MSIE ");

                if (msie > 0) {
                    var iframe = document.createElement("iframe");
                    iframe.contentDocument.open("txt/html", "replace");
                    iframe.contentDocument.write(builder.toString());
                    iframe.contentDocument.close();
                    iframe.focus();
                    iframe.contentDocument.execCommand("SaveAs", true, fileName);
                } else {
                    window.open("data:application/vnd.ms-excel," + (encodeURIComponent(builder.toString()) || ""));
                }
            },
            DataSource_OnDataSourceChanged: function (sender, e) {
                this.SortColumn();
                this.RenderGrid();
            },
            Render: function () {
                ExpressCraft.Control.prototype.Render.call(this);
                this.HasRendered = true;
                this.RenderGrid();

                if (this.Content.parentElement != null) {
                }
            },
            GetRawVisibleRowCount: function () {
                return this.GridBodyContainer.clientHeight === 0 ? 0.0 : this.GridBodyContainer.clientHeight / this.UnitHeight;
            },
            GetRawTopRowIndex: function () {
                return this.GridBodyContainer.scrollTop === 0 ? 0.0 : this.GridBodyContainer.scrollTop / this.PixelsPerRow(this.RowCount());
            },
            ValidateGridWidth: function () {
                var width = this.GetColumnWidths();
                this.GridBody.style.width = ExpressCraft.Helper.ToPx(Bridge.box((width), System.Single, System.Single.format, System.Single.getHashCode));
                this.GridHeader.style.width = ExpressCraft.Helper.ToPx(Bridge.box(((width) + 24), System.Single, System.Single.format, System.Single.getHashCode));
                if (this.RightOfTable == null) {
                    this.RightOfTable = ExpressCraft.Control.Div();
                    ExpressCraft.Helper.AppendChild$2(this.GridBody, this.RightOfTable);
                }
                if (this.RightOfTableHeader == null) {
                    this.RightOfTableHeader = ExpressCraft.Control.Div();
                    ExpressCraft.Helper.AppendChild$2(this.GridHeader, this.RightOfTableHeader);
                }
                ExpressCraft.Helper.SetBounds$1(this.RightOfTable, width - 1, 0, 1, 1);
                ExpressCraft.Helper.SetBounds$1(this.RightOfTableHeader, width - 1, 0, 1, 1);
            },
            PixelsPerRow: function (rowCount) {
                if (rowCount > ExpressCraft.Settings.MaximumPixelScrollingRows) {
                    return 3.0;
                } else {
                    return this.UnitHeight;
                }
            },
            ValidateGridHeight: function () {
                var i = this.RowCount();
                var ppr = this.PixelsPerRow(i);
                var height = ppr * (i);

                if (i > ExpressCraft.Settings.MaximumPixelScrollingRows && this.GridBodyContainer.clientHeight > 0) {
                    height += (this.GridBodyContainer.clientHeight / this.UnitHeight) * ppr;
                }

                this.GridBody.style.height = ExpressCraft.Helper.ToPx(Bridge.box(height, System.Single, System.Single.format, System.Single.getHashCode));
                if (this.BottonOfTable == null) {
                    this.BottonOfTable = ExpressCraft.Control.Div();
                    ExpressCraft.Helper.AppendChild$2(this.GridBody, this.BottonOfTable);
                }
                ExpressCraft.Helper.SetBounds$1(this.BottonOfTable, 0, height, 1, 1);
            },
            ValidateGridSize: function () {
                this.ValidateGridHeight();
                this.ValidateGridWidth();
            },
            ClearHeader: function () {
                ExpressCraft.Helper.Empty(this.GridHeader);
                ExpressCraft.Helper.AppendChild$2(this.GridHeader, this.RightOfTableHeader);
            },
            ClearColumns: function () {
                this.Columns = new (System.Collections.Generic.List$1(ExpressCraft.GridViewColumn)).ctor();
            },
            ClearView: function () {
                this._disableRender = true;
                this.Columns = new (System.Collections.Generic.List$1(ExpressCraft.GridViewColumn)).ctor();
                this.VisibleRowHandles = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.SelectedRows = new (ExpressCraft.HardSoftList$1(System.Boolean))(false);
                this._dataSource = null;
                this._disableRender = false;
                this.RenderGrid();
            },
            ClearBody: function () {
                ExpressCraft.Helper.Empty(this.GridBody);
                ExpressCraft.Helper.AppendChildren$2(this.GridBody, [this.RightOfTable, this.BottonOfTable]);
            },
            ClearGrid: function () {
                this.ClearHeader();
                this.ClearBody();
            },
            GetSelectedRowHandles: function () {
                var listOfInt = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                var rowCount = this.RowCount();
                for (var i = 0; i < rowCount; i = (i + 1) | 0) {
                    var index = this.GetDataSourceRow(i);
                    if (this.SelectedRows.GetValue(index, false)) {
                        listOfInt.add(i);
                    }
                }
                return listOfInt.ToArray();
            },
            GetSelectedDataRowHandles: function () {
                var listOfInt = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                var rowCount = this.RowCount();
                for (var i = 0; i < rowCount; i = (i + 1) | 0) {
                    var index = this.GetDataSourceRow(i);
                    if (this.SelectedRows.GetValue(index, false)) {
                        listOfInt.add(index);
                    }
                }
                return listOfInt.ToArray();
            },
            SetupColumn: function (se, index, gcol) {
                se.setAttribute("i", System.Convert.toString(Bridge.box(index, System.Int32)));
                se.setAttribute("draggable", "true");
                se.onclick = this.OnColumnOnClick;
                se.ondragstart = this.OnColumnDragStart;
                se.ondragover = this.OnColumnDragOver;
                se.ondrop = this.OnColumnDrop;
                se.onmousedown = this.OnColumnMouseDown;
                se.onmousemove = this.OnColumnMouseMove;
                se.onmouseleave = this.OnColumnMouseLeave;
            },
            ProcessBlur: function () {
                if (this.PrevScroll !== this.GridBodyContainer.scrollTop) {
                    this.GridBody.classList.add("blur");
                    if (this.lastId !== -1) {
                        clearTimeout(this.lastId);
                        this.lastId = -1;
                    }

                    this.lastId = Bridge.Int.clip32(setTimeout(Bridge.fn.bind(this, function (a) {
                        this.GridBody.classList.remove("blur");
                    }), 100));
                }
                this.PrevScroll = Bridge.Int.clip32(this.GridBodyContainer.scrollTop);
            },
            RenderGrid: function (clear) {
                if (clear === void 0) { clear = true; }
                if (this._disableRender) {
                    return;
                }

                if (clear) {
                    this.CacheRow = new (System.Collections.Generic.Dictionary$2(System.Int32,HTMLElement))();
                }

                if (this.RenderTime > -1) {
                    clearTimeout(this.RenderTime);
                    this.RenderTime = Bridge.Int.clip32(setTimeout(this.renderGridInternal, 1));
                } else {
                    this.renderGridInternal();
                }
            },
            GetPages: function (pageLayout, pageSize) {
                var Pages = new (System.Collections.Generic.List$1(ExpressCraft.Page)).ctor();

                var activePage = null;

                var yp = 0;
                var xp = 0;

                var width;
                var height;

                if (pageSize === ExpressCraft.PageSize.A4) {
                    if (pageLayout === ExpressCraft.Layout.Landscape) {
                        width = 29.7;
                        height = 21.0;
                    } else {
                        height = 29.7;
                        width = 21.0;
                    }
                } else {
                    if (pageLayout === ExpressCraft.Layout.Landscape) {
                        width = 42.0;
                        height = 29.7;
                    } else {
                        height = 42.0;
                        width = 29.7;
                    }
                }

                activePage = new ExpressCraft.Page();
                Pages.add(activePage);

                var sep = 0;

                if (this.ColumnAutoWidth) {
                    sep = (width / this.GetVisibleCount());
                }

                var rowHeight = 28;

                for (var x = 0; x < this.ColumnCount(); x = (x + 1) | 0) {
                    if (this.Columns.getItem(x).Visible) {
                        var colWidth = this.ColumnAutoWidth ? sep : this.Columns.getItem(x).Width;
                        yp = 0;

                        var colHeader = new ExpressCraft.Control.$ctor1();
                        colHeader.Bounds = new ExpressCraft.Vector4.$ctor1(xp, yp, colWidth, rowHeight);
                        colHeader.Content.textContent = this.Columns.getItem(x).Caption;
                        colHeader.Style.border = "1px solid grey";
                        colHeader.Style.backgroundColor = "lightgrey";
                        colHeader.Style.color = "white";

                        ExpressCraft.Helper.AppendChild(activePage, colHeader);

                        yp += rowHeight;

                        for (var y = 0; y < this.RowCount(); y = (y + 1) | 0) {
                            var rowCell = new ExpressCraft.Control.$ctor1();
                            rowCell.Bounds = new ExpressCraft.Vector4.$ctor1(xp, yp, colWidth, rowHeight);
                            rowCell.Content.textContent = this.Columns.getItem(x).GetDisplayValueByDataRowHandle(this.GetDataSourceRow(y));
                            rowCell.Style.border = "1px solid lightgrey";
                            ExpressCraft.Helper.AppendChild(activePage, rowCell);

                            yp += rowHeight;
                        }
                        xp += colWidth;
                    }
                }

                return Pages;
            }
        }
    });

    Bridge.define("ExpressCraft.GridViewCellDisplayCheckBox", {
        inherits: [ExpressCraft.GridViewCellDisplay],
        statics: {
            fields: {
                resource_checked: null
            },
            ctors: {
                init: function () {
                    this.resource_checked = "checked";
                }
            }
        },
        methods: {
            OnCreate: function (gridView, dataRowIndex, columnIndex) {
                var value = gridView.GetRowCellValue$2(dataRowIndex, columnIndex);

                var cell = ExpressCraft.Control.Div$1("cell");
                var input = ExpressCraft.Control.Input("", "checkbox");
                ExpressCraft.Helper.SetBoundsFull$1(input);
                ExpressCraft.Helper.SetChecked$1(input, value);
                input.style.margin = "0";
                ExpressCraft.Helper.AppendChild$2(cell, input);

                return cell;
            }
        }
    });

    Bridge.define("ExpressCraft.GridViewCellDisplayImage", {
        inherits: [ExpressCraft.GridViewCellDisplay],
        fields: {
            UseBase64Resource: false
        },
        methods: {
            OnCreate: function (gridView, dataRowIndex, columnIndex) {
                var src = ExpressCraft.Helper.HtmlUrlEscape((System.String.concat(gridView.GetRowCellValue$2(dataRowIndex, columnIndex), "")));
                var imgDiv = ExpressCraft.Control.Div$1("cell");

                ExpressCraft.Helper.SetImage$1(imgDiv, src, !this.UseBase64Resource);

                return imgDiv;
            }
        }
    });

    Bridge.define("ExpressCraft.GroupPanel", {
        inherits: [ExpressCraft.Control],
        fields: {
            legend: null
        },
        props: {
            Caption: {
                get: function () {
                    return this.legend.textContent;
                },
                set: function (value) {
                    this.legend.textContent = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.ctor.call(this, document.createElement("fieldset"));
                ExpressCraft.Helper.AppendChild$2(this.Content, (this.legend = document.createElement("legend")));
                this.Content.className = "control inputcontrol popup";
                this.legend.style.marginLeft = "7px";
            }
        }
    });

    Bridge.define("ExpressCraft.ImageEdit", {
        inherits: [ExpressCraft.Control],
        fields: {
            _noImageDataText: null,
            _isURL: false,
            _image: null
        },
        props: {
            isUrl: {
                get: function () {
                    return this._isURL;
                },
                set: function (value) {
                    if (this._isURL !== value) {
                        this._isURL = value;
                        this.RefreshImage();
                    }
                }
            },
            Image: {
                get: function () {
                    return this._image;
                },
                set: function (value) {
                    if (Bridge.referenceEquals(this._image, value)) {
                        return;
                    }
                    this._image = value;
                    this.RefreshImage();
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "inputcontrol");
                this._noImageDataText = new ExpressCraft.Control.$ctor3("form-heading-title");
                this._noImageDataText.Content.innerHTML = "No image data";
                this._noImageDataText.Content.style.color = "black";
                this._noImageDataText.Content.style.visibility = "inherit";

                ExpressCraft.Helper.AppendChild$1(this.Content, this._noImageDataText);
            }
        },
        methods: {
            RefreshImage: function () {
                if (!System.String.isNullOrWhiteSpace(this._image)) {
                    this._noImageDataText.Content.style.visibility = "hidden";
                } else {
                    this._image = "";
                    this._noImageDataText.Content.style.visibility = "inherit";
                }
                ExpressCraft.Helper.SetImage(this, this._image, this._isURL);
            }
        }
    });

    Bridge.define("ExpressCraft.LayoutRowControl", {
        inherits: [ExpressCraft.LayoutRow],
        fields: {
            Height: 0,
            Control: null
        },
        ctors: {
            ctor: function (height, control) {
                this.$initialize();
                ExpressCraft.LayoutRow.ctor.call(this);
                this.Height = height;
                this.Label = "";
                this.Control = control;
            }
        }
    });

    Bridge.define("ExpressCraft.LayoutRowGap", {
        inherits: [ExpressCraft.LayoutRow],
        fields: {
            Height: 0
        },
        ctors: {
            ctor: function (height, label) {
                if (label === void 0) { label = ""; }

                this.$initialize();
                ExpressCraft.LayoutRow.ctor.call(this);
                this.Height = height;
                this.Label = label;
            }
        }
    });

    Bridge.define("ExpressCraft.Page", {
        inherits: [ExpressCraft.Control],
        fields: {
            OnClick: null
        },
        props: {
            PageSize: {
                get: function () {
                    var value = this.GetAttribute("size");
                    if (Bridge.referenceEquals(value, "A5")) {
                        return ExpressCraft.PageSize.A5;
                    }
                    return ExpressCraft.PageSize.A4;

                },
                set: function (value) {
                    this.SetAttribute("size", System.Enum.format(ExpressCraft.PageSize, value, "G"));
                }
            },
            Layout: {
                get: function () {
                    var value = this.GetAttribute("layout");
                    if (Bridge.referenceEquals(value, "Landscape")) {
                        return ExpressCraft.Layout.Landscape;
                    }
                    return ExpressCraft.Layout.Portrait;
                },
                set: function (value) {
                    this.SetAttribute("layout", System.Enum.format(ExpressCraft.Layout, value, "G"));
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.ctor.call(this, document.createElement("page"));
                this.ClassList.remove("control");

                this.PageSize = ExpressCraft.PageSize.A4;
            }
        }
    });

    Bridge.define("ExpressCraft.PrinterControl", {
        inherits: [ExpressCraft.Control],
        fields: {
            Pages: null,
            _focusedPage: null,
            _scale: 0,
            wrapper: null,
            OnFocusedPageChanged: null,
            PageLayout: 0
        },
        props: {
            Scale: {
                get: function () {
                    return this._scale;
                },
                set: function (value) {
                    if (value < 0.1) {
                        value = 0.1;
                    }
                    if (value > 4) {
                        value = 4;
                    }
                    this._scale = value;

                    this.wrapper.style.transform = "scale(" + System.Single.format(this._scale) + ")";
                }
            },
            FocusedPage: {
                get: function () {
                    return this._focusedPage;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(value, this._focusedPage)) {
                        if (this._focusedPage != null) {
                            this._focusedPage.ClassList.remove("page-focused");
                        }

                        this._focusedPage = value;

                        if (!Bridge.staticEquals(this.OnFocusedPageChanged, null)) {
                            this.OnFocusedPageChanged(this._focusedPage);
                        }

                        if (this._focusedPage != null) {
                            this._focusedPage.ClassList.add("page-focused");
                        }
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this.Pages = new (System.Collections.Generic.List$1(ExpressCraft.Page)).ctor();
                this._scale = 1;
                this.PageLayout = ExpressCraft.Layout.Portrait;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "print-body");
                this.Style.overflow = "auto";

                this.wrapper = document.createElement("div");
                this.wrapper.style.transformOrigin = "50% 0 0";
                this.wrapper.style.position = "relative";

                ExpressCraft.Helper.AppendChild$2(this.Content, this.wrapper);
            }
        },
        methods: {
            AddPages: function (pages) {
                var $t;
                $t = Bridge.getEnumerator(pages);
                try {
                    while ($t.moveNext()) {
                        var page = { v : $t.Current };
                        if (page.v != null) {
                            this.Pages.add(page.v);
                            ExpressCraft.Helper.AppendChild$1(this.wrapper, page.v);

                            this.FocusedPage = page.v;

                            page.v.Content.onclick = (function ($me, page) {
                                return Bridge.fn.bind($me, function (ev) {
                                    this.FocusedPage = page.v;
                                    if (!Bridge.staticEquals(page.v.OnClick, null)) {
                                        page.v.OnClick();
                                    }
                                });
                            })(this, page);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /**
             * Page is a HTMLElement - AppendChild and Add the page to the list
             *
             * @instance
             * @public
             * @this ExpressCraft.PrinterControl
             * @memberof ExpressCraft.PrinterControl
             * @param   {ExpressCraft.Control}    element
             * @return  {void}
             */
            AddElementFocusedPage: function (element) {
                this.AddElementFocusedPage$1(element.Content);
            },
            /**
             * Page is a HTMLElement - AppendChild and Add the page to the list
             *
             * @instance
             * @public
             * @this ExpressCraft.PrinterControl
             * @memberof ExpressCraft.PrinterControl
             * @param   {Retyped..HTMLElement}    element
             * @return  {void}
             */
            AddElementFocusedPage$1: function (element) {
                if (this.FocusedPage == null) {
                    throw new System.Exception("There is not focused page!");
                }

                ExpressCraft.Helper.AppendChild$2(this.FocusedPage.Content, element);
            },
            CreateNewPage: function (size) {
                var $t;
                if (size === void 0) { size = 0; }
                var page = ($t = new ExpressCraft.Page(), $t.PageSize = size, $t.Layout = this.PageLayout, $t);

                this.Pages.add(page);
                ExpressCraft.Helper.AppendChild$1(this.wrapper, page);

                this.FocusedPage = page;

                page.Content.onclick = Bridge.fn.bind(this, function (ev) {
                    this.FocusedPage = page;
                    if (!Bridge.staticEquals(page.OnClick, null)) {
                        page.OnClick();
                    }
                });

                return page;
            },
            Print: function () {
                var printingFrame = window.open("", "");
                var element = document.getElementById("expresscraft");

                var headerInfo = "";
                if (element != null) {
                    var extra;

                    if (this.PageLayout === ExpressCraft.Layout.Portrait) {
                        extra = "<style type='text/css' media='print'> @page { size: portait; margin:0; } page { margin:0 !important; box-shadow: none !important; overflow: hidden; } .print-body { margin:0 !important; overflow: visible !important; } page:first-child {  margin-top: 0 !important; } </style>";
                    } else {
                        extra = "<style type='text/css' media='print'> @page { size: landscape; margin:0; } page { margin:0 !important; box-shadow: none !important; overflow: hidden; } .print-body { margin:0 !important; overflow: visible !important; } page:first-child {  margin-top: 0 !important; } </style>";
                    }

                    headerInfo = "<head>" + (element.outerHTML || "") + "\r\n" + (extra || "") + "</head>";

                }
                if (this.FocusedPage != null) {
                    this.FocusedPage.ClassList.remove("page-focused");
                }
                printingFrame.document.write("<html><title>Printing...</title>" + (headerInfo || "") + "<body>" + (this.Content.outerHTML || "") + "</body></html>");
                printingFrame.document.close();
                printingFrame.focus();

                printingFrame.addEventListener("load", function (a) {
                    printingFrame.print();
                    printingFrame.close();
                });



                if (this.FocusedPage != null) {
                    this.FocusedPage.ClassList.add("page-focused");
                }
            }
        }
    });

    Bridge.define("ExpressCraft.ProgressControl", {
        inherits: [ExpressCraft.Control],
        fields: {
            position: 0,
            internalProgressControl: null,
            maximum: 0,
            Step: 0,
            DisableUpdate: false
        },
        props: {
            Maximum: {
                get: function () {
                    return this.maximum;
                },
                set: function (value) {
                    if (value < 1) {
                        value = 1;
                    }
                    if (value < this.position) {
                        this.position = value;
                    }
                    this.maximum = value;
                    if (!this.DisableUpdate) {
                        this.Update();
                    }
                }
            },
            Position: {
                get: function () {
                    return this.position;
                },
                set: function (value) {
                    if (value < 0) {
                        value = 0;
                    } else {
                        if (value > this.maximum) {
                            value = this.maximum;
                        }
                    }
                    this.position = value;
                    if (!this.DisableUpdate) {
                        this.Update();
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this.Step = 1;
                this.DisableUpdate = false;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "progressbar");
                this.internalProgressControl = ExpressCraft.Control.Div$1("progressbarbody");
            }
        },
        methods: {
            NextStep: function () {
                this.Position = (this.Position + this.Step) | 0;
            },
            Render: function () {
                ExpressCraft.Control.prototype.Render.call(this);

                ExpressCraft.Helper.AppendChild$2(this.Content, this.internalProgressControl);

                this.Update();
            },
            Update: function () {
                if (this.DisableUpdate || this.internalProgressControl == null) {
                    return;
                }
                if (this.maximum === 0 || this.position === 0) {
                    this.internalProgressControl.style.width = "0%";
                } else {
                    var source = ((this.position / this.maximum) * 100.00) + '%';
                    this.internalProgressControl.style.width = "calc(" + (source || "") + " - 2px)";
                }
            }
        }
    });

    Bridge.define("ExpressCraft.RadioEdit", {
        inherits: [ExpressCraft.Control],
        statics: {
            fields: {
                RadioId: System.Int64(0),
                rng: null
            },
            ctors: {
                init: function () {
                    this.rng = new System.Random.ctor();
                }
            }
        },
        fields: {
            RadioElements: null,
            defaultName: null,
            OnCheckChanged: null
        },
        props: {
            SelectedRadioElement: {
                get: function () {
                    var si = this.SelectedIndex;
                    if (si === -1 || si >= this.RadioElements.Count) {
                        return null;
                    }
                    return this.RadioElements.getItem(si);
                }
            },
            SelectedIndex: {
                get: function () {
                    var $t;
                    if (this.RadioElements == null || this.RadioElements.Count === 0) {
                        return -1;
                    }
                    var i = 0;
                    $t = Bridge.getEnumerator(this.RadioElements);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item.Checked) {
                                return i;
                            }
                            i = (i + 1) | 0;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return -1;
                },
                set: function (value) {
                    var $t;
                    var i = 0;
                    $t = Bridge.getEnumerator(this.RadioElements);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (i === value) {
                                item.Checked = true;
                            } else {
                                item.Checked = false;
                            }
                            i = (i + 1) | 0;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this.RadioElements = new (System.Collections.Generic.List$1(ExpressCraft.RadioElement)).ctor();
                this.defaultName = "";
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "inputcontrol popup");
                ExpressCraft.RadioEdit.RadioId = ExpressCraft.RadioEdit.RadioId.inc();
                if (ExpressCraft.RadioEdit.RadioId.gt(System.Int64(20000))) {
                    ExpressCraft.RadioEdit.RadioId = System.Int64(0);
                }

                this.defaultName = "__radio_group_internal_" + (Bridge.toString(ExpressCraft.RadioEdit.RadioId) || "") + "_rng_" + ExpressCraft.RadioEdit.rng.Next$2(1, 1000);
            }
        },
        methods: {
            AddItems: function (items) {
                var $t, $t1;
                if (items === void 0) { items = []; }
                if (items == null || items.length === 0) {
                    return;
                }
                $t = Bridge.getEnumerator(items);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        this.AddElement(($t1 = new ExpressCraft.RadioElement(), $t1.Caption = item, $t1));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            AddElement: function (element) {
                if (element != null && element.Content != null) {
                    element.Content.setAttribute("name", this.defaultName);
                    ExpressCraft.Helper.AppendChild(this, element);
                    this.RadioElements.add(element);
                    element.ProcessRender();

                    element.OnTextChanged = Bridge.fn.bind(this, function (sender) {
                        if (!Bridge.staticEquals(this.OnCheckChanged, null)) {
                            this.OnCheckChanged(element);
                        }
                    });

                    if (this.RadioElements.Count === 1) {
                        element.Style.marginLeft = "0";
                    }
                }
            },
            AddElements: function (elements) {
                var $t;
                if (elements === void 0) { elements = []; }
                if (elements != null) {
                    $t = Bridge.getEnumerator(elements);
                    try {
                        while ($t.moveNext()) {
                            var element = $t.Current;
                            if (element != null && element.Content != null) {
                                element.Content.setAttribute("name", this.defaultName);

                                ExpressCraft.Helper.AppendChild(this, element);
                                this.RadioElements.add(element);

                                element.ProcessRender();
                                if (this.RadioElements.Count === 1) {
                                    element.Style.marginLeft = "0";
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            }
        }
    });

    Bridge.define("ExpressCraft.RibbonItem", {
        inherits: [ExpressCraft.Control],
        fields: {
            BeginGroup: false,
            IsSmallItem: false,
            captionDiv: null,
            _caption: null,
            enabled: false
        },
        props: {
            Caption: {
                get: function () {
                    return this._caption;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._caption, value)) {
                        this._caption = value;
                        this.ProcessCaption();
                    }
                }
            },
            Enabled: {
                get: function () {
                    return this.enabled;
                },
                set: function (value) {
                    this.enabled = value;
                    this.setEnabled(value);
                }
            }
        },
        ctors: {
            init: function () {
                this.BeginGroup = false;
                this.IsSmallItem = false;
                this._caption = "";
                this.enabled = true;
            },
            ctor: function (className) {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, className);

            }
        },
        methods: {
            ProcessCaption: function () {
                if (this.captionDiv != null) {
                    this.captionDiv.remove();
                    this.captionDiv = null;
                }
                if (!System.String.isNullOrWhiteSpace(this.Caption)) {
                    this.captionDiv = ExpressCraft.Control.Div$1(this.IsSmallItem ? "ribbonbuttonsmallcaption" : "ribbonbuttoncaption");

                    this.captionDiv.innerHTML = this.Caption;

                    ExpressCraft.Helper.AppendChild$2(this.Content, this.captionDiv);
                }
            },
            OnSetEnabled: function (value) {
                if (value) {
                    if (this.captionDiv != null) {
                        this.captionDiv.classList.remove("disabled");
                    }
                } else {
                    if (this.captionDiv != null) {
                        this.captionDiv.classList.add("disabled");
                    }
                }
            },
            setEnabled: function (value) {
                this.ChangeState(value);
                this.OnSetEnabled(value);
            }
        }
    });

    Bridge.define("ExpressCraft.RibbonControl", {
        inherits: [ExpressCraft.Control,ExpressCraft.IPages],
        fields: {
            RibbonPages: null,
            IconURL: null,
            ApplicationIcon: null,
            OnSelectedPageChange: null,
            selectedindex: 0
        },
        props: {
            Type: {
                get: function () {
                    return this.Content.classList.contains("ribboncontrol-compact") ? ExpressCraft.RibbonControl.RibbonType.Compact : ExpressCraft.RibbonControl.RibbonType.Full;
                },
                set: function (value) {
                    if (value === ExpressCraft.RibbonControl.RibbonType.Full) {
                        this.Content.classList.remove("ribboncontrol-compact");
                    } else if (!this.Content.classList.contains("ribboncontrol-compact")) {
                        this.Content.classList.add("ribboncontrol-compact");
                    }
                }
            },
            SelectedIndex: {
                get: function () {
                    return this.selectedindex;
                },
                set: function (value) {
                    if (value < 0) {
                        value = 0;
                    }
                    if (this.selectedindex >= this.RibbonPages.Count) {
                        this.selectedindex = (this.RibbonPages.Count - 1) | 0;
                    }

                    if (this.selectedindex !== value) {
                        this.selectedindex = value;
                        if (!Bridge.staticEquals(this.OnSelectedPageChange, null)) {
                            this.OnSelectedPageChange(this.selectedindex, this.RibbonPages.getItem(this.selectedindex));
                        }
                    }
                    this.SetSelectedIndex(value);
                }
            }
        },
        alias: ["AddRibbonPages", "ExpressCraft$IPages$AddRibbonPages"],
        ctors: {
            init: function () {
                this.RibbonPages = new (System.Collections.Generic.List$1(ExpressCraft.RibbonPage)).ctor();
                this.IconURL = "fav.ico";
                this.selectedindex = -1;
            },
            ctor: function (pages) {
                if (pages === void 0) { pages = []; }

                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "ribboncontrol ribboncontrol-compact");
                this.Content.oncontextmenu = function (ev) {
                    ev.stopPropagation();
                    ev.preventDefault();
                };

                this.AddRibbonPages(pages);
            }
        },
        methods: {
            AddRibbonPages: function (pages) {
                var $t;
                if (pages === void 0) { pages = []; }
                if (pages != null) {
                    $t = Bridge.getEnumerator(pages);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.RibbonPages.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            MenuClick: function () {
                if (ExpressCraft.Helper.NotDesktop) {
                }
            },
            SetSelectedIndex: function (index) {
                if (this.RibbonPages != null && this.RibbonPages.Count > 0) {
                    for (var i = 0; i < this.RibbonPages.Count; i = (i + 1) | 0) {
                        if (this.RibbonPages.getItem(i).RibbonHeader != null) {
                            this.RibbonPages.getItem(i).RibbonHeader.classList.remove("ribbonpageheader-hidden");
                            this.RibbonPages.getItem(i).RibbonHeader.classList.remove("ribbonpageheader-active");

                            if (i === index) {
                                this.RibbonPages.getItem(i).RibbonHeader.classList.add("ribbonpageheader-active");
                                this.RibbonPages.getItem(i).Content.style.visibility = "inherit";
                            } else {
                                this.RibbonPages.getItem(i).RibbonHeader.classList.add("ribbonpageheader-hidden");
                                this.RibbonPages.getItem(i).Content.style.visibility = "hidden";
                            }
                        }
                    }
                }
            },
            Render: function () {
                this.HasRendered = true;
                if (this.Type === ExpressCraft.RibbonControl.RibbonType.Full) {
                    if (this.ApplicationIcon != null) {
                        ExpressCraft.Helper.Delete$1(this.ApplicationIcon);
                    }
                    this.ApplicationIcon = ExpressCraft.Control.Div$1("application-icon");
                    var appIconImage = ExpressCraft.Control.Div$1("fav-icon");
                    appIconImage.style.background = ExpressCraft.Control.GetImageStringURI(this.IconURL);
                    appIconImage.style.backgroundSize = "100% 100%";

                    ExpressCraft.Helper.AppendChild$2(this.ApplicationIcon, appIconImage);

                    ExpressCraft.Helper.AppendChild$2(this.Content, this.ApplicationIcon);
                }

                if (this.RibbonPages != null && this.RibbonPages.Count > 0) {
                    var width = 58;
                    for (var i = 0; i < this.RibbonPages.Count; i = (i + 1) | 0) {
                        if (this.Content.contains(ExpressCraft.Control.op_Implicit(this.RibbonPages.getItem(i)))) {
                            ExpressCraft.Helper.Delete$1(this.RibbonPages.getItem(i).Content);
                            ExpressCraft.Helper.Delete$1(this.RibbonPages.getItem(i).RibbonHeader);
                        }
                        this.RibbonPages.getItem(i).Render();

                        if (this.Type === ExpressCraft.RibbonControl.RibbonType.Compact) {
                            if (!System.String.contains(this.RibbonPages.getItem(i).Content.className,"ribbonpage-compact")) {
                                this.RibbonPages.getItem(i).Content.classList.add("ribbonpage-compact");
                            }
                        } else {
                            if (System.String.contains(this.RibbonPages.getItem(i).Content.className,"ribbonpage-compact")) {
                                this.RibbonPages.getItem(i).Content.classList.remove("ribbonpage-compact");
                            }
                        }

                        var index = { v : i };

                        if (i === this.selectedindex) {
                            this.RibbonPages.getItem(i).RibbonHeader = ExpressCraft.Control.Div$1("ribbonpageheader ribbonpageheader-active" + ((this.Type === ExpressCraft.RibbonControl.RibbonType.Full ? "" : " ribbonpageheader-compact") || ""));
                            this.RibbonPages.getItem(i).Content.style.visibility = "visible";
                        } else {
                            this.RibbonPages.getItem(i).RibbonHeader = ExpressCraft.Control.Div$1("ribbonpageheader ribbonpageheader-hidden" + ((this.Type === ExpressCraft.RibbonControl.RibbonType.Full ? "" : " ribbonpageheader-compact") || ""));
                            this.RibbonPages.getItem(i).Content.style.visibility = "hidden";
                        }

                        this.RibbonPages.getItem(i).RibbonHeader.onmousedown = (function ($me, index) {
                            return Bridge.fn.bind($me, function (ev) {
                                this.SelectedIndex = index.v;
                            });
                        })(this, index);
                        this.RibbonPages.getItem(i).RibbonHeader.ontouchstart = (function ($me, index) {
                            return Bridge.fn.bind($me, function (ev) {
                                this.SelectedIndex = index.v;
                            });
                        })(this, index);

                        this.RibbonPages.getItem(i).RibbonHeader.innerHTML = this.RibbonPages.getItem(i).Caption;

                        var inwidth = 24;

                        if (!System.String.isNullOrEmpty(this.RibbonPages.getItem(i).Caption)) {
                            inwidth = (inwidth + Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(this.RibbonPages.getItem(i).Caption, ExpressCraft.Settings.DefaultFont))) | 0;
                        }

                        this.RibbonPages.getItem(i).RibbonHeader.style.left = width + "px";
                        this.RibbonPages.getItem(i).RibbonHeader.style.width = inwidth + "px";

                        ExpressCraft.Helper.AppendChild$2(this.Content, this.RibbonPages.getItem(i).RibbonHeader);
                        ExpressCraft.Helper.AppendChild$1(this.Content, this.RibbonPages.getItem(i));

                        width = (width + inwidth) | 0;
                    }
                }
                this.SelectedIndex = this.selectedindex;
            }
        }
    });

    Bridge.define("ExpressCraft.RibbonGroup", {
        inherits: [ExpressCraft.Control],
        fields: {
            Caption: null,
            Items: null,
            enabled: false,
            captionDiv: null,
            riList: null
        },
        props: {
            Enabled: {
                get: function () {
                    return this.enabled;
                },
                set: function (value) {
                    this.enabled = value;
                    this.setEnabled(value);
                }
            }
        },
        ctors: {
            init: function () {
                this.enabled = true;
            },
            ctor: function (_caption) {
                if (_caption === void 0) { _caption = ""; }

                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "ribbongroup");
                this.Caption = _caption;
                this.Items = new (System.Collections.Generic.List$1(ExpressCraft.RibbonItem)).ctor();
            },
            $ctor1: function (_caption, buttons) {
                if (buttons === void 0) { buttons = []; }
                var $t;

                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "ribbongroup");
                this.Caption = _caption;
                this.Items = new (System.Collections.Generic.List$1(ExpressCraft.RibbonItem)).ctor();
                if (buttons != null) {
                    $t = Bridge.getEnumerator(buttons);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.Items.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }

            }
        },
        methods: {
            setEnabled: function (value) {
                if (this.Items.Count > 0) {
                    for (var i = 0; i < this.Items.Count; i = (i + 1) | 0) {
                        if (!value) {
                            this.Items.getItem(i).setEnabled(value);
                        } else {
                            this.Items.getItem(i).setEnabled(this.Items.getItem(i).Enabled);
                        }
                    }
                }
                this.ChangeState(value);
                if (value) {
                    if (this.captionDiv != null) {
                        this.captionDiv.classList.remove("disabled");
                    }
                } else {
                    if (this.captionDiv != null) {
                        this.captionDiv.classList.add("disabled");
                    }
                }
            },
            CreateVerticalLine: function (height) {
                var htmlDiv = ExpressCraft.Control.Div$1("ribbonseperator");
                if (height !== 58) {
                    htmlDiv.style.height = height + "px";
                }

                return htmlDiv;
            },
            GenerateRList: function () {
                var ri = null;

                if (this.riList == null) {
                    this.riList = new (System.Collections.Generic.List$1(ExpressCraft.RibbonGroup.RenderInfo)).ctor();
                    for (var i = 0; i < this.Items.Count; i = (i + 1) | 0) {
                        if (ri == null) {
                            ri = new ExpressCraft.RibbonGroup.RenderInfo();
                            ri.FirstItem = this.Items.getItem(i);
                            ri.IsSmall = ri.FirstItem.IsSmallItem;
                        } else {
                            if (ri.IsSmall !== this.Items.getItem(i).IsSmallItem || this.Items.getItem(i).BeginGroup || !this.Items.getItem(i).IsSmallItem || (ri.FirstItem != null && ri.SecondItem != null && ri.ThirdItem != null)) {
                                this.riList.add(ri);

                                ri = new ExpressCraft.RibbonGroup.RenderInfo();
                                ri.FirstItem = this.Items.getItem(i);
                                ri.IsSmall = this.Items.getItem(i).IsSmallItem;
                                ri.BeginGroup = this.Items.getItem(i).BeginGroup;
                            } else {
                                if (ri.SecondItem == null) {
                                    ri.SecondItem = this.Items.getItem(i);
                                } else {
                                    ri.ThirdItem = this.Items.getItem(i);
                                }
                            }
                        }
                    }

                    if (ri != null) {
                        this.riList.add(ri);
                        ri = null;
                    }
                }
            },
            GetExtraWidth: function (item) {
                if (Bridge.is(item, ExpressCraft.RibbonEditItem)) {
                    return ((((item.EditWidth + 6) | 0) - 20) | 0);
                }
                return 0;
            },
            Render: function () {
                this.HasRendered = true;

                this.GenerateRList();

                ExpressCraft.Helper.Empty(this.Content);

                var width = 0;

                for (var i = 0; i < this.riList.Count; i = (i + 1) | 0) {
                    var ri = this.riList.getItem(i);

                    if (ri.BeginGroup) {
                        width = (width + 3) | 0;
                        var vlbg = this.CreateVerticalLine(58);
                        vlbg.style.left = width + "px";

                        ExpressCraft.Helper.AppendChild$2(this.Content, vlbg);
                    }

                    width = (width + 3) | 0;

                    if (ri.IsSmall) {
                        var MaxWidth;

                        if (ri.ThirdItem == null) {
                            if (ri.SecondItem == null) {
                                MaxWidth = Math.max(((((((Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(ri.FirstItem.Caption, ExpressCraft.Settings.DefaultFont)) + 28) | 0) + 6) | 0) + this.GetExtraWidth(ri.FirstItem)) | 0), 64);



                                ri.FirstItem.Render();

                                ri.FirstItem.Content.style.left = width + "px";
                                ri.FirstItem.Content.style.width = MaxWidth + "px";

                                ri.FirstItem.Content.style.top = "26px";

                                ExpressCraft.Helper.AppendChild$1(this.Content, ri.FirstItem);
                            } else {
                                MaxWidth = Math.max(((((Math.max(((Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(ri.FirstItem.Caption, ExpressCraft.Settings.DefaultFont)) + this.GetExtraWidth(ri.FirstItem)) | 0), ((Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(ri.SecondItem.Caption, ExpressCraft.Settings.DefaultFont)) + this.GetExtraWidth(ri.SecondItem)) | 0)) + 28) | 0) + 6) | 0), 64);

                                ri.FirstItem.Render();
                                ri.SecondItem.Render();

                                ri.FirstItem.Content.style.left = width + "px";
                                ri.SecondItem.Content.style.left = width + "px";

                                ri.FirstItem.Content.style.top = (21) + "px";

                                ri.FirstItem.Content.style.width = MaxWidth + "px";
                                ri.SecondItem.Content.style.width = MaxWidth + "px";

                                ri.FirstItem.Content.style.top = "11px";
                                ri.SecondItem.Content.style.top = "41px";

                                ExpressCraft.Helper.AppendChild$1(this.Content, ri.FirstItem);
                                ExpressCraft.Helper.AppendChild$1(this.Content, ri.SecondItem);
                            }
                        } else {
                            MaxWidth = Math.max(((((Math.max(Math.max(((Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(ri.FirstItem.Caption, ExpressCraft.Settings.DefaultFont)) + this.GetExtraWidth(ri.FirstItem)) | 0), ((Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(ri.SecondItem.Caption, ExpressCraft.Settings.DefaultFont)) + this.GetExtraWidth(ri.SecondItem)) | 0)), ((Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(ri.ThirdItem.Caption, ExpressCraft.Settings.DefaultFont)) + this.GetExtraWidth(ri.ThirdItem)) | 0)) + 28) | 0) + 6) | 0), 64);

                            ri.FirstItem.Render();
                            ri.SecondItem.Render();
                            ri.ThirdItem.Render();

                            ri.FirstItem.Content.style.left = width + "px";
                            ri.SecondItem.Content.style.left = width + "px";
                            ri.ThirdItem.Content.style.left = width + "px";

                            ri.FirstItem.Content.style.width = MaxWidth + "px";
                            ri.SecondItem.Content.style.width = MaxWidth + "px";
                            ri.ThirdItem.Content.style.width = MaxWidth + "px";

                            ri.FirstItem.Content.style.top = "3px";
                            ri.SecondItem.Content.style.top = "26px";
                            ri.ThirdItem.Content.style.top = "49px";

                            ExpressCraft.Helper.AppendChild$1(this.Content, ri.FirstItem);
                            ExpressCraft.Helper.AppendChild$1(this.Content, ri.SecondItem);
                            ExpressCraft.Helper.AppendChild$1(this.Content, ri.ThirdItem);
                        }

                        width = (width + MaxWidth) | 0;
                    } else {
                        ri.FirstItem.Render();

                        ri.FirstItem.Content.style.left = width + "px";
                        var inwidth = 0;
                        if (System.String.contains(ri.FirstItem.Caption," ")) {
                            var strings = System.String.split(ri.FirstItem.Caption, [32].map(function (i) {{ return String.fromCharCode(i); }}));
                            var builder = new System.Text.StringBuilder();

                            var length = (Bridge.Int.div(ri.FirstItem.Caption.length, 2)) | 0;

                            for (var j = 0; j < strings.length; j = (j + 1) | 0) {
                                if (builder.getLength() > length) {
                                    inwidth = (Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(builder.toString(), ExpressCraft.Settings.DefaultFont)) + 20) | 0;
                                    break;
                                }
                                if (builder.getLength() > 0) {
                                    builder.append(" " + (strings[System.Array.index(j, strings)] || ""));
                                } else {
                                    builder.append(strings[System.Array.index(j, strings)]);
                                }
                            }
                            if (inwidth === 0) {
                                inwidth = (Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(builder.toString(), ExpressCraft.Settings.DefaultFont)) + 20) | 0;
                            }
                        } else {
                            inwidth = (Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(ri.FirstItem.Caption, ExpressCraft.Settings.DefaultFont)) + 20) | 0;
                        }

                        if (inwidth < 44) {
                            inwidth = 44;
                        }

                        inwidth = (inwidth + (this.GetExtraWidth(ri.FirstItem))) | 0;

                        ri.FirstItem.Content.style.width = inwidth + "px";

                        width = (width + inwidth) | 0;

                        ExpressCraft.Helper.AppendChild$1(this.Content, ri.FirstItem);
                    }
                }

                var minWidth = (Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(this.Caption, ExpressCraft.Settings.DefaultFont)) + 20) | 0;

                if (width < minWidth) {
                    width = minWidth;
                }

                width = (width + 3) | 0;

                var vl = this.CreateVerticalLine(80);
                vl.style.left = ((width - 1) | 0) + "px";

                ExpressCraft.Helper.AppendChild$2(this.Content, vl);

                this.Content.style.width = width + "px";

                if (!System.String.isNullOrWhiteSpace(this.Caption)) {
                    this.captionDiv = ExpressCraft.Control.Div$1("ribbongroupcaption");

                    this.captionDiv.innerHTML = this.Caption;
                    ExpressCraft.Helper.AppendChild$2(this.Content, this.captionDiv);
                }

                this.setEnabled(this.enabled);
            }
        }
    });

    Bridge.define("ExpressCraft.RibbonPage", {
        inherits: [ExpressCraft.Control],
        fields: {
            Caption: null,
            RibbonGroups: null,
            RibbonHeader: null
        },
        ctors: {
            init: function () {
                this.RibbonGroups = new (System.Collections.Generic.List$1(ExpressCraft.RibbonGroup)).ctor();
            },
            ctor: function (_caption, pages) {
                if (_caption === void 0) { _caption = ""; }
                if (pages === void 0) { pages = []; }

                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "ribbonpage");
                this.Caption = _caption;
                this.AddRibbonGroups(pages);
            }
        },
        methods: {
            AddRibbonGroups: function (pages) {
                var $t;
                if (pages === void 0) { pages = []; }
                if (pages != null) {
                    $t = Bridge.getEnumerator(pages);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.RibbonGroups.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            Render: function () {
                this.HasRendered = true;
                if (this.RibbonGroups == null || this.RibbonGroups.Count === 0) {
                    return;
                }
                var width = 0;
                for (var i = 0; i < this.RibbonGroups.Count; i = (i + 1) | 0) {
                    this.RibbonGroups.getItem(i).Render();
                    this.RibbonGroups.getItem(i).Content.style.left = width + "px";
                    width = (width + (parseInt(this.RibbonGroups.getItem(i).Content.style.width))) | 0;
                    ExpressCraft.Helper.AppendChild$1(this.Content, this.RibbonGroups.getItem(i));
                }
            }
        }
    });

    Bridge.define("ExpressCraft.SolidBrush", {
        inherits: [ExpressCraft.Brush],
        fields: {
            Color: null
        },
        ctors: {
            init: function () {
                this.Color = new ExpressCraft.Color();
            },
            ctor: function (color) {
                this.$initialize();
                ExpressCraft.Brush.ctor.call(this);
                this.Color = color.$clone();
            }
        }
    });

    Bridge.define("ExpressCraft.SplitControlContainer", {
        inherits: [ExpressCraft.Control],
        fields: {
            Panel1: null,
            Panel2: null,
            Splitter: null,
            _prevClientRect: null,
            IsMouseDown: false,
            _mouseDownVector: null,
            _currentMouseDownVector: null,
            _startingSplitterPos: 0,
            _splitterPosition: 0,
            fixedSplitterPostion: 0,
            SplitterResizable: false,
            horizontal: false
        },
        props: {
            FixedSplitterPostion: {
                get: function () {
                    return this.fixedSplitterPostion;
                },
                set: function (value) {
                    this.fixedSplitterPostion = value;
                    this.RenderControls();
                }
            },
            SplitterPosition: {
                get: function () {
                    return this._splitterPosition;
                },
                set: function (value) {
                    if (value < 0) {
                        value = 0;
                    }
                    this._splitterPosition = value;
                    this.RenderControls();
                }
            },
            Horizontal: {
                get: function () {
                    return this.horizontal;
                },
                set: function (value) {
                    if (value !== this.horizontal) {
                        this.RenderControls();
                        this.horizontal = value;
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this._mouseDownVector = new ExpressCraft.Vector2();
                this._currentMouseDownVector = new ExpressCraft.Vector2();
                this.IsMouseDown = false;
                this._splitterPosition = -1;
                this.fixedSplitterPostion = ExpressCraft.FixedSplitterPosition.Panel1;
                this.SplitterResizable = true;
            },
            ctor: function () {
                var $t;
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "splitcontrol");
                this.Panel1 = ($t = new ExpressCraft.Control.$ctor1(), $t.Location = new ExpressCraft.Vector2.$ctor1(0, 0), $t);
                this.Panel2 = new ExpressCraft.Control.$ctor1();
                this.Panel1.Style.overflow = "auto";
                this.Panel2.Style.overflow = "auto";

                this.Splitter = new ExpressCraft.Control.$ctor3("primary");
                this.Splitter.Style.cursor = "move";

                this.Splitter.Content.onmousedown = Bridge.fn.bind(this, function (ev) {
                    if (!this.SplitterResizable) {
                        return;
                    }
                    this.IsMouseDown = true;
                    this._mouseDownVector = ExpressCraft.Helper.GetClientMouseLocation(ev);
                    var maxSize = this.GetMaxSplitterSize();
                    this._startingSplitterPos = this._splitterPosition > maxSize ? maxSize : this._splitterPosition;
                    ev.stopImmediatePropagation();
                });

                this.OnResize = Bridge.fn.bind(this, function (ev) {
                    if (this.LinkedForm != null) {
                        if (!this.LinkedForm.IsVisible()) {
                            return;
                        }
                    }
                    var clientRec = this.Content.getBoundingClientRect();

                    if (this._prevClientRect == null) {
                        this._prevClientRect = clientRec;
                    }

                    if (this.fixedSplitterPostion === ExpressCraft.FixedSplitterPosition.None) {
                        var V1 = 0;
                        var V2 = 0;
                        var dirty = false;

                        if (this.Horizontal) {
                            if (clientRec.height !== this._prevClientRect.height) {
                                V1 = clientRec.height;
                                V2 = this._prevClientRect.height;
                                dirty = true;
                            }
                        } else {
                            if (clientRec.width !== this._prevClientRect.width) {
                                V1 = clientRec.width;
                                V2 = this._prevClientRect.width;
                                dirty = true;
                            }
                        }
                        if (dirty) {
                            this.SplitterPosition = V1 === 0 || V2 === 0 ? 0 : Bridge.Int.clip32(this.SplitterPosition * (V1 / V2));
                        }
                    }

                    this._prevClientRect = clientRec;

                    this.RenderControls();

                    this.ResizeChildren();
                });

                this.Content.onmousemove = Bridge.fn.bind(this, function (ev) {
                    if (this.IsMouseDown) {
                        this._currentMouseDownVector = ExpressCraft.Helper.GetClientMouseLocation(ev);
                        var x;
                        var m = this.horizontal ? (((this._mouseDownVector.Yi - this._currentMouseDownVector.Yi) | 0)) : (((this._mouseDownVector.Xi - this._currentMouseDownVector.Xi) | 0));

                        var y = this.GetMaxSplitterSize();
                        if (((x = this.fixedSplitterPostion === ExpressCraft.FixedSplitterPosition.Panel2 ? ((this._startingSplitterPos + m) | 0) : ((this._startingSplitterPos - m) | 0))) > y) {
                            x = y;
                        }
                        this.SplitterPosition = x;
                        this._currentMouseDownVector = this._mouseDownVector.$clone();

                        this.ResizeChildren();
                    }
                });

                this.Content.onmouseup = Bridge.fn.bind(this, function (ev) {
                    this.IsMouseDown = false;
                    this.RenderControls();
                });

                ExpressCraft.Helper.AppendChildren(this, [this.Panel1, this.Splitter, this.Panel2]);
            }
        },
        methods: {
            Render: function () {
                ExpressCraft.Control.prototype.Render.call(this);

                this.RenderControls();
            },
            ResizeChildren: function () {
                if (this.LinkedForm != null && this.Content != null) {
                    this.LinkedForm.ResizeChildren(this.Content);
                }
            },
            GetMaxSplitterSize: function () {
                var left = 12;
                if (this.FixedSplitterPostion === ExpressCraft.FixedSplitterPosition.Panel2) {
                    left = 0;
                }
                var maxSize = (Bridge.Int.clip32((this.Horizontal ? this.Content.getBoundingClientRect().height : this.Content.getBoundingClientRect().width)) - left) | 0;
                if (maxSize < 0) {
                    maxSize = 0;
                }
                return maxSize;
            },
            RenderControls: function () {
                var sp = this.SplitterPosition;
                var maxSize = this.GetMaxSplitterSize();

                if (this._prevClientRect != null) {
                    if (sp > maxSize) {
                        sp = maxSize;
                    }
                }

                if (this.Horizontal) {
                    ExpressCraft.Helper.ExchangeClass(this.Panel1, "splitvertical", "splithorizontal");
                    ExpressCraft.Helper.ExchangeClass(this.Panel2, "splitvertical", "splithorizontal");
                    ExpressCraft.Helper.ExchangeClass(this.Splitter, "splittervertical", "splitterhorizontal");

                    this.Panel1.Width = "";
                    this.Splitter.Width = "";
                    this.Panel2.Width = "";

                    if (this.fixedSplitterPostion !== ExpressCraft.FixedSplitterPosition.Panel2) {
                        this.Splitter.Location = new ExpressCraft.Vector2.$ctor1(0, sp);

                        this.Panel1.Height = sp;
                        this.Panel2.Location = new ExpressCraft.Vector2.$ctor1(0, ((sp + 12) | 0));
                        this.Panel2.Height = "(100% - " + (((sp + 12) | 0)) + "px)";
                        ;
                    } else {
                        this.Splitter.Location = new ExpressCraft.Vector2.$ctor1(0, "(100% - " + (sp) + "px)");

                        this.Panel1.Height = "(100% - " + sp + "px)";

                        this.Panel2.Height = (sp - 12) | 0;
                        this.Panel2.Location = new ExpressCraft.Vector2.$ctor1(0, "(100% - " + (((sp - 12) | 0)) + "px)");
                    }
                } else {
                    ExpressCraft.Helper.ExchangeClass(this.Panel1, "splithorizontal", "splitvertical");
                    ExpressCraft.Helper.ExchangeClass(this.Panel2, "splithorizontal", "splitvertical");
                    ExpressCraft.Helper.ExchangeClass(this.Splitter, "splitterhorizontal", "splittervertical");

                    this.Panel1.Height = "";
                    this.Splitter.Height = "";
                    this.Panel2.Height = "";

                    if (this.fixedSplitterPostion !== ExpressCraft.FixedSplitterPosition.Panel2) {
                        this.Splitter.Location = new ExpressCraft.Vector2.$ctor1(sp, 0);

                        this.Panel1.Width = sp;

                        this.Panel2.Width = "(100% - " + (((sp + 12) | 0)) + "px)";
                        this.Panel2.Location = new ExpressCraft.Vector2.$ctor1(((sp + 12) | 0), 0);
                    } else {
                        this.Splitter.Location = new ExpressCraft.Vector2.$ctor1("(100% - " + (((sp + 12) | 0)) + "px)", 0);

                        this.Panel1.Width = "(100% - " + (((sp + 12) | 0)) + "px)";

                        this.Panel2.Width = sp;
                        this.Panel2.Location = new ExpressCraft.Vector2.$ctor1("(100% - " + (sp) + "px)", 0);
                    }
                }
            }
        }
    });

    Bridge.define("ExpressCraft.SplitHideControlContainer", {
        inherits: [ExpressCraft.Control],
        fields: {
            Body: null,
            Slider: null,
            Panel: null,
            span: null,
            _slideWidth: 0,
            _sliderLocation: 0,
            _sliderVisible: false,
            refreshId: 0
        },
        props: {
            SlideWidth: {
                get: function () {
                    return this._slideWidth;
                },
                set: function (value) {
                    if (this._slideWidth !== value) {
                        this._slideWidth = value;
                        this.RenderControl();
                        this.ResizeChildren();
                    }
                }
            },
            SliderLocation: {
                get: function () {
                    return this._sliderLocation;
                },
                set: function (value) {
                    if (this._sliderLocation !== value) {
                        this._sliderLocation = value;
                        this.RenderControl();
                        this.ResizeChildren();
                    }
                }
            },
            SliderVisible: {
                get: function () {
                    return this._sliderVisible;
                },
                set: function (value) {
                    if (this._sliderVisible !== value) {
                        this._sliderVisible = value;
                        this.RenderControl();
                        this.ResizeChildren();
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this._sliderLocation = ExpressCraft.SliderLocation.Left;
                this._sliderVisible = false;
                this.refreshId = -1;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor1.call(this);
                this.Body = new ExpressCraft.Control.$ctor1();
                this.Slider = new ExpressCraft.Control.$ctor3("primary");
                this.Panel = new ExpressCraft.Control.$ctor1();
                this.Panel.Style.overflow = "hidden";
                this.Body.Style.overflow = "hidden";
                this.span = ExpressCraft.Control.Span$1("form-heading-title");
                this.span.textContent = ">";

                this.span.style.fontWeight = "bold";
                this.span.style.color = "white";

                ExpressCraft.Helper.AppendChild$2(this.Slider.Content, this.span);

                this.Slider.Style.transition = "width 0.1s, left 0.1s";

                this.Panel.Style.transition = "width 0.1s";

                this.Slider.Style.filter = "brightness(90%)";

                if (ExpressCraft.Helper.NotDesktop) {
                    this.span.style.fontStyle = "36px";
                    this.Slider.Width = 65;
                } else {
                    this.span.style.fontStyle = "26px";
                    this.Slider.Width = 30;
                }

                this.Slider.Height = "100%";

                this.Slider.Content.onclick = Bridge.fn.bind(this, function (ev) {
                    this.SliderVisible = !this.SliderVisible;
                });
                this._slideWidth = 250;
                ExpressCraft.Helper.AppendChildren$1(this.Content, [this.Panel, this.Slider, this.Body]);

                this.RenderControl();
            }
        },
        methods: {
            ResizeChildren: function () {
                if (this.LinkedForm != null && this.Content != null) {

                    if (this.refreshId !== -1) {
                        clearTimeout(this.refreshId);
                    }
                    this.refreshId = Bridge.Int.clip32(setTimeout(Bridge.fn.bind(this, function (ab) {
                        this.LinkedForm.ResizeChildren(this.Content);
                        this.refreshId = -1;
                    }), 100));
                }
            },
            RenderControl: function () {
                var width;
                if (ExpressCraft.Helper.NotDesktop) {
                    width = 65;
                } else {
                    width = 30;
                }

                if (this.SliderLocation === ExpressCraft.SliderLocation.Left) {
                    if (this.SliderVisible) {
                        this.span.textContent = "<";
                        this.Panel.Width = this.SlideWidth;
                        this.Slider.Left = this.SlideWidth;
                        this.Body.Location = new ExpressCraft.Vector2.$ctor1(((width + this.SlideWidth) | 0), 0);
                        this.Body.Size = new ExpressCraft.Vector2.$ctor1("(100% - " + (((width + this.SlideWidth) | 0)) + "px)", "100%");
                    } else {
                        this.span.textContent = ">";
                        this.Slider.Left = 0;
                        this.Panel.Width = 0;
                        this.Body.Location = new ExpressCraft.Vector2.$ctor1(width, 0);
                        this.Body.Size = new ExpressCraft.Vector2.$ctor1("(100% - " + (width) + "px)", "100%");
                    }

                    this.Panel.Location = new ExpressCraft.Vector2.$ctor1(0, 0);
                    this.Panel.Height = "100%";
                } else {
                    if (this.SliderVisible) {
                        this.span.textContent = ">";
                        this.Panel.Width = this.SlideWidth;
                        this.Panel.Location = new ExpressCraft.Vector2.$ctor1("(100% - " + (this.SlideWidth) + "px)", 0);
                        this.Slider.Left = "(100% - " + (((width + this.SlideWidth) | 0)) + "px)";
                        this.Body.Size = new ExpressCraft.Vector2.$ctor1("(100% - " + (((width + this.SlideWidth) | 0)) + "px)", "100%");
                    } else {
                        this.span.textContent = "<";
                        this.Slider.Left = "(100% - " + (width) + "px)";
                        this.Panel.Width = 0;
                        this.Body.Size = new ExpressCraft.Vector2.$ctor1("(100% - " + (width) + "px)", "100%");
                    }

                    this.Body.Location = new ExpressCraft.Vector2.$ctor1(0, 0);
                    this.Panel.Height = "100%";
                }
            }
        }
    });

    Bridge.define("ExpressCraft.StackItem", {
        inherits: [ExpressCraft.Control],
        fields: {
            UniqueId: null,
            OnFocused: null,
            OnStateChanged: null,
            ReferenceObject: null,
            _state: null
        },
        props: {
            State: {
                get: function () {
                    return this._state;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._state, value)) {
                        this._state = value;
                        if (!Bridge.staticEquals(this.OnStateChanged, null)) {
                            this.OnStateChanged(this, this._state);
                        }
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this.UniqueId = "";
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "stack-item");
                this.ClassList.remove("control");
                this.Style.width = "100%";
                this.Style.height = "auto";

            }
        }
    });

    Bridge.define("ExpressCraft.StackList", {
        inherits: [ExpressCraft.Control],
        fields: {
            StackItems: null,
            searchInput: null,
            _showFindScreen: false,
            searchText: null,
            clearMark: false,
            contentBody: null,
            _focusedStackItem: null
        },
        props: {
            FocusedStackItem: {
                get: function () {
                    return this._focusedStackItem;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._focusedStackItem, value)) {
                        if (this._focusedStackItem != null) {
                            this._focusedStackItem.ClassList.remove("stack-item-active");
                        }
                        this._focusedStackItem = value;
                        if (this._focusedStackItem != null) {
                            this._focusedStackItem.ClassList.add("stack-item-active");
                            if (!Bridge.staticEquals(this._focusedStackItem.OnFocused, null)) {
                                this._focusedStackItem.OnFocused(this._focusedStackItem);
                            }
                        }
                    }

                }
            },
            ShowFindScreen: {
                get: function () {
                    return this._showFindScreen;
                },
                set: function (value) {
                    if (this._showFindScreen !== value) {
                        this.clearMark = false;
                        this._showFindScreen = value;
                        if (this._showFindScreen) {
                            this.searchInput = new ExpressCraft.TextInput.ctor();
                            this.searchInput.Location = new ExpressCraft.Vector2.$ctor1(6, 6);
                            this.searchInput.Size = new ExpressCraft.Vector2.$ctor1("(100% - 12px)", 38);
                            this.searchInput.OnTextChanged = Bridge.fn.bind(this, function (sender) {
                                this.clearMark = true;
                                this.searchText = this.searchInput.Text;
                                this.RebuildData();
                            });

                            this.Content.appendChild(ExpressCraft.Control.op_Implicit(this.searchInput));

                            this.contentBody.Top = 50;
                            this.contentBody.Size = new ExpressCraft.Vector2.$ctor1("100%", "(100% - 50px)");
                        } else {
                            if (!System.String.isNullOrWhiteSpace(this.searchText)) {
                                this.clearMark = true;
                            } else {
                                this.clearMark = false;
                            }
                            this.searchText = "";
                            this.Content.removeChild(this.searchInput.Content);
                            this.searchInput = null;

                            this.contentBody.Top = 0;
                            this.contentBody.Size = new ExpressCraft.Vector2.$ctor1("100%", "100%");
                        }
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this.StackItems = new (System.Collections.Generic.List$1(ExpressCraft.StackItem)).ctor();
                this.clearMark = false;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor1.call(this);
                this.contentBody = new ExpressCraft.Control.$ctor1();
                this.contentBody.Size = new ExpressCraft.Vector2.$ctor1("100%", "100%");
                this.contentBody.Style.overflowY = "auto";
                this.Content.appendChild(ExpressCraft.Control.op_Implicit(this.contentBody));
            }
        },
        methods: {
            AddMark: function (item) {
                if (item.childElementCount === 0) {
                    if (System.String.contains(((item.textContent || "") + "").toLowerCase(),((this.searchText || "") + "").toLowerCase())) {
                        var x = item.textContent;
                        ExpressCraft.Helper.Empty(item);

                        var builder = new System.Text.StringBuilder();
                        var builder2 = new System.Text.StringBuilder();

                        for (var i = 0; i < x.length; i = (i + 1) | 0) {
                            builder2.append(String.fromCharCode(x.charCodeAt(i)));
                            builder.append(String.fromCharCode(x.charCodeAt(i)));
                            if (Bridge.referenceEquals(builder2.toString().toLowerCase(), ((this.searchText || "") + "").toLowerCase())) {
                                var word = builder2.toString();
                                builder.setLength((builder.getLength() - this.searchText.length) | 0);
                                builder.append("<mark>" + (ExpressCraft.Helper.HtmlEscape$1(word) || "") + "</mark>");
                                builder2 = new System.Text.StringBuilder();
                            } else if (System.String.endsWith(builder2.toString().toLowerCase(), ((this.searchText || "") + "").toLowerCase())) {
                                var word1 = builder2.toString().substr(((builder2.toString().length - this.searchText.length) | 0));
                                builder.setLength((builder.getLength() - this.searchText.length) | 0);
                                builder.append("<mark>" + (ExpressCraft.Helper.HtmlEscape$1(word1) || "") + "</mark>");
                                builder2 = new System.Text.StringBuilder();
                            }
                            if (builder2.getLength() > this.searchText.length) {
                                builder2 = new System.Text.StringBuilder(builder2.toString().substr(1));
                            }
                        }

                        item.innerHTML = builder.toString();
                    }
                } else {
                    for (var i1 = 0; i1 < item.childElementCount; i1 = (i1 + 1) >>> 0) {
                        var child = item.children[i1];
                        this.AddMark(child);
                    }
                }

            },
            RemoveMark: function (item) {
                if (System.String.contains(item.innerHTML,"<mark>") && System.String.contains(item.innerHTML,"</mark>")) {
                    item.innerHTML = System.String.replaceAll(System.String.replaceAll(item.innerHTML, "<mark>", ""), "</mark>", "");
                } else {
                    for (var i = 0; i < item.childElementCount; i = (i + 1) >>> 0) {
                        var child = item.children[i];
                        this.AddMark(child);
                    }
                }
            },
            RebuildData: function () {
                var $t;
                ExpressCraft.Helper.Empty(this.contentBody.Content);

                $t = Bridge.getEnumerator(this.StackItems);
                try {
                    while ($t.moveNext()) {
                        var item = { v : $t.Current };
                        if (Bridge.staticEquals(item.v.Content.onclick, null)) {
                            item.v.Content.onclick = (function ($me, item) {
                                return Bridge.fn.bind($me, function (ev) {
                                    this.FocusedStackItem = item.v;
                                });
                            })(this, item);
                        }

                        if (this.clearMark) {
                            this.RemoveMark(item.v.Content);
                        }

                        if (!System.String.isNullOrWhiteSpace(this.searchText)) {
                            if (System.String.contains(((item.v.Content.textContent || "") + "").toLowerCase(),((this.searchText || "") + "").toLowerCase())) {
                                this.AddMark(item.v.Content);
                                this.contentBody.Content.appendChild(ExpressCraft.Control.op_Implicit(item.v));
                                this.contentBody.Content.appendChild(document.createElement("div"));
                            }
                        } else {
                            this.contentBody.Content.appendChild(ExpressCraft.Control.op_Implicit(item.v));
                            this.contentBody.Content.appendChild(document.createElement("div"));
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.clearMark = false;
            },
            Render: function () {
                if (!this.HasRendered) {
                    this.RebuildData();
                    this.HasRendered = true;
                }

                ExpressCraft.Control.prototype.Render.call(this);
            }
        }
    });

    Bridge.define("ExpressCraft.StyleBrush", {
        inherits: [ExpressCraft.Brush],
        fields: {
            Style: null
        },
        ctors: {
            ctor: function (style) {
                this.$initialize();
                ExpressCraft.Brush.ctor.call(this);
                this.Style = style;
            }
        }
    });

    Bridge.define("ExpressCraft.TabControl", {
        inherits: [ExpressCraft.Control],
        fields: {
            TabPages: null,
            tabHeaders: null,
            tabHeaderContainer: null,
            showClosedButton: false,
            OnSelectedTabIndexChanged: null,
            selectedindex: 0
        },
        props: {
            ShowClosedButton: {
                get: function () {
                    return this.showClosedButton;
                },
                set: function (value) {
                    if (value !== this.showClosedButton) {
                        this.showClosedButton = value;
                        this.ResizeTabHeaders();
                    }
                }
            },
            SelectedIndex: {
                get: function () {
                    return this.selectedindex;
                },
                set: function (value) {
                    if (value < 0) {
                        value = 0;
                    }
                    if (this.selectedindex !== value) {
                        this.selectedindex = value;
                        !Bridge.staticEquals(this.OnSelectedTabIndexChanged, null) ? this.OnSelectedTabIndexChanged(value) : null;
                    }

                    if (this.TabPages != null && this.TabPages.Count > 0) {
                        for (var i = 0; i < this.TabPages.Count; i = (i + 1) | 0) {
                            var page = { v : this.TabPages.getItem(i) };
                            this.TabControlActiveStyleChange(i, page);
                            this.TabPages.setItem(i, page.v);
                        }
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this.TabPages = new (System.Collections.Generic.List$1(ExpressCraft.TabControlPage)).ctor();
                this.selectedindex = 0;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "tabcontrol");
                this.Content.oncontextmenu = function (ev) {
                    ev.stopPropagation();
                    ev.preventDefault();
                };
            }
        },
        methods: {
            AddPages: function (Pages) {
                if (Pages === void 0) { Pages = []; }
                this.TabPages.AddRange(Pages);
                if (this.HasRendered) {
                    this.ResizeTabHeaders();
                }
            },
            TabControlActiveStyleChange: function (i, page) {
                var Isselected = i === this.selectedindex;

                var state = Isselected ? "active" : "hidden";
                if (page.v.TabPageHeader != null) {
                    page.v.TabPageHeader.classList.remove("tabcontrolpageheader-hidden");
                    page.v.TabPageHeader.classList.remove("tabcontrolpageheader-active");

                    page.v.TabPageHeader.classList.add("tabcontrolpageheader-" + (state || ""));
                } else {
                    page.v.TabPageHeader = ExpressCraft.Control.Div$1("tabcontrolpageheader tabcontrolpageheader-" + (state || ""));
                }
                if (ExpressCraft.Helper.NotDesktop) {
                    if (Isselected) {
                        page.v.TabPageHeader.style.lineHeight = "44px";
                    } else {
                        page.v.TabPageHeader.style.lineHeight = "46px";
                    }
                    page.v.TabPageHeader.style.height = "45px";
                }

                page.v.TabPageHeader.setAttribute("i", Bridge.toString(i));
                if (this.showClosedButton) {
                    if (page.v.TabPageHeaderClose == null) {
                        page.v.TabPageHeaderClose = ExpressCraft.Control.Div$1("tabcontrolpageheader-closebutton");
                        page.v.TabPageHeaderClose.onclick = Bridge.fn.bind(this, function (ev) {
                            var index = parseInt(ev.currentTarget.parentElement.getAttribute("i"));
                            var cpage = this.TabPages.getItem(index);
                            if (cpage.Content != null) {
                                ExpressCraft.Helper.Empty(cpage.Content);
                                ExpressCraft.Helper.Delete$1(cpage.Content);
                            }
                            if (cpage.TabPageHeader != null) {
                                ExpressCraft.Helper.Empty(cpage.TabPageHeader);
                                ExpressCraft.Helper.Delete$1(cpage.TabPageHeader);
                            }
                            this.TabPages.remove(cpage);
                            if (index > ((this.TabPages.Count - 1) | 0)) {
                                index = (this.TabPages.Count - 1) | 0;
                            }

                            ev.stopPropagation();

                            this.SelectedIndex = index;

                            this.ResizeTabHeaders();
                        });
                        page.v.TabPageHeader.appendChild(page.v.TabPageHeaderClose);
                    }
                } else {
                    if (page.v.TabPageHeaderClose != null) {
                        page.v.TabPageHeader.removeChild(page.v.TabPageHeaderClose);
                    }
                }

                page.v.Content.style.visibility = Isselected ? "inherit" : "collapse";
            },
            ResizeTabHeaders: function () {
                var $t;
                if (this.tabHeaders == null) {
                    this.tabHeaders = ($t = new ExpressCraft.Control.$ctor3("tabheader-container"), $t.Location = new ExpressCraft.Vector2.$ctor1(0, 0), $t);
                    if (ExpressCraft.Helper.NotDesktop) {
                        this.tabHeaders.Height = 47;
                        this.tabHeaderContainer = ($t = new ExpressCraft.Control.$ctor1(), $t.Location = new ExpressCraft.Vector2.$ctor1(0, 0), $t);
                        this.tabHeaderContainer.Width = "100%";
                        this.tabHeaderContainer.Height = 50;
                        ExpressCraft.Helper.AppendChild(this.tabHeaderContainer, this.tabHeaders);
                        this.tabHeaderContainer.Style.backgroundColor = "transparent";
                        this.tabHeaderContainer.Style.overflowX = "auto";

                        this.tabHeaders.Style.minWidth = "100%";

                        this.Content.appendChild(ExpressCraft.Control.op_Implicit(this.tabHeaderContainer));
                    } else {
                        this.tabHeaders.Height = 23;
                        this.Content.appendChild(ExpressCraft.Control.op_Implicit(this.tabHeaders));
                        this.tabHeaders.Width = "100%";
                    }
                }
                if (this.TabPages != null && this.TabPages.Count > 0) {
                    var width = 2;

                    for (var i = 0; i < this.TabPages.Count; i = (i + 1) | 0) {
                        var page = { v : this.TabPages.getItem(i) };
                        if (page.v == null || page.v.Hidden) {
                            continue;
                        }
                        page.v.Render();



                        if (page.v.TabPageHeader == null) {
                            this.TabControlActiveStyleChange(i, page);
                            page.v.TabPageHeader.onmousedown = Bridge.fn.bind(this, function (ev) {
                                this.SelectedIndex = parseInt(ev.currentTarget.getAttribute("i"));
                            });
                            page.v.TabPageHeader.ontouchstart = Bridge.fn.bind(this, function (ev) {
                                this.SelectedIndex = parseInt(ev.currentTarget.getAttribute("i"));
                            });
                            this.tabHeaders.Content.appendChild(page.v.TabPageHeader);
                            this.Content.appendChild(page.v.Content);
                        }
                        page.v.TabPageHeader.setAttribute("i", Bridge.toString(i));

                        var inwidth = 24;

                        if (!System.String.isNullOrEmpty(page.v.Caption)) {
                            if (ExpressCraft.Helper.NotDesktop) {
                                inwidth = (inwidth + Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(page.v.Caption, "14px Tahoma"))) | 0;
                            } else {
                                inwidth = (inwidth + Bridge.Int.clip32(ExpressCraft.Control.GetTextWidth(page.v.Caption, ExpressCraft.Settings.DefaultFont))) | 0;
                            }
                        }

                        if (this.showClosedButton) {
                            inwidth = (inwidth + 19) | 0;
                        }
                        var span = null;
                        for (var k = 0; k < page.v.TabPageHeader.children.length; k = (k + 1) >>> 0) {
                            var item = page.v.TabPageHeader.children[k];
                            if (item) {
                                ((span = item)).innerHTML = page.v.Caption;
                                break;
                            }
                        }
                        if (span == null) {
                            span = ($t = document.createElement("span"), $t.innerHTML = page.v.Caption, $t);

                            ExpressCraft.Helper.AppendChild$2(page.v.TabPageHeader, span);
                        }
                        if (ExpressCraft.Helper.NotDesktop) {
                            span.style.fontSize = "14px";
                        }

                        page.v.TabPageHeader.style.left = ExpressCraft.Helper.ToPx(Bridge.box(width, System.Int32));
                        page.v.TabPageHeader.style.width = ExpressCraft.Helper.ToPx(Bridge.box(inwidth, System.Int32));


                        if (ExpressCraft.Helper.NotDesktop) {
                            page.v.Height = "(100% - 49px)";
                            page.v.Top = 49;
                        }

                        width = (width + (((inwidth + 2) | 0))) | 0;

                        this.TabPages.setItem(i, page.v);
                    }
                    if (ExpressCraft.Helper.NotDesktop) {
                        this.tabHeaders.Width = width;
                    }
                }
            },
            Render: function () {
                this.HasRendered = true;
                this.ResizeTabHeaders();
            }
        }
    });

    Bridge.define("ExpressCraft.TabControlPage", {
        inherits: [ExpressCraft.Control],
        fields: {
            index: 0,
            TabPageHeader: null,
            TabPageHeaderClose: null,
            Caption: null,
            Hidden: false
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "tabcontrolpage");
            }
        }
    });

    Bridge.define("ExpressCraft.TileControl", {
        inherits: [ExpressCraft.Control,ExpressCraft.IPages],
        fields: {
            RibbonPages: null,
            _viewState: 0,
            prevOverFlow: null,
            ClearTimeOut: 0
        },
        props: {
            ViewState: {
                get: function () {
                    return this._viewState;
                },
                set: function (value) {
                    if (this.ClearTimeOut !== -1) {
                        clearTimeout(this.ClearTimeOut);
                        this.ClearTimeOut = -1;
                    }
                    if (value !== this._viewState) {
                        this._viewState = value;
                        if (this._viewState === ExpressCraft.TileViewState.Hidden) {
                            this.ClearTimeOut = Bridge.Int.clip32(setTimeout(Bridge.fn.bind(this, function (obj) {
                                this.Content.style.visibility = "hidden";
                            }), 1000));
                            this.Location = new ExpressCraft.Vector2.$ctor1("(100% * -1)", 0);

                            if (this.Content.parentElement != null && this.prevOverFlow != null) {
                                this.Content.parentElement.style.overflow = this.prevOverFlow;
                            }
                        } else {
                            this.Location = new ExpressCraft.Vector2.$ctor1(0, 0);
                            this.Content.style.visibility = "inherit";
                            this.RenderTiles();
                            if (this.Content.parentElement != null) {
                                this.prevOverFlow = this.Content.parentElement.style.overflow;
                                this.Content.parentElement.style.overflow = "hidden";
                            }
                        }
                    }
                }
            }
        },
        alias: ["AddRibbonPages", "ExpressCraft$IPages$AddRibbonPages"],
        ctors: {
            init: function () {
                this.RibbonPages = new (System.Collections.Generic.List$1(ExpressCraft.RibbonPage)).ctor();
                this._viewState = ExpressCraft.TileViewState.Hidden;
                this.ClearTimeOut = -1;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.Control.$ctor1.call(this);
                this.Style.overflowY = "auto";
                this.Location = new ExpressCraft.Vector2.$ctor1("(100% * -1)", 0);
                this.Size = new ExpressCraft.Vector2.$ctor1("100%", "100%");

                this.Content.style.backgroundColor = "transparent";
                this.Content.style.visibility = "hidden";
                this.Content.style.transition = "left 1s ease";
            }
        },
        methods: {
            RenderTiles: function () {
                var $t, $t1, $t2;
                var x = 0;
                var y = 6;

                var doc = document.createDocumentFragment();
                var div = new ExpressCraft.Control.$ctor1();
                div.Width = "100%";
                ExpressCraft.Helper.SetLocation$1(div, 0, 0);
                div.Style.zIndex = "10";

                var div2 = new ExpressCraft.Control.$ctor3("primary");
                div2.Width = "100%";
                div2.Style.minHeight = "100%";
                ExpressCraft.Helper.SetLocation$1(div2, 0, 0);
                div2.Style.filter = "brightness(50%)";

                div2.Style.opacity = "0.9";
                div2.Style.zIndex = "9";

                $t = Bridge.getEnumerator(this.RibbonPages);
                try {
                    while ($t.moveNext()) {
                        var page = $t.Current;
                        if (!System.String.isNullOrWhiteSpace(page.Caption)) {
                            var llb = ExpressCraft.Control.Label(page.Caption, 6, y);
                            llb.style.fontSize = "14px";
                            llb.style.color = "white";
                            doc.appendChild(llb);
                            y = (y + 26) | 0;
                        }

                        $t1 = Bridge.getEnumerator(page.RibbonGroups);
                        try {
                            while ($t1.moveNext()) {
                                var group = $t1.Current;
                                $t2 = Bridge.getEnumerator(group.Items);
                                try {
                                    while ($t2.moveNext()) {
                                        var item = $t2.Current;
                                        if (Bridge.is(item, ExpressCraft.RibbonButton)) {
                                            var button = Bridge.cast(item, ExpressCraft.RibbonButton);

                                            ExpressCraft.Helper.ExchangeClass(item, "ribbonbuttonsmall", "ribbonbutton");
                                            item.Style.borderRadius = "4px";

                                            button.AfterItemClick = Bridge.fn.bind(this, function (ev) {
                                                this.ViewState = ExpressCraft.TileViewState.Hidden;
                                            });
                                            if (item.Enabled) {
                                                ExpressCraft.Helper.ExchangeClass(item, "primary", "primary");
                                                item.Style.border = "0";
                                                item.Style.filter = "brightness(110%)";
                                            } else {
                                                ExpressCraft.Helper.ExchangeClass(item, "primary", "");
                                                item.Style.border = "1px";
                                                item.Style.filter = "";
                                            }
                                            item.Style.opacity = "1";
                                            item.Style.boxShadow = "0px 0px 10px -2px rgba(0,0,0,0.25)";
                                            button.IsSmallItem = false;
                                            item.ProcessCaption();
                                            button.ProcessImage();
                                            item.Size = new ExpressCraft.Vector2.$ctor1("((100% - 24px) * 0.33)", 100);
                                            item.Location = new ExpressCraft.Vector2.$ctor1("(((100% - 24px) * (" + (System.Decimal(x).mul(System.Decimal(0.33))) + ")) + (" + (Bridge.Int.mul(6, (x))) + "px) + 6px)", y);

                                            if (item.captionDiv != null) {
                                                if (item.Enabled) {
                                                    item.captionDiv.style.color = "white";
                                                } else {
                                                    item.captionDiv.style.color = "grey";
                                                }

                                                item.captionDiv.style.fontSize = "14px";
                                                item.captionDiv.style.top = "65px";
                                            }

                                            if (button.imageDiv != null) {
                                                ExpressCraft.Helper.ExchangeClass$1(button.imageDiv, "ribbonbuttonsmallicon", "ribbonbuttonicon");
                                                button.IconURL = System.String.replaceAll(((button.IconURL || "") + ""), "x16x16", "x32x32");
                                                button.imageDiv.style.top = "27px";
                                                if (item.Enabled) {
                                                } else {
                                                }
                                            }

                                            if (x === 2) {
                                                x = 0;
                                                y = (y + 106) | 0;
                                            } else {
                                                x = (x + 1) | 0;
                                            }
                                            item.Style.opacity = "1";
                                            doc.appendChild(ExpressCraft.Control.op_Implicit(item));
                                        }

                                    }
                                } finally {
                                    if (Bridge.is($t2, System.IDisposable)) {
                                        $t2.System$IDisposable$Dispose();
                                    }
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }

                        if (x !== 0) {
                            x = 0;
                            y = (y + 106) | 0;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                div.Height = y;
                div2.Height = y;

                ExpressCraft.Helper.Empty(this.Content);
                div.Content.appendChild(doc);

                div2.Content.onmousedown = function (ev) {
                    ev.stopPropagation();
                };

                this.Content.appendChild(ExpressCraft.Control.op_Implicit(div2));
                this.Content.appendChild(ExpressCraft.Control.op_Implicit(div));

                div.Content.click();
            },
            Render: function () {
                ExpressCraft.Control.prototype.Render.call(this);
                this.RenderTiles();
            },
            AddRibbonPages: function (pages) {
                var $t;
                if (pages === void 0) { pages = []; }
                if (pages != null) {
                    $t = Bridge.getEnumerator(pages);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item != null) {
                                this.RibbonPages.add(item);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }

            }
        }
    });

    Bridge.define("ExpressCraft.ToolTipControl", {
        inherits: [ExpressCraft.Control],
        fields: {
            visible: false,
            _toolTip$1: null
        },
        ctors: {
            init: function () {
                this.visible = false;
            },
            ctor: function (toolTip) {
                this.$initialize();
                ExpressCraft.Control.$ctor3.call(this, "tool-tip");
                this._toolTip$1 = toolTip;
            }
        },
        methods: {
            Show: function (ev) {
                var $t;
                if (ExpressCraft.Helper.NotDesktop) {
                    return;
                }

                ExpressCraft.Helper.Empty(this.Content);

                if (this._toolTip$1 != null) {
                    if (!ExpressCraft.Helper.IsEmpty(this._toolTip$1.Heading)) {
                        ExpressCraft.Helper.AppendChild$2(this.Content, ($t = document.createElement("p"), $t.className = "tool-tip-heading", $t.innerHTML = System.String.replaceAll(ExpressCraft.Helper.HtmlEscape$1(this._toolTip$1.Heading), "\r\n", "<br>"), $t));
                    }
                    if (!ExpressCraft.Helper.IsEmpty(this._toolTip$1.Description)) {
                        ExpressCraft.Helper.AppendChild$2(this.Content, ($t = document.createElement("p"), $t.className = "tool-tip-body", $t.innerHTML = System.String.replaceAll(ExpressCraft.Helper.HtmlEscape$1(this._toolTip$1.Description), "\r\n", "<br>"), $t));
                    }
                }
                var mouse = ExpressCraft.Helper.GetClientMouseLocation(ev);

                this.Location = new ExpressCraft.Vector2.$ctor1(mouse.X, ((ExpressCraft.Helper.ToInt(mouse.Y) + 22) | 0));

                if (!this.visible) {
                    this.visible = true;
                    ExpressCraft.ContextMenu.TotalContextHandles = (ExpressCraft.ContextMenu.TotalContextHandles + 1) | 0;
                    this.Content.style.zIndex = Bridge.toString((((ExpressCraft.ContextMenu.TotalContextHandles + ExpressCraft.Settings.ContextMenuStartingZIndex) | 0)));
                    ExpressCraft.Helper.AppendChild$1(document.body, this);
                }
            },
            Close: function () {
                if (this.visible) {
                    if (this.Content != null) {
                        ExpressCraft.Helper.Delete$1(this.Content);
                    }
                    this.visible = false;
                    ExpressCraft.ContextMenu.TotalContextHandles = (ExpressCraft.ContextMenu.TotalContextHandles - 1) | 0;
                }
            }
        }
    });

    Bridge.define("ExpressCraft.FormPopup", {
        inherits: [ExpressCraft.Form],
        statics: {
            methods: {
                GetPopupDefaultLocation: function (control, isControlChild) {
                    if (isControlChild === void 0) { isControlChild = false; }
                    if (ExpressCraft.Helper.NotDesktop) {
                        return new ExpressCraft.Vector2.$ctor1(0, 0);
                    }

                    if (isControlChild) {
                        var rec = control.Content.parentElement.getBoundingClientRect();
                        return new ExpressCraft.Vector2.$ctor1(rec.left, rec.top + rec.height);
                    } else {
                        var rec1 = control.Content.getBoundingClientRect();
                        return new ExpressCraft.Vector2.$ctor1(rec1.left, rec1.top + rec1.height);
                    }
                }
            }
        },
        fields: {
            PreviousScrollTop: 0,
            ParentContainer: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.Form.ctor.call(this);
                this.Heading.style.display = "none";
                ExpressCraft.Helper.SetLocation$2(this.Body, 0, 0);
                ExpressCraft.Helper.SetSize$1(this.Body, "100%", "100%");
                this.Content.classList.add("inputcontrol");
                this.Content.classList.add("popup");
                this.Content.classList.remove("form-base");
                this.Content.style.boxShadow = "0 0 63px -17px rgba(0,0,0,0.75)";

                this.StartPosition = ExpressCraft.FormStartPosition.Manual;

                this.ShowClose = false;
                this.ShowMaximize = false;
                this.ShowMinimize = false;
                this.AllowMoveChange = false;
                this.AllowSizeChange = false;
            }
        },
        methods: {
            ShowPopup: function (location) {
                this.Location = location.$clone();
                this.ShowDialog();
            },
            MoveFormUp: function () {
                this.Location = new ExpressCraft.Vector2.$ctor1(this.Left, ExpressCraft.Helper.ToFloat(this.Top) - ExpressCraft.Helper.ToFloat(this.Height) - 20);
            },
            OnShowed: function () {
                ExpressCraft.Form.prototype.OnShowed.call(this);

                if (ExpressCraft.Helper.NotDesktop) {
                    this.AllowSizeChange = true;
                    this.WindowState = ExpressCraft.WindowStateType.Maximized;
                    this.AllowSizeChange = false;
                } else {
                    var rect = this.Content.getBoundingClientRect();

                    try {
                        if (rect.bottom > window.innerHeight || rect.bottom > document.documentElement.clientHeight) {
                            this.MoveFormUp();
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                    }
                }
            },
            OnClosed: function () {
                ExpressCraft.Form.prototype.OnClosed.call(this);
            }
        }
    });

    Bridge.define("ExpressCraft.ColorInput", {
        inherits: [ExpressCraft.TextInput],
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.TextInput.$ctor2.call(this, "color");
            }
        }
    });

    Bridge.define("ExpressCraft.ConsoleForm", {
        inherits: [ExpressCraft.Form],
        statics: {
            fields: {
                ConsoleVisible: false,
                _consoleForm: null,
                prevWindowState: 0,
                firstLoad: false,
                prevLocation: null,
                prevSize: null
            },
            ctors: {
                init: function () {
                    this.prevLocation = new ExpressCraft.Vector2();
                    this.prevSize = new ExpressCraft.Vector2();
                    this.ConsoleVisible = false;
                    this.prevWindowState = ExpressCraft.WindowStateType.Normal;
                    this.firstLoad = true;
                    this.prevSize = ExpressCraft.Settings.ConsoleDefaultSize.$clone();
                }
            },
            methods: {
                CheckConsoleState: function () {
                    if (!ExpressCraft.ConsoleForm.ConsoleVisible) {
                        ExpressCraft.ConsoleForm._consoleForm = new ExpressCraft.ConsoleForm();
                        ExpressCraft.ConsoleForm._consoleForm.Show(true);
                    }
                },
                Log: function (source, logType) {
                    if (logType === void 0) { logType = 0; }
                    ExpressCraft.ConsoleForm.CheckConsoleState();
                    ExpressCraft.ConsoleForm._consoleForm.InternalLog(source, logType);
                },
                Clear: function () {
                    ExpressCraft.ConsoleForm.CheckConsoleState();
                    ExpressCraft.ConsoleForm._consoleForm.InternalClear();
                }
            }
        },
        fields: {
            logContent: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.Form.ctor.call(this);
                this.logContent = ExpressCraft.Control.Div$1("console-body");
                ExpressCraft.Helper.AppendChild$2(this.Body, this.logContent);
                this.Body.style.background = ExpressCraft.Color.op_Implicit$1(ExpressCraft.Color.Black.$clone());
                this.Body.style.overflowY = "scroll";

                this.Text = (document.title || "") + " - Console";
                if (ExpressCraft.ConsoleForm.firstLoad) {
                    this.StartPosition = ExpressCraft.FormStartPosition.Center;
                    this.Size = ExpressCraft.ConsoleForm.prevSize.$clone();
                } else {
                    this.StartPosition = ExpressCraft.FormStartPosition.Manual;
                    this.Location = ExpressCraft.ConsoleForm.prevLocation.$clone();

                    if (ExpressCraft.ConsoleForm.prevWindowState === ExpressCraft.WindowStateType.Maximized) {
                        ExpressCraft.ConsoleForm.prevSize = ExpressCraft.Settings.ConsoleDefaultSize.$clone();
                    }

                    this.Size = ExpressCraft.ConsoleForm.prevSize.$clone();

                    if (ExpressCraft.ConsoleForm.prevWindowState === ExpressCraft.WindowStateType.Maximized) {
                        this.SetWindowState(ExpressCraft.ConsoleForm.prevWindowState);
                    }
                }
            }
        },
        methods: {
            InternalClear: function () {
                ExpressCraft.Helper.Empty(this.logContent);
            },
            InternalLog: function (source, logType) {
                var $t;
                if (logType === void 0) { logType = 0; }
                var para = ($t = document.createElement("p"), $t.className = "console-para", $t);
                switch (logType) {
                    case ExpressCraft.ConsoleLogType.Debug: 
                        para.style.color = ExpressCraft.Color.op_Implicit$1(ExpressCraft.Color.ForestGreen.$clone());
                        break;
                    case ExpressCraft.ConsoleLogType.Error: 
                        para.style.color = ExpressCraft.Color.op_Implicit$1(ExpressCraft.Color.Red.$clone());
                        break;
                }

                para.innerHTML = source;
                this.logContent.appendChild(para);
                if (this.logContent.children.length > 1000) {
                    this.logContent.removeChild(this.logContent.children[0]);
                }
                para.scrollIntoView(false);
            },
            OnGotFocus: function () {
                if (this.Content != null) {
                    this.Style.opacity = "1";
                }
                ExpressCraft.Form.prototype.OnGotFocus.call(this);
            },
            OnLostFocus: function () {
                if (this.Content != null) {
                    this.Style.opacity = "0.5";
                }
                ExpressCraft.Form.prototype.OnLostFocus.call(this);
            },
            OnShowed: function () {
                ExpressCraft.Form.prototype.OnShowed.call(this);
                ExpressCraft.ConsoleForm.ConsoleVisible = true;
                ExpressCraft.ConsoleForm.firstLoad = false;
            },
            OnClosing: function () {
                ExpressCraft.Form.prototype.OnClosing.call(this);

                ExpressCraft.ConsoleForm.prevSize = this.Size.$clone();
                ExpressCraft.ConsoleForm.prevLocation = this.Location.$clone();
                ExpressCraft.ConsoleForm.prevWindowState = this.WindowState;
            },
            OnClosed: function () {
                ExpressCraft.Form.prototype.OnClosed.call(this);
                ExpressCraft.ConsoleForm.ConsoleVisible = false;
            }
        }
    });

    Bridge.define("ExpressCraft.DialogForm", {
        inherits: [ExpressCraft.Form],
        fields: {
            _buttonCollection: null,
            ButtonSection: null
        },
        ctors: {
            ctor: function (text) {
                if (text === void 0) { text = ""; }

                this.$initialize();
                ExpressCraft.Form.ctor.call(this);
                this.Text = text;
                this.Body.style.backgroundColor = "white";


                this.ButtonSection = new ExpressCraft.Control.$ctor3("dialogbuttonsection");

                if (ExpressCraft.Helper.NotDesktop) {
                    this.ButtonSection.Top = "(100% - 70px)";
                    this.ButtonSection.Size = new ExpressCraft.Vector2.$ctor1("100%", 70);
                }
            }
        },
        methods: {
            OnShowing: function () {
                ExpressCraft.Helper.AppendChild$1(this.Body, this.ButtonSection);
                ExpressCraft.Form.prototype.OnShowing.call(this);
            }
        }
    });

    Bridge.define("ExpressCraft.TextInputDropDown", {
        inherits: [ExpressCraft.TextInput],
        fields: {
            DropDownButton: null,
            UsedEdit: null,
            _disableTextEditor: false
        },
        props: {
            DisableTextEditor: {
                get: function () {
                    return this._disableTextEditor;
                },
                set: function (value) {
                    this._disableTextEditor = value;
                    this.UsedEdit.DisableFocus = value;
                    if (value) {
                        this.UsedEdit.SetAttribute("contenteditable", "false");
                        this.UsedEdit.Style.backgroundColor = ExpressCraft.Color.op_Implicit$1(ExpressCraft.Color.White.$clone());
                        this.UsedEdit.Style.cursor = "pointer";
                    } else {
                        this.UsedEdit.Style.backgroundColor = null;
                        this.UsedEdit.Content.removeAttribute("contenteditable");
                    }
                }
            }
        },
        ctors: {
            ctor: function (inputType) {
                if (inputType === void 0) { inputType = "text"; }
                var $t;

                this.$initialize();
                ExpressCraft.TextInput.$ctor1.call(this, document.createElement("div"), true, false);
                var dropDownWidth = 17;

                if (ExpressCraft.Helper.NotDesktop) {
                    dropDownWidth = 45;
                }

                this.Type = inputType;

                this.UsedEdit = ($t = new ExpressCraft.TextInput.$ctor2(inputType), $t.DisableFocusPopup = true, $t.Location = new ExpressCraft.Vector2.$ctor1(0, 0), $t.Size = new ExpressCraft.Vector2.$ctor1("(100% - " + (((dropDownWidth - 1) | 0)) + "px)", "100%"), $t);
                this.UsedEdit.OnTextChanged = Bridge.fn.bind(this, function (sender) {
                    if (!Bridge.staticEquals(this.OnTextChanged, null)) {
                        this.OnTextChanged(sender);
                    }
                });

                this._displayFormat = this.UsedEdit.DisplayFormat;

                this.DropDownButton = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - " + dropDownWidth + "px)", 0), $t.Size = new ExpressCraft.Vector2.$ctor1(dropDownWidth, "100%"), $t);
                this.DropDownButton.Content.onmousedown = Bridge.fn.bind(this, function (ev) {
                    if (!this.Readonly && this.Enabled) {
                        this.OnDropDownClicked(ev);
                    }
                });

                this.Style.border = "0";

                this.DropDownButton.ClassList.add("dropdown");

                if (ExpressCraft.Helper.NotDesktop) {
                    this.DropDownButton.Style.backgroundPosition = "right 16px center";
                }

                ExpressCraft.Helper.AppendChildren$1(this.Content, [this.UsedEdit, this.DropDownButton]);
            }
        },
        methods: {
            GetDisplayFormat: function () {
                return this.UsedEdit.GetDisplayFormat();
            },
            GetDropdownWidth: function () {
                return this.Content.getBoundingClientRect().width;
            },
            SetDisplayFormat: function (value) {
                this.UsedEdit.SetDisplayFormat(value);
            },
            OnFocus: function () {
                this.UsedEdit.Focus();
            },
            GetInput: function () {
                return this.UsedEdit.GetInput();
            },
            GetValue: function () {
                return this.UsedEdit.Text;
            },
            SetValue: function (value) {
                this.UsedEdit.Text = value;
            },
            OnDropDownClicked: function (mouseEvent) { }
        }
    });

    Bridge.define("ExpressCraft.DrawingControl", {
        inherits: [ExpressCraft.CanvasControl],
        fields: {
            Lines: null,
            __mouseDown: false,
            __lastDrawn: 0,
            __currentCursor: null
        },
        ctors: {
            init: function () {
                this.__currentCursor = new ExpressCraft.Vector2();
                this.Lines = new (System.Collections.Generic.List$1(ExpressCraft.Vector4)).ctor();
                this.__mouseDown = false;
                this.__lastDrawn = 0;
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.CanvasControl.ctor.call(this);
                this.ClassList.add("inputcontrol");
                this.Style.backgroundColor = "white";

                if (ExpressCraft.Helper.NotDesktop) {
                    this.Content.ontouchstart = Bridge.fn.bind(this, function (ev) {
                        var ev2 = ev;
                        this.__mouseDown = true;
                        this.__currentCursor = new ExpressCraft.Vector2.$ctor1(ev2.layerX, ev2.layerY);

                        this.OnPaint();
                    });
                    this.Content.ontouchmove = Bridge.fn.bind(this, function (ev) {
                        var ev2 = ev;
                        if (this.__mouseDown) {
                            var np = new ExpressCraft.Vector2.$ctor1(ev2.layerX, ev2.layerY);
                            this.Lines.add(new ExpressCraft.Vector4.$ctor2(this.__currentCursor.$clone(), np.$clone()));
                            this.__currentCursor = np.$clone();

                            this.OnPaint();
                        }
                    });
                    this.Content.ontouchend = Bridge.fn.bind(this, function (ev) {
                        var ev2 = ev;
                        var np = new ExpressCraft.Vector2.$ctor1(ev2.layerX, ev2.layerY);
                        if (np.Xi !== this.__currentCursor.Xi || np.Yi !== this.__currentCursor.Yi) {
                            this.Lines.add(new ExpressCraft.Vector4.$ctor2(this.__currentCursor.$clone(), np.$clone()));
                        }
                        this.__mouseDown = false;

                        this.OnPaint();
                    });
                } else {
                    this.Content.onmousedown = Bridge.fn.bind(this, function (ev) {
                        var ev2 = ev;
                        this.__mouseDown = true;
                        this.__currentCursor = new ExpressCraft.Vector2.$ctor1(ev2.layerX, ev2.layerY);

                        this.OnPaint();
                    });
                    this.Content.onmousemove = Bridge.fn.bind(this, function (ev) {
                        if (this.__mouseDown) {
                            var ev2 = ev;
                            var np = new ExpressCraft.Vector2.$ctor1(ev2.layerX, ev2.layerY);
                            this.Lines.add(new ExpressCraft.Vector4.$ctor2(this.__currentCursor.$clone(), np.$clone()));
                            this.__currentCursor = np.$clone();

                            this.OnPaint();
                        }
                    });
                    this.Content.onmouseup = Bridge.fn.bind(this, function (ev) {
                        var ev2 = ev;
                        var np = new ExpressCraft.Vector2.$ctor1(ev2.layerX, ev2.layerY);
                        if (np.Xi !== this.__currentCursor.Xi || np.Yi !== this.__currentCursor.Yi) {
                            this.Lines.add(new ExpressCraft.Vector4.$ctor2(this.__currentCursor.$clone(), np.$clone()));
                        }
                        this.__mouseDown = false;

                        this.OnPaint();
                    });
                }


            }
        },
        methods: {
            OnClear: function () {
                ExpressCraft.CanvasControl.prototype.OnClear.call(this);
                this.__lastDrawn = 0;
                this.OnPaint();
            },
            OnPaint: function () {
                var i = this.__lastDrawn;
                if (i < this.Lines.Count) {
                    this.Context.beginPath();

                    for (; i < this.Lines.Count; i = (i + 1) | 0) {

                        var v1 = this.Lines.getItem(i).$clone();

                        this.Context.moveTo(v1.Xi, v1.Yi);
                        this.Context.lineTo(v1.Zi, v1.Mi);
                    }

                    this.Context.stroke();
                    this.__lastDrawn = i;
                }

            }
        }
    });

    Bridge.define("ExpressCraft.DropDownButton", {
        inherits: [ExpressCraft.SimpleButton],
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.SimpleButton.ctor.call(this);
                this.Content.onmousedown = Bridge.fn.bind(this, function (ev) {
                    if (this.Enabled) {
                        this.OnDropDownClicked(ev);
                    }
                });
            }
        },
        methods: {
            OnDropDownClicked: function (mouseEvent) {

            }
        }
    });

    Bridge.define("ExpressCraft.MemoInput", {
        inherits: [ExpressCraft.TextInput],
        fields: {
            PreSize: null,
            PrePreSize: null,
            PreZIndex$1: null,
            _hasGotFocus: false,
            DisableResize: false
        },
        props: {
            Rows: {
                get: function () {
                    return ((this.Content.rows) | 0);
                },
                set: function (value) {
                    this.Content.rows = value >>> 0;
                }
            },
            Cols: {
                get: function () {
                    return ((this.Content.cols) | 0);
                },
                set: function (value) {
                    this.Content.cols = value >>> 0;
                }
            },
            MaxLength: {
                get: function () {
                    return this.Content.maxLength;
                },
                set: function (value) {
                    this.Content.maxLength = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.PreSize = new ExpressCraft.Vector2();
                this.PrePreSize = new ExpressCraft.Vector2();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.TextInput.$ctor1.call(this, document.createElement("textarea"));
                this.Style.resize = "none";

                this.OnGotFocus = Bridge.fn.bind(this, function (memo) {
                    if (this.DisableResize) {
                        return;
                    }

                    this.Style.resize = "both";
                    this.PrePreSize = this.Size.$clone();

                    if (this._hasGotFocus) {
                        this.Size = this.PreSize.$clone();
                    } else {
                        this._hasGotFocus = true;
                        this.PreSize = this.Size.$clone();
                    }
                });
                this.OnLostFocus = Bridge.fn.bind(this, function (memo) {
                    this.Style.resize = "none";
                    this.PreSize = this.Size.$clone();
                    this.Size = this.PrePreSize.$clone();
                });
            }
        },
        methods: {
            GetValue: function () {
                return this.Content.value;
            },
            SetValue: function (value) {
                this.Content.value = value;
            }
        }
    });

    Bridge.define("ExpressCraft.Network.NetworkProgressForm", {
        inherits: [ExpressCraft.Form],
        $kind: "nested class",
        fields: {
            progressControl: null,
            buttonCancel: null
        },
        ctors: {
            ctor: function (_text) {
                if (_text === void 0) { _text = "Loading..."; }

                this.$initialize();
                ExpressCraft.Form.ctor.call(this);

            }
        }
    });

    Bridge.define("ExpressCraft.PDFPreviewForm", {
        inherits: [ExpressCraft.Form],
        fields: {
            Source: null,
            PDFSourceType: 0,
            PdfViewer: null
        },
        ctors: {
            ctor: function (source, pdfSourceType) {
                if (pdfSourceType === void 0) { pdfSourceType = 0; }

                this.$initialize();
                ExpressCraft.Form.ctor.call(this);
                this.Source = source;
                this.PDFSourceType = pdfSourceType;

                this.PdfViewer = document.createElement(Bridge.Browser.isIE ? "iframe" : pdfSourceType === ExpressCraft.PdfSourceType.Url ? "embed" : "object");
                this.PdfViewer.className = "control";

                ExpressCraft.Helper.SetBounds$1(this.PdfViewer, 0, 0, "100%", "100%");
                this.PdfViewer.setAttribute("alt", "pdf");
                this.PdfViewer.setAttribute("type", "application/pdf");

                ExpressCraft.Helper.AppendChild$2(this.Body, this.PdfViewer);
            }
        },
        methods: {
            OnShowing: function () {
                ExpressCraft.Form.prototype.OnShowing.call(this);
                if (this.PDFSourceType === ExpressCraft.PdfSourceType.Url) {
                    this.PdfViewer.setAttribute("Src", this.Source);
                } else {
                    this.PdfViewer.setAttribute("data", ExpressCraft.Control.GetPdfString(this.Source));
                }
            }
        }
    });

    Bridge.define("ExpressCraft.PrintingPreviewForm", {
        inherits: [ExpressCraft.Form],
        fields: {
            PrintingControl: null
        },
        props: {
            FocusedPage: {
                get: function () {
                    return this.PrintingControl.FocusedPage;
                }
            },
            Pages: {
                get: function () {
                    return this.PrintingControl.Pages;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.Form.ctor.call(this);
                this.PrintingControl = new ExpressCraft.PrinterControl();
                ExpressCraft.Helper.SetBoundsFull(this.PrintingControl);

                ExpressCraft.Helper.AppendChild$1(this.Body, this.PrintingControl);

                this.Text = "Printing Preview";
            }
        },
        methods: {
            /**
             * Page is a HTMLElement - AppendChild and Add the page to the list
             *
             * @instance
             * @public
             * @this ExpressCraft.PrintingPreviewForm
             * @memberof ExpressCraft.PrintingPreviewForm
             * @param   {ExpressCraft.Control}    element
             * @return  {void}
             */
            AddElementFocusedPage: function (element) {
                this.PrintingControl.AddElementFocusedPage$1(element.Content);
            },
            /**
             * Page is a HTMLElement - AppendChild and Add the page to the list
             *
             * @instance
             * @public
             * @this ExpressCraft.PrintingPreviewForm
             * @memberof ExpressCraft.PrintingPreviewForm
             * @param   {Retyped..HTMLElement}    element
             * @return  {void}
             */
            AddElementFocusedPage$1: function (element) {
                if (this.FocusedPage == null) {
                    throw new System.Exception("There is not focused page!");
                }

                ExpressCraft.Helper.AppendChild$2(this.PrintingControl.FocusedPage.Content, element);
            },
            CreateNewPage: function (size) {
                if (size === void 0) { size = 0; }
                return this.PrintingControl.CreateNewPage(size);
            },
            OnShowed: function () {
                ExpressCraft.Form.prototype.OnShowed.call(this);

                this.ShowClose = true;
                this.ShowMinimize = true;
                this.ShowMaximize = true;

                this.WindowState = ExpressCraft.WindowStateType.Maximized;
            }
        }
    });

    Bridge.define("ExpressCraft.RadioElement", {
        inherits: [ExpressCraft.TextInput],
        statics: {
            fields: {
                RadioId: System.Int64(0),
                rng: null
            },
            ctors: {
                init: function () {
                    this.rng = new System.Random.ctor();
                }
            }
        },
        fields: {
            _caption: null,
            Tag: null,
            labelElement: null
        },
        props: {
            Caption: {
                get: function () {
                    return this._caption;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._caption, value)) {
                        this._caption = value;
                        this.ProcessRender();
                    }
                }
            },
            Checked: {
                get: function () {
                    return this.Content.checked;
                },
                set: function (value) {
                    this.Content.checked = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.TextInput.$ctor2.call(this, "radio");
                ExpressCraft.RadioElement.RadioId = ExpressCraft.RadioElement.RadioId.inc();
                if (ExpressCraft.RadioElement.RadioId.gt(System.Int64(20000))) {
                    ExpressCraft.RadioElement.RadioId = System.Int64(0);
                }

                this.Content.id = "__radio_internal_" + (Bridge.toString(ExpressCraft.RadioElement.RadioId) || "") + "_rng_" + (Bridge.toString(ExpressCraft.RadioElement.rng.Next$2(1, 1000)) || "");
                this.Style.marginLeft = "3px";
                this.Style.textIndent = "0";
                this.ClassList.remove("Control");
                this.ClassList.remove("inputcontrol");
            }
        },
        methods: {
            ProcessIsEnabled: function () {
                if (this.labelElement == null) {
                    return;
                }

                if (this.Enabled) {
                    this.labelElement.removeAttribute("disabled");
                    this.labelElement.style.color = "";
                    this.labelElement.style.cursor = "pointer";
                } else {
                    this.labelElement.setAttribute("disabled", "");
                    this.labelElement.style.color = "grey";
                    this.labelElement.style.cursor = "not-allowed";
                }
            },
            ProcessRender: function () {
                if (!this.HasRendered) {
                    return;
                }

                if (this.labelElement == null) {
                    if (this.Content.parentElement != null) {
                        this.labelElement = document.createElement("label");
                        this.labelElement.classList.add("control");
                        this.labelElement.style.marginLeft = "16px";
                        this.labelElement.style.textIndent = "0";
                        this.labelElement.style.left = "3px";
                        this.labelElement.htmlFor = this.Content.id;

                        this.labelElement.innerHTML = this._caption;

                        if (this.Content.nextElementSibling == null) {
                            this.Content.parentElement.appendChild(document.createElement("br"));
                        } else {
                            this.Content.parentElement.insertBefore(document.createElement("br"), this.Content.nextElementSibling);
                        }

                        if (this.Content.nextElementSibling == null) {
                            this.Content.parentElement.appendChild(this.labelElement);
                        } else {
                            this.Content.parentElement.insertBefore(this.labelElement, this.Content.nextElementSibling);
                        }
                    }
                } else {
                    this.labelElement.innerHTML = this._caption;
                }

                this.ProcessIsEnabled();
            },
            Render: function () {
                this.HasRendered = true;

                ExpressCraft.TextInput.prototype.Render.call(this);
            }
        }
    });

    Bridge.define("ExpressCraft.RibbonButton", {
        inherits: [ExpressCraft.RibbonItem],
        fields: {
            _icon: null,
            _iconURL: null,
            ItemClick: null,
            imageDiv: null,
            AfterItemClick: null
        },
        props: {
            Icon: {
                get: function () {
                    return this._icon;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._icon, value)) {
                        this._icon = value;
                        this.ProcessImage();
                    }
                }
            },
            IconURL: {
                get: function () {
                    return this._iconURL;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._iconURL, value)) {
                        this._iconURL = value;
                        this.ProcessImage();
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this._icon = "";
                this._iconURL = "";
            },
            ctor: function (caption, _isSmallCaption) {
                if (caption === void 0) { caption = ""; }
                if (_isSmallCaption === void 0) { _isSmallCaption = false; }

                this.$initialize();
                ExpressCraft.RibbonItem.ctor.call(this, _isSmallCaption ? "ribbonbuttonsmall" : "ribbonbutton");
                this.Caption = caption;
                this.IsSmallItem = _isSmallCaption;
            }
        },
        methods: {
            OnSetEnabled: function (value) {
                if (value) {
                    if (this.imageDiv != null) {
                        this.imageDiv.classList.remove("disabled");
                    }
                } else {
                    if (this.imageDiv != null) {
                        this.imageDiv.classList.add("disabled");
                    }
                }
                ExpressCraft.RibbonItem.prototype.OnSetEnabled.call(this, value);
            },
            Render: function () {
                this.HasRendered = true;

                this.Content.onclick = Bridge.fn.bind(this, function (ev) {
                    var wasEnabled = this.enabled;

                    if (this.enabled && !Bridge.staticEquals(this.ItemClick, null)) {
                        this.ItemClick(this);
                    }
                    if (wasEnabled && !Bridge.staticEquals(this.AfterItemClick, null)) {
                        this.AfterItemClick(this);
                    }

                    ev.stopPropagation();
                });

                this.ProcessCaption();
                this.ProcessImage();

                this.setEnabled(this.enabled);
            },
            ProcessImage: function () {
                if (this.imageDiv == null) {
                    if (!System.String.isNullOrWhiteSpace(this.Icon)) {
                        this.imageDiv = ExpressCraft.Control.Div$1(this.IsSmallItem ? "ribbonbuttonsmallicon" : "ribbonbuttonicon");
                        this.imageDiv.style.background = ExpressCraft.Control.GetImageString(this.Icon);
                    } else if (!System.String.isNullOrWhiteSpace(this.IconURL)) {
                        this.imageDiv = ExpressCraft.Control.Div$1(this.IsSmallItem ? "ribbonbuttonsmallicon" : "ribbonbuttonicon");
                        this.imageDiv.style.background = ExpressCraft.Control.GetImageStringURI(this.IconURL);
                    }
                    if (this.imageDiv != null) {
                        ExpressCraft.Helper.AppendChild$2(this.Content, this.imageDiv);
                    }
                } else {
                    if (!System.String.isNullOrWhiteSpace(this.Icon)) {
                        this.imageDiv.style.background = ExpressCraft.Control.GetImageString(this.Icon);
                    } else if (!System.String.isNullOrWhiteSpace(this.IconURL)) {
                        this.imageDiv.style.background = ExpressCraft.Control.GetImageStringURI(this.IconURL);
                    }
                }

                if (this.imageDiv != null) {
                    this.imageDiv.style.backgroundSize = "100% 100%";

                    if (this.captionDiv != null && this.IsSmallItem) {
                        this.captionDiv.style.left = "28px";
                    }
                } else {
                    if (this.captionDiv != null && this.IsSmallItem) {
                        this.captionDiv.style.left = "6px";
                    }
                }
            }
        }
    });

    Bridge.define("ExpressCraft.RibbonEditItem", {
        inherits: [ExpressCraft.RibbonItem],
        fields: {
            Edit: null
        },
        props: {
            EditWidth: {
                get: function () {
                    return ExpressCraft.Helper.ToInt(this.Edit.Width);
                },
                set: function (value) {
                    this.Edit.Width = value;
                    this.Edit.Top = 0;
                    this.Edit.Left = "(100% - " + (((value + 10) | 0)) + "px)";
                    this.Edit.Height = "100%";
                }
            }
        },
        ctors: {
            ctor: function (edit, editWidth) {
                if (editWidth === void 0) { editWidth = 100; }

                this.$initialize();
                ExpressCraft.RibbonItem.ctor.call(this, "ribbonbuttonsmall");
                this.Edit = edit;
                this.EditWidth = editWidth;
                ExpressCraft.Helper.AppendChild$1(this.Content, this.Edit);

                this.IsSmallItem = true;
            }
        }
    });

    Bridge.define("ExpressCraft.Sheet", {
        inherits: [ExpressCraft.CanvasControl],
        fields: {
            data: null,
            ScrollColumnIndex: 0,
            ScrollRowIndex: 0,
            columns: null,
            rows: null,
            _inDataUpdate: false
        },
        ctors: {
            init: function () {
                this.data = new (System.Collections.Generic.List$1(System.Collections.Generic.List$1(ExpressCraft.SheetCell))).ctor();
                this.columns = new (System.Collections.Generic.List$1(ExpressCraft.SheetColumn)).ctor();
                this.rows = new (System.Collections.Generic.List$1(ExpressCraft.SheetRow)).ctor();
            },
            ctor: function () {
                this.$initialize();
                ExpressCraft.CanvasControl.ctor.call(this);
                this.Style.backgroundColor = "white";
                this.Content.contentEditable = "true";
                this.Content.addEventListener("keydown", Bridge.fn.bind(this, function (e) {
                    var ev = Bridge.unbox(e);

                    if (ev.keyCode === 40) {
                        this.ScrollRowIndex = (this.ScrollRowIndex + 1) | 0;
                        this.Refresh();
                    } else if (ev.keyCode === 38) {
                        this.ScrollRowIndex = (this.ScrollRowIndex - 1) | 0;
                        if (this.ScrollRowIndex < 0) {
                            this.ScrollRowIndex = 0;
                        }
                        this.Refresh();
                    } else if (ev.keyCode === 37) {
                        this.ScrollColumnIndex = (this.ScrollColumnIndex - 1) | 0;
                        if (this.ScrollColumnIndex < 0) {
                            this.ScrollColumnIndex = 0;
                        }
                        this.Refresh();
                    } else if (ev.keyCode === 39) {
                        this.ScrollColumnIndex = (this.ScrollColumnIndex + 1) | 0;
                        this.Refresh();
                    }

                }));
            }
        },
        methods: {
            getItem$1: function (x, y) {
                return this.GetCell(x, y);
            },
            RequestRefresh: function () {
                if (this._inDataUpdate) {
                    return;
                }
                this.Refresh();
            },
            BeginDataUpdate: function () {
                this._inDataUpdate = true;
            },
            EndDataUpdate: function () {
                this._inDataUpdate = false;
                this.Refresh();
            },
            increaseListBy: function (T, list, count) {
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    System.Array.add(list, null, T);
                }
            },
            GetCell: function (x, y) {
                var $t;
                if (this.data == null) {
                    this.data = new (System.Collections.Generic.List$1(System.Collections.Generic.List$1(ExpressCraft.SheetCell))).ctor();
                }

                if (y >= this.data.Count) {
                    this.increaseListBy(ExpressCraft.SheetRow, this.rows, ((((y + 1) | 0) - this.rows.Count) | 0));
                    this.increaseListBy(System.Collections.Generic.List$1(ExpressCraft.SheetCell), this.data, ((((y + 1) | 0) - this.data.Count) | 0));
                }

                if (this.data.getItem(y) == null) {
                    this.data.setItem(y, new (System.Collections.Generic.List$1(ExpressCraft.SheetCell)).ctor());
                }

                if (x >= this.data.getItem(y).Count) {
                    this.increaseListBy(ExpressCraft.SheetColumn, this.columns, ((((x + 1) | 0) - this.columns.Count) | 0));
                    this.increaseListBy(ExpressCraft.SheetCell, this.data.getItem(y), ((((x + 1) | 0) - this.data.getItem(y).Count) | 0));
                }
                var value = this.data.getItem(y).getItem(x);
                if (value == null) {
                    value = (($t = new ExpressCraft.SheetCell(this), this.data.getItem(y).setItem(x, $t), $t));
                }

                return value;
            },
            GetColumnLetters: function (column) {
                var col = "A";
                for (var i = 0; i < column; i = (i + 1) | 0) {
                    col = this.IncrementColumn(col);
                }
                return col;
            },
            IncrementColumn: function (column) {
                var $t, $t1;
                var columnChars = new (System.Collections.Generic.List$1(System.Char)).$ctor1(($t = column.toUpperCase(), System.String.toCharArray($t, 0, $t.length)));

                var leftOver = 1;

                for (var i = (columnChars.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if ((Bridge.identity(columnChars.getItem(i), ($t1 = (columnChars.getItem(i) + 1) & 65535, columnChars.setItem(i, $t1), $t1))) === 91) {
                        columnChars.setItem(i, 65);
                    } else {
                        leftOver = 0;
                        break;
                    }
                }
                if (leftOver === 1) {
                    columnChars.insert(0, 65);
                }
                return System.String.fromCharArray(columnChars.ToArray());
            },
            OnPaint: function () {
                ExpressCraft.CanvasControl.prototype.OnPaint.call(this);
                var g = this.CreateGraphics();


                var widthSoFar = 45;
                var heightSoFar = 25;

                var defaultBorderColor = new ExpressCraft.Pen.ctor(new ExpressCraft.SolidBrush(ExpressCraft.Color.FromArgb$2(218, 218, 218)));
                var columnBorderColor = new ExpressCraft.Pen.ctor(new ExpressCraft.SolidBrush(ExpressCraft.Color.FromArgb$2(192, 192, 192)));
                var columnHeader = new ExpressCraft.SolidBrush(ExpressCraft.Color.FromArgb$2(243, 243, 243));

                for (var x = this.ScrollColumnIndex; x < this.columns.Count; x = (x + 1) | 0) {
                    if (this.columns.getItem(x) == null) {
                        this.columns.setItem(x, new ExpressCraft.SheetColumn(this));
                    }
                    var pre = widthSoFar;
                    widthSoFar += this.columns.getItem(x).Width;

                    g.FillRectangle$3(columnHeader, pre, 0, this.columns.getItem(x).Width, 25);
                    g.DrawRectangle$3(columnBorderColor, pre, 0, this.columns.getItem(x).Width, 25);

                    g.DrawString$4(this.GetColumnLetters(x), new ExpressCraft.Font("Arial 10pt"), new ExpressCraft.SolidBrush(ExpressCraft.Color.Black.$clone()), pre + (this.columns.getItem(x).Width / 2), 6, this.columns.getItem(x).Width, true, true);

                    g.DrawLine$3(defaultBorderColor, widthSoFar, 25, widthSoFar, this.Canvas.height);
                }
                for (var y = this.ScrollRowIndex; y < this.rows.Count; y = (y + 1) | 0) {
                    if (this.rows.getItem(y) == null) {
                        this.rows.setItem(y, new ExpressCraft.SheetRow(this));
                    }
                    var pre1 = heightSoFar;
                    heightSoFar += this.rows.getItem(y).Height;

                    g.FillRectangle$3(columnHeader, 0, pre1, 45, this.rows.getItem(y).Height);
                    g.DrawRectangle$3(columnBorderColor, 0, pre1, 45, this.rows.getItem(y).Height);

                    g.DrawString$4(Bridge.toString((((y + 1) | 0))), new ExpressCraft.Font("Arial 10pt"), new ExpressCraft.SolidBrush(ExpressCraft.Color.Black.$clone()), 23, pre1 + (this.rows.getItem(y).Height / 2) - 6, 45, true, true);

                    g.DrawLine$3(defaultBorderColor, 45, heightSoFar, this.Canvas.width, heightSoFar);
                }

                widthSoFar = 45;
                heightSoFar = 25;

                for (var x1 = this.ScrollColumnIndex; x1 < this.columns.Count; x1 = (x1 + 1) | 0) {
                    heightSoFar = 25;
                    if (this.columns.getItem(x1) == null) {
                        this.columns.setItem(x1, new ExpressCraft.SheetColumn(this));
                    }

                    var columnWidth = this.columns.getItem(x1).Width;
                    for (var y1 = this.ScrollRowIndex; y1 < this.rows.Count; y1 = (y1 + 1) | 0) {
                        var cell = this.GetCell(x1, y1);


                        var value = cell.Value;

                        if (value != null) {
                            var displayValue = System.Convert.toString(value);
                            if (!System.String.isNullOrWhiteSpace(displayValue)) {
                                g.DrawString$4(displayValue, new ExpressCraft.Font("Arial 10pt"), new ExpressCraft.SolidBrush(ExpressCraft.Color.Black.$clone()), widthSoFar + 2, heightSoFar + 2, columnWidth - 4);
                            }
                        }

                        if (this.rows.getItem(y1) == null) {
                            this.rows.setItem(y1, new ExpressCraft.SheetRow(this));
                        }

                        heightSoFar += this.rows.getItem(y1).Height;
                        if (heightSoFar > this.Canvas.height) {
                            break;
                        }
                    }
                    widthSoFar += columnWidth;
                    if (widthSoFar > this.Canvas.width) {
                        break;
                    }
                }
            }
        }
    });

    Bridge.define("ExpressCraft.SimpleDialogButton", {
        inherits: [ExpressCraft.SimpleButton],
        ctors: {
            ctor: function (parentForm, dialogResult) {
                if (dialogResult === void 0) { dialogResult = 0; }

                this.$initialize();
                ExpressCraft.SimpleButton.ctor.call(this);
                this.ParentForm = parentForm;
                this.DialogResult = dialogResult;

                ExpressCraft.Helper.SetSize(this, 75, 23);
            }
        }
    });

    Bridge.define("Xamarin.Forms.ContentPage", {
        inherits: [ExpressCraft.Form],
        statics: {
            ctors: {
                ctor: function () {

                }
            }
        },
        methods: {
            InitializeComponent: function () {
                ExpressCraft.xaml.XAMLDefinitions.Load(Bridge.Reflection.getTypeAssembly(Bridge.getType(this)));
                ExpressCraft.xaml.XAMLDefinitions.BuildUI(this);
            }
        }
    });

    Bridge.define("ExpressCraft.CalcForm", {
        inherits: [ExpressCraft.FormPopup],
        fields: {
            InputControl: null,
            CalControl: null,
            ClickedClose: false
        },
        ctors: {
            init: function () {
                this.ClickedClose = false;
            },
            ctor: function (inputControl) {
                this.$initialize();
                ExpressCraft.FormPopup.ctor.call(this);
                if (inputControl.Content.parentElement != null && inputControl.Content.parentElement.parentElement != null && inputControl.Content.parentElement.parentElement.parentElement != null) {
                    this.PreviousScrollTop = inputControl.Content.parentElement.parentElement.parentElement.scrollTop;
                    this.ParentContainer = inputControl.Content.parentElement.parentElement.parentElement;
                }

                this.InputControl = inputControl;
                this.CalControl = new ExpressCraft.CalculatorControl(this.InputControl.GetNumberValue(), true);
                ExpressCraft.Helper.SetBoundsFull(this.CalControl);
                this.CalControl.OnClose = Bridge.fn.bind(this, function () {
                    this.ClickedClose = true;
                    this.Close();
                });

                this.CalControl.OnEqual = Bridge.fn.bind(this, function (value) {
                    this.InputControl.Text = value.toString();
                });

                this.AppendChild(this.CalControl);

                this.Size = new ExpressCraft.Vector2.$ctor1(182, 157);
            }
        },
        methods: {
            OnClosed: function () {
                ExpressCraft.FormPopup.prototype.OnClosed.call(this);
                this.InputControl.ValidateData();
                if (!ExpressCraft.Helper.NotDesktop) {
                    this.InputControl.Focus();
                } else {
                    this.InputControl.Scroll(Bridge.Int.clip32(this.PreviousScrollTop), this.ParentContainer);
                }
            },
            OnClosing: function () {
                ExpressCraft.FormPopup.prototype.OnClosing.call(this);

                if (!this.ClickedClose) {
                    this.CalControl.DontRefresh = true;
                    this.CalControl.AddOperator(this.CalControl.btnEq);
                }
            },
            OnShowed: function () {
                ExpressCraft.FormPopup.prototype.OnShowed.call(this);
                if (this.InputControl == null) {
                    this.Close();
                }

                this.CalControl.btnEq.Focus();
            }
        }
    });

    Bridge.define("ExpressCraft.DataRowEditForm", {
        inherits: [ExpressCraft.DialogForm],
        fields: {
            LiveData: false,
            GridView: null,
            DataRow: null,
            Panel: null,
            prevData: null
        },
        ctors: {
            ctor: function (_dataRow, _gridView, _liveData) {
                if (_liveData === void 0) { _liveData = true; }

                this.$initialize();
                ExpressCraft.DialogForm.ctor.call(this);
                this.prevData = System.Array.init(_dataRow.ParentTable.ColumnCount, null, System.Object);

                for (var i = 0; i < _dataRow.ParentTable.ColumnCount; i = (i + 1) | 0) {
                    this.prevData[System.Array.index(i, this.prevData)] = _dataRow.getItem(i);
                }

                this.DataRow = _dataRow;
                this.GridView = _gridView;
                this.LiveData = _liveData;

                this.Text = "Row Edit Form";
                this.Width = "400px";
                this.Height = "600px";
                this.Body.style.overflowY = "auto";

                this.Panel = ExpressCraft.Control.Div();
                this.Panel.style.overflowY = "auto";
                ExpressCraft.Helper.SetBounds$1(this.Panel, "0", "0", "100%", "(100% - 60px)");
                this.Body.style.backgroundColor = "white";

                this._buttonCollection = Bridge.fn.bind(this, function (_o1) {
                        var $t;
                        _o1.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.Cancel), $t.Text = "Cancel", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 85px)", "(100% - 35px)"), $t.ItemClick = Bridge.fn.bind(this, function (ev) {
                            for (var i1 = 0; i1 < this.DataRow.ParentTable.ColumnCount; i1 = (i1 + 1) | 0) {
                                _dataRow.setItem(i1, this.prevData[System.Array.index(i1, this.prevData)]);
                            }

                            this.GridView.RenderGrid();
                        }), $t));
                        _o1.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.OK), $t.Text = "OK", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 170px)", "(100% - 35px)"), $t));
                        return _o1;
                    })(new (System.Collections.Generic.List$1(ExpressCraft.SimpleDialogButton)).ctor());

                ExpressCraft.Helper.AppendChildrenTabIndex(this.ButtonSection, this._buttonCollection.ToArray());

                ExpressCraft.Helper.AppendChild$2(this.Body, this.Panel);

                this.AllowSizeChange = false;
            }
        },
        methods: {
            OnClosed: function () {
                this.GridView.DataSource.EndDataUpdate();

                ExpressCraft.DialogForm.prototype.OnClosed.call(this);
            },
            OnShowed: function () {
                ExpressCraft.DialogForm.prototype.OnShowed.call(this);

                if (this.DataRow == null) {
                    this.DialogResult = ExpressCraft.DialogResultEnum.Cancel;
                    this.Close();
                } else {
                    this.GridView.DataSource.BeginDataUpdate();

                    this.GenerateForm();
                }
            },
            GenerateForm: function () {
                ExpressCraft.Helper.Empty(this.Panel);
                var length = this.GridView.ColumnCount();

                var col = 0;
                var height = 25;

                var defaultHeight = 54;
                var defaultHeight2X = Bridge.Int.mul(defaultHeight, 3);
                var incrementHeight = defaultHeight;

                var eachWidth = 113;

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    incrementHeight = defaultHeight;
                    var grCol = this.GridView.GetColumn(i);

                    if (!grCol.AllowEdit) {
                        continue;
                    }

                    var dtCol = grCol.Column;

                    var dtIndex = { v : grCol.GetDataColumnIndex() };

                    if (Bridge.referenceEquals(grCol.Column.FieldName.toLowerCase(), "cntr")) {
                        grCol.ReadOnly = true;
                    }

                    switch (dtCol.DataType) {
                        case ExpressCraft.DataType.DateTime: 
                            var lbldate = ExpressCraft.Control.Label(grCol.Caption, ((25 + (((Bridge.Int.mul(col, eachWidth) + (Bridge.Int.mul(col, 3))) | 0))) | 0), height);
                            var inputDate = { v : new ExpressCraft.TextInput.$ctor2("date") };
                            ExpressCraft.Helper.SetBounds(inputDate.v, ((25 + (((Bridge.Int.mul(col, eachWidth) + (Bridge.Int.mul(col, 3))) | 0))) | 0), ((((height + 16) | 0) + 3) | 0), eachWidth, 24);
                            inputDate.v.SetDate(System.Convert.toString(this.DataRow.getItem(dtIndex.v)));
                            inputDate.v.Readonly = grCol.ReadOnly;
                            if (!grCol.ReadOnly) {
                                inputDate.v.OnTextChanged = (function ($me, dtIndex, inputDate) {
                                    return Bridge.fn.bind($me, function (ev) {
                                        this.DataRow.setItem(dtIndex.v, inputDate.v.GetDate());
                                        if (this.LiveData) {
                                            this.GridView.RenderGrid();
                                        }
                                    });
                                })(this, dtIndex, inputDate);
                            }
                            ExpressCraft.Helper.AppendChildren$2(this.Panel, [lbldate, ExpressCraft.Control.op_Implicit(inputDate.v)]);
                            break;
                        case ExpressCraft.DataType.Integer: 
                        case ExpressCraft.DataType.Long: 
                        case ExpressCraft.DataType.Float: 
                        case ExpressCraft.DataType.Double: 
                        case ExpressCraft.DataType.Decimal: 
                        case ExpressCraft.DataType.Bool: 
                        case ExpressCraft.DataType.Byte: 
                        case ExpressCraft.DataType.Short: 
                            var lblnmb = ExpressCraft.Control.Label(grCol.Caption, ((25 + (((Bridge.Int.mul(col, eachWidth) + (Bridge.Int.mul(col, 3))) | 0))) | 0), height);
                            var inputNum = { };
                            if (Bridge.is(grCol.CellDisplay, ExpressCraft.GridViewCellDisplayCheckBox)) {
                                inputNum.v = new ExpressCraft.TextInput.$ctor2("checkbox");
                                ExpressCraft.Helper.SetChecked(inputNum.v, this.DataRow.getItem(dtIndex.v));
                            } else {
                                inputNum.v = new ExpressCraft.TextInput.$ctor2("number");
                                inputNum.v.Text = System.Convert.toString(this.DataRow.getItem(dtIndex.v));
                            }
                            ExpressCraft.Helper.SetBounds(inputNum.v, ((25 + (((Bridge.Int.mul(col, eachWidth) + (Bridge.Int.mul(col, 3))) | 0))) | 0), ((((height + 16) | 0) + 3) | 0), eachWidth, 24);
                            inputNum.v.Readonly = grCol.ReadOnly;
                            if (!grCol.ReadOnly) {
                                inputNum.v.OnTextChanged = (function ($me, inputNum, dtIndex) {
                                    return Bridge.fn.bind($me, function (ev) {
                                        if (Bridge.referenceEquals(inputNum.v.Type, "checkbox")) {
                                            this.DataRow.setItem(dtIndex.v, Bridge.box(ExpressCraft.Helper.IsTrue(inputNum.v.Text) === 1, System.Boolean, System.Boolean.toString));
                                        } else {
                                            this.DataRow.setItem(dtIndex.v, inputNum.v.Text);
                                        }
                                        if (this.LiveData) {
                                            this.GridView.RenderGrid();
                                        }
                                    });
                                })(this, inputNum, dtIndex);
                            }
                            ExpressCraft.Helper.AppendChildren$2(this.Panel, [lblnmb, ExpressCraft.Control.op_Implicit(inputNum.v)]);
                            break;
                        default: 
                        case ExpressCraft.DataType.Object: 
                        case ExpressCraft.DataType.String: 
                            var lblstr = ExpressCraft.Control.Label(grCol.Caption, ((25 + (((Bridge.Int.mul(col, eachWidth) + (Bridge.Int.mul(col, 3))) | 0))) | 0), height);
                            var inputstr = { v : new ExpressCraft.TextInput.$ctor2("text") };
                            ExpressCraft.Helper.SetBounds(inputstr.v, ((25 + (((Bridge.Int.mul(col, eachWidth) + (Bridge.Int.mul(col, 3))) | 0))) | 0), ((((height + 16) | 0) + 3) | 0), eachWidth, 24);
                            inputstr.v.Text = System.Convert.toString(this.DataRow.getItem(dtIndex.v));
                            inputstr.v.Readonly = grCol.ReadOnly;
                            if (!grCol.ReadOnly) {
                                inputstr.v.OnTextChanged = (function ($me, dtIndex, inputstr) {
                                    return Bridge.fn.bind($me, function (ev) {
                                        this.DataRow.setItem(dtIndex.v, inputstr.v.Text);

                                        if (this.LiveData) {
                                            this.GridView.RenderGrid();
                                        }
                                    });
                                })(this, dtIndex, inputstr);
                            }
                            ExpressCraft.Helper.AppendChildren$2(this.Panel, [lblstr, ExpressCraft.Control.op_Implicit(inputstr.v)]);
                            break;
                    }
                    if (col === 2) {
                        height = (height + (((incrementHeight + 3) | 0))) | 0;
                        col = 0;
                    } else {
                        col = (col + 1) | 0;
                    }
                }
            }
        }
    });

    Bridge.define("ExpressCraft.DateForm", {
        inherits: [ExpressCraft.FormPopup],
        fields: {
            InputControl: null,
            DateControl: null,
            ClickedClose: false
        },
        ctors: {
            init: function () {
                this.ClickedClose = false;
            },
            ctor: function (inputControl) {
                this.$initialize();
                ExpressCraft.FormPopup.ctor.call(this);
                if (inputControl.Content.parentElement != null && inputControl.Content.parentElement.parentElement != null && inputControl.Content.parentElement.parentElement.parentElement != null) {
                    this.PreviousScrollTop = inputControl.Content.parentElement.parentElement.parentElement.scrollTop;
                    this.ParentContainer = inputControl.Content.parentElement.parentElement.parentElement;
                }

                this.Size = new ExpressCraft.Vector2.$ctor1(232, 247);

                this.InputControl = inputControl;
                this.DateControl = new ExpressCraft.DateControl(inputControl.GetDateTime());
                ExpressCraft.Helper.SetBoundsFull(this.DateControl);

                this.DateControl.OnDateChanged = function (date) {
                    if (Bridge.equals(date, System.DateTime.getMinValue())) {
                        inputControl.SetDate("");
                    } else {
                        inputControl.SetDate(System.String.format("{0:" + (inputControl.DisplayFormat || "") + "}", [Bridge.box(date, System.DateTime, System.DateTime.format)]));
                    }
                };

                this.DateControl.OnRequestToClose = Bridge.fn.bind(this, function () {
                    this.Close();
                });

                this.Content.onkeydown = Bridge.fn.cacheBind(this.DateControl, this.DateControl.BlockTabEvent);

                this.AppendChild(this.DateControl);
            }
        },
        methods: {
            OnClosed: function () {
                ExpressCraft.FormPopup.prototype.OnClosed.call(this);
                this.InputControl.ValidateData();
                if (!ExpressCraft.Helper.NotDesktop) {
                    this.InputControl.Focus();
                } else {
                    this.InputControl.Scroll(Bridge.Int.clip32(this.PreviousScrollTop), this.ParentContainer);
                }
            },
            OnShowed: function () {
                ExpressCraft.FormPopup.prototype.OnShowed.call(this);
                if (this.InputControl == null) {
                    this.Close();
                }

                this.DateControl.btnToday.Focus();
            }
        }
    });

    Bridge.define("ExpressCraft.DateInput", {
        inherits: [ExpressCraft.TextInputDropDown],
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.TextInputDropDown.ctor.call(this, "date");
                this.UsedEdit.OnKeyDown = Bridge.fn.bind(this, function (sender, ev) {
                    if (ev.keyCode === ExpressCraft.KeyCodes.Enter) {
                        this.UsedEdit.Content.blur();
                    }
                });
            }
        },
        methods: {
            OnDropDownClicked: function (mouseEvent) {
                if (!this.Readonly && this.Enabled) {
                    (new ExpressCraft.DateForm(this.UsedEdit)).ShowPopup(ExpressCraft.FormPopup.GetPopupDefaultLocation(this.DropDownButton, true));
                }
            }
        }
    });

    Bridge.define("ExpressCraft.InputDialogBase", {
        inherits: [ExpressCraft.DialogForm],
        fields: {
            QuestionSize: 0,
            Wrapper: null,
            QuestionDiv: null,
            AnswerDiv: null,
            ImageDiv: null
        },
        ctors: {
            ctor: function (title, width, question) {
                this.$initialize();
                ExpressCraft.DialogForm.ctor.call(this, title);
                this.Width = ExpressCraft.Helper.ToPx(Bridge.box(width, System.Int32));
                this.Wrapper = ExpressCraft.Control.Div();
                this.QuestionDiv = ExpressCraft.Control.Div();
                this.AnswerDiv = ExpressCraft.Control.Div();
                this._buttonCollection = Bridge.fn.bind(this, function (_o1) {
                        var $t;
                        _o1.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.OK), $t.Text = "Accept", $t));
                        _o1.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.Cancel), $t.Text = "Cancel", $t));
                        return _o1;
                    })(new (System.Collections.Generic.List$1(ExpressCraft.SimpleDialogButton)).ctor());

                this.Wrapper.style.overflowY = "hidden";
                ExpressCraft.Helper.SetBounds$1(this.Wrapper, "0px", "0px", "100%", "(100% - 60px)");
                this.QuestionDiv.style.position = "relative";
                this.QuestionDiv.style.height = "auto";
                this.QuestionDiv.style.marginLeft = "10px";
                this.QuestionDiv.style.marginRight = "10px";
                this.QuestionDiv.style.marginTop = "10px";
                this.AnswerDiv.style.position = "relative";
                this.AnswerDiv.style.height = "auto";
                ExpressCraft.Helper.SetLocation(this._buttonCollection.getItem(0), "(100% - 170px)", "(100% - 35px)");
                ExpressCraft.Helper.SetLocation(this._buttonCollection.getItem(1), "(100% - 85px)", "(100% - 35px)");

                var tb = new ExpressCraft.TextBlock(question, ((width - 25) | 0));
                tb.ComputeString();

                if (!tb.ElelemtsOverMax) {
                    width = (((Bridge.Int.clip32(tb.MaxCalculatedWidth) + 65) | 0) + 37) | 0;
                    if (width < ExpressCraft.Settings.MessageFormMinimumWidthInPx) {
                        width = ExpressCraft.Settings.MessageFormMinimumWidthInPx;
                    }
                }
                if (tb.ComputedHeight > ExpressCraft.Settings.MessageFormTextMaximumHeightInPx) {
                    tb.ComputedHeight = ExpressCraft.Settings.MessageFormTextMaximumHeightInPx;
                }
                if (tb.ComputedHeight < ExpressCraft.Settings.MessageFormTextMinimumHeightInPx) {
                    tb.ComputedHeight = ExpressCraft.Settings.MessageFormTextMinimumHeightInPx;
                }

                this.QuestionDiv.innerHTML = question;
                this.QuestionSize = System.Convert.toInt32(Bridge.box(tb.ComputedHeight, System.Single, System.Single.format, System.Single.getHashCode));
            }
        },
        methods: {
            Create: function (height) {
                ExpressCraft.Helper.AppendChild$2(this.Wrapper, this.QuestionDiv);
                ExpressCraft.Helper.AppendChild$2(this.Wrapper, document.createElement("br"));
                ExpressCraft.Helper.AppendChild$2(this.Wrapper, this.AnswerDiv);
                ExpressCraft.Helper.AppendChild$2(this.Body, this.Wrapper);

                ExpressCraft.Helper.AppendChildrenTabIndex(this.ButtonSection, this._buttonCollection.ToArray());

                this.Height = ExpressCraft.Helper.ToPx(Bridge.box(height, System.Int32));
                this.AllowSizeChange = false;
            }
        }
    });

    Bridge.define("ExpressCraft.MessageBoxForm", {
        inherits: [ExpressCraft.DialogForm],
        statics: {
            fields: {
                snd: null
            },
            methods: {
                Beep: function () {
                    if (!ExpressCraft.Settings.MessageFormBeep) {
                        return;
                    }
                    if (ExpressCraft.MessageBoxForm.snd == null) {
                        ExpressCraft.MessageBoxForm.snd = document.createElement("audio");
                        ExpressCraft.MessageBoxForm.snd.src = ExpressCraft.ResourceManager.GetResourceString("beepSound");
                    }
                    ExpressCraft.MessageBoxForm.snd.play();
                }
            }
        },
        fields: {
            _prompt: null,
            _buttons: 0
        },
        ctors: {
            /**
             * Create a new Message Dialog
             *
             * @instance
             * @public
             * @this ExpressCraft.MessageBoxForm
             * @memberof ExpressCraft.MessageBoxForm
             * @param   {string}                           prompt    The text to be displayed in the message box
             * @param   {ExpressCraft.MessageBoxLayout}    ui        The UI settings to be applied to the form
             * @return  {void}
             */
            ctor: function (prompt, ui) {
                ExpressCraft.MessageBoxForm.$ctor2.call(this, prompt, ui, ExpressCraft.MessageBoxButtons.Auto, System.Enum.toString(ExpressCraft.MessageBoxLayout, ui));
            },
            /**
             * Create a new Message Dialog
             *
             * @instance
             * @public
             * @this ExpressCraft.MessageBoxForm
             * @memberof ExpressCraft.MessageBoxForm
             * @param   {string}                           prompt    The text to be displayed in the message box
             * @param   {ExpressCraft.MessageBoxLayout}    ui        The UI settings to be applied to the form
             * @param   {string}                           title     The title of the message box
             * @return  {void}
             */
            $ctor3: function (prompt, ui, title) {
                ExpressCraft.MessageBoxForm.$ctor2.call(this, prompt, ui, ExpressCraft.MessageBoxButtons.Auto, title);
            },
            /**
             * Create a new Message Dialog
             *
             * @instance
             * @public
             * @this ExpressCraft.MessageBoxForm
             * @memberof ExpressCraft.MessageBoxForm
             * @param   {string}                            prompt     The text to be displayed in the message box
             * @param   {ExpressCraft.MessageBoxLayout}     ui         The UI settings to be applied to the form
             * @param   {ExpressCraft.MessageBoxButtons}    buttons    The Type of button to be displayed with this message
             * @return  {void}
             */
            $ctor1: function (prompt, ui, buttons) {
                ExpressCraft.MessageBoxForm.$ctor2.call(this, prompt, ui, buttons, System.Enum.toString(ExpressCraft.MessageBoxLayout, ui));
            },
            /**
             * Create a new Message Dialog
             *
             * @instance
             * @public
             * @this ExpressCraft.MessageBoxForm
             * @memberof ExpressCraft.MessageBoxForm
             * @param   {string}                            prompt     The text to be displayed in the message box
             * @param   {ExpressCraft.MessageBoxLayout}     ui         The UI settings  to be applied to the form
             * @param   {ExpressCraft.MessageBoxButtons}    buttons    The Type of button to be displayed with this message
             * @param   {string}                            title      The title of the message box
             * @return  {void}
             */
            $ctor2: function (prompt, ui, buttons, title) {
                this.$initialize();
                ExpressCraft.DialogForm.ctor.call(this, title);
                var section = ExpressCraft.Control.Div();
                var pic = ExpressCraft.Control.Div$1("image32");
                var textContent = ExpressCraft.Control.Div$1("messag-box-content");
                this._prompt = prompt;
                this._buttons = buttons;

                switch (ui) {
                    case ExpressCraft.MessageBoxLayout.Exclamation: 
                        if (this._buttons === ExpressCraft.MessageBoxButtons.Auto) {
                            this._buttons = ExpressCraft.MessageBoxButtons.Ok;
                        }
                        pic.classList.add("imagewarning");
                        break;
                    case ExpressCraft.MessageBoxLayout.Information: 
                        if (this._buttons === ExpressCraft.MessageBoxButtons.Auto) {
                            this._buttons = ExpressCraft.MessageBoxButtons.Ok;
                        }
                        pic.classList.add("imageinfo");
                        break;
                    case ExpressCraft.MessageBoxLayout.Question: 
                        if (this._buttons === ExpressCraft.MessageBoxButtons.Auto) {
                            this._buttons = ExpressCraft.MessageBoxButtons.YesNo;
                        }
                        pic.classList.add("imageindex");
                        break;
                    case ExpressCraft.MessageBoxLayout.Error: 
                        if (this._buttons === ExpressCraft.MessageBoxButtons.Auto) {
                            this._buttons = ExpressCraft.MessageBoxButtons.AbortSendCancel;
                        }
                        pic.classList.add("imageerror");
                        break;
                    default: 
                        throw new System.ArgumentOutOfRangeException.$ctor3("ui", Bridge.box(ui, ExpressCraft.MessageBoxLayout, System.Enum.toStringFn(ExpressCraft.MessageBoxLayout)), null);
                }
                var heightCalc = ExpressCraft.Helper.NotDesktop ? "(100% - 60px)" : "(100% - 35px)";
                switch (this._buttons) {
                    case ExpressCraft.MessageBoxButtons.Ok: 
                        this._buttonCollection = Bridge.fn.bind(this, function (_o1) {
                                var $t;
                                _o1.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.OK), $t.Text = "Ok", $t.Location = new ExpressCraft.Vector2.$ctor1("(50% - 37.5px)", heightCalc), $t));
                                return _o1;
                            })(new (System.Collections.Generic.List$1(ExpressCraft.SimpleDialogButton)).ctor());
                        break;
                    case ExpressCraft.MessageBoxButtons.YesNo: 
                        this._buttonCollection = Bridge.fn.bind(this, function (_o2) {
                                var $t;
                                _o2.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.No), $t.Text = "No", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 85px)", heightCalc), $t));
                                _o2.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.Yes), $t.Text = "Yes", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 170px)", heightCalc), $t));
                                return _o2;
                            })(new (System.Collections.Generic.List$1(ExpressCraft.SimpleDialogButton)).ctor());
                        break;
                    case ExpressCraft.MessageBoxButtons.YesNoCancel: 
                        this._buttonCollection = Bridge.fn.bind(this, function (_o3) {
                                var $t;
                                _o3.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.Cancel), $t.Text = "Cancel", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 85px)", heightCalc), $t));
                                _o3.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.No), $t.Text = "No", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 170px)", heightCalc), $t));
                                _o3.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.Yes), $t.Text = "Yes", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 255px)", heightCalc), $t));
                                return _o3;
                            })(new (System.Collections.Generic.List$1(ExpressCraft.SimpleDialogButton)).ctor());
                        break;
                    case ExpressCraft.MessageBoxButtons.AbortSendCancel: 
                        this._buttonCollection = Bridge.fn.bind(this, function (_o4) {
                                var $t;
                                _o4.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.Cancel), $t.Text = "Cancel", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 85px)", heightCalc), $t));
                                _o4.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.Send), $t.Text = "Send", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 170px)", heightCalc), $t.ItemClick = Bridge.fn.bind(this, function (ev) {
                                    if (!Bridge.staticEquals(ExpressCraft.Settings.OnSendError, null)) {
                                        ExpressCraft.Settings.OnSendError(this._prompt);
                                    }
                                }), $t));
                                _o4.add(($t = new ExpressCraft.SimpleDialogButton(this, ExpressCraft.DialogResultEnum.Abort), $t.Text = "Abort", $t.Location = new ExpressCraft.Vector2.$ctor1("(100% - 255px)", heightCalc), $t.ItemClick = function (ev) {
                                    var pre = ExpressCraft.Settings.AllowCloseWithoutQuestion;

                                    ExpressCraft.Settings.AllowCloseWithoutQuestion = false;
                                    ExpressCraft.Application.Close();
                                    ExpressCraft.Settings.AllowCloseWithoutQuestion = pre;
                                }, $t));
                                return _o4;
                            })(new (System.Collections.Generic.List$1(ExpressCraft.SimpleDialogButton)).ctor());
                        break;
                    default: 
                        throw new System.ArgumentOutOfRangeException.ctor();
                }
                var tb = null;

                var width = 480;

                if (!ExpressCraft.Helper.NotDesktop) {
                    tb = new ExpressCraft.TextBlock(prompt, 455);
                    tb.ComputeString();
                    if (this._buttonCollection.Count > 2) {
                        if (width < 320) {
                            width = 320;
                        }
                    }
                    if (!tb.ElelemtsOverMax) {
                        width = (((Bridge.Int.clip32(tb.MaxCalculatedWidth) + 65) | 0) + 37) | 0;
                        if (width < ExpressCraft.Settings.MessageFormMinimumWidthInPx) {
                            width = ExpressCraft.Settings.MessageFormMinimumWidthInPx;
                        }
                    }
                } else {
                    var count = this._buttonCollection.Count;
                    for (var i = 0; i < count; i = (i + 1) | 0) {
                        var but = this._buttonCollection.getItem(i);
                        but.Height = 45;
                        but.Style.borderRadius = "4px";
                        but.Style.fontSize = "14px";
                        if (but.DialogResult === ExpressCraft.DialogResultEnum.OK || but.DialogResult === ExpressCraft.DialogResultEnum.Yes) {
                            but.ClassList.add("primary");
                            but.Style.color = "white";
                            but.Style.border = "0";
                        }
                    }
                }

                textContent.innerHTML = prompt;

                section.style.overflowY = "auto";
                section.style.height = "100%";
                section.style.maxHeight = ExpressCraft.Helper.ToPx(Bridge.box(ExpressCraft.Settings.MessageFormTextMaximumHeightInPx, System.Int32));
                section.appendChild(textContent);
                section.style.top = "32px";
                section.style.width = "90%";

                ExpressCraft.Helper.AppendChildren$2(this.Body, [pic, section]);

                var array = System.Array.init(this._buttonCollection.Count, null, ExpressCraft.Control);
                for (var i1 = 0; i1 < array.length; i1 = (i1 + 1) | 0) {
                    array[System.Array.index(i1, array)] = this._buttonCollection.getItem(i1);
                }

                ExpressCraft.Helper.AppendChildrenTabIndex(this.ButtonSection, array);
                if (ExpressCraft.Helper.NotDesktop) {
                    section.style.textAlign = "center";
                    section.style.lineHeight = "100%";

                    this.WindowState = ExpressCraft.WindowStateType.Maximized;
                    this.Heading.style.display = "none";
                    ExpressCraft.Helper.SetLocation$2(this.Body, 0, 0);
                    ExpressCraft.Helper.SetSize$1(this.Body, "100%", "100%");
                    this.StartPosition = ExpressCraft.FormStartPosition.Manual;
                    this.AllowSizeChange = false;
                    this.AllowMoveChange = false;

                    this.ShowMaximize = false;
                    this.ShowMinimize = false;
                    this.ShowClose = false;

                    textContent.style.display = "inlineBlock";
                    textContent.style.fontSize = "14px";
                    textContent.style.verticalAlign = "middle";
                    textContent.style.lineHeight = "normal";
                } else {
                    if (tb.ComputedHeight > ExpressCraft.Settings.MessageFormTextMaximumHeightInPx) {
                        tb.ComputedHeight = ExpressCraft.Settings.MessageFormTextMaximumHeightInPx;
                    }
                    if (tb.ComputedHeight < ExpressCraft.Settings.MessageFormTextMinimumHeightInPx) {
                        tb.ComputedHeight = ExpressCraft.Settings.MessageFormTextMinimumHeightInPx;
                    }

                    this.Height = System.Single.format(tb.ComputedHeight + 77 + 29 + 32) + "px";
                    this.Width = ExpressCraft.Helper.ToPx(Bridge.box(width, System.Int32));
                }

                this.AllowSizeChange = false;
            }
        },
        methods: {
            OnShowed: function () {
                ExpressCraft.MessageBoxForm.Beep();

                ExpressCraft.DialogForm.prototype.OnShowed.call(this);
                this._buttonCollection.getItem(0).Content.focus();
            }
        }
    });

    Bridge.define("ExpressCraft.NumberInput", {
        inherits: [ExpressCraft.TextInputDropDown],
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.TextInputDropDown.ctor.call(this, "number");
                this.UsedEdit.SetAttribute("step", "any");
            }
        },
        methods: {
            OnDropDownClicked: function (mouseEvent) {
                if (!this.Readonly && this.Enabled) {
                    var calcEdit = new ExpressCraft.CalcForm(this.UsedEdit);
                    calcEdit.ShowPopup(ExpressCraft.FormPopup.GetPopupDefaultLocation(this.DropDownButton, true));
                    calcEdit.OnFormClosed = Bridge.fn.bind(this, function () {
                        this.ValidateData();
                    });
                }

            }
        }
    });

    Bridge.define("ExpressCraft.SearchInput", {
        inherits: [ExpressCraft.TextInputDropDown],
        fields: {
            EditValue: null,
            DisplayMember: null,
            ValueMember: null,
            FocusedChangeCloseForm: false,
            OnSearch: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ExpressCraft.TextInputDropDown.ctor.call(this, "text");
                this.UsedEdit.OnKeyDown = Bridge.fn.bind(this, function (obj, ev) {
                    if (ev.keyCode === 13 || ev.keyCode === 40) {
                        this.OnDropDownClicked(new MouseEvent("onmousedown"));
                    }
                });
                this.UsedEdit.Content.onmousedown = Bridge.fn.bind(this, function (ev) {
                    this.OnDropDownClicked(new MouseEvent("onmousedown"));
                });
            }
        },
        methods: {
            SetValues: function (editValue, text) {
                this.Text = text;
                this.EditValue = editValue;
            },
            ClearOnOpen: function () {
                return false;
            },
            OnRequestSearch: function (searchValue, grid) {
                if (!Bridge.staticEquals(this.OnSearch, null)) {
                    this.OnSearch(searchValue, grid);
                }
            },
            SearchOnLoad: function () {
                return false;
            },
            OnAcceptResult: function (value) {
                if (value == null) {
                    this.EditValue = null;
                    this.Text = "";
                } else {
                    if (!Bridge.referenceEquals(this.ValueMember, "")) {
                        this.EditValue = value.GetValue$1(this.ValueMember);
                    }
                    if (this.DisplayMember != null) {
                        this.Text = (System.String.concat(value.GetValue$1(this.DisplayMember), ""));
                    }
                }
            },
            OnRequestNew: function (grid) { },
            OnClosed: function (value) { },
            OnDropDownClicked: function (mouseEvent) {
                if (!this.Readonly && this.Enabled) {
                    (new ExpressCraft.SearchLookupForm(this)).ShowPopup(ExpressCraft.FormPopup.GetPopupDefaultLocation(this.DropDownButton, true));
                }
            }
        }
    });

    Bridge.define("ExpressCraft.SearchLookupForm", {
        inherits: [ExpressCraft.FormPopup],
        fields: {
            SearchInput: null,
            FocusedRow: null,
            View: null,
            SearchEdit: null,
            btnSearch: null,
            btnClose: null,
            btnNew: null,
            btnUse: null,
            btnClear: null
        },
        ctors: {
            ctor: function (searchInput) {
                var $t;
                this.$initialize();
                ExpressCraft.FormPopup.ctor.call(this);
                if (searchInput.Content.parentElement != null && searchInput.Content.parentElement.parentElement != null) {
                    this.PreviousScrollTop = searchInput.Content.parentElement.parentElement.scrollTop;
                    this.ParentContainer = searchInput.Content.parentElement.parentElement;
                }
                var x = searchInput.Content.getBoundingClientRect();

                this.MinHeight = 100;
                this.MinWidth = 150;

                var wid = searchInput.GetDropdownWidth();
                if (wid < 150) {
                    wid = 150;
                }

                this.Size = new ExpressCraft.Vector2.$ctor1(wid, 250);

                this.AllowSizeChange = true;

                this.SearchInput = searchInput;

                var frag = document.createDocumentFragment();

                ExpressCraft.Helper.AppendChildren$1(frag, [(this.SearchEdit = ($t = new ExpressCraft.TextInput.ctor(), $t.Text = searchInput.ClearOnOpen() ? "" : this.SearchInput.Text, $t.OnFocusDontSelectAll = true, $t.DisableFocusPopup = true, $t.Bounds = new ExpressCraft.Vector4.$ctor1(4, 4, "(100% - 68px)", 20), $t.ToolTip = new ExpressCraft.ToolTip.$ctor1("Help:", "[Enter] to Search, [CTRL] + [Enter] to Search and Use, [ESC] to close"), $t)), (this.btnSearch = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "Search", $t.Bounds = new ExpressCraft.Vector4.$ctor1("(100% - 65px)", 4, 61, 20), $t.ItemClick = Bridge.fn.bind(this, function (s) {
                    this.SearchInput.OnRequestSearch(this.SearchEdit.Text, this.View);
                }), $t)), (this.View = ($t = new ExpressCraft.GridView.$ctor1(true, true), $t.AllowMultiSelection = false, $t.UseEditForm = false, $t.Bounds = new ExpressCraft.Vector4.$ctor1(4, 28, "(100% - 10px)", "(100% - 60px)"), $t)), (this.btnClose = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "&times;", $t.Bounds = new ExpressCraft.Vector4.$ctor1(4, "(100% - 25px)", 20, 20), $t.ItemClick = Bridge.fn.bind(this, function (s) {
                    this.Close();
                }), $t)), (this.btnNew = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "New", $t.Bounds = new ExpressCraft.Vector4.$ctor1("(100% - 65px)", "(100% - 25px)", 61, 20), $t.ItemClick = Bridge.fn.bind(this, function (s) {
                    this.SearchInput.OnRequestNew(this.View);
                }), $t)), (this.btnUse = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "Use", $t.Bounds = new ExpressCraft.Vector4.$ctor1("(100% - 132px)", "(100% - 25px)", 61, 20), $t.ItemClick = Bridge.fn.bind(this, function (s) {
                    if (this.View.FocusedDataHandle === -1 && this.View.RowCount() > 0) {
                        this.View.FocusedDataHandle = 0;
                    }
                    if (this.FocusedRow != null) {
                        this.SearchInput.OnAcceptResult(this.FocusedRow);
                        this.Close();
                    }
                }), $t)), (this.btnClear = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "Clear", $t.Bounds = new ExpressCraft.Vector4.$ctor1("(100% - 199px)", "(100% - 25px)", 61, 20), $t.ItemClick = Bridge.fn.bind(this, function (s) {
                    this.FocusedRow = null;
                    this.SearchInput.OnAcceptResult(this.FocusedRow);
                    this.Close();
                }), $t))]);

                this.btnClose.Style.color = "red";

                if (ExpressCraft.Helper.NotDesktop) {
                    this.SearchEdit.Style.fontSize = "14px";
                    this.SearchEdit.Height = "45px";

                    this.btnSearch.Style.fontSize = "14px";
                    this.btnSearch.Height = 45;

                    this.View.Top = 55;
                    this.View.Height = "(100% - 112px)";

                    this.btnClear.Style.fontSize = "14px";
                    this.btnClear.Height = 45;
                    this.btnClear.Top = "(100% - 51px)";

                    this.btnUse.Style.fontSize = "14px";
                    this.btnUse.Height = 45;
                    this.btnUse.Top = "(100% - 51px)";

                    this.btnNew.Style.fontSize = "14px";
                    this.btnNew.Height = 45;
                    this.btnNew.Top = "(100% - 51px)";

                    this.btnClose.Style.fontSize = "26px";
                    this.btnClose.Style.fontWeight = "bold";
                    this.btnClose.Height = 45;
                    this.btnClose.Width = 61;
                    this.btnClose.Top = "(100% - 51px)";
                }

                this.SearchEdit.OnKeyDown = Bridge.fn.bind(this, function (obj, ev) {
                    if (ev.keyCode === 9) {
                        this.Close();
                        ev.preventDefault();
                    } else if (ev.keyCode === 13) {
                        this.SearchInput.OnRequestSearch(this.SearchEdit.Text, this.View);
                        if (ev.ctrlKey) {
                            this.btnUse.Content.click();
                        }
                        ev.preventDefault();
                    } else if (ev.keyCode === 27) {
                        this.FocusedRow = null;
                        this.Close();
                        ev.preventDefault();
                    }
                });

                this.View.OnFocusedRowChanged = Bridge.fn.bind(this, function (row, col) {
                    if (this.View.FocusedDataHandle > -1) {
                        this.FocusedRow = this.View.DataSource.getItem(this.View.GetDataSourceRow(this.View.FocusedDataHandle));
                    } else {
                        this.FocusedRow = null;
                    }
                    this.SearchInput.OnAcceptResult(this.FocusedRow);

                    if (this.SearchInput.FocusedChangeCloseForm) {
                        this.Close();
                    }
                });

                this.View.OnRowDoubleClick = Bridge.fn.bind(this, function (row) {
                    if (this.View.FocusedDataHandle > -1) {
                        this.FocusedRow = this.View.DataSource.getItem(this.View.GetDataSourceRow(this.View.FocusedDataHandle));
                    } else {
                        this.FocusedRow = null;
                    }
                    this.SearchInput.OnAcceptResult(this.FocusedRow);
                    this.Close();
                });

                ExpressCraft.Helper.AppendChild$2(this.Body, frag);

                this.SearchEdit.OnGotFocus = Bridge.fn.bind(this, function (obj) {
                    if (!System.String.isNullOrWhiteSpace(this.SearchEdit.Text)) {
                        this.SearchEdit.GetInput().selectionStart = (this.SearchEdit.Text.length) >>> 0;
                    }
                });

                this.LinkchildToForm(this.View);
            }
        },
        methods: {
            OnShowed: function () {
                ExpressCraft.FormPopup.prototype.OnShowed.call(this);

                this.SearchEdit.Focus();

                if (this.SearchInput.SearchOnLoad()) {
                    this.btnSearch.Content.click();
                }
            },
            OnClosed: function () {
                ExpressCraft.FormPopup.prototype.OnClosed.call(this);

                this.SearchInput.OnClosed(this.FocusedRow);
                this.SearchInput.ValidateData();
                if (!ExpressCraft.Helper.NotDesktop) {
                    this.SearchInput.GetInput().focus();
                } else {
                    this.SearchInput.Scroll(Bridge.Int.clip32(this.PreviousScrollTop), this.ParentContainer);
                }
            }
        }
    });

    Bridge.define("ExpressCraft.TextForm", {
        inherits: [ExpressCraft.FormPopup],
        fields: {
            ReadInput: null,
            EditInput: null,
            btnDone: null
        },
        ctors: {
            ctor: function (input) {
                var $t;
                this.$initialize();
                ExpressCraft.FormPopup.ctor.call(this);
                if (input.Content.parentElement != null && input.Content.parentElement.parentElement != null) {
                    this.PreviousScrollTop = input.Content.parentElement.parentElement.scrollTop;
                    this.ParentContainer = input.Content.parentElement.parentElement;
                }

                this.WindowState = ExpressCraft.WindowStateType.Maximized;

                this.ReadInput = input;

                if (Bridge.is(this.ReadInput, ExpressCraft.MemoInput)) {
                    this.EditInput = new ExpressCraft.MemoInput();
                } else {
                    this.EditInput = ($t = new ExpressCraft.TextInput.$ctor2(input.Type), $t.DisplayFormat = this.ReadInput.DisplayFormat, $t);
                    this.EditInput.OnKeyDown = Bridge.fn.bind(this, function (s, ev) {
                        if (ev.keyCode === 13) {
                            this.btnDone.Content.click();
                        }
                    });
                }

                this.EditInput.Text = input.Text;
                this.EditInput.Style.fontSize = "14px";

                this.EditInput.DisableFocusPopup = true;
                this.EditInput.Size = new ExpressCraft.Vector2.$ctor1("(100% - 112px)", "100%");
                this.EditInput.Location = new ExpressCraft.Vector2.$ctor1(0, 0);

                this.btnDone = ($t = new ExpressCraft.SimpleButton.ctor(), $t.Text = "&times;", $t.Bounds = new ExpressCraft.Vector4.$ctor1("(100% - 106px)", "(50% - 22.5px)", 100, 45), $t.ItemClick = Bridge.fn.bind(this, function (sender) {
                    this.Close();
                    if (!Bridge.referenceEquals(this.EditInput.GetEditValue(), this.ReadInput.GetEditValue())) {
                        this.ReadInput.Text = this.EditInput.Text;

                        if (this.ReadInput.IsSubmit) {
                            var jQuery2 = jQuery;
                            var e = jQuery2.Event("keypress");
                            e.which = 13;
                            e.keyCode = 13;
                            var obj = jQuery(this.ReadInput.Content);
                            obj.trigger(e);
                        } else if (this.ReadInput.GoNext) {
                            var x = document.querySelectorAll("input, textarea, button");
                            var tabPlus1 = (this.ReadInput.Content.tabIndex + 1) | 0;
                            for (var i = 0; i < x.length; i = (i + 1) | 0) {
                                if (x[i].tabIndex === tabPlus1) {
                                    ExpressCraft.Helper.FocusElement(x[i]);
                                    break;
                                }
                            }
                        }
                    }
                }), $t);

                this.btnDone.Style.borderRadius = "4px";
                this.btnDone.ClassList.add("primary");
                this.btnDone.Style.borderWidth = "0";

                this.btnDone.Text = "&times;";
                this.btnDone.Style.fontSize = "26px";
                this.btnDone.Style.color = "white";
                this.btnDone.Style.fontWeight = "bold";

                this.EditInput.OnTextChanged = Bridge.fn.bind(this, function (sender) {
                    if (Bridge.referenceEquals(this.EditInput.GetEditValue(), this.ReadInput.GetEditValue())) {
                        this.btnDone.Text = "&times;";
                        this.btnDone.Style.fontSize = "26px";
                        this.btnDone.Style.fontWeight = "bold";
                    } else {
                        this.btnDone.Text = this.ReadInput.IsSubmit ? "Submit" : this.ReadInput.GoNext ? "Next" : "Done";
                        this.btnDone.Style.fontSize = "14px";
                        this.btnDone.Style.fontWeight = "";
                    }
                });

                this.AppendChildren([this.EditInput, this.btnDone]);
            }
        },
        methods: {
            OnShowed: function () {
                ExpressCraft.FormPopup.prototype.OnShowed.call(this);

                var dataP = this.ReadInput.GetAttribute("data-placeholder");
                if (!System.String.isNullOrWhiteSpace(dataP)) {
                    this.EditInput.SetAttribute("placeholder", dataP);
                } else {
                    if (!System.String.isNullOrWhiteSpace(this.ReadInput.GetAttribute("placeholder"))) {
                        this.EditInput.SetAttribute("placeholder", this.ReadInput.GetAttribute("placeholder"));
                    }
                }

                this.EditInput.Focus();
            },
            OnClosed: function () {
                this.ReadInput.Scroll(Bridge.Int.clip32(this.PreviousScrollTop), this.ParentContainer);
                this.ReadInput.ValidateData();
                ExpressCraft.FormPopup.prototype.OnClosed.call(this);
            }
        }
    });

    Bridge.define("ExpressCraft.InputDialogCheckbox", {
        inherits: [ExpressCraft.InputDialogBase],
        fields: {
            Result: false
        },
        ctors: {
            /**
             * Creates a Question Dialog with a checkbox
                 The Result Property contains a boolean value of the checkbox state
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogCheckbox
             * @memberof ExpressCraft.InputDialogCheckbox
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @return  {void}
             */
            ctor: function (title, question) {
                ExpressCraft.InputDialogCheckbox.$ctor1.call(this, title, question, 360);
            },
            /**
             * Creates a Question Dialog with a checkbox
                 The Result Property contains a boolean value of the checkbox state
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogCheckbox
             * @memberof ExpressCraft.InputDialogCheckbox
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @param   {number}    size        The width of this dialog. The default size is 360
             * @return  {void}
             */
            $ctor1: function (title, question, size) {
                this.$initialize();
                ExpressCraft.InputDialogBase.ctor.call(this, title, size, question);
                var input = ExpressCraft.Control.Input("inputcontrol", "checkbox");
                input.id = "DialogAnswerBox";
                ExpressCraft.Helper.SetBounds$1(input, "10px", "0px", "90%", "40px");
                input.onchange = Bridge.fn.bind(this, function (ev) {
                    this.Result = input.checked;
                });
                ExpressCraft.Helper.AppendChild$2(this.AnswerDiv, input);
                this.Create(((((((this.QuestionSize + 40) | 0) + 25) | 0) + 78) | 0));
            }
        }
    });

    Bridge.define("ExpressCraft.InputDialogColour", {
        inherits: [ExpressCraft.InputDialogBase],
        fields: {
            Result: null
        },
        ctors: {
            /**
             * Creates a Question Dialog with a colour selector
                 The Result Property contains the HexCode for the selected colour
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogColour
             * @memberof ExpressCraft.InputDialogColour
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @return  {void}
             */
            ctor: function (title, question) {
                ExpressCraft.InputDialogColour.$ctor1.call(this, title, question, 360);
            },
            /**
             * Creates a Question Dialog with a colour selector
                 The Result Property contains the HexCode for the selected colour
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogColour
             * @memberof ExpressCraft.InputDialogColour
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @param   {number}    size        The width of this dialog. The default size is 360
             * @return  {void}
             */
            $ctor1: function (title, question, size) {
                this.$initialize();
                ExpressCraft.InputDialogBase.ctor.call(this, title, size, question);
                var input = ExpressCraft.Control.Input("inputcontrol", "color");
                input.id = "DialogAnswerBox";
                ExpressCraft.Helper.SetBounds$1(input, "10px", "0px", "90%", "40px");
                input.onchange = Bridge.fn.bind(this, function (ev) {
                    this.Result = input.value;
                });
                ExpressCraft.Helper.AppendChild$2(this.AnswerDiv, input);
                this.Create(((((((this.QuestionSize + 40) | 0) + 25) | 0) + 78) | 0));
            }
        }
    });

    Bridge.define("ExpressCraft.InputDialogDate", {
        inherits: [ExpressCraft.InputDialogBase],
        fields: {
            Result: null
        },
        ctors: {
            /**
             * Creates a Question Dialog with a Date Selector
                 The Result Property contains the selected Date
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogDate
             * @memberof ExpressCraft.InputDialogDate
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @return  {void}
             */
            ctor: function (title, question) {
                ExpressCraft.InputDialogDate.$ctor1.call(this, title, question, 360);
            },
            /**
             * Creates a Question Dialog with a Date Selector
                 The Result Property contains the selected Date
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogDate
             * @memberof ExpressCraft.InputDialogDate
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @param   {number}    size        The width of this dialog. The default size is 360
             * @return  {void}
             */
            $ctor1: function (title, question, size) {
                this.$initialize();
                ExpressCraft.InputDialogBase.ctor.call(this, title, size, question);
                var input = ExpressCraft.Control.Input("inputcontrol", "date");
                input.id = "DialogAnswerBox";
                ExpressCraft.Helper.SetBounds$1(input, "10px", "0px", "90%", "auto");
                input.onchange = Bridge.fn.bind(this, function (ev) {
                    this.Result = input.value;
                });
                ExpressCraft.Helper.AppendChild$2(this.AnswerDiv, input);
                this.Create(((((((this.QuestionSize + 25) | 0) + 25) | 0) + 78) | 0));
            }
        }
    });

    Bridge.define("ExpressCraft.InputDialogDateTimeLocal", {
        inherits: [ExpressCraft.InputDialogBase],
        fields: {
            Result: null
        },
        ctors: {
            init: function () {
                this.Result = System.DateTime.getDefaultValue();
            },
            /**
             * Creates a Question Dialog with a Date Selector
                 The Result Property contains the selected Date
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogDateTimeLocal
             * @memberof ExpressCraft.InputDialogDateTimeLocal
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @return  {void}
             */
            ctor: function (title, question) {
                ExpressCraft.InputDialogDateTimeLocal.$ctor1.call(this, title, question, 360);
            },
            /**
             * Creates a Question Dialog with a Date Selector
                 The Result Property contains the selected Date
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogDateTimeLocal
             * @memberof ExpressCraft.InputDialogDateTimeLocal
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @param   {number}    size        The width of this dialog. The default size is 360
             * @return  {void}
             */
            $ctor1: function (title, question, size) {
                this.$initialize();
                ExpressCraft.InputDialogBase.ctor.call(this, title, size, question);
                this.Result = System.DateTime.getNow();
                var input = ExpressCraft.Control.Input("inputcontrol", "dateTimeLocal");
                input.id = "DialogAnswerBox";
                ExpressCraft.Helper.SetBounds$1(input, "10px", "0px", "90%", "auto");
                input.onchange = Bridge.fn.bind(this, function (ev) {
                    this.Result = System.DateTime.parseExact(input.value, "yyyy-MM-ddTHH:mm", System.Globalization.CultureInfo.invariantCulture);
                });
                ExpressCraft.Helper.AppendChild$2(this.AnswerDiv, input);
                this.Create(((((((this.QuestionSize + 25) | 0) + 25) | 0) + 78) | 0));
            }
        }
    });

    Bridge.define("ExpressCraft.InputDialogEmail", {
        inherits: [ExpressCraft.InputDialogBase],
        fields: {
            Result: null
        },
        ctors: {
            /**
             * Creates a Question Dialog with an email input
                 The Result Property contains the Entered email address
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogEmail
             * @memberof ExpressCraft.InputDialogEmail
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @return  {void}
             */
            ctor: function (title, question) {
                ExpressCraft.InputDialogEmail.$ctor1.call(this, title, question, 360);
            },
            /**
             * Creates a Question Dialog with an email input
                 The Result Property contains the Entered email
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogEmail
             * @memberof ExpressCraft.InputDialogEmail
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @param   {number}    size        The width of this dialog. The default size is 360
             * @return  {void}
             */
            $ctor1: function (title, question, size) {
                this.$initialize();
                ExpressCraft.InputDialogBase.ctor.call(this, title, size, question);
                var input = ExpressCraft.Control.Input("inputcontrol", "email");
                input.id = "DialogAnswerBox";
                ExpressCraft.Helper.SetBounds$1(input, "10px", "0px", "90%", "auto");
                input.onchange = Bridge.fn.bind(this, function (ev) {
                    this.Result = input.value;
                });
                ExpressCraft.Helper.AppendChild$2(this.AnswerDiv, input);
                this.Create(((((((this.QuestionSize + 25) | 0) + 25) | 0) + 78) | 0));
            }
        }
    });

    Bridge.define("ExpressCraft.InputDialogMonth", {
        inherits: [ExpressCraft.InputDialogBase],
        fields: {
            Result: null
        },
        ctors: {
            /**
             * Creates a Question Dialog with a Month input
                 The Result Property contains the Entered Month
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogMonth
             * @memberof ExpressCraft.InputDialogMonth
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @return  {void}
             */
            ctor: function (title, question) {
                ExpressCraft.InputDialogMonth.$ctor1.call(this, title, question, 360);
            },
            /**
             * Creates a Question Dialog with a Month input
                 The Result Property contains the Entered Month
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogMonth
             * @memberof ExpressCraft.InputDialogMonth
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @param   {number}    size        The width of this dialog. The default size is 360
             * @return  {void}
             */
            $ctor1: function (title, question, size) {
                this.$initialize();
                ExpressCraft.InputDialogBase.ctor.call(this, title, size, question);
                var input = ExpressCraft.Control.Input("inputcontrol", "month");
                input.id = "DialogAnswerBox";
                ExpressCraft.Helper.SetBounds$1(input, "10px", "0px", "90%", "auto");
                input.onchange = Bridge.fn.bind(this, function (ev) {
                    this.Result = input.value;
                });
                ExpressCraft.Helper.AppendChild$2(this.AnswerDiv, input);
                this.Create(((((((this.QuestionSize + 25) | 0) + 25) | 0) + 78) | 0));
            }
        }
    });

    Bridge.define("ExpressCraft.InputDialogNumber", {
        inherits: [ExpressCraft.InputDialogBase],
        fields: {
            Result: 0
        },
        ctors: {
            /**
             * Creates a Question Dialog with a Number Selector
                 The Result Property contains the selected value
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogNumber
             * @memberof ExpressCraft.InputDialogNumber
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @return  {void}
             */
            ctor: function (title, question) {
                ExpressCraft.InputDialogNumber.$ctor1.call(this, title, question, 360);
            },
            /**
             * Creates a Question Dialog with a Number Selector
                 The Result Property contains the selected value
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogNumber
             * @memberof ExpressCraft.InputDialogNumber
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @param   {number}    size        The width of this dialog. The default size is 360
             * @return  {void}
             */
            $ctor1: function (title, question, size) {
                this.$initialize();
                ExpressCraft.InputDialogBase.ctor.call(this, title, size, question);
                var input = ExpressCraft.Control.Input("inputcontrol", "number");
                input.id = "DialogAnswerBox";
                ExpressCraft.Helper.SetBounds$1(input, "10px", "0px", "90%", "auto");
                input.onchange = Bridge.fn.bind(this, function (ev) {
                    this.Result = input.valueAsNumber;
                });
                ExpressCraft.Helper.AppendChild$2(this.AnswerDiv, input);
                this.Create(((((((this.QuestionSize + 25) | 0) + 25) | 0) + 78) | 0));
            }
        }
    });

    Bridge.define("ExpressCraft.InputDialogText", {
        inherits: [ExpressCraft.InputDialogBase],
        fields: {
            Result: null
        },
        ctors: {
            /**
             * Creates a Question Dialog with a Text input
                 The Result Property contains the Entered Text
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogText
             * @memberof ExpressCraft.InputDialogText
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @return  {void}
             */
            ctor: function (title, question) {
                ExpressCraft.InputDialogText.$ctor1.call(this, title, question, 360);
            },
            /**
             * Creates a Question Dialog with a Text input
                 The Result Property contains the Entered Text
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogText
             * @memberof ExpressCraft.InputDialogText
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @param   {number}    size        The width of this dialog. The default size is 360
             * @return  {void}
             */
            $ctor1: function (title, question, size) {
                this.$initialize();
                ExpressCraft.InputDialogBase.ctor.call(this, title, size, question);
                var input = ExpressCraft.Control.Input("inputcontrol", "text");
                input.id = "DialogAnswerBox";
                ExpressCraft.Helper.SetBounds$1(input, "10px", "0px", "90%", "auto");
                input.onchange = Bridge.fn.bind(this, function (ev) {
                    this.Result = input.value;
                });
                ExpressCraft.Helper.AppendChild$2(this.AnswerDiv, input);
                this.Create(((((((this.QuestionSize + 25) | 0) + 25) | 0) + 78) | 0));
            }
        }
    });

    Bridge.define("ExpressCraft.InputDialogWeek", {
        inherits: [ExpressCraft.InputDialogBase],
        fields: {
            Result: null
        },
        ctors: {
            /**
             * Creates a Question Dialog with a Week input
                 The Result Property contains the Entered week
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogWeek
             * @memberof ExpressCraft.InputDialogWeek
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @return  {void}
             */
            ctor: function (title, question) {
                ExpressCraft.InputDialogWeek.$ctor1.call(this, title, question, 360);
            },
            /**
             * Creates a Question Dialog with a Week input
                 The Result Property contains the Entered Week
             *
             * @instance
             * @public
             * @this ExpressCraft.InputDialogWeek
             * @memberof ExpressCraft.InputDialogWeek
             * @param   {string}    title       The message that will appear in the title bar of the dialog
             * @param   {string}    question    The message that will appear about the input box on the dialog
             * @param   {number}    size        The width of this dialog. The default size is 360
             * @return  {void}
             */
            $ctor1: function (title, question, size) {
                this.$initialize();
                ExpressCraft.InputDialogBase.ctor.call(this, title, size, question);
                var input = ExpressCraft.Control.Input("inputcontrol", "week");
                input.id = "DialogAnswerBox";
                ExpressCraft.Helper.SetBounds$1(input, "10px", "0px", "90%", "auto");
                input.onchange = Bridge.fn.bind(this, function (ev) {
                    this.Result = input.value;
                });
                ExpressCraft.Helper.AppendChild$2(this.AnswerDiv, input);
                this.Create(((((((this.QuestionSize + 25) | 0) + 25) | 0) + 78) | 0));
            }
        }
    });
});
