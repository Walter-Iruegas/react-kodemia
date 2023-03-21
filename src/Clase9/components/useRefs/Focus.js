import { useRef, useState } from "react"
export const Focus = () => {

    const inputRef = useRef();
    const [name, setName] = useState("");

    let dummy = 5;

    console.log("🚀 ~ file: Focus.js:5 ~ Focus ~ inputRef:", inputRef);

    const onFocusClickHandler = () => {
        console.log("🚀 ~ file: Focus.js:5 ~ Focus ~ inputRef:", inputRef);

        // inputRef.current.value = "Text value mutado"
        inputRef.current.focus();

        console.log('innerHTML', inputRef.current.outerHTML)
    }


    dummy =10;

    return  (
        <div>
            <input 
                type="text" 
                id="textInput" 
                ref={inputRef}
                value = {name}
                style={{padding: '0 2em'}}
                onChange = {(event) => setName(event.target.value)}
            />

            <button onClick={onFocusClickHandler}> Focus Input</button>
        </div>
    )
}