import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../components/Modal';
import Modal2 from '../components/Modal2';

const Game = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  return <QuizCon>
    <QuizMenu to="/game/find"  onClick={() => {
          setModalOpen(true);
        }}>
     <h1>Find the Ingredients</h1>
      
    </QuizMenu>
    <QuizMenu to="/game/guess"  onClick={() => {
          setModalOpen2(true);
        }}>
        <h1>Guess the Picture</h1>
    </QuizMenu>
    <QuizMenu   className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}>
        <h1>Quiz</h1>
    </QuizMenu>
    {modalOpen && <Modal setOpenModal={setModalOpen} />}
    {modalOpen2 && <Modal2 setOpenModal2={setModalOpen2} />}
  </QuizCon>;
};

const QuizCon = styled.div`
display: flex;
flex-wrap: wrap;
height: 70%;
margin: auto;
`
const QuizMenu = styled.div`
width: 205px;
height: 205px;
left: 451px;
top: 169px;
margin: auto;
background: linear-gradient(180.12deg, rgba(210, 0, 244, 0.328) 3.98%, rgba(225, 43, 255, 0.496) 47.12%);
mix-blend-mode: lighten;
border-radius: 20px;
justify-content: center;
align-items: center;
text-decoration: none;
& h1{
  color: #f4c8ff;
  margin: auto;
  font-size: 18px;
 position: relative;
  text-align: center;
  top: 140px;
 
}
`
export default Game;
