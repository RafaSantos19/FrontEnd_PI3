# Estúdio de Sobrancelhas — Sistema de Agendamento e Gestão

Sistema web para facilitar a comunicação entre clientes e a designer de sobrancelhas, oferecendo **cadastro/login**, **agendamentos via calendário**, **exibição de serviços e portfólio**, **contato**.

## Link para o Back-End
- https://github.com/RafaSantos19/BackEnd_PI3

---

## Visão Geral
O objetivo do sistema é **facilitar a comunicação entre clientes e designer**, provendo:
- Agendamento de serviços com visualização de **datas e horários disponíveis**
- **Contato** para dúvidas
- Informações sobre **serviços**, **cursos** e **perfil profissional**
- Exibição de **trabalhos realizados (portfólio)**

---

## Principais Funcionalidades
### Cliente
- Criar conta, editar perfil e excluir conta
- Fazer login/logout
- Ver serviços e informações (preço, tempo, etc.)
- Agendar serviço pelo calendário
- Listar agendamentos (em aberto e concluídos)
- Cancelar agendamento
- Editar data/horário (com regra de antecedência)
- Acessar seção de contato

### Administrador
- Login com perfil de acesso
- Definir disponibilidade (quantidade de atendimentos por dia e dias indisponíveis)
- Cadastrar agendamento manualmente (para clientes)
- Listar agendamentos em aberto/concluídos
- Confirmar atendimento realizado (conclusão do agendamento)

---

## Regras de Negócio
- **RGN01 — Mudança de horário:** alteração apenas com **até 24h de antecedência** e **1 mudança por agendamento**.
- **RGN02 — Disponibilidade:** administrador define **quantos atendimentos por dia** e **dias indisponíveis**.
- **RGN03 — Antecedência de agendamento:** cliente pode agendar com **24h de antecedência**.
- **RGN04 — Agendamento dentro do mês:** cliente pode agendar para **qualquer dia dentro do mês atual**, permitindo reservas com **até 30 dias** (conforme regra descrita na documentação).

---

## Casos de Uso
- **UC01 — Manter Cliente:** cadastrar/alterar/excluir conta e consultar perfil.
- **UC02 — Fazer Login:** autenticação e direcionamento por perfil (cliente/administrador).
- **UC03 — Cadastrar Agendamento:** cliente agenda via calendário e paga sinal; admin cadastra manualmente.
- **UC04 — Listar Agendamentos:** cliente lista os próprios agendamentos; admin lista abertos/concluídos.
- **UC05 — Realizar Agendamento:** admin confirma manualmente que o atendimento foi concluído.

---

## Requisitos Não Funcionais
- **Responsivo** e adaptado a diferentes telas
- **Acessibilidade** para necessidades visuais
- Boa **navegabilidade** (evitar troca excessiva de telas)
- **Segurança:** proteção contra acesso não autorizado e conformidade com LGPD
- Uso de **JWT** (conforme especificação do documento)
- Padrões:
  - Arquitetura **MVC**
  - Front-end: **React.js**
  - Back-end: **Node.js**
  - Banco não-relacional: **Firebase**
  - Banco relacional: **SQLite**
  - Versionamento: **Git/GitHub**
  - Gestão: **SCRUM + Kanban**

---

## Arquitetura e Tecnologias
- **Arquitetura:** MVC
- **Front-end:** React.js
- **Back-end:** Node.js e Express
- **Banco:** SQLite + Firebase
- **Auth:** JWT

