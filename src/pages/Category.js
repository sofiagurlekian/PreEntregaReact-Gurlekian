import React, {useState, useEffect} from 'react';
import CardProduct from "../components/CardProduct/CardProduct";
// import Spinner from '../Spinner/Spinner';

import {useParams} from "react-router-dom";

const Category = () => {
  
    const [products, setProducts] = useState ([]);

    let {categoryId} = useParams ();

    useEffect(()=>{
      // setIsLoading(false)
      fetch(`/${categoryId}`)
      .then((datos) => datos.json())
      .then((respuesta) => setProducts(respuesta))
      //.finally(setIsLoading(false))

      //setTimeOut(()=>{
      //setIsLoading(false)
      //}, 1000);
  }, [])

  let filteredProducts = products.filter((product) =>{
    return product.type === categoryId;
  })

  return (
    <div className="Cards-List">
      {filteredProducts.map((product) => {
        return (
          <div style= {{ margin:10 }} key={product.id}>
              <CardProduct product={product}/>
          </div>
        ); 
        })}
      
    </div>
  )
}

export default Category
