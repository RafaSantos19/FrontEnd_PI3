import React, { useState } from 'react';
import './Cursos.css'; 
import bgHeader from '../../assets/bg-header-cortado.png';

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
        <section className="banner-cursos">
          <div className='div-banner-cursos'>
            <h1 className='h1-banner-cursos'>STUDIO TAILINE</h1>
            <h6 className='h6-banner-cursos'>Realçando sua beleza, uma sobrancelha de cada vez, no Studio Tailine.</h6>
          </div>
          <img src={bgHeader} alt="Banner" className="banner-image-cursos" />
        </section>
        <section className="nav-header-cursos">
          <h4 className="title-cursos">Cursos</h4>
          <p className="subtitle-cursos">
            Conheça nossos Cursos <br /> Tudo o que precisa para se tornar uma profissional de sucesso!
          </p>
          <a href="#cursos">
            <button className="button-cursos">SAIBA MAIS</button>
          </a>
        </section>
      </header>

      <section id="cursos" className="cursos-section">
        <div className="card-cursos">
          <div className="card-image-cursos">
            <img src="https://lh4.googleusercontent.com/proxy/4MvkX5cfd1I-kwFbJNAosBrU1mozJ3tOcQNN0_gdvNqUgsTJHZOsSi8vLpcpBDK5D0srCffw1cZdNbIdhDje2cah1lmTGJFrFr-2vSkby2afUENzg2YsmsEf5ekHwi4LGQ9aaDPEj3CzDzaqG01XZD1UxXe93oA0y4ArMJMWmmBJvfDRd6NXWYUxTw" alt="card-image" />
          </div>
          <div className="card-content-cursos">
            <h5 className="card-title-cursos">Curso VIP presencial</h5>
            <p className="card-description-cursos">
              - Coffee Break <br />
              - Ambiente climatizado e aconchegante <br />
              - Curso Individual <br />
              - Certificado de conclusão <br />
              - Apostila Impressa e PDF <br />
            </p>
          </div>

          <div className="accordion-container-cursos">
            <div className="accordion-item-cursos">
              <button 
                className="accordion-cursos" 
                onClick={() => toggleAccordion(0)}
              >
                <span className="accordion-title-cursos">Designer de sobrancelha</span>
              </button>
              <div className={`panel-cursos ${activeAccordion === 0 ? 'active' : ''}`}>
                <div className="panel-content-cursos">
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

            <div className="accordion-item-cursos">
              <button 
                className="accordion-cursos" 
                onClick={() => toggleAccordion(1)}
              >
                <span className="accordion-title-cursos">Brow Lamination</span>
              </button>
              <div className={`panel-cursos ${activeAccordion === 1 ? 'active' : ''}`}>
                <div className="panel-content-cursos">
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
