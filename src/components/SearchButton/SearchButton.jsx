import { ReactComponent as SearchIconComponent } from 'assets/img/search.svg';

import './search-button.scss';

function SearchButton({ handleClick, active }) {
  const handleButtonClick = () => {
    handleClick();
  };

  return (
    <div className="search-button">
      <button
        onClick={handleButtonClick}
        className={`search-button__button ${
          active ? 'search-button__button_active' : ''
        }`}
        type="button"
      >
        <SearchIconComponent />
        Search
      </button>
    </div>
  );
}

export default SearchButton;
