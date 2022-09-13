import { useForm, Controller } from "react-hook-form";
import { useQuery } from "@apollo/client";

import Button from "components/Button/Button";
import Dropdown from "components/Dropdown/Dropdown";
import Input from "components/Input/Input";
import { COUNTRIES } from "query/common";
import createCountriesList from "helpers/createCountriesList";

import "./marketplace-form.scss";

function MarketplaceForm({ onSubmitHandler }) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { loading, error, data } = useQuery(COUNTRIES);

  let dataForDropdown;
  if (!loading) {
    const {
      countries: { data: countriesArr },
    } = data;
    dataForDropdown = createCountriesList(countriesArr);
  }

  const onSubmit = (formData) => {
    console.log(formData);
    onSubmitHandler();
  };

  const nameWatchFields = watch(["firstName", "surname"]);

  const renderErrorInNameField = () => {
    const firstName = nameWatchFields[0];
    if (firstName && firstName !== "") {
      const isUpperCase = firstName[0].toUpperCase() === firstName[0];
      if (!isUpperCase) {
        return "The first letter must be capital";
      }
    }
  };

  const renderErrorInSurnameField = () => {
    const lastName = nameWatchFields[1];
    if (lastName && lastName !== "") {
      const isUpperCase = lastName[0].toUpperCase() === lastName[0];
      if (!isUpperCase) {
        return "The first letter must be capital";
      }
    }
  };

  return (
    <div className="marketplace-form">
      <h2 className="marketplace-form__title">Marketplace</h2>
      <p className="payment-gateway-form__text">
        Selling with VSBLE.space pricing model. If you offer any image with
        VSBLE.space Pricing model for immediate purchase you must provide full
        details of your invoice address. This is necessary so we can issue
        proper sales statemetns for your accounting.
      </p>
      <p className="payment-gateway-form__text">
        All other image offered on request can not be purchased online. The
        buyer will contact you for pricing.
      </p>
      <p className="payment-gateway-form__text">
        To sell images online the below information must be filled out.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="marketplace-form__item">
          <div className="marketplace-form__double-item">
            <div className="marketplace-form__double-item-half1">
              <Input
                type="text"
                register={register("firstName", {
                  pattern: {
                    value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
                    message: "First name is not valid",
                  },
                })}
                label="First name"
                error={renderErrorInNameField() || errors.firstName?.message}
              />
            </div>
            <div className="marketplace-form__double-item-half2">
              <Input
                type="text"
                register={register("surname", {
                  pattern: {
                    value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
                    message: "Surname is not valid",
                  },
                })}
                label="Surname"
                error={renderErrorInSurnameField() || errors.surname?.message}
              />
            </div>
          </div>
        </div>
        <p className="marketplace-form__subtitle">Billing Address</p>
        <div className="marketplace-form__item">
          <Controller
            control={control}
            name="countryId"
            defaultValue={52}
            render={({
              field: { onChange, value, defaultValue },
              fieldState: { error },
            }) => {
              return (
                <>
                  <Dropdown
                    list={dataForDropdown}
                    label="Country"
                    isSearchable
                    value={value}
                    onChange={(name, newValue) => onChange(newValue)}
                    error={error && error.message}
                    defaultValue={defaultValue}
                    isDisabled
                  />
                </>
              );
            }}
          />
        </div>
        <div className="marketplace-form__item">
          <Input
            type="text"
            label="Street Line 1"
            register={register("streetLine1")}
          />
        </div>
        <div className="marketplace-form__item">
          <Input
            type="text"
            label="Street Line 2"
            register={register("streetLine2")}
          />
        </div>
        <div className="marketplace-form__item">
          <div className="marketplace-form__double-item">
            <div className="marketplace-form__double-item-half1">
              <Input
                type="text"
                register={register("zip", {
                  pattern: {
                    value:
                      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){4,14}(\s*)?$/,
                    message: "Zip is not valid",
                  },
                })}
                label="Zip"
                error={errors.zip?.message}
              />
            </div>
            <div className="marketplace-form__double-item-half2">
              <Input
                type="text"
                register={register("city", {
                  pattern: {
                    value:
                      /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
                    message: "City is not valid",
                  },
                })}
                label="City"
                error={errors.city?.message}
              />
            </div>
          </div>
        </div>
        <div className="marketplace-form__item">
          <Input type="text" label="Company" register={register("company")} />
        </div>

        <div className="marketplace-form__button">
          <Button
            type="primary"
            text="Save Changes"
            btnType="submit"
            size="big"
          />
        </div>
      </form>
    </div>
  );
}

export default MarketplaceForm;
