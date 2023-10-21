import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { getUser_thunks } from '../../../store/thunks/user-thunks'
import fondoGrey from '../../../assets/images/fondo-gris.png'
import { Image } from '../../atoms/image'
import './MainView.scss'

export const MainView = () => {
  const dispatch = useDispatch()
  const [scrolled, setScrolled] = useState(false);
  const {user, load} = useSelector((state) => state.user);
  const navigate = useNavigate()

  const onLogout = async() => {
    await localStorage.clear()
    await navigate('/login', {
      replace: true
    })
    window.location.reload()
  }

  const onNavigateBack = () => {
    navigate(-1);
  }


  useEffect(() => {
    dispatch( getUser_thunks() )
  }, [dispatch]);

  useEffect(() => {
    const scrollableContainer = document.querySelector('.PageLoyaut__body-content');

    const handleScroll = () => {
      if (scrollableContainer.scrollTop > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    scrollableContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollableContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mainViewClass = scrolled ? 'MainView scrolled' : 'MainView';

  return (
    <header className={mainViewClass}>
      <div>
        <span
          title='Volver'
          className='MainView__icon-back'
          onClick={onNavigateBack}
        >
          <ArrowBackIosNewIcon/>
        </span>
      </div>

      {load ?
        <Image 
          src={fondoGrey} 
          className={'--image-user'}
          onClick={onLogout} 
        />
        :
        <Image 
          src={user?.images[0]?.url} 
          className={'--image-user'}
          alt={user?.display_name} 
          title={user?.display_name}
          onClick={onLogout} 
        />
      }
    </header>
  )
}
