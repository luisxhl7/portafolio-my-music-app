import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, PlayList, SearchPage } from '../components/pages'
import { PageLoyaut } from '../components/templates'
import { Album } from '../components/pages/album'

export const PrivateRoutes = () => {
  return (
    <PageLoyaut>
      <Routes>
        <Route path = '/home' element = { <Home/> } />
        <Route path = '/perfil' element= { <>perfil</> }/>
        <Route path = '/favoritos' element = { <>favoritos</> }/>
        <Route path = '/playlist/:id' element = { <PlayList/> } />
        <Route path = '/album/:id' element = { <Album/> } />
        <Route path = '/search' element = { <SearchPage/> } />
        <Route path = '/' element = { <Navigate to = '/home' /> } />
      </Routes>
    </PageLoyaut>
  )
}
