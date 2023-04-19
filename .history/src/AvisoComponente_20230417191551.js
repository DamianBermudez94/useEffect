import React from 'react'

export const AvisoComponente = () => {
    const mostartAlerta= ()=>{
        alert("Holaaa!! Damian")
    }
  return (
    <div>
        <h3>Hemos cambiado de componente</h3>
        <button onClick={mostartAlerta}>Mostrar alerta</button>
    </div>
  )
}
