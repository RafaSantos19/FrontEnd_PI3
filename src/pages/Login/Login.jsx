import React, { useState } from 'react';
import axios from 'axios';
import logoLogin from '../../assets/login.svg';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/user/signin', formData)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token; // Supondo que o token esteja na resposta
          localStorage.setItem('authToken', token); // Armazena o token no localStorage
          console.log(token)
          alert('Login realizado com sucesso!');
          window.location.href = '/';
        }
      })
      .catch((err) => {
        console.error('Erro ao fazer login: ', err);
        alert('Erro ao fazer login. Verifique suas credenciais');
      });
  };

  const handleForgotPassword = () => {
    axios.post('http://localhost:8080/user/forgot-password', { email: resetEmail }).then((response) => {
      alert('Email de recuperação enviado!');
      setForgotPassword(false);
    }).catch((err) => {
      console.error('Erro ao enviar email de recuperação: ', err);
      alert('Erro ao enviar email de recuperação. Verifique o email inserido.');
    });
  };

  return (
    <main className='main-login'>
      <div id="parallelogram-login"></div>
      <section className='section-login'>
        <form className='form-login' onSubmit={handleSubmit}>
          <h1 className='h1-login'>Login</h1>
          <fieldset className='fieldset-login'>
            <div className="container-login">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="email">Email</label>
            </div>
          </fieldset>

          <fieldset className='fieldset-login'>
            <div className="container-login">
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
              <label htmlFor="password">Senha</label>
            </div>
          </fieldset>

          <fieldset className='fieldset-login'>
            <button className='button-login' type="submit">Entrar</button>
          </fieldset>

          <a href="#" onClick={() => setForgotPassword(true)}>Esqueci a senha</a>
          <a href='cadastro'>Não tem uma conta? Registre-se</a>
        </form>
        <img src={logoLogin} alt="Login Logo"></img>

        {forgotPassword && (
          <div className="modal_login">
            <div className="modal-content_login">
              <h2>Recuperar Senha</h2>
              <input
                type="email"
                placeholder="Digite seu email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <button onClick={handleForgotPassword}>Enviar Email de Recuperação</button>
              <button onClick={() => setForgotPassword(false)}>Fechar</button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Login;
