import React, { useState } from 'react';

const Form = ({enviarFormulario}) =>{  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

 
  const gestionarCambio = (event) => {
    event.preventDefault();     
    if (nombre && apellido){
          const nuevaPersona = {nombre, apellido};

          enviarFormulario(nuevaPersona);
          
        } 

      }
    return (
      <form onSubmit={gestionarCambio}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre"
            className="form-control" value={nombre}
            onChange={(event) => setNombre(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" name="apellido" id="apellido"
            className="form-control" value={apellido}
            onChange={(event) => setApellido(event.target.value)} />
        </div>
        <button type="submit" value="Enviar">Enviar</button>
      </form>
    );
  
    }
export default Form;