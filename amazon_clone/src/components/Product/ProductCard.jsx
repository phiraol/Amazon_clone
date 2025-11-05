import React, { useContext } from 'react'
import Rating from "@mui/material/Rating";
import CurrancyFormat from '../CurrancyFormat/CurrancyFormat';
import classes from "./product.module.css";
import { Link } from 'react-router-dom';
import { DataContext } from '../dataProvider/DataProvider';
import { Type } from '../../utility/action.type';  

function ProductCard({ product, flex, renderDes }) {
  const { image, title, rating, id, price, description } = product;
  const [state, dispatch] = useContext(DataContext)
   
  }
  return (
    <div
      className={`${classes.card_continer} ${
        flex ? classes.flex_container : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className={`${classes.shadow}`}>
        <h3>{title}</h3>
        {renderDes && (
          <div className={`${classes.description}`}>{description}</div>
        )}
        <div className={classes.rating}>
          <Rating value={rating?.rate ?? 0} precision={0.25} readOnly />
          <small>{rating?.rate ?? "N/A"}</small>
        </div>
        <div>
          <CurrancyFormat amount={price}></CurrancyFormat>
        </div>
        <button className={classes.button} onClick={addtocart}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard
