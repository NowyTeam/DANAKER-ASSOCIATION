import React from 'react';
import './Events.css';
import { Footer } from '../../layout/footer/Footer';

const Events: React.FC = () => {
  return (
    <div>
      <main>
        <section className="section1" id="section1">
          <div className="container">
            <div className="textdisplay">
              <h1>"Improve yourself with us: your path to self-development and success."</h1>
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="container">
            <h2>Our upcoming events</h2>
          </div>

          <div className="event">
            <div className="img-link">
              <a href="#"></a>
              <img src="../../../../events2.png" alt="" width="500px" />
            </div>
            <div className="text-content">
              <h3>"Danaker" Book Club</h3>
              <p>
                Welcome to our inaugural Book Club event!
                <br />
                <br />
                We are excited to invite you to an enriching and thought-provoking journey as we delve into the world
                of personal development and growth with our first book selection: “Atomic Habits” by James Clear. Join
                us as we explore the transformative power of habits, discover practical strategies to build positive
                routines, and foster a community of like-minded individuals striving for continuous improvement.
              </p>
              <button className="btnreadmore" type="button">
                Read more
              </button>
            </div>
          </div>

          <div className="event sevent">
            <div className="img-link">
              <a href="#"></a>
              <img src="../../../../events3.png" alt="" width="500px" />
            </div>
            <div className="text-content">
              <h3>ANGLO TALKS</h3>
              <p>
                This Saturday our first Talking Club took place in English, where we discussed issues of adaptation to a
                new country and mental health in an unfamiliar environment.
                <br />
                <br />
                During the meeting, we got to know each other and shared stories of adaptation, creating an atmosphere
                of open communication.
                <br />
                <br />
                One of the participants told how he found his own methods of overcoming difficulties, and another
                shared the story of positive changes in his life after moving.
                <br />
                <br />
                Through dialogue and exchange of experience, we enriched our knowledge about overcoming difficulties in
                a new society and improved our communication skills in English🤍.
              </p>
              <button className="btnreadmore" type="button">
                Read more
              </button>
            </div>
          </div>

          <div className="event">
            <div className="img-link">
              <a href="#"></a>
              <img src="../../../../events4.png" alt="" width="500px" />
            </div>
            <div className="text-content">
              <h3>SEMINAR WITH PITCH COORDINATOR PARUL TRIPATHY</h3>
              <p>
                On January 20 at 15:00 our speaker Parul will talk about his experience in the field of Pitching and
                Marketing in two law firms Linklaters, DLA Piper and also in the organization START Warsaw
                <br />
                <br />
                Who is this seminar suitable for:
                <br />
                For guys who have graduated from the faculties of Management, Business Administration, International
                Relations, and Marketing. Guys who are planning to move from their current job to another company but
                don’t know where to start.
              </p>
              <button className="btnreadmore" type="button">
                Read more
              </button>
            </div>
          </div>

          <div className="event sevent">
            <div className="img-link">
              <a href="#"></a>
              <img src="../../../../events5.png" alt="" width="500px" />
            </div>
            <div className="text-content">
              <h3>ONLINE WORKSHOP WITH A PROGRAMMER FROM SILICON VALLEY</h3>
              <p>
                Are you studying IT, but don't know how to properly prepare a technical resume?
                <br />
                <br />
                Eliza Talaibek is now in Silicon Valley and successfully works at Loop Up.
                On January 6, our first online workshop was held with Eliza, a girl who received offers from such cool
                companies as Booking, Goldman Sachs, Citi, as well as Loop Up for the position of Software Engineer
                <br />
                <br />
                In our online workshop you will learn:
                <br />
                1. How do the technical characteristics differ from the usual ones?
                <br />
                2. Which sections must be included in the technical resume.
                <br />
                3. Lifehacks from the speaker and about her experience in writing her resume
                <br />
                4. Analysis of your own resume (all 15 participants)
              </p>
              <button className="btnreadmore" type="button">
                Read more
              </button>
            </div>
          </div>

          <div className="event">
            <div className="img-link">
              <a href="#"></a>
              <img src="../../../../events6.png" alt="" width="500px" />
            </div>
            <div className="text-content">
              <h3>Seminar with Google programmer Nada Al-Shamaileh!</h3>
              <p>
                On December 9, as part of our Career Project, we are holding a seminar with Google programmer Nada
                Al-Shamaileh!
                <br />
                <br />
                The speaker will talk about:
                <br />
                1. Her education and projects she was involved in before Google
                <br />
                2. Experience at Google as a Software Engineer
                <br />
                3. How the hiring process took place, as well as interesting facts about the company and its people
                <br />
                *The seminar will be held in English
              </p>
              <button className="btnreadmore" type="button">
                Read more
              </button>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
