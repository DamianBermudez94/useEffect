import React, { useState } from 'react'

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState('');
  const getUsuariosFecht = ()=>{
    fetch("/api/users?page")
    .then(respuesta=> respuesta.json())
    .then((resultado_final)=>{
      setUsuarios(resultado_final.data())
    },
    error=>{
      console.log(error)
    });
  }
  return (
    <div>

    </div>
  )
}
 