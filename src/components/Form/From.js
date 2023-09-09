import { Component } from "react";

class Form extends Component{
    constructor(props){
        super(props)
        this.state = { valor: '' }
    }

    evitarSubmit(evento){ //detiene el envio del form
        evento.preventDefault()
    }

    guardarValor(evento){
        this.setState(
            {
            valor: evento.target.value //target identifica al campo objetivo del evento y value trae el valor ingresado
            },
            () => this.props.filtrarPeliuclas(this.state.valor)
        )
    }

    render(){
        return(
            <>
            <p>Buscar</p>
            <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input onChange={(evento)=> this.guardarValor(evento)} value={this.state.valor}/>
                <button>lupa</button>
            </form>
            </>
        )
    }
}

export default Form