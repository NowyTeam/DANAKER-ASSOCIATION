import Style from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <div className={Style.Box}>
        <div className={Style.Box_Wrapper}>
          <div className={Style.Wrapper}>
            <h1 className={Style.title}>Empower Yourself With Us!</h1>
            <hr />
            <div className={Style.Adapt}>
              <p className={Style.under_title}>
                Danaker Is The First And Unique Diaspora Organization In Europe,
                Exclusively Devoted To Empowering Women From Kyrgyzstan In
                Poland.
              </p>
              <img src="../../../../../Group 1771.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
