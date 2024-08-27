import { Link } from 'react-router-dom';

export default function Menu({headerMenu}) {

    return (
        <>
        {
        headerMenu.map( men=>(
                    <li><Link to={men.rota}>{men.titulo}</Link></li>  
        )
        )
        }
        </>
    )
}

