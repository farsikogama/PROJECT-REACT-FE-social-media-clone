// import styling here
import './Register.css'

const RegisterComp = props => {
  return (
    <>
      <div className='formLog'>
        <h2>Register</h2>
        <form>
          <input
            type='email'
            name='email'
            placeholder='email'
            className='formReg-control'
            // onChange={e => props.setEmail(e.target.value)}
          />
          <input
            type='text'
            name='name'
            placeholder='user name'
            className='formReg-control'
            // onChange={e => props.setPassword(e.target.value)}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            className='formReg-control'
            // onChange={e => props.setPassword(e.target.value)}
          />
          <button>Register</button>
        </form>
      </div>
    </>
  )
}

export default RegisterComp
