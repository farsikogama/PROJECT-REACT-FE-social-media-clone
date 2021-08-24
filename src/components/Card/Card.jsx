import React, { Fragment } from 'react'

// import styling
import './Card.css'

const Card = () => {
  return (
    <Fragment>
      <div className='container-card'>
        {/*  */}
        <div className='card'>
          <div className='user-name'>
            <p>John Smith</p>
          </div>
          <div className='body-card'>
            <div className='posting'>Hello World</div>
            <div className='reply'>
              <input type='text' placeholder='comments' />
              <button>reply</button>
            </div>

            <div className='comments'>
              <div className='img-comment'></div>
              <p>What is the meaning of hello world?</p>
            </div>
            <div className='comments'>
              <div className='img-comment'></div>
              <p>you can just google translate it bruh!!</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <div className='user-name'>
            <p>John Smith</p>
          </div>
          <div className='body-card'>
            <div className='posting'>Hello World</div>
            <div className='reply'>
              <input type='text' placeholder='comments' />
              <button>reply</button>
            </div>

            <div className='comments'>
              <div className='img-comment'></div>
              <p>What is the meaning of hello world?</p>
            </div>
            <div className='comments'>
              <div className='img-comment'></div>
              <p>you can just google translate it bruh!!</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <div className='user-name'>
            <p>John Smith</p>
          </div>
          <div className='body-card'>
            <div className='posting'>Hello World</div>
            <div className='reply'>
              <input type='text' placeholder='comments' />
              <button>reply</button>
            </div>

            <div className='comments'>
              <div className='img-comment'></div>
              <p>What is the meaning of hello world?</p>
            </div>
            <div className='comments'>
              <div className='img-comment'></div>
              <p>you can just google translate it bruh!!</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Card
