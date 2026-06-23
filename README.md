# Backend de Gerenciamento de Tarefas

API para gerenciamento de tarefas e categorias, desenvolvida com Node.js, TypeScript e PostgreSQL.

## Tecnologias e Versões

- **Node.js**: v20 (imagem docker `node:20-alpine`)
- **TypeScript**: ^6.0.3
- **Express**: ^5.2.1
- **TypeORM**: ^0.3.28
- **PostgreSQL**: 16 (driver `pg ^8.20.0`)
- **class-validator**: ^0.15.1
- **reflect-metadata**: ^0.2.2
- **cors**: ^2.8.6

## Estrutura do Projeto

```text
src/
  ├── controller/   # Controladores da aplicação
  ├── models/       # Entidades do banco de dados (TypeORM)
  ├── repository/   # Repositórios de acesso ao banco
  ├── routes/       # Definição das rotas (express)
  ├── app.ts        # Configuração da aplicação (Express)
  ├── dbConfig.ts   # Configuração de conexão do TypeORM
  └── main.ts       # Arquivo principal que inicializa o servidor
```

## Endpoints Principais

- `/api/tasks` (Rotas para criar, listar, atualizar e deletar tarefas)
- `/api/categories` (Rotas para criar, listar, atualizar e deletar categorias)

## Como rodar localmente (Node.js)

### Pré-requisitos
- Node.js instalado na máquina
- Um banco de dados PostgreSQL ativo.

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente baseando-se no `.env.example`.
   Crie um arquivo `.env` na raiz:
   ```bash
   cp .env.example .env
   ```

   Preencha-o, ex:
   ```env
   # Aplicação
   PORT=3000

   # Banco de Dados
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=sua-senha
   DB_NAME=tasksdb
   ```

3. Compile e inicie o projeto:
   ```bash
   npm run start
   ```
   > O comando executará `npx tsc && node dist/main.js`. 
   
   A API estará disponível em `http://localhost:3000`.

## Opção com Docker

1. Crie o arquivo `.env` (instruções acima).
2. Construa a imagem Docker:
   ```bash
   docker build -t backend-tarefa .
   ```
3. Suba o container (garanta que o `DB_HOST` do seu `.env` aponte corretamente para um banco PostgreSQL acessível pelo container Docker):
   ```bash
   docker run -p 3000:3000 --env-file .env backend-tarefa
   ```

*(Nota: Caso pretenda usar Docker Compose conforme mencionado anteriormente, você pode criar um `docker-compose.yml` que declare os serviços `app` e `postgres` em uma mesma rede).*
