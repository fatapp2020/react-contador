import React, { useEffect, useState } from 'react'

export default function HijoContainer({ arrayDeProductos, onAdd }) {

    const [x, setX] = useState(0);
    const [fecha, setFecha] = useState(new Date())


    function contador() {
        setX(x + 1)
        setFecha(new Date())
    }

    return (
        <>
            <div>{arrayDeProductos.map(item => <p>{item}</p>)}</div>
            <br />
            <button onClick={() => contador()}>Contar Clicks</button>            
            <p>Cantidad de clicks: {x}</p>            
            <p>Fecha actual: {fecha.toLocaleTimeString()}</p>
        </>
    );
}
