import React, {useState} from 'react';
import axios from 'axios';
import logoLogin from '../../assets/login.svg'
import './Login.css';

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/user/signin', formData).then( (response) => {
      if(response.status === 200){
        alert('Login realizado com sucesso!');
        window.location.href = '/';
      }
    }).catch( (err) => {
      console.error('Erro ao fazer login: ', err);
      alert('Erro ao fazer login. Verifique suas credenciais');
    });
  }
  
  return (
    <main className='main-login'>
      <div id="parallelogram-login"></div>
      <section className='section-login'>
        <form className='form-login' onSubmit={handleSubmit}>
          <h1 className='h1-login'>Login</h1>
          <fieldset className='fieldset-login'>
            <div className="container-login"> 
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></input>
              <label htmlFor="email">Email</label>    
            </div>
          </fieldset>

          <fieldset className='fieldset-login'>
            <div className="container-login"> 
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required></input>
              <label htmlFor="password">Senha</label>               
            </div>     
          </fieldset>
          <fieldset className='fieldset-login'>
            <button className='button-login' type="submit">Entrar</button>
          </fieldset>       
          <a href='#'>Esqueci a senha</a>  
          <a href='cadastro'>Não tem uma conta? Registre-se</a> 
        </form>
        <img src={logoLogin}></img>
    </section>
  </main>
  );
}

export default Login;