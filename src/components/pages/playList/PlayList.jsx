import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AccessTime } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaylistById_thunks } from '../../../store/thunks/playlist-by-id-thunks'
import { CardPlaylist } from '../../molecules/CardPlaylist'
import { Image } from '../../atoms/image'
import './PlayList.scss'

export const PlayList = () => {

  const dispatch = useDispatch();
  const {playlist, playlistLoad} = useSelector( (state) => state.playlistById);
  const {id} = useParams()

  useEffect(() => {
    dispatch(getPlaylistById_thunks(id))
  }, [id, dispatch])

  return (
    <div className='playlist'>
      {playlistLoad ? 
        <>
        </>
        :
        <>
          <div className='playlist__info'>
            <Image
              src={playlist?.images[0]?.url}
              alt={playlist?.name}
              className='--image-playlist'
            />
            <div className='playlist__info__descriptions'>
              <span>{playlist?.type}</span>
              <h1>{playlist?.name}</h1>
              <p>{playlist?.description}</p>
              <div>
                <span>
                  {playlist?.type} • {' '}
                  {playlist?.tracks?.total} • canciones
                </span>
              </div>
            </div>
          </div>

          <div className='playlist__list'>
            <div className='playlist__list__description'>
              <div className='playlist__list__description__number'>
                <span>
                  #
                </span>
              </div>
              <div className='playlist__list__description__title'>
                <span>
                  Título
                </span>
              </div>
              <div></div>
              <div className='playlist__list__description__album'>
                <span>
                  Álbum
                </span>
              </div>
              <div></div>
              <div className='playlist__list__description__time'>
                <AccessTime/>
              </div>

            </div>
            {playlist?.tracks?.items.map( (item, idx) => (
              <CardPlaylist
                key={item?.track?.id}
                id={item?.track?.id}
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
