/*Para vermos todas as viagens*/
import axios from 'axios';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {  Home, Header, DivData, DivList, TripList, Footer } from './Styled';
import {FaHandPointLeft} from 'react-icons/fa';

function ListTrips() {
const [nameTrips, setTrips] = useState([]);

useEffect(()=>{
  getTrips()
},[])

const navigate = useNavigate();

const goToApplication = () => {
  navigate('/tripsApplication')
}

const goToHome = () => {
  navigate("/");
}

const getTrips = () => {
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/amanda-fajardo-hopper/trips`)
  .then((resp)=>{
    setTrips(resp.data.trips)
  })
  .catch((err)=>{
    console.log(err.response)
  })
}
 const tripList = nameTrips.map((trip)=>{
  return(
    <DivData key={trip.id}>
      <h3>Nome: {trip.name}</h3>
      <p>Planeta: {trip.planet}</p>
      <p>Duração: {trip.durationInDays} </p>
      <p>Descrição: {trip.description} </p>
      <p>Data: {trip.date}</p>
    </DivData>
  )
 })
    return (
      <Home>
        
        <Header>
        <button onClick={()=>goToHome()}>
      <FaHandPointLeft className='icon'/>
      </button>
        <h2> Encontre as melhores viagens espaciais! </h2>
        
        <button onClick={()=> goToApplication()}>Inscrever-se</button>
    
        </Header>
<DivList>
        <h3>Listas de viagens disponíveis</h3>
       <TripList>{tripList}</TripList> 
        </DivList>
        
      <Footer>
        <p>Projeto desenvolvido pela Aluna: Amanda Viana Fajardo</p>
      </Footer>
      </Home>
      
    );
  }
  
  export default ListTrips;
  