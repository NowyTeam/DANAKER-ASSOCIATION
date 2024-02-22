import React from "react";
import Style from "./Contacts.module.scss";
import { Footer } from "../../layout/footer/Footer";

const ContactPage: React.FC = () => {
  return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded="14.1054.0" data-gr-ext-installed>
        <main role="main" className={Style.siteContent}>
          <div className={`${Style.flexContainer} ${Style.container1}`}>
            <div className={Style.centeredText}>
              Let is make something awesome together
            </div>
          </div>

          <div className={Style.flexContainer}>
            <div className={Style.flexItem1}>
              <div>
                <h1
                  className={`${Style.display4} ${Style.mb4} ${Style.articleHeadline}`}
                  style={{
                    fontSize: "48px",
                    fontFamily: "Playfair display",
                    fontWeight: 600,
                    lineHeight: "63.98px",
                    width: "267px",
                    height: "64px",
                    top: "839px",
                    left: "50px",
                  }}>
                  Get in touch
                </h1>
                <div>
                  <a
                    style={{
                      fontSize: "20px",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      lineHeight: "30px",
                      width: "538px",
                      height: "90px",
                      top: "930px",
                      left: "50px",
                      gap: "20px",
                    }}>
                    Have some big idea or brand to develop and need help? Then
                    reach out we'd love to hear about your project and provide
                    help
                  </a>
                </div>
              </div>
              <br />
              <br />
              <div
                style={{
                  width: "207px",
                  height: "85px",
                  top: "1074px",
                  left: "52px",
                  gap: "20px",
                }}>
                <h2
                  style={{
                    width: "85px",
                    height: "41px",
                    fontFamily: "noe display",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "40.83px",
                    color: "#000000",
                  }}>
                  Email
                </h2>
                <p>
                  <a
                    href="mailto:Info@Danakerdiaspora.Eu"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      width: "207px",
                      height: "24px",
                    }}>
                    Info@Danakerdiaspora.Eu
                  </a>
                </p>
              </div>
              <br />
              <div
                style={{
                  width: "113px",
                  height: "173",
                  top: "1182px",
                  left: "50px",
                  gap: "20px",
                }}>
                <h2
                  style={{
                    width: "85px",
                    height: "41px",
                    fontFamily: "noe display",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "40.83px",
                    color: "#000000",
                  }}>
                  Socials
                </h2>
                <p>
                  <a
                    href="mailto:Info@Danakerdiaspora.Eu"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}>
                    Instagram
                  </a>
                </p>
                <br />
                <p>
                  <a
                    href="mailto:Info@Danakerdiaspora.Eu"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}>
                    LinkedIn
                  </a>
                </p>
                <br />
                <p>
                  <a
                    href="mailto:Info@Danakerdiaspora.Eu"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}>
                    Facebook
                  </a>
                </p>
                <br />
              </div>
            </div>

            <div
              className={Style.flexItem2}
              style={{
                width: "565px",
                height: "509px",
                top: "844px",
                left: "729px",
                gap: "28px",
              }}>
              <form>
                <div
                  style={{
                    width: "563px",
                    height: "82px",
                    gap: "15px",
                  }}>
                  <div style={{ width: "43px", height: "21px" }}>
                    <label
                      htmlFor="name"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: "21px",
                      }}>
                      Name
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      style={{
                        border: "none",
                        backgroundColor: "#F9F7F7",
                        width: "563px",
                        height: "46px",
                        marginTop: "10px",
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                </div>
                <br />

                <div>
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: "21px",
                      }}>
                      Email
                    </label>
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      style={{
                        border: "none",
                        backgroundColor: "#F7F7F7",
                        width: "563px",
                        height: "46px",
                        marginTop: "10px",
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "563px",
                    height: "201px",
                    gap: "100px",
                  }}>
                  <label
                    htmlFor="comments"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "21px",
                    }}>
                    Message
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    style={{
                      border: "none",
                      backgroundColor: "#F7F7F7",
                      width: "563px",
                      height: "165px",
                      resize: "none",
                      borderRadius: 0,
                    }}></textarea>
                  <br />
                  <br />
                </div>

                <div
                  style={{
                    gap: "10px",
                    height: "60px",
                    width: "565px",
                    color: "#832424",
                  }}>
                  <input
                    type="submit"
                    value="Submit"
                    style={{
                      padding: "13px 246px 13px 246px",
                      gap: "10px",
                      height: "60px",
                      width: "565px",
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "30px",
                      backgroundColor: "#832424",
                      color: "#FFFFFF",
                      border: "none",
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div className={`${Style.flexContainer} ${Style.mapContainer}`}>
            <div className={Style.mapContainer2}>
              <iframe
                src="https://maps.google.com/maps?q=Chmielna%2073,%20Warsaw,%20Poland&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="600"
                height="336"
                style={{
                  border: 0,
                  marginTop: "7%",
                  marginLeft: "60px",
                  marginBottom: "7%",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className={Style.address}>
              <div className={Style.address2}>
                <h2
                  style={{
                    fontSize: "35px",
                    marginLeft: "140px",
                    fontWeight: 600,
                    lineHeight: "53.32px",
                    color: "#FFFFFF",
                    width: "367px",
                    height: "53px",
                    marginBottom: "10px",
                  }}>
                  Where we're located
                </h2>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "24px",
                    marginLeft: "140px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    lineHeight: "30px",
                    color: "#FFFFFF",
                    width: "353px",
                    height: "36px",
                  }}>
                  <a>Chmielna 73, Warsaw, Poland</a>
                </p>
              </div>
              <div className={Style.getDirectionContainer}>
                <p>
                  <a>
                    <div
                      className={Style.flexItem1}
                      style={{
                        fontSize: "20px",
                        marginLeft: "140px",
                        marginTop: "70px",
                        color: "white",
                      }}>
                      <a style={{ fontSize: "20px", marginLeft: "5px" }}>
                        Get direction
                      </a>
                    </div>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default ContactPage;
