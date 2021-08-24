import React, { Fragment } from 'react'

// import components
import ForumForm from '../../components/ForumForm/ForumForm'
import Card from '../../components/Card/Card'

// import styling
import './Forum.css'

const Forum = () => {
  return (
    <Fragment>
      <div className='container-forumpage'>
        <ForumForm />
        <Card />
      </div>
    </Fragment>
  )
}

export default Forum
