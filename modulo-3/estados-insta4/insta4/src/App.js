import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  
  input{
    display: flex;
  }
    
  
`
const ContainerEstilo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
class App extends React.Component {
  state = {
    dadosPost: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Amanda",
        fotoUsuario: "https://picsum.photos/60/51",
        fotoPost: "https://picsum.photos/255/151",
      },
      {
        nomeUsuario: "Tatiane",
        fotoUsuario: "https://picsum.photos/70/52",
        fotoPost: "https://picsum.photos/288/152",
      },
    ],

    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: "",
  };
  addPost = () => {
    const novoPost1 = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost,
    };
    const novoPost2 = [...this.state.dadosPost, novoPost1];

    this.setState({
      dadosPost: novoPost2,
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: "",
    });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };
  onChangeInputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };

  render() {
    const listaDeComponentes = this.state.dadosPost.map((dadosPost, index) => {
      return (
        <Post>
          nomeUsuario = {dadosPost.nomeUsuario}
          fotoUsuario = {dadosPost.fotoUsuario}
          fotoPost = {dadosPost.fotoPost}
          key = {index}
        </Post>
      );
    });
    return (
      <ContainerInput>
        <ContainerEstilo>
          <input
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do Usuário"}
          />
          <input
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do Usuário"}
          />
          <input
          value={this.state.inputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Post"}
          />
          <button onClick={this.addPost}>Adicionar Post</button>
        </ContainerEstilo>
        <div>{listaDeComponentes}</div>
      </ContainerInput>
    );
  }
}

export default App;
