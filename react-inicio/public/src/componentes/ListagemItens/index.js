import ItemCard from "../ItemCard"
import estilos from "./ListagemItens.module.css"
import items from "../../json/items.json"

function ListagemItens() {

    //useState    

    return (
        <div className={estilos.listagem}>
            <h1>Listagem de Itens</h1>
            <div className={estilos.carrousel}>
                <ul>
                    {
                        items.map((elemento) => 
                            ( <ItemCard key={elemento.id} dados={elemento} />)
                        )
                    }

                </ul>
            </div>
        </div>
    )
}

export default ListagemItens