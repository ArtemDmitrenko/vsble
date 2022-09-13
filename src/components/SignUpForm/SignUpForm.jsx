import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Dropdown from "components/Dropdown/Dropdown";
import Toggle from "components/Toggle/Toggle";
import createCountriesList from "helpers/createCountriesList";
import { COUNTRIES } from "query/common";
import { ARTBUYER_SIGN_UP, PHOTOGRAPHER_SIGN_UP } from "query/auth";

import "./sign-up-form.css";

const dropdownList = [
  { value: "brand", label: "As a Brand" },
  { value: "creator", label: "As a Creator" },
];

function SignUpForm({ defaultRole }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [role, setRole] = useState(defaultRole);
  const [registrationError, setRegistrationError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const { loading, error, data } = useQuery(COUNTRIES);
  const [
    photographerSignUp,
    {
      data: photographerData,
      loading: photographerLoading,
      error: photographerError,
    },
  ] = useMutation(PHOTOGRAPHER_SIGN_UP);
  const [
    artbuyerSignUp,
    { data: artbuyerData, loading: artbuyerLoading, error: artbuyerError },
  ] = useMutation(ARTBUYER_SIGN_UP);

  let dataForDropdown;
  if (!loading) {
    const {
      countries: { data: countriesArr },
    } = data;
    dataForDropdown = createCountriesList(countriesArr);
  }

  const handleRoleDropdownChange = (name, value) => {
    setRole(value);
  };

  const validateFormData = (data) => {
    const validData = Object.fromEntries(
      Object.entries(data).filter((el) => el[1] !== "")
    );
    if (role === "brand") {
      return { ...validData, countryId: String(validData.countryId) };
    }
    return validData;
  };

  const setRegistration = (success, errors) => {
    if (success) {
      setRegistrationError("");
      setRegistrationSuccess(true);
    } else {
      const { _error: errorText } = errors;
      setRegistrationError(errorText);
    }
  };

  const onSubmit = async (formData) => {
    reset();
    const validFormData = validateFormData(formData);
    let registeredUser;
    if (role === "creator") {
      registeredUser = await photographerSignUp({
        variables: {
          ...validFormData,
        },
      });
      const {
        data: {
          photographerSignUp: { success, errors },
        },
      } = registeredUser;
      setRegistration(success, errors);
    } else if (role === "brand") {
      registeredUser = await artbuyerSignUp({
        variables: {
          ...validFormData,
        },
      });
      const {
        data: {
          artbuyerSignUp: { success, errors },
        },
      } = registeredUser;
      setRegistration(success, errors);
    }
  };

  const renderFields = () => {
    if (role === "creator") {
      return (
        <>
          <Input
            register={register("siteURL", {
              required: "Site URL is required",
            })}
            error={errors.siteURL?.message}
            placeholder="Site URL"
            type="text"
          ></Input>
        </>
      );
    } else if (role === "brand") {
      return (
        <>
          <Input
            register={register("company", {
              required: "Company is required",
            })}
            error={errors.company?.message}
            placeholder="Company"
            type="text"
          ></Input>
        </>
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
      <h3 className="sign-up-form__title">Sign up</h3>
      <div className="sign-up-form__input">
        <Dropdown
          placeholder="Sign Up as..."
          list={dropdownList}
          onChange={(name, value) => handleRoleDropdownChange(name, value)}
          value={role}
        />
      </div>
      <div className="sign-up-form__input">
        <Controller
          control={control}
          name="countryId"
          rules={{
            required: "Country is required",
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <>
                <Dropdown
                  placeholder="Country"
                  list={dataForDropdown}
                  isSearchable
                  value={value}
                  onChange={(name, newValue) => onChange(newValue)}
                  error={error && error.message}
                />
              </>
            );
          }}
        />
      </div>
      <div className="sign-up-form__input">
        <Input
          register={register("firstName", {
            required: "First name is required",
          })}
          placeholder="First name"
          type="text"
          error={errors.firstName?.message}
        ></Input>
      </div>
      <div className="sign-up-form__input">
        <Input
          register={register("lastName", {
            required: "Last name is required",
          })}
          error={errors.lastName?.message}
          placeholder="Last name"
          type="text"
        ></Input>
      </div>
      <div className="sign-up-form__input">
        <Input
          register={register("email", {
            required: "Email is required",
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: "Email is not valid",
            },
          })}
          error={errors.email?.message}
          placeholder="Email"
          type="email"
        ></Input>
      </div>
      <div className="sign-up-form__input">
        <Input
          register={register("login", {
            required: "Login is required",
          })}
          error={errors.login?.message}
          placeholder="Login"
          type="text"
        ></Input>
      </div>
      <div className="sign-up-form__input">
        <Input
          register={register("password", {
            required: "Password is required",
          })}
          error={errors.password?.message}
          placeholder="Password"
          type="password"
        ></Input>
      </div>
      <div className="sign-up-form__input">{renderFields()}</div>
      <div>
        <Toggle
          title="Receive news letter"
          register={register("receiveNewsletter")}
        />
      </div>
      <div className="sign-up-form__button">
        <Button btnType="submit" size="big" type="primary" text="Sign up" />
      </div>

      {registrationSuccess && (
        <div className="sign-up-form__success-container">
          <p className="sign-up-form__success-text">
            You're successfully registered.
            <br />
            <Link className="sign-up-form__success-link" to="/sign-in">
              Try to Log In
            </Link>
          </p>
        </div>
      )}

      {registrationError !== "" && (
        <div className="sign-up-form_errorAuth">
          <p className="sign-up-form_error">{registrationError}</p>
        </div>
      )}

      <div className="sign-up-form__notRegistered">
        <p>Already have account?</p>
        <Button
          size="big"
          isLink
          href="/sign-in"
          type="secondary"
          text="Log in"
        />
      </div>
    </form>
  );
}

export default SignUpForm;
