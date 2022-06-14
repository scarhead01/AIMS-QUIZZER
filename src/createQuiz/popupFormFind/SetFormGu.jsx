import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { IoClose, IoCompassOutline } from 'react-icons/io5'
import { useForm } from "react-hook-form";
import { MdSettingsApplications } from 'react-icons/md'
const SetFormGu = ({ setOpenModal, game, cat,subCat, set }) => {

  const [gameIds, setgameId] = useState('')
  const [cats, setcats] = useState('')

 

  console.log(subCat)
  
  const gameId = "629d6ece913e0070d05a1d41"
  const cName= cat;
  const scName=subCat;
 
 console.log(set)

  const setNums = parseInt(set) + 1;
  const setNum = setNums.toString();

  console.log()
    const [errors,setErrors]= useState({});
    const [addSet,{loading}] = useMutation(ADD_SETG,{
       
        variables:{gameId,cName,scName,setNum},
        refetchQueries: [{ query: FETCH_SETG_QUERY, variables:{cName,scName} }]
    })
    
    const Confirm = () =>{
      addSet()
      setOpenModal(false);
    }
   
  return (
    <ModalBackgroundCon>
    <ModalBackground
         onClick={() => {
              setOpenModal(false);
            }}
    />
   <Container>
   
   <TitleCloseBtn
          
          onClick={() => {
            setOpenModal(false);
          }}>
            < IoClose style={{fontSize:25}} />
       
      </TitleCloseBtn>
      <Form>
       <Heading> <h1>Add New Set</h1> </Heading>

       <Footer>
         {!loading? (<Submit onClick={()=>{Confirm()}}>Confirm</Submit>):(
           <Submit disabled={true} onClick={()=>{Confirm()}}> adding the new set...</Submit>
         )}
            
            <Submit2  onClick={() => {
            setOpenModal(false);
          }}>Cancel</Submit2>
          </Footer>
    </Form>
   </Container>
   </ModalBackgroundCon>
   
  )
}


const ADD_SETG = gql `
mutation insertSet($gameId: ID!, $cName: String!, $scName: String!, $setNum: String!) {
  insertSetG(gameId: $gameId, cName: $cName, scName: $scName, setNum: $setNum) {
   id
  }
}
`

const FETCH_SETG_QUERY = gql`
query ( $cName: String!, $scName: String!) {
  getSetsG(gameId: "629d6ece913e0070d05a1d41", cName: $cName, scName: $scName) {

        
       sets {
          
           setNum
       }
      
  }
}
`

const ModalBackground = styled.div`
position: absolute;
left: 0;
width: 100%;
    height: 100vh;
    background-color: rgba(44, 44, 44,0.3);
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalBackgroundCon = styled.div`
position: absolute;
left: 0;
width: 100%;
    height: 100vh;
    background-color: transparent;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
 position: relative;
    margin: auto;
   
   // bottom: 0px;
    width: 300px;
    height: 250px;
    border-radius: 10px;
    background: #d0beff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
   padding: 25px;
   
    -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    /* ----------------------------------------------
 * Generated by Animista on 2022-3-13 10:5:14
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
`

const Heading = styled.div`
margin: auto;
color: #050016;
& h1{
    color: #050016;
}
`

const TitleCloseBtn = styled.button`
 display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    color: #160020;
    cursor: pointer;
    &:hover{
        color:#9539ff;
    }
`

const Form = styled.div`
height:100% ;
width:100%;
display: flex;
//z-index:16 ;
flex-direction: column;
margin:auto ;
& h3{
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight:600;
}
& input{
  display:block ;
  border: none;
  border-bottom: 2px solid purple;
  background-color: #f1d3ff92;
  width: 80%;
  margin: auto;
  text-transform: capitalize ;
  padding: 10px;
  border-radius: 1px;
  margin-top:10px;
  margin-bottom: 10px;
  &:focus{
    outline: none;
    border-bottom: 3px solid #ff46f6;
  }
}
& label{
  display: block ;
  width: 80%;
  margin: auto;
  margin-top: 25px;
  font-size: 15px;
  font-weight: 600;
}
&.active {
  visibility: visible ;

}
`

const Footer = styled.div`
position: relative;
display:inline-flex ;
width: 300px ;
margin: auto ;
place-content:center;
place-content:center;

`

const Submit = styled.button`
margin: auto ;
//display:block ;
padding:10px 25px ;
border-radius: 5px ;
margin:20px;
border: none;
background-color: #c300ff;
cursor: pointer;
color:#f1e9e9 ;
&:hover{
    background-color: #9f01cf;
}
& input{
background-color:transparent ;
border:none ;
color:#f1e9e9;
}
`
const Submit2 = styled.button`
margin: auto ;
//display: block;

padding: 10px 25px;
border-radius: 5px ;
margin:20px;
border: none;
color:#f1e9e9 ;
background-color: #ff008c;
cursor: pointer;
&:hover{
    background-color: #ca006f;
}
`

export default SetFormGu
