import "./styles.css";
import error from "../../assets/error.svg"
const Contato = () => {
  return (
    <div className="container-contato">
      <h1>Ops.. Erro ao carregar pagina de contato</h1>
      <img src={error} alt="" />
      <h1>Calma aeeee meu pequeno gafanhoto</h1>
      <h2>Ainda estou trabalhando nessa feature</h2>
    </div>
  );
};

export default Contato;
