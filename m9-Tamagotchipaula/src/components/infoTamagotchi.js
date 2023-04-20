function InfoTamagotchi(props) {
  return (
    <div>
      <h1>{props.nombre}</h1>
      <p>Edad: {props.edad}</p>
      <p>Hambre: {props.hambre}</p>
      <p>Salud: {props.salud}</p>
      <p>Felicidad: {props.felicidad}</p>
    </div>
  );
}

export default InfoTamagotchi;