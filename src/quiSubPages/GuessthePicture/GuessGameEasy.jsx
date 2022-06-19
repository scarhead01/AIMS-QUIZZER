import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components';
import bistek from '../../images/bistek.jpg';
import basket from '../../images/basket.png';
import hint from '../../images/hint.png';
import BasketPopup from '../../components/BasketPopup';
import HintPopup from '../../components/HintPopup';
import ImageModal from '../../components/ImageModal';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import gql from "graphql-tag";
import PopChecker2 from '../../components/PopChecker2';

import jwtDecode from 'jwt-decode'

const GuessGameEasy = () => {
    const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [score, setScore] = useState(0)
  const [repeat, setRepeat] = useState([])
  const [selected, setSelected] = useState("")
  const [currQuestion, setCurrQuestion] = useState(0);
 const [correct, setcorrect] = useState("")
 const [imgUrl, setimgUrl] = useState("")
 const [imgCc, setimgCc] = useState("")
 const [imgUrlCc, setimgUrlCc] = useState("")
 const [show, setShow] = useState(false)
 const [taken, settaken] = useState(0)
 const [empty, setempty] = useState(true)
 const [completed, setcompleted] = useState(false)
 const [firstScore, setfirstScore] = useState(0)
const [popCheck, setpopCheck] = useState(false)
 const {cats,scName,setNum} = useParams();
 const [nextQuest, setnextQuest] = useState(false)
const [answer, setanswer] = useState('')
const [weekNum, setweekNum] = useState('')
const [numTaken, setnumTaken] = useState('')
const [totalTakenScore, settotalTakenScore] = useState('')
const [firstTake, setfirstTake] = useState('')
const [latestTake, setlatestTake] = useState('')

const {diffs }=useParams()
const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
const userId = decodedToken?.id
const diff=diffs
const dateObj = new Date();
const months = dateObj.getUTCMonth() + 1; //months from 1-12
const month = months.toString();
const days = dateObj.getUTCDate();
const day = days.toString();
const years = dateObj.getUTCFullYear();
const year = years.toString();
const newdate = year + "/" + month + "/" + day;
console.log(newdate)


 const {loading, data} = useQuery(FETCH_GQUEST_QUERY,{
 
  variables: {cats,scName,setNum},
  

},

);

const { data:datas} = useQuery(FETCH_CATEGORY_QUERY,{
   
  variables: {cats},

},);
const { data:game} = useQuery(FETCH_GAME_QUERY);
const numTakens = datas?.subCategories?.find(o=>o.scName===scName)?.subTaken?.find(o=>o.userId===userId)?.numTaken;
console.log(datas)

const totalTakenScores = datas?.subCategories?.find(o=>o.scName===scName)?.subTaken?.find(o=>o.userId===userId).totalTakenScore;
const firstTaker =  datas?.subCategories?.find(o=>o.scName===scName)?.sets?.find(o=>o.setNum===setNum)?.userScore?.find(o=>o.userId===userId);

const firstTakes=game?.getFtIngredients?.find(o=>o.id==="6227003f9ac1104969591b20")?.takes?.find(o=>o.userId===userId)?.firstTake;
const latestTakes=game?.getFtIngredients?.find(o=>o.id==="6227003f9ac1104969591b20")?.takes?.find(o=>o.userId===userId)?.latestTake;
console.log(firstTakes)


console.log(data)

const finalScores = firstScore;

const finalScore = finalScores?.toString();
 
const gameId = "6227003f9ac1104969591b20"
const [AddSetScore,{error}] = useMutation(ADD_SET_SCORE,{    
  variables:  {cats,scName,setNum,userId,diff,finalScore,newdate},
  refetchQueries: [{ query: FETCH_CATEGORY_QUERY, variables:{cats} }]
})

const [AddGameTaken,] = useMutation(ADD_GAMETAKEN,{    
  variables:  {cats,scName,setNum,userId,diff,finalScore,month,day,year,weekNum},
  refetchQueries: [{ query: FETCH_CATEGORY_QUERY, variables:{cats} }]
})

const [AddSubTaken] = useMutation(ADD_SUBTAKEN,{    
  variables:  {cats,scName,userId,diff,numTaken,totalTakenScore},
  refetchQueries: [{ query: FETCH_CATEGORY_QUERY, variables:{cats} }]
})

const [AddTakes] = useMutation(ADD_TAKES,{    
  variables:  {userId,firstTake,latestTake},
  refetchQueries: [{ query: FETCH_CATEGORY_QUERY, variables:{cats} }]
})

const guess = data

//console.log(recipe)
const guesss = guess?.getGuessQuizzes?.guessQuiz;
//console.log(guesss)
 const guesse = guess?.getGuessQuizzes?.guessQuiz[currQuestion];

 useEffect(() => {
   
  setTimeout(() => { 
    
    if(loading){
    settaken(1)
  } }, 700);

   
 }, [])
 

 const gChoices = guesse?.gChoices;
 const wChoices = guesse?.wChoices;
 const choices = gChoices?.concat(wChoices);


 console.log(gChoices[0]?.chName)
 
  console.log("score: "+ score)
  const ingredients=useMemo(()=>choices?.sort(()=> Math.random() - 0.6),[taken])
 
  // -------CHECK/NEXT FUNCTION--------

  let ans='';

 

  const Next =()=>{

    if(currQuestion<guesss?.length-1 && taken < guesss?.length){
      
         setCurrQuestion(currQuestion+1)
         settaken(taken+1)
         setnextQuest(false)
       }
    else if(taken >= guesss?.length || repeat.length>0){
    
          setCurrQuestion(repeat[0])
          settaken(taken+1)
          setnextQuest(false)
       
     
   
    } else if(repeat?.length<1&&score===guesss?.length){
      setcompleted(true)
    }
    console.log('next question is'+ repeat[0])

   }
  useEffect(() => {
   if(nextQuest===true){

   // selected.splice(0,selected.length)
     Next(currQuestion,taken);
   }
  }, [nextQuest])
 // console.log( "Next Quest?"+nextQuest)
  
 useEffect(() => {
 if(completed===true) {
   console.log(cats+" "+scName+" "+setNum+ " "+finalScore+" "+userId)
 // addSet()

 
 AddSetScore()
 AddTakes()
 AddSubTaken()
 AddTaken()
}
 }, [completed])

 const AddTaken = () =>{
 
  if(days<8){
   
     setweekNum('1');
  }else if(days>7 && days<15){
    
    setweekNum('2');
 }else if(days>14 && days<22){

  setweekNum('3');
  }else if(days>21 && days<29){
  
    setweekNum('4');
  }else if(days>28 && days<32){
   
    setweekNum('5');
  }
if(!numTakens){
setnumTaken('1')
}else if(numTakens){
  setnumTaken(numTakens+1)
}
if(!totalTakenScores){
settotalTakenScore(finalScore)
}else if(totalTakenScores){
  setnumTaken(totalTakenScores+firstScore)
}
if(!firstTaker){
if(!firstTakes){
setfirstTake(firstScore)
}else if(firstTakes){
  setfirstTake(firstTakes+firstScore)
}
}
if(!latestTakes){
setlatestTake(firstScore)
}else if(latestTakes){
  setnumTaken(latestTakes+firstTake)
}
 AddGameTaken();

   
  
 }
 
  const PopCheck = (ans) => {
    setpopCheck(true)
    setanswer(ans)
  }

   const SetScore=(corrects, currScore) =>{
    if(score<guesss?.length){
     if(corrects==="correct"){
       setScore(score+1)
        currScore= currScore+1;
        if(taken <= guesss?.length){
          setfirstScore(firstScore+1)
        }
     }
    }
   
     console.log("completed: "+ completed)
     if(currScore ===guesss?.length){
      setcompleted(true)
     // console.log( "finalScore: " + finalScore)
     
    }
   }


   const Correct = (corrects) => {
      const currScore = score;
    if(corrects==="incorrect"){
     ans='incorrect'
     if(repeat?.includes(currQuestion)){
      for(let i = 0; i < repeat?.length; i++){
       if(repeat[i]===currQuestion){
           repeat?.splice(i, 1); 
       }
      }
      }
     setRepeat([... repeat,currQuestion]);

     SetScore(ans,currScore);
     PopCheck(ans)
   
   }else if(corrects==="correct"){
   ans='correct'
   
  
   SetScore(ans,currScore);
  
   if(repeat?.includes(currQuestion)){
   for(let i = 0; i < repeat?.length; i++){
    if(repeat[i]===currQuestion){
        repeat?.splice(i, 1); 
      
    }
   }
   }
  
    PopCheck(ans)
   }
   
   console.log("ans"+ corrects)
  

    }


    const CorrectAnswer =(arrayName)=>{
      if(selected){
        if(arrayName===selected){
        setcorrect(true)
        for(let i = 0; i < repeat?.length; i++){
          if(repeat[i]===currQuestion){
          
              repeat?.splice(i, 1); 
            
          }
         }
          Correct("correct")
        }else{
            setcorrect(false)
            Correct("incorrect")
        }
     }  
  }

  const onSubmits = () =>{
    const arrayName=gChoices[0]?.chName;
    CorrectAnswer(arrayName);
     console.log("number taken: "+ arrayName)
}
  
const Continue = () => {
AddSetScore()
console.log(cats+" "+scName+" "+setNum+ " "+finalScore+" "+userId)
}

const Return = () => {
  AddSetScore()
}

  // const arrayName = new Array();
  
  // for(let i = 0; i < gChoices?.length; i++){
  //   arrayName.push(gChoices[i]?.gName)
  // }

  // console.log("correct answer: "+ arrayName )
  console.log("retake: "+ repeat )
  // console.log("A ARRAY LENGTH: "+ arrayName.length )
    
  // console.log("S ARRAY LENGTH: "+ selected.length )

  const display = completed? (

    <FindGamesCon>
       Score : {firstScore} out of {guesss?.length}
       <Submit onClick={()=>{Continue()}}> Continue </Submit>
       <Submit onClick={()=>{Return()}}> Return </Submit>
       {error && <pre>Bad: {error.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
      </pre>}
    </FindGamesCon>
  ): (

    <FindGamesCon>
      <h3>Difficulty: {diffs==="Easy"?"Easy":"Hard"}</h3>
     
     {diffs==="Easy" && (
       <>
       <h1>Find the {cats} name</h1>
       <IngredientPic src={guesse?.gImgUrl}/>
       </>
     )}
     
     {diffs==="Hard" && (
       <>
       <h1>Find the {cats} image</h1>
      <h1>{guesse?.gName}</h1> 
       </>

     )}
      <IngredientsCon>

     

     {diffs==="Easy" && (
       <>
        {choices?.map(menu=>

               <IngredientList key={menu.chName} 
               src={menu?.imgUrl}
               className={selected=== menu.chName ?"active":""}
               onClick={() =>{
                if(show === true){
                  setimgUrl(menu.imgUrl)
                  setimgCc(menu.imgCc)
                  setimgUrlCc(menu.imgUrlCc)
                    setModalOpen2(true);
                  
                  }else{
                setSelected(menu.chName);
              
                  }
               // Attr("disabled", true);
              
                //setimgUrlCc(imgccurl)
               }}
              //  className={list.includes(menu.iName)?"selected":""} 
               
                >
                   <h1>{menu.chName}</h1>
                   </IngredientList> )}
                </>
                  )}    
      
              
              {diffs==="Hard" && (
                <>
                 {choices?.map(menu=>

               <IngredientPic key={menu.chName} 
               src={menu?.imgUrl}
               className={selected=== menu.chName ?"active":""}
               onClick={() =>{
                if(show === true){
                  setimgUrl(menu.imgUrl)
                  setimgCc(menu.imgCc)
                  setimgUrlCc(menu.imgUrlCc)
                    setModalOpen2(true);
                  
                  }else{
                setSelected(menu.chName);
              
                  }
          
               }}
               
                >
                
                   </IngredientPic> )}
                </>
              )}
              
                  </IngredientsCon>
                  <Footer>
                  {/* <BasketPic src={basket}  onClick={() => {
          setModalOpen(true);
        }}/> */}
        <HintCon>
                  <HintPic src={hint} onClick={() => {
          setModalOpen1(true);}}/>
          <h3>3 Hints Left</h3>
          </HintCon>
                  <Submit onClick={()=>{selected?.length>0 ? onSubmits(): setempty(false)}}>Submit</Submit>
                  </Footer>
                  {/* {modalOpen && <BasketPopup setOpenModal={setModalOpen} setList={setList} selects={list} />} */}
                  {modalOpen1 && <HintPopup setOpenModal1={setModalOpen1} />}
                  {modalOpen2 && <ImageModal setOpenModal={setModalOpen2} img={{imgUrl,imgCc,imgUrlCc}}  />}
                  {popCheck && <PopChecker2 setpopChecks={setpopCheck} correct={answer} answer={gChoices[0]?.chName} setnextQuests={setnextQuest}/>}
  </FindGamesCon>
  )
  return display ;
}

const ADD_SET_SCORE = gql `
mutation ( $cats: String!, $scName: String!, $setNum: String! ,$diff: String!, $userId: String!, $finalScore: String!, $newdate: String!) {
  insertSetScoreG(gameId:"629d6ece913e0070d05a1d41",  cName: $cats, scName: $scName, diff: $diff, setNum: $setNum, userId: $userId, score: $finalScore, dateTaken: $newdate) {
    id
  }
}
`
const ADD_GAMETAKEN = gql`
mutation InsertGameTakenG($userId: String, $cats: String, $scName: String,$diff: String!, $month: String, $day: String, $year: String, $weekNum: String) {
  insertGameTakenG(gameId:"629d6ece913e0070d05a1d41", userId: $userId, category: $cats, subCategory: $scName,  diff: $diff, month: $month, dayTaken: $day, yearTaken: $year, weekNum: $weekNum) {
    id
  }
}
`
const ADD_TAKES = gql`
mutation InsertTakesG( $userId: String, $firstTake: String, $latestTake: String) {
  insertTakesG(gameId:"629d6ece913e0070d05a1d41", userId: $userId, firstTake: $firstTake, latestTake: $latestTake) {
    id
  }
}
`

const ADD_SUBTAKEN = gql`
mutation InsertSubTakenG( $cats: String!, $scName: String!, $diff: String, $userId: String, $numTaken: String, $totalTakenScore: String) {
  insertSubTakenG(gameId:"629d6ece913e0070d05a1d41", cName: $cats, scName: $scName, diff: $diff, userId: $userId, numTaken: $numTaken, totalTakenScore: $totalTakenScore) {
    id
  }
}
`
const FETCH_GAME_QUERY = gql`
query  {
  getGuessGames {
    id
    takes {
      userId
      firstTake
      latestTake
    }
  }
}
`
const FETCH_CATEGORY_QUERY = gql`
query($cats:String!){
 getGames(gameId: "629d6ece913e0070d05a1d41", cName: $cats) {
   
  
      subCategories {
        id
        scName
        imgUrl
        imgCc
        imgUrlCc
        subTaken{
          userId
          diff
          numTaken
        }
        sets {
          id
          setNum
          userScore{
            id
            diff
            userId
            score
            dateTaken
          }
       
        }
      }
    
 }
}
`

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

const FindGamesCon = styled.div`
margin: auto;

width: 100%;
font-size: 12px;
font-family: halant;
justify-content:center ;
align-items:center ;
position: relative;
//max-height:100vh ;
//overflow-y: scroll;
& h1{
text-align: center;
color:white;
font-weight: normal;
}
& h2{
text-align: center;
color:white;
font-weight: normal;
font-size:  18px;
margin: 1rem auto;
}
 & h3 {
       color: white;
       right:0;
       text-align:right;
       position: relative;
       padding: 5px 8px;
       margin: auto;
       font-size: 16px;
   }
`
const IngredientPic = styled.img`
height: 200px;
width: 300px;
margin: 1.5rem auto;
position: relative;
display: flex;
flex-direction: column;
border-radius:10px ;
box-shadow: 0 0 2px 2px rgba(0,0,0,0.3) ;
&.active {
   border:2px solid #83ff68;
   }

   @media screen and ( max-width:468px){
 width:90% ;
  }
@media screen and ( min-width:468px) and ( max-width:608px){
  width: 60%;}
  @media screen and ( min-width:558px) and ( max-width:868px){
  width:60%;
}
`
const BasketPic = styled.img`
align-items: left;
height: 200px;
width: 200px;
position: relative;
bottom: -40px;
margin: auto;
`
const HintPic = styled.img`
position: relative;
margin: auto;
height: 50px;
width: 50px;
`
const IngredientsCon = styled.div`
    margin: 40px auto;
    width: 80%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    @media screen and ( max-width:468px){
 width:90% ;
  }
@media screen and ( min-width:468px) and ( max-width:608px){
  width: 95%;}
  @media screen and ( min-width:558px) and ( max-width:868px){
  width:95%;
}
`
const IngredientList = styled.button`
   color: white;
font-size: 18px;
margin: 10px;
width: 300px ;
border:none;
background: linear-gradient(152.45deg, rgba(205, 184, 223, 0.46) 7.59%, rgba(201, 195, 206, 0.1932) 55.9%, rgba(204, 187, 218, 0.46) 103.69%);
border-radius: 8px;
position: relative;
cursor: pointer;
   & h1 {
       position: relative;
       padding: 5px 8px;
       margin: auto;
       font-size: 18px;
   }
   &.active {
   border:2px solid #83ff68;
   }
  &:hover{
      position:relative ;
      top:-3px ;
      box-shadow: 0 0 2px 2px rgba(0,0,0,0.3) ;
  }
`

const IngredientList1 = styled.button`
   color: white;
font-size: 18px;
margin: 10px;
border:none;
background: linear-gradient(152.45deg, rgba(205, 184, 223, 0.46) 7.59%, rgba(201, 195, 206, 0.1932) 55.9%, rgba(204, 187, 218, 0.46) 103.69%);
border-radius: 15px;
position: relative;
cursor: pointer;
   & h1 {
       position: relative;
       padding: 5px 8px;
       margin: auto;
       font-size: 18px;
   }
   &.selected {
    visibility:hidden ;
    opacity:.5;
    pointer-events: none;
   }
  &:hover{
      position:relative ;
      top:-3px ;
      box-shadow: 0 0 2px 2px rgba(0,0,0,0.3) ;
  }
`

const Submit = styled.button`
background: #E1C9FF;
position: relative;
border-radius: 90px;
height: 100%;
right: 40px;

padding: 10px 40px;
border: none;
box-shadow: 0 0 2px 1px rgba(0,0,0,0.2);
cursor: pointer;
margin: auto;
`
const ShowButton = styled.button`
background-color:transparent ;
border: none;
color: #ffcdf0da ;
margin: auto ;
margin-left: 20% ;
margin-bottom: 1rem ;
position: relative; 

`
const Footer = styled.div`
  display: flex;
  margin: auto;

`
const HintCon = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100px;
  height: -150px;

  margin: auto;
  & h3 {
       padding: 5px 8px;
       margin: auto;
       font-size: 14px;
       
   }
`

export default GuessGameEasy