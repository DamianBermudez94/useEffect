import React, { useEffect } from 'react'

export const AvisoComponente = ({usuario}) => {
    console.log(usuario);
    const mostartAlerta= ()=>{
        alert("Holaaa!"+usuario)
    }
    useEffect(()=>{
        alert("El componente se ha moantado");
        return ()=>{
            alert("El compoennte se ha desmontado")
        }
    },[])
  return (
    <div>
        <h3>Bienvenido {usuario}</h3>
        <button onClick={mostartAlerta}>Mostrar alerta</button>
    </div>
  )
}
