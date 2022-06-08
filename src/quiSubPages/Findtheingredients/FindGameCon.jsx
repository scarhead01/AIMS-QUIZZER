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
import PopChecker from '../../components/PopChecker';

import jwtDecode from 'jwt-decode'

const FindGameCon = () => {
    const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [score, setScore] = useState(0)
  const [repeat, setRepeat] = useState([])
  const [selected, setSelected] = useState([])
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


const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));

const userId = decodedToken?.id
const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1; //months from 1-12
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();

const newdate = year + "/" + month + "/" + day;
console.log(newdate)

 const {loading, data:{getRecipes: recipe}=[]} = useQuery(FETCH_RECIPE_QUERY,{
 
  variables: {cats,scName,setNum},
  

},

);
const finalScores = firstScore;

const finalScore = finalScores?.toString();
 
const gameId = "6227003f9ac1104969591b20"
const [AddSetScore,{error}] = useMutation(ADD_SET_SCORE,{    
  variables:  {cats,scName,setNum,userId,finalScore,newdate},
  refetchQueries: [{ query: FETCH_CATEGORY_QUERY, variables:{cats} }]
})



//console.log(recipe)
const recipee = recipe?.recipes;
//console.log(recipee)
 const recipes = recipe?.recipes[currQuestion];

 useEffect(() => {
   
  setTimeout(() => { 
    
    if(loading){
    settaken(1)
  } }, 700);

   
 }, [])
 
  
 
 console.log(currQuestion)

  


 const ringredients = recipes?.rIngredients;
 const wingredients = recipes?.wIngredients;
 const ingredientss = ringredients?.concat(wingredients);


 const Selected = (diff,imgurl,imgcc,imgccurl) => {
    setSelected([... selected,diff]);
    if(show === false){
    setimgUrl(imgurl)
    setimgCc(imgcc)
    setimgUrlCc(imgccurl)
   // console.log(diff)
    }
  }
 
 
  //console.log(selected)

  console.log("score: "+ score)
 //console.log("empty: "+ empty)
  
  //console.log(ringredients)
  const ingredients=useMemo(()=>ingredientss?.sort(()=> Math.random() - 0.6),[taken])
 
  // -------CHECK/NEXT FUNCTION--------

  let ans='';

 

  const Next =()=>{

    if(currQuestion<recipee?.length-1 && taken < recipee?.length){
      
         setCurrQuestion(currQuestion+1)
         settaken(taken+1)
         setnextQuest(false)
       }
    else if(taken >= recipee?.length || repeat.length>0){
      if(repeat[0]===currQuestion){
        
          setCurrQuestion(repeat[1])
          settaken(taken+1)
          setnextQuest(false)
       
        }else{
     setCurrQuestion(repeat[0])
     setnextQuest(false)
     settaken(taken+1)
        }
   
    }
    console.log('next question is'+ repeat[0])

   }
  useEffect(() => {
   if(nextQuest===true){

    selected.splice(0,selected.length)
     Next(currQuestion,taken);
   }
  }, [nextQuest])
 // console.log( "Next Quest?"+nextQuest)
  
 useEffect(() => {
 if(completed===true) {
   console.log(cats+" "+scName+" "+setNum+ " "+finalScore+" "+userId)
 // addSet()
}
 }, [completed])
 
  const PopCheck = (ans) => {
    setpopCheck(true)
    setanswer(ans)
  }

   const SetScore=(corrects, currScore) =>{
    if(score<recipee?.length){
     if(corrects==="correct"){
       setScore(score+1)
        currScore= currScore+1;
        if(taken <= recipee?.length){
          setfirstScore(firstScore+1)
        }
     }
    }
   
     console.log("completed: "+ completed)
     if(currScore ===recipee?.length){
      setcompleted(true)
     // console.log( "finalScore: " + finalScore)
     
    }
   }


   const Correct = (corrects) => {
      const currScore = score;
    if(corrects==="incorrect"){
     ans='incorrect'
     setRepeat([... repeat,currQuestion]);

     SetScore(ans,currScore);
     PopCheck()
   
   }else if(corrects==="correct"){
   ans='correct'
   
  
   SetScore(ans,currScore);
  
   if(repeat?.includes(currQuestion)){
   for(let i = 0; i < repeat?.length; i++){
    if(repeat?.includes(currQuestion)){
     
        repeat?.splice(i, 1); 
      
    }
   }
   }
  
    PopCheck(ans)
   }
   
   console.log("ans"+ corrects)
  

    }


   const CorrectAnswer =(arrayName)=>{

    let correct=0;
    let wrong=0;
    if(arrayName?.length===selected?.length){
    

    for(let i = 0; i < selected?.length; i++){
      if(!arrayName?.includes(selected[i])){
        //  setcorrect("incorrect")
        //  const corrects ="incorrect"
        //  Correct(corrects);
          wrong=wrong+1;
      }else{
       
        // if(repeat?.includes(currQuestion)){
        //   for(let i = 0; i < repeat?.length; i++){
        //    if(repeat?.includes(currQuestion)){
           
        //        repeat?.splice(i, 1); 
             
        //    }
        //   }
        //   }
          // const corrects ="correct"
          // Correct(corrects);
          correct=correct+1;
      }
   
      if(wrong>0){
          setcorrect("incorrect")
         const corrects ="incorrect"
         Correct(corrects);
      }else if(correct===arrayName?.length&& wrong===0){
            if(repeat?.includes(currQuestion)){
          for(let i = 0; i < repeat?.length; i++){
           if(repeat?.includes(currQuestion)){
           
               repeat?.splice(i, 1); 
             
           }
          }
          }
          const corrects ="correct"
          Correct(corrects);
      }

    }
   } else{
    setcorrect("incorrect")
    const corrects ="incorrect"
    Correct(corrects);
   }
  
   
    
    
}



  // useEffect(() => {


  //     return () => ingredients?.destroy()
    
  // }, [running])
  

  const [items, setList] = useState("");
   const list = selected;
