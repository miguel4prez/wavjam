import React from "react";
import ArtistCard from "./ArtistCard";

export default function NewMembers({ newData }){

  return (
    <div style={{
      backgroundColor:'black'
    }} className="recs-container">

      <h1 style={{
        textAlign: 'center', 
        margin: '30px 0 10px 0',  
        color: '#6D8284'}}>NEWEST MEMBERS</h1>

        <p style={{
        textAlign: 'center', 
        margin: '10px 0 10px 0',  
        color: '#6D8284'}}>[Add Here]</p>
      
      {newData.map(data => {
        return <ArtistCard key={data.id} {...data} />
      })}
      
    </div>
  )
}