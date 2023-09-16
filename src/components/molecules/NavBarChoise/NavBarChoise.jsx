import React from 'react'
import './NavBarChoise.scss'
import { NavLink } from 'react-router-dom'

export const NavBarChoise = ({title, Icon, link, className, onclick, closeNavBar}) => {
  return (
    <li className='NavBarChoise' title={title}>

      <NavLink 
        to={link && link} 
        className={`NavBarChoise__description ${className ? className : ''}`}
        onClick={onclick}
      >
        {Icon}
        {
          !closeNavBar && 
          <p className='NavBarChoise__text'>{title}</p>
        }
      </NavLink>

    </li>
  )
}
