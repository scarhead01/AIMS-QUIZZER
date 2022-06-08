import React from 'react'
import styled from 'styled-components'

const PopChecker = ({setpopChecks,correct,answer,setnextQuests}) => {

    console.log(answer)

  return (
    <ModalBackgroundCon>
    <ModalBackground
      
    />
      <ModalContainer>
      
       <ModalBody>
         {correct==="correct"? <h1>Its correct Well done!</h1> :
         <>
         <h1>The Correct Answer is</h1>
         {
          answer?.map((ans=>(
                           <h1 key={ans}> {ans}</h1>
         )) )
        }
       </>
         }
         
         

       </ModalBody>
  
        <Footer>
        <FooterBtn onClick={()=>{
            setpopChecks(false)
            setnextQuests(true)

        }}> Continue </FooterBtn>
          
        </Footer>
      </ModalContainer>
    </ModalBackgroundCon>
  )
}

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
const ModalContainer = styled.div`
    position: absolute;
    margin: auto;
   
    bottom: 0px;
    width: 500px;
    height: 500px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
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
const TitleCloseBtn = styled.button`
 display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    color: #160020;
`
const ModalBody = styled.div`
 flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
    & h1,h2{
        font-size: 17px;
        color:#36002b;

    }
    &.one{
        background: linear-gradient(180deg, rgba(71, 0, 188, 0.68) 0%, #4700BC 100%);
        color: #4700BC;
    }
`
const BodyButton = styled.button`
        background: linear-gradient(180deg, rgba(124, 8, 192, 0.68) 0%, #5d11d8 100%);
        color: #f7ceff;
        border: none;
        cursor: pointer;
        padding: 10px ;
        width: 60%;
        margin: auto;
        border-radius: 5px;
        box-shadow: 0 0 4px 0.5px rgba(0,0,0,0.2);
        &.active{
          border:3px solid #74006a;
          padding: 7px ;
        }
`
const CategoryCon = styled.div`
display:flex ;
width: 80% ;
margin-bottom:20px ;
& h3{
  font-weight:300 ;
  font-size: 14px ;
  position: relative;
  top:-40px;
}
`
const CatIcon = styled.img`
position: relative;
top:-20px;
left:-8px;
margin: auto;
height: 140px ;
width: 140px;
&.active {
	-webkit-animation: wobble-hor-bottom 1s both;
	        animation: wobble-hor-bottom 1s both;
}
 @-webkit-keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
}

`
const BodyButton2 = styled.button`
 background: linear-gradient(180deg, rgba(128, 9, 197, 0.68) 0%, #5d11d8 100%);
        color: #f7ceff;
        border: none;
        padding: 10px ;
        height: 160px ;
        width: 140px ;
        cursor: pointer;
        margin: auto;
        border-radius: 5px;
        box-shadow: 0 0 4px 0.5px rgba(0,0,0,0.2);
        &.active{
          border:3px solid #f807e4;
        }
      
`
const Footer = styled.div`
    flex: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FooterBtn = styled.button`
  
    width: 50%;
    padding: 10px;
    border: none;
    background-color: #d429ff;
    color: #f0d1ff;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    text-decoration:none;
`
const Error = styled.div`
  font-size: 15px;
  color: #b60365;
  margin:auto;
  font-weight: 600;
`

export default PopChecker