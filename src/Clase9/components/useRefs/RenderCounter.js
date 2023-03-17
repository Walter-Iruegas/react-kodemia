import {useState, useEffect, useRef} from 'react';
export const RenderCounter = () => {

    const [textValue, setTextValue] = useState('');
    const counterRef = useRef(0);

    

    useEffect(()=> { 
        console.log('rendering')
        counterRef.current++;
        
    })

    return (
        <div>
            <input 
                type="text" 
                value = {textValue}
                onChange = {(event) => setTextValue(event.target.value)}
                maxLength={5}
                />

            <h3> Este componente se renderizo {counterRef.current} veces </h3>
        </div>   
    )
}