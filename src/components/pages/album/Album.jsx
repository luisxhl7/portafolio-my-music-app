import React, { useEffect } from 'react'
import { AccessTime } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAlbumById_thunks } from '../../../store/thunks/album-by-id-thunks'
import { CardAlbum } from '../../molecules/CardAlbum'
import { Image } from '../../atoms/image'
import './Album.scss'

export const Album = () => {
  const dispatch = useDispatch();
  const {album, albumLoad} = useSelector( (state) => state.albumById);
  const {id} = useParams()

  useEffect(() => {
    dispatch(getAlbumById_thunks(id))
  }, [dispatch, id])

  return (
    <div className='album'>
      {albumLoad ? 
        <>
        </>
        :
        <>
          <div className='album__info'>
            <Image
              src={album?.images[0]?.url}
              alt={album?.name}
              className='--image-playlist'
            />
            <div className='album__info__descriptions'>
              <span>{album?.type}</span>
              <h1>{album?.name}</h1>
              <p>{album?.description}</p>
              <div>
                {album?.type} • 
                {' '}{album?.tracks?.total} • canciones
              </div>
            </div>
          </div>

          <div className='album__list'>
            <div className='album__list__description'>
              <div className='album__list__description__number'>
                <span>
                  #
                </span>
              </div>
              <div className='album__list__description__title'>
                <span>
                  Título
                </span>
              </div>
              <div></div>
              <div></div>
              <div className='playlist__list__description__time'>
                <AccessTime/>
              </div>
            </div>
            {album?.tracks?.items.map( (item, idx) => (
              <CardAlbum
                key={item?.id}
                position={idx}
                musicName={item?.name}
                artistName={item?.artists[0]?.name}
                duration_ms={item?.duration_ms}
                id={item?.id}
              />
            ))}
          </div>
        </>
      }
    </div>
  )
}
