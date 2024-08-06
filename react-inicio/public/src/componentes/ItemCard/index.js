import { Link } from "react-router-dom"


function ItemCard(props) {

   // console.log(props.dados)

    return (
        <li>
            <Link to={`/item/${props.dados.id}`}>
                <img src="/images/react.png" alt={`"logo com a ${props.dados.descricao}"`} />
                <h1>{props.dados.descricao}</h1>
                <p>Autor: {props.dados.autor}</p>
            </Link>
        </li>
    )
}

export default ItemCard