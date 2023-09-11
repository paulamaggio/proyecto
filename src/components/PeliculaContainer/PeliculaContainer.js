import React, {Component} from 'react'
import Pelicula from '../Pelicula/Pelicula'
import './styles.css'

export default class PeliculaContainer extends Component {

    render() {
    return (
      <>
      <div className='peliculasContainer'>

        {
        this.props.peliculas.length === 0?
        <h1 className=''>Cargando Peliculas...</h1>
        :
        this.props.peliculas.map((pelicula, idx) => <Pelicula key = {pelicula.title + idx} id = {pelicula.id} poster_path = {pelicula.poster_path} title = {pelicula.title} overview = {pelicula.overview} actualizarState = {this.props.actualizarState? (id) => this.props.actualizarState(id) : false}/>
        )
        }
        
      </div>
      </>
    )
  }
}