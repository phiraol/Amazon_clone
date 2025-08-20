import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Anotherheader from './components/Header/Anotherheader'
import CarouselEffect from './components/carousel/CarouselEffect'
function App() {
  return (
    <>
      <Header />
      <Anotherheader />
      <CarouselEffect/>
    </>
  )
}

export default App
