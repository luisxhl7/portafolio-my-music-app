import React from 'react'
import './Input.scss'

export const Input = ({type, name, id, placeholder, value, onChange, autoComplete, icon}) => {
  return (
    <div className='input'>
        {icon}
        <input 
            type={type} 
            name={name} 
            id={id}
            className='input__content'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
        />
    </div>
  )
}
