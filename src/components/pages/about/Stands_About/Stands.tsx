import Style from "./Stands.module.scss";

const Stands = () => {
  return (
    <>
      <div className={Style.Stand_Wrap}>
        <div className={Style.Stand_Wrapper}>
          <h1>Danaker Stands For 3 Pillars:</h1>
          <div className={Style.Main_box}>
            <div className={Style.boxes}>
              <div className={Style.Adapter_box}>
                <h1>
                  <span>01</span>Integration
                </h1>
                <p>
                  At Danaker, We Believe In Promoting Integration By Providing A
                  Supportive Environment For Women From Kyrgyzstan In Poland. We
                  Aim To Facilitate Their Smooth Transition Into The Local
                  Society By Offering Resources, Guidance, And Networking
                  Opportunities. Through Workshops, Language Classes, And
                  Cultural Exchange Programs, We Encourage Cross-Cultural
                  Understanding And Foster Strong Bonds Between The Kyrgyz
                  Diaspora And The Wider Polish Community. By Promoting
                  Entegration, We Strive To Create A Harmonious And Inclusive
                  Society Where Every Women Feels Valued And Connected.
                </p>
              </div>
              <div className={Style.Adapter_box}>
                <img src="../../../../../public/about1.jpeg" alt="" />
              </div>
            </div>
            <div className={Style.boxes}>
              <div className={Style.Adapter_box}>
                <h1>
                  <span>02</span>Cultural Heritage
                </h1>
                <p>
                  At Danaker, We Believe In Promoting Integration By Providing A
                  Supportive Environment For Women From Kyrgyzstan In Poland. We
                  Aim To Facilitate Their Smooth Transition Into The Local
                  Society By Offering Resources, Guidance, And Networking
                  Opportunities. Through Workshops, Language Classes, And
                  Cultural Exchange Programs, We Encourage Cross-Cultural
                  Understanding And Foster Strong Bonds Between The Kyrgyz
                  Diaspora And The Wider Polish Community. By Promoting
                  Entegration, We Strive To Create A Harmonious And Inclusive
                  Society Where Every Women Feels Valued And Connected.
                </p>
              </div>
              <div className={Style.Adapter_box}>
                <img src="../../../../../public/about2.jpeg" alt="" />
              </div>
            </div>
            <div className={Style.boxes}>
              <div className={Style.Adapter_box}>
                <h1>
                  <span>03</span>Empowerment
                </h1>
                <p>
                  At Danaker, We Believe In Promoting Integration By Providing A
                  Supportive Environment For Women From Kyrgyzstan In Poland. We
                  Aim To Facilitate Their Smooth Transition Into The Local
                  Society By Offering Resources, Guidance, And Networking
                  Opportunities. Through Workshops, Language Classes, And
                  Cultural Exchange Programs, We Encourage Cross-Cultural
                  Understanding And Foster Strong Bonds Between The Kyrgyz
                  Diaspora And The Wider Polish Community. By Promoting
                  Entegration, We Strive To Create A Harmonious And Inclusive
                  Society Where Every Women Feels Valued And Connected.
                </p>
              </div>
              <div className={Style.Adapter_box}>
                <img src="../../../../../public/about3.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stands;
