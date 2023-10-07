import React, { useState } from "react";
import "./App.css";
import Intro from "./pages/Intro";
import { animated, useSpring, config } from "react-spring";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
