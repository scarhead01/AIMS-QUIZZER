import React from 'react';
import {Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Account from '../pages/Account';
import Dashboard from '../pages/Dashboard';

import Ranks from '../pages/Ranks';
import Setting from '../pages/Setting';
import Statistics from '../pages/Statistics';
import wave1 from '../images/wave1.svg'
import Game from '../pages/Game';
import Find from '../quiSubPages/Findtheingredients/Find';
import Guess from '../quiSubPages/GuessthePicture/Guess';
import Quiz from '../quiSubPages/QuizGame/Quiz';
const MainCon = styled.div`
grid-area: Main;

height: 100vh;
background: linear-gradient(180deg, #5A00CC 0%, #2B0062 100%);
box-shadow: 4px 5px 4px 4px rgba(0, 0, 0, 0.25);
//border-radius: 35px 0px 0px 35px;
z-index: 10;
`
const Svg2 = styled.div`
align-items: flex-end;
top: 261px;
border-bottom-left-radius: 15px;
z-index: 20;
`
const Svg1 = styled.div`
bottom: 1px;
border-bottom-left-radius: 15px;
z-index: 30;
`

const Main = () => {
  return <MainCon>
       <Routes>
       
       <Route exact path='/' element={<Dashboard />} />
       <Route path="/game" element={<Game />} />
       <Route path="/statistics" element={<Statistics />} />
       <Route path="/rank" element={<Ranks />} />
       <Route path="/account" element={<Account />} />
       <Route path="/setting" element={<Setting />} />
       <Route path="/game/find" element={<Find />} />
       <Route path="/game/guess" element={<Guess />} />
       <Route path="/game/quiz" element={<Quiz />} />
   </Routes>
      
      {/* <Svg1>
        <img src={wave1} alt=""/>
      </Svg1>
      <Svg2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
  <path fill="#FF00F5" fill-opacity=".5" d="M0,64L30,80C60,96,120,128,180,133.3C240,139,300,117,360,128C420,139,480,181,540,170.7C600,160,660,96,720,106.7C780,117,840,203,900,234.7C960,267,1020,245,1080,202.7C1140,160,1200,96,1260,85.3C1320,75,1380,117,1410,138.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
      </Svg2> */}
     
  </MainCon>;
};

export default Main;
