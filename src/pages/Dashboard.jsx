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
          {/* <Profilepic src={loginData? loginData.picture:kazuha}/>
  
          <ProfileName>{loginData? loginData.name: "Kazuha"}
              <h5>{loginData? loginData.email: "@kkazuha"}</h5>
              <h5 className='course'>Hospitality Management</h5>
              <h5 className='section'>BSHM-32A1</h5>
          </ProfileName>
          <Profilestat>
              <h6>Stats</h6><Icon><IoStatsChartSharp /></Icon>
              <h6 className='level'>Level</h6>
              <h6 className='levelNum'>10</h6>
              <h6 className='points'>Points</h6>
              <h6 className='pointsNum'>210<span>pts</span></h6>
              <h6 className='completed'>Completed</h6>
          </Profilestat>
          <ProfileRank>
              <h6>Ranks</h6>
              <h6 className='course'>Course Rank</h6><Icon className = "rank"><BiMedal /></Icon>
              <h6 className='courseNum'>1<span>st</span></h6>
              <h6 className='section'>Section Rank</h6>
              <h6 className='sectionNum'>1<span>st</span></h6>
          </ProfileRank> */}

        <Con>
                <div class="div1"> 
                <Profilepic src={loginData? loginData.picture:kazuha}/>
                </div>
                <div class="div2"> 
               {loginData? loginData.name: "Kazuha"}
              <h5>{loginData? loginData.email: "@kkazuha"}</h5>
              <h5 className='course'>Hospitality Management</h5>
              <h5 className='section'>BSHM-32A1</h5>
              
                </div>
                <div class="div3"> 
                <div class="p1"> 
                
                <h6>Stats</h6>
                </div>
                <div class="p2"> 
                <h6 className='level'>Level</h6>
                
                </div>
                <div class="p3"> 
                 <h6 className='levelNum'>10</h6>
                
                </div>

                </div>
                <div class="div4"> 

                <div class="p1"> 
                
              <h6 className='course'> Rank</h6>
                </div>
                <div class="p2"> 
                <h6>Course Rank</h6>
                
                </div>
                <div class="p3"> 
                
              <h6 className='courseNum'>1<span>st</span></h6>
                </div>

                </div>
                <div class="div5"> 
                <div class="p1"> 
                <Icon><IoStatsChartSharp /></Icon>
                </div>
                <div class="p2"> 
                
                <h6 className='points'>Points</h6>
                </div>
                <div class="p3"> 
                
              <h6 className='pointsNum'>210<span>pts</span></h6>
                </div>

             
                </div>
                <div class="div6"> 
                <div class="p1"> 
                <Icon className = "rank"><BiMedal /></Icon>
                </div>
                <div class="p2"> 
                
                <h6 className='section'>Section Rank</h6>
                </div>
                <div class="p3"> 
              <h6 className='sectionNum'>1<span>st</span></h6>
                
                </div>

                </div>
                
                <div class="div7">
                <div class="p1"> 
                    <h6 className='completed'>Completed</h6> </div>
                
                </div>
                <div class="p2"> 
                
                </div>
                <div class="p3"> 
                
                </div>
                <div class="div8"> </div>
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
overflow-y: auto;
`
const Con = styled.div`
display: grid;
flex-wrap:wrap ;
height:20em;
grid-template-columns: 2fr repeat(3, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 1em;
grid-row-gap: 0px;
font-weight: 500;
text-align:center ;
font-size: 15px;
padding:1em ;
color: #ccc1cf;
 & .p1 { 
    grid-area: 1 / 1 / 2 / 2; 
    position: relative;
    font-size: 20px;
}
  & .p2 { 
      grid-area: 2 / 1 / 3 / 2;
      position: relative;
      top: -1.5em;
     
    }
   & .p3 { 
       grid-area: 3 / 1 / 4 / 2;
       position: relative;
       top: -2.8em;
       font-size: 28px;
    }
& .div1 {
     grid-area: 1 / 1 / 3 / 2;
    // height:1em ;
    }
& .div2 { grid-area: 3 / 1 / 5 / 2; }
& .div3 { 
    grid-area: 1 / 2 / 3 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .3fr .5fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
   
}
& .div4 {
     grid-area: 3 / 2 / 5 / 3;
     display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .3fr .5fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    }
& .div5 {
     grid-area: 1 / 3 / 3 / 4;
     display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .3fr .5fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    & .p2 { 
      grid-area: 2 / 1 / 3 / 2;
      position: relative;
      top: 1.55em;
     
    }
    & .p3 { 
       grid-area: 3 / 1 / 4 / 2;
       position: relative;
       top: -1.15em;
    }
}
& .div6 { 
    grid-area: 3 / 3 / 5 / 4;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .3fr .5fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    & .p2 { 
      grid-area: 2 / 1 / 3 / 2;
      position: relative;
      top: 1.55em;
     
    }
    & .p3 { 
       grid-area: 3 / 1 / 4 / 2;
       position: relative;
       top: -1.15em;
    }
}
& .div7 { grid-area: 1 / 4 / 3 / 5;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .3fr .5fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}
& .div8 { grid-area: 3 / 4 / 5 / 5; }
`

const StatCon = styled.div`
position: relative;
margin:auto ;
width:60% ;
max-height: 100%;
padding: 1em;
background: rgba(220, 198, 239, 0.32);
border-radius: 10px;
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
// const ProfileName = styled.div`
// margin-left: 40px ;
// font-size: 20px;
// position: absolute;
// left: 170px;
// top: 70px;
// font-weight: 600;
// color: #f5d4fd;
// & h5{
//     margin-top: 5px;
//     font-weight: 500;
//     font-size: 12px;
//     color: #ccc1cf;
//     &.course{
//         font-size: 16px;
//         font-weight: 400;
//         position: absolute;
//         color: #f5d4fd;
//         left: -140px;
//         top: 100px;
//     }
//     &.section{
//         font-size: 16px;
//         font-weight: 600;
//         position: absolute;
//         color: #f5d4fd;
//         left: -100px;
//         top: 130px;
//     }
// }
// `
// const Profilestat = styled.div`
// position: relative;
// top: -80px;
// color: #f5d4fd;
// left:330px ;
// font-size: 30px;
// letter-spacing: .5px;
// & h6{
//     &.level{
//         position: relative;
//         top: -190px;
//         color: #f5d4fd;
      
//         font-size: 10px;
//         font-weight: 300;
//         letter-spacing: .5px;
//     }
//     &.levelNum{
//         position: relative;
//         top: -245px;
//         color: #f5d4fd;
      
//         font-size: 28px;
//         font-weight: 600;
//         letter-spacing: .5px;
    
//     }
//     &.points{
//         position: relative;
//         top: -365px;
//         color: #f5d4fd;
//         left: 110px;
//         font-size: 10px;
//         font-weight: 300;
//         letter-spacing: .5px;
//     }
//     &.pointsNum{
//         position: relative;
//         top: -420px;
//         color: #f5d4fd;
//         left: 100px;
//         font-size: 28px;
//         font-weight: 600;
//         letter-spacing: .5px;
//         & span{
//             font-size: 15px;
//         }
//     }
//     &.completed{
//         position: relative;
//         top: -540px;
//         color: #f5d4fd;
//         left: 240px;
//         font-size: 10px;
//         font-weight: 300;
//         letter-spacing: .5px;
//     }
// }
// `
// const ProfileRank = styled.div`
// position: relative;
// top: -570px;
// color: #f5d4fd;
// left: 330px;
// font-size: 30px;
// letter-spacing: .5px;
// width: 100%;
// & h6{
//     &.course{
//         position: relative;
//         top: 0px;
//         color: #f5d4fd;
      
//         font-size: 10px;
//         font-weight: 300;
//         letter-spacing: .5px;
//     }
//     &.courseNum{
//         position: relative;
//         top: -105px;
//         color: #f5d4fd;
//         left: 20px;
//         font-size: 28px;
//         font-weight: 600;
//         letter-spacing: .5px;
//         & span{
//             font-size: 15px;
//         }
//     }
//     &.section{
//         position: relative;
//         top: -235px;
//         color: #f5d4fd;
//         left: 110px;
//         font-size: 10px;
//         font-weight: 300;
//         letter-spacing: .5px;
//     }
//     &.sectionNum{
//         position: relative;
//         top: -279px;
//         color: #f5d4fd;
//         left: 130px;
//         font-size: 28px;
//         font-weight: 600;
//         letter-spacing: .5px;
//         & span{
//             font-size: 15px;
//         }
//     }
// }
// `


export default Dashboard;