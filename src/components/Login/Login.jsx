import React from 'react'

// import styling here
import './Login.css'

const LoginComp = props => {
  return (
    <>
      <div className='formLog'>
        <h2>LOGIN</h2>
        <form onSubmit={props.handleSubmit}>
          <input
            type='text'
            name='username'
            placeholder='username'
            value={props.fields.username}
            onChange={props.handleInputChange}
            className='formLog-control'
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            className='formLog-control'
            value={props.fields.password}
            onChange={props.handleInputChange}
          />
          <button>Log In</button>
        </form>
        <div className='login-validation'>{props.errorMessage}</div>
      </div>
    </>
  )
}

export default LoginComp
