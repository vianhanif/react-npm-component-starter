import React from "react";
import { render } from "react-dom";
import "./styles.css";

function Demo() {
  return (
    <div>
      <div>
        Hello World
      </div>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
