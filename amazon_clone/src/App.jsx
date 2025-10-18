import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Anotherheader from "./components/Header/Anotherheader";
import CarouselEffect from "./components/carousel/CarouselEffect"; 
import Category from "./components/Category/Category"
import Product from "./components/Product/Product";
function App() {
  return (
    <>
      <Header />
      <Anotherheader />
      <CarouselEffect />
      <Category />
      <Product/>
    </>
  );
}

export default App;
