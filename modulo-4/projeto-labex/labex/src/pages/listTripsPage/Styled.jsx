import styled from "styled-components";
import ImgBackground from '../../img/background.jpg'



export const Header= styled.header`
 background-image: linear-gradient(to right,#2c2508, #a68c43);
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
  color:white ;
  border-radius: 30px;
  transition: 0.2s ease;
  align-self: center; 
  font-size: 1.5em;
  margin-left: 5em;
  cursor: pointer;
  
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
    text-shadow: 2px 2px 2px #100202;

}

button:nth-child(3){
  border: 1px solid ;
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
      background-color:#a68c43 ;
      box-shadow: 1px 1px 20px #e5f2f9;
      color: #e5f2f9;
      transform: scale(1.1);
    }
}

`

export const Home = styled.div`
background-image: url(${ImgBackground}); 
 overflow: auto;
  background-repeat: no-repeat;
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

export const DivData = styled.div`
    border:solid 1px #a68c43;
  padding:10px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 30px;

h3{
    color:aliceblue;

}
  p{
    color: aliceblue;
    font-size: 15px;

  } 


`

export const DivList = styled.div`
    display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  height: 70%;
  justify-content: center;
  padding-bottom: 30px;
h3{
  color:aliceblue;
  
}
`

export const TripList = styled.div`
 position: relative;
  top: 5%;

  overflow-y: scroll;
  width: 50%;
  border:solid 1px #F8F8FF;
  height: 90%;
  padding-right: 10px;
  padding-bottom: 50px;
`
// export const DivBtn = styled.div`
//     display: flex;
//   align-items:center;
//   justify-content: center;
//     align-items: center;
//     position: relative;
//     align-content: center;
//     button {
//       border: 1px solid ;
//    background-color: transparent;
//    color: #fff;
//     border-radius: 10em;
//     width: 8.2em;
//     height: 3.2em;
//     font-size: 1em;
//     text-align: center;
//     box-shadow: 1px 1px 20px #999;
//     cursor: pointer;
//     &:hover {
//       transition: all 0.5s ease 0s;
//       background-color:#bddcf6 ;
//       box-shadow: 1px 1px 20px #e5f2f9;
//       color: #2c315c;
//       transform: scale(1.1);
//     }
//   }
    
    

// `

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

`