import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { endpoints } from '../services/endpoints';
import {Loader} from '../Loader/Loader'
export const ProductDetails = () => {

    const [productDetails, setProductDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // leer id de la ruta
    const params = useParams();
    const {productID} = params;

    useEffect(() => {
        // Crear funcion para traer los datos del API
        const fetchData = async () => {
            try {
                const endpointURL = `${endpoints.getProducts}/${productID}`;
                const product = await axios.get(endpointURL);
                console.log("🚀 ~ file: ProductDetails.js:20 ~ fetchData ~ product:", product);
                setProductDetails(product.data)
            }
            catch(error) {
                alert(error);
            }
            finally{
                setIsLoading(false);
            }
        }

        fetchData();

    },[])

    
    if(isLoading)
        return <Loader/>

    return (
        <div>
            <h1> Product {productID}</h1>
            {JSON.stringify(productDetails, null, 2)}
        </div>
    )
}