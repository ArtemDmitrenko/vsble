import { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

import Button from 'components/Button/Button';
import Nft from 'components/Nft/Nft';

import { ReactComponent as SvgAddToSedcard } from 'assets/img/add-to-sedcard.svg';
import { ReactComponent as SvgRemoveFromSedcard } from 'assets/img/remove-from-sedcard.svg';

import './sedcard.scss';
import 'react-tabs/style/react-tabs.css';

function Sedcard({ sedcardImages, type }) {
  const [hoveredSedcardIndex, setHoveredSedcardIndex] = useState(null);
  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const calcAmountSedcards = (location) => {
    if (location === 'sedcard') {
      return sedcardImages.filter((el) => el.inSedcard === true).length;
    } else if (location === 'archive') {
      return sedcardImages.length;
    }
  };

  const handleMouseOver = (index) => setHoveredSedcardIndex(index);

  const handleMouseOut = () => setHoveredSedcardIndex(null);

  const handleButtonOver = (i) => setHoveredSedcardIndex(i);

  const renderCoverImageSign = (isCoverImage, i) =>
    isCoverImage &&
    hoveredSedcardIndex !== i && <p className="sedcard__cover">Cover Image</p>;

  const renderButtonsMakeCoverAndAddToSedcard = (i, isCoverImage, inSedcard) =>
    hoveredSedcardIndex === i && (
      <div
        className="sedcard__button-sedcard-container"
        onMouseOver={(e) => handleButtonOver(i)}
      >
        {!isCoverImage && (
          <div className="sedcard__button-sedcard-button-make-cover">
            <Button
              btnType="button"
              size="big"
              type="secondary"
              text="Make Cover"
            />
          </div>
        )}
        <div className="sedcard__button-sedcard-button-add-to-sedcard">
          <Button
            type={inSedcard ? 'icon' : 'secondary'}
            IconComponent={inSedcard ? SvgRemoveFromSedcard : SvgAddToSedcard}
            btnType="button"
            size="big"
            isIconButton
          />
        </div>
      </div>
    );

  const renderSedcardSign = (i, inSedcard, isCoverImage) => {
    if (inSedcard && hoveredSedcardIndex === i) {
      if (!isCoverImage) {
        return (
          <p
            onMouseOver={(e) => handleButtonOver(i)}
            className="sedcard__sedcard-sign"
          >
            Sedcard
          </p>
        );
      } else {
        return (
          <>
            <p
              className="sedcard__cover-near-sedcard"
              onMouseOver={(e) => handleButtonOver(i)}
            >
              Cover Image
            </p>
            <p
              onMouseOver={(e) => handleButtonOver(i)}
              className="sedcard__sedcard-sign"
            >
              Sedcard
            </p>
          </>
        );
      }
    }
  };

  const createPathForLinks = (i) => {
    if (type === 'creator') {
      return `/creator/file-info/#slide${i}`;
    } else if (type === 'other') {
      return `/creator/other-profile/file-info/#slide${i}`;
    } else if (type === 'artbuyer') {
      return `/artbuyer/creator-profile/file-info/#slide${i}`;
    }
  };

  return (
    <div className="sedcard">
      <Tabs>
        <TabList className="sedcard__tablist">
          <Tab
            className="sedcard__tab"
            selectedClassName="sedcard__tab_selected"
          >
            <h3 className="sedcard__tab-title">Sedcard</h3>
            <sup className="sedcard__tab-index">
              {calcAmountSedcards('sedcard')}
            </sup>
          </Tab>
          <Tab
            className="sedcard__tab"
            selectedClassName="sedcard__tab_selected"
          >
            <h3 className="sedcard__tab-title">Archive</h3>
            <sup className="sedcard__tab-index">
              {calcAmountSedcards('archive')}
            </sup>
          </Tab>
          <Tab
            className="sedcard__tab"
            selectedClassName="sedcard__tab_selected"
          >
            <h3 className="sedcard__tab-title">NFT</h3>
            <sup className="sedcard__tab-index">0</sup>
          </Tab>
        </TabList>
        <TabPanel>
          {type === 'creator' && (
            <p className="sedcard__sedcard-addition">
              You can choose images for Sedcard from Archive
            </p>
          )}

          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {sedcardImages.map((el, i) => {
              const { img, inSedcard, isCoverImage } = el;
              return (
                inSedcard && (
                  <div key={img} className="sedcard__gallery-item">
                    <Link
                      to={createPathForLinks(i)}
                      className="sedcard__gallery-item-link"
                      onMouseOver={(e) => handleMouseOver(i)}
                      onMouseOut={handleMouseOut}
                    >
                      <img
                        className="sedcard__gallery-item-image"
                        src={img}
                        alt="sedcard"
                      ></img>
                    </Link>
                    {type === 'creator' && (
                      <>
                        {isCoverImage && (
                          <p className="sedcard__cover">Cover Image</p>
                        )}
                        {renderButtonsMakeCoverAndAddToSedcard(
                          i,
                          isCoverImage,
                          inSedcard
                        )}
                      </>
                    )}
                  </div>
                )
              );
            })}
          </Masonry>
          {type === 'creator' && (
            <div className="sedcard__bottom">
              <p className="sedcard__images-amount">
                {sedcardImages.length} images
              </p>
              <Button
                type="secondary"
                text="Choose Sedcard Images"
                btnType="button"
                size="big"
              />
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {sedcardImages.map((el, i) => {
              const { img, inSedcard, isCoverImage } = el;
              return (
                <div key={img} className="sedcard__gallery-item">
                  <Link
                    to={`/creator/other-profile/file-info/#slide${i}`}
                    state={{ role: type }}
                    className="sedcard__gallery-item-link"
                    onMouseOver={(e) => handleMouseOver(i)}
                    onMouseOut={handleMouseOut}
                  >
                    <img
                      className="sedcard__gallery-item-image"
                      src={img}
                      alt="sedcard"
                    ></img>
                  </Link>
                  {type === 'creator' && (
                    <>
                      {renderCoverImageSign(isCoverImage, i)}
                      {renderButtonsMakeCoverAndAddToSedcard(
                        i,
                        isCoverImage,
                        inSedcard
                      )}
                      {renderSedcardSign(i, inSedcard, isCoverImage)}
                    </>
                  )}
                </div>
              );
            })}
          </Masonry>
        </TabPanel>
        <TabPanel>
          <div className="sedcard__nft">
            <Nft />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Sedcard;
