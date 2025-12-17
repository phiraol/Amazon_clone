import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import classes from "./order.module.css";
import { DataContext } from "../../components/dataProvider/DataProvider";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../utility/firebase";
import ProductCard from "../../components/Product/ProductCard";
import CurrancyFormat from "../../components/CurrancyFormat/CurrancyFormat"; // optional for currency formatting

function Order() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.uid) return;

    const ordersRef = collection(db, "users", user.uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedOrders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(fetchedOrders);
    });

    return () => unsubscribe(); // cleanup
  }, [user?.uid]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>

          {orders.length === 0 && <p>No orders yet</p>}

          {orders?.map((eachOrder, i) => (
            <div key={eachOrder.id} style={{ marginBottom: "30px" }}>
              <hr />
              <p>
                <strong>Order ID:</strong> {eachOrder.id}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(eachOrder.created * 1000).toLocaleString()}
              </p>
              <p style={{display:"flex"}}>
                <strong>Total:</strong>{" "}
                {eachOrder.amount ? (
                  <CurrancyFormat amount={eachOrder.amount} />
                ) : (
                  `$${eachOrder.amount / 100}`
                )}
              </p>

              <div className={classes.ProductCard}>
                <div>
                  {eachOrder?.basket?.map((orderItem) => (
                    <ProductCard
                      flex={true}
                      product={orderItem}
                      key={orderItem.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Order;
