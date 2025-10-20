import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import SingUp from './pages/auth/SingUp';
import Order from './pages/orders/Order';
import Payment from './pages/payment/Payment';
import Cart from './pages/cart/Cart';
import Results from './pages/results/Results';
function Routing() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<SingUp />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/category/:categoryName" element={<Results/>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    );
}

export default Routing
