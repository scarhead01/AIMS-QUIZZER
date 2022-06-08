import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";
import FindGameCon from './FindGameCon';
import styled from 'styled-components';

const FindGames = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const {cats,scName,setNum} = useParams();

  const {loading, data:{getRecipes: recipe}=[]} = useQuery(FETCH_RECIPE_QUERY,{
    // onCompleted: refetch,
    // pollInterval:100,
    // refetchQueries: [{ query: FETCH_CATEGORY_QUERY }],
    // pollInterval: 100
    variables: {cats,scName,setNum},
    

 },

 );
 console.log(recipe)


  return <>
   
<FindGameCon recipe={recipe}  />
      
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

