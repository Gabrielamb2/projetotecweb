import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class Converter extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  
  callAPI() {
    fetch("http://localhost:3000/converter//:ingrediente/:med_dps/:med_antes/:numero")
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


 
