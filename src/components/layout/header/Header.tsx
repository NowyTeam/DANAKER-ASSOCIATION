import Style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className={Style.Header}>
        <div className={Style.Header_Wrapper}>
          <div className={Style.Logo}>DANAKER ASSOCIATION</div>
          <div className={Style.Links}>
            <NavLink to="/" className={Style.link}>
              Home
            </NavLink>
            <NavLink to="/" className={Style.link}>
              About Us
            </NavLink>
            <NavLink to="/" className={Style.link}>
              Our Events
            </NavLink>
            <NavLink to="/" className={Style.link}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
