import React, { useRef } from "react";
import GraphicServices from "./GraphicServices";
import FrontendServices from "./FrontendServices";

function Services() {
  return (
    <div
      className="row mt-0 mb-2"
      style={{ userSelect: "none" }}
      id="services-link"
    >
      <div className="col-2"></div>
      <div className="col-md-8 text-center">
        <h2
          style={{
            borderBottom: "1px solid",
            borderColor: "black",
            paddingTop: "10px",
            marginBottom: "20px",
            paddingBottom: "20px",
          }}
        >
          Services
        </h2>
        <div className="row text-left">
          <div className="col-md-6 mb-2">
            <GraphicServices />
          </div>
          <div className="col-md-6 mb-2">
            <FrontendServices />
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default Services;
