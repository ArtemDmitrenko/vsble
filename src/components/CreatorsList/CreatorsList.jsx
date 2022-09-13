import Masonry from 'react-masonry-css';
import CreatorCard from 'components/CreatorCard/CreatorCard';

import {
  filterByMultipleFilter,
  filterByJob,
  filterByBigSearch,
} from './helpers';

import './creators-list.scss';

function CreatorsList({
  list,
  nothingFoundList,
  jobFilter,
  multipleFiltersForList,
  bigSearchValue,
}) {
  const cardBreakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  let finalFilteredArr = [];
  const filteredByJobList = filterByJob(list, jobFilter);
  finalFilteredArr = [...filteredByJobList];

  const filteredByMultipleFilter = filterByMultipleFilter(
    finalFilteredArr,
    multipleFiltersForList
  );
  finalFilteredArr = [...filteredByMultipleFilter];

  const filteredBySearchArr = filterByBigSearch(
    finalFilteredArr,
    bigSearchValue
  );
  finalFilteredArr = [...filteredBySearchArr];

  const renderList = (list) => (
    <Masonry
      breakpointCols={cardBreakpoints}
      className="my-masonry-grid2"
      columnClassName="my-masonry-grid_column2"
    >
      {list.map(({ name, href, path, job, address, description }) => {
        return (
          <div key={name} className="creators-list__card">
            <CreatorCard
              href={href}
              path={path}
              title={name}
              value={job}
              address={address}
              description={description}
            />
          </div>
        );
      })}
    </Masonry>
  );

  return (
    <div className="creators-list">
      {finalFilteredArr.length === 0 ? (
        <>
          <p className="creators-list__no-data-title">Nothing was found</p>
          <p className="creators-list__no-data-text">
            Try to change filters or you can see other trending creators below
          </p>
          {renderList(nothingFoundList)}
        </>
      ) : (
        renderList(finalFilteredArr)
      )}
    </div>
  );
}

export default CreatorsList;
