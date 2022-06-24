import { Link } from 'react-router-dom'


export default function Index () {

    return (
        <div>
            <h1>ACESSAR PÁGINAS</h1>
            <Link to='/cadastrarpet'>CADASTRAR PET</Link> <br/>
            <Link to='/consultarpet'>CONSULTAR PET</Link>
        </div>
    )
}