import React from 'react';
import styled from 'styled-components';
import kazuha from '../images/kazuha.jpg';


const Dashboard = () => {
    return <DashboardCon>
        <StatCon>
          <Profilepic src={kazuha}/>
  
          <ProfileName> Kazuha
              <h5>@kkazuha</h5>
              <h5 className='course'>Hospitality Management</h5>
              <h5 className='section'>BSHM-32A1</h5>
          </ProfileName>
          <Profilestat>
              <h6>Stats</h6>
              <h6 className='level'>Level</h6>
              <h6 className='levelNum'>10</h6>
              <h6 className='points'>Points</h6>
              <h6 className='pointsNum'>210<span>pts</span></h6>
              <h6 className='completed'>Completed</h6>
          </Profilestat>
          <ProfileRank>
              <h6>Ranks</h6>
              <h6 className='course'>Course Rank</h6>
              <h6 className='courseNum'>1<span>st</span></h6>
              <h6 className='section'>Section Rank</h6>
              <h6 className='sectionNum'>1<span>st</span></h6>
          </ProfileRank>
        </StatCon>
        <TrophyCon>
            <Trophy>
  
            </Trophy>
            <Recent>
  
            </Recent>
        </TrophyCon>
    </DashboardCon>;
  };
  

const DashboardCon = styled.div`
margin: auto;
`
const StatCon = styled.div`
position: relative;
margin: auto;
width: 60%;
height: 47vh;
margin-top: 60px;
background: rgba(220, 198, 239, 0.32);
border-radius: 10px;

`
const TrophyCon = styled.div`
position: relative;
margin: auto;
width: 70%;
height: 35vh;
flex-wrap: wrap;
margin-top: 60px;
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
height: 100px;
width: 100px;
border: 5px solid #CE9DFF;
border-radius: 50%;
margin-top: 30px;
margin-left: 70px;
`
const ProfileName = styled.div`
margin-left: 40px ;
font-size: 20px;
position: absolute;
left: 170px;
top: 70px;
font-weight: 600;
color: #f5d4fd;
& h5{
    margin-top: 5px;
    font-weight: 500;
    font-size: 12px;
    color: #ccc1cf;
    &.course{
        font-size: 16px;
        font-weight: 400;
        position: absolute;
        color: #f5d4fd;
        left: -140px;
        top: 100px;
    }
    &.section{
        font-size: 16px;
        font-weight: 600;
        position: absolute;
        color: #f5d4fd;
        left: -100px;
        top: 130px;
    }
}

`
const Profilestat = styled.div`
position: absolute;
top: -10px;
color: #f5d4fd;
left: 330px;
font-size: 30px;
letter-spacing: .5px;
& h6{
    &.level{
        position: absolute;
        top: 70px;
        color: #f5d4fd;
      
        font-size: 10px;
        font-weight: 300;
        letter-spacing: .5px;
    }
    &.levelNum{
        position: absolute;
        top: 45px;
        color: #f5d4fd;
      
        font-size: 28px;
        font-weight: 600;
        letter-spacing: .5px;
    
    }
    &.points{
        position: absolute;
        top: 70px;
        color: #f5d4fd;
        left: 110px;
        font-size: 10px;
        font-weight: 300;
        letter-spacing: .5px;
    }
    &.pointsNum{
        position: absolute;
        top: 45px;
        color: #f5d4fd;
        left: 100px;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: .5px;
        & span{
            font-size: 15px;
        }
    }
    &.completed{
        position: absolute;
        top: 70px;
        color: #f5d4fd;
        left: 240px;
        font-size: 10px;
        font-weight: 300;
        letter-spacing: .5px;
    }
}
`
const ProfileRank = styled.div`
position: absolute;
top: 120px;
color: #f5d4fd;
left: 330px;
font-size: 30px;
letter-spacing: .5px;
width: 100%;
& h6{
    &.course{
        position: absolute;
        top: 70px;
        color: #f5d4fd;
      
        font-size: 10px;
        font-weight: 300;
        letter-spacing: .5px;
    }
    &.courseNum{
        position: absolute;
        top: 45px;
        color: #f5d4fd;
        left: 20px;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: .5px;
        & span{
            font-size: 15px;
        }
    }
    &.section{
        position: absolute;
        top: 70px;
        color: #f5d4fd;
        left: 110px;
        font-size: 10px;
        font-weight: 300;
        letter-spacing: .5px;
    }
    &.sectionNum{
        position: absolute;
        top: 45px;
        color: #f5d4fd;
        left: 130px;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: .5px;
        & span{
            font-size: 15px;
        }
    }
}
`


export default Dashboard;
