// Compiled using marko@4.4.26 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        handleButtonClick: function(event, el) {
          console.log("app-button Clicked!");
        },
        onMount: function() {}
      },
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/my-glitch-app$0.0.1/src/server/components/app-button/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<input type=\"button\" value=\"" +
    marko_escapeXmlAttr(input.buttonTxt) +
    "\"" +
    marko_attr("id", __component.id) +
    marko_attr("data-marko", {
      onclick: __component.d("handleButtonClick")
    }, false) +
    ">");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "package: ./browser.json",
      {
          type: "require",
          path: "./"
        }
    ]
  };
