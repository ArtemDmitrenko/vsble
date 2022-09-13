import React, { useState } from 'react';
import { ReactComponent as SvgOpenedPassword } from 'assets/img/eye.svg';
import { ReactComponent as SvgHidePassword } from 'assets/img/eye-off.svg';

import './input.scss';

function Input({
  name,
  placeholder,
  type,
  register,
  label,
  onChange,
  value,
  error,
  symbolsLimit,
  isTextarea,
  rowsNumber,
  maxLength,
  isPassword,
  onBlur,
  onKeyPress,
  SymbolComponent,
  min,
  disabled,
}) {
  const [passwordIsHide, setPasswordIsHide] = useState(true);
  const handleInputChange = (e) => {
    const {
      target: { value },
    } = e;
    if (onChange) {
      const isNumberValue = name === 'followersMin' || name === 'followersMax';
      isNumberValue ? onChange(name, Number(value)) : onChange(name, value);
    }
  };

  const handleButtonClick = (e) => {
    setPasswordIsHide(!passwordIsHide);
    const closestWrapper = e.target.closest('.input__wrapper');
    const closestInput = closestWrapper.querySelector('input');
    if (closestInput.type === 'password') {
      closestInput.type = 'text';
    } else if (closestInput.type === 'text') {
      closestInput.type = 'password';
    }
    closestInput.focus();
  };

  const styleInput = (error, isPassword) => {
    const styles = ['input'];
    if (disabled) styles.push('input_disabled');
    if (error) styles.push('input_error');
    if (isPassword) styles.push('input_with-button');
    return styles.join(' ');
  };

  const renderInput = () => {
    return register ? (
      <div className="input__wrapper">
        {(symbolsLimit || symbolsLimit === 0) && (
          <span className="input__symbols-limit">{symbolsLimit}</span>
        )}
        {isTextarea ? (
          <textarea
            {...register}
            type={type}
            placeholder={placeholder}
            className={`input__textarea ${error ? 'input_error' : ''}`}
            rows={rowsNumber}
            maxLength={String(maxLength)}
            value={value}
          />
        ) : (
          <>
            <input
              {...register}
              type={type}
              placeholder={placeholder}
              className={styleInput(error, isPassword)}
              onBlur={onBlur}
              min={min}
              value={value}
              disabled={disabled}
              onKeyPress={onKeyPress}
            />
            {renderPasswordHideButton()}
            {SymbolComponent && renderSymbol()}
          </>
        )}
      </div>
    ) : (
      <div className="input__wrapper">
        {(symbolsLimit || symbolsLimit === 0) && (
          <span className="input__symbols-limit">{symbolsLimit}</span>
        )}
        {isTextarea ? (
          <textarea
            value={value}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`input__textarea ${error ? 'input_error' : ''}`}
            onChange={handleInputChange}
            rows={rowsNumber}
            maxLength={String(maxLength)}
          />
        ) : (
          <>
            <input
              value={value}
              name={name}
              type={type}
              placeholder={placeholder}
              className={styleInput(error, isPassword)}
              onChange={handleInputChange}
              onBlur={onBlur}
              onKeyPress={onKeyPress}
              min={min}
              disabled={disabled}
            />
            {renderPasswordHideButton()}
            {SymbolComponent && renderSymbol()}
          </>
        )}
      </div>
    );
  };

  const renderPasswordHideButton = () => {
    return (
      isPassword && (
        <button
          className="input__show-password-button"
          onClick={handleButtonClick}
          type="button"
        >
          {passwordIsHide ? <SvgHidePassword /> : <SvgOpenedPassword />}
        </button>
      )
    );
  };

  const renderSymbol = () => {
    return <span className="input__symbol">{<SymbolComponent />}</span>;
  };

  return (
    <>
      {label ? (
        <label
          className={`input__label ${disabled ? 'input__label_disabled' : ''}`}
        >
          {label}
          {renderInput()}
        </label>
      ) : (
        <>
          {label}
          {renderInput()}
        </>
      )}
      {error && <p className="input__error">{error}</p>}
    </>
  );
}

export default Input;
