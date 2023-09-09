import React, { useEffect, useState } from 'react'
import { PageLoyaut } from '../templates/page-loyaut/Page-loyaut'
import SpotifyService from '../../services/spotify-services';
import { Button } from '../atoms/button/Button';
import { Login } from './login';

export const App = () => {
  const token = false
  const [morty, setmorty] = useState();
  console.log(morty)
  const esto = () => {
    const resp = SpotifyService.getMorty()
    setmorty(resp);
  }

  useEffect(() => {
    esto()
  }, [])
  
  if (token) {
    return (
      <PageLoyaut>
        <Button>Artistas</Button>
      </PageLoyaut>
    )

  }else{

    return(
      <Login/>
    )

  }
}
