FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependências primeiro (aproveita o cache do Docker)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Compila o projeto TypeScript
RUN npx tsc

# Expõe a porta em que a aplicação está rodando (configurada no main.ts)
EXPOSE 3000

# Comando para iniciar a aplicação usando os arquivos compilados
CMD ["node", "dist/main.js"]