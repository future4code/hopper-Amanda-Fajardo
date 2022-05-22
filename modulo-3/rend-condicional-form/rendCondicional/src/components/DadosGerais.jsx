import React from "react";
import styled from 'styled-components'

const Container1 = styled.div`
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


class DadosGerais extends React.Component {
  render() {
    return (
      <Container1>
      <div>
        <h1>Dados Gerais</h1>

        <p>1.Qual o seu nome?</p>
        <input placeholder="Nome" />

        <p>2. Qual sua idade?</p>
        <input placeholder="Idade" />

        <p>3. Qual seu Email?</p>
        <input placeholder="Email" />

        <p>4. Qual a sua escolaridade?</p>
        <select>
          <option value="Ensino Médio Completo">
            Ensino Médio Completo
            </option>
          <option value="Ensino Médio Incompleto">
            Ensino Médio Incompleto
          </option>
          <option value="Ensino Superior Completo">
            Ensino Superior Completo
          </option>
          <option value="Ensino Superior Incompleto">
            Ensino Superior Incompleto
          </option>
        </select>
      </div>
      </Container1>
    );
  }
}
export default DadosGerais;
