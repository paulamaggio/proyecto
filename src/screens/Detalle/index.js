import React, { Component } from 'react'
import { options } from '../../utils/constants'
import './styles.css'

export default class index extends Component {

  constructor(props){
    super(props)
    this.state = 
    {pelicula : null,
    esFavorito : false}
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
    .then(resp => resp.json())
    .then(data => this.setState({pelicula:data}, () =>{
      if (arrParseado !== null){
        let valPelicula = arrParseado.includes(this.state.pelicula.id)
        if(valPelicula){ 
          this.setState({
            esFavorito: true
          })
        }
      }
    }))
    .catch(err => console.log(err))
    let storageFav = localStorage.getItem('favoritos')
    let arrParseado = JSON.parse(storageFav)

  }
  
  favear(idPelicula){
    let storageFav = localStorage.getItem('favoritos')
    if(storageFav === null){
      let idFav = [idPelicula]
      let idFavStrings = JSON.stringify(idFav)
      localStorage.setItem('favoritos', idFavStrings)}
    else{
      let idPel = JSON.parse(storageFav)
      idPel.push(idPelicula)
      let idStrings = JSON.stringify(idPel)
      localStorage.setItem('favoritos', idStrings)
    }

    this.setState({
      esFavorito :true
    })
  }

  desFavear(idPelicula) {
    let storageFav = localStorage.getItem('favoritos')
    let arrParseado = JSON.parse(storageFav)
    let favsFiltrados = arrParseado.filter((id)=> id !== idPelicula)
    let arrString = JSON.stringify(favsFiltrados)
    localStorage.setItem('favoritos', arrString)
    this.setState({
      esFavorito:false
    })
  }
  render(){
    console.log(this.props);
    return(
      this.state.pelicula !== null ?
      <div className= 'flex'>
        <img className='imagenDetalle' src={`https://image.tmdb.org/t/p/w200${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
        <p clasName="texto" ><h4>{this.state.pelicula.title}</h4>
        <h5>Rating: {this.state.pelicula.vote_average}</h5>
        <h5>Fecha de estreno: {this.state.pelicula.release_date}</h5>
        <h5>Duracion: {this.state.pelicula.runtime}</h5>
        <h5 className="sinopsis" >Sinópsis: {this.state.pelicula.overview}</h5>
        {
          this.state.esFavorito ?
          <button className="lupa" onClick={()=> this.desFavear(this.state.pelicula.id)}><i class="fa-solid fa-heart"></i></button> 
          : 
          <button className="lupa" onClick={() => this.favear(this.state.pelicula.id)}><i class="fa-regular fa-heart"></i></button>
        }
        </p>
      </div>
      :
      <h1 className=''>Cargando Peliculas...</h1>
    )
  }
}
