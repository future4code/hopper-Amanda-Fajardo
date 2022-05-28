import React from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import foneLogo from "../img/icons.png";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    
  }
`;
const ImagemLogo = styled.img`
  height: 8vh;
  /* margin-right: 1px; */
  margin-left: 10px;
`;

const HeaderLabefy = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #352f2f;
  width: 98, 5vw;
  height: 11vh;
  color:#fe7e02 ;
  h1 {
    margin-left: 8px;
  }
`;

const MainLabefy = styled.div`
  display: flex;
  height: 100vh;
  width: 98, 5vw;
  position: relative;
  background-position: center;
  background-image: #ccbeac;
  justify-content: center;
`;

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 150px;
  border: 1px solid #fe7e02;
  margin-top: 43px;
  h2 {
    font-size: 50px;
    font-weight: lighter;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
const Input = styled.input`
  height: 40px;
  background: transparent;
  border-radius: 4px 3px 6px;
  border-bottom: 5px solid #060a06;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  color: black;
  font-size: 25px;
  margin: auto;
  margin-top: 8px;
  width: 200px;
`;

const ButtonPlaylist = styled.button`
  display: flex;
  margin: auto;
  margin-top: 40px;
  padding: 15px;
  width: 200px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  flex-direction: column;
  border-radius: 20px 1px;
  border: 1px solid gray;
  height: 60px;
  background: transparent;
  color: black;
`;


const FooterLabefy = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color:#352f2f;
  height: 11vh;
  width: 98, 5vw;
  color: #fe7e02;
  font-size: 20px;
`;

const headers = {
  headers: {
    Authorization: "Amanda-Fajardo-Hopper",
  },
};

class CreatePlaylist extends React.Component {
  state = {
    playlistName: "",
  };

  onChangeCreate = (event) => {
    this.setState({ playlistName: event.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.playlistName,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        headers
      )
      .then(() => {
        alert(`Playlist ${this.state.playlistName} criada com sucesso!`);
        this.setState({ playlistName: "" });
      })
      .catch((error) => {
        alert("Ops! Erro ao criar a playlist.");
        console.log(error.resp.data);
      });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <HeaderLabefy>
          <ImagemLogo src={foneLogo} />
          <h1>Labefy Premium</h1>
        </HeaderLabefy>

        <MainLabefy>
          <div>
            <DivCard>
              <h2>Criar Playlist</h2>
              <Input
                placeholder={"Nome da playlist"}
                value={this.state.playlistName}
                onChange={this.onChangeCreate}
              />
              <ButtonPlaylist onClick={this.createPlaylist}>
                Criar Playlist
              </ButtonPlaylist>

              <ButtonPlaylist onClick={this.props.goToList}>Acessar Playlist's</ButtonPlaylist>
            </DivCard>
          </div>
        </MainLabefy>
        <FooterLabefy>
          © 2022 Labefy All rights reserved.
          <p>Projeto desenvolvido pela aluna: Amanda Viana Fajardo </p>
        </FooterLabefy>
      </div>
    );
  }
}

export default CreatePlaylist;
