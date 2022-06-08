import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import FindIcon from '../images/findIngredients2.png';
import GuessIcon from '../images/guessIcon.png'
import QuizIcon from '../images/quizIcon.png'


const ChooseGame = () => {

    const [hover, setHover] = useState("")

  
    const ImgHover =(food) =>{
      setHover(food);
    }
    const ImgnoHover =(drink) =>{
      setHover(drink);
    }
  


  return (
    <QuizCon>
    <QuizMenu to="/game/create/categories/find" 
    
    // onClick={() => {
    //       setModalOpen(true);
    //       console.log(user)
    //     }}
        
        onMouseOver={ImgHover.bind(this,"Find")} onMouseLeave={ImgnoHover.bind(this,"Find")} >
           <CatIcon src={FindIcon} className={hover === "Find" ? "active":""}  />
       
             <h1>Find the Ingredients</h1>
      
    </QuizMenu>
    <QuizMenu to="/game/create/categories/guess"  
    // onClick={() => {
    //       setModalOpen2(true); 
       // }}
         onMouseOver={ImgHover.bind(this,"Guess")} onMouseLeave={ImgnoHover.bind(this,"Guess")} >
           <CatIcon src={GuessIcon} className={hover === "Guess" ? "active":""}  />
        <h1>Guess the Pict
            ure</h1>
    </QuizMenu>
    <QuizMenu to="/game/create/quiz/categories"  // className="openModalBtn"
       // onClick={Quiz} 
       onMouseOver={ImgHover.bind(this,"Quiz")} onMouseLeave={ImgnoHover.bind(this,"Quiz")} >
         <CatIcon src={QuizIcon} className={hover === "Quiz" ? "active":""}  />
        <h1>Quiz</h1>
    </QuizMenu>
    {/* {modalOpen && <Modal setOpenModal={setModalOpen} />}
    {modalOpen2 && <Modal2 setOpenModal2={setModalOpen2} />} */}
  </QuizCon>
  )
}

const QuizCon = styled.div`
display: flex;
flex-wrap: wrap;
height: 70%;
margin: auto;
`
const QuizMenu = styled(Link)`
width: 205px;
height: 205px;
left: 451px;
top: 169px;
margin: auto;
background: linear-gradient(180deg, #ca9bff 0%, #c091ff 100%);

border-radius: 20px;
justify-content: center;
align-items: center;
text-decoration: none;
& h1{
  color: #e6ceec;
  //margin: auto;
  font-size: 18px;
 position: relative;
  text-align: center;
  
 
}
`

const CatIcon = styled.img`
position: relative;
margin: auto ;

height: 220px ;
width: 200px;
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


export default ChooseGame