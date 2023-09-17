import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/pages/login/Login'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRouter = () => {
  return (
    <Routes>

        <Route path = '/login' element = { <Login/> }/>
        <Route path = '/*' element = { <PrivateRoutes/> }/>
    
    </Routes>
  )
}
