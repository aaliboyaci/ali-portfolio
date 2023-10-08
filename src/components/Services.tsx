import React from "react";

function Services() {
  return (
    <div className="row m-0" style={{ userSelect: "none" }}>
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
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Branding
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Developing a cohesive visual identity for a business,
                      including logo, color schemes, typography, and brand
                      guidelines.
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
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Designing materials for print, such as business cards,
                      brochures, flyers, posters, and packaging.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Web Design
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Crafting visually appealing and user-friendly websites,
                      including the layout, typography, and overall aesthetics.
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
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Designing visuals for social media platforms, including
                      posts, banners, and profile images.
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
                    data-bs-parent="#accordionExample"
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
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Designing materials like business cards, letterheads, and
                      envelopes to maintain a consistent corporate image.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            {" "}
            By 2023, I completed my courses and worked on various personal
            projects. Today, I thrive as a versatile professional,
            <i> bridging design and software</i>, aiming for a harmonious blend
            of analytical thinking and aesthetics. I'm enthusiastic about my
            work, continuously seeking new projects, and eager to collaborate
            with fellow creatives to produce exceptional results.
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default Services;
