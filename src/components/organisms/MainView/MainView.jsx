import React, { useEffect } from 'react'
import './MainView.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getUser_thunks } from '../../../store/thunks/user-thunks';
import { Image } from '../../atoms/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import fondoGrey from '../../../assets/images/fondo-gris.png'

export const MainView = () => {
  const dispatch = useDispatch()
  const {user, load} = useSelector((state) => state.user);
  
  useEffect(() => {
    dispatch( getUser_thunks() )
  }, [dispatch]);


  return (
    <header className='MainView'>
      <div>
        <span 
          title='Volver'
          className='MainView__icon-back' 
        >
          <ArrowBackIosNewIcon/>
        </span>
      </div>

      {load ?
        <Image 
          src={fondoGrey} 
          className={'--image-user'}
        />
        :
        <Image 
          src={user?.images[0]?.url} 
          className={'--image-user'}
          alt={user?.display_name} 
          title={user?.display_name}
        />
      }
    </header>
  )
}
