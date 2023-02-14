import { Link } from "react-router-dom";
import "./styles.css";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">Logo</p>
      <ul className="navbar-list">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>Sobre mim</Link>
        <Link to={""}>Skills</Link>
        <Link to={"/contato"}>Contato</Link>
      </ul>
    </div>
  );
};

export default NavBar;
