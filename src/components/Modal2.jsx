import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


function Modal2({ setOpenModal2 }) {
  
  const [diffi,setDiff] = useState("");
  const [cat,setCat] = useState("");
  const [err, setErr] = useState(false);

  const Difficulty = (diff) => {
    setDiff(diff);
  
  }

  const Category = (cate) => {
    setCat(cate);
  
    
  }

 //  useEffect(() => {
 
  
 //    console.log(err)
 //  }, [start])
  
  const navigate = useNavigate();
 const BStart = () => {

 
   if (diffi == '' || cat == ''){
     //error="Please Select Difficulty and Category First";
     setErr(true)
   }else if (diffi == '' ){
     //error="Please Select Difficulty and Category First";
     setErr(true)
   }else if (cat == '' ){
     //error="Please Select Difficulty and Category First";
     setErr(true)
   }else{

    navigate(`/game/guess/guessmenu/${diffi}/${cat}`);
   }
  }

  return (
    <ModalBackgroundCon>
    <ModalBackground     
      onClick={() => {
      setOpenModal2(false);
    }}/>
      <ModalContainer>
        <TitleCloseBtn
          
            onClick={() => {
              setOpenModal2(false);
            }}
          >
            x
         
        </TitleCloseBtn>
       <ModalBody>
           <h1>Difficulty</h1>
           <BodyButton className={diffi==="Easy" ? "active":""} onClick={Difficulty.bind(this,"Easy")}>
               EASY
           </BodyButton>
           <BodyButton className={diffi==="Hard" ? "active":""} onClick={Difficulty.bind(this,"Hard")}>
               HARD
           </BodyButton>
           <h2>Category</h2>
           <BodyButton className={cat==="Food" ? "active":""} onClick={Category.bind(this,"Food")}>
               FOOD
           </BodyButton>
           <BodyButton className={cat==="Utensils" ? "active":""} onClick={Category.bind(this,"Utensils")}>
               UTENSILS
           </BodyButton>
           <BodyButton className={cat==="Equipment" ? "active":""} onClick={Category.bind(this,"Equipment")}>
               EQUIPMENT
           </BodyButton>

       </ModalBody>
       {err && <Error>Select Difficulty and Category First</Error>}
       <Footer>
          <FooterBtn
         //to={`/game/guess/guessmenu/${diffi}/${cat}`} 
          onClick = {BStart}
          >
            Start
          </FooterBtn>
          
        </Footer>
      </ModalContainer>
    </ModalBackgroundCon>
  );
}
const Error = styled.div`
  font-size: 15px;
  color: #fd45aa;
  margin:auto;
  font-weight: 600;
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
    background-color: rgba(44, 44, 44,0.3);
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
    background: #622BFF;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
`
const TitleCloseBtn = styled.button`
 display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    color: #eecbff;
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
        color:white;

    }
    &.one{
        background: linear-gradient(180deg, rgba(71, 0, 188, 0.68) 0%, #4700BC 100%);
        color: #4700BC;
    }
`
const BodyButton = styled.button`
 background: linear-gradient(180deg, rgba(71, 0, 188, 0.68) 0%, #4700BC 100%);
        color: #f7ceff;
        border: none;
        padding: 10px ;
        width: 60%;
        margin: auto;
        border-radius: 5px;
        box-shadow: 0 0 4px 0.5px rgba(0,0,0,0.2);
        &.active{
          border:3px solid #f807e4;
        }
`
const Footer = styled.div`
 flex: 20%;
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


export default Modal2;