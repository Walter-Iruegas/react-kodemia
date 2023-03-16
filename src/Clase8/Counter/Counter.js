import { useState, useEffect } from "react"


export const Counter = ({onCountUpdateCallBack, initialCountValue}) => {

    const [count, setCount] = useState(initialCountValue);


    useEffect(() => {
        onCountUpdateCallBack(count);
    }, [count])


    const onAddClick = () => {
        // const currentCount = count;
        // const newCount = currentCount + 1;
        setCount((prevState) => prevState + 1);
        
    }
    

    const onDeleteClick = () =>{
        // const currentCount = count;
        // const newCount = currentCount - 1;
        setCount((prevState) => prevState - 1);
        // onCountUpdateCallBack(count)
    }


    return (
        <div className="counter" 
            style={
                {
                    display:'flex', 
                    width:'100%', 
                    justifyItems:'center',
                    marginTop: '3rem'
                }}>
            

            <button onClick={onDeleteClick}> - </button>
            <span>{count}</span>

            <button onClick={onAddClick}> + </button>

            

        </div>
    )

}