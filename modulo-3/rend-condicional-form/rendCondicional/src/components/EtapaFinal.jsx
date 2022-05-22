import React from "react";
import styled from 'styled-components'

const Container4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 20px;
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2em;
    padding-right: 2em;
    font-size: 1.2em;
    margin: 0;
  }
`
class etapaFinal extends React.Component {
  render() {
    return (
      <Container4>
        <h1>O FORMULÁRIO ACABOU</h1>
        <h3>Muito obrigado por participar! Entraremos em contato!</h3>
      </Container4>
    );
  }
}
export default etapaFinal;
