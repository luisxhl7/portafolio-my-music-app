import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../components/pages/home/Home'

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path = '/home' element = { <Home/> } />
        <Route path = '/perfil' element= { <>perfil</> }/>
        <Route path = '/favoritos' element = { <>favoritos</> }/>
        <Route path = '/playlist/:id' element = { <>Playlist</> } />
        <Route path = '/' element = { <Navigate to = '/home' /> } />
      </Routes>
    </>
  )
}
