import React from "react";

import "./tab.scss";

function Tab({ text, onClick, isActive, value }) {
  const handleButtonClick = () => {
    onClick(value, !isActive);
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={`tab ${isActive ? "tab_active" : ""}`}
    >
      {text}
    </button>
  );
}

export default Tab;
