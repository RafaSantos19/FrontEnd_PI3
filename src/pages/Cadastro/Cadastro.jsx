import React, {useState} from 'react'
import axios from 'axios'
import './Cadastro.css'

/*
TODO:
FAZER VALIDAÇÃO PARA SENHA FORTE - SE A SENHA FOR FRACA A PROPRIA API TRAVA ( =
*/

function Cadastro() {

const [formData, setFormData] = useState({
  name: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  conPassword: ''
});

const handleChange = (e) =>{
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
}

const handleSubmit = (e) => {
  e.preventDefault();

  if(formData.password !== formData.conPassword){
    alert('As senhas não coincidem!');
    return;
  }

  axios.post('http://localhost:8080/user/create', formData).then( (response) => {
    if(response.status === 201){
      alert('Usuário cadastrado com sucesso!')
      setFormData({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        conPassword: ''
      });
    }
  }).catch( (err) => {
    console.error('Erro ao cadastrar usuário: ', err);
    alert('Erro ao cadastrar usuário. Tente novamente.');
  });
};

  return (
    <div className='main-div'>
      <div id="parallelogram"></div>
      <section>
        <form onSubmit={handleSubmit}>

          <h1>Crie a sua conta</h1>

          <fieldset>
            <div className="container">     
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required></input>
              <label htmlFor="name">Nome</label>
            </div>
            <div className="container">
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required></input>
              <label htmlFor="lastName">Sobrenome</label>    
            </div>
          </fieldset>

          <fieldset>
            <div className="container"> 
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></input>
              <label htmlFor="email">Email</label>    
            </div>
            <div className="container"> 
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required></input>
              <label htmlFor="phone">Telefone</label>     
            </div>
          </fieldset>

          <fieldset>
            <div className="container"> 
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required></input>
              <label htmlFor="password">Senha</label>     
            </div>
            <div className="container"> 
              <input type="password" id="conPassword" name="conPassword" value={formData.conPassword} onChange={handleChange} required></input>
              <label htmlFor="conPassword">Confirme a Senha</label> 
            </div>       
          </fieldset>

          <fieldset>
            <div id="check">
              <input type="checkbox" id="accept" name="accept" required></input>
              <label htmlFor="accept">Aceitar os termos de uso</label>  
            </div>
            <button type="submit">Cadastrar</button>
          </fieldset>  

          <a href="#">Ler termos de uso</a>

        </form>
    </section>
  </div>
  )
}
export default Cadastro