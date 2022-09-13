import CloseButton from 'components/CloseButton/CloseButton';
import Modal from 'components/ModalWrapper/ModalWrapper';
import Button from 'components/Button/Button';

import './modal-job-request.scss';

function ModalJobRequest({ active, setActive }) {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="modal-job-request">
        <div className="modal-job-request__close-button">
          <CloseButton onClick={() => setActive(false)} hasBackground />
        </div>
        <div className="modal-job-request__content">
          <h3 className="modal-job-request__title">Job request</h3>
          <p className="modal-job-request__additional-text">Choose type</p>
          <p className="modal-job-request__text">
            Publish an image research request if you are looking for a photo to
            license — <b className="modal-job-request__text-bold">Free</b>
          </p>
          <div className="modal-job-request__button">
            <Button
              type="primary"
              text="I need a Photo"
              btnType="button"
              size="big"
              onClick={() => setActive(!active)}
            />
          </div>
          <div className="modal-job-request__break">
            <hr className="modal-job-request__line" />
            <p className="modal-job-request__break-text">or</p>
            <hr className="modal-job-request__line" />
          </div>
          <p className="modal-job-request__text">
            Publish a job posting if you are looking for a photographer for your
            project — <b className="modal-job-request__text-bold">Free</b>
          </p>
          <div className="modal-job-request__button">
            <Button
              type="primary"
              text="I need a Photoshoot"
              btnType="button"
              size="big"
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalJobRequest;
