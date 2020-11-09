import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class FiltraReceita extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  
  callAPI() {
    fetch("http://localhost:3000/filtrareceitas/:min_carb/:min_pro/:max_cal/:max_carb/:max_gor/:max_pro/:min_gor/:min_cal")
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


 
