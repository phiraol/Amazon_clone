import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import classes from './result.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../api/api'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/loader/Loader'
function Results() {
  const [results, setResults] = useState ([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
      axios.get(`${productUrl}/products/category/${categoryName}`)
        .then((res) => {
          setResults(res.data);
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false)
        });
  }, [])
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}> category / {categoryName}</p>
        {
          isLoading ? (<Loader/> ): ( <div className={classes.product_container}>
          {results.map((product) => {
            return <ProductCard product={product} key={product.id} renderAdd={true} renderDes={false}/>;
          })}
        </div>)
        }
      </section>
    </LayOut>
  );
}

export default Results
