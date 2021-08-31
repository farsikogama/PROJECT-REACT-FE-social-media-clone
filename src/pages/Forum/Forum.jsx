import React, { Fragment, useState, useEffect } from 'react'
import {
  createPosts,
  getPosts,
  createComment,
  deletePost,
  updatePost,
} from '../../data/post'

import { getUsers } from '../../data/repository'

// import components
import ForumForm from '../../components/ForumForm/ForumForm'
import Card from '../../components/Card/Card'
import ModalAlert from '../../components/Modal/ModalAlert'

// import styling
import './Forum.css'

const Forum = props => {
  const [showAlert, setShowAlert] = useState(false)

  const [users, setUsers] = useState([])
  const [post, setPost] = useState('')
  const [posts, setPosts] = useState([])
  const [edit, setEdit] = useState('')
  const [imgUrl, setimgUrl] = useState('')
  const [comment, setComment] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [commentErrorMessage, setCommentErrorMessage] = useState(null)

  const handleInputChangePost = event => {
    setPost(event.target.value)
  }

  const handleSubmitPost = event => {
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
    event.preventDefault()

    // Trim the post text.
    const commentTrimmed = comment.trim()

    if (commentTrimmed === '') {
      setCommentErrorMessage('A comment cannot be empty.')
      setShowAlert(true)

      return
    }

    // Create post.
    createComment(props.username, commentTrimmed, itemId)

    // Reset post content.
    setComment('')
    setErrorMessage('')
    window.location.reload()
  }

  const handleInputChangeEditPost = event => {
    const valueEdit = event.target.value

    // use spread operator.
    setEdit(valueEdit)
  }

  const handleSubmitEditPost = (event, postId) => {
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

  useEffect(() => {
    getUsersData()
    getPostsData()
  }, [])

  return (
    <Fragment>
      <div className='container-forumpage'>
        <ForumForm
          post={post}
          handleInputChangePost={handleInputChangePost}
          handleSubmitPost={handleSubmitPost}
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
          handleInputChangeComment={handleInputChangeComment}
          handleSubmitComment={handleSubmitComment}
          handleDeletePost={handleDeletePost}
          handleInputChangeEditPost={handleInputChangeEditPost}
          handleSubmitEditPost={handleSubmitEditPost}
        />
      </div>
      <ModalAlert
        type='alertComment'
        title={commentErrorMessage}
        onClose={() => setShowAlert(false)}
        showAlert={showAlert}
        commentErrorMessage={commentErrorMessage}
      ></ModalAlert>
    </Fragment>
  )
}

export default Forum
