import { useNavigate } from "react-router-dom";
import { Home, Header, DivBtn, Footer} from "./Styled";




/* Para o usuário escolher entre Área Administrativa e Lista de Viagens*/

function HomePage() {
  const navigate = useNavigate();

  const goToListTrips = () => {
    navigate("/tripsList");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Home>
    
    

      <Header>
        <h2>LABEX</h2>
       
      
      </Header>
      
<DivBtn>
  <div>
      <button onClick={goToListTrips}>Ver viagens</button>
      
        <button onClick={goToLogin}>Login</button>
      </div>
      </DivBtn>
      <Footer>
        <p>Projeto desenvolvido pela aluna: Amanda Viana Fajardo</p>
      </Footer>
    </Home>
  );
}

export default HomePage;
