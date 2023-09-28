import React from 'react'
import { clientId } from '../../../constants/variables'
import { redirectToAuthCodeFlow } from '../../../services/login'
import { Button } from '../../atoms/button'
import { Image } from '../../atoms/image'
import images from '../../../assets/images'
import './login.scss'

export const Login = () => {
  const handleLogin = () => {
    redirectToAuthCodeFlow(clientId)
  }
  
  return (
    <main className='login'>
      <Image 
        src={images.imageLogin} 
        alt='Logo Spotify'
        title='Logo Spotify'
        className='login__image'
      />
      
      <Button 
        className='login__button'
        onClick={handleLogin}
      >
        Iniciar sesion
      </Button>
    </main>
  )
}
