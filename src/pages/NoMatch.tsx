import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
      <div className="row align-items-center" style={{ height: "65vh" }}>
        <div className="col-3"></div>
        <div className="col-md-6 text-center">
          <h1> 404</h1>
          <p>Oops! The page you were looking for doesn't exist here</p>
          <Link to="/">
            <button type="button" className="btn btn-outline-primary">
              Take me home please
            </button>
          </Link>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}

export default NoMatch;
