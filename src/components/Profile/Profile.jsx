import React, { Fragment, useState } from 'react'

// import components
import Modal from '../Modal/Modal'
import ModalAlert from '../Modal/ModalAlert'

// import styling
import './Profile.css'

const Profile = props => {
  const [show, setShow] = useState(false)
  const [showError, setShowError] = useState(false)

  return (
    <Fragment>
      <div className='container-profile'>
        <div class='image-upload'>
          {props.userData.profileImg === '' ? (
            <div className='img-profile'></div>
          ) : (
            <div className='img-profile'>
              <img src={props.userData.profileImg} alt='' />
            </div>
          )}

          <label for='myFile'>
            <img src='/asset/icon/camera.png' alt='' />
          </label>
          <input
            type='file'
            id='myFile'
            name='filename'
            onChange={event =>
              props.handleChangeImg(event.target.files[0] || null)
            }
          />
        </div>

        <div className='card-profile'>
          <p>{props.userData.username}</p>
          <p>{props.userData.email}</p>
          <p>Thu 29 Jul 2021</p>
          <div className='profile-menu'>
            <button className='edit' onClick={() => setShow(true)}>
              Edit Profile
            </button>
            <button className='delete' onClick={() => setShowError(true)}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* modal edit */}
      <Modal
        type='editProfile'
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
      {/* modal alert */}
      <ModalAlert
        type='alertModal'
        title='Are you sure want to delete your account?'
        onClose={() => setShowError(false)}
        handleDelete={props.handleDelete}
        showError={showError}
      ></ModalAlert>
    </Fragment>
  )
}

export default Profile
