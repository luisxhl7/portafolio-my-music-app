import React from 'react'
import './Input.scss'

export const Input = ({ type, name, id, placeholder, value, onChange, autoComplete, icon }) => {
  return (
    <div className='input'>
      { icon }
      <input 
        id           = { id }
        type         = { type } 
        name         = { name } 
        value        = { value }
        onChange     = { onChange }
        className    = 'input__content'
        placeholder  = { placeholder }
        autoComplete = { autoComplete }
      />
    </div>
  )
}
