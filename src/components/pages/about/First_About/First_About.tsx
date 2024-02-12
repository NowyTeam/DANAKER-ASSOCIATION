import Style from "./First_About.module.scss";
import Logo from "../../../../assets/main_logo.svg";

const First_About = () => {
  return (
    <>
      <div className={Style.About_Wrap}>
        <div className={Style.About_Wrapper}>
          <div className={Style.Adaptiver}>
            <div className={Style.box_title}>
              <h3>About us</h3>
              <hr />
              <p>
                Together, We Aim To Work Towards Creating A Society Where Women
                Can Frourish, Contribute To The Enrichment Of Their Curltural
                Heritagem Foster Integration, And Embrace New Opportunities For
                Personal And Professional Growth. Through Community-Building,
                Collaboration, And Tailored Programs, We Empower Women To Make A
                Lasting Impact On Their Lives And The World Around Them.
              </p>
            </div>
          </div>
          <div className={Style.Adaptiver}>
            <div className={Style.logo_about_main}>
              <img src={Logo} alt="" />
              <h1>DANAKER</h1>
              <h4>Association</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First_About;
