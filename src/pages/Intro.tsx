import React from "react";
import "./Styles/IntroStyles.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";

interface IntroProps {
  setIsIntroDone: React.Dispatch<React.SetStateAction<boolean>>;
}

const Intro: React.FC<IntroProps> = ({ setIsIntroDone }) => {
  const [text, helper] = useTypewriter({
    words: ["Ali Boyacı", "a Graphic Designer", "a Frontend Developer"],
    loop: 1,
    typeSpeed: 110,
    deleteSpeed: 70,
    delaySpeed: 1400,
  });
  const { isDone } = helper;

  if (isDone) {
    setTimeout(() => setIsIntroDone(true), 1400);
  }

  return (
    <div className="intro-container">
      <h1
        style={{ paddingTop: "8rem", margin: "auto 0", fontWeight: "normal" }}
        className="intro-text"
      >
        I'm{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {text}
          <Cursor cursorStyle="_" />
        </span>
      </h1>
    </div>
  );
};

export default Intro;
