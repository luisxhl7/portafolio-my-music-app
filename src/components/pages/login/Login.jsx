import React, { useState } from 'react'
import { clientId } from '../../../constants/variables'
import { redirectToAuthCodeFlow } from '../../../services/login'
import { Button } from '../../atoms/button'
import { Image } from '../../atoms/image'
import images from '../../../assets/images'
import './login.scss'
import CopyToClipboard from 'react-copy-to-clipboard'

export const Login = () => {
  const [text] = useState('pruebasmymusicapp@yopmail.com');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
      <p className='login__text --text-1'>Utiliza este Usuario para hacer uso de este proyecto</p>      
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <p className='login__text --copy'>{copied ? 'Copiado' : `Email: ${text}`}</p>
      </CopyToClipboard>
      <p className='login__text'>contraseña: mymusicapp</p>
      
      <br />
      <Button 
        className='login__button'
        onClick={handleLogin}
      >
        Iniciar sesion
      </Button>
    </main>
  )
}
