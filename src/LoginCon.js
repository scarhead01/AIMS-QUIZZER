import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthRouteOff from './util/AuthRouteOff'

const LoginCon = () => {
  return (
    <Routes>
    <Route element ={<AuthRouteOff />}>
  <Route exact path='/login' element={<Login />}/>
  <Route exact path='/register' element={<Register />}/>
  </Route>
  </Routes>
  )
}

export default LoginCon