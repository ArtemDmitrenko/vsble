import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import useSearch from 'hooks/useSearch';

const ScrollToTop = ({ children }) => {
  const { isActiveBigSearch } = useSearch();

  const location = useLocation();

  useLayoutEffect(() => {
    if (!isActiveBigSearch) {
      document.documentElement.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return children;
};

export default ScrollToTop;
