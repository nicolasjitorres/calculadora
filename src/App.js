import './App.css';
import Logo from './imagenes/app-logo.png'
import { Boton } from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const manejarSignos = (entrada) =>{
    let valor = input[input.length-1];
    switch (valor) {
      case '+':
      case '-':
      case '*':
      case '/':
        if(input.length-1 === 0 && entrada !== '-'){
          alert('No se puede ingresar un signo " * / + " al inicio');
        }else {
          let aux = input.substring(0,input.length-1);
          setInput(aux + entrada);
        }
        break;
    
      default:
        setInput(input + entrada);
        break;
    }
  }

  const ingresar = (val) => {
    
    switch(val){
      case '+':
      case '-':
      case '*':
      case '/':
        if(input.length === 0 && val !== '-'){
          alert('No se puede ingresar un signo " * / + " al inicio.');
        }else {
          manejarSignos(val);
        }
        break;

      default: 
        setInput(input + val);
        break;
    }
  };

  const calcularResultado = () => {
    let inputStr = input.toString();
    if (inputStr.includes('+') || (inputStr.includes('-') && inputStr.lastIndexOf('-') !== 0) || inputStr.includes('*') || inputStr.includes('/')) { 
      switch(input[input.length-1]){
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
          alert('Deberias ingresar un numero luego del ultimo simbolo.')
          break;
        default:
          setInput(evaluate(input));
          break;
      }
    }
  };

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img
          src = {Logo}
          className='logo'
          alt='Logo de la calculadora'
        />
      </div>

      <div className='contenedor-calculadora'>
        
        <Pantalla input = {input}/>
        {/* aqui asignamos a la propiedad 'input' el valor de input definido anteriormente */}
        
        <div className='fila'>
          <Boton manejarClic = {ingresar}>7</Boton>
          <Boton manejarClic = {ingresar}>8</Boton>
          <Boton manejarClic = {ingresar}>9</Boton>
          <Boton manejarClic = {ingresar}>/</Boton>
        </div>
        
        <div className='fila'>
          <Boton manejarClic = {ingresar}>4</Boton>
          <Boton manejarClic = {ingresar}>5</Boton>
          <Boton manejarClic = {ingresar}>6</Boton>
          <Boton manejarClic = {ingresar}>*</Boton>
        </div>
        
        <div className='fila'>
          <Boton manejarClic = {ingresar}>1</Boton>
          <Boton manejarClic = {ingresar}>2</Boton>
          <Boton manejarClic = {ingresar}>3</Boton>
          <Boton manejarClic = {ingresar}>-</Boton>
        </div>
        
        <div className='fila'>
          <Boton manejarClic = {ingresar}>0</Boton>
          <Boton manejarClic = {ingresar}>.</Boton>
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {ingresar}>+</Boton>
        </div>
        
        <div className='fila'>
          <BotonClear manejarClear = {() => setInput('')}>Clear</BotonClear>
        </div>
        

      </div>

    </div>
  );
}

export default App;
