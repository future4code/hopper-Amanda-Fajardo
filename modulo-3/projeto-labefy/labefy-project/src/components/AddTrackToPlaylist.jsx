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
  background-color:#352f2f;
  width: 98, 5vw;
  height: 11vh;
  color: #fe7e02;
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

const PlaylistCard = styled.div`
  display: inline-block;
  display: flex;
  border: 1px solid black;
  align-items: center;
  width: 800px;
  margin-bottom: 20px;
  padding-left: 10px;
  justify-content: space-evenly;
  background-image: linear-gradient(to left, #fe7e02, #fe7e02, #f7ad18e8);
  height: 80px;
  font-size: 15px;
  color: black;
`;

const ControlsCard = styled.audio`
   @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100px;
    height: 40px;
  }
`;

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
`;

const ButtonPlaylist = styled.button`
  margin-left: 10px;
  border-radius: 15px;
  height: 35px;
  background-color: black;
  color: #fe7e02;
  width: 100px;
`;

const InputTracks = styled.input`
   background: transparent;
  border: none;
  border-bottom: 1px solid white;
  margin-bottom: 15px;
  width: 50%;
  height: 35px;
  color: white;
  font-size: 20px;
  color: #fe7e02;
  border-bottom: 1px solid #fe7e02;
`;

const FooterLabefy = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #352f2f;
  height: 11vh;
  width: 98, 5vw;
  color:  #fe7e02;
  font-size: 20px;
`;

const headers = {
  headers: {
    Authorization: "Amanda-Fajardo-Hopper",
  },
};

class AddTrackToPlaylist extends React.Component {
  state = {
    inputName: "",
    inputArtist: "",
    inputUrl: "",
    playlistTracks: [],
  };

  onChangeName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeArtist = (event) => {
    this.setState({ inputArtist: event.target.value });
  };

  onChangeUrl = (event) => {
    this.setState({ inputUrl: event.target.value });
  };

  addTrackToPlaylist = () => {
    const body = {
      name: this.state.inputName,
      artist: this.state.inputArtist,
      url: this.state.inputUrl,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectPlaylist.id}/tracks`,
        body,
        headers
      )
      .then((resp) => {
        console.log(resp)
        alert("Música adicionada com sucesso!");
        this.setState({ inputName: "", inputArtist: "", inputUrl: "" });
        this.getPlaylistTracks();
      })
      .catch((err) => {
        alert("Ops! algo deu errado.")
        console.log(err.resp.data);
      });
  };

  getPlaylistTracks = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectPlaylist.id}/tracks`,
        headers 
      )
      .then((resp) => {
        this.setState({  playlistTracks: resp.data.result.tracks });
        console.log(resp.data.result.tracks)
      })
      .catch((err) => console.log(err));
        
      
  };
  componentDidMount() {
    this.getPlaylistTracks();
  }

  render() {
    const returnTrack = this.state.playlistTracks.map((track) => {
      return (
        <PlaylistCard>
          <p>Nome:</p>
          <p>{track.name}</p>
          <p>Artista:</p>
          <p>{track.artist}</p>
          <p>Música:</p>
          <p>
            <ControlsCard controls src={track.url} />
          </p>
        </PlaylistCard>
      );
    });
    return (
      <DivPrincipal>
        <GlobalStyle />
        <HeaderLabefy>
          <ImagemLogo src={foneLogo} />
          <h1>Labefy Premium</h1>
        </HeaderLabefy>

        <MainLabefy>
          <h3>Adicionar música</h3>
          <InputTracks
            placeholder={"Nome da música"}
            value={this.state.inputName}
            onChange={this.onChangeName}
          />

          <InputTracks
            placeholder={"Nome do artista"}
            value={this.state.inputArtist}
            onChange={this.onChangeArtist}
          />

          <InputTracks
            placeholder={"Link da música"}
            value={this.state.inputUrl}
            onChange={this.onChangeUrl}
          />

          <div>
            <ButtonPlaylist onClick={this.addTrackToPlaylist}>
              Adicionar música
            </ButtonPlaylist>
            {returnTrack}

            <ButtonPlaylist onClick={this.props.renderGoBack}>
              Voltar
            </ButtonPlaylist>
          </div>
        </MainLabefy>
        <FooterLabefy>
          © 2022 Labefy All rights reserved.
          <p>Projeto desenvolvido pela aluna: Amanda Viana Fajardo </p>
        </FooterLabefy>
      </DivPrincipal>
    );
  }
}

export default AddTrackToPlaylist;
