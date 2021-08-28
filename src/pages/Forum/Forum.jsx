import React, { Fragment, useState } from 'react'
import { createPosts, getPosts } from '../../data/post'

// import components
import ForumForm from '../../components/ForumForm/ForumForm'
import Card from '../../components/Card/Card'
import UploadImg from '../../components/Upload/Upload'

// import styling
import './Forum.css'

// import data
// import * as postsData from '../../data/posts.JSON'

const Forum = props => {
  const [post, setPost] = useState('')
  const [imgUrl, setimgUrl] = useState('')
  const [comment, setComment] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleInputChange = event => {
    setPost(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    // Trim the post text.
    const postTrimmed = post.trim()

    if (postTrimmed === '') {
      setErrorMessage('A post cannot be empty.')
      return
    }

    // Create post.
    createPosts(props.username, postTrimmed, imgUrl)

    // Reset post content.
    setPost('')
    setErrorMessage('')
  }

  const posts = getPosts()

  return (
    <Fragment>
      <div className='container-forumpage'>
        <ForumForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
        />
        <Card posts={posts} />
      </div>
      <UploadImg />
    </Fragment>
  )
}

export default Forum
