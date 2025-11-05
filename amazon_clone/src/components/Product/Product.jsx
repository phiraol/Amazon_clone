import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from "./product.module.css"
import Loader from '../loader/Loader'
function Product() {
    const [products, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => { 
        setIsLoading(true);
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setProduct(res.data);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err)
            setIsLoading(false);
        })
    },[])
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <section className={classes.product_container}>
            {products.map((singleProduct) => {
              return (
                <ProductCard product={singleProduct} key={singleProduct.id} />
              );
            })}
          </section>
        )}
      </>
    );
}

export default Product
