import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { consultarpett } from '../../api/petapi'

export default function Index () {
const [pet, setPet] = useState([]);

async function carregartudo(){
    const r = await consultarpett();
    setPet(r);
}



useEffect(() => {
    carregartudo();
})
    return (
        <div>
         <h1>VER PETS </h1>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>NOME</th>
                  </tr>
              </thead>
              <tbody>
         {pet.map(item =>
            <tr>
                <td>{item.id}</td>
                <td>{item.nome}</td>
            </tr>
            )}
            </tbody>
            </table>
            < Link to='/home'>VOLTAR</Link>
        </div>
    )
}