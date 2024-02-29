import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
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
import images from '../../../assets/images';
import './Player.scss'


export const Player = () => {
  const {player, playerLoad} = useSelector((state) => state.player);

  const [miEstado, setMiEstado] = useState(player ? player : JSON.parse(localStorage.getItem(('playTrack'))));

  useEffect(() => {
    if (player) {
      setMiEstado(player)
    }
  }, [player])
  

  return (
    <div className='player'>
      
      <div className='player__content-left'>
        <div className={`player__content-left__content-image ${playerLoad ? '--load' : ''}`}>
          {
            playerLoad ?
            <></>
            :
            <Image 
              src={miEstado?.image ? miEstado?.image : images.imageLogin}
              className='image-player'
            />
          }
        </div>
        <div className={`player__content-left__content-text`}>
          <h3 className={`player__content-left__content-text__title ${playerLoad ? '--load' : ''}`}>
            {playerLoad ? '' : miEstado?.musicName}
          </h3>
          <span>
            <p className={playerLoad ? '--load' : ''}>
              {playerLoad ? '' : miEstado?.artistName}
            </p>
          </span>
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

      <div className='player__content-right'>
        <QueueMusic className='--queue'/>
        <VolumeDown className='--volume'/>
        <Slider className='--slider'/>
      </div>
    </div>
  )
}
