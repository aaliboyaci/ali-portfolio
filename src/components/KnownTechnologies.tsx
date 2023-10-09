import React, { useState, useEffect } from "react";
import figmaLogo from "../images/50-transparent/figma-1.png";
import aiLogo from "../images/50-transparent/illustrator-1.png";
import jsLogo from "../images/50-transparent/javascript-1.png";
import tsLogo from "../images/50-transparent/ts-1.png";
import nextLogo from "../images/50-transparent/nextjs-1.png";
import psLogo from "../images/50-transparent/photoshop-1.png";
import reactLogo from "../images/50-transparent/react-1.png";
import reduxLogo from "../images/50-transparent/redux-1.png";
import "./KnownTechnologies.css";

const technologies = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
  "Javascript",
  "Typescript",
  "React.js",
  "Next.js",
  "Redux",
];

const KnownTechnologies: React.FC = () => {
  return (
    <>
      <div className="row align-items-center m-0">
        <div className="col-2"></div>
        <div
          className="col-md-8 text-center known-technologies-container align-items-center pr-0 m-0"
          style={{ width: "auto" }}
        >
          <h4 className="my-3 p-0">Technologies and Tools</h4>
          <div className="imgAnimation">
            <img
              style={{
                margin: "4px",
                height: "35px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
              src={psLogo}
              alt="Adobe Photoshop"
            ></img>
            <img
              style={{
                margin: "4px",
                height: "35px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
              src={aiLogo}
              alt="Adobe Illustrator"
            ></img>
            <img
              style={{
                margin: "4px",
                height: "35px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
              src={figmaLogo}
              alt="Figma"
            ></img>
            <img
              style={{
                margin: "4px",
                height: "35px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
              src={jsLogo}
              alt="Javascript"
            ></img>
            <img
              style={{
                margin: "4px",
                height: "35px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
              src={tsLogo}
              alt="Typescript"
            ></img>
            <img
              style={{
                margin: "4px",
                height: "35px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
              src={reactLogo}
              alt="React.js"
            ></img>
            <img
              style={{
                margin: "4px",
                height: "35px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
              src={nextLogo}
              alt="Next.js"
            ></img>
            <img
              style={{
                margin: "4px",
                height: "35px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
              src={reduxLogo}
              alt="Redux"
            ></img>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default KnownTechnologies;
