import './radio-button.scss';

const RadioButton = ({
  name,
  value,
  content,
  isDefaultChecked,
  onChange,
  disabled,
}) => {
  return (
    <label className="radio-button">
      <input
        className="radio-button__input"
        type="radio"
        name={name}
        value={value}
        // checked={isDefaultChecked}
        defaultChecked={isDefaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
      <div className="radio-button__content">{content}</div>
    </label>
  );
};

export default RadioButton;
