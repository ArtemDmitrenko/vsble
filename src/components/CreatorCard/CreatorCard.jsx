import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button/Button';
import { ReactComponent as SvgFavourite } from 'assets/img/favourites-white.svg';

import './creator-card.scss';

const handleFavouriteButtonClick = (e) => {
  console.log('click');
};

function CreatorCard({
  path,
  title,
  value,
  address,
  description,
  href,
  isShort,
}) {
  return (
    <div className="creator-card__wrapper">
      <Link to={href} className="creator-card">
        <div className="creator-card__img-container">
          <img
            src={path}
            alt={title}
            className="creator-card__img imgGallery"
          />
        </div>
        <div className="creator-card__content">
          <h2 className="creator-card__name">{title}</h2>
          {value && <p className="creator-card__job">{value}</p>}
          {address && <p className="creator-card__address">{address}</p>}
          {description && (
            <p className="creator-card__description">{description}</p>
          )}
        </div>
      </Link>
      {isShort && (
        <div className="creator-card__button">
          <Button
            type="icon"
            IconComponent={SvgFavourite}
            btnType="button"
            size="big"
            isIconButton
            onClick={handleFavouriteButtonClick}
          />
        </div>
      )}
    </div>
  );
}

export default CreatorCard;
