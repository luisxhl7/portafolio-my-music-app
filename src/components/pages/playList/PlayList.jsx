import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaylistById_thunks } from '../../../store/thunks/playlist-by-id-thunks'
import './PlayList.scss'
import { Image } from '../../atoms/image'
import { useParams } from 'react-router-dom'
import { CardPlaylist } from '../../molecules/CardPlaylist/CardPlaylist'

export const PlayList = () => {
  const dispatch = useDispatch();
  const {playlist, playlistLoad} = useSelector( (state) => state.playlistById);
  const {id} = useParams()

  useEffect(() => {
    dispatch(getPlaylistById_thunks(id))
  }, [id])
  


  return (
    <div className='playlist'>
      {playlistLoad ? 
      <></>
      :
      <>
        <div className='playlist__info'>
          <Image
            src={playlist?.images[0]?.url}
            alt={playlist?.name}
            className='--image-playlist'
          />
          <div>
            <span>{playlist?.name}</span>
            <h1>{playlist?.name}</h1>
            <p>{playlist?.name}</p>
            <div>
              {playlist?.type}
              <br />
              {playlist?.tracks?.total} canciones
            </div>
          </div>
        </div>
        <div className='playlist__list'>
          {playlist?.tracks?.items.map( (item, idx) => (
            <CardPlaylist
              key={item?.track?.id}
              position={idx}
              image={item?.track?.album?.images[0]?.url}
              musicName={item?.track?.name}
              artistName={item?.track?.artists[0]?.name}
              albumName={item?.track?.album?.name}
              duration_ms={item?.track.duration_ms}
            />
          ))}
        </div>
      </>
      }
    </div>
  )
}
