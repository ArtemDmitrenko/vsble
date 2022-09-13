import './checkbox-for-dropdown.scss';

const CheckboxForDropdown = (props) => {
  const { title, isChecked } = props;

  return (
    <div className="checkbox-for-dropdown">
      <label
        className="checkbox-for-dropdown__filter"
        onClick={(e) => e.preventDefault()}
      >
        <input
          className="checkbox-for-dropdown__content"
          type="checkbox"
          checked={isChecked}
          readOnly
        />
        <span className="checkbox-for-dropdown__indicator" />
        <span className="checkbox-for-dropdown__title">{title}</span>
      </label>
    </div>
  );
};

export default CheckboxForDropdown;
