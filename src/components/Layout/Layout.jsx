import React from 'react'

// import Component
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

// import styling
import './layout.css'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className='layout-container'>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}
