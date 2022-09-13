import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import logo from "assets/img/logo.svg";
import twitter from "assets/img/Twitter.svg";
import instagram from "assets/img/Instagram.svg";
import facebook from "assets/img/Facebook.svg";

import "./footer.scss";

const dummyFooterLinks = [
  { sign: "Imprint", path: "https://www.mock-link.com/" },
  { sign: "Privacy", path: "https://www.mock-link.com/" },
  { sign: "Terms", path: "https://www.mock-link.com/" },
  { sign: "Cookie Policy", path: "https://www.mock-link.com/" },
  { sign: "Brands Access", path: "https://www.mock-link.com/" },
  { sign: "Creator Access", path: "https://www.mock-link.com/" },
];

function Footer({ handleSubscriptionClick }) {
  const [active, setActive] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleLinkClick = (index) => {
    setActive(index);
  };

  const styleActiveLink = (index) => {
    return `footer__link ${active === index ? "footer__link_active" : ""}`;
  };

  const onSubmit = async (formData) => {
    handleSubscriptionClick();
  };

  return (
    <footer className="footer">
      <div className="footer__logo-copyright">
        <img src={logo} alt="logo" />
        <p className="footer__copyright">
          Copyright © Vsble.space
          <br />
          All rights reserved
        </p>
      </div>
      <div className="footer__links">
        <ul className="footer__nav-list">
          {dummyFooterLinks.map((item, index) => {
            return (
              <li key={item.sign} className="footer__nav-item">
                <Link
                  onClick={handleLinkClick.bind(this, index)}
                  to={item.path}
                  className={styleActiveLink(index)}
                >
                  {item.sign}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer__contacts">
        <span className="footer__title">Contacts</span>
        <a href="mailto:support@artbrief.com" className="footer__email">
          support@artbrief.com
        </a>
        <div className="footer__socials">
          <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
            <img
              src={facebook}
              alt="facebook"
              className="footer__social-net"
            ></img>
          </a>
          <a target="_blank" href="https://www.twitter.com/" rel="noreferrer">
            <img
              src={twitter}
              alt="twitter"
              className="footer__social-net"
            ></img>
          </a>
          <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
            <img
              src={instagram}
              alt="instagram"
              className="footer__social-net"
            ></img>
          </a>
        </div>
      </div>
      <div className="footer__subscribe">
        <span className="footer__title">Let's be in touch</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="footer__subscribe-block">
            <Input
              placeholder="E-mail"
              type="email"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  message: "Email is not valid",
                },
              })}
            />

            <div className="footer__button-wrapper">
              <Button
                size="big"
                type="primary"
                text="Send"
                btnType="submit"
                // onClick={handleSubscriptionClick}
              />
            </div>
          </div>
          {errors.email && (
            <p className="input__error">{errors.email?.message}</p>
          )}
        </form>
      </div>
    </footer>
  );
}

export default Footer;
