/*Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas*/

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
import axios from "axios";
import { urlBase } from "./../../constants/urlBase";
import { Link } from "react-router-dom";
import {
  Home,
  Header,
  ContainerList,
  ButtonReset,
  DivList,
  DivName,
  Footer,
  DivListTrip,
} from "./Styled";
import { IoIosEye } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";

function AdminHome() {
  const [id, setTripId] = useState("");
  const [nameTrips, setTrips] = useState([]);
  const navigate = useNavigate();

  const logaut = () => {
    navigate("/login");
  };

  const goToCreate = () => {
    navigate("/adminTripsCreate");
  };
  const goToHome = () => {
    navigate("/");
  };
  const getTrips = () => {
    axios
      .get(`${urlBase}/trips`)
      .then((resp) => {
        setTrips(resp.data.trips);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.resp);
      });
  };

  const deleteTrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/amanda-fajardo-hopper/trips/${id}`;
    const headers = {
      auth: localStorage.getItem("token"),
    };
    axios
      .delete(url, { headers })
      .then((res) => {
        setTripId(res.data);
        alert("Removido");
        getTrips();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        alert("Erro, tente novamente");
      });
  };

  useEffect(() => {
    getTrips();
  }, []);
  const receiveId = (id) => {
    console.log("guarda id", id);
    localStorage.setItem("id", id);
  };

  const tripList = nameTrips.map((trip) => {
    return (
      <DivList key={trip.id}>
        <DivName>
          <Link to="/adminTripsDetails/:id">
            <ButtonReset onClick={() => receiveId(trip.id)}>
              <IoIosEye color="#3E86F5" fontSize="20" />
            </ButtonReset>
          </Link>
          <p>Nome: {trip.name}</p>
        </DivName>

        <ButtonReset
          onClick={() => {
            deleteTrip(trip.id);
          }}
        >
          <BsFillTrashFill color="black" fontSize="1.6em" />
        </ButtonReset>
      </DivList>
    );
  });

  return (
    <Home>
      <Header>
        <button onClick={() => goToHome()}>
          <FaHandPointLeft className="icon" />
        </button>
        <h2>Área adm</h2>
         <div>
        <button onClick={() => goToCreate()}>Nova viagem</button>
         <button onclick={() => logaut()}>Logaut</button>
        </div>
      </Header>

      <ContainerList>
        <h3>Lista de viagens</h3>
        <DivListTrip>{tripList}</DivListTrip>
      </ContainerList>
      <Footer>
        <p>Projeto desenvolvido pela aluna: Amanda Viana Fajardo</p>
      </Footer>
    </Home>
  );
}

export default AdminHome;
