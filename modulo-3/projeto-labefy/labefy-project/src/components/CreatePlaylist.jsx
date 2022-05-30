import React from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import foneLogo from "../img/icons.png";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
  }
`;
const ImagemLogo = styled.img`
  height: 8vh;
  margin-left: 10px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 4vh;
  }
`;

const HeaderLabefy = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-image: linear-gradient(
    -90deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  width: 98, 5vw;
  height: 11vh;
  color: white;
  font-style: oblique;
  font-stretch: expanded;
  h1 {
    margin-left: 8px;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 20px;
    width: 100vw;
  }
`;

const MainLabefy = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 98, 5vw;
  position: relative;
  background-position: center;
  background:#f7f2ed;
  justify-content: center;
  background-repeat: no-repeat;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 20px;
    width: 100vw;
    height: 110vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
`;

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 150px;
  border-width: 3px;
  border-style: ridge;
  border-color: violet;
  margin-top: 5rem;
  margin-bottom: 5rem;
  h2 {
    width: 100%;
    text-align: center;
    padding: 0 0 5rem 0;
    font-size: 3rem;
    font-weight: 100;
    }
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 20px;
    /* width: 100vw;
    height: 110vh; */
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Input = styled.input`
  height: 40px;
  background: transparent;
  border-radius: 4px 3px 6px;
  border-bottom: 5px solid #7a25a1;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  color: #7a25a1;
  font-size: 25px;
  margin: auto;
  margin-top: 8px;
  width: 200px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 15px;
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100px;
  }
`;

const PlaylistButton = styled.button`
  display: flex;
  margin: auto;
  margin-top: 40px;
  padding: 1.0rem;
  width: 20rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 800;
  flex-direction: column;
  border: groove 0.3em violet;
  border-radius: 2em;
  background: pink;
  color: #7a25a1;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #7a25a1;
    color: #fff;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 15px;
    width: 100px;
  }
`;

const FooterLabefy = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-image: linear-gradient(
    -90deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  height: 11vh;
  width: 98, 5vw;
  color: white;
  font-size: 20px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100vw;
    font-size: 12px;
  }
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

  onChangePlaylistName = (event) => {
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
          <h1>Labefy</h1>
        </HeaderLabefy>
        <MainLabefy>
          <div>
            <DivCard>
              <h2>Criar Playlist</h2>
              <Input
                placeholder={"Nome da playlist"}
                value={this.state.playlistName}
                onChange={this.onChangePlaylistName}
              />
              <PlaylistButton onClick={this.createPlaylist}>
                Criar Playlist
              </PlaylistButton>

              <PlaylistButton onClick={this.props.goToList}>
                Gerenciar Playlist's
              </PlaylistButton>
            </DivCard>
          </div>
        </MainLabefy>
        <FooterLabefy>
          © 2022 Labefy All rights reserved.
          <p>By Amanda Viana Fajardo </p>
        </FooterLabefy>
      </div>
    );
  }
}

export default CreatePlaylist;
