import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from 'components/Footer/Footer';
import GalleryBlock from 'components/GalleryBlock/GalleryBlock';
import Banner from 'components/Banner/Banner';
import Button from 'components/Button/Button';
import ModalSubscribing from 'components/ModalSubscribing/ModalSubscribing';
import ModalSignUp from 'components/ModalSignUp/ModalSignUp';
import useAuth from 'hooks/useAuth';

import leftBanner from './banner_1.jpg';
import rightBanner from './banner_2.jpg';

import './home.scss';

function Home() {
  const [subscribeModalActive, setSubscribeModalActive] = useState(false);
  const [signInModalActive, setSignInModalActive] = useState(false);
  const {
    user: { isAuth },
  } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      setTimeout(() => {
        setSignInModalActive(true);
      }, 5000);
    }
  }, [isAuth]);

  const location = useLocation();
  const locationData = location.state;

  return (
    <>
      <main className="main">
        {!isAuth && (
          <div className="main__sign-up">
            <Banner
              title="Find selected creators worldwide"
              textLink="Sign Up as a Brand"
              image={leftBanner}
              hrefLink="/sign-up"
            />
            <Banner
              title="Showcase your work and win clients"
              textLink="Sign Up as a Creator"
              image={rightBanner}
              hrefLink="/sign-up"
            />
          </div>
        )}
        <div className="main__content">
          <GalleryBlock
            title="Here are some trending Creators"
            defaultSearchValue={locationData && locationData.searchValue}
          />
        </div>
        {!isAuth && (
          <div className="main__promo">
            <h2 className="main__promo-text">Get started, It's Free</h2>
            <div className="main__promo-button">
              <Button
                size="big"
                isLink
                href="/sign-up"
                type="primary"
                text="Sign Up For Free"
              />
            </div>
          </div>
        )}
      </main>
      <Footer handleSubscriptionClick={() => setSubscribeModalActive(true)} />
      <ModalSubscribing
        active={subscribeModalActive}
        setActive={setSubscribeModalActive}
      />
      <ModalSignUp
        active={signInModalActive}
        setActive={setSignInModalActive}
      />
    </>
  );
}

export default Home;
