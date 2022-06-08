import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from '../context/auth';
import { MdDashboard, MdEdit } from "react-icons/md";
import kazuha from '../images/kazuha.jpg';
import {IoGameControllerSharp} from "react-icons/io5"
import {ImStatsDots} from "react-icons/im"
import {GiTrophy} from "react-icons/gi"
import {RiAccountCircleFill} from "react-icons/ri"
import {IoSettings} from "react-icons/io5"
import logo from '../images/logo.png'

const Sidebar = () => {
  const {user, logout} =useContext(AuthContext);
  const [active,setActive] = useState("Dashboard");
  const _handleClick=(menuItem)=> { 
 
    setActive( menuItem );
  }

  
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );
 const login = user? ( 
  <SidebarCon>
      <Logo src={logo} >
         
      </Logo>
      <Profilepic src={loginData? loginData.picture:kazuha}/>
  
  <ProfileName>{loginData? loginData.name: "Kazuha"}
      <h5>{loginData? loginData.email: "@kkazuha"}</h5>
    
  </ProfileName>
  <AccountLink to='/account'>  <MdEdit /> Profile Info </AccountLink>      
      <LinkCon>
      <ul>
      {menuItems.map(menuItem => 
      <li>
            <Links key={menuItem.id}
              to={menuItem.to}
              className={active === menuItem.label ? 'active' : ''} 
              onClick={_handleClick.bind(this, menuItem.label)}
            > 
             <Icon > {menuItem.icon}</Icon> <Label>{menuItem.label}</Label>
            </Links>
            </li>
         )}
         </ul>
         </LinkCon>
         <SignOut  onClick={logout}
      
      to="/login" >logout</SignOut>
      
  </SidebarCon>) :
  (
    <SidebarCon1>

    </SidebarCon1>
  )
  return login;
 
};

const SidebarCon1 = styled.div`
grid-area: Sidebar;
width: 0vw;
position: sticky;
background: #E1C9FF;
margin:0px ;

`
const SidebarCon = styled.div`
grid-area: Sidebar;
position: sticky;
background: #E1C9FF;
width: 20vw;
height: 100%;
justify-content: center ;
align-items: center ;
`
const Logo = styled.img`
height: 80px;


color: #5A00CC;

margin: 1rem ;

`
const AccountLink = styled(Link)`
background-color: #ff11f3e0;
padding:5px 10px ;
border-radius:10px ;
color: #ffffffe1 ;
text-decoration:none ;
margin: auto;
width: 100px ;
display:block ;
box-shadow: 0 0 1px 1px rgba(0,0,0,0.2) ;

& h1{
 font-size: 14px ;

}
`
const SignOut = styled.button`
display:block ;
margin:auto ;
border:none ;
background-color: #ff11f3e0;
color:#ffe8fb;
padding:10px 40px ;
box-shadow: 0 0 1px 1px rgba(0,0,0,0.2) ;
border-radius:10px ;
cursor: pointer;
`

const Profilepic = styled.img`
height: 90px;
width: 90px;
border: 5px solid #CE9DFF;
border-radius: 50%;
display:block ;
margin: auto;
`
const ProfileName = styled.div`

font-size: 20px;
text-align:center;
font-weight: 600;
color: #002d81;
text-transform: capitalize; 
& h5{
    margin-top: 5px;
    font-weight: 500;
    font-size: 12px;
    color: #7d46e2;
    text-transform: lowercase; 
  
}
`

const Links= styled(Link)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-items: end;
    margin-bottom:20px ;
    width: 150px ;
    margin-left:50px ;
    list-style: none;
    text-decoration: none;
    font-family: Grenze;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 36px;
    justify-self: end;
    height: 40px;
    &.active{
        background: linear-gradient(-90deg,#5000b9  0%, #4a00aa 100%);
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        box-shadow: 0 0 2px 2px rgba(0,0,0,0.25);
        color: white;
        padding-left: 40px;
        padding-right:1.3em ;
        margin-left: 15px;
        padding-bottom:5px ;
        justify-items: end;
        padding-top: 5px;
        width: 190px ;
        

    } 
`
const LinkCon = styled.div`
display:flexbox ;
margin-top:40px ;
//margin-left: 15px;
justify-self: end;
align-self: flex-end;
& ul{
  text-decoration: none ;

list-style: none;
}
`

const menuItems = [
  {id:1,label:'Dashboard',to:'/',class:'',icon: <MdDashboard /> },
  {id:2,label:'Game',to:'game',class:'active',icon: <IoGameControllerSharp /> },
  {id:3,label:'Statistics',to:'/statistics',class:'',icon: <ImStatsDots />},
  {id:4,label:'Rank',to:'/rank',class:'',icon: <GiTrophy />},
 
  {id:5,label:'Setting',to:'/setting',class:'',icon: <IoSettings/>}
];

const Icon= styled.i`

`
const Label = styled.div`
`
export default Sidebar;
