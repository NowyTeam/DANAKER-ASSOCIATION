import Style from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <div className={Style.main_title}>
        <div className={Style.title_helper}>
          <h1 className={Style.title}>Nowy</h1>
          <p className={Style.under_title}></p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
