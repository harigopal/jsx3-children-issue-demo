// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReasonReactCompat = require("reason-react/src/ReasonReactCompat.js");
var AcceptsChildren$ReactHooksTemplate = require("./AcceptsChildren.bs.js");

function V3Component(Props) {
  var message = Props.message;
  return React.createElement("div", undefined, React.createElement("div", undefined, "Message sent to V3Component: " + message), React.createElement(AcceptsChildren$ReactHooksTemplate.make, {
                  message: "Hello from V2Component",
                  children: null
                }, React.createElement("div", undefined, "V3: Line 1"), React.createElement("div", undefined, "V3: Line 2")));
}

var component = ReasonReact.statelessComponent("V3Component");

function make(message, children) {
  return ReasonReactCompat.wrapReactForReasonReact(V3Component, {
              message: message
            }, children);
}

var Jsx2 = /* module */[
  /* component */component,
  /* make */make
];

var make$1 = V3Component;

exports.make = make$1;
exports.Jsx2 = Jsx2;
/* component Not a pure module */
