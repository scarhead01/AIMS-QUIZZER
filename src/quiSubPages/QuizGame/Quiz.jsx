import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styled as style1} from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { CircularProgress } from '@mui/material';

import CheckIcon from "@mui/icons-material/Check";
import ImageModal from '../../components/ImageModal';
import jwtDecode from 'jwt-decode';


const Quiz = ({cate,cat,diff}) => {
  const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));

const userId = decodedToken?.id

  console.log(userId)
  const {id,cName,imgUrl,imgCc,imgUrlCc} = cate;
  const set = cate.quizQuestions
  console.log(cate)
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const [score, setscore] = useState(0)
  const progress = 70;
  const totalItems = cate?.quizQuestions?.length
 const totalItem = parseInt(totalItems) * 3;
 console.log(totalItem)


  const [active, setActive] = useState("")
  const [modalOpen, setModalOpen] = useState(false);
  const [hover, setHover] = useState(false)
useEffect(() => {
  let total =0
  for(let i=0; i<set.length; i++){
         
    const scores =cate[i]?.userScore?.find(o=>o.userId===userId)?.score;
   // const totalItem =cate.sets[i]?.userScore?.find(o=>o.userId===userId)?.score;
     const score = scores===undefined? 0 :parseInt(scores)
    total = total + score
   
    }
    setscore(total)
}, [])

  const percentages = score / totalItem
  const percentage= percentages * 100
  console.log(percentage)

  const Difficulty = (diff) => {
    setActive(diff);
    if(active !=""){
      setActive("")
    }
    console.log(diff);

  }
  const ImgHover =() =>{
    setHover(true);
  }
  const ImgnoHover =() =>{
    setHover(false);
  }
   return  (<>
    <SubHeader onClick={Difficulty.bind(this,cName)}>
      <SubImgCon>
          {/* <SubImg src={imgUrl} onMouseOver={ImgHover} onMouseLeave={ImgnoHover} onDoubleClick={() => {
          setModalOpen(true);}}/> */}
         <Cc className={hover ? "active":""}  href={imgUrlCc} > cc: {imgCc}  </Cc>
        <Headers>

          <h1> {cName}</h1>
        </Headers>
          <FabCon>
         <Fabs>
       
          {success ? <CheckIcon /> :   
          
        <h2> {Math.trunc(percentage)}%</h2>
        }
      
         <CirCon>

          <CircularProgress
            size={68}
            sx={{
              color: "#f700ff",
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1
            }}
            variant="determinate"
            value={Math.trunc(percentage)}
          />
         </CirCon>
        </Fabs>
        <h3>progress</h3>
        </FabCon>
       
      </SubImgCon>
     </SubHeader>
     {/* <Set>
    {  active===scName && set.map((subs => (
    <MenuList className={active === scName ? "active":""}  key={subs.id} to={`/game/guess/guessmenu/${diff}/${cat}/guessgames/${scName}/${subs.setNum}`}>
       
    <h1>Set: {subs.setNum}</h1> <span>  Score: {subs.userScore?.find(o=>o.userId===userId)?.score ? subs.userScore?.find(o=>o.userId===userId)?.score: `0`  }/
    {subs?.recipes?.length}</span>
    </MenuList> 

    
    ))) }
    </Set> */}
   {modalOpen && <ImageModal setOpenModal={setModalOpen} img={{imgUrl,imgCc,imgUrlCc}}  />}
  </>
   )
   ;
};

const CirCon = styled.div`
position:relative;

`


const Headers = styled.div`
display:flex ;
//	flex-direction: column-reverse;
width:70% ;
`
const Cc = styled.a`
visibility: hidden;

position: absolute;
/* bottom: -80px ;
left: -160px ; */

list-style:none ;
height: 15px ;
outline:none ;
text-decoration:none;
padding:5px ;
background-color: #0f050f8d;
color:#fccbf9 ;
&.active{
  visibility: visible ;
}
`
const FabCon = styled.div`
height: 120px ;
width: 40px ;
position: relative;
margin: auto ;
top:12px;
display: block ;
`
const Fabs = styled.div`
position: relative ;
margin: auto ;
justify-content:center ;
align-items:center;
font-size: 10px ;
background-color: transparent;
& h2{
  text-align:center ;
  bottom: -20px;
  font-size: 16px ;
  top: 20px;
  color: white;
  position: relative;
  margin: auto;
  left: 10px ;
}
`
const BorderLinearProgress = style1(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const SubHeader = styled.button`
border-radius: 10px ;
outline: none;
//margin: 0px;
display: inline-flex;
border-style:  none;
height: 130px;
width: 400px ;
cursor: pointer;
@media screen and ( max-width:408px){
   width: 300px ;
  }
margin:auto ;
margin-bottom: 10px;
background: linear-gradient(180deg, rgba(156, 132, 194, 0.68) 0%, rgba(201, 100, 249, 0.74) 100%);
`
const SubImgCon = styled.div`
height: 100%;
display: flex ;
width:100% ;
padding: 0px;
margin: 0px;
& h1{
  position: relative ;
  margin:auto ;
  font-size:18px ;
  color: #fddafd;

}
& h3{
  position: relative ;
  bottom: -37px ;
  color: #ffe4ff;
  font-size:10px ;
  left:5px;

}
`

const SubImg = styled.img`
height:100% ;
width: 160px;
position: relative ;
margin: 0px;
border-top-left-radius: 10px ;
border-bottom-left-radius: 10px;
border-right: solid 2px #deb2e4;
`
export default Quiz;
