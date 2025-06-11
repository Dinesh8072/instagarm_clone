import React, { useEffect, useState } from 'react'

function PostArea() {

    let [posts,setPosts]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/posts")
        .then(response=>response.json())
        .then(data=>setPosts(data))
        .catch((error)=>{console.log(error)})

    },[])

  return (
    <div className='container  mt-4'>
        {posts.length >0 ?(
            <>
            {posts.map((props)=>(
                <div className='w-50 m-auto' key={props.id}>
                    <div className='profile d-flex mb-2'>
                        <img className='rounded-circle' src={props.user.profile_pic} alt="" />
                        <b className='m-2'>{props.user.username}</b>
                        <i className=" threedot bi bi-three-dots "></i>
                    </div>
                    <div className='post'>
                        <img className='w-100' src={props.image} alt="" />
                    </div>
                    <div className='post-icons d-flex'>
                        <i className="bi bi-heart "></i> 
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i> 
                        <i className="save-icon bi bi-bookmark me-0 "></i>
                    </div>
                    <div className="likes">
                        <p>{props.likes} likes</p>
                        
                    </div>
                    <div className="captions">
                       <p>{props.caption}</p>
                    </div>
                    <hr />
                </div>
            ))}
            </>
        ):(
            <div>
                Loading....
            </div>
        )
        }
    </div>
  )
}

export default PostArea