import React from "react";

function NoMatch() {
  return (
    <div className="row align-items-center" style={{ height: "65vh" }}>
      <div className="col-3"></div>
      <div className="col-md-6 text-center">
        <h1> 404</h1>
        <p>Oops the page you were looking for doesn't exist here</p>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default NoMatch;
