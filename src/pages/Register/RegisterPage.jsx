import React, { Fragment } from 'react'

// import component
import Register from '../../components/Register/Register'

// impot styling
import './RegisterPage.css'

const RegisterPage = () => {
  return (
    <Fragment>
      <div className='container-registerpage'>
        <h1>Lets Join the Biggest Network in Our Campus!</h1>
        <Register />
      </div>
    </Fragment>
  )
}

export default RegisterPage
