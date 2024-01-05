import React from "react";
import ArtistCard from "./ArtistCard";

export default function RecArtistsContainer({ recArtists }){

  return (
    <div style={{
      backgroundColor: "black"
    }} className="recs-container">

      <h1 style={{
        textAlign: 'center', 
        margin: '30px 0 10px 0',  
        color: '#6D8284'}}>RECOMMENDED ARTISTS</h1>

        <h4 style={{
        textAlign: 'center', 
        margin: '10px 0 30px 0',  
        color: '#6D8284',
        fontStyle: 'italic'}}>BASED ON YOUR SEARCH HISTORY</h4>

        {recArtists.map(artist => {
          return <ArtistCard key={artist.id} {...artist} />
        })}
       
     
    </div>
  )
}