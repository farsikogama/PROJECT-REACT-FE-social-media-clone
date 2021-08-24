import React, { Fragment } from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar-container'>
        <div className='logo'>Logo</div>
        <div className='link'>
          <div>
            <a href='/'> Home</a>
          </div>
          <div>
            <a href='/profile'>Profile</a>
          </div>
          <div>
            <a href='/forum'>Forum</a>
          </div>
          <div>
            <a href='/login'>Login</a>
          </div>
          <div>
            <a href='/register'>Register</a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
