import React from 'react'
import './CardPlaylist.scss'
import { minutesConverter } from '../../../utils/minutes-converter'
import { PlayArrow, FavoriteBorderOutlined } from '@mui/icons-material';

export const CardPlaylist = ({ position, image, musicName, artistName, albumName, duration_ms}) => {
    const timeDuration = minutesConverter(duration_ms)
  return (
    <div className='cardPlaylist'>
        <div className='cardPlaylist__content-position'>
            <span>
                {1 + position}
            </span>
            <PlayArrow/>
        </div> 
        <div className='cardPlaylist__content-image'>
            <img src={image} alt="" width={40} height={40}/>
        </div>
        <div className='cardPlaylist__content-description'>
            <span>
                {musicName}
            </span>
            <span>
                {artistName}
            </span>
        </div>
        <div className='cardPlaylist__content-album'>
            <span>
                {albumName}
            </span>
        </div>
        <div className='cardPlaylist__content-button-like'>
            <button className='cardPlaylist__button-like'>
                <FavoriteBorderOutlined/>
            </button>
        </div>
        <div className='cardPlaylist__content-duration'>
            <span>
                {timeDuration}
            </span>
        </div>
    </div>
  )
}
