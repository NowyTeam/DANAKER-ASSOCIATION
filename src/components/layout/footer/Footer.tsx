import Style from "./Footer.module.scss";
import MainLogo from "../../../assets/main_logo.svg";
import Insta from "../../../assets/instagramm.svg";
import linked from "../../../assets/linkedIN.svg";
import facebook from "../../../assets/facebook.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className={Style.Footer_main}>
        <div className={Style.footer_wrapper}>
          <div className={Style.first_box}>
            <img src={MainLogo} alt="" />
            <h1>DANAKER</h1>
            <h2>Association</h2>
          </div>
          <div className={Style.second_box}>
            <div className={Style.box_wrapper}>
              <div className={Style.footer_box}>
                <h3>Get Involved</h3>
                <div className={Style.footer_links}>
                  <NavLink className={Style.linkFooter} to="/">
                    <p>Home</p>
                  </NavLink>
                  <NavLink className={Style.linkFooter} to="/about">
                    <p>About us</p>
                  </NavLink>
                  <NavLink className={Style.linkFooter} to="/events">
                    <p>Our events</p>
                  </NavLink>
                  <NavLink className={Style.linkFooter} to="/blog">
                    <p>Blog</p>
                  </NavLink>
                  <NavLink className={Style.linkFooter} to="/contact">
                    <p>Contact</p>
                  </NavLink>
                </div>
              </div>
              <div className={Style.footer_box}>
                <h3>Contact</h3>
                <div className={Style.footer_links}>
                  <p>Chmielna 73, Warsaw, Poland</p>
                  <p>Info@Danakerdiaspora.Eu</p>
                </div>
              </div>
            </div>
            <div className={Style.links_logo}>
              <div className={Style.img_border}>
                <img src={Insta} alt="" />
              </div>
              <div className={Style.img_border}>
                <img src={linked} alt="" />
              </div>
              <div className={Style.img_border}>
                <img src={facebook} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
