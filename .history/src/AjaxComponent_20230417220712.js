import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState();
  const getUsuariosFecht = ()=>{
    fetch("/api/users?page")
    .then(respuesta=> respuesta.json())
    .then((resultado_final)=>{
      setUsuarios(resultado_final.data())
      console.log(resultado_final)
    },
    error=>{
      console.log(error)
    });
  }
  useEffect(()=>{
    getUsuariosFecht();
  },[])
  return (
    <div>
      <ol>
            {usuarios.map((usuarios)=>{
              return <li>{usuarios}</li>
            })}
      </ol>
    </div>
  )
}
 