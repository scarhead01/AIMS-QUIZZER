import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import styledComponents from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";
import { AiOutlinePlus } from "react-icons/ai";
import { MdAdd, MdOutlineArrowBackIos } from 'react-icons/md';
import SubCatFormGu from './popupFormFind/SubCatFormGu';
const AddSubCatGu = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const {cats} = useParams();
    const {loading, data} = useQuery(FETCH_GCATEGORY_QUERY,{
      // onCompleted: refetch,
     // pollInterval:100,
      refetchQueries: [{ query: FETCH_GCATEGORY_QUERY }],
    //  pollInterval: 100,

    apollo: { 
      timeline: {
        query: FETCH_GCATEGORY_QUERY,
        fetchPolicy: 'cache-and-network'
      }
    },
    mounted() {
      this.$apollo.queries.timeline.setOptions({
        pollInterval: 100,
        fetchPolicy: 'cache-and-network'
      })
    },

      variables: {cats},
      
   },
  
   );
   

   const {games} = useParams();
  

  return (
    <FindMenuCon>
      <NavCon><Nav to='/game/create'>{games}</Nav><MdOutlineArrowBackIos/> <Nav to={`/game/create/categories/${games} `}>{cats}</Nav><MdOutlineArrowBackIos/><Nav to={`/game/create/${games}/${cats}`}>Sub Category</Nav></NavCon>
     

      <AddBtn  onClick={() => {
          setModalOpen(true);
          
        }} >
        <Icon  >
          <MdAdd/></Icon>
      </AddBtn>

     

    { data?.getGames?.subCategories?.map((cate) =>  (
          <Find key={cate.id} cate={cate} cat={cats} to={`/game/create/guess/${cats}/${cate.scName}/g`} >{cate.scName} </Find>
     )) }

{modalOpen && <SubCatFormGu setOpenModal={setModalOpen} game={games} cat={cats} />}
  </FindMenuCon>
  )
}

const FETCH_GCATEGORY_QUERY = gql`
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
        }
      }
    
 }
}
`


const Find = styled(Link)`
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
  height: 100vh;
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


export default AddSubCatGu
