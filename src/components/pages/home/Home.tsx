import MainPage from "./Main_Page/MainPage";
import Benefits from "./Benefits/Benefits";
import Mission from "./Mission/Mission";
import JoinUs from "./JoinUs/JoinUs";
import Style from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={Style.Container}>
        <div className={Style.Wrapper_Container}>
          <MainPage />
          <Benefits />
          <JoinUs />
          <Mission />
        </div>
      </div>
    </>
  );
};

export default Home;
