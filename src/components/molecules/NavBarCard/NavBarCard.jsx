import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from '../../atoms/image'
import fondoGrey from '../../../assets/images/fondo-gris.png'
import './NavBarCard.scss'

export const NavBarCard = ({ image, title, description, id, category, closeNavBar, load }) => {

  return (
    <li 
      className='NavBarCard'
      title={title}
    >
      <Link to={!load && `/playlist/${ id }`}>
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
      </Link>
    </li>
  )
}
