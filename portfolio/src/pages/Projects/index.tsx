import "./styles.css";
import img1 from "../../assets/projeto-sistema-chamado.jpg";
import img2 from "../../assets/projeto-netflix.jpg";
import Card from "../../components/Card";
import ButtonUrl from "../../components/ButtonUrl";

const Projects = () => {
  const cloneNetflixUrl = "https://clonenetflix-luan.netlify.app/";
  const callingSystemUrl = "https://callingsystem.netlify.app/";

  const reposNetflixUrl =
    "https://github.com/devluanchristian/netlfix_clone_ReactJs";
  const reposCallingSystemUrl =
    "https://github.com/devluanchristian/Sistema-de-Chamado";

  return (
    <div className="container-projeto">
      <h1>Projetos</h1>
      <div className="container-card">
        <Card
          title={"CallingSystem"}
          skills={["React", "TypeScript", "Firebase"]}
          img={img1}
        >
          <p>
            O projeto CallingSystem foi desenvolvido utilizando a linguagem
            TypeScript, com o propósito de centralizar as demandas dos usuários
            do departamento de TI, estabelecendo uma rotina eficiente para
            gerenciar as solicitações recebidas. Durante o desenvolvimento desta
            aplicação, adquiri diversos conhecimentos relacionados à criação de
            sistemas empresariais.
          </p>
          <ButtonUrl url={callingSystemUrl} reposUrl={reposCallingSystemUrl} />
        </Card>

        <Card
          title={"Netflix Clone"}
          skills={["React", "TypeScript"]}
          img={img2}
        >
          <p>
            Neste projeto, busquei aplicar o máximo de conhecimento que estou
            adquirindo ao longo do tempo, consumir uma API disponibilizada pela
            <i> TheMovieDB</i>. Coletando e estruturando os dados de forma
            adequada, utilizei extensivamente o React nessa aplicação, o que me
            permitiu aproveitar ainda mais as funcionalidades dessa ferramenta.
          </p>{" "}
          <br />
          <ButtonUrl url={cloneNetflixUrl} reposUrl={reposNetflixUrl} />
        </Card>
      </div>
      <footer>
        <p>
          Para verificar mais projetos{" "}
          <a
            href="https://github.com/devluanchristian?tab=repositories"
            target={"_blank"}
          >
            acesse aqui
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Projects;
