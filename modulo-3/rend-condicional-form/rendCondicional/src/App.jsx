import React from "react";
import styled from "styled-components";

import DadosGerais from "./components/DadosGerais";
import InfoEducacionais from "./components/InfoEducacionais";
import InfoComplementares from "./components/InfoComplementares";
import EtapaFinal from "./components/EtapaFinal";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Botao = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  width: 10em;
  padding: 1em;
`
class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />;

      case 2:
        return <InfoEducacionais />;

      case 3:
        return <InfoComplementares />;

      case 4:
        return <EtapaFinal />;
    }
  };
  irParaProximaEtapa = () => {
    let mudaPagina = (this.state.etapa += 1);
    if (mudaPagina <= 4) {
      return this.setState({ etapa: mudaPagina });
    }
  };

  render() {
    return (
      <MainContainer>
      <div>
        {this.renderizaEtapa()}
        {this.state.etapa <= 3 ? (
          <Botao>
            <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
          </Botao>
        ) : null}
        </div>
      </MainContainer>
    );
  }
}

export default App;
