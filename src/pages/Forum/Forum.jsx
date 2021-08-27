import React, { Fragment, useState } from 'react'

// import components
import ForumForm from '../../components/ForumForm/ForumForm'
import Card from '../../components/Card/Card'

// import styling
import './Forum.css'

const Forum = props => {
  const [post, setPost] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [posts, setPosts] = useState([])

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
    setPosts([...posts, { username: props.username, text: postTrimmed }])

    // Reset post content.
    setPost('')
    setErrorMessage('')
  }

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
    </Fragment>
  )
}

export default Forum
