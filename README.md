
# 🛠️ API REST com Node.js

Este projeto é uma API REST simples desenvolvida com **Node.js** e **Express**, que simula um sistema de cadastro de produtos com operações básicas de CRUD (Create, Read, Update, Delete). A API foi criada com o objetivo de demonstrar o funcionamento de uma aplicação backend com rotas HTTP, utilizando armazenamento em memória. Ela serve como um exemplo prático para quem está aprendendo a desenvolver APIs RESTful com JavaScript no backend.

## 🚀 Tecnologias utilizadas

- **Node.js** – Ambiente de execução JavaScript.
- **Express** – Framework minimalista para criação de servidores HTTP.
- **Nodemon** – Ferramenta para reiniciar automaticamente o servidor ao detectar mudanças no código.
- **Postman** – Ferramenta de testes para requisições HTTP durante o desenvolvimento.

## 📁 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
ApiRestJS/
│
├── src/
│   ├── servidor.js          # Arquivo principal que configura e inicia o servidor
│   └── bancoDeDados.js      # Módulo que simula o banco de dados e contém as funções de manipulação de dados
│
├── package.json             # Arquivo de configuração com dependências e scripts do projeto
└── README.md                # (Este arquivo) Descrição e instruções do projeto
```

## 🔧 Funcionalidades da API

A API fornece os seguintes endpoints:

- `GET /produtos`  
  Retorna todos os produtos cadastrados.

- `GET /produtos/:id`  
  Retorna um único produto com base no ID.

- `POST /produtos`  
  Cadastra um novo produto. Exemplo de JSON a ser enviado no corpo da requisição:
  ```json
  {
    "nome": "Teclado",
    "preco": 199.99
  }
  ```

- `PUT /produtos/:id`  
  Atualiza os dados de um produto existente.

- `DELETE /produtos/:id`  
  Remove um produto do "banco de dados" com base no ID.

## ▶️ Como executar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/ApiRestJS.git
cd ApiRestJS
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor com o Nodemon:**

```bash
npx nodemon src/servidor.js
```

Ou, se preferir sem o nodemon:

```bash
node src/servidor.js
```

O servidor estará rodando por padrão na porta `3003`. Você pode testá-lo com o Postman ou Insomnia.

## ✅ Exemplo de Requisição com Postman

- Método: `POST`  
- URL: `http://localhost:3003/produtos`  
- Body (JSON):
```json
{
  "nome": "Mouse Gamer",
  "preco": 249.90
}
```

## 📌 Observações

- Como os dados ficam armazenados apenas na memória, ao reiniciar o servidor todos os produtos cadastrados serão perdidos.
- O ID dos produtos é gerado automaticamente por meio de um contador interno.

## 👨‍💻 Autor

Douglas Estrela – Projeto criado para fins de estudo e prática com APIs em Node.js.
