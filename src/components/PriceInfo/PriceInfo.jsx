import Button from "components/Button/Button";
import RadioButton from "components/RadioButton/RadioButton";
import Tooltip from "components/Tooltip/Tooltip";

import "./price-info.scss";

function PriceInfo() {
  return (
    <div className="price-info">
      <div className="price-info__prices">
        <div className="price-info__price-item">
          <div className="price-info__radio-button">
            <RadioButton
              name="license"
              value="onlineLicense"
              content="Online License"
              isDefaultChecked
            />
          </div>
          <div className="price-info__tooltip">
            <Tooltip
              firstTitle="Online License"
              firstText="Unlimited, worldwide commercial usage for online media"
              secondTitle="VAT"
              secondText="Value-added tax will be calculated at checkout based on your country and account type."
              arrowPosition="top"
            />
          </div>
          <p className="price-info__price-block">
            <span>€</span> 20.00
          </p>
        </div>
        <div className="price-info__price-item">
          <div className="price-info__radio-button">
            <RadioButton
              name="license"
              value="editorialLicense"
              content="Editorial License"
            />
          </div>
          <div className="price-info__tooltip">
            <Tooltip
              firstTitle="Editorial License"
              firstText="Unlimited, worldwide commercial usage for online media"
              secondTitle="VAT"
              secondText="Value-added tax will be calculated at checkout based on your country and account type."
              arrowPosition="top"
            />
          </div>
          <p className="price-info__price-block">
            <span>€</span> 80.00
          </p>
        </div>
        <div className="price-info__price-item">
          <div className="price-info__radio-button">
            <RadioButton
              name="license"
              value="extendedLicense"
              content="Extended License"
            />
          </div>
          <div className="price-info__tooltip">
            <Tooltip
              firstTitle="Extended License"
              firstText="Unlimited, worldwide commercial usage for online media"
              secondTitle="VAT"
              secondText="Value-added tax will be calculated at checkout based on your country and account type."
              arrowPosition="top"
            />
          </div>
          <p className="price-info__price-block">
            <span>€</span> 250.00
          </p>
        </div>
      </div>
      <div className="price-info__button">
        <Button
          type="primary"
          text="Add to Cart"
          btnType="button"
          size="big"
          // onClick={handleAskImagePriceClick}
        />
      </div>
      <p className="price-info__description">
        Your project requires specific usage that is not reflected in the
        pricing above?
      </p>
    </div>
  );
}

export default PriceInfo;
