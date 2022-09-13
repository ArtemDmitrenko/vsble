import ProfileInfo from 'components/ProfileInfo/ProfileInfo';
import Sedcard from 'components/Sedcard/Sedcard';

import './creator-profile-block.scss';
import { useNavigate } from 'react-router-dom';

function CreatorProfileBlock({
  isArtbuyerAccount,
  isCreatorAccount,
  dummyImages,
}) {
  const navigation = useNavigate();

  const handleButtonBackClick = () => {
    navigation(-1);
  };

  const defineType = () => {
    if (isArtbuyerAccount) return 'artbuyer';
    if (isCreatorAccount) return 'creator';
  };

  return (
    <div className="creator-profile-block">
      {isArtbuyerAccount && (
        <button
          className="creator-profile-block__back-button"
          onClick={handleButtonBackClick}
        >
          Back to Search Results
        </button>
      )}

      <div className="creator-profile-block__wrapper">
        <section>
          <ProfileInfo
            isArtbuyerAccount={isArtbuyerAccount}
            isCreatorAccount={isCreatorAccount}
          />
        </section>
        <section className="creator-profile-block__sedcard">
          <Sedcard sedcardImages={dummyImages} type={defineType()} />
        </section>
      </div>
    </div>
  );
}

export default CreatorProfileBlock;
