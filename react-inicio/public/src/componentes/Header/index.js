import { Icon } from "@iconify/react"
import estilos from "./Header.module.css"

function Header() {

    console.log(estilos)

    return (
        <header>
        <div className={estilos["header-logo"]}>
            <img src="/images/logo.png" alt="Logo do Projeto"/>
            <div className={estilos["header-titulo"]}>
                <a href="/">React + UX Design</a>
                <span>Plataforma de Exemplo</span>
            </div>
        </div>       
        <Icon className={estilos.icones} icon="mingcute:user-4-line" />        
    </header>
    )
}

export default Header