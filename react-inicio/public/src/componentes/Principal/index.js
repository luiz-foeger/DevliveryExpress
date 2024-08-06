import estilos from './Principal.module.css'

function Principal(props) {

    console.log(props)

    return (
        <main className={estilos.principal}>
            <div className={estilos.container}>
                {props.children}           
            </div>           
        </main>
    )
  }
  
  export default Principal;