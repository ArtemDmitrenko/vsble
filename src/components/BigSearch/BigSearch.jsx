import "./big-search.scss";

function BigSearch({ onChange, value, placeholder }) {
  const handleInputChange = (e) => {
    const {
      target: { value },
    } = e;
    onChange(value);
  };

  return (
    <div className="big-search">
      <input
        onChange={handleInputChange}
        value={value}
        type="text"
        className="big-search__input"
        placeholder={placeholder}
        autoFocus
      ></input>
    </div>
  );
}

export default BigSearch;
