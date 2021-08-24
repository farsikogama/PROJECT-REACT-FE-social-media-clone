import React, { Fragment } from 'react'

// import components

// import styling
import './ForumForm.css'

const ForumForm = () => {
  return (
    <Fragment>
      <form action='' className='container-forumform'>
        <input type='text' name='post' placeholder='What Is in Your Mind?' />
        <button>Post</button>
      </form>
    </Fragment>
  )
}

export default ForumForm
