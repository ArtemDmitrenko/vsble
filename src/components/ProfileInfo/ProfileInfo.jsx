import { useState } from 'react';
import { useQuery } from '@apollo/client';

import Button from 'components/Button/Button';
import Avatar from 'components/Avatar/Avatar';
import ModalPriceRequest from 'components/ModalPriceRequest/ModalPriceRequest';
import ModalJobRequest from 'components/ModalJobRequest/ModalJobRequest';
import { PROFILE } from 'query/auth';
import { PHOTOGRAPHER_PUBLIC_SETTINGS_GET } from 'query/photographer';
import fakeAvatar from 'assets/img/avatar-creator.jpg';
import fakeAvatarOther from 'assets/img/fake-avatar-other.jpg';
import { ReactComponent as SvgAddToSedcard } from 'assets/img/favorites.svg';

import twitter from 'assets/img/Twitter.svg';
import instagram from 'assets/img/Instagram.svg';
import facebook from 'assets/img/Facebook.svg';
import linkedIn from 'assets/img/linkedIn.svg';
import vimeo from 'assets/img/vimeo.svg';

import './profile-info.scss';

function ProfileInfo({ isCreatorAccount, isOther, isArtbuyerAccount }) {
  const [priceRequestModalActive, setPriceRequestModalActive] = useState(false);
  const [jobRequestModalActive, setJobRequestModalActive] = useState(false);

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

  let firstNameFinal;
  let lastNameFinal;
  let aboutFinal;
  let siteURLFinal;
  if (isCreatorAccount) {
    // PROFILE
    if (profileLoading) return <p>Loading...</p>;
    const {
      profile: {
        data: { id, login, email, role, avatarURL },
      },
    } = profileData;
    console.log(avatarURL);

    // PHOTOGRAPHER_PUBLIC_SETTINGS_GET
    // if (photographerPublicSettingsLoading) return <p>Loading...</p>;
    // const {
    //   photographerPublicSettingsGet: {
    //     data: { about, firstName, lastName, siteURL },
    //   },
    // } = photographerPublicSettingsData;
    // firstNameFinal = firstName;
    // lastNameFinal = lastName;
    // aboutFinal = about;
    // siteURLFinal = siteURL;

    firstNameFinal = 'Photographer';
    lastNameFinal = 'Photographer';
    aboutFinal = 'about';
    siteURLFinal = 'siteURL';
  } else if (isOther) {
    firstNameFinal = '';
    lastNameFinal = 'JacquesW';
    aboutFinal =
      'Creative individual with high quality standarts and great passion for showing things in beautiful way. Provide outstanding service and support. Tend to look on things from  many perspectives, to revial all benefits.';
    siteURLFinal = 'www.jacquesw.com';
  } else if (isArtbuyerAccount) {
    firstNameFinal = 'Annija';
    lastNameFinal = 'Abzalone';
    aboutFinal =
      'Creative individual with high quality standarts and great passion for showing things in beautiful way. Provide outstanding service and support. Tend to look on things from  many perspectives, to revial all benefits.';
    siteURLFinal = 'www.luciaceldran.com';
  }

  const handleAskImagePriceClick = () => {
    setPriceRequestModalActive(true);
  };
  const handleSendJobRequestClick = () => setJobRequestModalActive(true);

  return (
    <>
      <div className="profile-info__container">
        <div className="profile-info__avatar">
          <Avatar
            avatarFileName={isOther ? fakeAvatarOther : fakeAvatar}
            size="big"
            initials="AA"
            noEdit={isOther || isArtbuyerAccount}
          />
        </div>
        <h1 className="profile-info__name">
          {firstNameFinal} {lastNameFinal}
        </h1>
        <p className="profile-info__address">Cēsis, Cēsu pilsēta, Latvia</p>
        <p className="profile-info__topic">
          Conceptual & Advertising | Food & Still Life
        </p>
        <a
          target="_blank"
          className="profile-info__website"
          href={`https://${siteURLFinal}`}
          rel="noreferrer"
        >
          {siteURLFinal}
        </a>
        <div className="profile-info__socials">
          <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
            <img src={facebook} alt="facebook"></img>
          </a>
          <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
            <img src={instagram} alt="instagram"></img>
          </a>
          <a target="_blank" href="https://www.twitter.com/" rel="noreferrer">
            <img src={twitter} alt="twitter"></img>
          </a>
          <a target="_blank" href="https://www.linkedin.com/" rel="noreferrer">
            <img src={linkedIn} alt="linkedIn"></img>
          </a>
          <a target="_blank" href="https://www.vimeo.com/" rel="noreferrer">
            <img src={vimeo} alt="vimeo"></img>
          </a>
        </div>
        {isCreatorAccount && (
          <div className="profile-info__buttons">
            <Button
              type="secondary"
              isLink
              text="Edit Profile"
              href="/creator/public-info"
              btnType="button"
              size="big"
            />
          </div>
        )}
        {isArtbuyerAccount && (
          <div className="profile-info__buttons">
            <Button
              type="secondary"
              btnType="button"
              text="Send Job Request"
              size="big"
              onClick={handleSendJobRequestClick}
            />
            <Button
              type="secondary"
              btnType="button"
              text="Send Image Request"
              size="big"
              onClick={handleAskImagePriceClick}
            />
            <Button
              type="secondary"
              IconComponent={SvgAddToSedcard}
              btnType="button"
              size="big"
              isIconButton
            />
          </div>
        )}

        <p className="profile-info__description">{aboutFinal}</p>
        <div className="profile-info__additions">
          <div className="profile-info__addition-block">
            <h3 className="profile-info__addition-block-title">Skill level</h3>
            <p className="profile-info__addition-block-text">Professional</p>
          </div>
          <div className="profile-info__addition-block">
            <h3 className="profile-info__addition-block-title">Assets</h3>
            <p className="profile-info__addition-block-text">Own Studio</p>
          </div>
          <div className="profile-info__addition-block">
            <h3 className="profile-info__addition-block-title">
              Additional Services
            </h3>
            <p className="profile-info__addition-block-text">
              Retouch, Will travel
            </p>
          </div>
          <div className="profile-info__addition-block">
            <h3 className="profile-info__addition-block-title">
              Additional Skills
            </h3>
            <p className="profile-info__addition-block-text">
              English Language
            </p>
          </div>
        </div>
      </div>
      <ModalPriceRequest
        active={priceRequestModalActive}
        setActive={setPriceRequestModalActive}
        onSubmit={() => {}}
      />
      <ModalJobRequest
        active={jobRequestModalActive}
        setActive={setJobRequestModalActive}
      />
    </>
  );
}

export default ProfileInfo;
