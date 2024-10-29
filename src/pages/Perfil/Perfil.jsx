import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importando Axios
import './Perfil.css';
import logoLogin from '../../assets/login.svg';

function Perfil() {
  // Estado para armazenar os dados do usuário
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: ''
  });

  //TODO:Função de logout -> remover o token e fazer a requisição de singout
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove o token de autenticação
    window.location.href = '/login';
  };

  // Função para buscar os dados do usuário
  const fetchUserData = async () => {
    try {
      const response = await axios.get('URL_DA_API_USER'); // Substitua pela URL da sua API
      setUserData(response.data); // Armazena os dados do usuário no estado
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    }
  };

  // useEffect para buscar os dados quando o componente for montado
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
                  value={userData.name} // Preenche o campo com o nome do usuário
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })} // Atualiza o estado ao mudar
                  required
                />
                <label htmlFor="name">Nome</label>
              </div>
              <div className="container-perfil">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={userData.lastName} // Preenche o campo com o sobrenome do usuário
                  onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} // Atualiza o estado ao mudar
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
                  value={userData.email} // Preenche o campo com o email do usuário
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })} // Atualiza o estado ao mudar
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
                  value={userData.phone} // Preenche o campo com o telefone do usuário
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })} // Atualiza o estado ao mudar
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
