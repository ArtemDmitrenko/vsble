import { createContext, useState } from "react";

export const SearchContext = createContext(null);

function SearchProvider({ children }) {
  const [isActiveBigSearch, setIsActiveBigSearch] = useState(false);

  const value = {
    isActiveBigSearch,
    setIsActiveBigSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export default SearchProvider;
