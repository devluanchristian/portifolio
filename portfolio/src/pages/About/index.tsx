import { DiReact, DiNodejsSmall } from "react-icons/di";
import { SiJavascript, SiTypescript } from "react-icons/si";
import "./styles.css";
const About = () => {
  return (
    <div className="container-about">
      <div className="container-center">
        <h1>Sobre mim</h1>
        <p>
          Meu nome é Luan Chrstian Rocha do Carmo, tenho 22 anos e sou estudante
          apaixonado por programação, que abrange tanto o Frontend quanto o
          Backend, meu objetivo é me tornar um Desenvolvedor Full Stack de
          excelência. Sempre atento às tendências do mercado e às novidades que
          surgem, busco desenvolver minhas habilidades e adquirir novos
          conhecimentos a cada dia, a fim de agregar ainda mais valor às
          soluções tecnológicas e inovadoras para o mundo. Estou em constante
          busca por maneiras de aprimorar minhas habilidades e adquirir novas
          competências para oferecer soluções ainda mais eficazes e inovadoras
          no futuro. <br />
          <br /> No momento, estou à procura de minha primeira oportunidade de
          trabalho, onde possa aplicar os conhecimentos e tecnologias que venho
          estudando, e continuar crescendo e aprendendo no mercado de trabalho.
        </p>
        <div className="container-skill">
          <h3>Skills</h3>
          <ul>
            <li>
              <DiReact size={20} /> ReactJs
            </li>
            <li>
              <SiJavascript size={20} />
              JavaScript
            </li>
            <li>
              <SiTypescript size={20} />
              TypeScript
            </li>
            <li>
              <DiNodejsSmall size={20} /> NodeJs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
