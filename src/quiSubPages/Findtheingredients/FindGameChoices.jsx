import React from 'react'
import styled from 'styled-components'

const FindGameChoices = ({ingredients},{setimgUrl,setimgCc,setimgUrlCc,setModalOpen2,setSelected,selected,lists,show}) => {
    
    console.log(lists)

    return (
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
                className={lists?.includes(menu.iName)?"selected":""} 
               
                >
                   <h1>{menu.iName}</h1>
                   </IngredientList> 
                
                  )}    
              
                  </IngredientsCon>
  )
}


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

export default FindGameChoices