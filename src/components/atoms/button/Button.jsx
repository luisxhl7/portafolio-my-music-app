import React from 'react'
import'./button.scss'

export const Button = ({children, className, onClick}) => {
    
    return (
        <button 
            className={`button ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
