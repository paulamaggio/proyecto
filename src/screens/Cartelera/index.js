import React, { Component } from 'react'
import { options } from '../../utils/constants'
import PeliculaContainer from '../../components/PeliculaContainer/PeliculaContainer'

export default class index extends Component {

  constructor(props){
    super(props)
    this.state = {
      upcoming: [],
      // backupUp: []
    }
  }

  componentDidMount (){
    fetch('https://api.themoviedb.org/3/movie/now_playing', options)
    .then(resp => resp.json())
    .then(data => this.setState({
      upcoming: data.results
    }))
    .catch(err => console.error(err));
  }

  render() {
    return (
        <main>
        <h2>Upcoming Movies</h2>
          <PeliculaContainer peliculas = {this.state.upcoming} />
        </main>
    )
  }
}
