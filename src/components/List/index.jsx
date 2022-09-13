import React from "react";

import "./List.css";

function List({ field }) {
  return (
    <>
      {field.map((value, i) => (
        <a key={`${value.name + i}`} href={value.link} className="listValue">
          {value.name}
        </a>
      ))}
    </>
  );
}

export default List;
