import { Fragment, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { getUser, getEmail, removeUser } from './data/repository'

// import pages
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Register from './pages/Register/RegisterPage'
import Login from './pages/Login/LoginPage'
import Forum from './pages/Forum/Forum'
import Profile from './pages/Profile/ProfilePage'

// import styling
import './App.css'

function App() {
  const [username, setUsername] = useState(getUser())
  const [useremail, setUseremail] = useState(getEmail())

  const loginUser = (username, email) => {
    setUsername(username)
    setUseremail(email)
  }

  const logoutUser = () => {
    removeUser()
    setUsername(null)
    setUseremail(null)
  }

  return (
    <Fragment>
      <Layout username={username} logoutUser={logoutUser}>
        <Router>
          <div>
            <Switch>
              <Route
                exact
                path='/'
                render={props => <Home username={username} />}
              />

              <Route
                exact
                path='/login'
                render={props => <Login {...props} loginUser={loginUser} />}
              />

              <Route
                exact
                path='/register'
                render={props => <Register {...props} loginUser={loginUser} />}
              />

              <Route
                exact
                path='/forum'
                render={props => <Forum username={username} />}
              />
              <Route
                exact
                path='/profile'
                render={props => (
                  <Profile
                    {...props}
                    username={username}
                    useremail={useremail}
                    loginUser={loginUser}
                    logoutUser={logoutUser}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </Layout>
    </Fragment>
  )
}

export default App
