[@bs.config {jsx: 3}];

[@react.component]
let make = (~message) =>
  <div>
    <div> {"Message sent to V3Component: " ++ message |> React.string} </div>
    <AcceptsChildren message="Hello from V2Component">
      <div> {"V3: Line 1" |> React.string} </div>
      <div> {"V3: Line 2" |> React.string} </div>
    </AcceptsChildren>
  </div>;

module Jsx2 = {
  let component = ReasonReact.statelessComponent("V3Component");

  let make = (~message, children) =>
    ReasonReactCompat.wrapReactForReasonReact(
      make,
      makeProps(~message, ()),
      children,
    );
};