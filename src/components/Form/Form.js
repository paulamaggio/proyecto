import { Component } from "react";
import './styles.css'

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
            () => this.props.filtrarPeliculas(this.state.valor)
        )
    }

    

    render(){
        return(
            <>
            <p className='buscar'>Buscar:</p>
            <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input className="formulario" onChange={(evento)=> this.guardarValor(evento)} value={this.state.valor}/>
                <button className="lupa1" ><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            </>
        )
    }
}

export default Form