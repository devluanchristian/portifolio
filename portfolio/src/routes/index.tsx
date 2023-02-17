import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contato from "../pages/Contato";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contato" element={<Contato/>}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>
  );
};

export default RoutesApp;
