import { useForm } from "react-hook-form";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import "./delete-account-form.scss";

function DeleteAccountForm({ handleButtonClick }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    console.log(formData);
    handleButtonClick();
  };

  return (
    <div className="delete-account-form">
      <h2 className="delete-account-form__title">Delete Account</h2>
      <p className="delete-account-form__text">
        All images wil be removed from ongoing briefings, the showroom and our
        servers. This action can not be undone.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="delete-account-form__item">
          <Input
            type="password"
            label="Your Current Password"
            register={register("currentPassword", {
              required: "Password is required",
            })}
            error={errors.currentPassword?.message}
          />
        </div>

        <div className="delete-account-form__button">
          <Button
            type="tertiary"
            text="Delete Account Permanently"
            btnType="submit"
            size="big"
          />
        </div>
      </form>
    </div>
  );
}

export default DeleteAccountForm;
