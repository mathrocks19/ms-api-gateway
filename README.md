# TrabProgWebII_08_04_2025

# Microsserviço: API Gateway

Recebe requisições HTTP (ex: POST /user) e as envia via RPC/RabbitMQ.

## Requisitos

*   Docker & Docker Compose
*   Node.js/npm (para build)

## Para Rodar (Gateway + DB + RabbitMQ)

1.  Na pasta `ms-api-gateway`:
    ```bash
    docker-compose up -d --build
    ```
2.  **Importante:** Inicie `ms-api-user` e `ms-notification` separadamente (com `npm run start:dev`).

## Para Parar

1.  Na pasta `ms-api-gateway`:
    ```bash
    docker-compose down
    ```
    *(Use `docker-compose down -v` para apagar os dados também).*

## Teste

*   Após tudo rodar, envie `POST http://localhost:3000/user` (com JSON no body) via Postman.