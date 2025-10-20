import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import classes from './result.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../api/api'
import ProductCard from '../../components/Product/ProductCard'
function Results() {
  const [results, setResults] = useState ([]);
  const { categoryName } = useParams();
  useEffect(() => {
      axios
        .get(`${productUrl}/products/category/${categoryName}`)
        .then((res) => {
          setResults(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [])
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}> category / {categoryName}</p>
        <div className={classes.product_container}>
          {results.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </section>
    </LayOut>
  );
}

export default Results
