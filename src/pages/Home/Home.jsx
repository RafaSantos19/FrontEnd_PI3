import React from 'react';
import './Home.css';  // Importa o CSS da Home
import bgHeader from '../../assets/bg-header1.png'; // Importe a imagem do banner

function Home() {
  return (
    <div className="home">
      <section className="banner">
        <img src={bgHeader} alt="Banner" className="banner-image" />
      </section>
    </div>
  );
}

export default Home;