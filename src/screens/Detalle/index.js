import React, { Component } from 'react'
import { options } from '../../utils/constants'

export default class index extends Component {

  constructor(props){
    super(props)
    this.state = {pelicula : null}
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
    .then(resp => resp.json())
    .then(data => this.setState({pelicula:data}))
    .catch(err => console.log(err))
  }

  render(){
    console.log(this.props);
    return(
      this.state.pelicula !== null ?
      <div>
        <img src={`https://image.tmdb.org/t/p/w200${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
        <h4>{this.state.pelicula.title}</h4>
        <h5>Rating: {this.state.pelicula.vote_average}</h5>
        <h5>Fecha de estreno: {this.state.pelicula.release_date}</h5>
        <h5>Duracion: {this.state.pelicula.runtime}</h5>
        <h5>Sinópsis: {this.state.pelicula.overview}</h5>
        {/* <h5>Genero: {this.state.pelicula.}</h5> */}
      </div>
      :
      <h1 className=''>Cargando Peliculas...</h1>
    )
  }
}

// import React, { Component } from 'react'

// export default class index extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
