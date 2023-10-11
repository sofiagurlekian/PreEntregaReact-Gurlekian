import React, {useState, useEffect} from 'react';
import CardProduct from "../components/CardProduct/CardProduct";
// import Spinner from '../Spinner/Spinner';

import {useParams} from "react-router-dom";


const DetailPage = () => {
    let {id} = useParams();
    const [product, setProduct] = useState ([]);
// const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
        // setIsLoading(false)
        fetch(`/${id}`)
        .then((datos) => datos.json())
        .then((respuesta) => setProduct(respuesta))
        //.finally(setIsLoading(false))

        //setTimeOut(()=>{
        //setIsLoading(false)
        //}, 1000);
    }, [])
  
    return 
    <div style={{display: "flex", justifyContent: "center", margin: 20 }}>
       {product.id ? <CardProduct product={product}/> : null}
    </div>
}

export default DetailPage
