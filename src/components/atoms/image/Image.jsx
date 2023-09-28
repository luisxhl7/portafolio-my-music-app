import React from 'react'
import './images.scss'

export const Image = ({ src, alt, title, className }) => {
    return (
        <figure>
            <img
                className={`image ${className}`}
                src={src ? src : ''} 
                alt={alt ? alt : ''} 
                title={title ? title : ''}
            />
        </figure>
    )
}
