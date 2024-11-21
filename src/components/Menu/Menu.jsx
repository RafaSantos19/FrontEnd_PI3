import React, { useState, useEffect } from 'react';
import './Menu.css';
import logo_branca from '../../assets/LOGOTIPO-BRANCA.png';
import logo_perfil from '../../assets/login.svg';
import Calendar from 'react-calendar';

function Menu() {
  const [menuActive, setMenuActive] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAgendamentoModal, setShowAgendamentoModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [service, setService] = useState('servico1');

  const handleMenuClick = () => setMenuActive(!menuActive);
  const handleScroll = () => setNavbarScrolled(window.scrollY > 50);

  const handleAgendar = async () => {
    try {
      const event = {
        email: localStorage.getItem('userEmail'),
        summary: service === 'servico1' ? 'Brow Lamination' : 'Dermaplaning',
        location: 'Local do Serviço',
        description: 'Descrição do Serviço',
        startDateTime: `${selectedDate.toISOString().split('T')[0]}T${selectedTime}:00-03:00`,
        endDateTime: `${selectedDate.toISOString().split('T')[0]}T${selectedTime}:30-03:00`,
      };

      const response = await fetch('http://localhost:8080/calendar/create-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Evento criado com sucesso! Link do evento: ${data.link}`);
        setShowAgendamentoModal(false);
      } else {
        alert('Erro ao criar o evento.');
      }
    } catch (error) {
      console.error('Erro ao criar evento:', error);
      alert('Erro ao criar o evento.');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-menu ${navbarScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/"><img className='logo-menu' src={logo_branca} alt="logo" /></a>
          </div>
          <div id="mainListDiv" className={`main_list ${menuActive ? 'show_list' : ''}`}>
            <ul className="navlinks">
              <li><a href="#" onClick={() => setShowAgendamentoModal(true)}>Agendamento</a></li>
              <li><a href="/Catalogo">Catálogo</a></li>
              <li><a href="/cursos">Cursos</a></li>
              <div className='div-nav-perfil'>
                <li><a href={isLoggedIn ? "/perfil" : "/login"}><img className='nav-logo-perfil' src={logo_perfil} alt='logo perfil' />{isLoggedIn ? "Perfil" : "Login"}</a></li>
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
        <div className="modal_agendamento">
          <div className="modal-content_agendamento">
            <h2>Agendar um Horário</h2>
            <div className='modal-form_agendamento'>
              <label>Serviço</label>
              <br />
              <select value={service} onChange={(e) => setService(e.target.value)}>
                <option value="servico1">Brow Lamination</option>
                <option value="servico2">Dermaplaning</option>
              </select>

              <br /><br />

              <label>Data</label>
              <Calendar className="calendar-agendamento" onChange={setSelectedDate} value={selectedDate} />

              <br />

              <label>Horário</label>
              <br />
              <input type='time' value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
            </div>
            <br /><br />
            <center>
              <button className="button-agendamento" onClick={handleAgendar}>Agendar</button>
              <button className="button-agendamento" onClick={() => setShowAgendamentoModal(false)}>Cancelar</button>
            </center>
          </div>
        </div>
      )}
    </header>
  );
}

export default Menu;
