import React from 'react';
import styled from 'styled-components';
import { useState} from "react";
import gql from 'graphql-tag';


import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useForm } from '../util/hook'

const Register = () => {

  const navigate=useNavigate();

 
  

    

  return <LoginCon>
     <LoginBox>
     <h1>Register</h1>
     
    
     <label for="email">Email</label>
     <input type="email" name='email' placeholder='Email'
     
     />
     
     <label for="sNum"> Password</label>
     <input type="password" name='sNum' placeholder=''
     
     />
     <label for="sNum">Confirm Password</label>
      <input type="password" name='sNum' placeholder=''
    
     />
     <Submit onClick={Register}>
       Login
     </Submit>
     </LoginBox>
  </LoginCon>;
};


const LoginCon = styled.div`
position: relative;
height: 100vh;
margin: auto;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
background: linear-gradient(180deg, #5A00CC 0%, #2B0062 100%);


`
const LoginBox = styled.div`
width: 400px;
margin: 30px 25px;

border-radius: 15px;
padding: 20px;
background-color: #e3c1ff;
display: flex;
flex-direction: column;
& h1{
  text-align: center;
  font-size: 25px;
  margin-bottom: 30px;
}
& input{
  border: none;
  border-bottom: 2px solid purple;
  background-color: #d884ff92;
  width: 80%;
  margin: auto;
  padding: 8px;
  border-radius: 5px;
  margin-top:10px;
  margin-bottom: 10px;
  &:focus{
    outline: none;
  }
}
& label{
  width: 80%;
  margin: auto;
  margin-top: 5px;
  font-size: 15px;
  font-weight: 600;
}
`
const Submit = styled.button`
margin: auto;
margin-top: 50px;
cursor: pointer;
padding: 10px 10px;
width: 50%;
border: none;
color: #efc5ff;
border-radius: 10px;
box-shadow: 0 0 2px 1px rgba(0,0,0,0.1);
background-color: #e200e2;
margin-bottom: 70px;
`
const Name = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
padding: 0 35px;
& label{

  width: 50%;
}
& input{
  position: relative;
  left: -22px;
  width: 40%;
  &.lname{
    width: 30%;
    position: relative;
    left: -45px;
  }
}
`

export default Register;

