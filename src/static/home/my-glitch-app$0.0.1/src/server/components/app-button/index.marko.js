$_mod.def("/my-glitch-app$0.0.1/src/server/components/app-button/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.4.26 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.4.26/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        handleButtonClick: function(event, el) {
          console.log("app-button Clicked!");
        },
        onMount: function() {}
      },
    components_helpers = require('/marko$4.4.26/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/my-glitch-app$0.0.1/src/server/components/app-button/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.4.26/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_str = marko_helpers.s;

function render(input, out, __component, component, state) {
  var data = input;

  out.e("INPUT", {
      type: "button",
      value: marko_str(input.buttonTxt),
      id: __component.id
    }, 0, 0, {
      onclick: __component.d("handleButtonClick")
    });
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});