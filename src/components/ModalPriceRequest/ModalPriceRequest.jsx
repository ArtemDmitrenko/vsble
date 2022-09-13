import CloseButton from 'components/CloseButton/CloseButton';
import Modal from 'components/ModalWrapper/ModalWrapper';
import PriceRequestForm from 'components/PriceRequestForm/PriceRequestForm';

import './modal-price-request.scss';

function ModalPriceRequest({ active, setActive, onSubmit }) {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="price-request-modal">
        <div className="price-request-modal__close-button">
          <CloseButton onClick={() => setActive(false)} hasBackground />
        </div>
        <div className="price-request-modal__content">
          <h3 className="price-request-modal__title">Price request</h3>
          <p className="price-request-modal__text">
            Please complete the below form to place a price request and receive
            a quote from photographer. Your contact information is only shown to
            the photographers, if you agree to their quote and decide to buy the
            image.
          </p>
          <div className="price-request-modal__form">
            <PriceRequestForm onSubmitHandler={onSubmit} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalPriceRequest;
