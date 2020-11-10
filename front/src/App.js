import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import Curiosidades from './curiosidades'
import Routes from './routes'
function App(){
  var ingrediente = "";
  function formChanged(){
    ingrediente = document.getElementsByName("valor");
  }
  return(
    <div className="App">
      <p>Curiosidades sobre comidas</p>
      <form action="/curiosidades">
      <button >curiosidades </button>
      </form>
      <p></p>
      <p></p>
      <p>Conversão de medidas</p>
      <form action="/converter">
        Ingrediente:
        <select name="ingre">
            <option value="flour">flour</option> 
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
        </select>
        Converter:
        <input type="text" name="valor" id="valor" onChange="formChanged()"/>
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
    <p></p>
    <p></p>
    <p>Filtrar receitas de acordo com nutrientes</p>
    <form action="/filtrarreceitas" >
        <p>Carboidratos:</p>
        Minimo:<input type="text" name="min_carb"/>
        Máximo:<input type="text" name="max_carb"/>
        <p>Proteina:</p>
        Minimo:<input type="text" name="min_pro"/>
        Máximo:<input type="text" name="max_pro"/>
        <p>Calorias:</p>
        Minimo:<input type="text" name="min_cal"/>
        Máximo:<input type="text" name="max_cal"/>
        <p>Gordura:</p>
        Minimo:<input type="text" name="min_gor"/>
        Máximo:<input type="text" name="max_gor"/>
        <input type="submit" value="Filtrar" />
    </form>
    <p></p>
    <p></p>
    <p>Encontrar ingrediente substituto para:</p>
{/* <!-- substituto ingredientes--> */}
<form action="/substituto" >
        <select name="ingre">
            <option value="flour">flour</option> 
            <option value="butter">butter</option>
            <option value="valor3">Valor 3</option>
        </select>
        <input type="submit" value="Encontrar ingrediente substituto" />
    </form>
    <p> </p>
    <p> </p>
    <p>Filtrar receitas por caloria</p>
    <form action="/receitascaloria" >
        Calorias:<input type="text" name="min_carb"/>
        <select name="valor">
            <option value="Day">day</option> 
            <option value="butter">butter</option>
            <option value="valor3">Valor 3</option>
        </select>
        <input type="submit" value="Filtrar" />
    </form>

      <Routes/>
    </div>

  )
}
export default App;