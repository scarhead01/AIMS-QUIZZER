import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import styledComponents from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

//import Guess from './Guess';
import Quiz from './Quiz';
//import category from '../../../../backend/models/category';
const menuItems = [
    {id:1,label:''},
    {id:2,label:''},
    {id:3,label:''},
    {id:4,label:'',},
    {id:5,label:''},
    {id:6,label:''}
  ];
  


const QuizMenus = () => {
  const {cats} = useParams();
  const {loading, data} = useQuery(FETCH_CATEGORY_QUERY,{
    // onCompleted: refetch,
    // pollInterval:100,
    // refetchQueries: [{ query: FETCH_CATEGORY_QUERY }],
    // pollInterval: 100
    variables: {cats},
    

 },

 );

 console.log(data)
  const {diffs} = useParams();
  
  return <>
    {loading?<FindMenuCon> 
     
    </FindMenuCon> :
    <FindMenuCon>
    { data?.getQuiz?.quizCategories?.map((cate) =>  (
      <Con key={cate.id}  to={`/game/quiz/quizmenu/${cate.cName}/q`}>

        <Quiz key={cate.id} cate={cate} cat={cats} diff={diffs} />
      </Con>
     )) }
      </FindMenuCon>
     }
 </>
};
//const {cats} = useParams();
const FETCH_CATEGORY_QUERY = gql`
query{
 getQuiz(gameId: "629c247d6a10ae7b11e3c2e2") {
   
  
  id
    fName
    quizCategories {
      cName
      quizQuestions {
        question
        cAnswer
        wAnswer {
          names
        }
      }
    }
    
 }
}
`
const Con = styled(Link)`
text-decoration: none ;
`
const FindL = styled.div`
border-radius: 10px ;
outline: none;
//margin: 0px;
border-style:  none;
height: 130px;
width: 420px ;
cursor: pointer;
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

`
  
const FindMenuCon = styled.div`
 overflow-y: auto;
  display: flex;

	flex-direction: column;
  position: relative;
  max-height: 100%;

  //justify-content: center ;
  align-items:center ;
  width: 100vw;
  margin: auto  ;
 padding-top: 60px;
   margin: auto ;
   @media screen and ( max-width:468px){
    margin: auto 1rem;
  }
@media screen and ( min-width:468px) and ( max-width:608px){
  width: 400px;}
  
  

  
`


export default QuizMenus;
