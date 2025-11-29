import React from 'react'
import Header from '../Header/Header'
import Anotherheader from '../Header/Anotherheader'
// import Footer from '../Footer/Footer'

function LayOut({children}) {
  return (
    <div>
      <Header/>
      <Anotherheader/>
      {children}
      {/* <Footer/> */}
      
    </div>
  )
}

export default LayOut
