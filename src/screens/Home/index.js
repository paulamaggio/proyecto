import React, { Component } from 'react'
import { options } from '../../utils/constants'
import Form from '../../components/Form/From'
import PeliculaContainer from '../../components/PeliculaContainer/PeliculaContainer'

export default class index extends Component {

  constructor(props){
    super(props)
    this.state = {
        popular: [],
        // backup: [],
        // page: 1,
        upcoming: [],
        // backupUp: []
    }
  }

  componentDidMount (){
    fetch('https://api.themoviedb.org/3/movie/popular', options)
    .then(resp => resp.json())
    .then(data => this.setState({
      popular: data.results.slice(0,5)
    }))
    .catch(err => console.error(err));
  
    fetch('https://api.themoviedb.org/3/movie/now_playing', options)
    .then(resp => resp.json())
    .then(data => this.setState({
      upcoming: data.results.slice(0,5)
    }))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Form/>
        <main>
          <h2>Top Movies</h2>
          <PeliculaContainer peliculas = {this.state.popular}/>
          <h2>Upcoming Movies</h2>
          <PeliculaContainer peliculas = {this.state.upcoming} />
        </main>
      </div>
    )
  }
}
