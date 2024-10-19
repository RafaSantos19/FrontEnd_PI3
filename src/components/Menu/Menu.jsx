import React, { useState, useEffect } from 'react';
import './Menu.css';
import logo_preta from '../../assets/LOGOTIPO-PRETO.png';
import logo_branca from '../../assets/LOGOTIPO-BRANCA.png';

function Menu() {
  const [menuActive, setMenuActive] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-menu ${navbarScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <a href="/">
              <img className='logo-menu' src={navbarScrolled ? logo_preta : logo_branca} alt="logo" />
            </a>
          </div>
          <div id="mainListDiv" className={`main_list ${menuActive ? 'show_list' : ''}`}>
            <ul className="navlinks">
              <li><a href="#">Agendamento</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Cursos</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="/Cadastro">Cadastro</a></li>
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
