import express from 'express';

//import { router as apiRoutes } from '../../web-server/routes'; 

const app = express();

app.use(express.json()); 


//app.use(apiRoutes);      

export { app };         