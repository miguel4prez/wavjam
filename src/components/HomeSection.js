import React from "react";

function HomeSection({ img, title, description }){
  return (
    <div>
      <img src={img} alt='collab' />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default HomeSection;