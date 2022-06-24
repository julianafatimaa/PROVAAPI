import axios from 'axios';

const api = axios.create({
    baseURL : `http://localhost:5000`
});

export async function cadastrarpett (nome){
    const resposta = await api.post (`/pet`, {
     nome : nome
    })
    return resposta.data;
}


export async function consultarpett (){
    const resp = await api.get (`/Vpet`);
    return resp.data;
}