/*Para fazermos login como administrador*/
import {useState} from 'react';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import {FaHandPointLeft} from 'react-icons/fa';
import {Home, Header,Div, DivInput, Input, DivBtn, Button, Footer} from './Styled';


function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const onChangeEmail = (event) => {
  setEmail(event.target.value);
};

const onChangePassword = (event) => {
  setPassword(event.target.value);
};
const goToHome = () => {
  navigate("/")
}

const onSubmitLogin = () => {
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/amanda-fajardo-hopper/login'
  const headers = {"Content-Type":"application/json"}
  const body = {
      "email": email,
      "password": password,
  }
 
axios.post(url, body, {headers})
.then(res=>{
  
  localStorage.setItem("token", res.data.token);
  navigate("/adminTripsList");
})
.catch((err)=>{
  console.log(err.response);
})
}


    return (
      <Home>
        <Header>
       
        <button onClick={()=>goToHome()}>
      <FaHandPointLeft className='icon'/>
      </button>
        <h2> Encontre as melhores viagens espaciais! </h2>
        </Header>
        <Div>
        <DivInput>
        <h1>LOGIN </h1>
        <Input placeholder='email'
        type="email"
        value={email}
        onChange={onChangeEmail}></Input>

        <Input placeholder="password"
        type="password"
        value={password}
        onChange={onChangePassword}>
        </Input>
        </DivInput>
        <DivBtn>
        <Button onClick={onSubmitLogin}>ENTRAR</Button>
        </DivBtn>
        </Div>
        <Footer>
        <p>Projeto desenvolvido pela aluna: Amanda Viana Fajardo</p>
      </Footer>
      </Home>
    );
  }
  
  export default Login;
  

