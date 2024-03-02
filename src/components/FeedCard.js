import React,{ useState } from "react";

function FeedCard({ post, postOnClick }) {

  const handleClick = () => {
    postOnClick(post.id);
  };

  return (
    <div onClick={handleClick} className='feed-card'>
       <div className="feed-information">
        <div className="feed-left">
          <img src={post.user && post.user.image} />
          <p>@{post.user && post.user.username}</p>
        </div>
        <div>
          <p>{post.time_posted}</p>
        </div>
      </div>
      <p>{post.description}</p>
    </div>
   
  )
}

export default FeedCard;