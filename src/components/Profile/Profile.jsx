import React, { Fragment } from 'react'

// import styling
import './Profile.css'

const Profile = () => {
  return (
    <Fragment>
      <div className='container-profile'>
        <div className='img-profile'>
          {/* <img src='/asset/img/home-img.jpg' alt='' /> */}
        </div>
        <div className='card-profile'>
          <p>John Smith</p>
          <p>john@smith.info</p>
          <p>Thu 29 Jul 2021</p>
          <button>
            <a href='/'> Edit Profile</a>
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Profile
