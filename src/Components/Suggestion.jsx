import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Suggestion() {

  let[profile,setProfile]=useState(null);
  let[suggestions,setSuggestions]=useState([]);
  let navigate = useNavigate()

  useEffect(()=>{
    fetch("http://localhost:3000/profile")
    .then(responce=>responce.json())
    .then(data=>setProfile(data))
    .catch(error=>console.log(error))

    fetch("http://localhost:3000/suggestions")
    .then(responce=>responce.json())
    .then(data=>setSuggestions(data))
    .catch(error=>console.log(error))

  },[])

  return (
    <div className='container'>
      {profile ==null ? (
        <div>Loading...</div>
      ):(
        <div className='w-75 m-auto mt-5 '>
              <div onClick={()=>{navigate('/profile')}} className='profile-img-sugg d-flex '>
                  <img className='rounded-circle' src={profile.profile_pic} alt="" />
                  <b className='m-2'>{profile.username}</b>
                  <p className='ms-auto m-2 text-primary'>Switch</p>                
              </div>
              <div className='pname d-flex '><p>{profile.name}</p></div>
              <div className='d-flex'>
                <p>Suggested for you</p>
                <p className='ms-auto me-2'><b>See All</b></p>
              </div>
        </div>
      )}

      {suggestions ==[] ?(
        <div>Loading....</div>
      ):(
        <div>
          {suggestions.map((props)=>(
            <div key={props.id}>
              <div className='w-75 m-auto mt-3 '>
              <div className='profile-img-sugg d-flex '>
                  <img className='rounded-circle' src={props.profile_pic} alt="" />
                  <b className='m-2'>{props.username}</b>
                  <p className='ms-auto m-2 text-primary'>Follow</p>                
              </div>
              
              
        </div>
            </div>
          ))}
        </div>
      )}

      <div className='footer-sugg m-5 '>
          <p>About Help Press API Jobs Privacy Terms Locations Language Meta Verified</p>
          <p>© 2025 Instagram from Meta</p>
      </div>
      
    </div>
  )
}

export default Suggestion