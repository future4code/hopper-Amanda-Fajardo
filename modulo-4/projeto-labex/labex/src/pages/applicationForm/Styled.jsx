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
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: stretch;
  
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
  button{
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
`

export const Div = styled.div`
     display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
`
export const DivForm = styled.div`
 display:flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  position: relative;
  
  justify-content: center;
  align-content: center;
  color: white;
`
export const Form = styled.form`
   display:flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  width: 100%; 
`

export const Input = styled.input`
display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 50px; 
  border-radius: 30px;
  border: none;
  outline: 0;
  font-size: 15px;
  padding:10px;
  width: 100%;
`

export const Option = styled.option`
     border: 5px solid #efdd3ae4;
  border-radius: 30px;
  background-color: white;
  
  width: 100%;
`

export const Select = styled.select`
     margin-top: 10px;
  border: none;
  height: 50px; 
  border-radius: 30px;
  outline: 0;
  font-size: 15px;
  padding:10px;
  cursor: pointer;
  width: 100%;


`
export const Button = styled.button`
    position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
top: 10px;
  border:none;
  border-radius: 10em;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-size:0.9em;
  text-align: center;
  color: white;
  height: 30px;
  cursor: pointer;
  background-color:#a68c43;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: transform 0.9s;
    :hover {
     box-shadow: 0 0 14px 0 white inset, 0 0 4px 2px white;
    }
    :active{
      background-color: white;
      color: #a68c43;
      box-shadow: 0 0 4px 0 white inset, 0 0 4px 2px white;
      
    }
`



export const Footer = styled.footer`
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