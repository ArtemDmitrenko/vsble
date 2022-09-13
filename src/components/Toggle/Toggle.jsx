import "./toggle.scss";

const Toggle = (props) => {
  const { title, register } = props;

  return (
    <label className="toggle">
      <input {...register} className="toggle__content" type="checkbox" />
      <span className="toggle__indicator" />
      <span className="toggle__title">{title}</span>
    </label>
  );
};

export default Toggle;
