import React from "react";
import MiniHeader from "../components/MiniHeader";
import Services from "../components/Services";
import ArrowAnimation from "../components/ArrowAnimation";

function MyServices() {
  const MiniHeaderTitle = "Services";
  const MiniHeaderText =
    "Here you can find my services for both graphic design and frontend development.";
  return (
    <div>
      <MiniHeader
        MiniHeaderTitle={MiniHeaderTitle}
        MiniHeaderText={MiniHeaderText}
      />
      <ArrowAnimation />
      <Services />
      <ArrowAnimation />
    </div>
  );
}

export default MyServices;
