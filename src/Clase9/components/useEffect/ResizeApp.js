import { useEffect, useState } from "react"
import './styles.css'

export const ResizeApp = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=> {
        // componentDidMount
        const handleWindowResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        // componentDidUnMount
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const isMobile = windowWidth <= 768 ? true : false;
 
    return (
        <div>
            window resize

            window size: {windowWidth}

            <h2 id="hideMobile"> Contenido solo para mobile </h2>
            {
               isMobile &&  <h2> Contenido solo para mobile </h2>
            }

        </div>
    )
}


export const ResizeAppParent = () => {
    const [showResizeComponent, setShowResizeComponent] = useState(false)

    const onClickHandler = () => setShowResizeComponent((prevState) => !prevState);

    return (
        <>
            <button onClick={onClickHandler}>Mostrar Component Resize</button>

            {showResizeComponent && <ResizeApp/>}
        </>
    )
}
