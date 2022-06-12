import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import styledComponents from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

const ChooseCatGu = () => {

    const {cats} = useParams();
   
   const {diffs} = useParams();
  

  return (
    <FindMenuCon>
   <Find to='/game/create/guess/Food/g'> Food </Find>
   <Find to='/game/create/guess/Equipment/g'> Equipment </Find>
   <Find to='/game/create/guess/Utensils/g'> Utensils </Find>
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
padding: 1rem ;
width: 420px ;
cursor: pointer;
text-decoration:none ;

//margin:auto ;
margin-bottom: 20px;
background: linear-gradient(180deg, rgba(156, 132, 194, 0.68) 0%, rgba(201, 100, 249, 0.74) 100%);
& h1{
  place-items:center ;
  font-size: 25px ;
}`
  
const FindMenuCon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 80vh;
  margin: auto ;
  //justify-content: center ;
  align-items:center ;
  width: 100%;
 padding-top: 60px;

  
`



export default ChooseCatGu
