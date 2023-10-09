import React from "react";
import MiniHeader from "../components/MiniHeader";
import ArrowAnimation from "../components/ArrowAnimation";

function Contact() {
  const MiniHeaderTitle = "Contact";
  const MiniHeaderText =
    "I find a new adventure and learning opportunity every day. I look forward to working together on future projects. ";
  return (
    <div>
      <MiniHeader
        MiniHeaderTitle={MiniHeaderTitle}
        MiniHeaderText={MiniHeaderText}
      />
      <ArrowAnimation />
    </div>
  );
}

export default Contact;
