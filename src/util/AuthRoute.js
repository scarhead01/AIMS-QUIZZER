import React, { useContext } from 'react'
import { Outlet,BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import Login from '../pages/Login'
import useAuth from './useAuth'

const  AuthRoute = () =>{
    const {user} = useContext(AuthContext)
const location = useLocation();
    return (
     user ?
     <Outlet /> : <Navigate to ='/login' state={{from: location}} replace />
    )
    }
export default AuthRoute;