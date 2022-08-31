
import Count from "./components/Count";
import { useState} from 'react';
import Nombre from "./components/Nombre";

//componente
function App() {

  //estado
 const [pag, setPag] = useState('home');

  return (
    <div className="App">
      <h1>Contador con React</h1>

      <button onClick={() => setPag("home")}>Home</button>
      <button onClick={() => setPag("count")}>Count</button>
      <button onClick={() => setPag("nombre")}>Nombre</button>

  {
      pag === "home" ? 
      <p>Bienvenido!</p> : pag === "count"?
      <Count/> : pag === "nombre" ?
      <Nombre/> :
      ""  
  }

 </div>
  )
}

export default App
