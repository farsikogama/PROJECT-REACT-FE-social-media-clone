import React, { Fragment, useState } from 'react'
import { verifyUser, registerUser } from '../../data/repository'

// import component
import Register from '../../components/Register/Register'

// impot styling
import './RegisterPage.css'

const RegisterPage = props => {
  const [errorMessage, setErrorMessage] = useState([])
  const [fields, setFields] = useState({
    email: '',
    username: '',
    password: '',
  })

  const handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    // use spread operator.
    const temp = { ...fields }

    // Update field and state.
    temp[name] = value
    setFields(temp)
  }

  const handleSubmit = event => {
    event.preventDefault()

    // validation

    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    const errorData = []

    if (fields.email.length === 0) {
      errorData.push('email cannot be empty')
    }
    if (fields.username.length === 0) {
      errorData.push('username cannot be empty')
    }
    if (fields.password.length === 0) {
      errorData.push('Password cannot be empty')
    }
    if (fields.password.length < 6) {
      errorData.push('Password must be at least 6 character')
    }
    if (!fields.password.match(passw)) {
      errorData.push(
        'Password must contain at least one numeric digit, one uppercase and one lowercase letter'
      )
    } else {
      const registered = registerUser(
        fields.email,
        fields.username,
        fields.password
      )
      errorData.push(registered.message)

      if (registered === true) {
        const verified = verifyUser(
          fields.username,
          fields.email,
          fields.password
        )

        // If verified login the user.
        if (verified === true) {
          props.loginUser(fields.username, fields.email)
          props.setAuth(true)

          // Navigate to the home page.
          props.history.push('/profile')
        }
      }
    }

    // Reset password field to blank.
    const temp = { ...fields }
    temp.password = ''
    setFields(temp)

    // Set error message.
    setErrorMessage(errorData)
  }

  return (
    <Fragment>
      <div className='container-registerpage'>
        <h1>Lets Join the Biggest Network in Our Campus!</h1>
        <Register
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          fields={fields}
          errorMessage={errorMessage}
        />
      </div>
    </Fragment>
  )
}

export default RegisterPage
