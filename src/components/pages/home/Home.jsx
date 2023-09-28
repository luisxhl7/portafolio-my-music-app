import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbumsSaved_thunks } from '../../../store/thunks/albums-thunks'
import { getArtists_thunks } from '../../../store/thunks/featured-playlists-thunks'
import { CardCover } from '../../molecules/CardCover'
import './home.scss'

export const Home = () => {
  const dispatch = useDispatch();
  
  const {albums} = useSelector( (state) => state.albums);
  const {featuredPlaylists, loadFeaturedPlaylists} = useSelector( (state) => state.featuredPlaylists);

  useEffect(() => {
    dispatch(getAlbumsSaved_thunks())
  }, [dispatch])

  useEffect(() => {
    dispatch(getArtists_thunks())
  }, [dispatch])
    
  return (
    <>
      <div className='home__content-cards'>
        <h2 className='home__title-section '>Playlists</h2>
        {loadFeaturedPlaylists ?
          Array.from({ length: 9 }, (_, index) => (
            <CardCover
              key={index}
              load={loadFeaturedPlaylists}
            />
          )) 
          :    
          featuredPlaylists?.map( item => (
            <CardCover
              key={item?.id}
              id={item?.id}
              image={item?.images[0].url}
              title={item?.name}
              description={item?.description}
              load={loadFeaturedPlaylists}
              link={'playlist'}
            />
          ))      
        }
      </div>
      
      <div className='home__content-cards'>
        <h2 className='home__title-section'>Álbumes</h2>
        {loadFeaturedPlaylists ?
          Array.from({ length: 18 }, (_, index) => (
            <CardCover
              key={index}
              id={index}
              load={loadFeaturedPlaylists}
            />
          )) :  
          albums?.map( item => (
            <CardCover
              key={item?.id}
              id={item?.id}
              image={item?.images[0].url}
              title={item?.name}
              description={item?.artists[0]?.name}
              link={'album'}
            />
          ))
        }
      </div> 
      
      <div className='home__content-cards'>
        <h2 className='home__title-section'>Álbumes</h2>
        {loadFeaturedPlaylists ?
          Array.from({ length: 18 }, (_, index) => (
            <CardCover
              key={index}
              id={index}
              load={loadFeaturedPlaylists}
            />
          )) :  
          albums?.map( item => (
            <CardCover
              key={item?.id}
              id={item?.id}
              image={item?.images[0].url}
              title={item?.name}
              description={item?.artists[0]?.name}
              link={'album'}
            />
          ))
        }
      </div>     
    </>
  )
}
