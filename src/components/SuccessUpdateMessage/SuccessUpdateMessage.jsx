import { ReactComponent as SvgCheckCircle } from "assets/img/check-circle.svg";

import "./success-update-message.scss";

function SuccessUpdateMessage({ text }) {
  return (
    <div className="success-update-message">
      <span className="success-update-message__checkmark">
        <SvgCheckCircle />
      </span>
      <p className="success-update-message__text">{text}</p>
    </div>
  );
}

export default SuccessUpdateMessage;
