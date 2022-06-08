import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoClose } from 'react-icons/io5';

function ImageModal({ setOpenModal, img:{imgUrl,imgCc,imgUrlCc} }) {

  //console.log(img)


  
  return (
    <ModalBackgroundCon>
    <ModalBackground
         onClick={() => {
              setOpenModal(false);
            }}
    />
      <ModalContainer>
        <TitleCloseBtn
          
            onClick={() => {
              setOpenModal(false);
            }}
          >
           < IoClose style={{fontSize:25}} />
         
        </TitleCloseBtn>

       <SubImg src={imgUrl} />
         <Cc href={imgUrlCc} > cc: {imgCc}  </Cc>
          
  
       
          
       
      </ModalContainer>
    </ModalBackgroundCon>
  );
}
const ModalBackground = styled.div`
position: absolute;
left: 0px;
width: 100%;
    height: 100vh;
    background-color: #2c2c2c83;
    //top:-100;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalBackgroundCon = styled.div`
    position: absolute;
    width: 100%;
 left: 0px;
    //right:0px ;
    height: 100vh;
   // margin:auto ;
    background-color: transparent;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:30 ;
`
const ModalContainer = styled.div`
    position: absolute;
   // display:block ;
   //margin: auto;
    width: 600px;
    height: 450px;
    border-radius: 10px;
   // background: #0a002760;
    //box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
`
const TitleCloseBtn = styled.button`
    position:absolute ;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    color: #eecbff;
    z-index: 35;
    right: -10px ;
    top:0px ;
    font-size:14px ;
`


const SubImg = styled.img`
height:100% ;
width: 100%;
position: relative ;
border-radius: 15px ;
background-color: #363636;
box-shadow: 0 0 3px 2px rgba(0,0,0,0.3);
object-fit: contain;

`

const Cc = styled.a`
//visibility: visble;

position: relative;
/* bottom: -80px ;
left: -160px ; */

list-style:none ;
height: 15px ;
outline:none ;
text-decoration:none;
padding:5px ;
//background-color: #0f050f65;
color:#fccbf9 ;
margin-bottom: 20px;

`
export default ImageModal;