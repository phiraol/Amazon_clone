import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import Auth from './pages/auth/Auth';
import Order from './pages/orders/Order';
import Payment from './pages/payment/Payment';
import Cart from './pages/cart/Cart';
import Results from './pages/results/Results';
import ProductDetail from './pages/productDetail/ProductDetail';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe(
  "pk_test_51ScumH33zoqqyPTluVAcoonR2sE0z8l3mDKNAc2bv1WivRLYQXOjBpEX96X3co6bwYDN4GB56pD7t7HbrpPJeE0L001TX8wLi6"
);

function Routing() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg={"You must login to see orders"}
                redirect={"/orders"}
              >
                <Elements stripe={stripePromise}>
                  <Order />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route
            path="/payment"
            element={
              <ProtectedRoute
                msg={"You must login to pay"}
                redirect={"/payment"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    );
}

export default Routing
