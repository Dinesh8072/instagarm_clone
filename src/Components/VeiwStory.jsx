import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function VeiwStory() {

    const [story,setStory]=useState(null);
    const {id ,tot}=useParams();
    let navigate=useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:3000/story/${id}`)
        .then(response=>response.json())
        .then(data=>setStory(data))
        .catch(error=>console.log(error.message))

    if(id> tot ||id<=0 ){
      navigate('/')
    }

    },[id])

   

  return (
    <div className='bg-dark'>
      <div className='viewstoryimg '>
        <img className='instaimg' src='\src\assets\Instageam_textW.png' alt="img" />
        <i className="bi bi-x " onClick={()=>{navigate('/')}}></i>
      </div>
      
        {story ?
          <div className='container '>
            <img className='story-profile' src={story.user.profile_pic} alt="" />
            <b className='story-username' >{story.user.username}</b>
            <div className=' viewstory d-flex  align-item-center justify-content-center'>
              <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className=" arrow-btn bi bi-arrow-left-circle-fill  "></i></Link>
                <img className='' src={story.img} alt="img" />
              <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className=" arrow-btn bi bi-arrow-right-circle-fill"></i></Link>  
                
            </div>
          </div>
            
        :
            <div>Loading...</div>
        }
    </div>
  )
}

export default VeiwStory