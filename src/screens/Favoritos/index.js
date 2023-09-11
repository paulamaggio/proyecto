import React, { Component } from 'react'
import PeliculaContainer from '../../components/PeliculaContainer/PeliculaContainer'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = { 
      favoritos : []
    }
  }
componentDidMount(){
  let storageFav = localStorage.getItem('favoritos')

  if(storageFav !== null){
    let favParse = JSON.parse(storageFav)
    
    Promise.all(
      favParse.map( id => 
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`)
        .then(resp => resp.json()))
    )
    .then( data => this.setState({favoritos:data}))
    .catch(err => console.log(err))
  }
}

actualizarState(id){
  let stateAct = this.state.favoritos.filter(elm => elm.id !==id)
  this.setState(
    {favoritos :stateAct}
    )
}

  render() {
    return (
      <div>
        <h1>Favoritos</h1>
        <PeliculaContainer actualizarState= {(id)=>this.actualizarState(id)} peliculas = {this.state.favoritos} /> 
      </div>
    )
  }
}
