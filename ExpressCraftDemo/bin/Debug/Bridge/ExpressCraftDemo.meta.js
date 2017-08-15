Bridge.assembly("ExpressCraftDemo", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,ExpressCraft,ExpressCraftDemo];
    $m($n[2].frmDialogs, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnShowed","t":8,"sn":"OnShowed","rt":$n[0].Void}]}; });
    $m($n[2].frmEntity, function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnLostFocus","t":8,"sn":"OnLostFocus","rt":$n[0].Void},{"ov":true,"a":2,"n":"OnMenuClick","t":8,"sn":"OnMenuClick","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnShowed","t":8,"sn":"OnShowed","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnShowing","t":8,"sn":"OnShowing","rt":$n[0].Void},{"a":2,"n":"CustomerData","t":4,"rt":$n[1].LayoutContainer,"sn":"CustomerData"},{"a":2,"n":"Pages","t":4,"rt":$n[1].IPages,"sn":"Pages"}]}; });
    $m($n[2].frmHub, function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddColumn","t":8,"pi":[{"n":"data","pt":$n[1].DataType,"ps":0}],"sn":"AddColumn","rt":$n[0].Void,"p":[$n[1].DataType]},{"a":2,"n":"AddRow","t":8,"sn":"AddRow","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnShowed","t":8,"sn":"OnShowed","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnShowing","t":8,"sn":"OnShowing","rt":$n[0].Void},{"a":2,"n":"Pages","t":4,"rt":$n[1].IPages,"sn":"Pages"},{"a":2,"n":"View","t":4,"rt":$n[1].GridView,"sn":"View"},{"a":2,"n":"hideSplitter","t":4,"rt":$n[1].SplitHideControlContainer,"sn":"hideSplitter"},{"a":2,"n":"rng","is":true,"t":4,"rt":$n[0].Random,"sn":"rng"}]}; });
    $m($n[2].Program, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void}]}; });
});
