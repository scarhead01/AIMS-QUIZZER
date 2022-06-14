import React, { useState } from 'react';
import styled from 'styled-components';
import kazuha from '../images/kazuha.jpg';
import {IoStatsChartSharp} from "react-icons/io5";
import {BiMedal} from "react-icons/bi";
import Statistics from './Statistics';

const Dashboard = () => {

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
          ? JSON.parse(localStorage.getItem('loginData'))
          : null
      );

    return <DashboardCon>
        <StatCon>
          

        <Con className='card'>
        <Profilepic className='img' src={loginData? loginData.picture:kazuha}/>
        <div class="infos">
      <div class="name">
        <h2> {loginData? loginData.name: "Kazuha"}</h2>
        <h4>{loginData? loginData.email: "@kkazuha"}</h4>
      </div>
      <p class="text">
              <h5 className='course'>Hospitality Management</h5>
              <h5 className='section'>BSHM-32A1</h5>
      </p>
      <ul class="stats">
        <li>
          <h3>15K</h3>
          <h4>Points</h4>
        </li>
        <li>
          <h3>82</h3>
          <h4>Section Rank</h4>
        </li>
        <li>
          <h3>1</h3>
          <h4>Course Rank</h4>
        </li>
      </ul>
      <div class="links">
       
      </div>
    </div>

</Con>


        </StatCon>
       <Statistics/>
    </DashboardCon>;
  };
  

const DashboardCon = styled.div`

display:block ;
justify-content:center ;
align-items:center ;
width:100%;

max-height:100vh;
overflow: auto;
`
const Con = styled.div`
color: #d2c3c3;
width:100%;
& .img {
  max-width: 100%;
  display: block;
}
& ul {
  list-style: none;
}

/* Utilities */
&.card::after,
&.card img {
  border-radius: 50%;
}

&.card,
& .stats {
  display: flex;
}

&.card {
  padding: 1rem ;
  border-radius: 10px;
  //background-color: rgba(255, 255, 255, .5);
 // max-width: 500px;
  //box-shadow: 0 0 30px rgba(0, 0, 0, .15);
  
  position: relative;
  transform-style: preserve-3d;
  overflow: hidden;
}



& .infos {
  margin-left: 1.5rem;
}

& .name {
  margin-bottom: 1rem;
}
& .name h2 {
  font-size: 1.3rem;
}
& .name h4 {
  font-size: .8rem;
  color: #333
}

& .text {
  font-size: .9rem;
  margin-bottom: 1rem;
}

& .stats {
  text-align:center ;
  margin-bottom: 1rem;
}
& .stats li {
  min-width: 5rem;
}
& .stats li h3 {
  font-size: .99rem;
}
& .stats li h4 {
  font-size: .75rem;
}

& .links button {
  font-family: 'Poppins', sans-serif;
  min-width: 120px;
  padding: .5rem;
  border: 1px solid #222;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s linear;
}
& .links .follow,
.links .view:hover {
  background-color: #222;
  color: #FFF;
}
& .links .view,
.links .follow:hover{
  background-color: transparent;
  color: #222;
}

@media screen and (max-width: 450px) {
 &.card {
    display: block;
  }
  & .infos {
    margin-left: 0;
    margin-top: 1.5rem;
  }
  & .links button {
    min-width: 100px;
  }
}

`

const StatCon = styled.div`
position: relative;
margin:auto ;
width:50% ;
max-height: 100%;

background: rgba(220, 198, 239, 0.32);
border-radius: 10px;
@media screen and ( max-width:468px){
   width: 350px;
}
@media screen and ( min-width:468px) and ( max-width:608px){
   width:485px;
}
@media screen and ( min-width:558px) and ( max-width:868px){
   width:500px;
}
@media screen and ( min-width:868px) and ( max-width:1268px){
   width: 700px;
}
`
const TrophyCon = styled.div`
position: relative;

height: 45vh;
flex-wrap: wrap;
margin-top: 50px;
display: flex;
margin-top: 0px;
@media screen and ( max-width:1068px){
   width: 90%;
}
`
const Recent = styled.div`
margin: auto;
width: 300px;
height: 35vh;
margin-top: 40px;
background: linear-gradient(180.5deg, rgba(175, 152, 196, 0.46) 14.35%, rgba(203, 189, 215, 0.246771) 49.8%, rgba(201, 195, 206, 0.1932) 67.53%, rgba(174, 150, 194, 0.233) 101.58%);
border-radius: 10px;
@media screen and ( max-width:1068px){
    height: 35vh;
    width: 200px;
    margin-top: 50px;
}
`
const Trophy = styled.div`
margin: auto;
width: 300px;
height: 35vh;
margin-top: 40px;
background: linear-gradient(180.5deg, rgba(177, 152, 199, 0.46) 14.35%, rgba(203, 189, 215, 0.246771) 49.8%, rgba(201, 195, 206, 0.1932) 67.53%, rgba(173, 153, 190, 0.233) 101.58%);
border-radius: 10px;
@media screen and ( max-width:1068px){
    margin-top: 50px;
    height: 35vh;
    width: 200px;
}
`
const Profilepic = styled.img`
margin-top:2em ;
height: 7em;
width: 7em;
border: 5px solid #CE9DFF;
border-radius: 50%;

`
const Icon = styled.div`
  position  : relative;
  top:.9em ;
  left:-2.5em ;
  font-size: 25px;
  
`


export default Dashboard;