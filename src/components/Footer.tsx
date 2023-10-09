import React from "react";
import "../pages/Styles/Layout.css";
import signature2 from "../images/ali-signature-white.png";

function Footer() {
  return (
    <div
      className="row main-header-bg py-3 px-2 text-center "
      style={{ color: "white" }}
    >
      <div className="col-2"></div>
      <div className="col-md-8 " style={{ width: "auto" }}>
        <div className="row d-flex justify-content-between footer-links ">
          <div className="col-md-4 text-decoration-none ">
            <span className="mb-3 mr-3">
              <a target="_blank" href="https://github.com/aaliboyaci">
                GitHub
              </a>
            </span>
            <span className="mb-3 mr-3">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ali-boyac%C4%B1-519a6b198/"
              >
                LinkedIn
              </a>
            </span>
            <span className="mb-3">
              <a target="_blank" href="https://behance.net/brejoa">
                Behance
              </a>
            </span>
          </div>
          <div className="col-md-4 ">
            <p>&copy; 2023 All rights are reserved.</p>
            <img
              src={signature2}
              alt="Ali Boyacı Designer / Developer"
              style={{ width: "100px" }}
            ></img>
            <p style={{ fontSize: "smaller" }}>
              Ali Boyacı - Designer / Developer
            </p>
          </div>

          <div className="col-md-4 ">
            <div className="mb-3">
              <a href="mailto:aaliboyaci@gmail.com">
                email: aaliboyaci@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-2"></div>
    </div>
  );
}

export default Footer;
