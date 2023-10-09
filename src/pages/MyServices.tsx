import React from "react";
import MiniHeader from "../components/MiniHeader";
import Services from "../components/Services";
import ArrowAnimation from "../components/ArrowAnimation";
import KnownTechnologies from "../components/KnownTechnologies";
import Footer from "../components/Footer";

function MyServices() {
  const MiniHeaderTitle = "Services";
  const MiniHeaderText =
    "Here you can find my services for both graphic design and frontend development.";
  return (
    <div className="container-s-fluid m-0 p-0">
      <MiniHeader
        MiniHeaderTitle={MiniHeaderTitle}
        MiniHeaderText={MiniHeaderText}
      />
      <ArrowAnimation />
      <Services />
      <ArrowAnimation />
      <KnownTechnologies />
      <br></br>
      <br></br>

      <br></br>
      <Footer />
    </div>
  );
}

export default MyServices;
