import { useState } from "react"
import { Counter } from "../Counter"


const ResultsCounterChildren = () => {
    return <div> Contador hijo  </div>
}

const ResultsCounter = ({count}) => {
    return <div> 
        Contador de Clicks : {count} 
        <ResultsCounterChildren/>
    </div>
}


export const EjemploLiftState = () => {

    const [resultsCount, setResultsCount] = useState(0);

    const updateResultsCount = (newResultsValue) => {
        setResultsCount(newResultsValue);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col col-4"> 
                    <Counter 
                        initialCountValue = {resultsCount} 
                        onCountUpdateCallBack = {updateResultsCount}/> 
                </div>

                <div className="col col-8"> 
                    <h2>Resultados Contador</h2>

                    Contador de Clicks : {resultsCount} 
                    {/* <ResultsCounter count = {resultsCount}/> */}
                </div>
            </div>
            
        </div>
    )
}