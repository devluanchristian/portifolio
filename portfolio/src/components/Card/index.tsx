import { useState } from "react";
import img1 from "../../assets/projeto-sistema-chamado.jpg";
import "./styles.css";

interface IProps {
  titulo: string;
  tec: string[];
  img: string;
  children: React.ReactNode;
}

const Card = ({ titulo, tec, img, children }: IProps) => {
  const [isRotated, setIsRotated] = useState("back");

  return (
    <div className="card-container">
      <div
        className={isRotated}
        onClick={() => setIsRotated(isRotated === "back" ? "front" : "back")}
      >
        <div className="card-front">
          <img src={img} alt="" />
        </div>
        <div className="card-back">
          <div className="content">
            <h2>{titulo}</h2>
            <p>{children}</p>
            <div className="tec">
              {tec.map((item, key) => (
                <i key={key}>{item}</i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
