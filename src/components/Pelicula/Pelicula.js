import { Component } from "react"
import { Link } from "react-router-dom"

class Pelicula extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="pelicula-card">
                <Link to={`/detalle/id/${this.props.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${this.props.poster_path}`} alt={this.props.title} />
                </Link>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}
export default Pelicula