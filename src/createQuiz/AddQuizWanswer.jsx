import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import styledComponents from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";
import { AiOutlinePlus } from "react-icons/ai";
import { MdAdd, MdOutlineArrowBackIos } from 'react-icons/md';
import CatForm from './popupFormFind/QCategoryForm';
import Question from './popupFormFind/QcatQuest';
import WrongAnsForm from './popupFormFind/QwrongAns';
const AddwAnswer = () => {

    const [modalOpen, setModalOpen] = useState(false);
const gameId ="629c247d6a10ae7b11e3c2e2"
    const {cats,question} = useParams();
    const {loading, data} = useQuery(FETCH_QUESTION_QUERY,{
      variables:{gameId}
    }
   );
   console.log(data)
   //const {} = useParams();
   const {games} = useParams();
  

  return (
    <FindMenuCon>
      <NavCon><Nav to='/game/create'>{games}</Nav><MdOutlineArrowBackIos/> <Nav to={`/game/create/${games}/categories `}>Categories</Nav></NavCon>
     

      <AddBtn  onClick={() => {
          setModalOpen(true);
          
        }} >
        <Icon  >
          <MdAdd/></Icon>
      </AddBtn>

     <h1>Correct</h1>

    { data?.getQuiz.quizCategories?.find(o => o.cName === cats)?.quizQuestions?.find(o => o.question === question)?.cAnswer?.map((cate) =>  (
          <Find key={cate.id} cate={cate} cat={cats} to={`/game/create/find/${cats}/${cate.question}`} >{cate.cAnswer} </Find>
     )) }
     <h1>Wrong</h1>
    { data?.getQuiz.quizCategories?.find(o => o.cName === cats)?.quizQuestions?.find(o => o.question === question)?.wAnswer?.map((cate) =>  (
          <Find key={cate.id} cate={cate} to={`/game/create/find/${cats}/${cate.question}/q`} >{cate.names} </Find>
     )) }

{modalOpen && <WrongAnsForm setOpenModal={setModalOpen} game={games} cat={cats} question={question} />}
  </FindMenuCon>
  )
}

const FETCH_QUESTION_QUERY = gql`
query GetQuiz($gameId: ID!) {
  getQuiz(gameId: $gameId) {
    id
    fName
    quizCategories {
      cName
      quizQuestions{
        question
        cAnswer
        wAnswer{
          names
        }
      }
    }
  }
}
`

const Find = styled.button`
border-radius: 10px ;
position: relative ;
outline: none;
text-align: center;
display:block ;
justify-content:center ;
align-items: center ;
margin:auto ;
text-decoration:none ;
//margin: 0px;
border-style:  none;
//top: 50px ;
padding: 25px 30px ;
width: 420px ;
cursor: pointer;
font-size: 20px ;
color:#f8f6f6 ;
//margin:auto ;

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
  height: 80vh;
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


export default AddwAnswer
