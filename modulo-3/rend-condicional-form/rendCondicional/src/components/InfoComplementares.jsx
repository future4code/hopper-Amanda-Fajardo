import React from "react";
import styled from 'styled-components'

const Container3 = styled.div`
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
  select {
    width: 20em;
    height: 2em;
    border-radius: 10px;
  }
`
class infoComplementar extends React.Component {
  render() {
    return (
      <Container3>
        <div>
          <h2>Informações Gerais De Ensino</h2>

          <p>7.Por que você não terminou o curso de graduação?</p>
          <input></input>

          <p>8.Você fez algum curso complementar?</p>
          <select>
            <option value="Curso técnico">Curso técnico</option>
            <option value="Cursos de inglês">Cursos de inglês</option>
            <option value="Não fiz curso complementar">
              Não fiz curso complementar
            </option>
          </select>
        </div>
      </Container3>
    );
  }
}
export default infoComplementar;
