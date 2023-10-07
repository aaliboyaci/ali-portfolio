import React, { useState } from "react";
import "./App.css";
import Intro from "./pages/Intro";
import { animated, useSpring, config } from "react-spring";
import Layout from "./pages/Layout";

function App() {
  const [isIntroDone, setIsIntroDone] = useState(false);

  return (
    <>{!isIntroDone ? <Intro setIsIntroDone={setIsIntroDone} /> : <Layout />}</>
  );
}

export default App;
