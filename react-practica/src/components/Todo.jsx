//importar hook(funcion de estado sin tener que escribir mas) de react
import { useState} from 'react';

export default function Todos(){

    const [todos, setTodos] = useState([]);

return(
    <div>
        <h2>TODO</h2>
    </div>
      
 )
};