import Style from "./Blog.module.scss";
import { Footer } from "../../layout/footer/Footer";

function Blog() {
  return (
    <>
      <div className={Style.cover}>
        <div className={Style.cover_content}>
          <h1>Danaker's blog</h1>
          <p>"Stay Updated: Latest News and Top Events"</p>
        </div>
      </div>
      <div className={Style.event}>
        <div className={Style.container}>
          <div className={Style.img}>
            <a href=""></a>
          </div>
          <div className={Style.text}>
            <a href="">8th European Migration Forum</a>
            <p>
              Our Executive Director, Aitolgon Boronbaeva And Our Organization
              Made History At The 8th European Migration Forum Organized By The
              European Economic And Social Committee. With 120 Civil Society
              Organizations And European Institutions, We Gathered At The EESC
              Headquarters In Brussels,…
            </p>
          </div>
        </div>
        <div className={Style.container}>
          <div className={Style.img1}>
            <a href=""></a>
          </div>
          <div className={Style.text}>
            <a href="">1st European Forum Of Women From The Kyrgyz Republic</a>
            <p>
              We Are Delighted To Announce “The First European Forum Of Women
              From The Kyrgyz Republic”. It Will Be Organized By The “Danaker”
              Diaspora Of Women From Kyrgyzstan In Poland And Migration And
              Human Trafficking Council Under The Speaker Of Parliament Of The
              Kyrgyz Republic. The Primary Aim Of The Forum Is To Bring Together
              Parliamentarians From The Kyrgyz Republic, Poland, Representatives
              Of The EU Institutions
            </p>
          </div>
        </div>
        <div className={Style.container}>
          <div className={Style.img2}>
            <a href=""></a>
          </div>
          <div className={Style.text}>
            <a href="">
              OSCE (Organization For Security And Co-Operation In Europe)
            </a>
            <p>
              The OSCE (Organization For Security And Co-Operation In Europe),
              Leading The WIN And CHANGE Projects Focused On Achieving Gender
              Equality, Organized A Conference Titled “Women And Men:
              Collaboration For Equal Rights.” Capitalizing On The Humanitarian
              Mandate To Promote Gender Equality…
            </p>
          </div>
        </div>
        <div className={Style.container}>
          <div className={Style.img3}>
            <a href=""></a>
          </div>
          <div className={Style.text}>
            <a href="">Legalization of students in Poland</a>
            <p>
              February 17, 2024, at 14:00 presentation on the topic
              “Legalization of students in Poland (obtaining a residence
              permit)” Speaker: Zhyldyz Argynbaeva - Lawyer, mentor at Bootcamp
              SeyTech. Graduate of the Taras Shevchenko National University of
              Kyiv. Graduate of the Kyrgyz State Law Academy.
            </p>
          </div>
        </div>
        <div className={Style.container}>
          <div className={Style.img4}>
            <a href=""></a>
          </div>
          <div className={Style.text}>
            <a href="">Booking Club</a>
            <p>
              This time we discussed the book “A Thousand Splendid Suns”.
              Everyone was involved in the discussion, talking, expressing their
              opinions and it was incredibly atmospheric. Thanks to the girls
              for your active participation
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
