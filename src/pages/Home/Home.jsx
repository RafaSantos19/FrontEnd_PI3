import React from 'react';

import bgHeader from '../../assets/bg-header1.png';
import tailine from '../../assets/tailine.png';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import './Home.css';  // Importa o CSS da Home

function Home() {
    return (
        <div className="home">
            <Menu/>
            <section className="banner">
                <img src={bgHeader} alt="Banner" className="banner-image" />
            </section>

            <h1 class="texto-servicos">Serviços Oferecidos</h1>

            <section className="container">
                <div className="card-home">
                    <h2>SOBRANCELHAS</h2>
                    <p>FEMININO / MASCULINO</p>
                    <p>SIMPLES</p>
                    <p>com henna</p>
                    <p>Com coloração</p>
                    <a href="" className="button">SAIBA MAIS</a>
                </div>

                <div className="card-home">
                    <h2>BROW LAMINATION</h2>
                    <p>Técnica utilizada para estilizar os fios, deixando-os volumosos e disfarçando possíveis falhas.</p>
                    <p className="font-medium">Mais alinhadas ou mais selvagens, você escolhe!</p>
                    <a href="" className="button">SAIBA MAIS</a>
                </div>

                <div className="card-home">
                    <h2>MICROPIGMENTAÇÃO</h2>
                    <h2 className="font-medium">slim brows</h2>
                    <p>um resultado mais leve, delicado e com fios precisos para um efeito mais suave.</p>
                    <p class="font-medium">Feito com dermógrafo e anestésico zero dor.</p>
                    <a href="" className="button">SAIBA MAIS</a>
                </div>

                <div className="card-home">
                    <h2>LASH LIFTING</h2>
                    <p>Com produtos específicos, o procedimento levanta os cílios naturais, criando uma curvatura acentuada.</p>
                    <p>Além do outro benefício é que a técnica pinta, hidrata e reconstrói os cílios!</p>
                    <a href="" className="button">SAIBA MAIS</a>
                </div>

                <div className="card-home">
                    <h2>DERMAPLANING</h2>
                    <p>Esse procedimento é feito com lâmina ou bisturi, promovendo uma esfoliação leve na pele.</p>
                    <p>Ele remove células mortas e pelos finos, revelando uma pele mais macia e suave.</p>
                    <a href="" className="button">SAIBA MAIS</a>
                </div>

                <div className="card-home">
                    <h2>Curso presencial</h2>
                    <p>Domine as duas técnicas que estão bombando na estética e se torne uma profissional de sucesso!</p>
                    <a href="" className="button">SAIBA MAIS</a>
                </div>
            </section>
            <section className="tailine-fundo">
                <div className="fundo-cor fundo-cor-mobile">
                    <div className="content">
                        <p className="name">Tailine Oliveira</p>
                        <img src={tailine} alt="Tailine Oliveira" className="img-tailine" />
                    </div>

                    <div className="description">
                        <p className="subtitle">DESIGNER DE SOBRANCELHAS E<br /> MICROPIGMENTADORA DESDE 2016</p>
                        <p className="text">Estou no ramo da beleza há 8 anos,<br /> com o objetivo de fazer você <br />encontrar a sua melhor versão,<br /> promovendo seu bem-estar por meio<br /> de um atendimento personalizado.</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;