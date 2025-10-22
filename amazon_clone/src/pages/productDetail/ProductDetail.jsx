import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../api/api'
import ProductCard from '../../components/Product/ProductCard'
function ProductDetail() {
  const { productId } = useParams();
  const [product, setproducts] = useState([])
  useEffect(() => {
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
      setproducts(res.data)
      }).catch((err) => {
      console.log(err)
    })
  })
  return (
    <LayOut>
      <ProductCard product={product} />
    </LayOut>
  );
}

export default ProductDetail

