import CreatorProfileBlock from "components/CreatorProfileBlock/CreatorProfileBlock";

import { dummyImagesArtbuyer } from "./dummyImagesArtbuyer";

function CreatorProfileArtbuyer() {
  return (
    <main className="creator-profile-artbuyer">
      <CreatorProfileBlock
        isArtbuyerAccount
        dummyImages={dummyImagesArtbuyer}
      />
    </main>
  );
}

export default CreatorProfileArtbuyer;
