import React, { Component } from 'react'
import { options } from '../../utils/constants'
import PeliculaContainer from '../../components/PeliculaContainer/PeliculaContainer'
import Form from '../../components/Form/Form'

export default class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      popular: [],
      backup: [],
      todas : [],
      // page: 1,
      upcoming: [],
      // backupUp: []
      valorInput: "",
      todas:[],
      resultados: false
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie', options)
      .then(resp=>resp.json())
      .then(data=>this.setState({
        todas: data.results
      }))
      .catch(err=>console.error(err))

    fetch('https://api.themoviedb.org/3/movie/popular', options)
      .then(resp => resp.json())
      .then(data => this.setState({
        popular: data.results.slice(0, 5)
      }))
      .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/now_playing', options)
      .then(resp => resp.json())
      .then(data => this.setState({
        upcoming: data.results.slice(0, 5)
      }))
      .catch(err => console.error(err));
  }

  
  filtrarPeliculas(busqueda) {
    console.log(busqueda)
        this.setState({
          valorInput: busqueda
        })
    
        let pelisFilt = this.state.todas.filter((elm) => elm.title.toLowerCase().includes(busqueda.toLowerCase()))
         this.setState({
           resultados: pelisFilt
         })
      }

  render() {
    return (
      <div>
        <Form filtrarPeliculas={(busqueda) => this.filtrarPeliculas(busqueda)} />
        <h1>Home</h1>
        <main>
          {this.state.valorInput === "" ?
          <>
            <h2>Top Movies</h2>
          <PeliculaContainer peliculas = {this.state.popular}/>
          <h2>Upcoming Movies</h2>
          <PeliculaContainer peliculas = {this.state.upcoming} />
          </>
          : 
          (this.state.resultados ?
              (this.state.resultados.length === 0 ?
                <>
                  <h2>Resultados de busqueda:</h2>
                  <h4>No hay resultados que coincidan con tu busqueda</h4>
                </>
                :
                <>
                  <h2>Resultados de busqueda:</h2>
                  <PeliculaContainer peliculas={this.state.resultados}/> 
                </>)
                :
                <h2>Loading...</h2>
            )
          }
        </main>
      </div>
    )
  }
}
