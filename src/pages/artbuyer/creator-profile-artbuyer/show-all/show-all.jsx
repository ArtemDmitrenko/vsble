import Sedcard from "components/Sedcard/Sedcard";

import { dummyImagesArtbuyer } from "../dummyImagesArtbuyer";

import "./show-all.scss";

function ShowAll() {
  return (
    <>
      <main className="show-all__main">
        <section>
          <h1 className="show-all__name">Annija Abzalone</h1>
        </section>
        <section className="show-all__sedcard">
          <Sedcard sedcardImages={dummyImagesArtbuyer} type="artbuyer" />
        </section>
      </main>
    </>
  );
}

export default ShowAll;
