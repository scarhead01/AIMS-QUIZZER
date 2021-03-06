import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { IoClose } from 'react-icons/io5'
import { useForm } from "react-hook-form";
import { MdSettingsApplications } from 'react-icons/md'
const SubCatForm = ({ setOpenModal, game, cat }) => {

  const [gameId, setgameId] = useState('')
  const [cats, setcats] = useState('')
  const [scName, setscName] = useState('')
  const [imgUrl, setimgUrl] = useState('')
  const [imgCc, setimgCc] = useState('')
  const [imgUrlCc, setimgUrlCc] = useState('')
  const { register, handleSubmit } = useForm({
    defaultValues: {
     scName:'',
     imgUrl:'',
     imgCc:'',
     imgUrlCc:''
    }
  });
  console.log()
  const onSubmit = (data) => {
    
  if(game==='find'){
    setgameId('6227003f9ac1104969591b20')
  }else if(game==='guess'){
    setgameId('6279d62e232de1c831eb7c4d')
  }
 
    setscName(data.scName)
    setimgUrl(data.imgUrl)
    setimgCc(data.imgCc)
    setimgUrlCc(data.imgUrlCc)
    AddSub();
    setOpenModal(false);

  };

  const cName= cat;

  console.log(cat)
    const [errors,setErrors]= useState({});
    const [AddSub,{loading}] = useMutation(ADD_SUBCAT,{
    
        variables:{gameId,cName,scName,imgUrl,imgCc,imgUrlCc},
        refetchQueries: [{ query: FETCH_CATEGORY_QUERY, variables:{cName} }]
    })

   
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
          }}
        >
            < IoClose style={{fontSize:25}} />
       
      </TitleCloseBtn>
      <Form>
       <Heading> <h1>Add New Sub Category</h1> </Heading>
 
       <form onSubmit={handleSubmit(onSubmit)}>
    
          <label> Sub Category Name:</label>
      <input
        {...register("scName", { required: true })}
        placeholder="sub category Name"
      />
      <label>Image Url</label>
      <input
        {...register("imgUrl", { minLength: 2 })}
        placeholder="image url"
      />
      <label>Image Author/Photographer:</label>
      <input
        {...register("imgCc", { minLength: 2 })}
        placeholder="image author/photographer"
      />
       <label>Image Copyright Url</label>
      <input
        {...register("imgUrlCc", { minLength: 2 })}
        placeholder="image copyright url"
      />
    <Submit>
    <input type="submit" />
    </Submit>

    </form>
    </Form>
   </Container>
   </ModalBackgroundCon>
   
  )
}


const ADD_SUBCAT = gql `
mutation InsertSubCategory($gameId: ID!, $cName: String!, $scName: String!, $imgUrl: String!, $imgCc: String!, $imgUrlCc: String!) {
  insertSubCategory(gameId: $gameId, cName: $cName, scName: $scName, imgUrl: $imgUrl, imgCc: $imgCc, imgUrlCc: $imgUrlCc) {
   id
  }
}
`
const FETCH_CATEGORY_QUERY = gql`
query($cName:String!){
 getGame(gameId: "6227003f9ac1104969591b20", cName: $cName) {
   
  
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
    width: 500px;
    height: 550px;
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
width:500px;
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
display:inline-block ;
//width: 100% ;
margin: auto ;
justify-content: center ;
align-items: center ;
`

const Submit = styled.button`
margin: auto ;
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

export default SubCatForm
