
import Count from "./components/Count";
import { useState} from 'react';
import Nombre from "./components/Nombre";
import Todo from "./components/Todo";

//componente
function App() {

  //estado
 const [pag, setPag] = useState('home');
 const [nombre, setNombre] = useState("");

  return (
    <div className="App">
      <h1>Prácticas con React</h1>
      <h2>{
        nombre === ""?
        "Bienvenid@" :
        `Bienvenid@ ${nombre}`
      }
     </h2>

      <button onClick={() => setPag("home")}>Home</button>
      <button onClick={() => setPag("count")}>Count</button>
      <button onClick={() => setPag("nombre")}>Nombre</button>
      <button onClick={() => setPag("todo")}>TO-DO</button>

  {
      pag === "home" ? 
      <p>Bienvenido!</p> : pag === "count"?
      <Count/> : pag === "nombre" ?
      <Nombre nombre={nombre} setNombre={setNombre} /> : pag === "todo" ?
      <Todo /> :
      ""  
  }

 </div>
  )
}

export default App
