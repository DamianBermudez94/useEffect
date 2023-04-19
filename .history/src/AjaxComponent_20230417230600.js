import React, { useEffect, useState } from 'react'

export const AjaxComponent =  () => {
  const [usuarios, setUsuarios] = useState([]);
  
  const getUsuariosFecht = async ()=>{
  
    const peticion = await fetch ("https://reqres.in/api/users?page=2");
    const {data } = await peticion.json();
    setUsuarios(data)
  }
  useEffect(()=>{
    getUsuariosFecht();
  },[])
  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      setUsuariosImg(url);
      console.log(url)
    })
    .catch(error => console.error(error));
   
  },[])
  return (
    <div>
      <ol>
            {usuarios.map((usuarios)=>{
              console.log(usuarios)
              return( <li key={usuarios.id}>
                                          <img src={usuarios.avatar}/>
                                          Nombre:{usuarios.last_name}
                                          Apellidos: {usuarios.first_name} 
                                          Email: {usuarios.email}
                                       
                      </li>)
              
            })}
      </ol>
   
  )
}
 