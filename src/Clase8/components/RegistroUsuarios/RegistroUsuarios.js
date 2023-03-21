
// Importar Dependencias
import { useState } from 'react'
import {UserFormRegister} from '../UserFormRegister';
import {UsersList} from '../UsersList';
import './RegistroUsuarios.css'

// Objetivo Practica
// 1. Modularizar el Componente RegistroUsuarios en partes
// Componente Form
// Componente Lista
// Componente List Item
// 2. Hacer estrategia para comunucar datos entre los componentes o compartir state



export const RegistroUsuarios = () => {


    const [usuariosRegistrados, setUsuariosRegistrados] = useState([])
    console.log("🚀 ~ file: RegistroUsuarios.js:21 ~ RegistroUsuarios ~ usuariosRegistrados:", usuariosRegistrados);

    const onFormSubmitCallBack = (newUser) => {
        // crear una lista nueva de usuarios, copiando la original del state
        // [1,2,3,4,5]       1,2,3,4,5, {....}
        const newUserList = [...usuariosRegistrados, newUser];
        setUsuariosRegistrados(newUserList);

    }

    return (
        <div className="container-fluid registro-container">
            <div className="row">

                <div className="col">
                    <h2>Formulario de Registro</h2>

                    <UserFormRegister onFormSubmitCallBack= {onFormSubmitCallBack}/>
                </div>

                <div className="col">
                    <h2>Usuarios Registrados</h2>

                    <UsersList usuariosRegistrados = {usuariosRegistrados} />

                   
                </div>
            </div>

        </div>
    )
}