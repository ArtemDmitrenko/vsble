import ShortCreatorsList from "components/ShortCreatorsList/ShortCreatorsList";
import dummyCreatorsList from "components/GalleryBlock/dummyCreatorsList";

import "./favourites.scss";

function Showroom() {
  return (
    <main className="favourites">
      <h1 className="favourites__title">Favourites</h1>

      <div className="favourites__cards">
        <ShortCreatorsList list={dummyCreatorsList} isShortCard />
      </div>
    </main>
  );
}

export default Showroom;
