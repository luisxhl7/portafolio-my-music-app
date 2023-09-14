import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/organisms/Navbar/Navbar'
import { Home } from '../components/pages/home/Home'

export const PrivateRoutes = () => {
  return (
    <>
      <Navbar/>

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
