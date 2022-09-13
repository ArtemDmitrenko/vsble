import React from "react";
import { ReactComponent as SvgAvatarHover } from "assets/img/avatar-hover.svg";
import { ReactComponent as SvgAvatarEmpty } from "assets/img/avatar-empty.svg";

import "./avatar.scss";

function Avatar({ avatarFileName, size, initials, noEdit }) {
  const styleWrapper = () => {
    const classes = ["avatar"];
    if (size === "small") classes.push("avatar_small");
    if (size === "big") classes.push("avatar_big");
    if (noEdit) classes.push("avatar_no-edit");
    return classes.join(" ");
  };

  const styleImage = () => {
    const classes = ["avatar__image"];
    if (size === "big") classes.push("avatar__image_big");
    if (size === "small") classes.push("avatar__image_small");
    return classes.join(" ");
  };
  return (
    <div className={styleWrapper()}>
      {avatarFileName ? (
        <>
          <img src={avatarFileName} alt="avatar" className={styleImage()}></img>
          {size === "big" && !noEdit && (
            <div className="avatar__hover">
              <SvgAvatarHover />
              <button type="button" className="avatar__edit-button">
                Edit
              </button>
            </div>
          )}
        </>
      ) : size === "big" ? (
        <button type="button" className="avatar__empty-border">
          <div className="avatar__empty-circle">
            <SvgAvatarEmpty />
          </div>
        </button>
      ) : (
        <div className="avatar__empty-border-small">
          <div className="avatar__empty-circle">
            <span className="avatar__empty-name">{initials}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
