import logo from './logo.svg';
import './App.css';
// import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import Curiosidades from './curiosidades'
import Routes from './routes'
function App(){
  return(
    <div className="App">
      <button>curiosidades</button>
      <form >
        Ingrediente:
        <select name="ingre">
            <option value="flour">flour</option> 
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
        </select>
        Converter:
        <input type="text" name="valor" id="valor" />
        <select name="medicao_antes">
            <option value="cups">cups</option> 
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
        </select>
        
        para :
        <select name="medicao_depois">
            <option value="grams">grams</option> 
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
        </select>
        <button >Converter </button>
    </form>
    {/* <!-- pesquisa receita nutrientes--> */}
<form action="/receitas" method="post">
    <p><input type="submit" value="Receitas" /></p>
</form>

{/* <!-- substituto ingredientes--> */}
<form action="/ingredientes" method="post">
    <p><input type="submit" value="Ingredientes substituto" /></p>
</form>

      <Routes/>
    </div>
  )
}
export default App;