import estilos from "./Nav.module.css"
function Nav() {
    // const localizacao = useLocation()
    // console.log('localizacao', localizacao)

    return (

        <nav className={estilos.navegacao}>
            <ul>
                <li><a href="index.html" className={`${estilos.link} ${estilos.linkAtivo}`}> Principal </a></li>
                <li><a href="/" className={estilos.link}> Sobre nós </a></li>
                <li><a href="/" className={estilos.link}> Novo Link </a></li>
            </ul>
        </nav>
    )
}

export default Nav