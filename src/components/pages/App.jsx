import React from 'react'
import { useDispatch } from 'react-redux'
import { AppRouter } from '../../routers/AppRouter'
import { clientId } from '../../constants/variables'
import { token_thunks } from '../../store/thunks/token-thunks'
import SpotifyService from '../../services/spotify-services'

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export const App = () => {
  const dispatch = useDispatch();
  
  if (code) {
    (async () => {
      try {
        await localStorage.setItem('code', code)
        const { access_token, refresh_token } = await SpotifyService.getAccessToken(clientId);
        localStorage.setItem('accessToken', access_token)
        localStorage.setItem('refreshToken', refresh_token)
        dispatch( token_thunks(access_token) )
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
