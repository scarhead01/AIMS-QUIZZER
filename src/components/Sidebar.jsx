import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from '../context/auth';
import { MdDashboard, MdEdit } from "react-icons/md";
import kazuha from '../images/kazuha.jpg';
import {IoGameControllerSharp} from "react-icons/io5"
import {ImStatsDots} from "react-icons/im"
import {GiTrophy} from "react-icons/gi"
import {GiHamburgerMenu} from "react-icons/gi"
import {RiAccountCircleFill} from "react-icons/ri"
import {IoSettings} from "react-icons/io5"
import {IoClose} from "react-icons/io5"
import logo from '../images/logo.png'

const Sidebar = () => {
  const {user, logout} =useContext(AuthContext);
  const [active,setActive] = useState("Dashboard");
  const [burger, setburger] = useState(false)

  const _handleClick=(menuItem)=> { 
 
    setActive( menuItem );
  }

  
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );
 const login = user? ( 
   <>
    <NavBurger
    className={burger===true? "active":""}
      onClick={()=>{setburger(true)
    if(burger===true){
      setburger(false)
    }
 
  }}
      
      //to="/login" 
      >{burger===true ? <IoClose/> : <GiHamburgerMenu/>}</NavBurger>
      {
        burger===true &&(<BackDrops><BackDrop onClick={()=>{
          if(burger===true){
            setburger(false)
          }
       
        }}/><SidebarCon2>
          <Logo src={logo} />
             
         
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
                  onClick={()=>{_handleClick.bind(this, menuItem.label); setburger(false)}}
                > 
                 <Icon > {menuItem.icon}</Icon> <Label>{menuItem.label}</Label>
                </Links>
                </li>
             )}
             </ul>
             </LinkCon>
             <SignOut  onClick={logout}
          
          to="/login" >logout</SignOut>
          
      </SidebarCon2></BackDrops>)
      }
  <SidebarCon>
      <Logo1 src={logo} >
         
      </Logo1>
      <Profilepic src={loginData? loginData.picture:kazuha}/>
  
  <ProfileName>{loginData? loginData.name: "Kazuha"}
      <h5>{loginData? loginData.email: "@kkazuha"}</h5>
    
  </ProfileName>
  <AccountLink to='/account'>  <MdEdit /> <span>Profile Info</span>  </AccountLink>      
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
      
  </SidebarCon></>) :
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
@media screen and (max-width: 560px) {
  /* For mobile phones: */
  grid-area: Sidebar;
 visibility:hidden;
 width: 0;
 margin:0px ;
}

@media screen and (min-width: 560px) and (max-width:768px) {
  /* For mobile phones: */
  grid-area: Sidebar;
 //visibility:hidden;
 width: 3em;
 margin:0px ;
}
`

const SidebarCon2 = styled.div`
//grid-area: Sidebar;
position: sticky;
background: #E1C9FF;

height: 100%;
overflow-y:auto ;
justify-content: center ;
align-items: center ;
visibility: hidden;
@media screen and (max-width: 560px) {
  visibility:visible ;
 width: 80%;
z-index:10 ;
 position:absolute ;
 margin:0px ;
 overflow-y:auto ;
}
`
const BackDrop = styled.div`
position: sticky;
background: #1f1e207e;

height: 100%;
overflow-y:auto ;
justify-content: center ;
align-items: center ;
visibility: hidden;
@media screen and (max-width: 560px) {
  visibility:visible ;
 width: 100%;
z-index:7;
 position:absolute ;
 margin:0px ;}
`
const Logo = styled.img`
height: 3em;
//width: 3em ;
position:relative ;

color: #5A00CC;

//margin: 1em ;
@media screen and (min-width: 560px) and (max-width: 1068px) {
  height: 2em;
  width: 3em;
  }
`

const BackDrops = styled.div`
position: sticky;
//background: #1f1e207e;

