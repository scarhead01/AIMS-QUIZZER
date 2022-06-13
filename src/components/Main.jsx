import React, { useContext, useState } from 'react';
import {Navigate, Route, Routes, useNavigate } from 'react-router-dom';
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
import FindMenus from '../quiSubPages/Findtheingredients/FindMenus';
import GuessMenus from '../quiSubPages/GuessthePicture/GuessMenus';
import QuizMenus from '../quiSubPages/QuizGame/QuizMenus';
import FindGames from '../quiSubPages/Findtheingredients/FindGames';
import FindGamesHard from '../quiSubPages/Findtheingredients/FindGamesHard';
import GuessGameEasy from '../quiSubPages/GuessthePicture/GuessGameEasy';
import GuessGameHard from '../quiSubPages/GuessthePicture/GuessGameHard';
import MainQuiz from '../quiSubPages/QuizGame/MainQuiz';
import Login from '../pages/Login';
import Register from '../pages/Register';
import useAuth from '../util/useAuth';
import AuthRoute from '../util/AuthRoute';
import AuthRouteOff from '../util/AuthRouteOff';
import { AuthContext } from '../context/auth';
import ChooseGame from '../createQuiz/ChooseGame';
import AddSubCat from '../createQuiz/AddSubCat';
import ChooseCat from '../createQuiz/ChooseCateFt';
import ChooseCatGu from '../createQuiz/ChooseCateGu';
import AddSet from '../createQuiz/AddSet';
import AddRecipe from '../createQuiz/AddRecipe';
import AddrIngredients from '../createQuiz/AddrIngredient';
import AddCat from '../createQuiz/AddCat';
import AddQuizQuest from '../createQuiz/AddQuizQuest';
import AddwAnswer from '../createQuiz/AddQuizWanswer';
import GuessGames from '../quiSubPages/GuessthePicture/GuessGames';
import AddSubCatGu from '../createQuiz/AddSubCatGu';
import AddSetGu from '../createQuiz/AddSetGu';
import AddGuessQuiz from '../createQuiz/AddGuessQuiz';
import AddGuestQuest from '../createQuiz/AddGuessQuest';
const MainCon = styled.div`
grid-area: Main;
margin: 0px ;
height: 100%;
width:80vw;
padding-top: 3em ;

background: linear-gradient(180deg, #5A00CC 0%, #2B0062 100%);
@media screen and (max-width: 560px) {
  /* For mobile phones: */
  grid-area: Sidebar;
 //visibility:hidden;
 width: 100vw;
 margin:0px ;
 padding-top: 3em ;
}
`

const MainCon1 = styled.div`
grid-area: Main;
margin: 0px ;
height: 100vh;

width:100vw;
background: linear-gradient(180deg, #5A00CC 0%, #2B0062 100%);
`


