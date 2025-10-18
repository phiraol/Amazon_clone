import React from 'react'
import Header from '../Header/Header'
import Anotherheader from '../Header/Anotherheader'

function LayOut({children}) {
  return (
    <div>
      <Header/>
      <Anotherheader/>
      {children}
      
    </div>
  )
}

export default LayOut
