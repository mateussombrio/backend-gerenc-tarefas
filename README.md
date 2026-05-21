# Backend de Gerenciamento de Tarefas

API para gerenciamento de tarefas e categorias, usando Node.js, TypeScript e PostgreSQL.

## Tecnologias e versoes

- Node.js 20 (imagem docker `node:20-alpine`)
- TypeScript ^6.0.3
- Express ^5.2.1
- TypeORM ^0.3.28
- PostgreSQL 16 (imagem docker `postgres:16`)
- class-validator ^0.15.1
- reflect-metadata ^0.2.2
- cors ^2.8.6

## Endpoints principais

- `/api/tasks`
- `/api/categories`

## Como rodar

### 1) Docker Compose (recomendado)

1. Crie o arquivo `.env` na raiz (exemplo abaixo).
2. Suba os containers:

```bash
docker compose up --build
```

A API sobe em `http://localhost:3000`.

### 2) Local (Node.js)

1. Instale dependencias:

```bash
npm install
```

2. Crie o arquivo `.env` na raiz (exemplo abaixo).
3. Compile e inicie:

```bash
npm run start
```

A API sobe em `http://localhost:3000`.

## Variaveis de ambiente

Crie um arquivo `.env` com os valores desejados:

```env
PORT=3000
DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=tasksdb
```

Observacoes:
- No Docker Compose, `DB_HOST=postgres` aponta para o servico do banco.
- Em execucao local sem Docker, use `DB_HOST=localhost` se o PostgreSQL estiver na sua maquina.
