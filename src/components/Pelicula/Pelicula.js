import { Component } from "react"
import { Link } from "react-router-dom"
import './styles.css'

class Pelicula extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            boton : false
        }
    }

    verMenos(){
        this.setState({boton:false})
    }
    verMas(){
        this.setState({boton:true})
    }

    render() {
        return (
            <div className="pelicula-card">
                <Link to={`/detalle/id/${this.props.id}`}>
                <img className="imagen" src={`https://image.tmdb.org/t/p/w200${this.props.poster_path}`} alt={this.props.title} />
                </Link>
                <h4>{this.props.title}</h4>
                {this.state.boton ? 
                <>
                <p>{this.props.overview}</p>
                <button className="boton" onClick={() => this.verMenos()}>VER MENOS</button>
                </>
                :
                <button className="boton" onClick={() => this.verMas()}>VER MAS</button>
                } 

            </div>
        )
    }
}
export default Pelicula