// import Style from "./AboutMain.module.scss";
import First_Page from "./First_About/First_About";
import Stands from "./Stands_About/Stands";
import OurTeam from "./Our_Team/OurTeam";
import { Footer } from "../../layout/footer/Footer";

const AboutMain = () => {
  return (
    <>
      <First_Page />
      <Stands />
      <OurTeam />
      <Footer />
    </>
  );
};

export default AboutMain;
