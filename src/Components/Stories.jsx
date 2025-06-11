import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {

  let[story,setStory]=useState([]);
  let navigate=useNavigate();
  let tot=0;

  useEffect(()=>{
    fetch('http://localhost:3000/story')
        .then(response=>response.json())
        .then(data=>setStory(data))
        .catch((error)=>{console.log(error)})
  },[])

  return (
    <div className='stories w-90 ms-3'>
      <div  className='d-none'>{tot=story.length}</div>
        {story.length <0 ?(
          <div>Loading....</div>
        ):(
          <div className='d-flex mx-5'>
            {story.map((props)=>(
              <div key={props.id}  >
                <div  className='m-1 ms-2'>
                <div className='story-border '>
                  <div className='story-db' onClick={()=>{navigate(`/story/${props.id}/${tot}`)}}>
                  <img className='rounded-circle' src={props.user.profile_pic} alt=""  />
                  <p className='text-truncate'>{props.user.username}</p>
                </div>
                </div> 
              </div>
              </div>
              
            ))}
          </div>
        )}
    </div>
  )
}

export default Stories