import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBarChoise.scss'

export const NavBarChoise = ({title, Icon, link, className, onclick, closeNavBar}) => {
  return (
    <li className='NavBarChoise' title={title}>

      <NavLink 
        to={link && link} 
        className={({isActive}) => `NavBarChoise__description ${className ? className : ''} ${isActive ? '--active' : ''}`}
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
