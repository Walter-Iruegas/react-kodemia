import { useState } from "react";
const EventoDummy = () => {


    
    const [imageClassName, setImageClassName] = useState('image')
    

    const onImageMouseEnter = (event) => {
       setImageClassName('image image-animation');
    }
    

    const onImageMouseLeave = (event) => {
        setImageClassName('image');
    }

    return (
        <div style={{marginTop: '40px'}}>
    
        <img 
            src="https://picsum.photos/400/200" 
            alt="iamge eventos"
            className={imageClassName}
            onMouseEnter={onImageMouseEnter}
            onMouseLeave = {onImageMouseLeave}
        />
        
    </div>
    )
}

export default EventoDummy;