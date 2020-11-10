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
    fetch("http://localhost:3000/converter/:ingrediente/:med_dps/:med_antes/:numero")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }
  render(){
    return(
      <div > 
        <p> oi</p>
      <p >{this.props.param}</p>  
      
      {/* <p >{this.state.apiResponse}</p> */}
     
      </div>
    )
  }
}


 
