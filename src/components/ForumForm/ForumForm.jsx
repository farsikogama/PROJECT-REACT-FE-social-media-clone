import React, { Fragment } from 'react'

// import components

// import styling
import './ForumForm.css'

const ForumForm = props => {
  return (
    <Fragment>
      <form onSubmit={props.handleSubmitPost} className='container-forumform '>
        <input
          onChange={props.handleInputChangePost}
          type='text'
          name='post'
          value={props.post}
          placeholder='What Is in Your Mind?'
        />
        <div className='image-uploadforum'>
          <label for='myFile'>
            <img src='/asset/icon/camera.png' alt='' />
          </label>
          <input
            type='file'
            id='myFile'
            name='filename'
            onChange={event =>
              props.handleChangeImg(event.target.files[0] || null)
            }
          />
        </div>

        <button className='approve'>Post </button>
      </form>
      <div>{props.errorMessage}</div>
    </Fragment>
  )
}

export default ForumForm
