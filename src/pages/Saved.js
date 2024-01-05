import React from "react";
import NavBar from "../components/NavBar";
import ArtistCard from "../components/ArtistCard";

export default function Saved({ savedData }){

  return(
    <div className="artist-page-search">
      <NavBar />

      <div className="artists-page-container">
        <h1 style={{color: 'white'}}>YOUR SAVES</h1>
        {/* <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={artSearch}
          onChange={event => setArtSearch(event.target.value)}
        />  */}
      </div>
    {/* <div className="recs-container">
      {savedData.map(data => {
        return <ArtistCard key={data.id} {...data} />
      })} 
    </div> */}
      
    </div>
  )
}