import { useRef, useState } from "react"
export const CopyApp = () => {

    const inputRef = useRef();
    const [isCopied, setIsCopied] = useState(false);


    const onCopyClick = () => {
        const input = inputRef.current;
        input.select();
        try {
            document.execCommand('copy');
            setIsCopied(true)
        }
        catch(error) {
            alert(error)
            setIsCopied(false)
        }
        
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }



    

    return  (
        <div>
            <input 
                type="text" 
                id="textInput" 
                ref={inputRef}                
                style={{padding: '0 2em'}}
            />

            <button onClick={onCopyClick}> Copiar al portapales</button>

            {
                isCopied && <h5>Elemento Copiado </h5>
            }
        </div>
    )
}


