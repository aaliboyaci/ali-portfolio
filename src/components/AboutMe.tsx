import React from "react";

function AboutMe() {
  return (
    <div className="row m-0">
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
          About Me
        </h2>
        <div className="row text-left">
          <div className="col-md-4 mb-2">
            I started my <b>graphic design</b> journey in 2017, and step into a
            professional role in 2018. Over the years, I've worked with both
            local and international clients, mostly worked as a freelancer but
            also gained work experience at a design agency. After that In 2022,
            I pivoted my career towards software development, focusing on
            <b> frontend development</b>.
          </div>
          <div className="col-md-4 mb-2">
            {" "}
            By 2023, I completed my courses and worked on various personal
            projects. Today, I thrive as a versatile professional,
            <i> bridging design and software</i>, aiming for a harmonious blend
            of analytical thinking and aesthetics. I'm enthusiastic about my
            work, continuously seeking new projects, and eager to collaborate
            with fellow creatives to produce exceptional results.
          </div>
          <div className="col-md-4 mb-2">
            {" "}
            My goal is a future filled with captivating projects and
            achievements where I combine my passion for creativity, design, and
            software. Let's embark on new adventures together. Thank you, and
            stay tuned!
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default AboutMe;
