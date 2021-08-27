import React, { Fragment } from 'react'

// import component

// import styling
import './Home.css'

const Home = props => {
  return (
    <Fragment>
      <div className='container-home'>
        <div className='text-home'>
          {props.username === null ? (
            <h1>WELCOME TO VC</h1>
          ) : (
            <h1>
              Hi {props.username}! <br />
              WELCOME TO VC
            </h1>
          )}

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            voluptatem dolore quos quis, dicta itaque autem harum laudantium
            nihil dignissimos earum obcaecati optio fugiat, ut maxime aperiam
            accusantium vel fugit!
          </p>
        </div>
        <div className='gambar-home'>
          <img src='/asset/img/home-img.jpg' alt='' />
        </div>
      </div>
    </Fragment>
  )
}

export default Home
