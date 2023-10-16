import React, {useState, useEffect} from 'react';
import CardProduct from "../components/CardProduct/CardProduct";
// import Spinner from '../Spinner/Spinner';

import {useParams} from "react-router-dom";

const Category = () => {
  
    const [products, setProducts] = useState ([]);

    let {categoryId} = useParams ();

    useEffect(()=>{
      // setIsLoading(false)
      fetch(`https://raw.githubusercontent.com/sofiagurlekian/PreEntregaReact-Gurlekian/main/data.json`)
      .then((data) => data.json())
      .then((response) => setProducts(response.filter((product) =>{
        return product.type === categoryId;
      })))
      .catch((error) => console.error('Error fetching data:', error));
      //.finally(setIsLoading(false))

      //setTimeOut(()=>{
      //setIsLoading(false)
      //}, 1000);

  }, [categoryId])


  return (
    <div className="Cards-List">
      {products.map((product) => {
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
