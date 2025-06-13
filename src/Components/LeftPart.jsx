import React from 'react'
import { useNavigate } from 'react-router-dom';
function LeftPart() {

  let navigate= useNavigate();

  return (
    <div className='w-100 container position-fixed'>
        <img src=".\src\assets\Instageam_text.png" id='insta-text' />
        <div className='elements  mt-5'>
            
            <div className='fw-bolder'><i className="bi bi-house-door-fill "></i> Home</div>
            <div><i className="bi bi-search"></i> Search</div>
            <div><i className="bi bi-compass"></i> Explore</div>
            <div><i className="bi bi-compass"></i> Reels</div>
            <div><i className="bi bi-chat"></i> Messages</div>
            <div><i className="bi bi-heart"></i> Notification</div>
            <div><i className="bi bi-plus-square"></i> Create</div>
            <div onClick={()=>{navigate('/profile')}} ><i className="bi bi-person-fill"></i> Profile</div>
        </div>
        <div className='elements-down fixed-bottom m-3'>
            <div><i className="bi bi-threads"></i> Threads</div>
            <div><i className="bi bi-list"></i> More</div>
        </div>
    
    </div>
  )
}

export default LeftPart