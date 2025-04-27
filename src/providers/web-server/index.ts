import express from 'express';
const app = express();
app.use(express.json()); // Para aceitar JSON
export { app };