import React , {useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../components/Modal';
import Modal2 from '../components/Modal2';
import { AuthContext } from '../context/auth';
import FindIcon from '../images/findIngredients2.png';
import GuessIcon from '../images/guessIcon.png'
import QuizIcon from '../images/quizIcon.png'
const Game = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [hover, setHover] = useState("")
  const navigate=useNavigate();

  const ImgHover =(food) =>{
    setHover(food);
  }
  const ImgnoHover =(drink) =>{
    setHover(drink);
  }

  const Quiz = () => {
    navigate("/game/quiz/quizmenu");
  }
  const { user } = useContext(AuthContext)
  return <QuizCon>
    <QuizMenu to="/game/find"  onClick={() => {
          setModalOpen(true);
          console.log(user)
        }} onMouseOver={ImgHover.bind(this,"Find")} onMouseLeave={ImgnoHover.bind(this,"Find")} >
           <CatIcon src={FindIcon} className={hover === "Find" ? "active":""}  />
       
             <h1>Find the Ingredients</h1>
      
    </QuizMenu>
    <QuizMenu to="/game/guess"  onClick={() => {
          setModalOpen2(true); 
        }} onMouseOver={ImgHover.bind(this,"Guess")} onMouseLeave={ImgnoHover.bind(this,"Guess")} >
           <CatIcon src={GuessIcon} className={hover === "Guess" ? "active":""}  />
        <h1>Guess the Picture</h1>
    </QuizMenu>
    <QuizMenu   className="openModalBtn"
       onClick={Quiz} onMouseOver={ImgHover.bind(this,"Quiz")} onMouseLeave={ImgnoHover.bind(this,"Quiz")} >
         <CatIcon src={QuizIcon} className={hover === "Quiz" ? "active":""}  />
        <h1>Quiz</h1>
    </QuizMenu>
    {modalOpen && <Modal setOpenModal={setModalOpen} />}
    {modalOpen2 && <Modal2 setOpenModal2={setModalOpen2} />}
  </QuizCon>;
};

const QuizCon = styled.div`
display: flex;
flex-wrap: wrap;
height: 73%;
margin: auto;
@media screen and ( max-width:468px) {
   height:85% ;
  }
`
const QuizMenu = styled.div`
width: 205px;

height: 205px;

margin: 1rem auto;
background: linear-gradient(180deg, #ca9bff 0%, #c091ff 100%);

border-radius: 20px;
justify-content: center;
align-items: center;
text-decoration: none;
@media screen and ( max-width:468px) {
   width:170px;
   height: 170px;
   & h1{
  color: #e6ceec;
  margin: auto;
  font-size: 15px;
 position: relative;
  text-align: center;
  
 
}
}
@media screen and ( min-width:468px) and ( max-width:668px){
  margin: 1.7rem auto;
  width:205px;
}
@media screen and ( min-width:668px) and ( max-width:868px){
   width:205px;
   margin: 1.7rem auto;
}
@media screen and ( min-width:868px) and ( max-width:1268px){
   width: 205px;
   margin: 2rem auto;
}
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

height:100%;
width:100%;
@media screen and ( max-width:468px) {
   width:170px;
   height: 170px;
}
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

export default Game;
