import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../components/pages/login/Login'
import { PrivateRoutes } from './PrivateRoutes'
import { useSelector } from 'react-redux'

export const AppRouter = () => {
  const {token} = useSelector((state) => state.token);
  
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
