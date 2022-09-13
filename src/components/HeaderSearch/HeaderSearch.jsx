import SearchButton from 'components/SearchButton/SearchButton';
import useSearch from 'hooks/useSearch';
import { useLocation, useNavigate } from 'react-router-dom';

import './header-search.scss';

function HeaderSearch() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);
  const { isActiveBigSearch, setIsActiveBigSearch } = useSearch();

  const handleSearchClick = () => {
    if (pathname !== '/') {
      navigate('/');
    }
    setIsActiveBigSearch((prevState) => !prevState);
  };

  const renderSearch = () => {
    return (
      <SearchButton
        active={isActiveBigSearch}
        handleClick={handleSearchClick}
      />
    );
  };

  return <div className="header-search">{renderSearch()}</div>;
}

export default HeaderSearch;
