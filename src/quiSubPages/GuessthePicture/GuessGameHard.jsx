import React, { useState } from 'react';
import styled from 'styled-components';
import serving from '../../images/serving.jpg';
import fork from '../../images/fork.jpg';
import knife from '../../images/knife.jpg';
import dinnerspoon from '../../images/dinnerspoon.jpg';
import hint from '../../images/hint.png';
import GuessHintPopup from '../../components/GuessHintPopup';




const GuessChoices = [
    {id:1,label:'fork',img:fork},
    {id:2,label:'dinnerspoon',img:dinnerspoon},
    {id:3,label:'serving',img:serving},
    {id:4,label:'knife',img:knife},
  ];

const GuessGameHard = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [select,setSelected] = useState("");

  const Selected = (menuId) => {
    setSelected(menuId);
    console.log(menuId);

  }

  return <GuessGameEasyCon>

<h2>Difficulty: HARD</h2>
<h2>Correct Answer: 1</h2>
<h1>Guess the Food 1</h1>
<h1>Fork</h1>
<ChoicesCon>
      {GuessChoices.map(menu=>
               <ChoiceList  key={menu.id}>
                  <GuessPic className ={select === menu.id ?"active":""} onClick={Selected.bind(this,menu.id)} src = {menu.img}/>
                   </ChoiceList> 
                  )} 
                  </ChoicesCon>
          <Submit>Submit</Submit>
                  {modalOpen1 && <GuessHintPopup setOpenModal1={setModalOpen1} />}
  </GuessGameEasyCon>

};

const GuessGameEasyCon = styled.div`
margin: auto;
justify-content: center;
align-items: center;
height: 100%;;
width: 100%;
font-size: 12px;
font-family: halant;
& h1{
text-align: center;
color:white;
font-weight: normal;
margin: 10px 10px;


}
 & h2 {
       color: white;
       right:0;
       text-align:right;
       position: relative;
       padding: 5px 8px;
       margin: auto;
       font-size: 16px;
   }
`
const GuessPic = styled.img`
    height: 170px;
    width: 180px;
    display: flex;
    &.active {
       border: 3px solid #fa69e7;
      height: 98%;
      width: 175px;
   }

`
const ChoicesCon = styled.div`
    margin: auto;
    width: 390px;
    height:400px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    
`
const ChoiceList = styled.button`
width: 170px;
height:170px;
color: white;
font-size: 18px;
margin: 10px;
border:none;
background: transparent;
border-radius: 10px;
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
display: block;
border-radius: 90px;
padding: 10px 40px;
border: none;
box-shadow: 0 0 2px 1px rgba(0,0,0,0.2);
cursor: pointer;
align-items: center;
justify-content: center;
margin: auto;
margin-top: 10px;

`

export default GuessGameHard