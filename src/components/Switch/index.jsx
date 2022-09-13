import React from "react";

import "./Switch.css";

function Switch({ name }) {
  return (
    <div className="switchInput">
      <input type="checkbox" id={name} />
      <label for={name}>Toggle</label>
    </div>
  );
}

export default Switch;
