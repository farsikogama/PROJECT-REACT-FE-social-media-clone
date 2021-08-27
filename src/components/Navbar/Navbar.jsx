import React, { Fragment } from 'react'
import './navbar.css'

const Navbar = props => {
  return (
    <Fragment>
      {props.username === null ? (
        <div className='navbar-container'>
          <div className='logo'>Logo</div>
          <div className='link'>
            <div>
              <a href='/'> Home</a>
            </div>
            <div>
              <a href='/login'>Login</a>
            </div>
            <div>
              <a href='/register'>Register</a>
            </div>
          </div>
        </div>
      ) : (
        <div className='navbar-container'>
          <div className='logo'>{props.username}</div>
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
            <div onClick={props.logoutUser}>
              <a href='/'>Logout</a>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Navbar
