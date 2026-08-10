#  AutoLuna

##  1. Sobre o Projeto

O **AutoLuna** é uma plataforma web desenvolvida para o gerenciamento e a divulgação de veículos disponíveis para venda.

O sistema tem como proposta facilitar o trabalho de vendedores e administradores, permitindo o cadastro, organização e gerenciamento dos veículos, enquanto os clientes poderão pesquisar e consultar informações sobre os veículos disponíveis.

---

## 2. Situação-Problema

Atualmente, a divulgação e o gerenciamento de veículos para venda podem ser realizados por meio de diferentes plataformas, planilhas, redes sociais e anúncios, dificultando a organização das informações e o acompanhamento dos veículos disponíveis.

A ausência de uma plataforma centralizada pode dificultar tanto o trabalho dos vendedores quanto a busca dos clientes por veículos que atendam às suas necessidades.

Dessa forma, surge a necessidade de desenvolver uma plataforma que permita organizar e divulgar os veículos disponíveis para venda de maneira simples, rápida e acessível.

---

## 3. Objetivo

Desenvolver uma plataforma web para o gerenciamento e a divulgação de veículos disponíveis para venda.

O sistema permitirá que vendedores e administradores cadastrem e gerenciem veículos, enquanto os clientes poderão visualizar, pesquisar e consultar informações detalhadas sobre os veículos disponíveis.

---

## 4. Público-Alvo

O sistema será destinado principalmente a:

- Lojas e revendedoras de veículos;
- Vendedores de veículos;
- Administradores da plataforma;
- Clientes interessados na compra de veículos.

---

##  5. Necessidades dos Usuários

### Administradores e Vendedores

Os administradores e vendedores poderão:

- Cadastrar veículos;
- Alterar informações dos veículos;
- Atualizar preços;
- Adicionar fotos;
- Alterar o status do veículo;
- Excluir veículos;
- Visualizar os veículos cadastrados.

### Clientes

Os clientes poderão:

- Visualizar veículos disponíveis;
- Pesquisar veículos;
- Filtrar veículos;
- Consultar preços;
- Visualizar fotos;
- Consultar características dos veículos;
- Verificar a disponibilidade dos veículos;
- Demonstrar interesse em um veículo.

---

## 6. Escopo do Projeto

O projeto terá como foco o cadastro, gerenciamento, divulgação e consulta de veículos disponíveis para venda.

### Funcionalidades Incluídas

- Cadastro de usuários;
- Login de administrador;
- Cadastro de veículos;
- Edição de veículos;
- Exclusão de veículos;
- Cadastro das informações dos veículos;
- Cadastro de imagens;
- Consulta de veículos;
- Pesquisa por marca e modelo;
- Filtros por preço;
- Filtros por categoria;
- Visualização dos detalhes do veículo;
- Controle do status do veículo;
- Identificação de veículos disponíveis ou vendidos;
- Área para contato ou demonstração de interesse do cliente.

---

##  7. Principais Informações dos Veículos

Cada veículo poderá possuir as seguintes informações:

- Marca;
- Modelo;
- Ano;
- Quilometragem;
- Preço;
- Cor;
- Combustível;
- Tipo de câmbio;
- Categoria;
- Descrição;
- Imagens;
- Status de disponibilidade.

---

## 8. Tecnologias

### Frontend

- React;
- Vite;
- HTML;
- CSS;
- JavaScript.

### Backend

- Node.js;
- Express.

### Banco de Dados

- PostgreSQL;
- pgAdmin.

### Controle de Versão

- Git;
- GitHub.

---

## 9. Estrutura do Projeto

```text
AutoLuna/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── database/
│
├── docs/
│
├── .gitignore
├── LICENSE
└── README.md

