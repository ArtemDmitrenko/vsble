import FileInfo from "components/FileInfo/FileInfo";
import { dummyImagesArtbuyer } from "../dummyImagesArtbuyer";

import "./file-info-artbuyer.scss";

function FileInfoArtbuyer() {
  return (
    <main className="file-info-artbuyer">
      <FileInfo imageListWithData={dummyImagesArtbuyer} isForArtbuyer />
    </main>
  );
}

export default FileInfoArtbuyer;
