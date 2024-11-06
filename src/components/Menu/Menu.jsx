import React, { useState, useEffect } from 'react';
import './Menu.css';
import logo_branca from '../../assets/LOGOTIPO-BRANCA.png';
import logo_perfil from '../../assets/login.svg'

function Menu() {
  const [menuActive, setMenuActive] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Verifica se o token está no localStorage
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Define isLoggedIn como true se o token existir

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-menu ${navbarScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/">
              <img className='logo-menu' src={logo_branca} alt="logo" />
            </a>
          </div>
          <div id="mainListDiv" className={`main_list ${menuActive ? 'show_list' : ''}`}>
            <ul className="navlinks">
                <li><a href="#">Agendamento</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Cursos</a></li>
                <div className='div-nav-perfil'>
                  <li><a href={isLoggedIn ? "/perfil" : "/login"}><img className='nav-logo-perfil' src={logo_perfil} alt='logo perfil'/>{isLoggedIn ? "Perfil" : "Login"}</a></li>
                </div>  
            </ul>
          </div>
          <span className={`navTrigger ${menuActive ? 'active' : ''}`} onClick={handleMenuClick}>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
