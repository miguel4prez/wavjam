import React from 'react';
import '../styles/displayposts.css'

function DisplayPosts(){
  return (
    <div className='display-posts'>
      <div className='display-posts-container'>
        <img src="https://framethestage.com/wp-content/uploads/2019/12/Ronx.jpg" />
        <p>Show this weekend, looking for a photographer</p>
      </div>
      <p className='post-time'>20 mins ago</p> 
      <hr />
      
    </div>
  )
}

export default DisplayPosts;