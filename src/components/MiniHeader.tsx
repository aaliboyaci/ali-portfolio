import React from "react";
import NavMenu from "./NavMenu";

interface MiniHeader {
  MiniHeaderTitle?: String;
  MiniHeaderText?: String;
}
function MiniHeader(props: MiniHeader) {
  console.log(props);
  return (
    <>
      <div
        className="container-fluid py-5 main-header-bg m-0"
        style={{
          height: "auto",
          backgroundColor: "black",
        }}
      >
        <div className="row">
          <div className="col-2"></div>

          <div
            className="col-md-2 pl-auto"
            style={{
              width: "%100",
              color: "white",
              fontFamily: "Red Hat Display",
              borderLeft: "1px solid",
              borderColor: "white",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
              {props.MiniHeaderTitle}
            </h1>
          </div>

          <div
            className="col-xl-6 text-right align-self-center my-2 pr-auto"
            style={{
              width: "%100",
              color: "white",
              borderRight: "1px solid",
              borderColor: "white",
            }}
          >
            {props.MiniHeaderText}
          </div>
          <div
            className="col-2"
            style={{
              width: "%100",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default MiniHeader;
