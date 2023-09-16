import React from 'react'
import './NavBarCard.scss'
import { Image } from '../../atoms/image'
export const NavBarCard = ({image, title, description, id, category, closeNavBar}) => {

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
            src={image}
            alt= {title}
            title= {title}
        />
        {!closeNavBar &&
            <div>
                <p className='NavBarCard__title'>{title}</p>
                <p className='NavBarCard__description'> {category} {description && `• ${description}`} </p>
            </div>
        }
    </li>
  )
}
