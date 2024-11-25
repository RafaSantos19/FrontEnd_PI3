import React from 'react';
import './footer.css';
import logoInstagram from '../../assets/instagram-white.png';
import logoTwitter from '../../assets/twitter-white.png';
import logoWhatsapp from '../../assets/whatsapp-white.png';


function Footer() {
  return (
    <footer>
      <div className='container-footer'>        
        <ul className='ul-footer'>
          <li className='li-footer'>
            <h1 className='h1-footer'>Catálogo</h1>
          </li>
          <li className='li-footer'>
            <a href='/Catalogo' className='footer-link'>SOBRANCELHAS</a>
          </li>
          <li className='li-footer'>
            <a href='/Catalogo' className='footer-link'>MICROPIGMENTAÇÃO</a>
          </li>
          <li className='li-footer'>
            <a href='/Catalogo' className='footer-link'>BROW LAMINATION</a>
          </li>
          <li className='li-footer'>
            <a href='/Catalogo' className='footer-link'>DERMAPLANING</a>
          </li>
          <li className='li-footer'>
            <a href='/Catalogo' className='footer-link'>LASH LIFTING</a>
          </li>
        </ul>
          
        <ul className='ul-footer'>
          <li className='li-footer'>
            <h1 className='h1-footer'>HOME</h1>    
          </li>
          <li className='li-footer'>
            <a href='#' className='footer-link'>O QUE É?</a>
          </li>
          <li className='li-footer'>
            <a href='#' className='footer-link'>QUEM SOU EU</a>
          </li>
          <li className='li-footer'>
            <a href='#' className='footer-link'>SERVIÇOS PRESTADOS.</a>
          </li>
        </ul> 
        
        <ul className='ul-footer'>
          <li className='li-footer'>
            <h1 className='h1-footer'>CURSOS</h1>
          </li>
          <li className='li-footer'>
            <a href='/Cursos' className='footer-link'>TOPICO1</a>
          </li>
          <li className='li-footer'>
            <a href='/Cursos' className='footer-link'>TOPICO2</a>
          </li>
        </ul> 

        <div className='div-footer-contatos'>
          <h1 className='h1-footer-contatos'>CONTATOS</h1>
          <div className='div-footer-contatos-img'>
            <a href='#' className='footer-link'><img src={logoInstagram} alt="Logo Instagram" className="logo-instagram" /></a>
            <a href='#' className='footer-link'><img src={logoTwitter} alt="Logo Twitter" className="logo-twitter" /></a>
            <a href='#' className='footer-link'><img src={logoWhatsapp} alt="Logo whatsapp" className="logo-whatsapp" /></a>
          </div>
        </div>
      </div>
      <div className='div-direitos'>
        TODOS OS DIREITOS RESERVADOS A @STUDIOTAILINE
      </div>
    </footer>
  )
}

export default Footer