import React, { useState } from 'react';
import styled from 'styled-components';
import bistek from '../../images/bistek.jpg';
import basket from '../../images/basket.png';
import hint from '../../images/hint.png';
import BasketPopup from '../../components/BasketPopup';
import HintPopup from '../../components/HintPopup';

const IngredientItems = [
    {id:1,label:'Pepper'},
    {id:2,label:'Pork'},
    {id:3,label:'Beef'},
    {id:3,label:'Tomato',},
    {id:3,label:'Soy Sauce'},
    {id:3,label:'Onion'},
    {id:3,label:'Garlic'},
    {id:3,label:'Lime'},
    {id:3,label:'Ginger'},
    {id:3,label:'Fish Sauce'},
  ];

const FindGames = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  return <FindGamesCon>
      <h3>Difficulty: EASY</h3>
      <h1>Find The Ingredients </h1>
      <IngredientPic src={bistek}/>
      <IngredientsCon>
      {IngredientItems.map(menu=>
               <IngredientList key={menu.id} to='/game/find/findmenu/findgames'>
                   <h1>{menu.label}</h1>
                   </IngredientList> 
                  
                  )} 
                  </IngredientsCon>
                  <Footer>
                  <BasketPic src={basket}onClick={() => {
          setModalOpen(true);
        }}/>
        <HintCon>
                  <HintPic src={hint}onClick={() => {
          setModalOpen1(true);}}/>
          <h3>3 Hints Left</h3>
          </HintCon>
                  <Submit>Submit</Submit>
                  </Footer>
                  {modalOpen && <BasketPopup setOpenModal={setModalOpen} />}
                  {modalOpen1 && <HintPopup setOpenModal1={setModalOpen1} />}
  </FindGamesCon>;
};

const FindGamesCon = styled.div`
margin: auto;
width: 100%;
font-size: 12px;
font-family: halant;
& h1{
text-align: center;
color:white;
font-weight: normal;
}
 & h3 {
       color: white;
       right:0;
       text-align:right;
       position: relative;
       padding: 5px 8px;
       margin: auto;
       font-size: 16px;
   }
`
const IngredientPic = styled.img`
height: 150px;
width: 250px;
margin: auto;
position: relative;
display: flex;
flex-direction: column;
`
const BasketPic = styled.img`
align-items: left;
height: 200px;
width: 200px;
position: relative;
bottom: -40px;
margin: auto;
`
const HintPic = styled.img`
position: relative;
margin: auto;
height: 50px;
width: 50px;
`
const IngredientsCon = styled.div`
    margin: auto;
    width: 80%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
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
   }
  
`
const Submit = styled.button`
background: #E1C9FF;
position: relative;
border-radius: 90px;
height: 100%;
right: 40px;
bottom: -80px;
padding: 10px 40px;
border: none;
box-shadow: 0 0 2px 1px rgba(0,0,0,0.2);
cursor: pointer;
margin: auto;
`
const Footer = styled.div`
  display: flex;
  margin: auto;

`
const HintCon = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100px;
  height: -150px;
  bottom: -90px;
  margin: auto;
  & h3 {
       padding: 5px 8px;
       margin: auto;
       font-size: 14px;
       
   }
`
export default FindGames;

