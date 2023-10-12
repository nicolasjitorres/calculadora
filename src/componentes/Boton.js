import React from "react";
import '../hojas-de-estilo/Boton.css'

export function Boton(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  };

  return (
    <div
      className={`contenedor-boton${esOperador(props.children)? ' operador' : ''}${props.children === '=' ? ' igual' : ''}`}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  )
}