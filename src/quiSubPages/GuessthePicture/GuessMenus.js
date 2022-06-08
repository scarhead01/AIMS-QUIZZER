import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import styledComponents from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

import Guess from './Guess';
//import category from '../../../../backend/models/category';
const menuItems = [
    {id:1,label:''},
    {id:2,label:''},
    {id:3,label:''},
    {id:4,label:'',},
    {id:5,label:''},
    {id:6,label:''}
  ];
  


const GuessMenus = () => {
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
    {loading?<FindMenuCon> <FindL></FindL>
    <FindL></FindL>
    <FindL></FindL>
    </FindMenuCon> :
    <FindMenuCon>
    { data?.getGames?.subCategories?.map((cate) =>  (
      
          <Guess key={cate.id} cate={cate} cat={cats} diff={diffs}/>
     )) }
      </FindMenuCon>
     }
 </>
};
//const {cats} = useParams();
const FETCH_CATEGORY_QUERY = gql`
query($cats:String!){
 getGames(gameId: "629d6ece913e0070d05a1d41", cName: $cats) {
   
  
      subCategories {
        id
        scName
        imgUrl
        imgCc
        imgUrlCc
        sets {
          id
          setNum
          userScore{
            id
            userId
            score
          }
         
        }
      }
    
 }
}
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
  max-height: 100vh;
  margin: auto ;
  //justify-content: center ;
  align-items:center ;
  width: 100%;
 padding-top: 60px;

  
`

const MenuList = styled(Link)`
color: white;
font-size: 18px;
margin: auto;
width: 367px;
height: 55px;
border:none;
background: linear-gradient(180deg, rgba(156, 132, 194, 0.68) 0%, rgba(201, 100, 249, 0.74) 100%);
cursor: pointer;
& h1{
    font-size: 24px;
    margin-left: 15px;
    margin-top: 10px;
    position: relative;
    left: -170px;

}
`
export default GuessMenus;
