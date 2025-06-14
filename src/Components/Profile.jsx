import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LeftPart from './LeftPart';
function Profile() {
  let [profile,setProfile]=useState();
  let [showedit,setShowedit]=useState(null);

  useEffect(()=>{
    axios('http://localhost:3000/profile')
    .then(data=>setProfile(data.data))
    .catch(error=>console.log(error))
  },[]);
  
  function handelOnChange(e){
    setProfile(prevalue=>({
      ...prevalue,
      [event.target.name]:event.target.value
    }))
  }

  function PutRequest(){
    axios.put('http://localhost:3000/profile',profile)
    .then(console.log('Changed'))
    .catch(error=>console.log(error))
  }

  return (
    <div>
      {profile ? (
        <div>
          <div className='LeftPart w-20 position-fixed proleft'> <LeftPart/> </div>
          <div className= 'container propg' >
            <div className='profilepage d-flex'>
              <div className=''>
                  <img className='rounded-circle ' src={profile.profile_pic} alt="" />
              </div>
              <div className='w-50'>
                <p id='profile-username'>{profile.username}</p>
                <div className='d-flex ms-4 mt-4'>
                <b>{profile.post}:</b><p className='me-3' >posts</p>
                <b>{profile.followers}:</b><p className='me-3'>followers</p>
                <b>{profile.following}:</b><p>following</p>
                </div>
              </div>
              <button className='btn' onClick={()=>{setShowedit(1)}}>Edit profile</button>   
            </div>
            {showedit ==null ? (
              <></>
            ):(
              <div className='editarea'>
              <input type="text" value={profile.username}  name='username' onChange={handelOnChange}/>
              <button className='btn btn-primary ' onClick={PutRequest}>Edit</button>
            </div>
            )}
        
           
          </div>
        </div>
      ):(
        <div></div>
      )}
    </div>
    
  )
}

export default Profile;