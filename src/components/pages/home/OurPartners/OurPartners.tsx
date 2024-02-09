import Style from "./OurParners.module.scss";

const OurPartners = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.wrapper_width}>
          <h1>Our partners</h1>
          <div className={Style.partner_box}>
            <div className={Style.partners}>
              <img src="../../../../../partner_1.png" alt="" />
            </div>
            <div className={Style.partners}>
              <img src="../../../../../partner_2.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPartners;
