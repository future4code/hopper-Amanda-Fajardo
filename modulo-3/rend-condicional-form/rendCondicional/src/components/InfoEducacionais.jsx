import React from "react";
import styled from "styled-components";

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 20px;
  ol {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2em;
    padding-right: 2em;
    font-size: 1.2em;
    margin: 0;
  }
  input {
    width: 100%;
    height: 2em;
    border-radius: 10px;
  }
`;
class informacoesEduc extends React.Component {
  render() {
    return (
      <Container2>
        <div>
        <h2>Informações Gerais De Ensino</h2>

        <p>5.Qual curso?</p>
        <input placeholder="Curso" />
        <p>6.Qual a unidade de ensino?</p>
        <input placeholder="Unidade de Ensino" />
      </div>
      </Container2>
      
    );
  }
}

export default informacoesEduc;
