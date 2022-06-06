import { AddPet } from '../repository/petRepository.js';
import { Router } from "express";

const server = Router();

server.post ('/pet', async (req,resp) => {
  try{
    const AdicionarPet = req.body;

    const pet= await AdicionarPet(AddPet);
    resp.send(pet);
  }
  catch(err){
    resp.status(400).send({
        erro : err.message
    })
  }
});

server.get ('/pet', async (req,resp) => {
  try{
    const {nome} = req.query;
     
    const r= await Verpet (nome);
    resp.send(r);
  }
  catch(err){
    resp.status(400).send({
      erro : err.message
    });
  }
})

export default server;