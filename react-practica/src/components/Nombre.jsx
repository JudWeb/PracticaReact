//importar hook(funcion de estado sin tener que escribir mas) de react
import { useState} from 'react';

export default function Nombre(){

    const [name, setName] = useState('');
    

    const updateName = (e) => {

        setName(e.target.value);
    }
    return(
<div>
    {
        name !== "" ? 
        <h2>Bienvenido,  {name}</h2> :
        <h2>Escoge un nombre</h2>
    }

    <input onChange={updateName} type="text" value={name} />

    
</div>

    )
}

