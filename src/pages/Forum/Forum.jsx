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

  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    })

  const onChange = async (file) => {
    if(!file) {
      return;
    }

    fileToDataUri(file)
      .then(dataUri => {
        localStorage.setItem('imageURL', dataUri)
      })
  }

  return (
    <Fragment>
      <div className='container-forumpage'>
        <input type="file" id="myFile" name="filename" onChange={(event) => onChange(event.target.files[0] || null)} />
        <img src={localStorage.getItem('imageURL')} style={{border: "1px solid red", width: 200, height: 200}} alt="img" />
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
