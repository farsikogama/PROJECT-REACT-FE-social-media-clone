import React, { Fragment, useState } from 'react'

// import components
import Modal from '../Modal/Modal'

// import styling
import './Profile.css'

const Profile = props => {
  const [show, setShow] = useState(false)

  return (
    <Fragment>
      <div className='container-profile'>
        <div className='img-profile'>
          {/* <img src='/asset/img/home-img.jpg' alt='' /> */}
        </div>
        <div className='card-profile'>
          <p>{props.username}</p>
          <p>{props.email}</p>
          <p>Thu 29 Jul 2021</p>
          <div className='profile-menu'>
            <button className='edit' onClick={() => setShow(true)}>
              Edit Profile
            </button>
            <button className='delete'>
              <a href='/'> Delete</a>
            </button>
          </div>
        </div>
      </div>
      <Modal
        title='Edit Profile'
        onClose={() => setShow(false)}
        show={show}
        handleInputChange={props.handleInputChange}
        handleSubmit={props.handleSubmit}
        fields={props.fields}
        errorMessage={props.errorMessage}
      >
        <p>This is modal body</p>
      </Modal>
    </Fragment>
  )
}

export default Profile
