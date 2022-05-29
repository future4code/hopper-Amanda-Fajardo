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
const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #f7f2ed;
`;
const ImagemLogo = styled.img`
  height: 8vh;
  margin-left: 10px;
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
  background: #f7f2ed;
  justify-content: center;
  background-repeat: no-repeat;
  h2 {
    width: 100%;
  text-align: center;
  padding: 0 0 5rem 0;
  font-size: 3rem;
  font-weight: 100;
  color:black
  }
`;

const Control = styled.audio`
  @media screen and (min-device-width: 300px) and (max-device-width: 380px) {
    width: 100px;
    height: 40px;
  }
`;
const SectionInputDiv = styled.div`
  display: inline-flex;
  
`

const CardList = styled.div`
  /* display: inline-block; */
  display: flex;
  border: 1px solid black;
  align-items: center;
  width: 800px;
  margin-bottom: 20px;
  padding-left: 10px;
  justify-content: space-evenly;
  background-image: linear-gradient(0deg, #711e8c, violet);
  height: 80px;
  font-size: 15px;
  color:white;

  
`;

const PlaylistButton = styled.button`
display: inline-block;
  /* display: flex; */
  margin: auto;
  margin-top: 40px;
  padding: 1.6rem;
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
`;

const TracksInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  margin-bottom: 15px;
  width: 50%;
  height: 35px;
  color: #7a25a1;
  font-size: 20px;
  color: #7a25a1;
  border-bottom: 1px solid #7a25a1;
  
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
        console.log(resp);
        alert("Música adicionada com sucesso!");
        this.setState({ inputName: "", inputArtist: "", inputUrl: "" });
        this.getPlaylistTracks();
      })
      .catch((err) => {
        alert("Ops! algo deu errado.");
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
        this.setState({ playlistTracks: resp.data.result.tracks });
        console.log(resp.data.result.tracks);
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getPlaylistTracks();
  }

  render() {
    const returnTrack = this.state.playlistTracks.map((track) => {
      return (
        <CardList>
          <p>Nome:</p>
          <p>{track.name}</p>
          <p>Artista:</p>
          <p>{track.artist}</p>
          <p>Música:</p>
          <p>
            <Control controls src={track.url}></Control>
          </p>
        </CardList>
      );
    });
    return (
      <DivPrincipal>
        <div>
          <GlobalStyle />
          <HeaderLabefy>
            <ImagemLogo src={foneLogo} />
            <h1>Labefy</h1>
          </HeaderLabefy>
         
          <MainLabefy>
          <h2>Adicionar música</h2>
            <div>
              <SectionInputDiv>
            
            <TracksInput
              placeholder={"Nome da música"}
              value={this.state.inputName}
              onChange={this.onChangeName}
            />

            <TracksInput
              placeholder={"Nome do artista"}
              value={this.state.inputArtist}
              onChange={this.onChangeArtist}
            />

            <TracksInput
              placeholder={"Link da música"}
              value={this.state.inputUrl}
              onChange={this.onChangeUrl}
            />

            <PlaylistButton onClick={this.addTrackToPlaylist}>
              Adicionar música
            </PlaylistButton>
            
            </SectionInputDiv>
            {returnTrack}
            <PlaylistButton onClick={this.props.renderGoBack}>
              Voltar
            </PlaylistButton>
            
           
            </div>
          </MainLabefy>
          <FooterLabefy>
            © 2022 Labefy All rights reserved.
            <p>By Amanda Viana Fajardo </p>
          </FooterLabefy>
        </div>
      </DivPrincipal>
    );
  }
}

export default AddTrackToPlaylist;
