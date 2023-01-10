import React from 'react';
// import Contador from './components/Contador';
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import FormHook from './components/FormHook';
import EjemploUno from './components/EjemploUno';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {

  const sujeto = {
    nombre: 'Pedrito',
    urlImage: 'https://via.placeholder.com/64',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
  }

  return (
    <div className="container mt-5">
      <h1>Hola JSX</h1>
      <Jsx />
      <Lista />
      <Formulario/>
      <FormHook/>
      <EjemploUno/>
      <Saludo persona="Juanito"/>
      <Saludo persona="Mario"/>
      <Saludo persona="Rosa"/>
      <Comentario sujeto={sujeto}/>
    </div>
  
  );
}

export default App;
