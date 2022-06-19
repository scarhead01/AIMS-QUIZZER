import  { useContext, useEffect, useState } from 'react'

import Sidebar from './components/Sidebar';
import Main from './components/Main';

import styled from "styled-components";

import { AuthContext } from './context/auth'
import jwtDecode from 'jwt-decode'
const Containers=styled.div`
 display: grid; 
 background: #E1C9FF;
grid-template-columns: .2fr .8fr;
grid-template-areas:"Sidebar Main";
position: relative ;
gap: 0px;
width: 100vw;
left: 0px;
height: 100vh;
overflow:auto ;
top:0px ;
//bottom: -16px ;


filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#120835",endColorstr="#030018",GradientType=1);
`
const Container1 = styled.div`
width: 100vw;
position: relative ;
height: 100vh;
top: 0px;
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#120835",endColorstr="#030018",GradientType=1);
`


function MainCon() {

 
  //const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('jwtToken'));
  //   if (items) {
  //    setItems(items);
  //   }
  // }, []);

  //console.log(decodedToken)
  const { user } = useContext(AuthContext);

      const login = user ? (
    <Containers>
    <Sidebar/>
        <Main />
    </Containers>
      ) : (
        <Container1>
          <Main />
        </Container1>
      )
      return login;
      
}


export default MainCon;
