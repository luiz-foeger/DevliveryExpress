import estilos from './ListagemItem.module.css'
import ItemCard from "../Item"

function ListagemItens() {

    return (
        <div className={estilos.listagem}>
            <h1>Listagem de Itens</h1>
            <div className={estilos.carrousel}>
                <ul>
                    <ItemCard descricao="Item Card 1" autor="Miltin" />
                    <ItemCard descricao="Item Card 2" autor="Bruno" />
                    <ItemCard descricao="Item Card 3" autor="Luiz Felipe" />
                </ul>
            </div>
        </div>
    )
}

export default ListagemItens