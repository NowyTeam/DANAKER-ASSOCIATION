import Style from "./Footer.module.scss";
import MainLogo from "../../../assets/main_logo.svg";
import Insta from "../../../assets/instagramm.svg";
import linked from "../../../assets/linkedIN.svg";
import facebook from "../../../assets/facebook.svg";

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
                  <p>Home</p>
                  <p>About us</p>
                  <p>Whats on</p>
                  <p>Blog</p>
                  <p>Contact</p>
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
