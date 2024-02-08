import Style from "./Mission.module.scss";
import Photo from "../../../../assets/photo.svg";
import Accept from "../../../../assets/accept.svg";

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
              <img src={Photo} alt="Loading..." />
            </div>
            <div className={Style.Fremer_Adapter}>
              <div className={Style.Title_Box}>
                <p className={Style.Discaption}>
                  <img src={Accept} alt="Loading..." />{" "}
                  <span>Integration:</span> We create a supportive environment
                  for women from Kyrgyz Republic in Poland, offering resources,
                  guidance and networking opportunities to facilitate their
                  smooth integration into local society
                </p>
              </div>
              <div className={Style.Title_Box}>
                <p className={Style.Discaption}>
                  <img src={Accept} alt="Loading..." />{" "}
                  <span>Cultural Heritage:</span> We celebrate and preserve our
                  cultural traditions and customs through cultural events,
                  workshops, and storytelling and dialogue sessions, enriching
                  the diversity of Polish society.
                </p>
              </div>
              <div className={Style.Title_Box}>
                <p className={Style.Discaption}>
                  <img src={Accept} alt="Loading..." />{" "}
                  <span>Empowerment:</span> Our mission centers on empowering
                  migrant women to realize their full potential in foreign
                  country personally, professionally, and socially. Through
                  mentoring and skill-building programs, we equip women with the
                  tools and confidence to overcome obstacles and make meaningful
                  contributions to the community and society at large.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
