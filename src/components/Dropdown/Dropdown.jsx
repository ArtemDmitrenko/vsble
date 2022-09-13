import Select, { components } from 'react-select';

import CheckboxForDropdown from 'components/CheckboxForDropdown/CheckboxForDropdown';
import Button from 'components/Button/Button';

import './dropdown.scss';

const CustomMultiValueContainer = ({ selectProps, data }) => {
  const values = selectProps.value;
  if (values) {
    return values[values.length - 1].label === data.label
      ? data.label
      : data.label + ', ';
  } else return '';
};

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <CheckboxForDropdown
        title={props.label}
        isChecked={props.isSelected}
      ></CheckboxForDropdown>
    </components.Option>
  );
};

const CustomMenu = ({
  innerRef,
  innerProps,
  isDisabled,
  children,
  selectProps,
}) => {
  const { label, onButtonClick } = selectProps;
  return !isDisabled ? (
    <div ref={innerRef} {...innerProps} className="custom__menu">
      {children}
      <Button
        type="secondary"
        text="Request Addition"
        btnType="button"
        size="big"
        onClick={(e) => onButtonClick(label)}
      />
    </div>
  ) : null;
};

function Dropdown({
  placeholder,
  list,
  label,
  name,
  onChange,
  value,
  isSearchable,
  error,
  isMulti,
  buttonHandler,
  isDisabled,
}) {
  const getValue = (value) => {
    if (!isMulti && list) {
      return value ? list.find((item) => item.value === value) : '';
    }
  };

  const handleDropdownChange = (newValue) => {
    if (onChange) {
      isMulti ? onChange(name, newValue) : onChange(name, newValue.value);
    }
  };

  const renderSelect = () => (
    <Select
      name={name}
      classNamePrefix="custom"
      options={list}
      placeholder={placeholder}
      onChange={handleDropdownChange}
      value={getValue(value)}
      isMulti={isMulti}
      label={label}
      onButtonClick={buttonHandler}
      components={
        isMulti
          ? buttonHandler
            ? {
                Menu: CustomMenu,
                Option: CustomOption,
                MultiValueContainer: CustomMultiValueContainer,
              }
            : {
                Option: CustomOption,
                MultiValueContainer: CustomMultiValueContainer,
              }
          : ''
      }
      closeMenuOnSelect={!isMulti}
      hideSelectedOptions={false}
      allowSelectAll={isMulti}
      isSearchable={isSearchable}
      styles={{
        control: (provided, state) => ({
          ...provided,
          boxShadow: 'none',
        }),
      }}
      isDisabled={isDisabled}
      // menuIsOpen
    />
  );

  return (
    <>
      {label ? (
        <label
          className={`custom__label ${
            isDisabled ? 'custom__label_disabled' : ''
          }`}
        >
          {label}
          {renderSelect()}
        </label>
      ) : (
        renderSelect()
      )}
      {error && <p className="input__error">{error}</p>}
    </>
  );
}

export default Dropdown;
