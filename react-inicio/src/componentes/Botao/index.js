import estilos from'./Botao.module.css';
const Botao = (props) => {
    return (
        <>
            <h1 className={estilos.botao}>Botão do {props.nome}</h1>
            <p>{props.children}</p>
        </>
    );
}

export default Botao