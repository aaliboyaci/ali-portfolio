import "./App.css";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolios from "./pages/Portfolios";
import GraphicDesignWorks from "./pages/Portfolios/GraphicDesignWorks";
import FrontendDevWorks from "./pages/Portfolios/FrontendDevWorks";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/portfolios" element={<Portfolios />}>
            <Route index element={<GraphicDesignWorks />} />
            <Route path="graphic-design" element={<GraphicDesignWorks />} />
            <Route path="frontend-dev" element={<FrontendDevWorks />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
