import React, { Fragment, useState } from 'react'
import { verifyUser } from '../../data/repository'

// import components
import Login from '../../components/Login/Login'

// import styling
import './LoginPage.css'

const LoginPage = props => {
  const [fields, setFields] = useState({ email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState(null)

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
    const users =
      JSON.parse(localStorage.getItem('users')) === null
        ? []
        : JSON.parse(localStorage.getItem('users'))
    let username = ''
    for (const user of users) {
      if (fields.email === user.email) {
        username = user.username
      }
    }

    const verified = verifyUser(username, fields.email, fields.password)

    // If verified login the user.
    if (verified === true) {
      props.loginUser(username, fields.email)

      // Navigate to the home page.
      props.history.push('/profile')
    }

    // Reset password field to blank.
    const temp = { ...fields }
    temp.password = ''
    setFields(temp)

    // Set error message.
    setErrorMessage('Email and / or password invalid, please try again.')
  }

  return (
    <Fragment>
      <div className='container-loginpage'>
        <h1>Lets Rolllllll !</h1>
        <Login
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          fields={fields}
          errorMessage={errorMessage}
        />
      </div>
    </Fragment>
  )
}

export default LoginPage
