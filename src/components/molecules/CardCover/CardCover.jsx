import React from 'react'
import { Image } from '../../atoms/image'
import {PlayCircle} from '@mui/icons-material';
import fondoGrey from '../../../assets/images/fondo-gris.png'
import { Link } from 'react-router-dom';
import './CardCover.scss'

export const CardCover = ({id, image, title, description, load, link}) => {
  return (
    <div className={`cardCover ${load ? '--load' :''}`} title={title}>
      <Link to={!load && `/${link}/${ id }`}> 
      
        <div className='cardCover__content-image'>
          <Image
            src={image ? image : fondoGrey}
            alt={title}
            title={title}
            className='--image-card'
          />
          {!load && <PlayCircle/>}
        </div>

        <div>
          <p className={`cardCover__title ${load ? '--load' :''}`}>
            {title}
          </p>
          <p className={`cardCover__description ${load ? '--load' :''}`}>
            {description}
          </p>
        </div>
      
      </Link>
    </div>
  )
}
