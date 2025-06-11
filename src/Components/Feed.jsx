import React from 'react'
import Stories from './Stories'
import PostArea from './PostArea'

function Feed() {
  return (
    <div className='mt-4 w-100'>
        <Stories/>
        <PostArea/>
    </div>
  )
}

export default Feed