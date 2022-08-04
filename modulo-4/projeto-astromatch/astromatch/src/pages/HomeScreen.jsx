import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../constants/BaseUrl";
import styled from "styled-components";
import User from "../icons/iconUser.svg";
import Logo from "../icons/logo.png";

const ContainerHome = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  div:nth-child(1) {
    height: 12%;
    padding: 0 1em;
    border-bottom: 1.5px solid #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img:nth-child(1) {
      object-fit: contain;
      width: 40%;
      margin: 0 auto;
    }
    img:nth-child(2) {
      cursor: pointer;
      transition: all 0.5s ease 0s;
      width: 20%;
      &:hover {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
      }
    }
  }
`;

const Card = styled.div`
  border-radius: 0.5em;
  width: 90%;
  height: 60%;
  position: relative;
  box-shadow: 1px 1px 10px #ccc;

  img:nth-child(1) {
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    object-fit: cover;
    filter: blur(10px);
  }
  img:nth-child(2) {
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  div {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 8em;
    width: 100%;
  }
  h1 {
    height: 1.5em;
    font-size: 24px;
    padding-left: 0.5em;
    margin: 0 auto;
    color: #fff;
    text-shadow: 2px 2px 2px #222;
  }
  p {
    height: 1.5em;
    font-size: 18px;
    padding-left: 0.7em;
    margin: 0 auto;
    color: #fff;
    text-shadow: 2px 2px 2px #222;
  }
`;

const Buttons = styled.div`
  height: 15%;
  width: 55%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  button:nth-child(1) {
    border: 1px solid #ff0000;
    color: #ff0000;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    font-size: 50px;
    text-align: center;
    box-shadow: 1px 1px 20px #999;
    cursor: pointer;
    &:hover {
      transition: all 0.5s ease 0s;
      background-color: #ff0000;
      box-shadow: 1px 1px 20px #333;
      color: #fff;

      transform: scale(1.1);
    }
  }
  button:nth-child(2) {
    border: 1px solid #000080;
    color: #000080;
    border-radius: 80%;
    width: 5em;
    height: 4em;
    padding: 1.45em 0;
    text-align: center;
    box-shadow: 1px 1px 20px #999;
    font-size: 18px;

    cursor: pointer;
    &:hover {
      transition: all 0.5s ease 0s;
      background-color: #aeb3b6d6;
      box-shadow: 1px 1px 20px #333;
      color: #2b2828;

      transform: scale(1.1);
    }
  }
  button:nth-child(3) {
    border: 1px solid #49a598;
    color: #49a598;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    font-size: 50px;
    text-align: center;
    box-shadow: 1px 1px 20px #999;
    cursor: pointer;
    &:hover {
      transition: all 0.5s ease 0s;
      background-color:#49a598;
      box-shadow: 1px 1px 20px #333;
      color: #fff;

      transform: scale(1.1);
    }
  }
`;

function HomeScreen(props) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfileToChoose();
   
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(`${baseUrl}/person`)
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  const like = () => {
    const body = {
      id: profile.id,
      choice: true,
    };
    axios
      .post(`${baseUrl}/choose-person`, body)
      .then((response) => {
        if (response.data.isMatch) getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const deslike = () => {
    const body = {
      id: profile.id,
      choice: false,
    };
    axios
      .post(`${baseUrl}/choose-person`, body)
      .then(() => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const clearMatches = () => {
    axios
      .put(`${baseUrl}/clear`)
      .then(() => {
        alert("Matches deletados com sucesso!");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <ContainerHome>
      <div>
        <img src={Logo} alt="Logo AstroMatch"></img>
        <img
          src={User}
          onClick={props.onChangeMatchScreen}
          title="Ver Match's"
        ></img>
      </div>
      <Card>
        <img src={profile.photo} alt={profile.photo_alt} />
        <img src={profile.photo} alt={profile.photo_alt} />
        <div>
          <h1>
            {profile.name} , {profile.age} anos
          </h1>
          <p> {profile.bio} </p>
        </div>
      </Card>

      <Buttons>
        <button onClick={deslike} title="Não faz meu tipo">
          x
        </button>
        <button onClick={clearMatches} title="Deletar Match's">
          Delete
        </button>
        <button onClick={like} title="Gostei Hein">
          ♥️
        </button>
      </Buttons>
    </ContainerHome>
  );
}

export default HomeScreen;
