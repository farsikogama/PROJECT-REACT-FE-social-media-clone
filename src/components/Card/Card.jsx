import React, { Fragment, useState } from 'react'

// import component
import Modal from '../Modal/Modal'

// import styling
import './Card.css'

const Card = props => {
  const [show, setShow] = useState(false)

  return (
    <Fragment>
      <div className='container-card'>
        {/*  */}
        {props.posts.length === 0 ? (
          <span className='text-muted'>No posts have been submitted.</span>
        ) : (
          props.posts.map(item => (
            <div className='card'>
              <div className='user-name'>
                <p>{item.username}</p>
              </div>
              <div className='body-card'>
                <div className='posting'>
                  <p>{item.text}</p>
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
              </div>
            </div>
          ))
        )}
      </div>
      <Modal
        type='editPost'
        title='Edit Post'
        onClose={() => setShow(false)}
        show={show}
      >
        <p>This is modal body</p>
      </Modal>
    </Fragment>
  )
}

export default Card
