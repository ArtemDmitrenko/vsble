import "./nft.scss";

function Nft() {
  return (
    <div className="nft">
      <h3 className="nft__title">Display your NFTs on your profile</h3>
      <p className="nft__description">
        Connect your wallet with your VSBLE.match account, then add your NFTs to
        your profile.
      </p>
      <div className="nft__number">1</div>
      <div className="nft__text">
        <span className="nft__text-link">
          <a href="https://www.google.com/" className="nft__link">
            Add your wallet
          </a>
        </span>{" "}
        to your VSBLE.match Account
      </div>
      <div className="nft__number">2</div>
      <div className="nft__text">Display your NFTs on your profile</div>
    </div>
  );
}

export default Nft;
