import React, { useState } from "react";
import "./Styles/IntroStyles.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Intro: React.FC = () => {
  const [text, helper] = useTypewriter({
    words: [" a graphic designer & frontend developer", ""],
    loop: 150,
    typeSpeed: 120,
    deleteSpeed: 90,
    delaySpeed: 2100,
  });
  const { isDone } = helper;

  return (
    <>
      <div className="intro-container">
        <h1
          style={{
            margin: "auto 0",
            fontWeight: "normal",
            fontSize: "medium",
          }}
          className="intro-text"
        >
          I'm
          <span style={{ color: "white" }}>
            {text}
            <Cursor cursorStyle="_" />
          </span>
        </h1>
      </div>
    </>
  );
};

export default Intro;
