import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";

function Navigation({ list }) {
  const [active, setActive] = useState();

  const handleLinkClick = (index) => {
    setActive(index);
  };

  const styleActiveLink = (index, sign) => {
    if (sign === "Favorites") {
      return `navigation__link-favourites  ${
        active === index ? "navigation__link-favourites_active" : ""
      }`;
    }
    return `navigation__link  ${
      active === index ? "navigation__link_active" : ""
    }`;
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {list.map(({ sign, path, scgIconComponent }, index) => {
          return (
            <li key={sign} className="navigation__item">
              <Link
                onClick={handleLinkClick.bind(this, index)}
                to={path}
                className={styleActiveLink(index, sign)}
              >
                {scgIconComponent}
                {sign}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
