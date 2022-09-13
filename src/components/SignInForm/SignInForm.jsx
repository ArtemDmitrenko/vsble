import React from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import useAuth from "hooks/useAuth";

import "./sign-in-form.css";

const signInSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Required field",
      "string.email": "Invalid email address",
    }),
  password: Joi.string()
    .required()
    .messages({ "string.empty": "Required field" }),
});

function SignInForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signInSchema),
  });

  const { user } = useAuth();
  const { authError } = user;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
      <h3 className="sign-in-form__title">Log in</h3>
      <div className="sign-in-form__input">
        <Input
          register={register("email")}
          placeholder="Email"
          type="email"
        ></Input>
        {errors.email?.message && (
          <p className="sign-in-form_error">{errors.email?.message}</p>
        )}
      </div>
      <div className="sign-in-form__input">
        <Input
          register={register("password")}
          placeholder="Password"
          type="password"
        ></Input>
        <p className="sign-in-form_error">{errors.password?.message}</p>
      </div>
      <div className="sign-in-form__button">
        <Button btnType="submit" size="big" type="secondary" text="Log In" />
      </div>

      {authError !== "" && (
        <div className="sign-in-form_errorAuth">
          <p className="sign-in-form_error">{authError}</p>
        </div>
      )}

      <div className="sign-in-form__notRegistered">
        <p>No account?</p>
        <Button
          size="big"
          isLink
          href="/sign-up"
          type="primary"
          text="Sign Up"
        />
      </div>
    </form>
  );
}

export default SignInForm;
