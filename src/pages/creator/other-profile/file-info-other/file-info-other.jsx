import FileInfo from "components/FileInfo/FileInfo";
import { dummyOtherProfileImagesFileInfo } from "./dummyOtherImagesFileInfo";

import "./file-info-other.scss";

function FileInfoOther() {
  return (
    <main className="file-info-other">
      <FileInfo imageListWithData={dummyOtherProfileImagesFileInfo} />
    </main>
  );
}

export default FileInfoOther;
