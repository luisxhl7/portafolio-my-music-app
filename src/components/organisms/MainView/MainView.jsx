import React, { useEffect } from 'react'
import './MainView.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getUser_thunks } from '../../../store/thunks/user-thunks';
import { Image } from '../../atoms/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



export const MainView = () => {
  const dispatch = useDispatch()
  const {user, load} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch( getUser_thunks() )
  }, [dispatch]);

  return (
    <header className='MainView'>
      <div>
        <span className='MainView__icon-back' title='Volver'>
          <ArrowBackIosNewIcon/>
        </span>
      </div>

      {load ?
        <>cargando</>
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
