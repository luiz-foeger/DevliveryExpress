import estilos from './NaoEncontrada.module.css'

function NaoEncontrada() {
    return (                
        <div className={estilos.error}>              
                <img src="/images/react.png" alt="Sobre Nos" />
                <div>
                    <h1> Página não encontrada</h1>
                    <p>
                       Lamentavelmente não reconhecemos o link ou página que você deseja acessar. Favor revisar a página anterior.
                    </p>   
                </div>
            </div>        
    )
}

export default NaoEncontrada