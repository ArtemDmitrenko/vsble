import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Slider from 'components/Slider/Slider';
import LikeButton from 'components/LikeButton/LikeButton';
import CloseButton from 'components/CloseButton/CloseButton';
import Tag from 'components/Tag/Tag';
import Button from 'components/Button/Button';
import ModalPriceRequest from 'components/ModalPriceRequest/ModalPriceRequest';
import ModalJobRequest from 'components/ModalJobRequest/ModalJobRequest';
import PriceInfo from 'components/PriceInfo/PriceInfo';
import RadioButton from 'components/RadioButton/RadioButton';
import Tooltip from 'components/Tooltip/Tooltip';

import { ReactComponent as SvgDownload } from 'assets/img/download-down.svg';

// import { imageListWithData } from "./../dummyImages";

import './file-info.scss';

const tagsArray = [
  'photographer',
  'ocean',
  'beach',
  'person',
  'summer',
  'water',
  'clothing',
  'sky',
  'fashion',
  'pretty',
  'studio',
  'travel',
  'portrait',
];

function FileInfo({ imageListWithData, isForArtbuyer }) {
  const [priceRequestModalActive, setPriceRequestModalActive] = useState(false);
  const [jobRequestModalActive, setJobRequestModalActive] = useState(false);
  const [isAvailablePrice, setIsAvailablePrice] = useState(false);

  const createDefaultLikesState = () => {
    return imageListWithData.map((el) => {
      return Object.fromEntries(
        Object.entries(el).filter((item) => item[0] === 'isLiked')
      );
    });
  };
  const [likes, setLikes] = useState(createDefaultLikesState());

  const params = useLocation();

  const imageIndex = Number(params.hash.split('').splice(6).join(''));
  const navigate = useNavigate();

  const [activeSlideIndex, setActiveSlideIndex] = useState(imageIndex);

  const handleSlideChange = (activeIndex) => {
    setActiveSlideIndex(activeIndex);
  };

  const handleCloseButtonClick = () => {
    navigate(-1);
  };

  const handleLikeBtnClick = () => {
    setLikes((prev) => [...prev, (prev[activeSlideIndex].isLiked = true)]);
  };

  const handleDislikeBtnClick = () => {
    setLikes((prev) => [...prev, (prev[activeSlideIndex].isLiked = false)]);
  };

  const handleAskImagePriceClick = () => {
    setPriceRequestModalActive(true);
  };
  const handleSendJobRequestClick = () => setJobRequestModalActive(true);

  const handleAskPriceButtonClick = () => {
    setPriceRequestModalActive(false);
    setIsAvailablePrice(true);
  };

  const renderRadioButton = () => {
    return (
      <>
        <div className="file-info__radio-block">
          <h4 className="file-info__radio-block-title">Image File</h4>
          <div className="file-info__radio-button">
            <RadioButton
              name="imgFile"
              value="highRes"
              content="High-Res"
              isDefaultChecked={
                imageListWithData[activeSlideIndex].imageFile === 'highRes'
              }
              disabled
            />
            <div className="file-info__tooltip">
              <Tooltip
                firstTitle="Online License"
                firstText="Unlimited, worldwide commercial usage for online media"
                secondTitle="VAT"
                secondText="Value-added tax will be calculated at checkout based on your country and account type."
                arrowPosition="top"
              />
            </div>
          </div>
          <div className="file-info__radio-button">
            <RadioButton
              name="imgFile"
              value="lowRes"
              content="Low-Res"
              isDefaultChecked={
                imageListWithData[activeSlideIndex].imageFile === 'lowRes'
              }
              disabled
            />
            <div className="file-info__tooltip">
              <Tooltip
                firstTitle="Online License"
                firstText="Unlimited, worldwide commercial usage for online media"
                secondTitle="VAT"
                secondText="Value-added tax will be calculated at checkout based on your country and account type."
                arrowPosition="top"
              />
            </div>
          </div>
        </div>
        <div className="file-info__radio-block">
          <h4 className="file-info__radio-block-title">Pricing</h4>
          <div className="file-info__radio-button">
            <RadioButton
              name="pricing"
              value="rightsReady"
              content="Rights Ready"
              isDefaultChecked={
                imageListWithData[activeSlideIndex].pricing === 'rightsReady'
              }
              disabled
            />
            <div className="file-info__tooltip">
              <Tooltip
                firstTitle="Online License"
                firstText="Unlimited, worldwide commercial usage for online media"
                secondTitle="VAT"
                secondText="Value-added tax will be calculated at checkout based on your country and account type."
                arrowPosition="top"
              />
            </div>
          </div>
          <div className="file-info__radio-button">
            <RadioButton
              name="pricing"
              value="uponRequest"
              content="Upon Request"
              isDefaultChecked={
                imageListWithData[activeSlideIndex].pricing === 'uponRequest'
              }
              disabled
            />
            <div className="file-info__tooltip">
              <Tooltip
                firstTitle="Online License"
                firstText="Unlimited, worldwide commercial usage for online media"
                secondTitle="VAT"
                secondText="Value-added tax will be calculated at checkout based on your country and account type."
                arrowPosition="top"
              />
            </div>
          </div>
          <div className="file-info__radio-button">
            <RadioButton
              name="pricing"
              value="customRightsReady"
              content="Custom Rights Ready"
              isDefaultChecked={
                imageListWithData[activeSlideIndex].pricing ===
                'customRightsReady'
              }
              disabled
            />
            <div className="file-info__tooltip">
              <Tooltip
                firstTitle="Online License"
                firstText="Unlimited, worldwide commercial usage for online media"
                secondTitle="VAT"
                secondText="Value-added tax will be calculated at checkout based on your country and account type."
                arrowPosition="top"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderPriceBlock = () => {
    if (!isForArtbuyer) {
      return renderRadioButton();
    } else {
      if (isAvailablePrice) {
        return <PriceInfo />;
      }
    }
  };

  return (
    <>
      <div className="file-info">
        <div className="file-info__sidebar">
          <h3 className="file-info__title">File info</h3>
          {isAvailablePrice ? (
            <p className="file-info__description">
              Orientation: {imageListWithData[activeSlideIndex].orientation}
            </p>
          ) : (
            <p className="file-info__description">
              Camera: {imageListWithData[activeSlideIndex].camera} <br />
              Aperture: {imageListWithData[activeSlideIndex].aperture}
              <br />
              ISO: {imageListWithData[activeSlideIndex].iso}
              <br />
              Orientation: {imageListWithData[activeSlideIndex].orientation}
            </p>
          )}
          <div className="file-info__price-info">{renderPriceBlock()}</div>
          {isForArtbuyer && (
            <div className="file-info__buttons">
              <div className="file-info__primary-buttons">
                <Button
                  type="primary"
                  text="Ask for Image Price"
                  btnType="button"
                  size="big"
                  onClick={handleAskImagePriceClick}
                />
                <Button
                  type="primary"
                  text="Send your Job Request"
                  btnType="button"
                  size="big"
                  onClick={handleSendJobRequestClick}
                />
              </div>
              <div className="file-info__secondary-buttons">
                <Button
                  isLink
                  href="/artbuyer/creator-profile/show-all"
                  type="secondary"
                  text="Show All by This Author"
                  btnType="button"
                  size="big"
                />
                <div className="file-info__download-button">
                  <Button
                    size="big"
                    type="secondary"
                    text="Download Comp"
                    btnType="button"
                    IconComponent={SvgDownload}
                  />
                </div>
              </div>
            </div>
          )}

          <p className="file-info__dimensions">
            File dimensions: Original file upon request 1000px x 1250px / 8.47 x
            10.58cm@300dpi <br />
            ID: #30544
            <br />
            Release(s) on file: Possible
          </p>
        </div>
        <div className="file-info__image-container">
          <div className="file-info__like-block">
            <div className="file-info__like-button">
              <LikeButton
                defaultLiked={likes[activeSlideIndex].isLiked}
                numberOfLikes={
                  imageListWithData[activeSlideIndex].numberOfLikes
                }
                handleLikeBtnClick={handleLikeBtnClick}
                handleDislikeBtnClick={handleDislikeBtnClick}
              />
            </div>
            <div className="file-info__close-button">
              <CloseButton onClick={handleCloseButtonClick} />
            </div>
          </div>
          <div className="file-info__slider-wrapper">
            <Slider
              images={imageListWithData}
              onSlideChange={(activeIndex) => handleSlideChange(activeIndex)}
            />
          </div>
          <ul className="file-info__tags-list">
            {tagsArray.map((el) => (
              <li key={el} className="file-info__list-item">
                <Tag text={el} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ModalPriceRequest
        active={priceRequestModalActive}
        setActive={setPriceRequestModalActive}
        onSubmit={handleAskPriceButtonClick}
      />
      <ModalJobRequest
        active={jobRequestModalActive}
        setActive={setJobRequestModalActive}
      />
    </>
  );
}

export default FileInfo;
