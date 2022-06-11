import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./../constants/BaseUrl";
import styled from "styled-components";
import Logo from "../icons/logo.png";
import IconVoltar from "../icons/iconVoltar.svg";

const ContainerMatch = styled.div`
  height: 100%;
  overflow: auto;
  div:nth-child(1) {
    height: 12%;
    padding: 0 1em;
    border-bottom: 1.5px solid #d3d3d3;
    display: flex;
    align-items: center;
    img:nth-child(1) {
      object-fit: contain;
      width: 40%;
      margin: 0 auto;
    }
    img:nth-child(2) {
      cursor: pointer;
      transition: all 0.5s ease 0s;
      width: 15%;
      &:hover {
        transform: scale(0.7);
      }
    }
    p {
      border-radius: 20%;
      padding: 0.5em;
      background-color: blue;
      color: #fff;
      text-shadow: 1px 1px 1px #000;
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5em;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #ccc;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.5em;
    height: 120px;
    width: 100%;
    box-shadow: 2px 2px 2px 1px #ccc;
    img {
      height: 100px;
      width: 80px;
      object-fit: contain;
      margin-right: 10px;
      border-radius: 50%;
    }
    p {
      font-size: 1.2em;
    }
  }
`;

const Buttons = styled.button`
  border: 1px solid #000080;
  color: #000080;
  border-radius: 50%;
  width: 6em;
  height: 4em;
  padding: 1.45em 0;
  text-align: center;
  box-shadow: 1px 1px 20px #999;
  font-size: 18px;

  cursor: pointer;
  &:hover {
    transition: all 0.5s ease 0s;
    background-color: #000080;
    box-shadow: 1px 1px 20px #333;
    color: #fff;

    transform: scale(1.1);
  }
`;

function MatchScreen(props) {
  const [listMatch, setListMatch] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(`${baseUrl}/matches`)
      .then((response) => {
        setListMatch(response.data.matches);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <ContainerMatch>
      <div>
        <img src={Logo} alt="Logo AstroMatch"></img>
        <img
          src={IconVoltar}
          onClick={props.onChangeHomeScreen}
          title="Voltar"
        ></img>
      </div>
      <ul>
        {listMatch.map((match) => {
          return (
            <li key={match.id}>
              <img src={match.photo}></img>
              <p>
                {match.name} , {match.age} anos
              </p>
            </li>
          );
        })}
      </ul>
      <div></div>
      <Buttons onClick={props.clearMatches} title="Deletar Match's">
        Delete{" "}
      </Buttons>
    </ContainerMatch>
  );
}

export default MatchScreen;
