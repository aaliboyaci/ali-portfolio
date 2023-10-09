import React, { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu";
import "./Styles/Layout.css";
import ArrowAnimation from "../components/ArrowAnimation";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Header from "../components/Header";

const Layout: React.FC = () => {
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
      <Header />
      <ArrowAnimation />
      <AboutMe />
      <ArrowAnimation />
      <Services />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Layout;
