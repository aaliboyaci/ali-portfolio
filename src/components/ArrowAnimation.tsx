import React from "react";
import arrowImage from "../images/arrows.png";
import "./ArrowAnimation.css";

function ArrowAnimation() {
  return (
    <div className="arrow-container">
      <img src={arrowImage} className="arrowAnimation" alt="Scroll"></img>
    </div>
  );
}

export default ArrowAnimation;
