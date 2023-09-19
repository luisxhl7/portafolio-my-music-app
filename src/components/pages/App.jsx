import React from 'react'
import { AppRouter } from '../../routers/AppRouter'
import { useDispatch } from 'react-redux';
import { token_thunks } from '../../store/thunks/token-thunks';
import { clientId } from '../../constants/variables';
import SpotifyService from '../../services/spotify-services';

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export const App = () => {
  const dispatch = useDispatch();
  
  if (code) {
    (async () => {
      try {
        await localStorage.setItem('code', code)
        const accessToken = await SpotifyService.getAccessToken(clientId);
        localStorage.setItem('accessToken', accessToken)
        dispatch( token_thunks(accessToken) )
      } catch (error) {
        console.error("Error en el manejo principal:", error);
      }
    })();
  }

  return (
    <>
      <AppRouter/>
    </>
  )
}
