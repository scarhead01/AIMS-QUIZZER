import React from 'react';
import Active from '../components/StatsGraph/Active';
import styled from "styled-components";
import TakeScore from '../components/StatsGraph/TakeScore';
import PieGames from '../components/StatsGraph/PieGames';
import PerTake from '../components/StatsGraph/PerTake';
const Statistics = () => {
  return <div>
      <StatCon>
        <StatCard>
        <Active />
      
        </StatCard>
        <StatCard>
        <PerTake />
      
        </StatCard>
        <StatCard>
        <TakeScore />
      
        </StatCard>
        <StatCard1>
        <PieGames />
      
        </StatCard1>
      </StatCon>

  </div>;
};

const StatCon = styled.div`
display: flex;
margin:auto;
flex-wrap: wrap;
padding-top: 3rem ;
height: 100%;
width: 100%;
justify-content: center ;
align-items: center ;
`
const StatCard = styled.div`
place-self: center ;
position: relative;
display:block ;
margin: 10px auto ;
width: 450px ;
justify-content: center ;
align-items: center ;
background-color:#c755f132;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.15 );
backdrop-filter: blur( 9px );
-webkit-backdrop-filter: blur( 9px );
border-radius: 10px;
border: 4px solid rgba( 255, 255, 255, 0.38 );
`
const StatCard1 = styled.div`
place-self: center ;
position: relative;
display:block ;
margin: 10px auto ;
width: 450px ;
height:300px ;
justify-content: center ;
align-items: center ;
background-color:#c755f132;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.15 );
backdrop-filter: blur( 9px );
-webkit-backdrop-filter: blur( 9px );
border-radius: 10px;
border: 4px solid rgba( 255, 255, 255, 0.38 );
`

export default Statistics;
