import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../components/pages/login/Login'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRouter = () => {
  
  return (
    <Routes>
      {sessionStorage.getItem('accessToken') ?
        <Route path = '/*' element = { <PrivateRoutes/> }/>
      :
        <>
          <Route path = '/login' element = { <Login/> }/>
          <Route path = '/*' element = { <Navigate to = '/login' /> }/>
        </>
      }
    
    </Routes>
  )
}
