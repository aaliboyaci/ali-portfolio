import React from "react";

function GraphicServices() {
  return (
    <>
      <div className="row text-center">
        {" "}
        <h4
          style={{
            paddingTop: "10px",
            marginBottom: "20px",
            paddingBottom: "20px",
          }}
        >
          Graphic Design
        </h4>
      </div>
      <div className="row">
        <div className="accordion pr-0" id="accordionFirst">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Branding
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionFirst"
            >
              <div className="accordion-body">
                Developing a cohesive visual identity for a business, including
                logo, color schemes, typography, and brand guidelines.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Print Design
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionFirst"
            >
              <div className="accordion-body">
                Designing materials for print, such as business cards,
                brochures, flyers, posters, and packaging.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Social Media Graphics
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionFirst"
            >
              <div className="accordion-body">
                Designing visuals for social media platforms, including posts,
                banners, and profile images.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Event Graphics
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionFirst"
            >
              <div className="accordion-body">
                Creating visuals for events, including banners, posters,
                invitations, and promotional materials.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Corporate Collateral
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionFirst"
            >
              <div className="accordion-body">
                Designing materials like business cards, letterheads, and
                envelopes to maintain a consistent corporate image.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraphicServices;
