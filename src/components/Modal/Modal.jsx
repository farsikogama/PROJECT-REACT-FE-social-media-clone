import React, { useEffect } from 'react'
import './Modal.css'

const Modal = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return (
    <div
      className={`modal ${props.show ? 'show' : ''}`}
      onClick={props.onClose}
    >
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h4 className='modal-title'>{props.title}</h4>
          <button onClick={props.onClose}>Close</button>
        </div>
        <div className='modal-body'>
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
              className='formReg-control'
              value={props.fields.username}
              onChange={props.handleInputChange}
            />
            <input
              type='text'
              name='password'
              placeholder='password'
              className='formReg-control'
              value={props.fields.password}
              onChange={props.handleInputChange}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal