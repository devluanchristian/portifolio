import "./styles.css";
import error from "../../assets/error.svg"
const Projects = () => {
  return (
    <div className="container-projeto">
      <h1>Ops.. Erro ao carregar pagina de projetos</h1>
      <img src={error} alt="" />
      <h1>Calma aeeee meu pequeno gafanhoto</h1>
      <h2>Ainda estou trabalhando nessa feature</h2>
    </div>
  );
};

export default Projects;
