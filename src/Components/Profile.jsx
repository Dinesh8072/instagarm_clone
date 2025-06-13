import axios from 'axios';
import React, { useEffect } from 'react'

function Profile() {

  useEffect(()=>{
    axios('http://localhost:3000/profile')
    .then(data=>data.data)
    .catch()
  })

  return (
    <div>Profile
      {/* <h1>i love kirutiga</h1> */}
    </div>
    
  )
}

export default Profile;