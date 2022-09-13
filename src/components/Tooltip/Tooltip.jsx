import { useState } from 'react';

import './tooltip.scss';

const Tooltip = ({
  firstTitle,
  firstText,
  secondTitle,
  secondText,
  disabled,
  arrowPosition,
}) => {
  const [isActive, setActive] = useState(false);

  const handleIconFocus = () => setActive(true);
  const handleIconBlur = () => setActive(false);

  const styleBlock = () => {
    const blockStyles = ['tooltip__block'];
    if (arrowPosition === 'bottom')
      blockStyles.push('tooltip__block_arrow-position_bottom');
    if (arrowPosition === 'top')
      blockStyles.push('tooltip__block_arrow-position_top');
    if (arrowPosition === 'left')
      blockStyles.push('tooltip__block_arrow-position_left');
    if (arrowPosition === 'right')
      blockStyles.push('tooltip__block_arrow-position_right');
    return blockStyles.join(' ');
  };

  return (
    <span className="tooltip">
      <button
        className={`tooltip__icon ${disabled ? 'tooltip__icon_disabled' : ''}`}
        type="button"
        aria-label="info icon"
        onMouseOver={handleIconFocus}
        onMouseOut={handleIconBlur}
        onFocus={handleIconFocus}
        onBlur={handleIconBlur}
      />
      {isActive && (
        <div className={styleBlock()}>
          <h3 className="tooltip__title">{firstTitle}</h3>
          <p className="tooltip__text">{firstText}</p>
          <h3 className="tooltip__title">{secondTitle}</h3>
          <p className="tooltip__text">{secondText}</p>
        </div>
      )}
    </span>
  );
};

export default Tooltip;
