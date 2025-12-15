import React, { useContext, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import classes from './payment.module.css'
import { DataContext } from '../../components/dataProvider/DataProvider'
import ProductCard from "../../components/Product/ProductCard"
import { ClipLoader } from "react-spinners";
import {
  useStripe,
  useElements,
  CardElement
} from "@stripe/react-stripe-js";
import CurrancyFormat from '../../components/CurrancyFormat/CurrancyFormat';
import { axiosInstance } from '../../api/axios';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../utility/firebase"; // your initialized db


function Payment() {
  const [{ basket, user }] = useContext(DataContext)
    const totalItem = basket?.reduce((amount, item) => {
      return item.amount + amount;
    }, 0);
  
    const total = basket.reduce((amount, item) => {
      return item.price * item.amount + amount;
    }, 0);
  // console.log(basket)
  const[cardError, setCardError]= useState(null)
    const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing]=useState(false)
  const handleChange = (e) => {
    console.log(e)
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
    
  }

const handlepayment = async(e) => {
    e.preventDefault()
  try {
      setProcessing(true)
      const response = await axiosInstance({
        method: "POST",
        url:`/payment/create?total=${total*100}`
      })
      // console.log(response.data)
      const clientSecret = response.data?.clientSecret;
 const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
   payment_method: {
     card: elements.getElement(CardElement),
   },
 });
 await setDoc(
   doc(collection(db, "users", user.uid, "orders"), paymentIntent.id),
   {
     basket: basket,
     amount: paymentIntent.amount,
     created: paymentIntent.created,
   }
    );
    setProcessing(false)
      // console.log(confirmation)
    } catch (error) {
    setProcessing(false)
    }
  } 

  return (
    <LayOut>
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div className={classes.review}>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} renderDes={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment method</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlepayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "5px" }}>
                      <p>Total Order ({totalItem}) |</p>
                      <CurrancyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {
                      processing ? (
                        <div style={{display:"flex", justifyContent:"center"}}>
                          <ClipLoader color='gray' size={12} />
                          <p>Please wait....</p>
                        </div>
                      ):"pay now"
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment
