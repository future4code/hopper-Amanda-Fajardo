import styled from "styled-components";
import ImgBackground from '../../img/background.jpg'

export const Header = styled.header`
  background-image:linear-gradient(to right, #2c2508, #a68c43);
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  left: 0px;
  top: 0px;
  padding: 1em;
 
`;

 


export const Home = styled.div`
  
  background-image: url(${ImgBackground});
 background-repeat: round;
 background-size:cover ;
 
position: relative;
width: 100vw;
  height: 100vh;
overflow: auto;

  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  
  
`;

export const DivBtn = styled.div`
  display: flex;
flex-direction: row;
justify-content: center;
  div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    height: 300px;
    position: relative;
  }

  button{
    position: relative;
  border-color: #a68c43;
  height: 3.8em;
  border-radius: 10em;
  border: 1px solid;
  margin: 20px; 
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
  font-size:1em;
  font-weight: bold;
  text-align: center;
  color: #be9e43;
  cursor: pointer;
  margin-top: 50px;
  background-color: transparent;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
    :hover {
     box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
    }
  }
`;

export const Footer=styled.footer`
 background-image:linear-gradient(to right, #2c2508, #a68c43);
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  left: 0px;
  bottom:  0px;
  padding: 1em;
  p:nth-child(1){
    height: 1.5em;
    font-size: 18px;
    padding-left: 0.7em;
    margin: 0 auto;
    color: #fff;
    text-shadow: 2px 2px 2px #222;

  }
`
