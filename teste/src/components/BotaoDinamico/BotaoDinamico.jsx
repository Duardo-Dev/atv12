function Botao(props){
    const estiloBotao={
        backgroundColor :props.cor,
        color:'white',
        padding:'10px',
        margin:'10px',
        border:'none',
        borderRadius:'15px',
        cursor:'pointer',
        fontSize:'16px'

    }


    return <button style={estiloBotao} onClick={props.click}>

       {props.children}
    </button>
}
export default Botao