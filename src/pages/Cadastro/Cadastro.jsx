import React, { useState } from 'react'
import axios from 'axios'
import logoLogin from '../../assets/login.svg'
import './Cadastro.css'

function Cadastro() {

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    conPassword: ''
  });

  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]})${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const newValue = formatPhone(value.replace(/\D/g, '').slice(0, 14)); // Limitar a 14 caracteres
      setFormData({
        ...formData,
        [name]: newValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (formData.password !== formData.conPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      alert('A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.');
      return;
    }

    axios.post('http://localhost:8080/user/create', formData).then((response) => {
      if (response.status === 201) {
        alert('Usuário cadastrado com sucesso! Verifique seu email.')
        setFormData({
          name: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          conPassword: ''
        });
        window.location.href = '/login'
      }
    }).catch((err) => {
      console.error('Erro ao cadastrar usuário: ', err);
      alert('Erro ao cadastrar usuário. Tente novamente.');
    });
  };

  const toggleTermsModal = () => setShowTermsModal(!showTermsModal);
  const togglePrivacyModal = () => setShowPrivacyModal(!showPrivacyModal);

  return (
    <main className='main-cadastro'>
      <div id="parallelogram-cadastro"></div>
      <section className='section-cadastro'>
        <form className='form-cadastro' onSubmit={handleSubmit}>
          <h1 className='h1-cadastro'>Crie a sua conta</h1>

          <fieldset className='fieldset-cadastro'>
            <div className="container-cadastro">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required></input>
              <label htmlFor="name">Nome</label>
            </div>
            <div className="container-cadastro">
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required></input>
              <label htmlFor="lastName">Sobrenome</label>
            </div>
          </fieldset>

          <fieldset className='fieldset-cadastro'>
            <div className="container-cadastro">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></input>
              <label htmlFor="email">Email</label>
            </div>
            <div className="container-cadastro">
              <input type="tel" maxLength="14" id="phone" name="phone" value={formData.phone} onChange={handleChange} required></input>
              <label htmlFor="phone">Telefone</label>
            </div>
          </fieldset>

          <fieldset className='fieldset-cadastro'>
            <div className="container-cadastro">
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required></input>
              <label htmlFor="password">Senha</label>
            </div>
            <div className="container-cadastro">
              <input type="password" id="conPassword" name="conPassword" value={formData.conPassword} onChange={handleChange} required></input>
              <label htmlFor="conPassword">Confirme a Senha</label>
            </div>
          </fieldset>

          <fieldset className='fieldset-cadastro'>
            <div className='checks'>
              <div id="check">
                <input type="checkbox" id="accept_use" name="accept_use" required />
                <label htmlFor="accept_use">Aceitar os termos de uso</label>
              </div>

              <div id='check' >
                <input type="checkbox" id="accept_priv" name="accept_priv" required />
                <label htmlFor="accept_priv">Aceitar políticas de privacidade</label>
              </div>
            </div>
            <button className='button-cadastro' type="submit">Cadastrar</button>
          </fieldset>

          <fieldset className='fieldset-cadastro'>
            <a href='#' onClick={toggleTermsModal}>Ler Termos de Uso</a>
            <a href='#' onClick={togglePrivacyModal}>Ler Políticas de Privacidade</a>
            <a href="login">Já tem uma conta? Faça login!</a>
          </fieldset>

        </form>
        <img src={logoLogin}></img>

        {/* Modal de Termos de Uso */}
        {showTermsModal && (
          <div className="modal_cadastro">
            <div className="modal-content_cadastro">
              <center><h2>Termos de Uso</h2></center>
              <br />
              <p><strong>Última atualização:</strong> 23/10/2024</p>

              <br />

              <h3>1. Aceitação dos Termos</h3>
              <p>
                Ao criar uma conta no Studio Tailine, você concorda em cumprir estes Termos de Uso.
                Se não concordar com estes termos, não crie uma conta.
              </p>

              <br />

              <h3>2. Definições</h3>
              <p>
                <ul>
                  <li><strong>Usuário:</strong> qualquer pessoa que se cadastra e utiliza os serviços do Studio Tailine.</li>
                  <li><strong>Serviços:</strong> serviços de design de sobrancelhas oferecidos pelo Studio Tailine, incluindo agendamentos online.</li>
                </ul>
              </p>

              <br />

              <h3>3. Uso do Site</h3>
              <p>
                O acesso e uso do site são permitidos apenas a pessoas com idade igual ou superior a 18 anos. Ao utilizar o site, você garante que tem a idade necessária e que fornecerá informações verdadeiras, precisas e completas.
              </p>

              <br />

              <h3>4. Cadastro e Segurança</h3>
              <p>
                Ao se cadastrar, você se compromete a fornecer informações verdadeiras e atualizadas, manter a confidencialidade de sua senha e notificar imediatamente o Studio Tailine sobre qualquer uso não autorizado da sua conta.
              </p>

              <br />

              <h3>5. Conteúdo do Usuário</h3>
              <p>Você é responsável por qualquer conteúdo que publicar ou enviar pelo site. O Studio Tailine não se responsabiliza por conteúdos enviados por usuários.</p>

              <br />

              <h3>6. Propriedade Intelectual</h3>
              <p>Todo o conteúdo do site, incluindo textos, imagens e logotipos, é propriedade do Studio Tailine e é protegido por leis de propriedade intelectual. Você não pode reproduzir, modificar ou distribuir qualquer parte do conteúdo sem autorização.</p>

              <br />

              <h3>7. Política de Privacidade</h3>
              <p>A coleta e uso de informações pessoais estão sujeitos à nossa <strong>Política de Privacidade</strong>. Recomendamos que você a leia para entender como seus dados são tratados.</p>

              <br />

              <h3>8. Isenção de Responsabilidade</h3>
              <p>O Studio Tailine não garante a precisão ou a integridade das informações disponíveis no site. O uso das informações e serviços é por sua conta e risco.</p>

              <br />

              <h3>9. Modificações</h3>
              <p>O Studio Tailine se reserva o direito de modificar estes Termos de Uso a qualquer momento. Alterações serão publicadas nesta página e a data de atualização será ajustada.</p>

              <br />

              <h3>10. Lei Aplicável</h3>
              <p>Estes Termos de Uso são regidos pelas leis do Brasil, especificamente pelas leis do Estado de São Paulo. Quaisquer disputas decorrentes do uso do site serão resolvidas nos tribunais competentes da comarca de Sorocaba, São Paulo, Brasil.</p>

              <br />

              <h3>11. Contato</h3>
              <p>Para dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail:</p>
              <center><p>studiotailine@gmail.com</p></center>

              <br />

              <center><button onClick={toggleTermsModal}>Fechar</button></center>
            </div>
          </div>
        )}


        {/* Modal de Políticas de Privacidade */}
        {showPrivacyModal && (
          <div className="modal_cadastro">
            <div className="modal-content_cadastro">
              <center><h2>Políticas de Privacidade</h2></center>
              <br />
              <p><strong>Última atualização:</strong> 23/10/2024</p>

              <br />

              <h3>1. Introdução</h3>
              <p>
                Esta Política de Privacidade descreve como coletamos, usamos, protegemos e compartilhamos
                suas informações pessoais ao utilizar o site do Studio Tailine. Ao criar uma conta ou usar nossos
                serviços, você concorda com as práticas descritas nesta política.
              </p>

              <br />

              <h3>2. Informações que Coletamos</h3>
              <p>
                Coletamos as seguintes informações quando você se cadastra ou utiliza nossos serviços:
                <ul>
                  <li><strong>Informações Pessoais:</strong> nome, e-mail, telefone.</li>
                  <li><strong>Dados de Agendamento:</strong> informações sobre serviços solicitados e horários de agendamento.</li>
                </ul>
              </p>

              <br />

              <h3>3. Uso de Informações</h3>
              <p>
                Usamos suas informações para:
                <ul>
                  <li>Processar agendamentos e gerenciar sua conta.</li>
                  <li>Comunicar sobre suas reservas e serviços.</li>
                  <li>Melhorar nossos serviços e personalizar sua experiência.</li>
                  {/*TODO: Talvez tenhamos a opção de promoções, mas isso ainda será discutido */}
                  {/* <li>Enviar atualizações e promoções (com seu consentimento).</li> */}
                </ul>
              </p>

              <br />

              <h3>4. Compartilhamento de Informações</h3>
              <p>
                Não vendemos suas informações pessoais a terceiros. Podemos compartilhar suas informações com:
                <ul>
                  <li>Prestadores de Serviços: empresas que nos ajudam a operar o site e fornecer nossos serviços (ex.: serviços de pagamento).</li>
                  <li>Obrigações Legais: quando exigido por lei ou para proteger nossos direitos.</li>
                </ul>
              </p>

              <br />

              <h3>5. Segurança das Informações</h3>
              <p>
                Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>

              <br />

              <h3>6. Seus Direitos</h3>
              <p>
                Você tem o direito de:
                <ul>
                  <li>Acessar suas informações pessoais.</li>
                  <li>Solicitar a correção de informações incorretas.</li>
                  <li>Solicitar a exclusão de suas informações, conforme permitido por lei.</li>
                </ul>
              </p>

              <br />

              <h3>7. Cookies</h3>
              <p>
                Utilizamos cookies para melhorar sua experiência no site. Você pode desativá-los nas configurações do navegador, mas isso pode afetar a funcionalidade do site.
              </p>

              <br />

              <h3>8. Alterações na Política de Privacidade</h3>
              <p>
                Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página e a data de atualização será ajustada.
              </p>

              <br />

              <h3>9. Contato</h3>
              <p>Para dúvidas sobre estas Políticas de Privacidade, entre em contato conosco pelo e-mail:</p>
              <center><p>studiotailine@gmail.com</p></center>

              <br />

              <center><button onClick={togglePrivacyModal}>Fechar</button></center>
            </div>
          </div>
        )}

      </section>
    </main>
  )
}
export default Cadastro