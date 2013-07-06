function applyCss(el, css) {
    var s = "";
    for (var p in css) s += p + ":" + css[p] + ";";
    el.style.cssText = el.style.cssText + s;
}

body = document.getElementsByTagName("body")[0];
iframe = document.createElement("iframe");
iframe.src = "/add";
iframe.allowTransparency = true;
iframe.height = "100%";
iframe.width = "350px";
applyCss(iframe, {
    "position": "fixed",
    "z-index": 2147483640,
    "-moz-box-sizing": "border-box",
    "box-sizing": "border-box",
    "padding": "15px",
    "border": "0",
    "background": "white",
    "height": "100%",
    "width": "350px",
    "top": "0",
    "right": "0",
    "overflow": "hidden"
});
body.appendChild(iframe);