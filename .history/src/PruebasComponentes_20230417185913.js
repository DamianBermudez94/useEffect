import React, { useState } from 'react'

export const PruebasComponentes = () => {

    const [usuario, setUsuario] = useState("Damián Bermúdez")
    const cambiarNombre = (e) =>{
        console.log(e);
        setUsuario(e.target.value)
        console.log(e,setUsuario)
    }
  return (
    <div>
        <h1>El efecto - UseEffect</h1>
        <strong>{usuario}</strong>
        <input type='text' onChange={cambiarNombre} placeholder='Cambiar el nombre'/>

    </div>
  )
}
