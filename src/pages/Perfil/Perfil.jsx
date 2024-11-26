import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Perfil.css';
import logoLogin from '../../assets/login.svg';
import Menu from '../../components/Menu/Menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Perfil() {
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [updatePassword, setUpdatePassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteEventModal, setShowDeleteEventModal] = useState(false);
  const [userEvents, setUserEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]})${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userPhone');
    window.location.href = '/login';
  };

  const handleUpdatePassword = () => {
    axios.post('http://localhost:8080/user/forgot-password', { email: resetEmail }).then((response) => {
      toast.success('Email de alteração enviado!', { theme: 'colored', autoClose: 6000 });
      setUpdatePassword(false);
    }).catch((err) => {
      console.error('Erro ao enviar email de alteração: ', err);
      toast.error('Erro ao enviar email de alteração. Verifique o email inserido.', { theme: 'colored', autoClose: 6000 });
    });
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:8080/user/get', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formattedPhone = formatPhone(value);
      setUserData((prevData) => ({
        ...prevData,
        [name]: formattedPhone
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.put('http://localhost:8080/user/update', userData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Dados atualizados com sucesso!", { theme: 'colored', autoClose: 6000 });
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário:", error);
      toast.error("Erro ao atualizar os dados.", { theme: 'colored', autoClose: 6000 });
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return toast.error("Usuário não autenticado.", { theme: 'colored', autoClose: 6000 });

      await axios.delete('http://localhost:8080/user/delete', {
        headers: { Authorization: `Bearer ${token}` }
      });

      toast.success("Conta deletada com sucesso.", { theme: 'colored', autoClose: 6000 });
      handleLogout(); // Desloga o usuário após a exclusão da conta
    } catch (error) {
      console.error("Erro ao deletar a conta:", error);
      toast.error("Erro ao deletar a conta.", { theme: 'colored', autoClose: 6000 });
    }
  };

  const fetchUserEvents = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get(`http://localhost:8080/calendar/list-user-events`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { email: userData.email }
      });
      setUserEvents(response.data);
    } catch (error) {
      console.error("Erro ao buscar agendamentos do usuário:", error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`http://localhost:8080/calendar/delete-events`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { eventId: eventId }
      });
      toast.success("Agendamento deletado com sucesso!", { theme: 'colored', autoClose: 6000 });
      setUserEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId)); // Remove o evento do estado
    } catch (error) {
      console.error("Erro ao deletar agendamento:", error);
      toast.error("Erro ao deletar o agendamento.", { theme: 'colored', autoClose: 6000 });
    }
  };

  const openPasswordModal = () => {
    setResetEmail(userData.email);
    setUpdatePassword(true);
  };

  const confirmDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  const confirmDeleteEvent = (eventId) => {
    setShowDeleteEventModal(true);
    setSelectedEventId(eventId); // Armazena o ID do evento selecionado
  };

  useEffect(() => {
    fetchUserData();
    if (userData.email) {
      fetchUserEvents();
    }
  }, [userData.email]);

  return (
    <section className='section-perfil'>
      <Menu />
      <div className='div-perfil'>
        <div className='dados-editaveis-perfil'>
          <div className='div-foto-perfil'>
            <center><h1>Foto de perfil</h1></center>
            <img src={logoLogin} alt="Foto de perfil" />
            <div className="container-perfil">
              <button onClick={handleLogout}>Sair</button>
            </div>
          </div>
          <div className='div-dados-perfil'>
            <center><h1>Dados Gerais</h1></center>
            <fieldset className='fieldset-perfil'>
              <div className="container-perfil">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="name">Nome</label>
              </div>
              <div className="container-perfil">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="lastName">Sobrenome</label>
              </div>
            </fieldset>
            <fieldset className='fieldset-perfil'>
              <div className="container-perfil">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  readOnly
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="container-perfil">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  maxLength={14}
                  value={userData.phone}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="phone">Telefone</label>
              </div>
            </fieldset>
            <a href='#' onClick={openPasswordModal} className='a-perfil'>Altere sua senha</a>
            <fieldset className='fieldset-perfil'>
              <div className="container-perfil">
                <button onClick={handleSave}>Salvar Edições</button>
              </div>
              <div className="container-perfil">
                <button onClick={confirmDeleteAccount}>Deletar Conta</button> {/* Botão para abrir o modal */}
              </div>
            </fieldset>
          </div>
        </div>
        <div className='historico-perfil'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Agenda</h1>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: '10px', color: '#4285F4', textDecoration: 'none' }}
            >
              <span className="material-icons" style={{ fontSize: '24px' }}>event</span>
            </a>
          </div>
          <br />
          {userEvents.length > 0 ? (
            <div className="cards-container-perfil">
              {userEvents.map((event) => (
                <center>
                  <div className="event-card-perfil" key={event.id}>
                    <div className='title-card-perfil'>
                      <h3>{event.summary}</h3>
                    </div>
                    <div className='content-card-perfil'>
                      <p>
                        <strong>Cliente:</strong> {event.description.split('Telefone:')[0].trim()}
                      </p>
                      <p>
                        <strong>Telefone:</strong> {event.description.split('Telefone:')[1].trim()}
                      </p>
                      <p>
                        <strong>Início:</strong> {new Date(event.startDateTime).toLocaleString()}
                      </p>
                      <p>
                        <strong>Fim:</strong> {new Date(event.endDateTime).toLocaleString()}
                      </p>
                      <center><button onClick={() => confirmDeleteEvent(event.id)}>Cancelar</button></center>
                    </div>
                  </div>
                </center>
              ))}
            </div>
          ) : (
            <p>Você não possui agendamentos no momento.</p>
          )}
        </div>
      </div>

      {updatePassword && (
        <div className="modal_perfil">
          <div className="modal-content_perfil">
            <h2>Alterar Senha</h2>
            <input
              type="email"
              placeholder="Digite seu email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button onClick={handleUpdatePassword}>Enviar Email para Alteração</button>
            <button onClick={() => setUpdatePassword(false)}>Fechar</button>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal_perfil">
          <div className="modal-content_perfil">
            <h2>Confirmar Exclusão</h2>
            <p>Tem certeza de que deseja deletar sua conta? Esta ação é irreversível.</p>
            <button onClick={() => handleDeleteAccount}>Confirmar</button>
            <button onClick={() => setShowDeleteModal(false)}>Cancelar</button>
          </div>
        </div>
      )}

      {showDeleteEventModal && (
        <div className="modal_perfil">
          <div className="modal-content_perfil">
            <h2>Confirmar Cancelamento</h2>
            <p>Tem certeza de que deseja cancelar este agendamento? Esta ação é irreversível.</p>
            <button onClick={() => {
              handleDeleteEvent(selectedEventId);
              setShowDeleteEventModal(false);
            }}>Confirmar</button>
            <button onClick={() => setShowDeleteEventModal(false)}>Fechar</button>
          </div>
        </div>
      )}
      <ToastContainer />
    </section>
  );
}

export default Perfil;
