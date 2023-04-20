import React, { useState, useEffect } from "react";
import Tabla from './components/Tabla';
import Form from './components/Form';



const App = () => {

  const [personas, setPersonas] = useState([]);

  useEffect(() =>{
    const obtenerDatos = async () => {
      try {
        const response = await fetch('');
        const data = await response.json(); 
        

        const personasApi = data.map(persona => {
          return {
            nombre: persona.name,
            apellido: persona.username,
            ...persona 
          }
        });
        
        setPersonas(personasApi);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    }
    obtenerDatos(); 
  }, []);

  const eliminarPersona = (indice) => {
    setPersonas(personas.filter((persona, i) => i !== indice));
  }

  const enviarFormulario = (persona) => {
    setPersonas([...personas, persona]); 
  }

  return (
    <div className="container">
      <h1>Tutorial de React</h1>
      <Tabla datosPersonas={personas} eliminarPersona={eliminarPersona} /> 
      <Form enviarFormulario={enviarFormulario} /> 
      </div>
  );
}

export default App;
