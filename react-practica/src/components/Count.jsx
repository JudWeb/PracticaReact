//importar hook(funcion de estado sin tener que escribir mas) de react
import { useState} from 'react';



export default function Count() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Contador </h2>

            <h2>{count}</h2>

      <button onClick={() => setCount(count - 150)}>-150</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count * 2 + 10)}>*2+10</button>
      <button onClick={() => setCount(count * count)}>cuadrado</button>
      <button onClick={() => setCount(count / 10 * 2 + count)}>loco</button>
        </div>
    )
}