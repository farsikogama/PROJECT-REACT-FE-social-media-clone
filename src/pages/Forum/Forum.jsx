import React, { Fragment, useState, useEffect } from 'react'
import {
  createPosts,
  getPosts,
  createComment,
  deletePost,
  getComments,
} from '../../data/post'

// import components
import ForumForm from '../../components/ForumForm/ForumForm'
import Card from '../../components/Card/Card'

// import styling
import './Forum.css'

// import data
// import * as postsData from '../../data/posts.JSON'

const Forum = props => {
  const [post, setPost] = useState('')
  const [posts, setPosts] = useState([])
  const [imgUrl, setimgUrl] = useState('')
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
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

    const data = getPosts() === null ? [] : getPosts()

    setPosts(data)

    // Reset post content.
    setPost('')
    setErrorMessage('')
  }

  const handleDeletePost = (event, postId) => {
    event.preventDefault()

    console.log(postId, 'ini postId')

    deletePost(postId)
    const data = getPosts() === null ? [] : getPosts()

    setPosts(data)
  }

  const handleInputChangeComment = event => {
    setComment(event.target.value)
  }

  const handleSubmitComment = (event, itemId) => {
    // event.preventDefault()

    // Trim the post text.
    const commentTrimmed = comment.trim()

    // Create post.
    createComment(props.username, commentTrimmed, itemId)

    // Reset post content.
    setComment('')
  }

  const getPostsData = () => {
    setPosts(getPosts() === null ? [] : getPosts())
  }

  const getCommentsData = () => {
    setComments(getComments() === null ? [] : getComments())
  }

  useEffect(() => {
    getPostsData()
    getCommentsData()
  }, [])

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
          handleDeletePost={handleDeletePost}
          comments={comments}
        />
      </div>
    </Fragment>
  )
}

export default Forum
