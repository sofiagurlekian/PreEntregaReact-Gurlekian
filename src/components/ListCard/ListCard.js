import React, {useState, useEffect} from 'react';
import CardProduct from "../CardProduct/CardProduct";
import "./ListCard.css";
// import Spinner from '../Spinner/Spinner';

import {Link} from "react-router-dom";

const ListCard = () => {
    const [products, setProducts] = useState ([]);
// const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
        // setIsLoading(false)
        fetch("https://raw.githubusercontent.com/sofiagurlekian/PreEntregaReact-Gurlekian/main/data.json")
        .then((data) => data.json())
        .then((response) => setProducts(response))
        .catch((error) => console.error('Error fetching data:', error));
        //.finally(setIsLoading(false))

        //setTimeOut(()=>{
        //setIsLoading(false)
        //}, 1000);
    }, [])
  
    return <div className='Cards-List'>
        {/* {isLoading ? <Spinner/> : <CardProduct/>} */}
        {products.map((product) => {
            return (
                
                <div key= {product.id}>
                <Link to={`/detail/${product.id}`}>
                    <CardProduct product={product}/>
                </Link>
                </div>
            )
        })}
    </div>
}

export default ListCard
