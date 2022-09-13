import { useForm } from "react-hook-form";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import "./basic-info-form.scss";
import Checkbox from "components/Checkbox/Checkbox";

function BasicInfoForm({ onSubmitHandler }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    console.log(formData);
    onSubmitHandler();
  };

  return (
    <div className="basic-info-form">
      <h2 className="basic-info-form__title">Basic information</h2>
      <p className="basic-info-form__text">
        Your e-mail is used for all notifications concerning purchase request.
        It is also the address where the password reset e-mail is sent if you
        forget your password.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="basic-info-form__item">
          <Input
            type="text"
            label="E-mail"
            register={register("email", {
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                message: "Email is not valid",
              },
              value: "annijaabzalone@gmail.com",
            })}
            disabled
            error={errors.email?.message}
          />
        </div>
        <div className="basic-info-form__item">
          <Input
            type="text"
            label="Phone"
            register={register("phone", {
              pattern: {
                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                message: "Phone is not valid",
              },
            })}
            error={errors.phone?.message}
          />
        </div>

        <div className="basic-info-form__item">
          <Input label="Username" register={register("username")} />
        </div>
        <div className="basic-info-form__item">
          <Checkbox
            title="Receive Newsletter"
            register={register("receiveNewsletter")}
          />
        </div>

        <div className="basic-info-form__button">
          <Button
            type="primary"
            text="Update Information"
            btnType="submit"
            size="big"
          />
        </div>
      </form>
    </div>
  );
}

export default BasicInfoForm;
