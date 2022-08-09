/*Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição*/
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";


import {
  Home,
  Header,
  ContainerDetails,
  ContainerList,
  DivList,
  Div,
  DivListTrip,
  
 
  Footer,
} from "./Styled";

function TripDetailsPage() {

  const navigate = useNavigate();

  const goToHomeAdm = () => {
     navigate("/adminTripsList")
  };

  const goToLogin = () => {
    navigate("/login")
  };
  
const [ id, setId ] = useState(localStorage.getItem('id'));
const [ tripDetails, setTripDetails ] = useState({});
const [candidateTrip, setCandidateTrip] = useState([])
const [approvedCandidate, setApproved] = useState()

useEffect(() => {getCandidate()}, []);

const getCandidate = () => {
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/amanda-fajardo-hopper/trip/${id}`
axios
.get(`${url}`, {
  headers: {
    auth: localStorage.getItem('token')
  }
})
.then((res) => {
  setTripDetails(res.data.trip);
  setCandidateTrip(res.data.trip.candidates);
  setApproved(res.data.trip.approved);
})
.catch((err) => {
  console.log(err.data);
});
};

const putApprovedCandidate = (candidateId) => {
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/amanda-fajardo-hopper/trips/${id}/candidates/${candidateId}/decide`
const body = {
approve: true,
}
axios.put(url, body, {
headers: {
  auth: localStorage.getItem('token')
}
})
.then(() => {
getCandidate()

})
.catch((err) => {
alert('Candidato não foi aprovado!')
console.log(err.response);
})
}

const putDisaPproveCandidate = (reproveId) => {
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/amanda-fajardo-hopper/trips/${id}/candidates/${reproveId}/decide`
const body = {
approve: false
}
axios.put(url, body, {
headers: {
  auth: localStorage.getItem('token')
}
})
.then(() => {

alert("Removido na viagem!")

getCandidate()
})
.catch(() => {
alert('Candidato não foi aprovado!')
})

}



return(
  <Home>
  <Header>
    
    <h2> Encontre as melhores viagens espaciais! </h2>
    <button onClick={() => goToHomeAdm()}>VOLTAR</button>
    <button onClick={() => goToLogin()}>Logaut</button>
  </Header>
  <ContainerDetails>
        <ContainerList>
              <DivListTrip>
            <h3>Lista de Viagem</h3>
                <DivList >
                  <p><strong>Nome: </strong>{tripDetails.name}</p>
                  <p><strong>Descrição: </strong>{tripDetails.description}</p>
                  <p><strong>Planeta: </strong>{tripDetails.planet}</p>
                  <p><strong>Duração: </strong>{tripDetails.durationInDays}</p>
                  <p><strong>Data: </strong>{tripDetails.date}</p>
                </DivList>
              </DivListTrip>
          </ContainerList>

          <ContainerList>
              <DivListTrip>
            <h3>Lista de candidatos Pendentes</h3>
              
              {candidateTrip && candidateTrip.length > 0 ? candidateTrip.map((item) => {
			        	return <DivList key={item.id}>
					    <p><strong>Nome: </strong>{item.name}</p>
              <p><strong>Descrição: </strong>{item.applicationText}</p>
              <p><strong>Profissão: </strong>{item.profession}</p>
              <p><strong>Idade: </strong>{item.age}</p>
              <p><strong>País: </strong>{item.country}</p>
            <Div>
            <button onClick={()=>{putApprovedCandidate(item.id)}}>ACEITAR</button>
            
            <button onClick={()=>{putDisaPproveCandidate(item.id)}}>REPROVAR</button>
            </Div>
            </DivList>}) : <p>Não tem candidatos pendente</p>}
              
              </DivListTrip>
            </ContainerList>

            <ContainerList>
              <DivListTrip>
            <h3>Lista de candidatos Aprovados</h3>
                {approvedCandidate && approvedCandidate.length > 0 ? approvedCandidate.map((item) => {
                  return <DivList key={item.id}>
                <p><strong>Nome: </strong>{item.name}</p>
                <p><strong>Idade: </strong>{item.age}</p>
                <p><strong>País: </strong>{item.country}</p>
              </DivList>}) : <p>Não tem candidatos pendente</p>}
            </DivListTrip>
        </ContainerList>
        </ContainerDetails>
    
  
  
  <Footer>
    <p>Projeto desenvolvido pela aluna: Amanda Viana Fajardo</p>
  </Footer>
</Home>

);
   
}

export default TripDetailsPage;
