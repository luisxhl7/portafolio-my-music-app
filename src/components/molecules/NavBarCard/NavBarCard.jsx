import React from 'react'
import { Image } from '../../atoms/image'
import fondoGrey from '../../../assets/images/fondo-gris.png'
import './NavBarCard.scss'
import { NavLink } from 'react-router-dom'

export const NavBarCard = ({ image, title, description, id, category, closeNavBar, load, typeUrl }) => {

  return (
    <li 
      className='NavBarCard'
      title={title}
    >
      <NavLink
        to={!load && `/${typeUrl}/${ id }`}
        className={({isActive}) => `NavBarCard__link ${isActive ? '--active' : ''}`}
      >
        <Image
          className={`--image-NavBarCard ${description === 'artist' && '--radius-image'}`}
          src={image ? image : fondoGrey}
          alt= {title}
          title= {title}
        />
        {!closeNavBar &&
          <div>
            <p className={`NavBarCard__title ${load ? '--load' : ''}`}>
              {title}
            </p>
            <p className={`NavBarCard__description ${load ? '--load' : ''}`}> 
              {category} {description && `• ${description}`} 
            </p>
          </div>
        }
      </NavLink>
    </li>
  )
}
