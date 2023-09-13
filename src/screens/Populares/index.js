import React, { Component } from 'react'
import { options } from '../../utils/constants'
import PeliculaContainer from '../../components/PeliculaContainer/PeliculaContainer'

export default class index extends Component {

  constructor(props){
    super(props)
    this.state = {
        popular: [],
        // backup: [],
    }
  }

  componentDidMount (){
    fetch('https://api.themoviedb.org/3/movie/popular', options)
    .then(resp => resp.json())
    .then(data => this.setState({
      popular: data.results
    }))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Populares</h1>
        <main>
          <PeliculaContainer peliculas = {this.state.popular}/>
        </main>
      </div>
    )
  }
}