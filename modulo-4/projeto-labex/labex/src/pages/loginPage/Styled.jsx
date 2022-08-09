import styled from "styled-components";
import ImgBackground from '../../img/background.jpg'
export const Home = styled.div`
background-image: url(${ImgBackground}); 
position: relative;
  width: 100vw; 
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
 
  
 

`;

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
  button:nth-child(1){
  position: relative;
  border: none;
  right: 50px;
  background-color: transparent;
  color:yellow ;
  border-radius: 30px;
  transition: 0.2s ease;
  align-self: center; 
  font-size: 1.5em;
  margin-left: 5em;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.9s;
    :hover{
      background-color: transparent;
      box-shadow: 0 0 4px 0 white inset, 0 0 4px 2px white;
      height: 20px;
    }
  }
  .icon{
    font-size: 1.5em;
  
}
  
h2:nth-child(2){
    height: 1.5em;
    font-size: 18px;
    padding-left: 0.7em;
    margin: 0 auto;
    color: #e6e0bb;
    font-weight: 500;
    text-shadow: 2px 2px 2px #222;

}


`;
export const Div = styled.div`
display: flex;
  flex-direction: column;
  width: 400px;
  position: relative;
  width: 50vw;
  justify-content: center;
  align-items: stretch;
  height: 100vh;
  padding-left: 8em;
  padding-right: 8em;
  padding-bottom: 8em;
`;

export const DivInput = styled.div`
display: flex;
  flex-direction: column;`;

export const Input = styled.input`
 margin-top: 20px;
  height: 50px; 
  border-radius: 5px 20px ;
  border: none;
  outline: 0;
  font-size: 15px;
  padding:10px;`;

export const DivBtn = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

export const Button = styled.button`
position: relative;
  border-color: #a68c43;
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
`;

export const Footer = styled.footer`
background-image: linear-gradient(to right,#2c2508, #a68c43);
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
    text-shadow: 2px 2px 2px black ;

  }

`;
