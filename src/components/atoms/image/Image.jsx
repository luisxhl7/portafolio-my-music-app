import React from 'react'
import './images.scss'

export const Image = ({src, alt, title, className}) => {
    return (
        <figure>
            <img
                className={`image ${className}`} 
                src={src} 
                alt={alt} 
                title={title}
            />
        </figure>
    )
}
