# Estágio 1: Build (Compilar TypeScript para JavaScript)
FROM node:18-alpine AS builder
# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app
# Copia os arquivos de dependência
COPY package*.json ./
# Instala todas as dependências (incluindo devDependencies para build)
RUN npm install
# Copia todo o código fonte
COPY . .
# Compila o TypeScript para JavaScript (Verifique se 'build' é o script correto no seu package.json)
RUN npm run build

# Estágio 2: Produção (Rodar o JavaScript compilado)
FROM node:18-alpine
WORKDIR /usr/src/app
# Copia os arquivos de dependência novamente
COPY package*.json ./
# Instala SOMENTE as dependências de produção para manter a imagem menor
RUN npm install --only=production
# Copia os arquivos JavaScript compilados do estágio de build
# Certifique-se que 'dist' é a pasta onde o TypeScript compila seus arquivos (verifique tsconfig.json -> outDir)
COPY --from=builder /usr/src/app/dist ./dist

# Expõe a porta que a aplicação vai usar DENTRO do container
EXPOSE 3000

# Comando para iniciar a aplicação
# VERIFIQUE ESTE CAMINHO! Ele deve apontar para o arquivo JS principal que inicia seu servidor web, dentro da pasta 'dist'.
# Pode ser dist/index.js, dist/main.js, dist/src/web-server/index.js, etc.
CMD [ "node", "dist/src/web-server/index.js" ]