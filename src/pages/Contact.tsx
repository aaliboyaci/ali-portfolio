import React from "react";
import MiniHeader from "../components/MiniHeader";
import ArrowAnimation from "../components/ArrowAnimation";
import Footer from "../components/Footer";
import githublogo from "../images/icons-contact/github50.png";
import maillogo from "../images/icons-contact/mail50.png";
import linkedinlogo from "../images/icons-contact/linkedin50.png";
import "./Styles/Contact.css";

function Contact() {
  const MiniHeaderTitle = "Contact";
  const MiniHeaderText =
    "I find a new adventure and learning opportunity every day. I look forward to working together on future projects. ";
  return (
    <>
      <div>
        <MiniHeader
          MiniHeaderTitle={MiniHeaderTitle}
          MiniHeaderText={MiniHeaderText}
        />
        <ArrowAnimation />
        <div className="row text-center m-0">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h5>
              Feel free to get in touch with me! I'm excited to hear about your
              project ideas and collaborate on creative ventures.
            </h5>
            <div
              className="row my-4 p-0 align-items-center justify-content-around"
              style={{ height: "auto", width: "auto" }}
            >
              <div
                className="col-md-auto contact-button"
                onClick={() =>
                  window.open("https://github.com/aaliboyaci", "_blank")
                }
              >
                <div className="row align-items-center">
                  <div className="col-4 p-2">
                    <img
                      style={{ width: "35px" }}
                      src={githublogo}
                      alt="ali boyaci github"
                    ></img>
                  </div>
                  <div className="col-8">Github</div>
                </div>
              </div>
              <div
                className="col-md-auto contact-button"
                onClick={() =>
                  (window.location.href = "mailto:ornek@example.com")
                }
              >
                <div className="row  align-items-center">
                  <div className="col-4 p-2">
                    <img
                      style={{ width: "35px" }}
                      src={maillogo}
                      alt="ali boyaci email"
                    ></img>{" "}
                  </div>
                  <div className="col-8"> E Mail</div>
                </div>
              </div>

              <div
                className="col-md-auto contact-button"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ali-boyac%C4%B1-519a6b198/",
                    "_blank"
                  )
                }
              >
                <div className="row align-items-center">
                  <div className="col-4 p-2">
                    <img
                      style={{ width: "35px" }}
                      src={linkedinlogo}
                      alt="ali boyaci linkedin"
                    ></img>{" "}
                  </div>
                  <div className="col-8"> LinkedIn</div>
                </div>
              </div>
            </div>
            <p>
              <b>Let's bring your vision to life together.</b>
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
