
# SGP - Sistema de Gerenciamento de Projetos (Frontend)

Este repositório contém o frontend do Sistema de Gerenciamento de Projetos (SGP), desenvolvido para a disciplina de Segurança da Informação da Universidade Federal do Oeste do Pará (UFOPA).

## 📦 Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Vite](https://vitejs.dev/) (como bundler)

## 🛠️ Funcionalidades Implementadas

- Tela de login com autenticação
- Dashboard de projetos
- Cadastro e listagem de projetos por coordenador
- Associação entre coordenadores e projetos
- Navegação protegida com base em autenticação

## 🧑‍💻 Como Executar o Projeto

### 1. Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18+)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### 2. Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/sgp-frontend.git
cd sgp-frontend
```

### 3. Instalando Dependências

```bash
npm install
# ou
yarn
```

### 4. Executando o Projeto

```bash
npm run dev
# ou
yarn dev
```

O frontend estará disponível em: [http://localhost:5173](http://localhost:5173)

## 🔐 Autenticação

- O login é feito com base em tokens JWT fornecidos pela API backend.
- As rotas privadas só são acessíveis se o token estiver armazenado localmente.

## 🤝 Integração com o Backend

Certifique-se de que o backend esteja em execução antes de iniciar o frontend. O endereço da API pode ser configurado em um arquivo `.env`:

```
VITE_API_URL=http://localhost:3000
```

## 📁 Estrutura de Pastas

```
📦 src
├── 📁 components
├── 📁 pages
├── 📁 services
├── 📁 utils
└── App.jsx
```

## 📝 Licença

Este projeto é acadêmico e não possui fins comerciais.
