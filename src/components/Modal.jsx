import React from "react";
import styled from "styled-components";


function Modal({ setOpenModal }) {
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
            x
         
        </TitleCloseBtn>
       <ModalBody>
           <h1>Difficulty</h1>
           <BodyButton>
               EASY
           </BodyButton>
           <BodyButton className="two">
               HARD
           </BodyButton>
           <h2>Category</h2>
           <BodyButton className="Cone">
               FOOD
           </BodyButton>
           <BodyButton className="Ctwo">
               BEVERAGES
           </BodyButton>

       </ModalBody>
        <Footer>
          <FooterBtn
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Start
          </FooterBtn>
          
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
`

export default Modal;