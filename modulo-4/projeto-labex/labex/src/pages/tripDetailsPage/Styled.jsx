import styled from "styled-components";
import ImgBackground from "../../img/background.jpg";
export const Home = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: stretch;
  background-image:  url(${ImgBackground}); 
`
  export const Header = styled.header`
  background-image: linear-gradient(to right, #2c2508, #a68c43);
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
  top: 0px;
  padding: 1em;
  img:nth-child(1) {
    height: 100%;
  }

  h2:nth-child(2) {
    height: 1.5em;
    font-size: 18px;
    padding-left: 0.7em;
    margin: 0 auto;
    color: #e6e0bb;
    font-weight: 500;
    text-shadow: 2px 2px 2px #222;
  }

  button:nth-child(3) {
    border: 1px solid;
    background-color: transparent;
    color: #fff;
    border-radius: 10em;
    width: 8.2em;
    height: 3.2em;
    font-size: 1em;
    text-align: center;
    box-shadow: 1px 1px 20px #999;
    cursor: pointer;
    &:hover {
      transition: all 0.5s ease 0s;
      background-color: #bddcf6;
      box-shadow: 1px 1px 20px #e5f2f9;
      color: #2c315c;
      transform: scale(1.1);
    }
  }
  button:nth-child(4) {
    border: 1px solid;
    background-color: transparent;
    color: #fff;
    border-radius: 10em;
    width: 8.2em;
    height: 3.2em;
    font-size: 1em;
    text-align: center;
    box-shadow: 1px 1px 20px #999;
    cursor: pointer;
    &:hover {
      transition: all 0.5s ease 0s;
      background-color: #bddcf6;
      box-shadow: 1px 1px 20px #e5f2f9;
      color: #2c315c;
      transform: scale(1.1);
    }
  }
`;
export const DivListTrip= styled.div`
  position: relative;
  top:20px;
  overflow-y: scroll;
  width: 55%;
  border:solid 1px #F8F8FF;
  height: 400px;
  padding-right: 15px;
  padding-bottom: 20px;
  color:white;
  h3{
display: flex;
justify-content: center;

  }
`

export const DivList= styled.div`
  border:solid 1px white;
  padding:10px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 30px;
  font-size: 18px;
  background-color:white; 
  color: black;
`

export const ContainerList= styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  padding-bottom: 2px;
  
`


export const Div= styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    width:100%;
    button:nth-child(1){
      width: 50%;
      margin-left: 10px;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: green;
    color: white;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 0.8em;
    margin-left: 0.2em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        
        transform: scale(1.5);
      }
      :active{
        background-color: transparent;
      
      }
    }
    button:nth-child(2){
      margin-left: 10px;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: red;
    color: white;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 0.8em;
    margin-left: 0.2em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        /* background-color: transparent;
        color:transparent; */
        transform: scale(1.5);
      }
      :active{
        background-color: transparent;
      
      }
    }


`
export const ContainerDetails = styled.div`
  display:flex;
  flex-direction: row;
  color: white;
  margin-top: 50px;
`







export const Footer = styled.footer`
background-image: linear-gradient(to right, #2c2508, #a68c43);
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  /* flex-direction: row; */
  align-content: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  /* left: 0px; */
  bottom:  0px;
  /* padding: 0;
  margin: 0; */
  p:nth-child(1){
    height: 1.5em;
    font-size: 18px;
    padding-left: 0.7em;
    margin: 0 auto;
    color: #fff;
    text-shadow: 2px 2px 2px #177cf0;

  }
`;
