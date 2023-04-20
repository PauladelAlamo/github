import React from 'react';


const BodyTabla = ({datosPersonas, eliminarPersona}) => {
  const filas = datosPersonas.map((fila, indice) => {
    return (
      <tr key={indice}>
        <td>{fila.nombre}</td>
        <td>{fila.apellido}</td>
        <td>
          <button onClick={() =>
            eliminarPersona(indice)}>Eliminar</button>
        </td>
      </tr>
    )
  })
  return <tbody>{filas}</tbody>
}
export default BodyTabla;