//importar hook(funcion de estado sin tener que escribir mas) de react
import { useState} from 'react';

export default function Nombre({ nombre, setNombre }){
  
    const updateNombre = (e) => {

        setNombre(e.target.value);
    }
    return(
<div>
   <h2>Cambiar nombre</h2>
   <input onChange={updateNombre} type="text" value={nombre} /> 
</div>

    )
}

