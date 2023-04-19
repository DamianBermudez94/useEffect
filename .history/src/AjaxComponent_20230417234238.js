import React, { useEffect, useState } from 'react'

export const AjaxComponent =  () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando ] = useState(true);
  const [ errores, setErrores] = useState("");

  const getUsuariosFecht = ()=>{
    setTimeout(async()=>{
      try {
        const peticion = await fetch ("https://reqres.in/api/users?page=2");
        const {data } = await peticion.json();
        setUsuarios(data);
        setCargando(false);
        setErrores()
      } catch (error) {
        console.error("la carga de datos a pasado el limite de tiempo")
      }
      
    },[2000])
    
  }
  useEffect(()=>{
    getUsuariosFecht();
    
  },[])
  
  if (errores !== "") {
    return (
      <div>
        <h3>El tiempo de carga de los datos paso su limite</h3>
      </div>
    )
  }else if(cargando == true){
    return (
      <div>
        <h3>Cargandooo.....</h3>
      </div>
    )
   }else if(cargando == false && errores == ""){
    return (
      <div>
        <ol>
              {usuarios.map((usuarios)=>{
                console.log(usuarios)
                return( <li className='usuarios' key={usuarios.id}>
                                            <img src={usuarios.avatar} className='img-avatar'/>
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