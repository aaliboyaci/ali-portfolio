import React from "react";
import MiniHeader from "../components/MiniHeader";
import ArrowAnimation from "../components/ArrowAnimation";
import Footer from "../components/Footer";

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
