import React, { useRef } from "react";
import GraphicServices from "./GraphicServices";
import FrontendServices from "./FrontendServices";

function Services() {
  return (
    <div
      className="row mt-0 mb-2 mr-0 pr-0"
      style={{ userSelect: "none" }}
      id="services-link"
    >
      <div className="col-2"></div>
      <div
        className="col-md-8 text-center"
        style={{
          marginTop: "10px",
          width: "auto",
        }}
      >
        <div className="row text-left">
          <div className="col-md-6 mb-2 mr-0 pr-0">
            <GraphicServices />
          </div>
          <div className="col-md-6 mb-2 mr-0 pr-0">
            <FrontendServices />
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default Services;
