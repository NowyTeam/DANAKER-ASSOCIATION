import MainPage from "./Main_Page/MainPage";
import Style from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={Style.Container}>
        <div className={Style.Wrapper_Container}>
          <MainPage />
        </div>
      </div>
    </>
  );
};

export default Home;
