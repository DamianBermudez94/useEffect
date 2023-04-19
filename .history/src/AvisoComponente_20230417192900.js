import React from 'react'

export const AvisoComponente = ({usuario}) => {
    console.log(usuario);
    const mostartAlerta= ()=>{
        alert("Holaaa!"+usuario)
    }
  return (
    <div>
        <h3>Bienvenido {usuario}</h3>
        <button onClick={mostartAlerta}>Mostrar alerta</button>
    </div>
  )
}
