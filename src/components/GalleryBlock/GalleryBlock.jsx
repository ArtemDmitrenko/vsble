import { useState, useEffect } from 'react';

import FilterButton from 'components/FilterButton/FilterButton';
import MultipleFilter from 'components/MultipleFilter/MultipleFilter';
import CreatorsList from 'components/CreatorsList/CreatorsList';
import BigSearch from 'components/BigSearch/BigSearch';
import Tabs from 'components/Tabs/Tabs';
import useSearch from 'hooks/useSearch';

import { cleanObject } from './helpers';

import dummyCreatorsListForArtbuyer from './dummyCreatorsList.js';
import dummyCreatorsListForCreator from './dummyCreatorsListForCreator.js';
import dummyListNothingFound from './dummyListNothingFound.js';

import './gallery-block.scss';

function GalleryBlock({ isTitleAfterFilters, title, defaultSearchValue }) {
  console.log('render');
  const role = localStorage.getItem('authRole');

  const [jobFilter, setJobFilter] = useState(['all']);
  const [areMultipleFiltersOpened, setAreMultipleFiltersOpened] =
    useState(false);
  const [multipleFilters, setMultipleFilters] = useState({});
  const [multipleFiltersForList, setMultipleFiltersForList] = useState({});
  const [bigSearchValue, setBigSearchValue] = useState(
    defaultSearchValue ? defaultSearchValue : ''
  );
  const { isActiveBigSearch, setIsActiveBigSearch } = useSearch();

  const handleDocumentClick = (e, bigSearchValue) => {
    const { target } = e;
    const isOnBigSearchClick = target.closest('.gallery-block__big-search');
    const bigSearchInput = document.querySelector('.big-search__input');
    const isOnBigSearchButtonClick = target.closest('.search-button');
    if (!isOnBigSearchClick && !isOnBigSearchButtonClick) {
      bigSearchValue === ''
        ? setIsActiveBigSearch(false)
        : setIsActiveBigSearch(true);
    } else if (isOnBigSearchButtonClick) {
      bigSearchInput.focus();
    }
  };

  useEffect(() => {
    document.addEventListener('click', (e) =>
      handleDocumentClick(e, bigSearchValue)
    );
    return () =>
      document.removeEventListener('click', (e) =>
        handleDocumentClick(e, bigSearchValue)
      );
  }, [bigSearchValue]);

  const handleJobFilterChange = (value, isActive) => {
    if (!isActive) {
      const filteredArr = jobFilter.filter((el) => el !== value);
      filteredArr.length === 0
        ? setJobFilter(['all'])
        : setJobFilter([...filteredArr]);
    } else {
      const arrWithNewValue = [...jobFilter, value];
      if (arrWithNewValue.includes('all')) {
        value !== 'all'
          ? setJobFilter([...arrWithNewValue.filter((el) => el !== 'all')])
          : setJobFilter(['all']);
      } else {
        setJobFilter([...arrWithNewValue]);
      }
    }
  };

  const handleMultipleFiltersChange = (filterName, value) => {
    const isFollowersInputChanging =
      filterName === 'followersMin' || 'followersMax';
    if (isFollowersInputChanging && value < 0) {
      setMultipleFilters((prevState) => {
        return { ...prevState };
      });
    } else {
      setMultipleFilters((prevState) => {
        const newState = { ...prevState, [filterName]: value };
        return cleanObject(newState, ['any', '', 0]);
      });
    }
  };

  const handleBigSearchChange = (value) => {
    setBigSearchValue(value);
  };

  const handleFilterClick = () => {
    setAreMultipleFiltersOpened(!areMultipleFiltersOpened);
  };

  const handleApplyClick = () => {
    setAreMultipleFiltersOpened(false);
    setMultipleFiltersForList(multipleFilters);
  };

  const handleFiltersReset = () => {
    setMultipleFilters({});
    setMultipleFiltersForList({});
  };

  const handleBlurFollowersInput = (followersValue) => {
    if (followersValue === 'followersMin' && multipleFilters.followersMax) {
      const { followersMin, followersMax } = multipleFilters;
      if (followersMin >= followersMax) {
        setMultipleFilters((prevState) => {
          return { ...prevState, followersMin: followersMax - 1 };
        });
      }
    }
    if (followersValue === 'followersMax' && multipleFilters.followersMin) {
      const { followersMin, followersMax } = multipleFilters;
      if (followersMax <= followersMin) {
        setMultipleFilters((prevState) => {
          return { ...prevState, followersMax: followersMin + 1 };
        });
      }
    }
  };

  const renderTitle = () => {
    const isBigSearchClosedAndEmpty =
      !isActiveBigSearch && bigSearchValue === '';
    const hasMultipleFilters = Object.keys(multipleFiltersForList).length > 0;
    if (isBigSearchClosedAndEmpty && !hasMultipleFilters) {
      return (
        <h1
          className={`gallery-block__title ${
            isTitleAfterFilters ? 'gallery-block__title-artbuyer' : ''
          }`}
        >
          {title}
        </h1>
      );
    }
  };

  return (
    <div className="gallery-block">
      {!isTitleAfterFilters && renderTitle()}
      <div
        className={`gallery-block__big-search ${
          isActiveBigSearch ? 'gallery-block__big-search_active' : ''
        }`}
      >
        <BigSearch
          value={bigSearchValue}
          onChange={handleBigSearchChange}
          placeholder="Search"
        />
      </div>

      <div className="gallery-block__filter">
        <Tabs activeTabs={jobFilter} onChange={handleJobFilterChange} />
        <FilterButton
          active={areMultipleFiltersOpened}
          isResetBtnActive={Object.keys(multipleFilters).length > 0}
          filtersAmount={Object.keys(multipleFiltersForList).length}
          onClick={handleFilterClick}
          handleFiltersReset={handleFiltersReset}
        />
      </div>

      <div
        className={`gallery-block__filter-fields ${
          areMultipleFiltersOpened ? 'gallery-block__filter-fields_opened' : ''
        }`}
      >
        <MultipleFilter
          list={multipleFilters}
          onApply={handleApplyClick}
          onChange={handleMultipleFiltersChange}
          onBlur={handleBlurFollowersInput}
        />
      </div>
      {isTitleAfterFilters && renderTitle()}
      <div className="gallery-block__cards">
        <CreatorsList
          list={
            role === 'ARTBUYER'
              ? dummyCreatorsListForArtbuyer
              : dummyCreatorsListForCreator
          }
          nothingFoundList={dummyListNothingFound}
          jobFilter={jobFilter}
          multipleFiltersForList={multipleFiltersForList}
          bigSearchValue={bigSearchValue}
        />
      </div>
    </div>
  );
}

export default GalleryBlock;
