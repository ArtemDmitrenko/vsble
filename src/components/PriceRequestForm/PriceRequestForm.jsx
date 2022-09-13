import { useForm } from "react-hook-form";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { ReactComponent as SvgEuro } from "assets/img/€.svg";

import "./price-request-form.scss";

function PriceRequestForm({ onSubmitHandler }) {
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

  function preventNonNumericalInput(e) {
    e = e || window.event;
    const char = String.fromCharCode(e.which);
    const valLen = e.target.value.length;
    if (
      (char !== "") & !char.match(/[0-9]/) ||
      (char === "0") & (valLen === 0)
    ) {
      e.preventDefault();
      return false;
    }
  }

  return (
    <form className="price-request-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="price-request-form__item">
        <Input
          type="text"
          label="Name"
          register={register("name", {
            required: "Name is required",
          })}
          error={errors.name?.message}
        />
      </div>
      <div className="price-request-form__item">
        <Input
          type="text"
          label="E-mail"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: "Email is not valid",
            },
          })}
          error={errors.email?.message}
        />
      </div>
      <div className="price-request-form__item">
        <Input
          type="text"
          label="Phone Number (optionally)"
          register={register("phone", {
            pattern: {
              value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
              message: "Phone is not valid",
            },
          })}
          error={errors.phone?.message}
        />
      </div>
      <div className="price-request-form__item">
        <Input
          type="text"
          label="Usage"
          register={register("usage", {
            required: "Usage is required",
          })}
          error={errors.usage?.message}
        />
      </div>
      <div className="price-request-form__item">
        <Input
          type="text"
          label="Duration"
          register={register("duration", {
            required: "Duration is required",
          })}
          error={errors.duration?.message}
        />
      </div>
      <div className="price-request-form__item">
        <Input
          type="text"
          label="Territory"
          register={register("territory", {
            required: "Territory is required",
          })}
          error={errors.territory?.message}
        />
      </div>
      <div className="price-request-form__item">
        <div className="price-request-form__budget">
          <Input
            type="number"
            label="Budget"
            register={register("budget", {
              required: "Budget is required",
            })}
            error={errors.budget?.message}
            SymbolComponent={SvgEuro}
            onKeyPress={preventNonNumericalInput}
          />
        </div>
      </div>

      <div className="price-request-form__button">
        <Button
          type="primary"
          text="Send Request"
          btnType="submit"
          size="big"
        />
      </div>
    </form>
  );
}

export default PriceRequestForm;
