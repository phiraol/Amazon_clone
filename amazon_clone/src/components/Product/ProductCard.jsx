import React from 'react'
import Rating from "@mui/material/Rating";
import CurrancyFormat from '../CurrancyFormat/CurrancyFormat';
import classes from "./product.module.css";

function ProductCard({ product }) {
  const { image, title, rating, id, price } = product
  return (
    <div className={`${classes.card_continer}`}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* {rating} */}
          <Rating value={rating.rate} precision={0.25} />
          <small>{rating.rate}</small>
          {/* {price} */}
        </div>
        <div>
          <CurrancyFormat amount={price}></CurrancyFormat>
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard
