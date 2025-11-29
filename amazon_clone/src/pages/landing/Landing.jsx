import React from 'react'
import LayOut from '../../components/LayOut/LayOut';
import CarouselEffect from '../../components/carousel/CarouselEffect';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';
function Landing() {
    return (
      <LayOut>
        <CarouselEffect />
        <Category />
        <Product />
        <Footer/>
      </LayOut>
    );
}

export default Landing
