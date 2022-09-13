import GalleryBlock from 'components/GalleryBlock/GalleryBlock';

import './showroom.scss';

function Showroom() {
  return (
    <main className="showroom">
      <div className="showroom__content">
        <GalleryBlock
          isTitleAfterFilters
          title="Here are some trending Creators"
        />
      </div>
    </main>
  );
}

export default Showroom;
