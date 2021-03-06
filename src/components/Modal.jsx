import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import FoodIcon from '../images/foodIcon.png'
import BeverageIcon from '../images/beverageIcon.png'
import { IoClose } from "react-icons/io5";

function Modal({ setOpenModal }) {
  const [diffi,setDiff] = useState("");
  const [cat,setCat] = useState("");
  const [start,setStart] = useState(false);
  //const [active, setActive] = useState("")
  const [err, setErr] = useState(false)
  //const [query, setQuery] = useState(false)
  const [hover, setHover] = useState("")
  const Difficulty = (diff) => {
    setDiff(diff);
    console.log(diff);

  }

  const Category = (cate) => {
   // setCat(cate);
    console.log(cate);
     
     if (diffi === '' ){
      //error="Please Select Difficulty and Category First";
      setErr(true)
    }else{
 
     navigate(`/game/find/findmenu/${diffi}/${cate}`);
    }
  }
   const Start = () => {
     setStart(true)
   }
  //  useEffect(() => {
  
   
  //    console.log(err)
  //  }, [start])
   
   const navigate = useNavigate();
  const BStart = () => {
 
  
    if (diffi === '' || cat === ''){
      //error="Please Select Difficulty and Category First";
      setErr(true)
    }else if (diffi === '' ){
      //error="Please Select Difficulty and Category First";
      setErr(true)
    }else if (cat === '' ){
      //error="Please Select Difficulty and Category First";
      setErr(true)
    }else{
 
     navigate(`/game/find/findmenu/${diffi}/${cat}`);
    }
  
  //  setQuery(true);
   }
   const ImgHover =(food) =>{
    setHover(food);
  }
  const ImgnoHover =(drink) =>{
    setHover(drink);
  }

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
       <ModalBody>
           <h1>Difficulty</h1>
           {/* <h2>{error}</h2>  */}
           <BodyButton className={diffi==="Easy" ? "active":""} onClick={Difficulty.bind(this,"Easy")}>
               EASY
           </BodyButton>
           <BodyButton className={diffi==="Hard" ? "active":""} onClick={Difficulty.bind(this,"Hard")}>
               HARD
           </BodyButton>
           <h2>Category</h2>
           <CategoryCon>
           <BodyButton2 className={cat==="Food" ? "active":"" } disabled={true} onClick={Category.bind(this,"Food")} onMouseOver={ImgHover.bind(this,"Food")} onMouseLeave={ImgnoHover.bind(this,"Food")} >
              <CatIcon src={FoodIcon} className={hover === "Food"  ? "active":""}  />
              <h3>FOOD</h3>
               
           </BodyButton2>
           <BodyButton2 className={cat==="Beverages" ? "active":""} onClick={Category.bind(this,"Beverages")} onMouseOver={ImgHover.bind(this,"Beverages")} onMouseLeave={ImgnoHover.bind(this,"Beverages")} >
           <CatIcon src={BeverageIcon} className={hover === "Beverages" ? "active":""}  />
              <h3>BEVERAGE</h3>
           </BodyButton2>
           </CategoryCon>

         

       </ModalBody>
       {err && <Error>Select Difficulty and Category First</Error>}
        <Footer>
        
          
        </Footer>
      </ModalContainer>
    </ModalBackgroundCon>
  );
}
const ModalBackground = styled.div`
position: absolute;
left: 0;
width: 100%;
    height: 100vh;
    overflow:auto ;
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
    width: 30%;
    height: 70%;
    @media screen and ( max-width:468px){
      width: 70%;
    height: 70%;
  }
@media screen and ( min-width:468px) and ( max-width:608px){
  width: 70%;
    height: 70%;
}
  @media screen and ( min-width:558px) and ( max-width:868px){
    width: 60%;
    height: 70%;
}
@media screen and ( min-width:868px) and ( max-width:1268px){
  width: 40%;
    height: 70%;
}
    border-radius:15px ;
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
        margin-bottom:1rem ;
        border-radius: 5px;
        box-shadow: 0 0 4px 0.5px rgba(0,0,0,0.2);
        &.active{
          border:3px solid #74006a;
          padding: 7px ;
        }
`
const CategoryCon = styled.div`
display:flex ;
width: 95% ;
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
height:100%;
width:100%;
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
export default Modal;