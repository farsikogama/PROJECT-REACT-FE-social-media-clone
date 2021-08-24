import React, { Fragment } from 'react'

// import components
import Login from '../../components/Login/Login'

// import styling
import './LoginPage.css'

const LoginPage = () => {
  return (
    <Fragment>
      <div className='container-loginpage'>
        <h1>Lets Rolllllll !</h1>
        <Login />
      </div>
    </Fragment>
  )
}

export default LoginPage
