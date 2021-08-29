const USERS_KEY = 'users'
const USER_KEY = 'user'
const EMAIL_KEY = 'email'
const POSTS_KEY = 'POSTS'

// import post function
const { getPosts } = require('./post')

// CREATE USERS REGISTER
function registerUser(email, username, password) {
  const users = getUsers() === null ? [] : getUsers()

  for (let i in users) {
    if (username === users[i].username || email === users[i].email) {
      return {
        status: false,
        message:
          'User already exist. Please choose different email and username',
      }
    }
  }
  users.push({
    email: email,
    username: username,
    password: password,
    profileImg: '',
  })
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  return true
}

// READ USERS ALL
function getUsers() {
  // Extract user data from local storage.
  const data = localStorage.getItem(USERS_KEY)

  // Convert data to objects.
  return JSON.parse(data)
}

// READ USERS LOGIN
function verifyUser(email, username, password) {
  const users = getUsers() === null ? [] : getUsers()
  for (const user of users) {
    if (username === user.username && password === user.password) {
      setUser(username, email)
      return true
    }
  }

  return false
}

// UPDATE USERS
function updateUser(email, username, password, usernameLogin) {
  const users = getUsers() === null ? [] : getUsers()

  for (let i in users) {
    if (users[i].username === usernameLogin) {
      users[i].email = email
      users[i].username = username
      users[i].password = password
    }
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  setUser(username, email)
}

function updateUserImg(usernameLogin, imgUrl) {
  const users = getUsers() === null ? [] : getUsers()

  for (let i in users) {
    if (users[i].username === usernameLogin) {
      users[i].profileImg = imgUrl
    }
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

// DELETE USERS
function deleteUser(usernameLogin) {
  const users = getUsers() === null ? [] : getUsers()

  for (let i in users) {
    if (users[i].username === usernameLogin) {
      console.log(users.splice(users.indexOf(users[i]), 1))
    }
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(users))

  const posts = getPosts() === null ? [] : getPosts()

  for (let i in posts) {
    if (posts[i].author_id === usernameLogin) {
      posts.splice(posts.indexOf(posts[i]), 1)
    }
  }
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts))

  removeUser()
}

// SUPPORTING FUNCTION
function setUser(username, email) {
  localStorage.setItem(USER_KEY, username)
  localStorage.setItem(EMAIL_KEY, email)
}

function getUser() {
  return localStorage.getItem(USER_KEY)
}

function getEmail() {
  return localStorage.getItem(EMAIL_KEY)
}

// LOGOUT
function removeUser() {
  localStorage.removeItem(USER_KEY)
  localStorage.removeItem(EMAIL_KEY)
}

export {
  registerUser,
  verifyUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getEmail,
  removeUser,
  updateUserImg,
}
