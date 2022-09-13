import { useState } from "react";

import About from "components/AboutForm/AboutForm";
import SocialLinksForm from "components/SocialLinksForm/SocialLinksForm";
import SkillsForm from "components/SkillsForm/SkillsForm";
import CreatorSidebar from "components/CreatorSidebar/CreatorSidebar";
import ModalRequestAddition from "components/ModalRequestAddition/ModalRequestAddition";
import ModalThanksForSuggestion from "components/ModalThanksForSuggestion/ModalThanksForSuggestion";
import Avatar from "components/Avatar/Avatar";
import SuccessUpdateMessage from "components/SuccessUpdateMessage/SuccessUpdateMessage";
import useScrollSpy from "hooks/useScrollSpy";
import sidebarContent from "./sidebar-content.json";
import fakeAvatarCreator from "assets/img/avatar-creator.jpg";

import "./public-info.scss";

function PublicInfo() {
  const [ModalRequestAdditionActive, setModalRequestAdditionActive] =
    useState(false);

  const [ModalThanksForSuggestionActive, setModalThanksForSuggestionActive] =
    useState(false);

  const [requestAdditionTopic, setRequestAdditionTopic] = useState();

  const [isProfileUpdated, setProfileUpdated] = useState(false);

  const handleRequestAdditionSubmit = (addition) => {
    setModalRequestAdditionActive(false);
    setModalThanksForSuggestionActive(true);
  };

  const handleSubmitForm = () => {
    document.documentElement.scrollTo(0, 0);
    setProfileUpdated(true);
    setTimeout(() => setProfileUpdated(false), 2000);
  };

  const ids = sidebarContent.map((el) => el.href);
  const activeId = useScrollSpy(ids, 0); // 30 is navigation height

  return (
    <>
      <main className="public-info__main">
        {isProfileUpdated && (
          <SuccessUpdateMessage text="Profile updated succesfully" />
        )}
        <aside className="public-info__sidebar">
          <CreatorSidebar sidebarContent={sidebarContent} activeId={activeId} />
        </aside>
        <div className="public-info__wrapper">
          <div className="public-info__content">
            <div className="public-info__title">
              <h1 className="public-info__title-text">Public info</h1>
              <div className="public-info__avatar">
                <Avatar
                  avatarFileName={fakeAvatarCreator}
                  size="big"
                  initials="AA"
                />
              </div>
            </div>
            <section
              key={`section-about`}
              id="about"
              className="public-info__section"
            >
              <About onSubmitHandler={handleSubmitForm} />
            </section>
            <section
              className="public-info__section"
              key={`section-social`}
              id="social"
            >
              <SocialLinksForm onSubmitHandler={handleSubmitForm} />
            </section>
            <section
              key={`section-skill`}
              id="skill"
              className="public-info__section"
            >
              <SkillsForm
                requestAdditionHandler={(label) => {
                  setRequestAdditionTopic(label);
                  setModalRequestAdditionActive(true);
                }}
                onSubmitHandler={handleSubmitForm}
              />
            </section>
          </div>
        </div>
      </main>
      <ModalRequestAddition
        active={ModalRequestAdditionActive}
        setActive={setModalRequestAdditionActive}
        requestTopic={requestAdditionTopic}
        onSubmitHandler={handleRequestAdditionSubmit}
      />
      <ModalThanksForSuggestion
        active={ModalThanksForSuggestionActive}
        setActive={setModalThanksForSuggestionActive}
        titleText="Thank you for the suggestion!"
        descriptionText="Our team will review it and will notify you when the requested
        addition will be added"
      />
    </>
  );
}

export default PublicInfo;
