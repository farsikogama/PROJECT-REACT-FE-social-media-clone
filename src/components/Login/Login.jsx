// import styling here
import './Login.css'

const LoginComp = props => {
  return (
    <>
      <div className='formLog'>
        <h2>LOGIN</h2>
        <form>
          <input
            type='email'
            name='email'
            placeholder='email'
            className='formLog-control'
            // onChange={e => props.setEmail(e.target.value)}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            className='formLog-control'
            // onChange={e => props.setPassword(e.target.value)}
          />
          <button>Log In</button>
        </form>
      </div>
    </>
  )
}

export default LoginComp
