import './App.css';
import logo from "./imagenes/logo.png";
import Boton from "./componentes/Boton.jsx";
import "./hojas-de-estilo/Boton.css";
import Contador from "./componentes/Contador.jsx";
import "./hojas-de-estilo/Contador.css";
import { useState } from "react";

function App() {

  //-------------------------------------------------------------------------------------------------------------------------------------------

  //duda numero 1 del bloc de notas de preguntas - ¿las funciones van aqui y luego se asignan o van en las funciones prop de los componentes?
    /*ejemplo de la funcion que se pondria para llenar los props de los botones
    
    const manejarClic = () => {
       console.log("Click!");
    }

    para luego llenar el prop de la funcion con:

    manejarClic={() => {manejarClic} 
    
    -------------------------------------------------------------------------------------------------------------------------------------------
    */

    const [numClics, setNumClics] = useState(0);

    return (
    <div className="App">
        <div className="logo-contenedor">
            <img
              src={logo} 
              className="logo" 
              alt="logo" 
            />
        </div>

        <div className='contenedor-contador'>
          <Contador //duda, donde se actualiza este numClics, porque en el boton solo se le suma 1 a la variable, pero una vez sumada no se almacena en ningina parte y menos en si misma
            numClics={numClics} 
          />
        </div>

        <div className="contenedor-principal" id="contenedor-principal">

          <Boton //duda numero 1 del bloc de notas de preguntas - este es el boton cuya funcion tiene un prop funcion, ¿se debe llenar aqui la funcion o es mejor arriba?
            texto="Clic" 
            esBotonDeClic={true} 
            manejarClic={() => {
              setNumClics(numClics + 1);
            }} 
          />

          <Boton //duda numero 1 del bloc de notas de preguntas - este es el boton cuya funcion tiene un prop funcion, ¿se debe llenar aqui la funcion o es mejor arriba?
            texto="Reiniciar" 
            esBotonDeClic={false} 
            manejarClic={() => {
              setNumClics(0);
            }} 
          />

        </div>
    </div>
  );
}

export default App;
