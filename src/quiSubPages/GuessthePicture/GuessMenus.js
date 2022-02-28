import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import styledComponents from 'styled-components';


const menuItems = [
    {id:1,label:''},
    {id:2,label:''},
    {id:3,label:''},
    {id:3,label:'',},
    {id:3,label:''},
    {id:3,label:''}
  ];

const GuessMenus = () => {
  const {diffs} = useParams();
  const {cats} = useParams();
  return <FindMenuCon>
            {menuItems.map(menu=>
               <MenuList key={menu.id} to={`/game/guess/guessmenu/${diffs}/${cats}/guessgame`}>
                   <h1>{menu.id}</h1>
        
               </MenuList> 
               )} /
               
  </FindMenuCon>;
};

  
const FindMenuCon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 80%;
  width: 100%;
  margin-top: 60px;
  
`

const MenuList = styled(Link)`
color: white;
font-size: 18px;
margin: auto;
width: 367px;
height: 55px;
border:none;
background: linear-gradient(180deg, rgba(156, 132, 194, 0.68) 0%, rgba(201, 100, 249, 0.74) 100%);
cursor: pointer;
& h1{
    font-size: 24px;
    margin-left: 15px;
    margin-top: 10px;
    position: relative;
    left: -170px;

}
`
export default GuessMenus;
