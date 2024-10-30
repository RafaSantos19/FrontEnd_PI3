import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Perfil.css';
import logoLogin from '../../assets/login.svg';

function Perfil() {
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('URL_DA_API_USER', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return alert("Usuário não autenticado.");

      localStorage.setItem('Teste', 'batata quente')
      alert("TESTE: ", localStorage.getItem('Teste'))

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

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <section className='section-perfil'>
      <div className='div-perfil'>
        <div className='dados-editaveis-perfil'>
          <div className='div-foto-perfil'>
            <h1>Foto de perfil</h1>
            <img src={logoLogin} alt="Foto de perfil" />
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
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
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
                  onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
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
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="container-perfil">
                <input
                  type="tel"
                  maxLength="14"
                  id="phone"
                  name="phone"
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  required
                />
                <label htmlFor="phone">Telefone</label>
              </div>
            </fieldset>
            <a href='#' className='a-perfil'>Altere sua senha</a>
            <fieldset className='fieldset-perfil'>
              <div className="container-perfil">
                <button>Editar</button>
              </div>
              <div className="container-perfil">
                <button>Salvar</button>
              </div>
              <div className="container-perfil">
                <button onClick={handleDeleteAccount}>Deletar</button> {/* Botão Deletar */}
              </div>
            </fieldset>
          </div>
        </div>
        <div className='historico-perfil'>
          <h1>Histórico</h1>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
