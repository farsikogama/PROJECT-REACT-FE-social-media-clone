import React, { Fragment } from 'react'

// import component
import Profile from '../../components/Profile/Profile'

// impot styling
import './ProfilePage.css'

const ProfilePage = () => {
  return (
    <Fragment>
      <div className='container-profilepage'>
        <Profile />
      </div>
    </Fragment>
  )
}

export default ProfilePage
