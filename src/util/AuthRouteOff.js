import React, { useContext } from 'react'
import { Outlet,BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import Login from '../pages/Login'
import useAuth from './useAuth'

const  AuthRouteOff = () =>{
    const { user } = useContext(AuthContext);
const location = useLocation();
    return (
     user === null ?
     <Outlet /> : <Navigate to ='/' state={{from: location}} replace />
    )
    }
export default AuthRouteOff;