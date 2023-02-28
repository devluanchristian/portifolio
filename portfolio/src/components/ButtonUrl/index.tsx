import { AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import "./styles.css";
interface IReposUrl {
  url: string;
  reposUrl: string;
}
const ButtonUrl = ({ url, reposUrl }: IReposUrl) => {
  return (
    <div className="button-url">
      <a href={reposUrl} target="_blank">
        <AiFillGithub size={13} />
        GitHub
      </a>
      <a href={url} target="_blank">
        <TbWorld size={13} /> Link do projeto
      </a>
    </div>
  );
};

export default ButtonUrl;
