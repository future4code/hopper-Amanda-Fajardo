import React from "react";
import axios from "axios";
import AddTrackToPlaylist from "./AddTrackToPlaylist";
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
  background-image: linear-gradient(-90deg,red,orange,yellow,green,blue,indigo,violet);  
  width: 98, 5vw;
  height: 11vh;
  color:white ;
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
  h1{
margin-bottom: 5rem;
  }
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

const CardList = styled.div`
    border: 1px solid #b223e3;
  color: white;
  font-size: 30px;
  background-image: linear-gradient(0deg,#711e8c,violet);
  display: flex;
  width: 20em;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 12px;
  margin-bottom: 20px;
  flex-direction: left;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 15px;
    width: 20em;
  }

`
const DelButton = styled.button`
   margin-left: 10px;
  border-radius: 100px;
  height: 4rem;
  background-color:#7a25a1;
  color:  white;
  width: 10rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
  background-color:  #7a25a1;
  color: #fff;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 12px;
    width: 80px;
  }
}

`

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
  background-color:  #7a25a1;
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
  background-image: linear-gradient(-90deg,red,orange,yellow,green,blue,indigo,violet);  
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

class PlaylistList extends React.Component {
  state = {
    allPlaylist: [],
    pageAddTrack: false,
    selectPlaylist: "",
  };



  getAllPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        headers
      )

      .then((resp) => {
        this.setState({ allPlaylist: resp.data.result.list });
      })
      .catch((err) => {
        console.log(err.resp.data);
      });
  };
  componentDidMount() {
    this.getAllPlaylist();
  }

  deletePlaylist = (id) => {
    if (window.confirm("Deseja deletar essa playlist?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          headers
        )

        .then(() => {
          alert("Playlist deletada com sucesso!");
          this.getAllPlaylist();
        })
        .catch((error) => {
          alert(error.resp.data);
        });
    }
  };

  renderPageTracks = (playlist) => {
    this.setState({ pageAddTrack: true, selectPlaylist: playlist });
  };

  renderGoBack = () => {
    this.setState({ pageAddTrack: false });
  };
  render() {
    if (this.state.pageAddTrack) {
      return (
        <AddTrackToPlaylist
          renderGoBack={this.renderGoBack}
          selectPlaylist={this.state.selectPlaylist}
        />
      );
    }
    const returnList = this.state.allPlaylist.map((playlists) => {
      return (
        
        <CardList key={playlists.id}>
          {playlists.name}

          <div>
           <DelButton onClick={()=>this.renderPageTracks(playlists)}>Editar Playlist</DelButton>
            <DelButton onClick={() => this.deletePlaylist(playlists.id)}>
              Deletar Playlist
            </DelButton>
          </div>
        </CardList>
        
      );
    });
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
            <h2>Lista de Playlist's</h2> 
            {returnList}
           
                <PlaylistButton onClick={this.props.goToCreate}>
                    Voltar

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

export default PlaylistList;
