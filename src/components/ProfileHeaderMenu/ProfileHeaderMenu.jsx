import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import Avatar from 'components/Avatar/Avatar';
import fakeAvatar from 'assets/img/avatar-creator.jpg';
import { PHOTOGRAPHER_PUBLIC_SETTINGS_GET } from 'query/photographer';
import { ARTBUYER_ACCOUNT_SETTINGS_GET } from 'query/artbuyer';
import { PROFILE } from 'query/auth';
import { ReactComponent as SvgChevronDown } from 'assets/img/chevron-down.svg';

import './profile-header-menu.scss';

function ProfileHeaderMenu({ data, handleLogoutClick }) {
  const { type, links } = data;

  const [activeMenu, setActiveMenu] = useState(false);
  const navigate = useNavigate();

  const handleDocumentClick = (e) => {
    const { target } = e;
    const isOnMenuClick = target.closest('.profile-header-menu');
    if (!isOnMenuClick) {
      setActiveMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const {
    loading: profileLoading,
    error: profileError,
    data: profileData,
  } = useQuery(PROFILE);

  const {
    loading: photographerPublicSettingsLoading,
    error: photographerPublicSettingsError,
    data: photographerPublicSettingsData,
  } = useQuery(PHOTOGRAPHER_PUBLIC_SETTINGS_GET);

  // const {
  //   loading: artbuyerAccountSettingsLoading,
  //   error: artbuyerAccountSettingsError,
  //   data: artbuyerAccountSettingsData,
  // } = useQuery(ARTBUYER_ACCOUNT_SETTINGS_GET);

  // PROFILE
  if (profileLoading) return <p>Loading ...</p>;
  const {
    profile: {
      data: { id, login, email, role, avatarURL },
    },
  } = profileData;

  let name;
  let surname;
  if (role === 'PHOTOGRAPHER') {
    // if (photographerPublicSettingsLoading) return <p>Loading ...</p>;
    // const {
    //   photographerPublicSettingsGet: {
    //     data: { firstName, lastName },
    //   },
    // } = photographerPublicSettingsData;
    // name = firstName;
    // surname = lastName;

    name = 'Photographer';
    surname = 'Photographer';
  } else if (role === 'ARTBUYER') {
    name = 'Artbuyer';
    surname = 'Artbuyer';

    // if (artbuyerAccountSettingsLoading) return <p>Loading ...</p>;
    // console.dir(artbuyerAccountSettingsData);
    // const {
    //   artbuyerAccountSettingsGet: {
    //     data: { firstName, lastName },
    //   },
    // } = artbuyerAccountSettingsData;
  }

  const handleAvatarClick = () => {
    if (activeMenu) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  };

  const logoutClick = () => {
    handleLogoutClick();
    navigate('/');
  };

  const renderInitials = () => {
    return `${name[0]}${surname[0]}`;
  };

  const styleMenu = () =>
    `profile-header-menu__menu ${
      activeMenu ? 'profile-header-menu__menu_active' : ''
    }`;

  const styleChevron = () =>
    `profile-header-menu__chevron ${
      activeMenu ? 'profile-header-menu__chevron_opened' : ''
    }`;

  return (
    <div className="profile-header-menu">
      <button
        onClick={handleAvatarClick}
        type="text"
        className="profile-header-menu__wrapper"
      >
        <Avatar
          size="small"
          avatarFileName={fakeAvatar}
          initials={renderInitials()}
        />
        <div className={styleChevron()}>
          <SvgChevronDown />
        </div>
      </button>

      <div className={styleMenu()}>
        <div className="profile-header-menu__menu-header">
          <h3 className="profile-header-menu__menu-title">
            {name} {surname}
          </h3>
          <p className="profile-header-menu__menu-subtitle">{type}</p>
        </div>
        <div className="profile-header-menu__menu-main">
          <ul>
            {links.map((item) => {
              return (
                <li key={item.text} className="profile-header-menu__menu-item">
                  <Link
                    className="profile-header-menu__menu-link"
                    to={item.href}
                    onClick={() => setActiveMenu(false)}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="profile-header-menu__menu-footer">
          <button
            type="button"
            className="profile-header-menu__menu-button"
            onClick={logoutClick}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeaderMenu;
