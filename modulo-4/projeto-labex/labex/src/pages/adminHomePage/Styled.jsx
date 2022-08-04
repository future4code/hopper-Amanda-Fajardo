import styled from "styled-components";
import ImgBackground from '../../img/background.jpg'
export const Home= styled.div`
background-image: url(${ImgBackground}); 
 
 background-size:cover ;
 
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
export const Header= styled.header`
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
  h2:nth-child(2) {
  height: 1.9em;
     font-size: 20px;
     padding-left: 0.7em;
    margin: 0 auto;
     color: #e6e0bb;
     font-weight: 500;
     text-shadow: 2px 2px 2px #222;
   }
   div:nth-child(3){
    justify-content: space-around;
   
    button{
      border: 1px solid ;
   background-color: transparent;
   color: #fff;
    border-radius: 10em;
    width: 8.2em;
    height: 3.2em;
    font-size: 1em;
    align-items: center;
    
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
    }}
   /* }
   button:nth-child(4){
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
button:nth-child(5){
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
} */
`
export const DivList= styled.div`
  background-color:white;
  border:solid 1px white;
  padding:10px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 30px;
  font-size: 17px;  
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  
`


// export const ButtonBack =styled.button`
//   position: relative;
//   border: none;
//   right: 50px;
//   background-color: transparent;
//   color:#3E86F5 ;
//   border-radius: 30px;
//   transition: 0.2s ease;
//   align-self: center; 
//   font-size: 0.8em;
//   margin-left: 5em;
//   cursor: pointer;
//   font-weight: bold;
//   transition: transform 0.9s;
//     :hover{
//       background-color: transparent;
//       box-shadow: 0 0 4px 0  #3e341a inset, 0 0 4px 2px #3e341a;
//       height: 20px;
//     }
// `
// export const ButtonCreate =styled.button`
//   position: relative;
//   display: flex;
//   right: 40px;
//   align-items: center;
//   border:none;
//   border-radius: 10em;
//   padding: 0.5em;
//   padding-left: 1em;
//   padding-right: 1em;
//   font-size:0,8em;
//   text-align: center;
//   color: black;
//   cursor: pointer;
//   background-color: white;
//   box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
//   -webkit-transition: all 150ms ease-in-out;
//   transition: transform 0.9s;
//     :hover {
//      box-shadow: 0 0 4px 0 #3e341a inset, 0 0 4px 2px #3e341a;
//     }
//     :active{
//       background-color: white;
//       color: black;
//       box-shadow: 0 0 4px 0  inset, 0 0 4px 2px #3e341a;
//     }
// `
// export const Button =styled.button`
//   position: relative;
//   display: flex;
//   align-items: center;
//   border:none;
//   border-radius: 10em;
//   padding: 0.5em;
//   padding-left: 1em;
//   padding-right: 1em;
//   font-size:0,8em;
//   text-align: center;
//   color: black;
//   cursor: pointer;
//   background-color: white;
//   box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
//   -webkit-transition: all 150ms ease-in-out;
//   transition: transform 0.9s;
//     :hover {
//       box-shadow: 0 0 4px 0 #3e341a inset, 0 0 4px 2px #3e341a;
//     }
//     :active{
//       box-shadow: 0 0 4px 0 #3e341a inset, 0 0 4px 2px #3e341a;
//       background-color: white;
//       color: black;
//     }
// `

export const ContainerList=styled.div`
 display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  
  h3{
    color:white
  }
 
`
 
export const Div= styled.div`
 display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
`

export const DivListTrip=styled.div`
 position: relative;
 
 overflow-y: scroll;
 width: 30%;
 border:solid 1px #F8F8FF;
 height: 400px;
 padding-right: 15px;
 padding-bottom: 10px;
 color:black;
 `
 export const ButtonReset = styled.div `
 border: 1px solid transparent;
 background-color: transparent;
 color: transparent;
 transition: 0.2s ease;
 align-self: center; 
 font-size: 0.8em;
 margin-left: 0.2em;
 cursor: pointer;
 font-weight: bold;
 transition: transform 0.5s;
     :hover{
     background-color: transparent;
     color:transparent;
     transform: scale(1.5);
   }
   :active{
     background-color: transparent;
   
   }
`
 export const DivName = styled.div`
 display: flex;
`
 export const Footer=styled.footer`
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