import React, {useState} from 'react';
import axios from 'axios';
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
    <main>
      <div id="parallelogram"></div>
      <section>
        <form onSubmit={handleSubmit}>

          <h1>Login</h1>

          <fieldset>
            <div className="container"> 
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></input>
              <label htmlFor="email">Email</label>    
            </div>
          </fieldset>

          <fieldset>
            <div className="container"> 
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required></input>
              <label htmlFor="password">Senha</label>     
            </div>     
          </fieldset>

          <fieldset>
            <button type="submit">Entrar</button>
          </fieldset>   

        </form>
    </section>
  </main>
  );
}

export default Login;