import React, { Fragment, useState, useEffect } from 'react'
import {
  createPosts,
  getPosts,
  createComment,
  deletePost,
  getComments,
  updatePost,
} from '../../data/post'

import { getUsers } from '../../data/repository'

// import components
import ForumForm from '../../components/ForumForm/ForumForm'
import Card from '../../components/Card/Card'

// import styling
import './Forum.css'

// import data
// import * as postsData from '../../data/posts.JSON'

const Forum = props => {
  const [users, setUsers] = useState([])
  const [post, setPost] = useState('')
  const [posts, setPosts] = useState([])
  const [edit, setEdit] = useState('')
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
    setimgUrl('')
    setErrorMessage('')
  }

  const handleDeletePost = (event, postId) => {
    event.preventDefault()

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

  const handleInputChangeEdit = event => {
    const valueEdit = event.target.value

    // use spread operator.
    setEdit(valueEdit)
  }

  const handleSubmitEdit = (event, postId) => {
    event.preventDefault()

    const editTrimmed = edit.trim()
    // validation
    updatePost(postId, editTrimmed)

    // Reset password field to blank.
    setEdit('')
    window.location.reload()
  }

  const fileToDataUri = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = event => {
        resolve(event.target.result)
      }
      reader.readAsDataURL(file)
    })

  const onChangeImg = async file => {
    if (!file) {
      return
    }

    fileToDataUri(file).then(dataUri => {
      setimgUrl(dataUri)
    })
  }

  const getUsersData = () => {
    setUsers(getUsers() === null ? [] : getUsers())
  }

  const getPostsData = () => {
    setPosts(getPosts() === null ? [] : getPosts())
  }

  const getCommentsData = () => {
    setComments(getComments() === null ? [] : getComments())
  }
  console.log(users)
  useEffect(() => {
    getUsersData()
    getPostsData()
    getCommentsData()
  }, [])

  return (
    <Fragment>
      <div className='container-forumpage'>
        <ForumForm
          post={post}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleChangeImg={onChangeImg}
          errorMessage={errorMessage}
        />
        {imgUrl === '' ? (
          <div></div>
        ) : (
          <div className='image-preview-forum'>
            <img src={imgUrl} alt='' />
          </div>
        )}

        <Card
          username={props.username}
          users={users}
          posts={posts}
          comment={comment}
          comments={comments}
          handleInputChangeComment={handleInputChangeComment}
          handleSubmitComment={handleSubmitComment}
          handleDeletePost={handleDeletePost}
          handleInputChangeEdit={handleInputChangeEdit}
          handleSubmitEdit={handleSubmitEdit}
        />
      </div>
    </Fragment>
  )
}

export default Forum