height: 100%;
overflow-y:auto ;
justify-content: center ;
align-items: center ;
visibility: hidden;
@media screen and (max-width: 560px) {
  visibility:visible ;
 width: 100%;
z-index:7;
 position:absolute ;
 margin:0px ;}
`


const Logo1 = styled.img`
height: 80px;
position:relative ;
color: #5A00CC;
margin: auto;
@media screen and (min-width: 560px) and (max-width: 1068px) {
  height: 4em;
  margin-top:1em ;
  width: 8em;
  }
`

const NavBurger = styled.button`
position:absolute ;
visibility:hidden ;
z-index: 25;
left:10px ;
top:10px ;
cursor: pointer;
font-size: 1.7em;
color: #ece7e7 ;
cursor: pointer;
background-color:transparent ;
border:none ;
&.active{
  position:absolute ;
  left:65%;
  color: #300077 ;
}
&:hover{
  color: #b07bff ;
}
@media screen and (max-width: 560px) {

  visibility:visible ;
}
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

& span{
 font-size: 14px ;
 @media screen and (min-width: 560px) and (max-width:768px) {
  /* For mobile phones: */
 // grid-area: Sidebar;
 visibility:hidden;
 width: 1em;
 //font-size: 20px;
 margin:1em ;

}
}
@media screen and (min-width: 560px) and (max-width:768px) {
  /* For mobile phones: */
 // grid-area: Sidebar;
 //visibility:hidden;
 width: .8em;
 height: 1em ;
 font-size: 20px;
 margin:auto 2em ;
 position:absolute ;
top: 8em;
left:1.5em ;
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
//margin-left:.5em ;
@media screen and (min-width: 560px) and (max-width:768px) {

 font-size: 20px;
 margin-left:.5em ;

}
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
    @media screen and (min-width: 560px) and (max-width:768px) {
  /* For mobile phones: */
 // grid-area: Sidebar;
visibility:hidden;
 width: 3em;
 font-size: 20px;
 margin:1em ;

}
}
@media screen and (min-width: 560px) and (max-width:768px) {
  /* For mobile phones: */
 // grid-area: Sidebar;
 //visibility:hidden;
 width: 4em;
 font-size: 15px;
 margin:.5em 2em ;
 text-align: center;

}
`

const Links= styled(Link)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-items: end;
    margin-bottom:20px ;
    width: 7em ;
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
    @media screen and (min-width: 560px) and (max-width:768px) {
  /* For mobile phones: */
 // grid-area: Sidebar;
 //visibility:hidden;
 width: 3em;
 font-size: 20px;
 margin:1em ;

}
@media screen and (min-width: 768px) and (max-width:1068px) {
  margin-left:.5em ;
 
}
    &.active{
      @media screen and (min-width: 560px) and (max-width:768px) {
  /* For mobile phones: */
 // grid-area: Sidebar;
 //visibility:hidden;
 width: 1em;
 margin:0px ;
}
        background: linear-gradient(-90deg,#5000b9  0%, #4a00aa 100%);
        /* border-top-left-radius: 15px;
        border-bottom-left-radius: 15px; */
        border-radius: 10px ;
        box-shadow: 0 0 2px 2px rgba(0,0,0,0.25);
        color: white;
       padding:10px 20px;
        //padding-right:1.3em ;
        margin-left: 15px;
        padding-bottom:5px ;
        justify-items: end;
        padding-top: 5px;
        width: 7em ;
        
        @media screen and (min-width: 768px) and (max-width:1068px) {
  margin-left:-.5em ;
  width: 5em ;
}
    } 
`
const LinkCon = styled.div`
display:flexbox ;
margin-top:3em ;
//margin-left: 15px;
justify-self: end;
align-self: flex-end;

@media screen and (min-width: 560px) and (max-width:768px) {
        margin-top:-2.8em ;
}
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
@media screen and (min-width: 560px) and (max-width:768px) {
  /* For mobile phones: */
 // grid-area: Sidebar;
 visibility:hidden;
 width: 3em;
 margin:0px ;
}
`
export default Sidebar;