const Main = () => {
  const {auth} = useAuth();
 const navigate = useNavigate();
   const [signedin,setSignedin] = useState(false)
   const {user, logout} =useContext(AuthContext);
  const main = user ? (<MainCon>
        {/* <AuthCheck> */}
     
        <Routes>
          <Route element ={<AuthRouteOff />}>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/register' element={<Register />}/>
        </Route>
        </Routes>
        
          <Routes>
          <Route element ={<AuthRoute />}>
       <Route exact path='/' element={<Dashboard />} />
       <Route path="/game/" element={<Game />} />
       <Route path="/statistics/" element={<Statistics />} />
       <Route path="/rank/" element={<Ranks />} />
       <Route path="/account/" element={<Account />} />
       <Route path="/setting/" element={<Setting />} />
       <Route path="/game/find/" element={<Find />} />
       <Route path="/game/guess/" element={<Guess />} />
       <Route path="/game/quiz/" element={<Quiz />} />
       <Route path="/game/find/findmenu/:diffs/:cats/" element={<FindMenus />} />
       <Route path="/game/guess/guessmenu/:diffs/:cats/" element={<GuessMenus />} />
       {/* <Route path="/game/find/findmenu/Hard" element={<FindMenus />} /> */}
       <Route path="/game/guess/guessmenu/" element={<GuessMenus />} />
       <Route path="/game/quiz/quizmenu/" element={<QuizMenus />} />
       <Route path="/game/find/findmenu/Easy/:cats/findgames/:scName/:setNum/" element={<FindGames />} />
       <Route path="/game/find/findmenu/Hard/:cats/findgames/" element={<FindGamesHard />} />
       <Route path="/game/guess/guessmenu/:diffs/:cats/guessgame/" element={<GuessGameEasy />} />
       <Route path="/game/guess/guessmenu/:diffs/:cats/guessgames/:scName/:setNum/" element={<GuessGameEasy/>} />
       <Route path="/game/guess/easy" element={<GuessGameEasy />} />
       <Route path="/game/guess/guessmenu/Hard/:cats/guessgame/" element={<GuessGameHard />} />
       <Route path="/game/quiz/quizmenu/:cats/q" element={<MainQuiz />} />
 
       <Route path="/game/create" element={<ChooseGame />} />
       <Route path="/game/create/categories/find/" element={<ChooseCat />} />
       <Route path="/game/create/categories/guess/" element={<ChooseCatGu />} />
       <Route path="/game/create/:games/categories/q" element={<AddCat />} />
       <Route path="/game/create/:games/:cats/q" element={<AddQuizQuest />} />
       <Route path="/game/create/:games/:cats/:question/q" element={<AddwAnswer />} />
       <Route path="/game/create/:games/:cats/f" element={<AddSubCat />} />
       <Route path="/game/create/:games/:cats/g" element={<AddSubCatGu />} />
       <Route path="/game/create/:games/:cats/:subCats/f" element={<AddSet />} />
       <Route path="/game/create/:games/:cats/:subCats/g" element={<AddSetGu />} />
       <Route path="/game/create/:games/:cats/:scName/:setNum/f" element={<AddRecipe />} />
       <Route path="/game/create/:games/:cats/:scName/:setNum/g" element={<AddGuessQuiz />} />
       <Route path="/game/create/:games/:cats/:scName/:setNum/:rName/f" element={<AddrIngredients />} />
       <Route path="/game/create/:games/:cats/:scName/:setNum/:gName/g" element={<AddGuestQuest />} />

       </Route> 
 
   </Routes>
   {/* </AuthCheck> */}
 {/* <Routes>
    <Route path='*' element={<Navigate to={signedin ? '/':'login'}/>}/>
</Routes> */}
      
      {/* <Svg1>
        <img src={wave1} alt=""/>
      </Svg1>
      <Svg2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
  <path fill="#FF00F5" fill-opacity=".5" d="M0,64L30,80C60,96,120,128,180,133.3C240,139,300,117,360,128C420,139,480,181,540,170.7C600,160,660,96,720,106.7C780,117,840,203,900,234.7C960,267,1020,245,1080,202.7C1140,160,1200,96,1260,85.3C1320,75,1380,117,1410,138.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
      </Svg2> */}
     
  </MainCon>):(
<MainCon1 >

<Routes>
    
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/register' element={<Register />}/>
       
        </Routes>
        
        <Routes>
        <Route element ={<AuthRoute />}>
        <Route exact path='/' element={<Dashboard />} />
       <Route path="/game" element={<Game />} />
       <Route path="/statistics" element={<Statistics />} />
       <Route path="/rank" element={<Ranks />} />
       <Route path="/account" element={<Account />} />
       <Route path="/setting" element={<Setting />} />
       <Route path="/game/find" element={<Find />} />
       <Route path="/game/guess" element={<Guess />} />
       <Route path="/game/quiz" element={<Quiz />} />
       <Route path="/game/find/findmenu/:diffs/:cats" element={<FindMenus />} />
       <Route path="/game/guess/guessmenu/:diffs/:cats" element={<GuessMenus />} />
       {/* <Route path="/game/find/findmenu/Hard" element={<FindMenus />} /> */}
       <Route path="/game/guess/guessmenu" element={<GuessMenus />} />
       <Route path="/game/quiz/quizmenu" element={<QuizMenus />} />
       <Route path="/game/find/findmenu/Easy/:cats/findgames/:scName/:setNum" element={<FindGames />} />
       <Route path="/game/find/findmenu/Hard/:cats/findgames" element={<FindGamesHard />} />
       <Route path="/game/guess/guessmenu/Easy/:cats/guessgame" element={<GuessGameEasy />} />
       <Route path="/game/find/findmenu/Easy/:cats/findgames/:scName/:setNum" element={<GuessGames/>} />
       <Route path="/game/guess/easy" element={<GuessGameEasy />} />
       <Route path="/game/guess/guessmenu/Hard/:cats/guessgame" element={<GuessGameHard />} />
       <Route path="/game/quiz/quizmenu/quiz" element={<MainQuiz />} />
 
       <Route path="/game/create" element={<ChooseGame />} />
       <Route path="/game/create/categories/find" element={<ChooseCat />} />
       <Route path="/game/create/categories/guess" element={<ChooseCatGu />} />
       <Route path="/game/create/:games/categories" element={<AddCat />} />
       <Route path="/game/create/:games/:cats" element={<AddQuizQuest />} />
       <Route path="/game/create/:games/:cats/:question" element={<AddwAnswer />} />
       <Route path="/game/create/:games/:cats/" element={<AddSubCat />} />
       <Route path="/game/create/:games/:cats/g" element={<AddSubCatGu />} />
       <Route path="/game/create/:games/:cats/:subCats" element={<AddSet />} />
       <Route path="/game/create/:games/:cats/:subCats/g" element={<AddSetGu />} />
       <Route path="/game/create/:games/:cats/:scName/:setNum" element={<AddRecipe />} />
       <Route path="/game/create/:games/:cats/:scName/:setNum/g" element={<AddGuessQuiz />} />
       <Route path="/game/create/:games/:cats/:scName/:setNum/:rName" element={<AddrIngredients />} />
       <Route path="/game/create/:games/:cats/:scName/:setNum/:rName/g" element={<AddGuestQuest />} />
       
       </Route>
 
   </Routes>

</MainCon1>
  )
  return main;
};

export default Main;
