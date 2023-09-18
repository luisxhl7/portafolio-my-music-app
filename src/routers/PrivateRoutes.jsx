import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../components/pages/home/Home'
import { PageLoyaut } from '../components/templates/page-loyaut/Page-loyaut'
import { SearchPage } from '../components/pages/searchPage/SearchPage'

export const PrivateRoutes = () => {
  return (
    <PageLoyaut>
      <Routes>
        <Route path = '/home' element = { <Home/> } />
        <Route path = '/perfil' element= { <>perfil</> }/>
        <Route path = '/favoritos' element = { <>favoritos</> }/>
        <Route path = '/playlist/:id' element = { <>Playlist</> } />
        <Route path = '/search' element = { <SearchPage/> } />
        <Route path = '/' element = { <Navigate to = '/home' /> } />
      </Routes>
    </PageLoyaut>
  )
}
