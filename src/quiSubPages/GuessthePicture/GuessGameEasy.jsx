import React, { useState } from 'react';
import styled from 'styled-components';
import bulalo from '../../images/bulalo.jpg';
import hint from '../../images/hint.png';
import GuessHintPopup from '../../components/GuessHintPopup';




const GuessChoices = [
    {id:1,label:'Sinigang'},
    {id:2,label:'Bistek'},
    {id:3,label:'Bulalo'},
    {id:3,label:'Nilaga',},
  ];

const GuessGameEasy = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  return <GuessGameEasyCon>
<h2>Difficulty: EASY</h2>
<h2>Correct Answer: 1</h2>
<h1>Guess the Food 1</h1>
<GuessPic src = {bulalo}/>
<ChoicesCon>
      {GuessChoices.map(menu=>
               <ChoiceList key={menu.id}>
                   <h1>{menu.label}</h1>
                   
                   </ChoiceList> 
                  )} 
                  </ChoicesCon>
                  <Footer>
                  <HintCon>
                  <HintPic src={hint}onClick={() => {
          setModalOpen1(true);}}/>
          <h3>3 Hints Left</h3>
          </HintCon>
          <Submit>Submit</Submit>
                  </Footer>
                  {modalOpen1 && <GuessHintPopup setOpenModal1={setModalOpen1} />}
  </GuessGameEasyCon>

};

const GuessGameEasyCon = styled.div`
    margin: auto;
width: 100%;
font-size: 12px;
font-family: halant;
& h1{
text-align: center;
color:white;
font-weight: normal;
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
    height: 190px;
    width: 390px;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;

`
const ChoicesCon = styled.div`
    margin: auto;
    width: 390px;
    height: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    
`
const ChoiceList = styled.button`
width: 170px;
color: white;
font-size: 18px;
margin: 10px;
border:none;
background: linear-gradient(152.45deg, rgba(205, 184, 223, 0.46) 7.59%, rgba(201, 195, 206, 0.1932) 55.9%, rgba(204, 187, 218, 0.46) 103.69%);
border-radius: 10px;
margin: 10px;

cursor: pointer;
   & h1 {
       position: relative;
       padding: 5px 8px;
       margin: auto;
       font-size: 18px;
   }
`
const HintPic = styled.img`
position: relative;
margin: auto;
height: 50px;
width: 50px;
`
const HintCon = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100px;
  height: -150px;
  top: 10px;
  margin: auto;
  & h3 {
       padding: 5px 8px;
       margin: auto;
       font-size: 14px;
       
   }
`
const Footer = styled.div`
    
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
margin-top: 120px;
`

export default GuessGameEasy