import  { useContext } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import {   BrowserRouter as Router, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AuthProvider } from './context/auth';
import { AuthContext } from './context/auth'
import Login from './pages/Login';
import Register from './pages/Register';
import MainCon from './MainCon';
import AuthRouteOff from './util/AuthRouteOff';
import LoginCon from './LoginCon';


function App() {
  const { user } = useContext(AuthContext);
//  const navigate = useNavigate();


  return(
   
    <AuthProvider >
    <Router>
  <MainCon />
   </Router>
   </AuthProvider>
 
  );
    }
  
  


export default App;
