import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contato from "../pages/Contato";
import Home from "../pages/Home";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/contato" element={<Contato />}></Route>
    </Routes>
  );
};

export default RoutesApp;
