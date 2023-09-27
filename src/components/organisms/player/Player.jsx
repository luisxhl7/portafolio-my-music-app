import React, { useEffect, useState } from 'react'
import './Player.scss'
import { Image } from '../../atoms/image'
import {
  SkipNext, 
  SkipPrevious, 
  ShuffleOutlined, 
  RepeatOutlined, 
  QueueMusic,
  VolumeDown,
  PlayCircle
} from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';


export const Player = () => {

// const valorInicial = JSON.parse(localStorage.getItem(('playTrack'))) || 'Valor por defecto';

const [miEstado, setMiEstado] = useState(JSON.parse(localStorage.getItem(('playTrack'))));

useEffect(() => {
  const handleLocalStorageChange = (e) => {
    if (e.key === 'playTrack') {
      setMiEstado(e.newValue);
    }
  };
  
  // Agrega un event listener para observar cambios en el localStorage
  window.addEventListener('storage', handleLocalStorageChange);

  // Limpia el event listener cuando el componente se desmonta
  return () => {
    window.removeEventListener('storage', handleLocalStorageChange);
  };
}, [localStorage.getItem('playTrack')]);

  return (
    <div className='player'>
      
      <div className='player__content-left'>
        <Image 
          src={miEstado?.image}
          className='image-player'
        />
        <div>
          <h3>{miEstado?.musicName}</h3>
          <span><p>{miEstado?.artistName}</p></span>
        </div>
      </div>

      <div className='player__content-center'>
        <div className='player__content-center__top'>
          <ShuffleOutlined className='--button-shuffle'/>
          <SkipPrevious className='--button-skip'/>
          <PlayCircle className='--button-play'/>        
          <SkipNext className='--button-skip'/>
          {/* <RepeatOneOutlined className='--button-repeat'/> */}
          <RepeatOutlined className='--button-repeat'/>
        </div>
        <div className='player__content-center__bottom'>
          <span className='player__content-center__bottom__time'>0:00</span>
          <Slider className='--slider'/>
          <span className='player__content-center__bottom__time'>{miEstado?.timeDuration}</span>
        </div>
      </div>

      <div className='player__content-rigth'>
        <QueueMusic className='--queue'/>
        <VolumeDown className='--volume'/>
        <Slider className='--slider'/>
      </div>
    </div>
  )
}
