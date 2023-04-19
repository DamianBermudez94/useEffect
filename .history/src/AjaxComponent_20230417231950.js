import React, { useEffect, useState } from 'react'

export const AjaxComponent =  () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando ] = useState(true);

  const getUsuariosFecht = ()=>{
    setTimeout(async()=>{
      const peticion = await fetch ("https://reqres.in/api/users?page=2");
      const {data } = await peticion.json();
      setUsuarios(data)
    },[2000])
    
  }
  useEffect(()=>{
    getUsuariosFecht();
    setCargando()
  },[])
  

   if(cargando === false){
    return (
      <div>
        Cargandooo.....
      </div>
    )
   }else{
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
      </div>
      )

   }


}