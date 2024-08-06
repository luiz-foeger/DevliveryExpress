import estilos from './Item.module.css'

function ItemCard(props) {

    return (
        <li>
            <a href='/'>
                <img src="../images/react.png" alt={`logo com imagem ${props.descricao}`} />
                <h1>{props.descricao}</h1>
                <p>Autor: {props.autor}</p>
            </a>
        </li>
    )
}

export default ItemCard