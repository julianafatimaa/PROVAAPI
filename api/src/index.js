import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

import petController from './controller/petController.js';
server.use(petController);

server.listen(process.env.PORT,
     () => console.log(`API online na porta ${process.env.PORT}`));