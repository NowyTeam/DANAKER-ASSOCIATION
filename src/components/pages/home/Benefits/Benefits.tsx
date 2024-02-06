import clock from "../../../../assets/clock.svg";
import world from "../../../../assets/world.svg";
import ok from "../../../../assets/ok.svg";
import commution from "../../../../assets/community.svg";
import Style from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <>
      <div className={Style.wrappper_benefits}>
        <div className={Style.wrapper}>
          <div className={Style.main_box}>
            <div className={Style.box_benefits}>
              <img src={world} alt="Loading..." />
            </div>
            <div className={Style.Columner}>
              <p>Preserving Cultural Values</p>
            </div>
          </div>
          <div className={Style.main_box}>
            <div className={Style.box_benefits}>
              <img src={commution} alt="Loading..." />
            </div>
            <div className={Style.Columner}>
              <p>Fostering Integration</p>
            </div>
          </div>
          <div className={Style.main_box}>
            <div className={Style.box_benefits}>
              <img src={ok} alt="Loading..." />
            </div>
            <div className={Style.Columner}>
              <p>Uniting Women</p>
            </div>
          </div>
          <div className={Style.main_box}>
            <div className={Style.box_benefits}>
              <img src={clock} alt="Loading..." />
            </div>
            <div className={Style.Columner}>
              <p>Building Bright Future Together</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
