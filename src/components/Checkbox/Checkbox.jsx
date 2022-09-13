import './checkbox.scss';

const Checkbox = (props) => {
  const { title, register } = props;

  return (
    <div className="checkbox">
      <label className="checkbox__filter">
        <input {...register} className="checkbox__content" type="checkbox" />
        <span className="checkbox__indicator" />
        <span className="checkbox__title">{title}</span>
      </label>
    </div>
  );
};

export default Checkbox;
