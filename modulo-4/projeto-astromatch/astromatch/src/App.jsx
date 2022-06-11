import React, { useState } from "react";
import HomeScreen from "./pages/HomeScreen";
import MatchScreen from "./pages/MatchScreen";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body {
    background-color: #ccc;
    width: 100vw;
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Screen = styled.div`
  border: 1.5px solid black;
  border-radius: 0.5em;
  width: 400px;
  height: 92vh;
  background-color: #fff;
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100%;
  }
`;

function App() {
  const [homeScreen, setHomeScreen] = useState("profile");

  const chooseScreen = () => {
    switch (homeScreen) {
      case "profile":
        return <HomeScreen onChangeMatchScreen={onChangeMatchScreen} />;
      case "match":
        return <MatchScreen onChangeHomeScreen={onChangeHomeScreen} />;
      default:
        return <HomeScreen onChangeMatchScreen={onChangeMatchScreen} />;
    }
  };
  const onChangeHomeScreen = () => {
    setHomeScreen("profile");
  };

  const onChangeMatchScreen = () => {
    setHomeScreen("match");
  };

  return (
    <Container>
      <GlobalStyle />

      <Screen>{chooseScreen()}</Screen>
    </Container>
  );
}

export default App;
