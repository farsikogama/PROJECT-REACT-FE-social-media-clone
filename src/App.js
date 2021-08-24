import { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

// import components
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Register from './pages/Register/RegisterPage'
import Login from './pages/Login/LoginPage'
import Forum from './pages/Forum/Forum'

// import styling
import './App.css'

function App() {
  return (
    <Fragment>
      <Layout>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' render={props => <Home />} />

              <Route exact path='/login' render={props => <Login />} />

              <Route exact path='/register' render={props => <Register />} />

              <Route exact path='/Forum' render={props => <Forum />} />
            </Switch>
          </div>
        </Router>
      </Layout>
    </Fragment>
  )
}

export default App
