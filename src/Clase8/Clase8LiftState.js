import { useState } from "react"
import { Counter } from "./Counter"


const ResultsCounter = ({count}) => {
    return <div> Contador de Clicks : {count} </div>
}


export const Clase8 = () => {

    const [count, setCount] = useState(0);


    const onAddClick = () => {
        // const currentCount = count;
        // const newCount = currentCount + 1;
        setCount((prevState) => prevState + 1)
    }
    

    const onDeleteClick = () =>{
        // const currentCount = count;
        // const newCount = currentCount - 1;
        setCount((prevState) => prevState - 1)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col col-4"> 
                    <Counter  
                        count = {count}
                        onAddClick = {onAddClick}
                        onDeleteClick = {onDeleteClick}
                    /> 
                </div>

                <div className="col col-8"> 
                    <h2>Resultados Contador</h2>

                    
                    <ResultsCounter count = {count}/>
                </div>
            </div>
            
        </div>
    )
}