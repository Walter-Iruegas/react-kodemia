import { useState, useEffect } from 'react';
import axios from 'axios';
import {RotatingLines} from 'react-loader-spinner'
import { ProductCard } from "./ProductCard/ProductCard"
import { endpoints } from "./services/endpoints";
import { Loader } from './Loader/Loader';
export const Clase7 = () => {

    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isPostRequestLoading, setIsPostRequestLoading] = useState(false);
    const [productTitle, setProductTitle] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await axios.get(endpoints.getProducts);
                console.log("🚀 ~ file: Clase7.js:13 ~ fetchData ~ products:", products);
                setProducts(products.data.products)
            }
            catch(error) {
                alert(error)
            }
            finally{
                setIsLoading(false);
            }
            
        }

        fetchData();
        
    }, [])

   


   

    // Traer los productos en el evento click
    // con fetch API
    // const onGetProductsClick = () => {
    //     setIsLoading(true);
    //     fetch(endpoints.getAllProducts)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // setear state
    //             setProducts(data.products);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log("🚀 ~ file: Clase7.js:12 ~ onGetProductsClick ~ error:", error);
    //             setProducts()
    //             setIsLoading(false);
    //         })
    // }


    // Traer los productos en el evento click
    // con fetch Async/await
    // const onGetProductsClick = async() => {
    //     setIsLoading(true);
    //     try {
    //         const response = await fetch(endpoints.getAllProducts);
    //         const results = await response.json();
    //         setProducts(results.products);   
    //     }
    //     catch(error) {
    //         alert("error");
    //         setProducts([]);
    //     }
    //     finally {
    //         setIsLoading(false)
    //     }


    // }

    // Get Products con Axios
    const onGetProductsClick = async () => {
        setIsLoading(true)
        try {
            const products = await axios.get(endpoints.getAllProducts);
            setProducts(products.data.products)
            console.log("🚀 ~ file: Clase7.js:53 ~ onGetProductsClick ~ products:", products);
        }
        catch (error) {
            alert('error')
        }
        finally {
            setIsLoading(false)
        }
    }

    const onProductTitleChange = (event) => {
        setProductTitle(event.target.value);    
    }

    // Crear 
    const onNewProuductFormSubmit = (event) => {
        event.preventDefault();
        setIsPostRequestLoading(true);
        const data = {
            title: productTitle,
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            images: [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        }
        axios.post(endpoints.postProduct, data ).then((res) => {
            console.log("🚀 ~ file: Clase7.js:105 ~ axios.post ~ res:", res);
            const newProducts = [res.data,...products];
            setProducts(newProducts);
            setIsPostRequestLoading(false);
        }).catch((error) => {
            alert(error)
        })
        
    }

    // retornar estado de carga si estamos cargando valores del API
    if(isLoading)
        return <Loader/>


    // renderizando nuestro componente
    return (
        <div>
            <h2>Clase 7</h2>

            {/* <button onClick={onGetProductsClick}> Traer Productos </button> */}

            <div className="productsForm">
                <form action="" onSubmit={onNewProuductFormSubmit}>
                    <label htmlFor="productTitle"></label>
                    <input 
                        type="text"
                        id='productTitle' 
                        onChange={onProductTitleChange}
                        name='productTitle'/>


                    {/* <input type="submit" value="crear Producto"/> */}

                    <button type='submit' className='btn btn-primary' disabled={isPostRequestLoading}>
                        
                            <>
                            { isPostRequestLoading && 
                                <RotatingLines
                                    strokeColor="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="20"
                                    visible={true}
                                />}
                                Add New Product
                            </>
                    
                    </button>

                </form>
            </div>

            <div className="container">
                <div className="row">


                    <div className="col col-lg-6">

                        {
                            // isLoading === false && products.length > 0 && 
                            products && products.map((product) => {
                                return <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    image={product.thumbnail}
                                    id={product.id}
                                    price={product.price}
                                    desc={product.description} />
                            })
                        }
                    </div>
                </div>
            </div>



        </div>
    )
}