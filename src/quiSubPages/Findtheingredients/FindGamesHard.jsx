import React, { useState } from 'react';
import styled from 'styled-components';
import basket from '../../images/basket.png';


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

const FindGamesHard = () => {
    const [modalOpen, setModalOpen] = useState(false);
  return <FindGamesHardCon>
  <h1>Find The Ingredients </h1>
  <h2> Bistek</h2>
  <IngredientsCon>
      {IngredientItems.map(menu=>
               <IngredientList key={menu.id} to='/game/find/findmenu/findgames/'>
                   <h1>{menu.label}</h1>
                   </IngredientList> 
                  
                  )} 
                  </IngredientsCon>
                  <BasketPic src={basket}onClick={() => {
          setModalOpen(true);}} />
            <Submit>Submit</Submit>
  </FindGamesHardCon>;
  

};
const FindGamesHardCon = styled.div`
    margin: auto;
width: 100%;
font-size: 12px;
font-family: halant;
& h1{
text-align: center;
color:white;
font-weight: normal;
}
& h2{
    text-align: center;
    color: #f5c5f7;
    font-weight: 600px;
    font-size: 22px;
}
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
const BasketPic = styled.img`
align-items: left;
height: 200px;
width: 200px;
position: absolute;
bottom: 15px;
left: 230px;
`

const Submit = styled.button`
background: #E1C9FF;
border-radius: 90px;
position: absolute;
right: 40px;
bottom: 50px;
padding: 10px 40px;
border: none;
box-shadow: 0 0 2px 1px rgba(0,0,0,0.2);
cursor: pointer;
`

export default FindGamesHard;
