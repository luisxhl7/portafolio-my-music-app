import React, { useEffect, useState } from 'react'
import { Slider } from '@mui/material';
import {
  SkipNext, 
  SkipPrevious, 
  ShuffleOutlined, 
  RepeatOutlined, 
  QueueMusic,
  VolumeDown,
  PlayCircle
} from '@mui/icons-material';
import { Image } from '../../atoms/image'
import './Player.scss'


export const Player = () => {

  const [miEstado, setMiEstado] = useState(JSON.parse(sessionStorage.getItem(('playTrack'))));

  const handlesessionStorageChange = (e) => {
    if (e.key === 'playTrack') {
      setMiEstado(e.newValue);
    }
  };
  
  useEffect(() => {
    
    window.addEventListener('storage', handlesessionStorageChange);

    return () => {
      window.removeEventListener('storage', handlesessionStorageChange);
    };
  }, []);

  return (
    <div className='player'>
      
      <div className='player__content-left'>
        <div className='player__content-left__content-image'>
          {miEstado &&
            <Image 
              src={miEstado?.image}
              className='image-player'
            />
          }
        </div>
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
