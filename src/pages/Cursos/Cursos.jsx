import React, { useState } from 'react';
import './Cursos.css'; 
import bgHeader from '../../assets/bg-header-cortado.png';
import cursosImg from '../../assets/cursos.jpg'
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const Cursos = () => {
  // Usando useState para controlar o estado de abertura de cada acordeão
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    // Se o item clicado já estiver ativo, fecha-o. Caso contrário, abre o novo item.
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <Menu />
      <header>
        <section className="banner-home">
          <div className='div-banner'>
            <h1 className='h1-banner'>STUDIO TAILINE</h1>
            <h6 className='h6-banner'>Realçando sua beleza, uma sobrancelha de cada vez, no Studio Tailine.</h6>
          </div>
          <img src={bgHeader} alt="Banner" className="banner-image" />
        </section>
        <section className="nav-header">
          <h4 className="title">Cursos</h4>
          <p className="subtitle">
            Conheça nossos Cursos <br /> Tudo o que precisa para se tornar uma profissional de sucesso!
          </p>
          <a href="#cursos">
            <button className="button">SAIBA MAIS</button>
          </a>
        </section>
      </header>

      <section id="cursos" className="cursos-section">
        <div className="card">
          <div className="card-image">
            <img src="https://lh4.googleusercontent.com/proxy/4MvkX5cfd1I-kwFbJNAosBrU1mozJ3tOcQNN0_gdvNqUgsTJHZOsSi8vLpcpBDK5D0srCffw1cZdNbIdhDje2cah1lmTGJFrFr-2vSkby2afUENzg2YsmsEf5ekHwi4LGQ9aaDPEj3CzDzaqG01XZD1UxXe93oA0y4ArMJMWmmBJvfDRd6NXWYUxTw" alt="card-image" />
          </div>
          <div className="card-content">
            <h5 className="card-title">Curso VIP presencial</h5>
            <p className="card-description">
              - Coffee Break <br />
              - Ambiente climatizado e aconchegante <br />
              - Curso Individual <br />
              - Certificado de conclusão <br />
              - Apostila Impressa e PDF <br />
            </p>
          </div>

          <div className="accordion-container">
            <div className="accordion-item">
              <button 
                className="accordion" 
                onClick={() => toggleAccordion(0)}
              >
                <span className="accordion-title">Designer de sobrancelha</span>
              </button>
              <div className={`panel ${activeAccordion === 0 ? 'active' : ''}`}>
                <div className="panel-content">
                  Para iniciantes da área da estética ou aperfeiçoamento nas técnicas de design de sobrancelhas, aplicação de henna e coloração! <br />
                  Profissão que vem ganhando muito destaque nos últimos anos, trazendo muito sucesso e sua independência financeira. <br />
                  - Carga horária: 12 horas <br />
                  - Aula teórica e prática em modelos <br />
                  - Certificado de conclusão <br />
                  - Apostila Impressa <br />
                  + bônus!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button 
                className="accordion" 
                onClick={() => toggleAccordion(1)}
              >
                <span className="accordion-title">Brow Lamination</span>
              </button>
              <div className={`panel ${activeAccordion === 1 ? 'active' : ''}`}>
                <div className="panel-content">
                  Trazendo naturalidade, volume e um design personalizado, é a tendência de 2024 entre as famosas! Curso indicado para quem já é profissional da área de sobrancelhas <br />
                  - Carga Horária: 6 horas <br />
                  - Apostila PDF <br />
                  - Teórica e prática em modelos <br />
                  - Certificado de conclusão <br />
                  + bônus!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cursos;
