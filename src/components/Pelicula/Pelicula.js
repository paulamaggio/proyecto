import { Component } from "react"
import { Link } from "react-router-dom"

class Pelicula extends Component {
    constructor(props) {
        super(props)
        this.state = { verMas: false }
    }

    verMas() { this.setState({ overview: this.props.overview }) }
    verMenos() { this.setState({ overview: true }) }

    render() {
        return (
            <div className="pelicula-card">
                <Link to={`/detalle/id/${this.props.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${this.props.poster_path}`} alt={this.props.title} />
                </Link>
                <h4>{this.props.title}</h4>
                <p>{this.state.overview}</p>
                {this.state.overview === this.props.overview ? (
                    <button className="button" onClick={() => this.verMenos()}>Ver menos</button>
                ) : (
                    <button className="button" onClick={() => this.verMas()}>Ver más</button>
                )}
            </div>
        )
    }
}
export default Pelicula