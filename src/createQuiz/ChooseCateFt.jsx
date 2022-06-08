import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import styledComponents from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

const ChooseCat = () => {

    const {cats} = useParams();
   
   const {diffs} = useParams();
  

  return (
    <FindMenuCon>
   <Find to='/game/create/find/Food'> <h1>FOOD</h1>  </Find>
   <Find to='/game/create/find/Beverages'> <h1>BEVERAGES</h1> </Find>
  </FindMenuCon>
  )
}


const Find = styled(Link)`

border-radius: 10px ;
display: block;
outline: none;
//margin: 0px;
justify-content: center ;
align-items: center ;
text-align: center ;
border-style:  none;
color: #f0e3f0 ;

width: 420px ;
cursor: pointer;
text-decoration:none ;

//margin:auto ;
margin-bottom: 20px;
background: linear-gradient(180deg, rgba(156, 132, 194, 0.68) 0%, rgba(201, 100, 249, 0.74) 100%);
& h1{
  place-items:center ;
  font-size: 25px ;
}
`
  
const FindMenuCon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 80vh;
  margin: auto ;
  margin-top: 40px;
  //justify-content: center ;
  align-items:center ;
  width: 100%;
 padding-top: 60px;

  
`



export default ChooseCat
