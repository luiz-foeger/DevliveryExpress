import { useParams } from 'react-router-dom'
import estilos from './ItemPage.module.css'
import NaoEncontrada from '../NaoEncontrada'
import items from '../../json/items.json'
import ListagemItens from '../../componentes/ListagemItens'

function ItemPage() {

    //console.log(window.location)
    const parametros = useParams()
    //console.log(parametros)

    //console.log(items)

    const item = items.find((elemento) => ( elemento.id === Number(parametros.id)) )
    //console.log(item)


    return (                
        <div className={estilos.item}>              
                <img src="/images/react.png" alt="Detalhes sobre o Projeto" />
                <div>
                    <h1> {item.descricao} </h1>
                    <p>
                          {item.texto}
                    </p>   
                    <small>Autor: {item.autor}</small>                    
                </div>


                <ListagemItens />
        </div>        
    )
}

export default ItemPage