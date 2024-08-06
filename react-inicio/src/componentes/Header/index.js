import estilos from "./Header.module.css"

function Header() {
    return (
        <>
            <header className={estilos.header}>
                <div className={estilos.headerLogo}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" />
                    <span className={estilos.headerTitulo}>React Store</span>
                </div>

                <div className={estilos.headerIcones}>

                </div>

            </header>
        </>
    )
}

export default Header;