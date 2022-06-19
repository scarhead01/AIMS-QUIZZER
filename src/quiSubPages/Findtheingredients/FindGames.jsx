import React, { useEffect, useMemo, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";
import FindGameCon from './FindGameCon';
import styled from 'styled-components';

const FindGames = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taken, settaken] = useState(false);
  const {cats,scName,setNum} = useParams();
  const [currQuestion, setCurrQuestion] = useState(0);
  const {loading, data:{getRecipes: recipe}=[]} = useQuery(FETCH_RECIPE_QUERY,{
  
    variables: {cats,scName,setNum},
    

 },

 );
 console.log(recipe)

 useEffect(() => {
   
  setTimeout(() => { 
    
   
    settaken(true)
   // Choices();
  } , 300);

   
  }, [])
  const recipes = recipe?.recipes[currQuestion];

  const ringredients = recipes?.rIngredients;
  const wingredients = recipes?.wIngredients;
  const ingredientss = ringredients?.concat(wingredients);
  const ingredients=useMemo(()=>ingredientss?.sort(()=> Math.random() - 0.6),[taken])
  return <>

<FindGameCon recipe={recipe} setCurrQuestions={setCurrQuestion}  loading={loading} ingredients={ingredients}/>

  </>
};
const FETCH_RECIPE_QUERY = gql`
query ( $cats: String!, $scName: String!, $setNum: String!) {
  getRecipes(gameId: "6227003f9ac1104969591b20", cName: $cats, scName: $scName, setNum: $setNum) {

        
          recipes {
            rName
            rImgUrl
            rIngredients {
              iName
              imgUrl
              imgCc
              imgUrlCc
            }
            wIngredients {
              iName
              imgUrl
              imgCc
              imgUrlCc
            }
          
        }
      }
  }

`

export default FindGames;

