import React, { useState, useEffect } from 'react';
import './Menu.css';
import logo_branca from '../../assets/LOGOTIPO-BRANCA.png';
import logo_perfil from '../../assets/login.svg';
import AgendamentoModal from '../AgendamentoModal/AgendamentoModal';

function Menu() {
  const [menuActive, setMenuActive] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAgendamentoModal, setShowAgendamentoModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleMenuClick = () => setMenuActive(!menuActive);
  const handleScroll = () => setNavbarScrolled(window.scrollY > 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const token = localStorage.getItem('authToken');
    const email = sessionStorage.getItem('userEmail');

    setIsLoggedIn(!!token);
    setIsAdmin(email === "serginhonerdola@gmail.com");

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-menu ${navbarScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/"><img className="logo-menu" src={logo_branca} alt="logo" /></a>
          </div>
          <div id="mainListDiv" className={`main_list ${menuActive ? 'show_list' : ''}`}>
            <ul className="navlinks">
              <li><a href="#" onClick={() => setShowAgendamentoModal(true)}>Agendamento</a></li>
              <li><a href="/Catalogo">Catálogo</a></li>
              <li><a href="/cursos">Cursos</a></li>

              {/* Botão para /adm, exibido apenas se o usuário for admin */}
              {isAdmin && (
                <li><a href="/adm">Admin</a></li>
              )}

              <div className="div-nav-perfil">
                <li>
                  <a href={isLoggedIn ? "/perfil" : "/login"}>
                    <img className="nav-logo-perfil" src={logo_perfil} alt="logo perfil" />
                    {isLoggedIn ? "Perfil" : "Login"}
                  </a>
                </li>
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

      {showAgendamentoModal && (
        <AgendamentoModal onClose={() => setShowAgendamentoModal(false)} />
      )}
    </header>
  );
}

export default Menu;
