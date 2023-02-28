import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import "./styles.css";

interface IProps {
  title: string;
  skills: string[];
  img: string;
  children: React.ReactNode;
}

const Card = ({ title, skills, img, children }: IProps) => {
  const [isFlip, setIsFlip] = useState(false);

  const handleClick = () => {
    setIsFlip(!isFlip);
  };

  return (
    <div
      className={`flip-card ${isFlip ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-card-container">
        <div className="flip-card-front">
          {/* Conteúdo da frente do cartão */}
          <img src={img} alt="" />
        </div>
        <div className="flip-card-back">
          {/* Conteúdo de trás do cartão */}
          <div className="content-card-back">
            <h3>{title}</h3>
            <p>{children}</p>
            <div className="content-tec">
              <h5>Tecnologias utilizadas:</h5>
              {skills.map((skill) => (
                <i>{skill}</i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
