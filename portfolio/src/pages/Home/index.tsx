import "./styles.css";
import imgPerfil from "../../assets/perfil.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineCloudUpload,
  AiOutlineWhatsApp,
  IoLocationOutline,
  MdOutlineEmail,
  BiUpload,
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
            <AiFillLinkedin size={30} />
          </a>
          <a href="https://github.com/devluanchristian" target={"_blank"}>
            <AiFillGithub size={30} />
          </a>
          <a>
            <AiOutlineInstagram size={30} />
          </a>
        </div>
      </div>

      <div className="container-right">
        <img src={imgPerfil} alt="" />
        <div className="container-right-info">
          <a>
            <MdOutlineEmail size={20} />
            <span>luanchristian.rochadocarmo@gmail.com</span>
          </a>
          <a>
            <AiOutlineWhatsApp size={20} />
            <span> +55 31 9 7126-2835</span>
          </a>
          <a>
            <IoLocationOutline size={20} />{" "}
            <span> Belo Horizonte, Minas Gerais - Brazil</span>
          </a>
          <div className="btn-cv">
            <a
              href="https://drive.google.com/file/d/1dcvmisGW3EZyR8Lccw_rsESvvg-9Kdn1/view?usp=sharing"
              target={"_blank"}
            >
              <BiUpload size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
