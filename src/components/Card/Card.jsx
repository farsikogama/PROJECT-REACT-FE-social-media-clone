import React, { Fragment, useEffect, useState } from 'react'

import { getComments } from '../../data/post'

// import component
import Modal from '../Modal/Modal'

// import styling
import './Card.css'

const Card = props => {
  const [show, setShow] = useState(false)
  const [postIdEdit, setPostIdEdit] = useState()
  const [comments, setComments] = useState([])

  const looping = author_id => {
    for (let i in props.users) {
      if (props.users[i].username === author_id) {
        return props.users[i]
      }
    }
  }

  const getCommentsData = () => {
    setComments(getComments() === null ? [] : getComments())
  }

  useEffect(() => {
    looping()
    getCommentsData()
  }, [])

  return (
    <Fragment>
      <div className='container-card'>
        {props.posts.length === 0 ? (
          <span className='text-muted'>No posts have been submitted.</span>
        ) : (
          props.posts.map(item => (
            <div className='card'>
              <div className='user-name'>
                {looping(item.author_id).profileImg === '' ? (
                  <div className='img-profile-forum'></div>
                ) : (
                  <div className='img-profile-forum'>
                    <img src={looping(item.author_id).profileImg} alt='' />
                  </div>
                )}

                <p>{looping(item.author_id).username}</p>
              </div>
              {item.content_img === '' ? (
                <div></div>
              ) : (
                <div className='image-posted-forum'>
                  <img src={item.content_img} alt='' />
                </div>
              )}

              <div className='body-card'>
                <div className='posting'>
                  <p>{item.content}</p>
                  <div>
                    {props.username === item.author_id ? (
                      <button
                        className='edit'
                        onClick={() => {
                          setShow(true)
                          setPostIdEdit(item.id)
                        }}
                      >
                        Edit
                      </button>
                    ) : null}
                    {props.username === item.author_id ? (
                      <button
                        className='delete'
                        onClick={e =>
                          props.handleDeletePost(e, item.id, item.author_id)
                        }
                      >
                        Delete
                      </button>
                    ) : null}
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
                      // value={props.comment}
                      onChange={props.handleInputChangeComment}
                    />
                    <button className='approve'>reply</button>
                  </form>
                </div>

                {item.comments.map(x => {
                  return comments.map(c => {
                    if (x === c.id) {
                      return (
                        <div className='comments'>
                          {looping(c.author_id).profileImg === '' ? (
                            <div className='img-comments'></div>
                          ) : (
                            <div className='img-comments'>
                              <img
                                src={looping(c.author_id).profileImg}
                                alt=''
                              />
                            </div>
                          )}

                          <p className='username-comment'>{c.author_id}</p>
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
        handleInputChangeEditPost={props.handleInputChangeEditPost}
        handleSubmitEditPost={props.handleSubmitEditPost}
        postIdEdit={postIdEdit}
      >
        <p>This is modal body</p>
      </Modal>
    </Fragment>
  )
}

export default Card
