import React from "react";
import axios from "axios";
import AddTrackToPlaylist from "./AddTrackToPlaylist";
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
  color:#fe7e02;
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
  background-image:#ccbeac;
  justify-content: center;
  background-repeat: no-repeat;
`;


const CardList = styled.div`
    border: 1px solid #ff6600;
  color: black;
  font-size: 30px;
  background-image: linear-gradient(to left, #fe7e02, #fe7e02, #f7ad18e8);
  display: flex;
  width: 20%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 12px;
  margin-bottom: 20px;
  flex-direction: left;

`
const ButtonListCard = styled.button`
   margin-left: 10px;
  border-radius: 15px;
  height: 35px;
  background-color: black;
  color: #fe7e02;
  width: 100px;

`

const ButtonPlaylist = styled.button`
    display: flex;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
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


` 

const FooterLabefy = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #352f2f;
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
            <ButtonListCard onClick={() => this.deletePlaylist(playlists.id)}>
              Deletar
            </ButtonListCard>
            <ButtonListCard onClick={()=>this.renderPageTracks(playlists)}>Detalhes da Playlist</ButtonListCard>
          </div>
        </CardList>
      );
    });
    return (
      <div>
        <GlobalStyle />
        <HeaderLabefy>
          <ImagemLogo src={foneLogo} />
          <h1>Labefy Premium</h1>
        </HeaderLabefy>
        <MainLabefy>
            <h1>Lista de Playlist's</h1> 
            {returnList}
            <div>
                <ButtonPlaylist onClick={this.props.goToCreate}>
                    Voltar

                </ButtonPlaylist>
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

export default PlaylistList;
