import React from 'react';
import './Menu.css'

function Menu() {
  return (
    <header className='header-menu'>
      <a className='a-logo' href='#'><img src='../../assets/login.svg'></img></a>
      <nav className='nav-menu'>
        <ul className='ul-menu'>
          <li className='li-menu'>
            <a className='a-menu' href="#">About</a>
          </li>
          <li className='li-menu'>
            <a className='a-menu' href="#">Portfolio</a>
          </li>
          <li className='li-menu'>
            <a className='a-menu' href="#">Blog</a>
          </li>
          <li className='li-menu'>
            <a className='a-menu' href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <img className='login-icon-menu' src="../../assets/login.svg"/>
    </header>
  )
}

export default Menu