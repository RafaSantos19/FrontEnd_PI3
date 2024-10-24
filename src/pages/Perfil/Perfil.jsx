import React, { useState, useEffect } from 'react'; // Importação dos hooks
import axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Importação do Firebase Auth
import './perfil.css';
import logoLogin from '../../assets/login.svg'; // Verifique se o caminho da imagem está correto

function Perfil() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    // Detecta mudanças no estado de autenticação
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);

        // Obtém o token JWT do usuário autenticado
        user.getIdToken().then((token) => {
          // Faz a requisição para o backend com o token JWT
          axios.get(`http://localhost:8080/user/profile/${user.uid}`, {
            headers: {
              Authorization: `Bearer ${token}` // Inclui o token JWT no cabeçalho da requisição
            }
          })
          .then(response => {
            const userData = response.data;
            setFormData({
              name: userData.name,
              lastName: userData.lastName,
              email: userData.email,
              phone: userData.phone,
            });
          })
          .catch(err => {
            console.error('Erro ao buscar o perfil do usuário: ', err);
          });
        }).catch(err => {
          console.error('Erro ao obter o token: ', err);
        });
      } else {
        console.log('Nenhum usuário autenticado');
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section className='section-perfil'>
      <div className='div-perfil'>
        <div className='dados-editaveis-perfil'>
          <div className='div-foto-perfil'>
            <h1>Foto de perfil</h1>
            <img src={logoLogin} alt="Foto de perfil" /> {/* Inclua o 'alt' para acessibilidade */}
          </div>
          <div className='div-dados-perfil'>
            <h1>Dados Gerais</h1>
            <fieldset className='fieldset-perfil'>
              <div className="container-perfil">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name} // Controla o valor do input
                  onChange={handleChange} // Atualiza o estado ao mudar o valor
                  required
                />
                <label htmlFor="name">Nome</label>
              </div>
              <div className="container-perfil">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName} // Controla o valor do input
                  onChange={handleChange}
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
                  value={formData.email} // Controla o valor do input
                  onChange={handleChange}
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
                  value={formData.phone} // Controla o valor do input
                  onChange={handleChange}
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