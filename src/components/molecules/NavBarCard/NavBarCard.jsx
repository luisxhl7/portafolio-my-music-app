import React from 'react'
import { Image } from '../../atoms/image'
import fondoGrey from '../../../assets/images/fondo-gris.png'
import './NavBarCard.scss'

export const NavBarCard = ({image, title, description, id, category, closeNavBar, load}) => {

    const handleGetContent = () => {
        console.log(id)
    }


  return (
    <li 
        className='NavBarCard'
        onClick={handleGetContent}
        title={title}
    >
        <Image
            className={`--image-NavBarCard ${!description && '--radius-image'}`}
            src={image ? image : fondoGrey}
            alt= {title}
            title= {title}
        />
        {!closeNavBar &&
            <div>
                <p className={`NavBarCard__title ${load ? '--load' : ''}`}>{title}</p>
                <p className={`NavBarCard__description ${load ? '--load' : ''}`}> {category} {description && `• ${description}`} </p>
            </div>
        }
    </li>
  )
}
