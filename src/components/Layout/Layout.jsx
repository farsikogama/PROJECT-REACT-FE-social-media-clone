import React from 'react'

// import Component
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

// import styling
import './layout.css'

export default function Layout({ username, logoutUser, children }) {
  return (
    <div>
      <Navbar
        className='layout-navbar'
        username={username}
        logoutUser={logoutUser}
      />
      <div className='layout-container'>{children}</div>
      <Footer className='tess' />
    </div>
  )
}
