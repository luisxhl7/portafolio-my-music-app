import React, { useEffect, useState } from 'react'
import { PlayArrow, FavoriteBorderOutlined, Favorite } from '@mui/icons-material'
import { minutesConverter } from '../../../utils/minutes-converter'
import SpotifyService from '../../../services/spotify-services'
import './CardPlaylist.scss'

export const CardPlaylist = ({ position, image, musicName, artistName, albumName, duration_ms, id }) => {
    const timeDuration = minutesConverter(duration_ms)
    const [isSaved, setisSaved] = useState()

    const track = {
        image,
        musicName,
        artistName,
        timeDuration
    }

    const handlePlayTrack = () => {
        sessionStorage.setItem('playTrack',JSON.stringify(track))
    }

    const handleSavedTrack = async(id) => {
        try {
            const resp = await SpotifyService.savedTrack(id)
            resp.status === 200 && setisSaved(true)
        } catch (error) {
            console.log(error);
        }
    }
    const handleDeletedTrack = async(id) => {
        try {
            const resp = await SpotifyService.deletedTrack(id)
            resp.status === 200 && setisSaved(false)
        } catch (error) {
            console.log(error);
        }
    }

    const hyandleCheckTrack = async(id) => {
        try {
            const resp = await SpotifyService.checkSavedTrack(id)
            setisSaved(resp?.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        hyandleCheckTrack(id)
    }, [id])
    

  return (
    <div className='cardPlaylist' onClick={handlePlayTrack}>
        
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
            <button 
                title='like'
                className={`cardPlaylist__button-like ${isSaved ? '--actived' : ''}`}
                onClick={isSaved ? () => handleDeletedTrack(id) : () => handleSavedTrack(id) }
            >
                {isSaved ?
                    <Favorite/>
                    :
                    <FavoriteBorderOutlined/>
                }
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
