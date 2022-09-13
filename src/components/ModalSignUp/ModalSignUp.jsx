import CloseButton from "components/CloseButton/CloseButton";
import Modal from "components/ModalWrapper/ModalWrapper";
import Button from "components/Button/Button";

import "./modal-sign-up.scss";

function ModalSignUp({ active, setActive }) {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="sign-up-modal">
        <div className="sign-up-modal__close-button">
          <CloseButton onClick={() => setActive(false)} hasBackground />
        </div>
        <div className="sign-up-modal__content">
          <h3 className="sign-up-modal__title">Log In or Sign Up</h3>
          <p className="sign-up-modal__text">
            Create or log in to an existing a vsble.space account.
            <br />
            Get started, It's Free
          </p>
          <div className="sign-up-modal__buttons">
            <Button
              isLink
              href="/sign-in"
              size="big"
              type="secondary"
              text="Log In"
              onClick={() => setActive(false)}
            />
            <Button
              isLink
              href="/sign-up"
              size="big"
              type="primary"
              text="Sign Up"
              onClick={() => setActive(false)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalSignUp;
