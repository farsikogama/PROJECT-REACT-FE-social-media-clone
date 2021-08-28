import React, { Fragment, useState } from 'react'

// import component
import Modal from '../Modal/Modal'

// import styling
import './Card.css'

const commentsData = [
  {
    id: 1,
    author_id: 'gama',
    post_id: '',
    comment: 'comment 1',
  },

  {
    id: 2,
    author_id: 'gama',
    post_id: '',
    comment: 'comment 2',
  },
  {
    id: 3,
    author_id: 'gama',
    post_id: '',
    comment: 'comment 3',
  },
]

const Card = props => {
  const [show, setShow] = useState(false)

  return (
    <Fragment>
      <div className='container-card'>
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
                  <p>{item.content}</p>
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

                {item.comments.map(x => {
                  return commentsData.map(c => {
                    console.log(c)
                    if (x === c.id) {
                      return (
                        <div className='comments'>
                          <div className='img-comment'></div>
                          <p>{c.comment}</p>
                        </div>
                      )
                    }
                    return null
                  })
                })}
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
