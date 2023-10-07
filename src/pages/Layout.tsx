import React, { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu";
import signature from "../images/ali-signature-white.png";
import "./Styles/Layout.css";
import Intro from "./Intro";

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

      {isMobile ? ( //mobil içeriği
        <div className="align-center bg-primary p-1">
          Mobilde görünecek içerik
        </div>
      ) : (
        //web içeriği
        <div
          className="container-fluid py-5 main-header-bg"
          style={{
            height: "35vh",
            backgroundColor: "black",
          }}
        >
          <div className="row">
            <div
              className="col-2"
              style={{
                width: "%100",
              }}
            ></div>

            <div
              className="col-4 p-0"
              style={{
                width: "%100",
                color: "white",
                fontFamily: "Red Hat Display",
              }}
            >
              <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
                Hi, i'm Ali
              </h1>
              <Intro />
              <img
                src={signature}
                style={{ width: "270px" }}
                alt="Signature"
              ></img>
            </div>

            <div
              className="col-2"
              style={{
                width: "%100",
                backgroundColor: "green",
              }}
            ></div>
            <div
              className="col-4"
              style={{
                width: "%100",
                backgroundColor: "blue",
                color: "white",
              }}
            >
              sağ 4
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
