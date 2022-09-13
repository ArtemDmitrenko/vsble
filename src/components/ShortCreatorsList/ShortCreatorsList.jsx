import Masonry from "react-masonry-css";
import CreatorCard from "components/CreatorCard/CreatorCard";

import "./short-creators-list.scss";

function ShortCreatorsList({ list }) {
  const cardBreakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="short-creators-list">
      {list.length === 0 ? (
        <p className="short-creators-list__no-data">
          Nothing was found. Try to change filters...
        </p>
      ) : (
        <Masonry
          breakpointCols={cardBreakpoints}
          className="my-masonry-grid2"
          columnClassName="my-masonry-grid_column2"
        >
          {list.map(({ name, href, path, job, address, description }) => {
            return (
              <div key={name} className="short-creators-list__card">
                <CreatorCard
                  href={href}
                  path={path}
                  title={name}
                  value={job}
                  isShort
                />
              </div>
            );
          })}
        </Masonry>
      )}
    </div>
  );
}

export default ShortCreatorsList;
