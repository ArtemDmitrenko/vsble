import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Footer from 'components/Footer/Footer';
import SignInForm from 'components/SignInForm/SignInForm';
import useAuth from 'hooks/useAuth';

import './sign-in.css';

const CREATORS_PAGES = [
  '/creator/profile',
  '/creator/public-info',
  '/creator/settings',
  '/creator/other-profile',
  '/creator/other-profile/file-info',
  '/creator/file-info',
];
const ARTBUYER_PAGES = [
  '/artbuyer/showroom',
  '/artbuyer/creator-profile',
  '/artbuyer/favourites',
  '/artbuyer/creator-profile/show-all',
  '/artbuyer/creator-profile/file-info',
];

function SignIn() {
  const navigate = useNavigate();

  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const {
    user: { isAuth, authRole },
    signIn,
  } = useAuth();

  useEffect(() => {
    if (isAuth) {
      if (authRole === 'PHOTOGRAPHER') {
        const isCreatorCanOpenThisPage =
          fromPage !== '/' && CREATORS_PAGES.includes(fromPage);
        isCreatorCanOpenThisPage
          ? navigate(fromPage, { replace: true })
          : navigate('/creator/profile', { replace: true });
      } else if (authRole === 'ARTBUYER') {
        const isArtbuyerCanOpenThisPage =
          fromPage !== '/' && ARTBUYER_PAGES.includes(fromPage);
        isArtbuyerCanOpenThisPage
          ? navigate(fromPage, { replace: true })
          : navigate('/artbuyer/showroom', { replace: true });
      }
    }
  });

  const handleFormSubmit = ({ email, password }) => {
    signIn(email, password);
  };

  return (
    <>
      <main className="sign-in-block">
        <div className="sign-in-wrapper">
          <SignInForm onSubmit={handleFormSubmit} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
