import "./styles.css";
import imgPerfil from "../../assets/perfil.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/all";
import gif from "../../assets/gif.gif";

const Home = () => {
  return (
    <div className="container-home">
      <div className="container-left">
        <div className="container-greeting">
          <img className="img" src={gif} alt="" width={"30px"} /> Olá!! Seja bem
          vindo(a)
        </div>
        <h1>Luan Christian</h1>
        <p>Desenvolvedor FullStack Jr</p>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/luan-christian01/"
            target={"_blank"}
          >
            <AiFillLinkedin size={35} />
          </a>
          <a href="https://github.com/devluanchristian" target={"_blank"}>
            <AiFillGithub size={35} />
          </a>
          <a>
            <AiOutlineInstagram size={35} />
          </a>
        </div>
      </div>

      <div className="container-right">
        <img src={imgPerfil} alt="" />
        <a href="#">Dowload CV</a>
      </div>
    </div>
  );
};

export default Home;
