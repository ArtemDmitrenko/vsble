import { useForm } from "react-hook-form";

import Modal from "components/ModalWrapper/ModalWrapper";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

import "./modal-request-addition.scss";
import CloseButton from "components/CloseButton/CloseButton";

function ModalRequestAddition({
  active,
  setActive,
  onSubmitHandler,
  requestTopic,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    reset();
    onSubmitHandler(formData);
  };

  return (
    <Modal active={active} setActive={setActive}>
      <div className="modal-request-addition">
        <div className="modal-request-addition__close-button">
          <CloseButton onClick={() => setActive(false)} hasBackground />
        </div>
        <div className="modal-request-addition__content">
          <h3 className="modal-request-addition__title">Request Addition</h3>
          {requestTopic && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="modal-request-addition__form"
            >
              <Input
                type="text"
                label="Your suggestion"
                register={register(requestTopic, {
                  required: "Suggestion is required",
                })}
                error={errors[requestTopic]?.message}
              />
              <Button
                btnType="submit"
                size="big"
                type="primary"
                text="Submit"
              />
            </form>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default ModalRequestAddition;
