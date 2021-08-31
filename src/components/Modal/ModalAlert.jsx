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
      className={`modal ${props.showAlert ? 'show' : ''}`}
      onClick={props.onClose}
    >
      {props.type === 'alertModal' ? (
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
            <h4 className='modal-title'>{props.title}</h4>
            <button onClick={props.handleDelete} className='modal-confirm'>
              Yes
            </button>
            <button onClick={props.onClose} className='modal-cancel'>
              No
            </button>
          </div>
        </div>
      ) : (
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
            <h4 className='modal-title'>{props.title}</h4>
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
