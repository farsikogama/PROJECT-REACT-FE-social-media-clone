import React from 'react'

// import Component
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className='mt-4'>{children}</div>
      <Footer />
    </div>
  )
}
