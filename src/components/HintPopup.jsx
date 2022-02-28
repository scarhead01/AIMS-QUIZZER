import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

  
  function HintPopup({ setOpenModal1 }) {
    return (
        <ModalBackgroundCon>
        <ModalBackground
             onClick={() => {
                  setOpenModal1(false);
                }}
        />
          <ModalContainer>
            <TitleCloseBtn
              
                onClick={() => {
                  setOpenModal1(false);
                }}
              >
                x
             
            </TitleCloseBtn>
           <ModalBody>
                   <IngredientList>
                       <h1>Correct Ingredient is: Beef</h1>
                       </IngredientList> 
                      
           </ModalBody>
           
              
           
          </ModalContainer>
        </ModalBackgroundCon>
      );
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
       
      
        width: 300px;
        height: 100px;
        border-radius: 10px;
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
     margin: auto;
        width: 80%;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
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
    `
    const Footer = styled.div`
     flex: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const FooterBtn = styled(Link)`
      
        width: 50%;
        padding: 10px;
        border: none;
        background-color: #d429ff;
        color: #f0d1ff;
        border-radius: 8px;
        font-size: 18px;
        cursor: pointer;
    `
    const IngredientList = styled.button`
     color: white;
    font-size: 18px;
    margin: 10px;
    border:none;
    background: linear-gradient(152.45deg, rgba(205, 184, 223, 0.46) 7.59%, rgba(201, 195, 206, 0.1932) 55.9%, rgba(204, 187, 218, 0.46) 103.69%);
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    & h1 {
           position: relative;
           padding: 5px 8px;
           margin: auto;
           font-size: 18px;
    }`
    export default HintPopup;