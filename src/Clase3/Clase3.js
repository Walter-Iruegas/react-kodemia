// imports
import CardGenerator from './components/CardGenerator';
import EventoDummy from './components/EventoDummy'
import './clase3.css'

// crear componente
const Clase3 = () => {

    // Fragment = Contenedor vacio que no se renderiza en la pagina, solo sive para react
    return (
        <>
            <div> clase 3 -  Eventos</div>

            <CardGenerator/>

            <EventoDummy/>
{/* 
            <button onClick={onClickHandlerButtonExample1}> Example 1</button>
            <pre>
            {buttonEventProps}
            </pre>


            <img 
                src="https://picsum.photos/400/200" 
                alt="iamge eventos"
                className={imageClassName}
                onMouseEnter={onImageMouseEnter}
                onMouseLeave = {onImageMouseLeave}
            />
             */}
        </>
    )
}

export default Clase3;