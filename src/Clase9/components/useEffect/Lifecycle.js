import { useEffect, useState } from "react"

export const Lifecycle = () => {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    // use effect que solo corre cuando se monta el componente
    useEffect(() => {
        console.log('corro cuando se monta el component por primera vez')
    },[])


    // UseEffect que escucha todos los cambios o renderings de la app
    useEffect(() => {
        console.log('corro en cada render inicial o update en el componente')
    })

    useEffect(() => {
        console.log('corro cada vez que se actualiza el couner1', counter1)
        setCounter2(counter1 * 5)
    }, [counter1])


    // useEffect(() => {
    //     console.log('corro cada vez que se actualiza el couner2', counter2)
    // }, [counter2])
    

 
    return (
        <div>
                <h1>Clicks c1: {counter1}</h1>
                <h1>Clicks c2: {counter2}</h1>
                <button onClick={() => setCounter1(counter1+1)}>
                    Increment c1
                </button>
                <button onClick={() => setCounter2(counter2+1)}>
                    Increment c2
                </button>
        </div>
    )
}