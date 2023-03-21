import { useState } from 'react';
import Card from '../Card';
import './CardGenerator.css';




const CardGenerator = () => {

    // Directorio de imagenes, para seleccionar de forma aleatoria
    const available_images = [
        'https://picsum.photos/100/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/400/300',
    ]

    // declarar states para manejear los valores de la card
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');


    // Crear Eventos para los inputs
    const onTitleTextChange = (event) => {
        // la variable value, viene del objeto event -> target, 
        // esta contiene el valor de lo que se haya escrito
        const { value } = event.target;
        setTitle(value);
    }

    const onDescTextChange = (event) => {
        const { value } = event.target;
        setDesc(value);
    }

    // Generar un indice de manera aleatorea
    const onImageButtonClick = () => {

        const imageIndex = Math.floor(Math.random() * (available_images.length - 1));
        const randomImageURL = available_images[imageIndex];
        setImage(randomImageURL);
    }


    const onFormSubmit = (event) => {
        // preventDefaut, permite bloquear los eventos por default del DOM
        event.preventDefault();
        alert("Card Guardada");
    }

    // true | false
    // let debeMostrarBotonSubmit = false;
    // if(image === '' || title === '' || desc === '')
    //     debeMostrarBotonSubmit = true;

    const debeMostrarBotonSubmit = (image !== '' && title !== '' && desc !== '');

    return (
        <div className='containerGenerator'>
            <div className="col">

                <form action="#" onSubmit={onFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="">
                            Imagen: {
                                image === "" ? 'Seleccionar imagen' : image
                            }
                        </label>
                        <button
                            onClick={onImageButtonClick}
                            type="button"
                        >
                            Elegir Imagen
                        </button>
                    </div>

                    <div className="input-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            placeholder='title'
                            name='title'
                            onChange={onTitleTextChange}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="desc">Description</label>
                        <textarea
                            name="desc"
                            id=""
                            cols="30"
                            rows="10"
                            onChange={onDescTextChange}>

                        </textarea>
                    </div>


                    {

                        debeMostrarBotonSubmit ? <input type="submit" value="guardar" />
                            : null

                    }

                </form>

            </div>

            <div className="col">
                <Card
                    BGImage={image}
                    cardTitle={title}
                    description={desc}
                />
            </div>

        </div>
    )
}

export default CardGenerator