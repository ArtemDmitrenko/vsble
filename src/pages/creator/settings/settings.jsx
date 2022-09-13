import { useState } from 'react';

import CreatorSidebar from 'components/CreatorSidebar/CreatorSidebar';
import ModalThanksForSuggestion from 'components/ModalThanksForSuggestion/ModalThanksForSuggestion';
import BasicInfoForm from 'components/BasicInfoForm/BasicInfoForm';
import PasswordForm from 'components/PasswordForm/PasswordForm';
import PaymentGatewayForm from 'components/PaymentGatewayForm/PaymentGatewayForm';
import MarketplaceForm from 'components/MarketplaceForm/MarketplaceForm';
import NotificationForm from 'components/NotificationForm/NotificationForm';
import DeleteAccountForm from 'components/DeleteAccountForm/DeleteAccountForm';
import SalesStatement from 'components/SalesStatement/SalesStatement';
import SuccessUpdateMessage from 'components/SuccessUpdateMessage/SuccessUpdateMessage';

import useScrollSpy from 'hooks/useScrollSpy';
import sidebarContent from './sidebar-content.json';

import './settings.scss';

const dummySalesStatemant = [
  {
    year: 2019,
    sales: [
      {
        date: 'October, 11',
        price: 18,
        currency: '€',
        invoice: '',
      },
    ],
  },
  {
    year: 2020,
    sales: [
      {
        date: 'October, 11',
        price: 18,
        currency: '€',
        invoice: '',
      },
      {
        date: 'October, 9',
        price: 1,
        currency: '€',
        invoice: '',
      },
    ],
  },
  {
    year: 2021,
    sales: [
      {
        date: 'December, 13',
        price: 18,
        currency: '€',
        invoice: '',
      },
      {
        date: 'December, 5',
        price: 12,
        currency: '€',
        invoice: '',
      },
      {
        date: 'December, 6',
        price: 13,
        currency: '€',
        invoice: '',
      },
      {
        date: 'December, 31',
        price: 14,
        currency: '€',
        invoice: '',
      },
      {
        date: 'December, 11',
        price: 44,
        currency: '€',
        invoice: '',
      },
    ],
  },
];

function Settings() {
  const [ModalThanksForSuggestionActive, setModalThanksForSuggestionActive] =
    useState(false);

  const [isProfileUpdated, setProfileUpdated] = useState(false);

  const handleSubmitForm = () => {
    document.documentElement.scrollTo(0, 0);
    setProfileUpdated(true);
    setTimeout(() => setProfileUpdated(false), 2000);
  };

  const ids = sidebarContent.map((el) => el.href);
  const activeId = useScrollSpy(ids, 0); // 0 is navigation height

  return (
    <>
      <main className="settings__main">
        {isProfileUpdated && (
          <SuccessUpdateMessage text="Settings updated succesfully" />
        )}
        <aside className="settings__sidebar">
          <CreatorSidebar sidebarContent={sidebarContent} activeId={activeId} />
        </aside>
        <div className="settings__wrapper">
          <div className="settings__content">
            <div className="settings__title">
              <h1 className="settings__title-text">Settings</h1>
            </div>
            <section
              key={`section-basicInfo`}
              id="basicInfo"
              className="settings__section"
            >
              <BasicInfoForm onSubmitHandler={handleSubmitForm} />
            </section>
            <section
              className="settings__section"
              key={`section-password`}
              id="password"
            >
              <PasswordForm onSubmitHandler={handleSubmitForm} />
            </section>
            <section
              key={`section-connectPaymentGateway`}
              id="connectPaymentGateway"
              className="settings__section"
            >
              <PaymentGatewayForm />
            </section>
            <section
              key={`section-marketplace`}
              id="marketplace"
              className="settings__section"
            >
              <MarketplaceForm onSubmitHandler={handleSubmitForm} />
            </section>
            <section
              key={`section-notificationSettings`}
              id="notificationSettings"
              className="settings__section"
            >
              <NotificationForm onSubmitHandler={handleSubmitForm} />
            </section>
            <section
              key={`section-salesStatements`}
              id="salesStatements"
              className="settings__section"
            >
              <SalesStatement data={dummySalesStatemant} />
            </section>
            <section className="settings__section">
              <DeleteAccountForm
                handleButtonClick={() =>
                  setModalThanksForSuggestionActive(true)
                }
              />
            </section>
          </div>
        </div>
      </main>

      <ModalThanksForSuggestion
        active={ModalThanksForSuggestionActive}
        setActive={setModalThanksForSuggestionActive}
        titleText="Thank you, your request has been received"
        descriptionText="Your account is scheduled for deletion, you will be notified once its deleted."
      />
    </>
  );
}

export default Settings;
