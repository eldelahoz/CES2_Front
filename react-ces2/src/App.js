import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Navigation from "./layouts/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Container>
      <Formulario></Formulario>
      </Container>
      
    </div>
  );
}

export default App;
