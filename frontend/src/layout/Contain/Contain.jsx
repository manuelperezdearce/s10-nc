import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Contain = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Contain
