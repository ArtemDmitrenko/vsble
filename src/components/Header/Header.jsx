import { Link, Outlet } from 'react-router-dom';

import HeaderSearch from 'components/HeaderSearch/HeaderSearch';
import ProfileHeaderMenu from 'components/ProfileHeaderMenu/ProfileHeaderMenu';
import Navigation from 'components/Navigation/Navigation';
import Button from 'components/Button/Button';
import useAuth from 'hooks/useAuth';

import logo from 'assets/img/logo.svg';
import { ReactComponent as SvgDownload } from 'assets/img/download.svg';
import { ReactComponent as SvgComponentBag } from 'assets/img/bag.svg';
import { ReactComponent as SvgComponentBox } from 'assets/img/box.svg';
import { ReactComponent as SvgComponentFavorites } from 'assets/img/__favourites-header.svg';
// import { ReactComponent as SvgComponentFavorites } from "assets/img/_favorites.svg";
import { ReactComponent as SvgComponentCart } from 'assets/img/cart.svg';

import './header.scss';

const dummyNavDataCreator = [
  {
    path: '/',
    sign: 'Job Requests',
    scgIconComponent: <SvgComponentBag />,
  },
  {
    path: '/',
    sign: 'Image Requests',
    scgIconComponent: <SvgComponentBox />,
  },
];

const dummyNavDataArtbuyer = [
  {
    path: '/',
    sign: 'Job Requests',
    scgIconComponent: <SvgComponentBag />,
  },
  {
    path: '/',
    sign: 'Image Requests',
    scgIconComponent: <SvgComponentBox />,
  },
  {
    path: '/artbuyer/favourites',
    sign: 'Favorites',
    scgIconComponent: <SvgComponentFavorites />,
  },
  {
    path: '/',
    sign: 'Cart',
    scgIconComponent: <SvgComponentCart />,
  },
];

const dummyCreatorLinks = [
  {
    text: 'Account',
    href: '/creator/profile',
  },
  {
    text: 'Public info',
    href: '/creator/public-info',
  },
  {
    text: 'Pricing',
    href: '/creator/pricing',
  },
  {
    text: 'Settings',
    href: '/creator/settings',
  },
];

const dummyArtbuyerLinks = [
  {
    text: 'Account',
    href: '/artbuyer/showroom',
  },
  {
    text: 'Pricing',
    href: '/artbuyer/pricing',
  },
  {
    text: 'Settings',
    href: '/artbuyer/settings',
  },
];

const dummyProfileCreatorMenuData = {
  name: 'Annija Abzalone',
  type: 'Photographer',
  links: dummyCreatorLinks,
};

const dummyProfileArtbuyerMenuData = {
  name: 'Annija Abzalone',
  type: 'Artbuyer',
  links: dummyArtbuyerLinks,
};

function Header() {
  const {
    user: { isAuth, authRole },
    signOut,
  } = useAuth();

  const createNavList = () => {
    if (authRole === 'PHOTOGRAPHER') {
      return dummyNavDataCreator;
    } else if (authRole === 'ARTBUYER') {
      return dummyNavDataArtbuyer;
    }
  };

  const renderProfileMenu = () => {
    if (authRole === 'PHOTOGRAPHER') {
      return (
        <ProfileHeaderMenu
          data={dummyProfileCreatorMenuData}
          handleLogoutClick={signOut}
        />
      );
    } else if (authRole === 'ARTBUYER') {
      return (
        <ProfileHeaderMenu
          data={dummyProfileArtbuyerMenuData}
          handleLogoutClick={signOut}
        />
      );
    }
  };
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header__search">
          <HeaderSearch />
        </div>
        {isAuth ? (
          <>
            <div className="header__navigation">
              <Navigation list={createNavList()} />
            </div>
            <div className="header__download-button">
              {authRole === 'PHOTOGRAPHER' && (
                <Button
                  size="big"
                  href="/sign-in"
                  type="primary"
                  text="Upload images"
                  IconComponent={SvgDownload}
                />
              )}
            </div>
            {renderProfileMenu()}
          </>
        ) : (
          <div className="header__buttons-group">
            <Button
              size="big"
              isLink
              href="/sign-in"
              type="secondary"
              text="Log In"
            />
            <Button
              size="big"
              isLink
              href="/sign-up"
              type="primary"
              text="Sign Up"
            />
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
}

export default Header;
