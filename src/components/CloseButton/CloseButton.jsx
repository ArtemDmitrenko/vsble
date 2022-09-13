import "./close-button.scss";

function CloseButton({ onClick, hasBackground }) {
  return (
    <div className="close-button">
      <button
        className={`close-button__button ${
          hasBackground ? "close-button__button_solid" : ""
        }`}
        onClick={onClick}
      ></button>
    </div>
  );
}

export default CloseButton;
