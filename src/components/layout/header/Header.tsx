import { useEffect, useState } from "react";
import Style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

interface ActiveLinkProps {
  isActive: boolean;
}

export const Header = () => {
  const [delayedActivation, setDelayedActivation] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll(true);

        // Add a delay of 3 seconds before activating the "second_active" class
        setTimeout(() => {
          setDelayedActivation(true);
        }, 1400);
      } else {
        setHeaderScroll(false);
        setDelayedActivation(false);
      }
    };

    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const activeLink = ({ isActive }: ActiveLinkProps) => {
    return {
      color: isActive ? "#802224" : "black",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <div className={`${Style.Header} ${headerScroll ? Style.active : ""}`}>
      <div
        className={`${Style.Header_Wrapper} ${
          headerScroll ? Style.active : ""
        }`}>
        <div
          className={`${Style.Logo} ${headerScroll ? Style.active : ""} ${
            delayedActivation && headerScroll ? Style.second_active : ""
          }`}>
          <img src={Logo} alt="" />
          <h1 className={Style.CalmLogo}>DANAKER ASSOCIATION</h1>
        </div>
        <div className={Style.bet_links}>
          <div className={Style.Links}>
            <NavLink to="/" className={Style.link} style={activeLink}>
              Home
            </NavLink>
            <NavLink to="/about" className={Style.link} style={activeLink}>
              About us
            </NavLink>
            <NavLink to="/events" className={Style.link} style={activeLink}>
              Our Events
            </NavLink>
            <NavLink to="/Contact" className={Style.link} style={activeLink}>
              Contact
            </NavLink>
            <NavLink to="/Blog" className={Style.link} style={activeLink}>
              Blog
            </NavLink>
          </div>
          <div className={Style.Donate}>
            <NavLink to="/" className={Style.Donate_Link}>
              DONATE
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
