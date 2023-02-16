import { Link } from "react-router-dom";
import logo from "../../assets/lc.png"
import "./styles.css";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link className="logo" to={"/"} ><img src={logo} alt="" width={100}/></Link>
      <ul className="navbar-list">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>Sobre mim</Link>
        <Link to={"/projects"}>Projetos</Link>
        <Link to={"/contato"}>Contato</Link>
      </ul>
    </div>
  );
};

export default NavBar;
