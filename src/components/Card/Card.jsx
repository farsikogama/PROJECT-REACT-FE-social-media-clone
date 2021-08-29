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
        {props.posts.length === 0 ? (
          <span className='text-muted'>No posts have been submitted.</span>
        ) : (
          props.posts.map(item => (
            <div className='card'>
              <div className='user-name'>
                <p>{item.author_id}</p>
              </div>
              <div className='body-card'>
                <div className='posting'>
                  <p>{item.content}</p>
                  <div>
                    <button className='edit' onClick={() => setShow(true)}>
                      Edit
                    </button>
                    <button
                      className='delete'
                      onClick={e => props.handleDeletePost(e, item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div>
                  <form
                    className='reply'
                    onSubmit={e => props.handleSubmitComment(e, item.id)}
                  >
                    <input
                      type='text'
                      placeholder='comments'
                      onChange={props.handleInputChangeComment}
                    />
                    <button className='approve'>reply</button>
                  </form>
                </div>

                {item.comments.map(x => {
                  return props.comments.map(c => {
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
