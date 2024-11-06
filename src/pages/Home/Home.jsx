import React from 'react';

import bgHeader from '../../assets/bg-header-cortado.png';
import tailine from '../../assets/tailine.png';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import './Home.css';  // Importa o CSS da Home

function Home() {
    return (
        <div className="home">
            <Menu/>
            <section className="banner">
                <div className='div-banner'>
                    <h1 className='h1-banner'>STUDIO TAILINE</h1>
                    <h6 className='h6-banner'>Realçando sua beleza, uma sobrancelha de cada vez, no Studio Tailine.</h6>
                </div>
                <img src={bgHeader} alt="Banner" className="banner-image" />
            </section>

            <h1 class="texto-servicos">Serviços Oferecidos</h1>

            <section className="container">
                <div className="card-home">
                    <div className="div-card-texto">
                        <h2>SOBRANCELHAS</h2>
                        <p>FEMININO / MASCULINO</p>
                        <p>SIMPLES</p>
                        <p>com henna</p>
                        <p>Com coloração</p>
                    </div>
                    <div className="div-card-button">
                        <a href="" className="button">SAIBA MAIS</a>
                    </div>
                </div>

                <div className="card-home">
                    <div className="div-card-texto">
                        <h2>BROW LAMINATION</h2>
                        <p>Técnica utilizada para estilizar os fios, deixando-os volumosos e disfarçando possíveis falhas.</p>
                        <p className="font-medium">Mais alinhadas ou mais selvagens, você escolhe!</p>
                    </div>
                    <div className="div-card-button">
                        <a href="" className="button">SAIBA MAIS</a>
                    </div>    
                </div>

                <div className="card-home">
                    <div className="div-card-texto">
                        <h2>MICROPIGMENTAÇÃO</h2>
                        <h2 className="font-medium">slim brows</h2>
                        <p>um resultado mais leve, delicado e com fios precisos para um efeito mais suave.</p>
                        <p class="font-medium">Feito com dermógrafo e anestésico zero dor.</p>
                    </div>
                    <div className="div-card-button">
                        <a href="" className="button">SAIBA MAIS</a>
                    </div>
                </div>

                <div className="card-home">
                    <div className="div-card-texto">
                        <h2>LASH LIFTING</h2>
                        <p>Com produtos específicos, o procedimento levanta os cílios naturais, criando uma curvatura acentuada.</p>
                        <p>Além do outro benefício é que a técnica pinta, hidrata e reconstrói os cílios!</p>
                    </div>
                    <div className="div-card-button">
                        <a href="" className="button">SAIBA MAIS</a>
                    </div>
                </div>

                <div className="card-home">
                    <div className="div-card-texto">
                        <h2>DERMAPLANING</h2>
                        <p>Esse procedimento é feito com lâmina ou bisturi, promovendo uma esfoliação leve na pele.</p>
                        <p>Ele remove células mortas e pelos finos, revelando uma pele mais macia e suave.</p>
                    </div>
                    <div className="div-card-button">
                        <a href="" className="button">SAIBA MAIS</a>
                    </div>
                </div>

                <div className="card-home">
                    <div className="div-card-texto">
                        <h2>Curso presencial</h2>
                        <p>Domine as duas técnicas que estão bombando na estética e se torne uma profissional de sucesso!</p>
                    </div>
                    <div className="div-card-button">
                        <a href="" className="button">SAIBA MAIS</a>
                    </div>
                </div>
            </section>
            <section className="tailine-fundo">
                <div className="fundo-cor">
                    <div className="content">
                        <p className="name">Tailine Oliveira</p>
                        <img src={tailine} alt="Tailine Oliveira" className="img-tailine" />
                    </div>

                    <div className="description">
                        <p className="subtitle">DESIGNER DE SOBRANCELHAS E MICROPIGMENTADORA DESDE 2016</p>
                        <p className="text">Estou no ramo da beleza há 8 anos, com o objetivo de fazer você encontrar a sua melhor versão, promovendo seu bem-estar por meio de um atendimento personalizado.</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;