import React from "react";
import ArtistCard from "./ArtistCard";

export default function RecProducers({ recProducers  }){

  return (
    <div className="recs-container">

      <h1 style={{
        textAlign: 'center', 
        margin: '30px 0 10px 0',  
        color: 'black'}}>RECOMMENDED PRODUCERS</h1>

        <h4 style={{
        textAlign: 'center', 
        margin: '10px 0 30px 0',  
        color: 'black',
        fontStyle: 'italic'}}>BASED ON YOUR SEARCH HISTORY</h4>
        
      {recProducers.map(producer => {
         return <ArtistCard key={producer.id} {...producer} />
      })}
     
    </div>
  )
}