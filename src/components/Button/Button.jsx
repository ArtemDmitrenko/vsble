import React from "react";
import { Link } from "react-router-dom";

import "./button.scss";

function Button({
  type,
  IconComponent,
  isLink,
  text,
  href,
  btnType,
  size,
  onClick,
  isLikeButton,
  isIconButton,
  disabled,
}) {
  const classes = ["button"];
  if (type === "primary") classes.push("button_type_primary");
  if (type === "secondary") classes.push("button_type_secondary");
  if (type === "icon") classes.push("button_type_icon-no-text");
  if (type === "tertiary") classes.push("button_type_tertiary");
  if (size === "small") classes.push("button_size_small");
  if (size === "big") classes.push("button_size_big");
  if (IconComponent && !isIconButton) classes.push("button_withIcon");
  if (isIconButton) classes.push("button_type_icon");

  const stylizeSvg = () => {
    if (isIconButton) {
      return "button__only-icon";
    }
    if (isLikeButton) {
      return "button__like";
    }
    return `button__icon ${
      type === "secondary" ? "button__icon_color_black" : ""
    }`;
  };

  return isLink ? (
    <Link to={href} className={classes.join(" ")}>
      {text}
    </Link>
  ) : (
    <button
      disabled={disabled}
      type={btnType}
      onClick={onClick}
      className={classes.join(" ")}
    >
      {IconComponent && (
        <span className={stylizeSvg()}>
          <IconComponent />
        </span>
      )}
      {text}
    </button>
  );
}

export default Button;
