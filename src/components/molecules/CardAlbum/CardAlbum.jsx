import React, { useEffect, useState } from 'react'
import { minutesConverter } from '../../../utils/minutes-converter'
import { PlayArrow, FavoriteBorderOutlined, Favorite } from '@mui/icons-material'
import fondoGris from '../../../assets/images/fondo-gris.png'
import './CardAlbum.scss'
import SpotifyService from '../../../services/spotify-services'

export const CardAlbum = ({ position, image, musicName, artistName, albumName, duration_ms, id }) => {
    const [isSaved, setisSaved] = useState()
    
    const timeDuration = minutesConverter( duration_ms )

    image = image ? image : fondoGris;

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
        <div className='cardAlbum' onClick={handlePlayTrack}>
            <div className='cardAlbum__content-position'>
                <span>
                    {1 + position}
                </span>
                <PlayArrow/>
            </div>

            <div className='cardAlbum__content-description'>
                <span>
                    {musicName}
                </span>
                <span>
                    {artistName}
                </span>
            </div>
            
            <div className='cardAlbum__content-button-like'>
                <button 
                    title='like'
                    className={`cardAlbum__button-like ${isSaved ? '--actived' : ''}`}
                    onClick={isSaved ? () => handleDeletedTrack(id) : () => handleSavedTrack(id) }
                >
                    {isSaved ?
                        <Favorite/>
                        :
                        <FavoriteBorderOutlined/>
                    }
                </button>
            </div>
            
            <div className='cardAlbum__content-duration'>
                <span>
                    {timeDuration}
                </span>
            </div>
        </div>
    )
}
