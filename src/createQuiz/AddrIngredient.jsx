import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import styledComponents from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";
import { AiOutlinePlus } from "react-icons/ai";
import { MdAdd, MdOutlineArrowBackIos } from 'react-icons/md';

import RIngredientForm from './popupFormFind/RIngredientForm';
import WIngredients from './popupFormFind/WIngredients';
const AddrIngredients = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const {games,scName} = useParams();

    const {cats,setNum,rName} = useParams();

    const {loading, data} = useQuery(FETCH_RECIPE_QUERY,{
      variables: {cats,scName,setNum},
   },
  
   );
   const recipes = data?.getRecipes?.recipes?.find(o=>o.rName===rName);
   const rIngredients = recipes?.rIngredients;
   const wIngredients = recipes?.wIngredients;
   //let lastSet = data?.getSets?.sets[n-1]?.setNum;

  
   console.log(data)

  return (
    
    <FindMenuCon>
    
      <NavCon><Nav to='/game/create'>{games}</Nav><MdOutlineArrowBackIos/> <Nav to={`/game/create/categories/${games} `}>{cats}</Nav><MdOutlineArrowBackIos/>
     
      <Nav to={`/game/create/${games}/${cats}`}>Sub Category</Nav><MdOutlineArrowBackIos/> <Nav to={`/game/create/${games}/${cats}/${scName}`}>Set</Nav><MdOutlineArrowBackIos/> <Nav to={`/game/create/${games}/${cats}/${scName}/${setNum}`}>Recipes</Nav></NavCon>
     
<AddCon>
      <AddBtn  onClick={() => {
          setModalOpen(true);
          
        }} >
           <h1>+  Ingredient</h1> 
      
      </AddBtn>
      <AddBtn  onClick={() => {
          setModalOpen2(true);
          
        }} >
          <h1> +  wIngredient</h1> 
      
      </AddBtn>
</AddCon>
     
<h1> Ingredients:</h1>
    { rIngredients?.map((cate) =>  (
      
          <Find key={cate.index} cate={cate} cat={cats} >{cate.iName} </Find>
     )) }


     <h1> Wrong Ingredients:</h1>
     { wIngredients?.map((cate) =>  (
      
      <Find key={cate.index} cate={cate} cat={cats} >{cate.iName} </Find>
 )) }


     

{modalOpen && <RIngredientForm setOpenModal={setModalOpen} game={games} cat={cats} subCat={scName} setNums={setNum}   />} 
{modalOpen2 && <WIngredients setOpenModal2={setModalOpen2} game={games} cat={cats} subCat={scName} setNums={setNum}   />} 
 
  </FindMenuCon>
  )
}





const FETCH_RECIPE_QUERY = gql`
query ( $cats: String!, $scName: String!, $setNum: String!) {
  getRecipes(gameId: "6227003f9ac1104969591b20", cName: $cats, scName: $scName, setNum: $setNum) {

        
          recipes {
            rName
            rImgUrl
            rIngredients {
              iName
              imgUrl
              imgCc
              imgUrlCc
            }
            wIngredients {
              iName
              imgUrl
              imgCc
              imgUrlCc
            }
          
        }
      }
  }

`


const Find = styled.button`
border-radius: 10px ;
//position: relative ;
outline: none;
//margin: 0px;
border-style:  none;
top: 50px ;
text-decoration: none;
text-align:center;
padding: 12px ;
width: 420px ;
cursor: pointer;
font-size: 20px ;
color:#f8f6f6 ;
//margin:auto ;
margin-bottom: 10px;
background: linear-gradient(180deg, rgba(156, 132, 194, 0.68) 0%, rgba(201, 100, 249, 0.74) 100%);

&:hover{
  transform:scale(1.01) ;
  color:#edcdff ;
}
`
  
const FindMenuCon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  margin: auto ;
  //justify-content: center ;
  align-items:center ;
  overflow: auto;
  width: 100%;
 padding-top: 60px;
& h1{
  font-size: 18px;
  color:#f7e0f5 ;
}
  
`
const NavCon = styled.div`
display:inline-flex ;
color:#eba7fc ;

`

const Nav = styled(Link)`
text-decoration:none ;
color:#f8e6e6 ;
text-transform:capitalize;
margin:0 10px ;
&:hover{
  color:#de70ff ;
}
`
const AddCon = styled.div`
margin-top:20px ;
display: inline;
`

const AddBtn = styled.button`
position: relative; 
display:inline-block ;

background-color: #f1b7ff;
border: none ;
border-radius:5px ;
height: 50px;
width:200px;
color:#333 ;
margin: 10px;

cursor: pointer;
&:hover{
  background-color: #be63d4;
}
& h1{
  color:#333 ;
}

`
const Icon = styled.i`
//margin-top: 6px ;
//position: relative;
//display: block ;
//display:flex ;
//flex-direction: flex-end;
font-size: 30px;
`


export default AddrIngredients
