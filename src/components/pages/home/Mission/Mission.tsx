import Style from "./Mission.module.scss";

const Mission = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.wrapper_width}>
          <div className={Style.main_box}>
            <h1>Our Mission and Values</h1>
            <p>
              Danaker is a groundbreaking diaspora organization established in
              June 2023. It is the first and only organization of its kind
              established in Europe, exclusively devoted to empowering women who
              originate from the Kyrgyz Republic and are currently residing in
              Poland
            </p>
          </div>
          <div className={Style.main_box}>
            <div className={Style.photos}>
              <img src="../../../../../First_Grid.jpeg" alt="Loading..." />
              <img src="../../../../../Second_Grid.jpeg" alt="Loading..." />
              <img src="../../../../../Thirsd_Grid.jpeg" alt="Loading..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
