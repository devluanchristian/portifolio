import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.css";
import RoutesApp from "./routes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
};

export default App;
