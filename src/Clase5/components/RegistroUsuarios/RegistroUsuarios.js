
// Importar Dependencias
import { useState } from 'react'
// import ImageUploader from 'react-images-upload';
import ImageUploading from 'react-images-uploading';


import './RegistroUsuarios.css'

// Objetivo Practica
// 1. Modularizar el Componente RegistroUsuarios en partes
    // Componente Form
    // Componente Lista
        // Componente List Item
// 2. Hacer estrategia para comunucar


export const RegistroUsuarios = () => {

    const [formValues, setFormValues] = useState({
        name: '', // mandatorio
        email: '',// mandatorio
        lastName: '', // mandatorio
        address: '',// mandatorio
        grade: '',// mandatorio
        gender: '',// mandatorio
        other_gender: '',
        hasPayed: false,
        isReady: false,
        pictureURL: ''// mandatorio
    })

    const [usuariosRegistrados, setUsuariosRegistrados] = useState([])

    // Funcion para modificar los inputs
    const onFormInputChange = (event) => {
        const inputID = event.target.id;
        const inputValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        // modificar el state de manera dinamica al seleccionar un atributo que
        // haga match con el ID del input en el que estamos trabajando
        setFormValues({
            ...formValues,
            [inputID]: inputValue
        })

    }

    // Funcion para guardar las imagenes en el state
    const onImageSelected = (pictureFiles) => {
        console.log("🚀 ~ file: RegistroUsuarios.js:42 ~ onImageSelected ~ pictureFiles:", pictureFiles[0]);

        setFormValues({
            ...formValues,
            pictureURL: pictureFiles[0].dataURL
        })
    }


    // Funcion para guardar el usuario en la lista de usuarios en el submit
    const onFormSubmit = (event) => {
        // esto bloquea que la pagina se recargue
        event.preventDefault();

        // primer paso, leer el objeto usuario de los valores del form;
        const newUser = { ...formValues }


        // crear una lista nueva de usuarios, copiando la original del state
        // [1,2,3,4,5]       1,2,3,4,5, {....}
        const newUserList = [...usuariosRegistrados, newUser];
        console.log("🚀 ~ file: RegistroUsuarios.js:65 ~ onFormSubmit ~ newUserList:", newUserList);


        // modiificar el state de usuarios registrados
        setUsuariosRegistrados(newUserList)

    }

    return (
        <div className="container-fluid registro-container">
            <div className="row">

                <div className="col">
                    <h2>Formulario de Registro</h2>

                    <div className=" form-container ">
                        <form action="" onSubmit={onFormSubmit}>

                            <div className="form-group imageContainer">
                                {/* <ImageUploading
                                    withIcon={true}
                                    buttonText="Choose images"
                                    onChange={onImageSelected}
                                    imgExtension={[".jpg", ".jpeg", ".png", ""]}
                                    maxFileSize={5242880}
                                    singleImage={true}
                                /> */}

                                <ImageUploading
                                    onChange={onImageSelected}
                                    maxNumber={1}
                                >
                                    {({
                                        onImageUpload,
                                    }) => (
                                        // write your building UI
                                        <div className="upload__image-wrapper">
                                            <div onClick={onImageUpload}>
                                                Click or Drop here
                                            </div>
                                        </div>
                                    )}
                                </ImageUploading>

                                {formValues.pictureURL !== "" && <img src={formValues.pictureURL} alt="avatar" className="avatar" />}
                            </div>


                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formValues.name}
                                    onChange={onFormInputChange}
                                    className="form-control"
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="lastName">Apellidos</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    value={formValues.lastName}
                                    onChange={onFormInputChange}
                                    className="form-control"
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formValues.email}
                                    onChange={onFormInputChange}
                                    className="form-control"
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="email">Direeci&oacute;n</label>
                                <input
                                    id="address"
                                    type="text"
                                    value={formValues.address}
                                    onChange={onFormInputChange}
                                    className="form-control"
                                />
                            </div>

                            {/* control Select */}
                            <div className="form-group">
                                <label htmlFor="grado">Grado</label>
                                <select
                                    name="grado"
                                    id="grade"
                                    className="form-control"
                                    onChange={onFormInputChange}>
                                    <option value="primaria"> primaria  </option>
                                    <option value="secundaria"> secundaria </option>
                                    <option value="prepa"> prepa</option>
                                </select>
                            </div>

                            {/* control Radio Input */}
                            <div className="form-group">
                                <label htmlFor="genero">Genero</label>

                                <div>
                                    {/* radio 1*/}
                                    <label htmlFor="">
                                        <input
                                            type="radio"
                                            id="gender"
                                            value="masculino"
                                            onChange={onFormInputChange}
                                            checked={formValues.gender === "masculino" ? true : false} />
                                        masculino
                                    </label>
                                    {/* radio 2 */}
                                    <label htmlFor="">
                                        <input
                                            type="radio"
                                            id="gender"
                                            value="femenino"
                                            onChange={onFormInputChange}
                                            checked={formValues.gender === "femenino" ? true : false} />
                                        femenino
                                    </label>
                                    {/* radio 3 */}
                                    <label htmlFor="">
                                        <input
                                            type="radio"
                                            id="gender"
                                            value="otro"
                                            onChange={onFormInputChange}
                                            checked={formValues.gender === "otro"} />
                                        otro
                                    </label>

                                    {/* Mostrar  input para guardar el valor de otro si es activo*/}
                                    {
                                        formValues.gender === "otro" && <input
                                            placeholder='ingrese genero'
                                            type="text"
                                            id="other_gender"
                                            value={formValues.other_gender}
                                            onChange={onFormInputChange}
                                        />
                                    }

                                </div>
                            </div>


                            {/* control para Checkbox */}
                            <div className="form-group">
                                <label htmlFor="pagado"> Inscripcion Pagada </label>
                                <input
                                    type="checkbox"
                                    id="hasPayed"
                                    onChange={onFormInputChange}
                                    checked={formValues.hasPayed}
                                />

                                <label htmlFor="pagado"> Utiles listos </label>
                                <input
                                    type="checkbox"
                                    id="isReady"
                                    onChange={onFormInputChange}
                                    checked={formValues.isReady}
                                />



                            </div>


                            <div className="buttonContainer">
                                <input type="submit" value="save" className="btn btn-primary" disabled={false} />
                            </div>


                        </form>



                    </div>
                </div>

                <div className="col">
                    <h2>Usuarios Registrados</h2>

                    {/* <pre>
                            {JSON.stringify(formValues, null, 2)}
                        </pre> */}

                    {
                        usuariosRegistrados.map((usuario) => {
                            return (
                                <div>
                                    <p>{usuario.name} - {usuario.lastName}</p>
                                    <p>Genero : {usuario.gender}</p>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}