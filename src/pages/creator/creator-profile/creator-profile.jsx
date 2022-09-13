import { dummyImagesArtbuyer } from "../../artbuyer/creator-profile-artbuyer/dummyImagesArtbuyer";
import CreatorProfileBlock from "components/CreatorProfileBlock/CreatorProfileBlock";

function CreatorProfile() {
  return (
    <main className="creator-profile">
      <CreatorProfileBlock dummyImages={dummyImagesArtbuyer} isCreatorAccount />
    </main>
  );
}

export default CreatorProfile;
