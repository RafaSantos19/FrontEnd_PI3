import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Perfil.css';
import logoLogin from '../../assets/login.svg';
import Menu from '../../components/Menu/Menu';

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

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]})${match[2]}-${match[3]}`;
    }
    return value;
  };

  //TODO: Melhorar o logout (tirar no backend também)
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  const handleUpdatePassword = () => {
    axios.post('http://localhost:8080/user/forgot-password', { email: resetEmail }).then((response) => {
      alert('Email de alteração enviado!');
      setUpdatePassword(false);
    }).catch((err) => {
      console.error('Erro ao enviar email de alteração: ', err);
      alert('Erro ao enviar email de alteração. Verifique o email inserido.');
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
      alert("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário:", error);
      alert("Erro ao atualizar os dados.");
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return alert("Usuário não autenticado.");

      await axios.delete('http://localhost:8080/user/delete', {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Conta deletada com sucesso.");
      handleLogout(); // Desloga o usuário após a exclusão da conta
    } catch (error) {
      console.error("Erro ao deletar a conta:", error);
      alert("Erro ao deletar a conta.");
    }
  };

  const openPasswordModal = () => {
    setResetEmail(userData.email);
    setUpdatePassword(true);
  };

  const confirmDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <section className='section-perfil'>
      <Menu/>
      <div className='div-perfil'>
        <div className='dados-editaveis-perfil'>
          <div className='div-foto-perfil'>
            <h1>Foto de perfil</h1>
            <img src={logoLogin} alt="Foto de perfil" />
            <div className="container-perfil">
                <button onClick={handleLogout}>Sair</button>
            </div>
          </div>
          <div className='div-dados-perfil'>
            <h1>Dados Gerais</h1>
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
          <center><h1>Agenda</h1></center>
          <br />
          <iframe 
            src="https://calendar.google.com/calendar/u/0/embed?src=426a9c66fdbae0e52a9617b61ac1eb205748e5d0c7f5af1b21fc18fca3ba02cd@group.calendar.google.com&ctz=America/Sao_Paulo"
            style={{ border: 'none', width: '100%', height: '600px' }}
            title="Calendário Google"
          ></iframe>
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
            <button onClick={handleDeleteAccount}>Confirmar</button>
            <button onClick={() => setShowDeleteModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Perfil;
