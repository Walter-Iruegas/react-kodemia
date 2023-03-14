import {useParams, useSearchParams } from 'react-router-dom';
export const Book = () => {
    // Leer los parametros de la URL como /{bookID}/{bookTitle}
    const params = useParams();
    const {bookID, bookTitle} = params;

    // query param o search param {restoDeLaURL}?author=kodemia&publicacion=hoy&editorial=kodemiaTmabien
    // search params regresa un array, que el primer indice contiene los paramatros
    const [searchParams] = useSearchParams();
    console.log("🚀 ~ file: Book.js:10 ~ Book ~ searchParams:", searchParams);
    const author = searchParams.get('author');
    const publicacion=  searchParams.get('publicacion')
    const editorial = searchParams.get('editorial');
    console.log("🚀 ~ file: Book.js:12 ~ Book ~ allParams:", author);
    

    
    

    // {id:2, title:title}
    console.log("🚀 ~ file: Book.js:4 ~ Book ~ params:", params);
    return <div> 

            Book Details {bookID}  
            <br />
            title:  {bookTitle}
            <br />
            author: {author}
            <br />
            fecha de publicacion : {publicacion}
            <br />
            editorial: {editorial}
    </div>
}