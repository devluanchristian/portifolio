import "./styles.css";
import img1 from "../../assets/projeto-sistema-chamado.jpg";
import img2 from "../../assets/projeto-netflix.jpg";

import { useState } from "react";
import Card from "../../components/Card";

const Projects = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleRotated = () => {
    setIsRotated(!isRotated);
    console.log(!isRotated);
  };

  return (
    <div className="container-projeto">
      <h1>Projetos</h1>
      <div className="container-card">
        <Card
          titulo={"CallingSystem"}
          tec={["React", "TypeScript", "Firebase"]}
          img={img1}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          natus repudiandae, saepe tempore illo ipsam similique sequi, sed
          aspernatur unde excepturi facilis minima voluptate officiis aut
          voluptates sunt quae rerum.
        </Card>
        <Card titulo={"Netflix-Clone"} tec={["React", "TypeScript"]} img={img2}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          natus repudiandae, saepe tempore illo ipsam similique sequi, sed
          aspernatur unde excepturi facilis minima voluptate officiis aut
          voluptates sunt quae rerum.
        </Card>
      </div>
    </div>
  );
};

export default Projects;
