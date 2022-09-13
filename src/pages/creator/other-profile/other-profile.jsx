import ProfileInfo from "components/ProfileInfo/ProfileInfo";
import Sedcard from "components/Sedcard/Sedcard";

import { dummyOtherImages } from "./dummyOtherImages";

import "./other-profile.scss";

function OtherProfile() {
  return (
    <>
      <main className="other-profile__main">
        <section>
          <ProfileInfo isOther />
        </section>
        <section className="other-profile__sedcard">
          <Sedcard sedcardImages={dummyOtherImages} type="other" />
        </section>
      </main>
    </>
  );
}

export default OtherProfile;
