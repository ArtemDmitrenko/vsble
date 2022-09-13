import Modal from "components/ModalWrapper/ModalWrapper";
import Button from "components/Button/Button";
import CloseButton from "components/CloseButton/CloseButton";

import "./modal-subscribing.scss";

function ModalSubscribing({ active, setActive }) {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="subscribing-modal">
        <div className="subscribing-modal__close-button">
          <CloseButton onClick={() => setActive(false)} hasBackground />
        </div>
        <div className="subscribing-modal__content">
          <div className="subscribing-modal__image"></div>
          <h3 className="subscribing-modal__title">
            Thank you for subscribing to updates!
          </h3>
          <p className="subscribing-modal__text">
            We will send the latest news and updates directly in your inbox.
          </p>
          <div className="subscribing-modal__button">
            <Button
              size="big"
              type="primary"
              text="Ok"
              onClick={() => setActive(false)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalSubscribing;
