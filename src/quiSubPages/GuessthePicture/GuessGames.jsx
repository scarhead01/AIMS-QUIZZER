import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";
import GuessGameEasy from './GuessGameEasy';

const GuessGames = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const {cats,scName,setNum} = useParams();

  const {loading, data:{getGuessQuizzes: guess}=[]} = useQuery(FETCH_GQUEST_QUERY,{
    variables: {cats,scName,setNum},
 },

 );
 console.log(guess)


  return <>
   
<GuessGameEasy guess={guess}  />
      
  </>
};

const FETCH_GQUEST_QUERY = gql`
query ( $cats: String!, $scName: String!, $setNum: String!) {
  getGuessQuizzes(gameId: "629d6ece913e0070d05a1d41", cName: $cats, scName: $scName, setNum: $setNum) {

    guessQuiz {
      gName
      gChoices {
        chName
        imgUrlCc
        imgCc
        imgUrl
      }
      wChoices {
        chName
        imgUrl
        imgCc
        imgUrlCc
      }
      gImgUrl
      imgCc
      gUrl
    }
  
      }
  }

`

export default GuessGames;

