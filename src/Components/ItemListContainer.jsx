import React from 'react'
import ItemCount from './ItemCount'


export default function ItemListContainer() {

   
        
    function onAdd(cuanto) {
        alert("Usted agregó: " + cuanto + " producto/s");
    }  

    return (

        <>
            <h1>Padre Container</h1>
            <ItemCount onAdd={onAdd} initial={1} stock={10} />

        </>
    )
}