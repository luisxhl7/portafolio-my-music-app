import React from 'react'
import './login.scss'
import { Button } from '../../atoms/button/Button'
import { Image } from '../../atoms/image/Image'
import images from '../../../assets/images'
import { redirectToAuthCodeFlow } from '../../../services/login'
import { clientId } from '../../../constants/variables'

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
