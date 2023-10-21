import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PageLoyaut } from '../components/templates'
import { Home, PlayList, SearchPage } from '../components/pages'
import { Album } from '../components/pages/album'

export const PrivateRoutes = () => {
  useEffect(() => {
    const refreshPage = () => {
      localStorage.clear()
      window.location.reload();
    };

    const oneHour =  1 * 60 * 1000; // 1 hora en milisegundos

    const intervalId = setTimeout(refreshPage, oneHour);

    return () => clearTimeout(intervalId); // Limpiar el temporizador cuando el componente se desmonte

  }, []);
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
        <Route path = '/*' element = { <Navigate to = '/home' /> } />
      </Routes>
    </PageLoyaut>
  )
}
