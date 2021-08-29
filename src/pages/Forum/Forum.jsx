import React, { Fragment, useState } from 'react'
import { createPosts, getPosts, createComment } from '../../data/post'

// import components
import ForumForm from '../../components/ForumForm/ForumForm'
import Card from '../../components/Card/Card'

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

  const handleInputChangeComment = event => {
    setComment(event.target.value)
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

  const handleSubmitComment = (event, itemId) => {
    event.preventDefault()

    // Trim the post text.
    const commentTrimmed = comment.trim()

    // Create post.
    createComment(props.username, commentTrimmed, itemId)

    // Reset post content.
    setComment('')
  }

  const posts = getPosts() === null ? [] : getPosts()

  return (
    <Fragment>
      <div className='container-forumpage'>
        <ForumForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
        />
        <Card
          posts={posts}
          handleInputChangeComment={handleInputChangeComment}
          handleSubmitComment={handleSubmitComment}
        />
      </div>
    </Fragment>
  )
}

export default Forum
