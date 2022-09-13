import { useState } from "react";

import { ReactComponent as SvgCheckCircle } from "assets/img/check-circle.svg";
import Button from "components/Button/Button";

import "./payment-gateway-form.scss";

function PaymentGatewayForm() {
  const [isConnected, setConnected] = useState(false);

  return (
    <div className="payment-gateway-form">
      <h2 className="payment-gateway-form__title">Connect Payment Gateway</h2>
      <p className="payment-gateway-form__text">
        Please connect a payment gateway so we can pay out your sales. We also
        send you a sales statemt with each sale. The comission on online sales
        is only as low as 15%.
      </p>
      <h3 className="payment-gateway-form__stripe">Stripe</h3>
      {isConnected ? (
        <>
          <div className="payment-gateway-form__message">
            <SvgCheckCircle />
            <p className="payment-gateway-form__message-text">
              Connected to acct_17Cvm1LIEqvPostdt
            </p>
          </div>
          <div className="payment-gateway-form__button">
            <Button
              type="secondary"
              text="Disconnect"
              btnType="button"
              size="big"
              onClick={() => setConnected(!isConnected)}
            />
          </div>
        </>
      ) : (
        <>
          <p className="payment-gateway-form__description">
            Connect your ArtBrief account to your Stripe account
          </p>
          <div className="payment-gateway-form__button">
            <Button
              type="primary"
              text="Connect"
              btnType="button"
              size="big"
              onClick={() => setConnected(!isConnected)}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default PaymentGatewayForm;
