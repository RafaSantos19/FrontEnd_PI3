import React from 'react';
import './perfil.css';
import logoLogin from '../../assets/login.svg';

function Perfil() {
  return (
    <section className='section-perfil'>
      <div className='div-perfil'>
        <div className='dados-editaveis-perfil'>
          <div className='div-foto-perfil'>
            <h1>Foto de perfil</h1>
            <img src={logoLogin}></img>
          </div>
          <div className='div-dados-perfil'>
              <h1>Dados Gerais</h1>
              <fieldset className='fieldset-perfil'>
                <div className="container-perfil">
                  <input type="text" id="name" name="name" required></input>
                  <label htmlFor="name">Nome</label>
                </div>
                <div className="container-perfil">
                  <input type="text" id="lastName" name="lastName" required></input>
                  <label htmlFor="lastName">Sobrenome</label>
                </div>
              </fieldset>
              <fieldset className='fieldset-perfil'>
                <div className="container-perfil">
                  <input type="text" id="email" name="email" required></input>
                  <label htmlFor="email">Email</label>
                </div>
                <div className="container-perfil">
                  <input type="tel" maxLength="14" id="phone" name="phone" required></input>
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
          <h1>Historico</h1>
        </div>
      </div>
    </section>
  );
}

export default Perfil;