import React from 'react'
import'./button.scss'

export const Button = ({ children, className, onClick }) => { 
    return (
        <button 
            onClick   = { onClick }
            className = { `button ${className}` }
        >
            { children }
        </button>
    )
}