//   const UpdateListItem = (item) =>{
//     list.splice(item)
//  }
 useEffect(() => {

   // console.log(items)
    const id = list.indexOf(items)
    list.splice(id,1)
  
 }, []);


  const onSubmits = () =>{


    const arrayName = new Array();
  
      for(let i = 0; i < ringredients?.length; i++){
        arrayName?.push(ringredients[i]?.iName)
      }
      
      CorrectAnswer(arrayName);

       //console.log("correct?: "+ correct)
      // console.log("current question: "+ currQuestion)
      // console.log("number of recipe: "+ recipee?.length)
      // console.log("wrong answered: "+ repeat)
       console.log("number taken: "+ taken)
     
  
}
  
const Continue = () => {
AddSetScore()
console.log(cats+" "+scName+" "+setNum+ " "+finalScore+" "+userId)
}

const Return = () => {
  AddSetScore()
}

  const arrayName = new Array();
  
  for(let i = 0; i < ringredients?.length; i++){
    arrayName.push(ringredients[i]?.iName)
  }

  // console.log("correct answer: "+ arrayName )
  console.log("retake: "+ repeat )
  // console.log("A ARRAY LENGTH: "+ arrayName.length )
    
  // console.log("S ARRAY LENGTH: "+ selected.length )

  const display = completed? (

    <FindGamesCon>
       Score : {firstScore} out of {recipee?.length}
       <Submit onClick={()=>{Continue()}}> Continue </Submit>
       <Submit onClick={()=>{Return()}}> Return </Submit>
       {error && <pre>Bad: {error.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
      </pre>}
    </FindGamesCon>
  ): (


    <FindGamesCon>
      <h3>Difficulty: EASY</h3>
      <h1>Find The Ingredients </h1>
      <IngredientPic src={recipes?.rImgUrl}/>
     <h1>{recipes?.rName}</h1> 
     <ShowButton   onClick={() =>{
                      if(show ===  false){
                setShow(true);}else{
                setShow(false)}
               }} >Want to see Ingredient's Images First ? {show ? <AiFillCheckCircle 
               style={{
                 fontSize:18,
                 color: "#8bff8b",
                 position: "relative",
                 bottom: -3
               }} />:< AiFillCloseCircle
               style={{
                fontSize:18,
                color: "#ff7e84",
                position: "relative",
                bottom: -3
              }}
               />}</ShowButton>
      <IngredientsCon>

      {ingredients?.map(menu=>
     
               <IngredientList key={menu.iName} 
               onClick={() =>{
                if(show === true){
                  setimgUrl(menu.imgUrl)
                  setimgCc(menu.imgCc)
                  setimgUrlCc(menu.imgUrlCc)
                    setModalOpen2(true);
                  
                  }else{
                setSelected([... selected,menu.iName]);
              
                  }
               // Attr("disabled", true);
              
                //setimgUrlCc(imgccurl)
               }}
                className={list.includes(menu.iName)?"selected":""} 
               
                >
                   <h1>{menu.iName}</h1>
                   </IngredientList> 
                
                  )}    
              
                  </IngredientsCon>
                  <Footer>
                  <BasketPic src={basket}  onClick={() => {
          setModalOpen(true);
        }}/>
        <HintCon>
                  <HintPic src={hint} onClick={() => {
          setModalOpen1(true);}}/>
          <h3>3 Hints Left</h3>
          </HintCon>
                  <Submit onClick={()=>{selected?.length>0 ? onSubmits(): setempty(false)}}>Submit</Submit>
                  </Footer>
                  {modalOpen && <BasketPopup setOpenModal={setModalOpen} setList={setList} selects={list} />}
                  {modalOpen1 && <HintPopup setOpenModal1={setModalOpen1} />}
                  {modalOpen2 && <ImageModal setOpenModal={setModalOpen2} img={{imgUrl,imgCc,imgUrlCc}}  />}
                  {popCheck && <PopChecker setpopChecks={setpopCheck} correct={answer} answer={arrayName} setnextQuests={setnextQuest}/>}
  </FindGamesCon>
  )
  return display ;
}

const ADD_SET_SCORE = gql `
mutation ( $cats: String!, $scName: String!, $setNum: String!, $userId: String!, $finalScore: String!, $newdate: String!) {
  insertSetScore(gameId:"6227003f9ac1104969591b20",  cName: $cats, scName: $scName, setNum: $setNum, userId: $userId, score: $finalScore, dateTaken: $newdate) {
    id
  }
}
`
const FETCH_CATEGORY_QUERY = gql`
query($cats:String!){
 getGame(gameId: "6227003f9ac1104969591b20", cName: $cats) {
   
  
      subCategories {
        id
        scName
        imgUrl
        imgCc
        imgUrlCc
        sets {
          id
          setNum
          userScore{
            id
            userId
            score
            dateTaken
          }
          recipes{
            id
          }
        }
      }
    
 }
}
`
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
margin: auto;
position: relative;
display: flex;
flex-direction: column;
border-radius:10px ;
box-shadow: 0 0 2px 2px rgba(0,0,0,0.3) ;
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
    margin: auto;
    width: 80%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`
const IngredientList = styled.button`
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
bottom: -80px;
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
  bottom: -90px;
  margin: auto;
  & h3 {
       padding: 5px 8px;
       margin: auto;
       font-size: 14px;
       
   }
`

export default FindGameCon