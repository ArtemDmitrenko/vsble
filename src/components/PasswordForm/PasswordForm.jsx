import { useForm } from "react-hook-form";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import "./password-form.scss";

function PasswordForm({ onSubmitHandler }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const watchFields = watch([
    "currentPassword",
    "newPassword",
    "repeatNewPassword",
  ]);

  const onSubmit = (formData) => {
    console.log(formData);
    onSubmitHandler();
  };

  const createErrorMessageForNewPassword = () => {
    if (watchFields[0] && watchFields[1]) {
      const areBothInputsFilled =
        watchFields[0].length > 0 && watchFields[1] > 0;
      const areBothInputsEqual = watchFields[0] === watchFields[1];
      if (areBothInputsFilled && areBothInputsEqual) {
        return "Can not be the same as current password";
      }
    }
  };

  const createErrorMessageForRepeatPassword = () => {
    if (watchFields[0] && watchFields[1] && watchFields[2]) {
      const areBothInputsEqual = watchFields[1] === watchFields[2];
      if (!areBothInputsEqual) {
        return "Does not match with new password";
      }
    }
  };

  return (
    <div className="password-form">
      <h2 className="password-form__title">Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="password-form__item">
          <Input
            type="password"
            label="Current Password"
            register={register("currentPassword", {
              required: "Current password is required",
            })}
            error={errors.currentPassword?.message}
            isPassword
          />
        </div>
        <div className="password-form__item">
          <Input
            type="password"
            label="New Password"
            register={register("newPassword", {
              required: "New password is required",
            })}
            error={
              errors.newPassword?.message || createErrorMessageForNewPassword()
            }
            isPassword
          />
        </div>
        <div className="password-form__item">
          <Input
            type="password"
            label="Repeat New Password"
            register={register("repeatNewPassword", {
              required: "This field is required",
            })}
            error={
              errors.repeatNewPassword?.message ||
              createErrorMessageForRepeatPassword()
            }
            isPassword
          />
        </div>
        <div className="password-form__button">
          <Button
            type="primary"
            text="Save changes"
            btnType="submit"
            size="big"
          />
        </div>
      </form>
    </div>
  );
}

export default PasswordForm;
