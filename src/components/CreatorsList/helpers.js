const filterByBigSearch = (list, bigSearchValue) => {
  if (bigSearchValue.length === 0) {
    return list;
  }
  const filteredArr = list.filter((el) => el.tags.includes(bigSearchValue));
  return filteredArr;
};

const filterByMultipleFilter = (list, multipleFilters) => {
  if (Object.keys(multipleFilters).length === 0) {
    return list;
  }
  let filteredNewState = [];
  if ("location" in multipleFilters) {
    const filteredArr = list.reduce((prevValue, item) => {
      const lowerCasedArray = item.location.map((el) => el.toLowerCase());
      if (lowerCasedArray.includes(multipleFilters.location.toLowerCase())) {
        prevValue.push(item);
      }
      return prevValue;
    }, []);
    if (filteredArr.length === 0) return [];
    filteredNewState = [...filteredArr];
  }
  if ("followersMin" in multipleFilters) {
    const currentState = filteredNewState.length > 0 ? filteredNewState : list;
    const filteredArr = currentState.reduce((prev, item) => {
      if (item.followers > multipleFilters.followersMin) {
        prev.push(item);
      }
      return prev;
    }, []);
    if (filteredArr.length === 0) return [];
    filteredNewState = [...filteredArr];
  }
  if ("followersMax" in multipleFilters) {
    const currentState = filteredNewState.length > 0 ? filteredNewState : list;
    const filteredArr = currentState.reduce((prev, item) => {
      if (item.followers < multipleFilters.followersMax) {
        prev.push(item);
      }
      return prev;
    }, []);
    if (filteredArr.length === 0) return [];
    filteredNewState = [...filteredArr];
  }
  if ("expertise" in multipleFilters) {
    const currentState = filteredNewState.length > 0 ? filteredNewState : list;
    const filteredArr = currentState.reduce((prev, item) => {
      if (item.expertise === multipleFilters.expertise) {
        prev.push(item);
      }
      return prev;
    }, []);
    if (filteredArr.length === 0) return [];
    filteredNewState = [...filteredArr];
  }
  if ("studio" in multipleFilters) {
    const currentState = filteredNewState.length > 0 ? filteredNewState : list;
    const filteredArr = currentState.reduce((prev, item) => {
      if (item.studio === multipleFilters.studio) {
        prev.push(item);
      }
      return prev;
    }, []);
    if (filteredArr.length === 0) return [];
    filteredNewState = [...filteredArr];
  }
  if ("postproduction" in multipleFilters) {
    const currentState = filteredNewState.length > 0 ? filteredNewState : list;
    const filteredArr = currentState.reduce((prev, item) => {
      if (item.postproduction === multipleFilters.postproduction) {
        prev.push(item);
      }
      return prev;
    }, []);
    if (filteredArr.length === 0) return [];
    filteredNewState = [...filteredArr];
  }
  if ("videography" in multipleFilters) {
    const currentState = filteredNewState.length > 0 ? filteredNewState : list;
    const filteredArr = currentState.reduce((prev, item) => {
      if (item.videography === multipleFilters.videography) {
        prev.push(item);
      }
      return prev;
    }, []);
    if (filteredArr.length === 0) return [];
    filteredNewState = [...filteredArr];
  }
  return filteredNewState;
};

const filterByJob = (list, jobFilter) => {
  const isDefaultFilterJobValue =
    jobFilter.length === 1 && jobFilter[0] === "all";
  return isDefaultFilterJobValue
    ? list
    : list.filter((el) => jobFilter.includes(el.jobType));
};

export { filterByMultipleFilter, filterByJob, filterByBigSearch };
