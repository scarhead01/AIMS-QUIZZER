import React from 'react';
import styled from 'styled-components';
import AccountPic from '../images/kazuha.jpg'

const Account = () => {
  return <AccountCon>
  <ProfPic src = {AccountPic}/>
  <AccountForm>
    <ul>
      <li>
        <label>
          First Name
        </label>
        <input type="text" />
      </li>
      <li>
        <label>
          Last Name
        </label>
        <input type="text" />
      </li>
      <li>
        <label>
          Course & Section
        </label>
        <input type="text" />
      </li>
      <li>
        <label>
          Student Number
        </label>
        <input type="text" />
      </li>
      <li>
        <label>
          Email Address
        </label>
        <input type="email" />
      </li>
    </ul>
    <Button>Save Changes</Button>
  </AccountForm>
</AccountCon>
};

const AccountCon = styled.div`
  position: relative;
  height: 500px;
  width: 450px;
  margin: auto;
  background: rgba(220, 198, 239, 0.32);
  border-radius: 20px;
  padding-top:40px;
  margin-top: 20px;
  @media screen and ( max-width:468px){
   width:92%;
}
@media screen and ( min-width:468px) and ( max-width:668px){
   width:400px;
}
@media screen and ( min-width:668px) and ( max-width:868px){
   width:500px;
}
@media screen and ( min-width:868px) and ( max-width:1268px){
   width: 500px;
}
`
const ProfPic = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  position: relative;
  border: 4px solid #f372e8;
  align-items: center;
  justify-content: center;
  margin: auto;
  display: block;
`
const AccountForm = styled.div`
margin-left: -25px;
margin-top: 50px;
  & ul{
margin: auto;
width: 100%;
display: block;
@media screen and ( max-width:468px){
font-size: 15px ;
}
@media screen and ( min-width:468px) and ( max-width:668px){
 
}
@media screen and ( min-width:668px) and ( max-width:868px){
 
}
@media screen and ( min-width:868px) and ( max-width:1268px){

}
  }
  & li{
    list-style: none;
    margin: 20px;
    display: flex;
    color: #fff;
    font-weight: 400;
    & label{
    width: 40%;
    font-family: halant;
    font-size: 20px;
    align-items: left;
    justify-content: left;
    @media screen and ( max-width:468px){
font-size: 15px ;
}
  }
  }
  & input{
    position: relative;
    padding: 0 5px ;
    right: 20px;
    background-color: #18006d76;
    border-style:none;
    color: white;
    border-radius: 5px;
    height: 30px;
    width: 50%;
    &:focus{
      border-style:none ;
      border-color: #fff;
      outline: 3px solid #eb50ff;
    }
  }
`
const Button = styled.button`
position: relative;
background: #00ffea;
color: #575656;
border-radius: 5px;
margin: auto;
display: block;
border-style: none;
height: 35px;
font-family: halant;
font-weight: 600;
padding: 10px;
margin-top: 50px;
`
export default Account;