import React from 'react'
import styled from 'styled-components';

const QuizChoices = [
    {id:1,label:'Manager'},
    {id:2,label:'Chef'},
    {id:3,label:'Receptionist'},
    {id:3,label:'Housekeeping',},
  ];

const MainQuiz = () => {
  return <MainQuizCon>
    <h3>Correct Answer: 1</h3>
    <h1>Question 1</h1>
    <h1>Who is responsible in managing calls in the hotel? </h1>
    {QuizChoices.map(menu=>
        <QuizList key={menu.id}>
                   <h1>{menu.label}</h1>
                   </QuizList> 
    
    )}
             <Submit>Submit</Submit>     
</MainQuizCon> 
   

}
const MainQuizCon = styled.div`
    margin: auto;
width: 100%;
font-size: 12px;
font-family: halant;
& h1{
margin-top: 20px;
    text-align: center;
color:white;
font-weight: normal;
}
 & h3 {
    color: #ffffff;
       right:0;
       text-align:right;
       position: relative;
       padding: 5px 8px;
       margin-top: 20px;
       font-size: 16px;
   }
`
const QuizList = styled.button`
     color: white;
     display: flex;
     flex-direction: column;
     justify-content: center;
    align-items: center;
    text-align: center;
    width: 400px;
font-size: 18px;
margin: auto;
margin-top: 40px;
border:none;
background: linear-gradient(152.45deg, rgba(205, 184, 223, 0.46) 7.59%, rgba(201, 195, 206, 0.1932) 55.9%, rgba(204, 187, 218, 0.46) 103.69%);
border-radius: 7px;
position: relative;
cursor: pointer;
   & h1 {
       position: relative;
       padding: 10px 10px;
       margin: auto;
       font-size: 18px;
   }
`
const Submit = styled.button`
background: #E1C9FF;
position: relative;
display: block;
border-radius: 90px;
height: 100%;
bottom: -80px;
padding: 10px 40px;
border: none;
box-shadow: 0 0 2px 1px rgba(0,0,0,0.2);
cursor: pointer;
align-items: center;
justify-content: center;
margin: auto;
margin-top: -30px;
`
export default MainQuiz