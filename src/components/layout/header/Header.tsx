import { useEffect, useState } from "react";
import Style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

interface ActiveLinkProps {
  isActive: boolean;
}

export const Header = () => {
  const [headerScroll, setHeaderScroll] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
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
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <>
      <div className={Style.Header}>
        <div
          className={
            headerScroll
              ? `${Style.Header_Wrapper} ${Style.active}`
              : `${Style.Header_Wrapper}`
          }>
          <div
            className={
              headerScroll ? `${Style.Logo} ${Style.active}` : `${Style.Logo}`
            }>
            <img src={Logo} alt="" />
            <h1 className={Style.CalmLogo}>DANAKER ASSOCIATION</h1>
          </div>
          <div className={Style.bet_links}>
            <div className={Style.Links}>
              <NavLink
                to="/"
                className={Style.link}
                style={activeLink({ isActive: true })}>
                Home
              </NavLink>
              <NavLink
                to="/"
                className={Style.link}
                style={activeLink({ isActive: false })}>
                About us
              </NavLink>
              <NavLink
                to="/"
                className={Style.link}
                style={activeLink({ isActive: false })}>
                Our Events
              </NavLink>
              <NavLink
                to="/"
                className={Style.link}
                style={activeLink({ isActive: false })}>
                Contact
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
    </>
  );
};
