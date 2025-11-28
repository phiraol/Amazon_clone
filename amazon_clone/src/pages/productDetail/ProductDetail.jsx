import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../api/api'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/loader/Loader'
function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setproducts] = useState([])
  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproducts(res.data)
        setIsLoading(false);
      }).catch((err) => {
        console.log(err)
        setIsLoading(false);
    })
  }, [])
  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard product={product}
        flex={true}
        renderDes={true}
        renderAdd={true}
      />}
    </LayOut>
  );
}

export default ProductDetail

