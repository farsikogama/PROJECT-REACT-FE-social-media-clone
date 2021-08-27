// import styling here
import './Register.css'

const RegisterComp = props => {
  return (
    <>
      <div className='formLog'>
        <h2>Register</h2>
        <form onSubmit={props.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='email'
            className='formReg-control'
            value={props.fields.email}
            onChange={props.handleInputChange}
          />
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
            className='formReg-control'
            value={props.fields.password}
            onChange={props.handleInputChange}
          />
          <button>Register</button>
        </form>
        <div className='register-validation'>
          <ul>
            {props.errorMessage.map(x => (
              <li>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default RegisterComp
