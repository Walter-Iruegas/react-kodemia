// importaciones
import './card.css';

const Card = ({BGImage,cardTitle, description}) => {

    // si no tenemos datos para la Card, mostrar un mensaje de instrucciones

    if (BGImage === "" && cardTitle === "" && description === "")
        return (<h2>Para ver la card, llenar el formulario</h2>)
           
    // render de la app
    return (
        <div className="card">
            <div className="card__image">
                {
                    BGImage !== "" ? <img src={BGImage} alt="dasdasdasd"/> 
                    : null
                }
            </div>
            <div className="card__copy">
                <h1>{cardTitle}</h1>

                <p>
                    {description}
                </p>

            </div>
        </div>
    )
}

export default Card;
