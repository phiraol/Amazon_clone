import React, { useContext } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/dataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrancyFormat from "../../components/CurrancyFormat/CurrancyFormat";
import { Link } from "react-router-dom";
import classes from "./cart.module.css";
import { Type } from "../../utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  // ⬅ THIS IS THE CORRECT WAY
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount
  }, 0)
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    })
  }
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
    }
  
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.card_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>No item in your cart</p>
          ) : (
            basket.map((item, i) => (
              <section className={classes.cart_container}>
                <ProductCard
                  key={i}
                  product={item}
                  renderDes={true}
                  flex={true}
                  renderAdd={false}
                />

                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={30} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={30} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ( {basket?.length} items)</p>
              <CurrancyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain a gift</small>
            </span>
            <Link to="/payment"> continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
