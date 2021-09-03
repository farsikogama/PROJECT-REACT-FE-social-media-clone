const USERS_KEY = 'users'
const USER_KEY = 'user'
const EMAIL_KEY = 'email'
const POSTS_KEY = 'POSTS'
const COMMENTS_KEY = 'COMMENTS'

// import post function
const { getPosts } = require('./post')
const { getComments } = require('./post')

// CREATE USERS REGISTER
function registerUser(email, username, password) {
  const users = getUsers() === null ? [] : getUsers()

  // validation check username and email already use or not
  for (let i in users) {
    if (username === users[i].username || email === users[i].email) {
      return {
        status: false,
        message:
          'User already exist. Please choose different email and username',
      }
    }
  }

  // get current date
  const dt = new Date()

  // put the data into local storage
  users.push({
    email: email,
    username: username,
    password: password,
    profileImg: '',
    registered_date: dt.toString().split(' ').splice(1, 3).join(' '),
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
function verifyUser(username, email, password) {
  const users = getUsers() === null ? [] : getUsers()
  for (const user of users) {
    if (email === user.email && password === user.password) {
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
    if (users[i].username === username || users[i].email === email) {
      return {
        status: false,
        message:
          'User already exist. Please choose different email and username',
      }
    }
  }

  for (let i in users) {
    if (users[i].username === usernameLogin) {
      users[i].email = email
      users[i].username = username
      users[i].password = password
    }
  }

  const posts = getPosts() === null ? [] : getPosts()

  for (let i in posts) {
    if (posts[i].author_id === usernameLogin) {
      posts[i].author_id = username
    }
  }

  const comments = getComments() === null ? [] : getComments()

  for (let i in comments) {
    if (comments[i].author_id === usernameLogin) {
      comments[i].author_id = username
    }
  }

  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts))
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments))

  setUser(username, email)
  return true
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

  // get user data
  for (let i in users) {
    if (users[i].username === usernameLogin) {
      users.splice(users.indexOf(users[i]), 1)
    }
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(users))

  // get user posts data
  const posts = getPosts() === null ? [] : getPosts()
  for (let i in posts) {
    if (posts[i].author_id === usernameLogin) {
      // console.log('ini post ke', posts[i])
      posts.splice(posts.indexOf(posts[i]))
    }
  }
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts))

  // get user comments data
  const commentsData = getComments() === null ? [] : getComments()

  for (let i in commentsData) {
    if (commentsData[i].author_id === usernameLogin) {
      // delete comments id inside array of comment whose user deleted
      const posts = getPosts() === null ? [] : getPosts()
      for (let j in posts) {
        const arrayOfComments = posts[j].comments
        for (let z in arrayOfComments) {
          if (arrayOfComments[z] === commentsData[i].id) {
            arrayOfComments.splice(arrayOfComments.indexOf(arrayOfComments[z]))
          }
        }
      }
      localStorage.setItem(POSTS_KEY, JSON.stringify(posts))
      commentsData.splice(commentsData.indexOf(commentsData[i]))
    }
  }
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(commentsData))

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
