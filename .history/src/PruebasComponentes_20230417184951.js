import React, { useState } from 'react'

export const PruebasComponentes = () => {

    const [usuario, setUsuario] = useState("Damián Bermúdez")
    const cambiarNombre = (e) =>{
        setUsuario(e.target.value)
    }
  return (
    <div>
        <strong>{usuario}</strong>
        <input type='text' placeholder='Cambiar el nombre'/>

    </div>
  )
}
