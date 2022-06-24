
import { Link } from 'react-router-dom'
import { useState} from 'react'
import { cadastrarpett } from '../../api/petapi'


export default function Index () {

    const [nome, setNome] = useState('');

async function salvarClick(){
    const novopet = await cadastrarpett(nome);
    alert ('ala cadastrou!')
}

    return (
        <div>
            <h1>Cadastre seu pet</h1>
            <input type='text' onChange={e => setNome(e.target.value)}/>
            <button onClick={salvarClick}> CADASTRAR  </button> <br/>
            < Link to='/home'>VOLTAR</Link>
        </div>
    )
}