[@bs.config {jsx: 3}];

[@react.component]
let make = (~message, ~children) =>
  <div>
    <div>
      {
        "This is a message sent to AcceptsChildren: " ++ message |> React.string
      }
    </div>
    children
  </div>;

module Jsx2 = {
  let component = ReasonReact.statelessComponent("AcceptsChildren");

  let make = (~message, children) =>
    ReasonReactCompat.wrapReactForReasonReact(
      make,
      makeProps(~message, ~children=children |> React.array, ()),
      children,
    );
};