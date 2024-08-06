import { Link, useLocation } from "react-router-dom"
import MenuLink from "../MenuLink"
import estilos from "./MenuNav.module.css"

function MenuNav() {

    const localizacao = useLocation()
    console.log('localizacao', localizacao)

       
    return (
        <nav className={estilos.navegacao}>
            <ul>
                <MenuLink to="/"> Principal </MenuLink>
                <MenuLink to="/sobre"> Sobre nós </MenuLink>
                <MenuLink to="/novo-link"> Novo Link </MenuLink>               
            </ul>
        </nav> 
    )
}

export default MenuNav