import React from 'react';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import relogioIcon from '../../assets/relogio1.png'
import './Catalogo.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import dermaplaning1 from '../../assets/catalogoImages/dermaplaning/dermaplaning1.jpg';
import dermaplaning2 from '../../assets/catalogoImages/dermaplaning/dermaplaning2.jpg';
import dermaplaning3 from '../../assets/catalogoImages/dermaplaning/dermaplaning3.jpg';

import slimBrows1 from '../../assets/catalogoImages/slimBrows/slimBrows1.jpg';
import slimBrows2 from '../../assets/catalogoImages/slimBrows/slimBrows2.jpg';
import slimBrows3 from '../../assets/catalogoImages/slimBrows/slimBrows3.jpg';

import softShadow1 from '../../assets/catalogoImages/softShadow/softShadow1.jpg';
import softShadow2 from '../../assets/catalogoImages/softShadow/softShadow2.jpg';
import softShadow3 from '../../assets/catalogoImages/softShadow/softShadow3.jpg';

import lashLifting1 from '../../assets/catalogoImages/lashLifting/lashLifting1.jpg';
import lashLifting2 from '../../assets/catalogoImages/lashLifting/lashLifting2.jpg';
import lashLifting3 from '../../assets/catalogoImages/lashLifting/lashLifting3.jpg';

import browLamination1 from '../../assets/catalogoImages/browLamination/browLamination1.jpg';
import browLamination2 from '../../assets/catalogoImages/browLamination/browLamination2.jpg';
import browLamination3 from '../../assets/catalogoImages/browLamination/browLamination3.jpg';

import designColoracao1 from '../../assets/catalogoImages/designColoracao/designColoracao1.jpg';
import designColoracao2 from '../../assets/catalogoImages/designColoracao/designColoracao2.jpg';
import designColoracao3 from '../../assets/catalogoImages/designColoracao/designColoracao3.jpg';

import designHenna1 from '../../assets/catalogoImages/designHenna/designHenna1.jpg';
import designHenna2 from '../../assets/catalogoImages/designHenna/designHenna2.jpg';
import designHenna3 from '../../assets/catalogoImages/designHenna/designHenna3.jpg';

import designSimples1 from '../../assets/catalogoImages/designSimples/designSimples1.jpg';
import designSimples2 from '../../assets/catalogoImages/designSimples/designSimples2.jpg';
import designSimples3 from '../../assets/catalogoImages/designSimples/designSimples3.jpg';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 2000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 2200, min:  1850},
    items: 4
  },
  desktopMenor: {
    breakpoint: { max: 1850, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1300, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 730, min: 0 },
    items: 1
  }
};

