import React from "react";

function FrontendServices() {
  return (
    <>
      <div className="row text-center m-0">
        {" "}
        <h4
          style={{
            paddingTop: "10px",
            marginBottom: "20px",
            paddingBottom: "20px",
          }}
        >
          Frontend Development
        </h4>
      </div>
      <div className="row m-0 p-0">
        <div className="accordion p-0" id="accordionSecond">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Web Application Development
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionSecond"
            >
              <div className="accordion-body">
                Developing complex web applications with rich user interfaces
                using frontend libraries and frameworks such as{" "}
                <code>React, Next.js.</code>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                Website Development
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionSecond"
            >
              <div className="accordion-body">
                Building static or dynamic websites using HTML, CSS, and
                JavaScript to create the visual layout, styles, and
                interactivity.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                Responsive Design
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionSecond"
            >
              <div className="accordion-body">
                Ensuring that websites and applications are optimized for
                various devices and screen sizes, providing a seamless
                experience on desktops, tablets, and mobile phones.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                Single-Page Applications (SPAs)
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionSecond"
            >
              <div className="accordion-body">
                Building SPAs that provide a smooth and uninterrupted user
                experience by loading content dynamically without full page
                refreshes.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEleven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                API Integrations
              </button>
            </h2>
            <div
              id="collapseEleven"
              className="accordion-collapse collapse"
              aria-labelledby="headingEleven"
              data-bs-parent="#accordionSecond"
            >
              <div className="accordion-body">
                Integrating data and functionality from backend services and
                APIs into the frontend to provide dynamic and up-to-date
                content. <code>Axios, GraphQL</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontendServices;
