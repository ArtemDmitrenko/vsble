import React from "react";
import Button from "components/Button/Button";
import { ReactComponent as SvgBorderedHeart } from "assets/img/bordered-heart.svg";
import { ReactComponent as SvgSolidHeart } from "assets/img/solid-heart.svg";

import "./like-button.scss";

function LikeButton({
  defaultLiked,
  numberOfLikes,
  handleLikeBtnClick,
  handleDislikeBtnClick,
}) {
  return (
    <div className="like-button">
      {defaultLiked ? (
        <button
          onClick={handleDislikeBtnClick}
          className="like-button__clicked"
          type="button"
        >
          <span className="like-button__solid-heart">
            <SvgSolidHeart />
          </span>
          {numberOfLikes}
        </button>
      ) : (
        <Button
          type="secondary"
          btnType="button"
          size="big"
          text="Like"
          IconComponent={SvgBorderedHeart}
          isLikeButton
          onClick={handleLikeBtnClick}
        />
      )}
    </div>
  );
}

export default LikeButton;
