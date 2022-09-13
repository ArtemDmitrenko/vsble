import { useContext } from "react";
import { SearchContext } from "hoc/SearchProvider";

function useSearch() {
  return useContext(SearchContext);
}

export default useSearch;
