import React, { useEffect, useState } from 'react'

export const PruebasComponentes = () => {

    const [ usuario, setUsuario]  = useState("Damián Bermúdez")
    const [ contador, setContador ] = useState(0)
    const cambiarNombre = (e) =>{
       
        setUsuario(e.target.value)
        
    }
    useEffect(()=>{
        setContador(contador)
    },[contador,usuario])
  return (
    <div>
        <h1>El efecto - UseEffect</h1>
        <strong className={ contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>
        <input type='text' onChange={cambiarNombre} placeholder='Cambiar el nombre'/>

    </div>
  )
}
