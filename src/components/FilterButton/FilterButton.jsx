import React from 'react';
import { ReactComponent as SvgFilter } from 'assets/img/filter.svg';

import './filter-button.scss';

function FilterButton({
  active,
  filtersAmount,
  onClick,
  handleFiltersReset,
  isResetBtnActive,
}) {
  const renderFilterButton = () => {
    return filtersAmount > 0 ? (
      <span className="filter-button__amount">{filtersAmount}</span>
    ) : (
      <SvgFilter />
    );
  };

  return (
    <div className="filter-button">
      {active ? (
        <>
          {isResetBtnActive && (
            <button
              type="button"
              onClick={handleFiltersReset}
              className="filter-button__reset"
            >
              <span className="filter-button__close"></span>
              Reset Filter
            </button>
          )}

          <button
            onClick={onClick}
            type="button"
            className="filter-button__opening"
          >
            {renderFilterButton()}
            Filter
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="filter-button__closed-filter"
        >
          {renderFilterButton()}
          Filter
        </button>
      )}
    </div>
  );
}

export default FilterButton;
