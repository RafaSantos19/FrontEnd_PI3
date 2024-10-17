import React from 'react'
import './footer.css'
import logoInstagram from '../../assets/instagram-white.png'
import logoTwitter from '../../assets/twitter-white.png'
import logoInstagramBeje from '../../assets/instagram-beje.png'
import logoTwitterBeje from '../../assets/twitter-beje.png'

function Footer() {
  return (
    <footer>
      <div className='container-footer'>
        <div className='div-footer-redes'>
          <h1 className='h1-footer'>Redes</h1>
          <a href='#'><img src={logoInstagram} alt="Logo Instagram" className="logo-instagram" /></a>
          <a href='#'><img src={logoTwitter} alt="Logo Twitter" className="logo-twitter" /></a>
        </div>
        <div className='div-footer'>
          <h1 className='h1-footer'>SERVIÇOS</h1>
          <ul className='ul-footer'>
            <li className='li-footer'>
              <a>SOBRANCELHAS</a>
            </li>
            <li className='li-footer'>
              <a>MICROPIGMENTAÇÃO</a>
            </li>
            <li className='li-footer'>
              <a>BROW LAMINATION</a>
            </li>
            <li className='li-footer'>
              <a>DERMAPLANING</a>
            </li>
            <li className='li-footer'>
              <a>LASH LIFTING</a>
            </li>
          </ul>

        </div>
        <div className='div-footer'>
          <h1 className='h1-footer'>HOME</h1>
          <ul className='ul-footer'>
            <li className='li-footer'>
              <a>O QUE É?</a>
            </li>
            <li className='li-footer'>
              <a>QUEM SOU EU</a>
            </li>
            <li className='li-footer'>
              <a>SERVIÇOS PRESTADOS.</a>
            </li>
          </ul> 
        </div>
        <div className='div-footer'>
          <h1 className='h1-footer'>CURSOS</h1>
          <ul className='ul-footer'>
            <li className='li-footer'>
              <a>TOPICO1</a>
            </li>
            <li className='li-footer'>
              <a>TOPICO2</a>
            </li>
          </ul> 
        </div>
        <div className='div-footer-contato'>
          <h1 className='h1-footer-contatos'>CONTATOS</h1>
        </div>
      </div>
      <div className='div-direitos'>
        <h5>TODOS OS DIREITOS RESERVADOS A @STUDIOTAILINE</h5>
      </div>
    </footer>
  )
}

export default Footer