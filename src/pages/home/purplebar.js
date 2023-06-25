import React from "react";

function PurpleBar() {
  return (
    <React.Fragment>
      <div
        className="container  purple darken-4"
        style={{ width: 10, height: 90 }}
      >
        <br />
      </div>
    </React.Fragment>
  );
}

function PurpleBarC(props) {
  return (
    <React.Fragment>
      <div
        className="container  purple darken-4"
        style={{ width: 10, height: props.height }}
      >
        <br />
      </div>
    </React.Fragment>
  );
}

export { PurpleBar, PurpleBarC };
