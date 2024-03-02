import React from 'react';
import '../styles/displayposts.css'

function DisplayPosts({ userData }){
  return (
    <div className='display-posts'>
      <div className='display-posts-container'>
        <img src={userData.image} />
        <p>{userData.posts[0].description}</p>
      </div>
      <p className='post-time'>{userData.posts[0].time_posted}</p> 
      <hr />
      
    </div>
  )
}

export default DisplayPosts;