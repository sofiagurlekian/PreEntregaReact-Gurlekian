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
        fetch()
        .then((datos) => datos.json())
        .then((respuesta) => setProducts(respuesta))
        //.finally(setIsLoading(false))

        //setTimeOut(()=>{
        //setIsLoading(false)
        //}, 1000);
    })
  
    return <div className='Cards-List'>
        {/* {isLoading ? <Spinner/> : <CardProduct/>} */}
        {products.map((product) => {
            return (
                
                <div key= {product.id}>
                <Link to={`/detail/${product.id}`}>
                    <CardProduct/>
                </Link>
                </div>
            )
        })}
    </div>
}

export default ListCard
