import React, { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu";
import signature from "../images/ali-signature-white.png";
import "./Styles/Layout.css";
import Intro from "./Intro";
import ArrowAnimation from "../components/ArrowAnimation";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";

const Layout: React.FC = ({}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <NavMenu />

      {/* {isMobile ? ( //mobil içeriği
        <div className="align-center bg-primary p-1">
          Mobilde görünecek içerik
        </div>
      ) : (
        //web içeriği */}
      <div
        className="container-fluid py-5 main-header-bg"
        style={{
          height: "auto",
          backgroundColor: "black",
        }}
      >
        <div className="row">
          <div className="col-2"></div>

          <div
            className="col-md-4 pl-auto"
            style={{
              width: "%100",
              color: "white",
              fontFamily: "Red Hat Display",
              borderLeft: "1px solid",
              borderColor: "white",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>Hi, i'm Ali</h1>
            <Intro />
            <img
              src={signature}
              style={{ width: "230px", paddingTop: "10px" }}
              alt="Signature"
            ></img>
          </div>

          <div
            className="col-md-4 text-right align-self-center"
            style={{
              width: "%100",
              color: "white",
              borderRight: "1px solid",
              borderColor: "white",
            }}
          >
            <h2>My Works</h2>
            <div className="row justify-content-end pr-3 text-center my-3">
              <div className="main-header-button"> Graphic Design</div>
              <div className="main-header-button"> Frontend Dev</div>
            </div>
          </div>
          <div
            className="col-2"
            style={{
              width: "%100",
            }}
          ></div>
        </div>
      </div>
      <ArrowAnimation />
      <AboutMe />
      <ArrowAnimation />
      <Services />
    </div>
  );
};

export default Layout;
