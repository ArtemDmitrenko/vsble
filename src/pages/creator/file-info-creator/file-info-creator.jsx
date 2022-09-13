import FileInfo from "components/FileInfo/FileInfo";

import { dummyImagesArtbuyer } from "../../artbuyer/creator-profile-artbuyer/dummyImagesArtbuyer";

import "./file-info-creator.scss";

function FileInfoCreator() {
  return (
    <main className="file-info-creator">
      <FileInfo imageListWithData={dummyImagesArtbuyer} />
    </main>
  );
}

export default FileInfoCreator;
