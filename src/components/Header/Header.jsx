import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'
import Gen from '../../assets/images/Header/Patient_24px.svg'
import Log from '../../assets/images/Header/Schedule_24px.svg'


export default function Header() {
  return (
    <header className='header'>
      <div className="header__burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list-item">
            <NavLink to='/' className={({ isActive }) => isActive ? "selected" : "menu__list-item"}><img src={Log} alt="" /></NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink to='/profile' className={({ isActive }) => isActive ? "selected" : "menu__list-item"}><img src={Gen} alt="" /></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
