import React, { Fragment } from 'react'

// import components

// import styling
import './ForumForm.css'

const ForumForm = props => {
  return (
    <Fragment>
      <form onSubmit={props.handleSubmit} className='container-forumform'>
        <input
          onChange={props.handleInputChange}
          type='text'
          name='post'
          placeholder='What Is in Your Mind?'
        />
        <input
          type='file'
          id='myFile'
          name='filename'
          onChange={event =>
            props.handleChangeImg(event.target.files[0] || null)
          }
        />
        <button className='approve'>Post </button>
      </form>
      <div>{props.errorMessage}</div>
    </Fragment>
  )
}

export default ForumForm
