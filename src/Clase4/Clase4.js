
import { useState } from "react";
// import {Todos} from './components/Todos' // Version compleja con array de objetos
import {Todos} from './components/TodosConListaDeTextos'; // version simple con strings
import './Clase4.css'

const DummyList = () => {
    const [listaDatos, setListaDatos] = useState(['1','2']);

    const onAgregarItemClick = () => {
        const newListaDatos = [...listaDatos,'4', '5', '6'];
        setListaDatos(newListaDatos)
    }

    // [1,2,3,4,5,4, referenciaListaDatos, referenciaNewListaDatos]
    // []

    return (
        <>
        <ul>
            {/* listaItem porque es el valor de cada elemento del array */}
            {/* index es un entero, porque es el indice de cada elemento del array */}
            {listaDatos.map((Lista1Item, index) => {
                return <li style={{fontSize:'30px'}} key={index}> {`item: ${Lista1Item} - indice: ${index}`} </li>
            })}
        </ul>

            <button onClick={onAgregarItemClick}>Agregar Item</button>
        </>
    )
}

const Clase4 = () => {
   return (
    <div>
    {/* <DummyList/>*/}

        <Todos/>
    </div>
   )
}

export default Clase4;