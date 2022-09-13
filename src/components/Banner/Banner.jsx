import React from "react";
import Button from "components/Button/Button";
import "./banner.scss";

function Banner({ title, textLink, image, hrefLink }) {
  return (
    <div className="banner">
      <img className="banner__image" src={image} alt="background"></img>
      <div className="banner__title">
        <h3 className="banner__text">{title}</h3>
      </div>
      <div className="banner__button">
        <Button
          size="big"
          isLink
          type="primary"
          text={textLink}
          href={hrefLink}
        />
      </div>
    </div>
  );
}

export default Banner;
