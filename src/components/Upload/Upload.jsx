import { Fragment } from 'react'

const uploadImg = () => {
  return (
    <Fragment>
      <button className='upload'>Upload Image</button>
      <input
        type='file'
        id='myFile'
        name='filename'
        onChange={val => {
          console.log('value', val.target.value)
        }}
      />
    </Fragment>
  )
}

export default uploadImg
