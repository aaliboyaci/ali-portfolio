import React from "react";
import MiniHeader from "../components/MiniHeader";
import ArrowAnimation from "../components/ArrowAnimation";

function Portfolios() {
  const MiniHeaderTitle = "Portfolios";
  const MiniHeaderText =
    "I am thriving as a versatile professional, operating in both the design and software field.";
  return (
    <div>
      <MiniHeader
        MiniHeaderTitle={MiniHeaderTitle}
        MiniHeaderText={MiniHeaderText}
      />
      <ArrowAnimation />
    </div>
  );
}

export default Portfolios;
