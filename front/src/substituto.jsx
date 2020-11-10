import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class Substituto extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  
  callAPI() {
    fetch("http://localhost:3000/substituto/flour")
    // sabemos que deveria ser: http://localhost:3000/:ingrediente
    // porem não tivemos tempo de pegar os valores da url para passar aqui, desta forma, deixamos alguns valores para mostrar que funciona
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }
  render(){
    return(
      <div > 
    
      <p >{this.state.apiResponse}</p>
      
      </div>
    )
  }
}


 
