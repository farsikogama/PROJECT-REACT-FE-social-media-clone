import React, { Fragment } from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar-container'>
        <div className='logo'>Logo</div>
        <div className='link'>
          <div>Home</div>
          <div>Forum</div>
          <div>Login</div>
          <div>Register</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
