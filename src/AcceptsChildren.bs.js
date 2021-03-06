// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReasonReactCompat = require("reason-react/src/ReasonReactCompat.js");

function AcceptsChildren(Props) {
  var message = Props.message;
  var children = Props.children;
  return React.createElement("div", undefined, React.createElement("div", undefined, "This is a message sent to AcceptsChildren: " + message), children);
}

var component = ReasonReact.statelessComponent("AcceptsChildren");

function make(message, children) {
  return ReasonReactCompat.wrapReactForReasonReact(AcceptsChildren, {
              message: message,
              children: children
            }, children);
}

var Jsx2 = /* module */[
  /* component */component,
  /* make */make
];

var make$1 = AcceptsChildren;

exports.make = make$1;
exports.Jsx2 = Jsx2;
/* component Not a pure module */
