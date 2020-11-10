import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { browserHistory } from 'react-router';
// import { useLocation } from "@reach/router"
export default class Converter extends Component{
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    
  }
  
  
  callAPI() {
    fetch("http://localhost:3000/converter/flour/grams/cups/2.5")
    // sabemos que deveria ser: http://localhost:3000/converter/:ingrediente/:med_dps/:med_antes/:numero
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


 
