import MainPage from "./Main_Page/MainPage";
import Benefits from "./Benefits/Benefits";
import Mission from "./Mission/Mission";
import JoinUs from "./JoinUs/JoinUs";
import Style from "./Home.module.scss";
import OurPartners from "./OurPartners/OurPartners";
import { Footer } from "../../layout/footer/Footer";

const Home = () => {
  return (
    <>
      <div className={Style.Container}>
        <div className={Style.Wrapper_Container}>
          <MainPage />
          <Benefits />
          <JoinUs />
          <Mission />
          <OurPartners />
          <Footer />
        </div>
        <h1 className={Style.Wait_Cont}>
          Сайт временно не доступен для телефон и планшетов просим прощение за
          задержку
        </h1>
      </div>
    </>
  );
};

export default Home;
