import React, { Fragment, useEffect, useState } from 'react'
import {
  updateUser,
  updateUserImg,
  deleteUser,
  getUsers,
} from '../../data/repository'

// import component
import Profile from '../../components/Profile/Profile'

// impot styling
import './ProfilePage.css'

const ProfilePage = props => {
  const [errorMessage, setErrorMessage] = useState([])
  const [fields, setFields] = useState({
    email: '',
    username: '',
    password: '',
  })
  const [userImg, setUserImg] = useState('')
  const [userData, setUserData] = useState({})

  const handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    // use spread operator.
    const temp = { ...fields }

    // Update field and state.
    temp[name] = value
    setFields(temp)
  }

  const handleSubmit = event => {
    event.preventDefault()

    // getting username data to get index update
    const usernameLogin = localStorage.getItem('user')

    // validation

    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    const errorData = []

    if (fields.email.length === 0) {
      errorData.push('email cannot be empty')
    }
    if (fields.username.length === 0) {
      errorData.push('username cannot be empty')
    }
    if (fields.password.length === 0) {
      errorData.push('Password cannot be empty')
    }
    if (fields.password.length < 6) {
      errorData.push('Password must be at least 6 character')
    }
    if (!fields.password.match(passw)) {
      errorData.push(
        'Password must contain at least one numeric digit, one uppercase and one lowercase letter'
      )
    } else {
      updateUser(fields.email, fields.username, fields.password, usernameLogin)

      // Navigate to the home page.
      props.loginUser(fields.username, fields.email)
      window.location.reload()

      return
    }

    // Reset password field to blank.
    const temp = { ...fields }
    temp.password = ''
    setFields(temp)

    // Set error message.
    setErrorMessage(errorData)
  }

  const handleDelete = () => {
    const usernameLogin = localStorage.getItem('user')
    deleteUser(usernameLogin)
    props.logoutUser()
    props.history.push('/')

    return
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
      const usernameLogin = localStorage.getItem('user')
      updateUserImg(usernameLogin, dataUri)
      setUserImg(dataUri)
    })
  }
  const getUserData = () => {
    const users = getUsers() === null ? [] : getUsers()
    const usernameLogin = localStorage.getItem('user')
    for (const user of users) {
      if (usernameLogin === user.username) {
        setUserData(user)
        return true
      }
    }
  }

  useEffect(() => {
    getUserData()
  }, [userImg, fields])

  return (
    <Fragment>
      <div className='container-profilepage'>
        <Profile
          handleChangeImg={onChangeImg}
          userData={userData}
          email={props.useremail}
          username={props.username}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          fields={fields}
          errorMessage={errorMessage}
        />
      </div>
    </Fragment>
  )
}

export default ProfilePage
