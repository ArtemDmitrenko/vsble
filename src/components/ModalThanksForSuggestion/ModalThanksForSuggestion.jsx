import Modal from "components/ModalWrapper/ModalWrapper";
import Button from "components/Button/Button";
import CloseButton from "components/CloseButton/CloseButton";

import "./modal-thanks-for-suggestion.scss";

function ModalThanksForSuggestion({
  active,
  setActive,
  titleText,
  descriptionText,
}) {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="modal-thanks-for-suggestion">
        <div className="modal-thanks-for-suggestion__close-button">
          <CloseButton onClick={() => setActive(false)} hasBackground />
        </div>
        <div className="modal-thanks-for-suggestion__content">
          <h3 className="modal-thanks-for-suggestion__title">{titleText}</h3>
          <p className="modal-thanks-for-suggestion__text">{descriptionText}</p>
          <div className="modal-thanks-for-suggestion__button">
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

export default ModalThanksForSuggestion;
