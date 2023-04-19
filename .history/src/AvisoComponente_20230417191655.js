import React from 'react'

export const AvisoComponente = (props) => {
    console.log(props);
    const mostartAlerta= ()=>{
        alert("Holaaa!! Damian")
    }
  return (
    <div>
        <h3>Bienvenido {}</h3>
        <button onClick={mostartAlerta}>Mostrar alerta</button>
    </div>
  )
}
