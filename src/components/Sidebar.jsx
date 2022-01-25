import React from 'react';
import styled from 'styled-components';
import { Outlet, Link } from "react-router-dom";
const SidebarCon = styled.div`
grid-area: Sidebar;
position: sticky;
background: #E1C9FF;
height: 100%;

`
const Logo = styled.text`
@import url('https://fonts.googleapis.com/css2?family=Grenze:wght@100&family=Montserrat:wght@100&display=swap');
margin-left: 38px;
margin-top: 35px;

font-family: Grenze;
font-style: normal;
font-weight: 800;
font-size: 25px;
line-height: 59px;
text-decoration: none;
color: #5A00CC;
margin-bottom: 180px;
`
const Links= styled(Link)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
   
    margin-bottom:28px ;
   
    list-style: none;
    text-decoration: none;
    font-family: Grenze;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 36px;
    &.active{
        background: linear-gradient(-90deg,#5000b9  0%, #4a00aa 100%);
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        box-shadow: 0 0 2px 2px rgba(0,0,0,0.25);
        color: white;
        padding-left: 40px;
        margin-left: -40px;
        padding-bottom:5px ;
        padding-top: 5px;
    }
`
const LinkCon = styled.div`
margin-top: 80px;
margin-left: 95px;
`
const menuItems = [
    {id:1,label:'Dashboard',to:'/',class:''},
    {id:2,label:'Game',to:'game',class:'active'},
    {id:3,label:'Statistics',to:'/statistics',class:''},
    {id:3,label:'Rank',to:'/rank',class:''},
    {id:3,label:'Account',to:'/account',class:''},
    {id:3,label:'Setting',to:'/setting',class:''}
  ];
const Sidebar = () => {
  return <SidebarCon>
      <Logo>
          AIMS-QUIZZER
      </Logo>
      <LinkCon>
      {menuItems.map(menuItem => 
            <Links key={menuItem.id}
              to={menuItem.to}
              className={menuItem.class}
            > 
              {menuItem.label}
            </Links>
         )}
         </LinkCon>
      
  </SidebarCon>;
};

export default Sidebar;
