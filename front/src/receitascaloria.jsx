import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class ReceitasCalorias extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  
  callAPI() {
    fetch("http://localhost:3000/receitascaloria/2000/day")
     // sabemos que deveria ser: http://localhost:3000/receitascaloria/:numerocal/:prazo
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


 
