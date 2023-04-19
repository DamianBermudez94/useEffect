import React, { useEffect, useState } from 'react'

export const AjaxComponent =  () => {
  const [usuarios, setUsuarios] = useState([]);
  const getUsuariosFecht = async ()=>{
    /*fetch("https://reqres.in/api/users?page=2")
    .then(respuesta => respuesta.json())
    .then(resultado_final=>{
    
      setUsuarios(resultado_final.data)
      console.log(resultado_final)
    },
    error=>{
      console.log(error)
    });*/

    const peticion = await fetch ("https://reqres.in/api/users?page=2");
    const {data } = await peticion.json();
    setUsuarios(data)
  }
  useEffect(()=>{
    getUsuariosFecht();
  },[])
  return (
    <div>
      <ol>
            {usuarios.map((usuarios)=>{
              console.log(usuarios)
              return <li key={usuarios.id}>Nombre:{usuarios.last_name}
                                          Apellidos: {usuarios.first_name} 
                                          Email: {usuarios.email}
                                          {usuarios.avatar}
                      </li>
              
            })}
      </ol>
    </div>
  )
}
 