const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Catalogo() {
    return(
        <div className='catalogo'>
            <Menu/>
            <div className='conteudo-catalogo'>             
                <div className='centralizar-container-card'>
                    <div className='container-card-catalogo'>
                        <h1 className='h1-principal-catalogo'>Catálogo</h1>
                        <Carousel responsive={responsive}>
                            <div className='card-catalogo'>
                                <div className='div-titulo-card-catalogo'>
                                    <h1>DERMAPLANING</h1>
                                </div>
                                <div className='rotacionar-img-catalogo'>
                                    <Carousel responsive={responsive1} arrows={false} swipeable={false} draggable={false} autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true}>
                                        <div><img src={dermaplaning1} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={dermaplaning2} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={dermaplaning3} alt='' className='img-cards-catalogo'/></div>
                                    </Carousel>
                                </div>
                                <div className='div-text-catalogo'>
                                    <img src={relogioIcon} className='relogio-icon'/>
                                    <p><strong>Tempo de duração:</strong> 30m / 40m.</p>                        
                                </div>
                                <p><strong>Descrição:</strong> O procedimento nada mais é do que uma esfoliação superficial da pele, feita com lâmina ou bisturi! Melhora a textura da pele e tonalidade.</p>
                            </div>

                            <div className='card-catalogo'>
                                <div className='div-titulo-card-catalogo'>
                                    <h1>SLIM BROWS</h1>
                                </div>
                                <div className='rotacionar-img-catalogo'>
                                    <Carousel responsive={responsive1} arrows={false} swipeable={false} draggable={false} autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true}>
                                        <div><img src={slimBrows1} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={slimBrows2} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={slimBrows3} alt='' className='img-cards-catalogo'/></div>
                                    </Carousel>
                                    <div className='div-text-catalogo'>
                                    <img src={relogioIcon} className='relogio-icon'/>
                                    <p><strong>Tempo de duração:</strong> 1h / 1h30m.</p>                        
                                </div>
                                <p><strong>Descrição:</strong> Slim brows, é um estilo delicado e estreito que valoriza traços mais sutis no rosto. Esse visual, que já foi tendência nas últimas décadas, voltou com tudo e é ideal para quem busca uma aparência elegante e minimalista.</p>
                                </div>
                            </div>

                            <div className='card-catalogo'>
                                <div className='div-titulo-card-catalogo'>
                                    <h1>SOFT SHADOW</h1>
                                </div>
                                <div className='rotacionar-img-catalogo'>
                                    <Carousel responsive={responsive1} arrows={false} swipeable={false} draggable={false} autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true}>
                                        <div><img src={softShadow1} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={softShadow2} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={softShadow3} alt='' className='img-cards-catalogo'/></div>
                                    </Carousel>
                                </div>
                                <div className='div-text-catalogo'>
                                    <img src={relogioIcon} className='relogio-icon'/>
                                    <p><strong>Tempo de duração:</strong> 1h / 1h30m.</p>                        
                                </div>
                                <p><strong>Descrição:</strong> O Soft Shadow é uma técnica de micropigmentação que cria um sombreamento suave e esfumado nas sobrancelhas, conferindo um efeito natural semelhante ao da maquiagem em pó. Ele preenche as sobrancelhas de forma leve e discreta, sem contornos rígidos.</p>
                            </div>

                            <div className='card-catalogo'>
                                <div className='div-titulo-card-catalogo'>
                                    <h1>LASH LIFTING</h1>
                                </div>
                                <div className='rotacionar-img-catalogo'>
                                    <Carousel responsive={responsive1} arrows={false} swipeable={false} draggable={false} autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true}>
                                        <div><img src={lashLifting1} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={lashLifting2} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={lashLifting3} alt='' className='img-cards-catalogo'/></div>
                                    </Carousel>
                                </div>
                                <div className='div-text-catalogo'>
                                    <img src={relogioIcon} className='relogio-icon'/>
                                    <p><strong>Tempo de duração:</strong> 1h / 1h20m.</p>                        
                                </div>
                                <p><strong>Descrição:</strong> O Lash Lifting é um procedimento que eleva e curva os cílios naturais desde a raiz, dando um efeito de alongamento e definição sem a necessidade de extensão ou cílios postiços, proporcionando um olhar mais aberto e destacado.</p>
                            </div>

                            <div className='card-catalogo'>
                                <div className='div-titulo-card-catalogo'>
                                    <h1>BROW LAMINATION</h1>
                                </div>
                                <div className='rotacionar-img-catalogo'>
                                    <Carousel responsive={responsive1} arrows={false} swipeable={false} draggable={false} autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true}>
                                        <div><img src={browLamination1} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={browLamination2} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={browLamination3} alt='' className='img-cards-catalogo'/></div>
                                    </Carousel>
                                </div>
                                <div className='div-text-catalogo'>
                                    <img src={relogioIcon} className='relogio-icon'/>
                                    <p><strong>Tempo de duração:</strong> 1h / 1h30m.</p>                        
                                </div>
                                <p><strong>Descrição:</strong> O Brow Lamination é um procedimento que alinha e fixa os fios das sobrancelhas, deixando-os mais preenchidos e com aparência de volume, proporcionando um efeito de sobrancelhas mais definidas e organizadas.</p>
                            </div>

                            <div className='card-catalogo'>
                                <div className='div-titulo-card-catalogo'>
                                    <h1>DESIGN PERSONALIZADO COM COLORAÇÃO</h1>
                                </div>
                                <div className='rotacionar-img-catalogo'>
                                    <Carousel responsive={responsive1} arrows={false} swipeable={false} draggable={false} autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true}>
                                        <div><img src={designColoracao1} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={designColoracao2} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={designColoracao3} alt='' className='img-cards-catalogo'/></div>
                                    </Carousel>
                                </div>
                                <div className='div-text-catalogo'>
                                    <img src={relogioIcon} className='relogio-icon'/>
                                    <p><strong>Tempo de duração:</strong> 30m / 40m.</p>                        
                                </div>
                                <p><strong>Descrição:</strong> O design personalizado com coloração é um procedimento de sobrancelha que envolve a modelagem dos fios de acordo com o formato ideal para o rosto da pessoa, seguido pela aplicação de coloração temporária para definir e preencher as sobrancelhas.</p>
                            </div>

                            <div className='card-catalogo'>
                                <div className='div-titulo-card-catalogo'>
                                    <h1>DESIGN PERSONALIZADO COM HENNA</h1>
                                </div>    
                                <div className='rotacionar-img-catalogo'>
                                    <Carousel responsive={responsive1} arrows={false} swipeable={false} draggable={false} autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true}>
                                        <div><img src={designHenna1} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={designHenna2} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={designHenna3} alt='' className='img-cards-catalogo'/></div>
                                    </Carousel>
                                </div>
                                <div className='div-text-catalogo'>
                                    <img src={relogioIcon} className='relogio-icon'/>
                                    <p><strong>Tempo de duração:</strong> 30m / 40m.</p>                        
                                </div>
                                <p><strong>Descrição:</strong> O design personalizado com henna é um procedimento de sobrancelha que inclui a modelagem dos fios para definir o formato ideal e a aplicação de henna para preencher e realçar as sobrancelhas. A henna colora tanto os fios quanto a pele, criando um efeito de volume e definição.</p>
                            </div>

                            <div className='card-catalogo'>
                                <div className='div-titulo-card-catalogo'>
                                    <h1>DESIGN PERSONALIZADO SIMPLES</h1>
                                </div>
                                <div className='rotacionar-img-catalogo'>
                                    <Carousel responsive={responsive1} arrows={false} swipeable={false} draggable={false} autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true}>
                                        <div><img src={designSimples1} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={designSimples2} alt='' className='img-cards-catalogo'/></div>
                                        <div><img src={designSimples3} alt='' className='img-cards-catalogo'/></div>
                                    </Carousel>
                                </div>
                                <div className='div-text-catalogo'>
                                    <img src={relogioIcon} className='relogio-icon'/>
                                    <p><strong>Tempo de duração:</strong> 25m / 30m.</p>                        
                                </div>
                                <p><strong>Descrição:</strong> O design personalizado simples é um procedimento de sobrancelha focado em modelar e ajustar o formato das sobrancelhas de acordo com as características faciais de cada pessoa. A técnica envolve a remoção dos pelos em excesso com pinça, cera ou linha, para criar um formato harmonioso e natural.</p>
                            </div>
                        </Carousel>                 
                    </div>
                </div>             
            </div>
            <Footer/>
        </div>
    )   
}

export default Catalogo;