import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
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
        </div>
        <div className='modal-body'>
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
            type='text'
            name='password'
            placeholder='password'
            className='formReg-control'
            // onChange={e => props.setPassword(e.target.value)}
          />
        </div>
        <div className='modal-footer'>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
