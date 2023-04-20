import React, { useState, useEffect } from "react";
import InfoTamagotchi from "./components/infoTamagotchi";
import BotonesTamagotchi from "./components/botonesTamagotchi";


function Tamagotchi() {
  const [nombre, setNombre] = useState('Tamagotchi');
  const [edad, setEdad] = useState(0);
  const [salud, setSalud] = useState(100);
  const [hambre, setHambre] = useState(100);
  const [felicidad, setFelicidad] = useState(100);

  console.log(nombre);
  useEffect(() => {
    const interval = setInterval(() => {
      setEdad(edad => edad + 1);
      setHambre(hambre => Math.max(0, hambre - 1));
      setSalud(salud => Math.max(0, salud - 1));

      setFelicidad(felicidad => Math.max(0, felicidad - 1));
    }, 1000);
    return () => clearInterval(interval);

  }, []);

  const alimentar = () => {
    setHambre(hambre => Math.min(100, hambre + 10));
  };

  const chocolate = () => {
    setHambre(hambre => Math.min(100, hambre + 5));
    setSalud(salud => Math.min(100, salud - 10));
    setFelicidad(felicidad => Math.min(100, felicidad + 10));

  };

  const platano  = () => {
    setHambre(hambre => Math.min(100, hambre + 7));
    setSalud(salud => Math.min(100, salud + 5));
    setFelicidad(felicidad => Math.min(100, felicidad - 10));

  };


  const jugar = () => {
    setFelicidad(felicidad => Math.min(100, felicidad + 10));
  };

  const medicina = () => {
    setSalud(salud => Math.min(100, salud + 20));
  };
  return (
    <div class="tamagotchi">
      {hambre === 0 || felicidad === 0 || salud === 0 ? (
        <h2>Tu tamagotchi ha muerto</h2>
      ) : (
        <>

          <InfoTamagotchi nombre={nombre} edad={edad} hambre={hambre} felicidad={felicidad} salud= {salud}/>
          <BotonesTamagotchi alimentar={alimentar} jugar={jugar} medicina={medicina} chocolate={chocolate} platano={platano}/>
        </>
      )}
    </div>
  );
}
export default Tamagotchi;