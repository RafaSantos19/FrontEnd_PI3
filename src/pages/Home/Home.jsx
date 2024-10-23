import React from 'react';

import bgHeader from '../../assets/bg-header1.png'; // Importe a imagem do banner
import Menu from '../../components/Menu/Menu';
import './Home.css';  // Importa o CSS da Home
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className="home">
      <Menu></Menu>
      <section className="banner">
        <img src={bgHeader} alt="Banner" className="banner-image" />
      </section>
      <Footer/>
    </div>
  );
}

export default Home;