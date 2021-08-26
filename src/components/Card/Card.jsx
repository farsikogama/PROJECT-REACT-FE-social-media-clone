import React, { Fragment, useState } from 'react'

// import component
import Modal from '../Modal/Modal'

// import styling
import './Card.css'

const Card = () => {
  const [show, setShow] = useState(false)

  return (
    <Fragment>
      <div className='container-card'>
        {/*  */}
        <div className='card'>
          <div className='user-name'>
            <p>John Smith</p>
          </div>
          <div className='body-card'>
            <div className='posting'>
              <p>Hello World!</p>
              <div>
                <button className='edit' onClick={() => setShow(true)}>
                  Edit
                </button>
                <button className='delete'>Delete</button>
              </div>
            </div>
            <div className='reply'>
              <input type='text' placeholder='comments' />
              <button className='approve'>reply</button>
            </div>

            <div className='comments'>
              <div className='img-comment'></div>
              <p>What is the meaning of hello world?</p>
            </div>
            <div className='comments'>
              <div className='img-comment'></div>
              <p>you can just google translate it bruh!!</p>
            </div>
          </div>
        </div>
      </div>
      <Modal title='My Modal' onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </Modal>
    </Fragment>
  )
}

export default Card
