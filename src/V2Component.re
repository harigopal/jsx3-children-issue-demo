let component = ReasonReact.statelessComponent("V2Component");

let make = (~message, _children) => {
  ...component,
  render: _self =>
    <div>
      <div>
        {"Message sent to V2Component: " ++ message |> ReasonReact.string}
      </div>
      <AcceptsChildren.Jsx2 message="Hello from V2Component">
        <div> {"V2: Line 1" |> ReasonReact.string} </div>
        <div> {"V2: Line 2" |> ReasonReact.string} </div>
      </AcceptsChildren.Jsx2>
    </div>,
};