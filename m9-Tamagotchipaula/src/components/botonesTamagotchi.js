function BotonesTamagotchi(props) {


    return (
        <>
            <button onClick={props.alimentar}>Alimentar</button>
            <button onClick={props.jugar}>Jugar</button>
            <button onClick={props.medicina}>Medicina</button>
            <button onClick={props.platano}>Platano</button>
            <button onClick={props.chocolate}>Chocolate</button>


        </>
    );
}

export default BotonesTamagotchi;