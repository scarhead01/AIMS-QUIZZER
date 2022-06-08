import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import styledComponents from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";
import { AiOutlinePlus } from "react-icons/ai";
import { MdAdd, MdOutlineArrowBackIos } from 'react-icons/md';

import SetForm from './popupFormFind/SetForm';

const AddSet = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const {games,subCats} = useParams();
    const {cats} = useParams();
    const {loading, data} = useQuery(FETCH_SET_QUERY,{
      // onCompleted: refetch,
      // pollInterval:100,
      // refetchQueries: [{ query: FETCH_CATEGORY_QUERY }],
      // pollInterval: 100
      variables: {cats,subCats},
      
  
   },
 
   );
   const n = data?.getSets?.sets?.length;
   let lastSet = data?.getSets?.sets[n-1]?.setNum;

   if( data?.getSets?.sets?.length===0){
     lastSet=0
   }
   console.log(data)

  return (
    
    <FindMenuCon>
    
      <NavCon><Nav to='/game/create'>{games}</Nav><MdOutlineArrowBackIos/> <Nav to={`/game/create/categories/${games} `}>{cats}</Nav><MdOutlineArrowBackIos/>
     
      <Nav to={`/game/create/${games}/${cats}`}>Sub Category</Nav><MdOutlineArrowBackIos/> <Nav to={`/game/create/${games}/${cats}/${subCats}`}>Set</Nav></NavCon>
     

      <AddBtn  onClick={() => {
          setModalOpen(true);
          
        }} >
        <Icon  >
          <MdAdd/></Icon>
      </AddBtn>

     

    { data?.getSets?.sets.reverse().map((cate) =>  (
      
          <Find key={cate.id} cate={cate} cat={cats} setNum={cate.setNum} to={`/game/create/find/${cats}/${subCats}/${cate.setNum}`}> {cate.setNum} </Find>
     )) }

     

{modalOpen && <SetForm setOpenModal={setModalOpen} game={games} cat={cats} subCat={subCats} set={lastSet}   />} 
  </FindMenuCon>
  )
}

const FETCH_SET_QUERY = gql`
query ( $cats: String!, $subCats: String!) {
  getSets(gameId: "6227003f9ac1104969591b20", cName: $cats, scName: $subCats) {
       sets {
           scName
           setNum
       }
  }
}
`


const Find = styled(Link)`
border-radius: 10px ;
position: relative ;
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
//  position: relative;
  height: 100vh;
  overflow-y: auto;
  margin: auto ;
  //justify-content: center ;
  align-items:center ;
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

const AddBtn = styled.button`
position: relative; 
left: 190px ;
background-color: #f1b7ff;
border: none ;
border-radius:50% ;
height: 50px;
width:50px;
justify-content: center ;
align-items:center ;
cursor: pointer;
&:hover{
  background-color: #e795fc;
}

`
const Icon = styled.i`
margin-top: 6px ;
position: relative;
display: block ;
font-size: 30px;
`


export default AddSet
