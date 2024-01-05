import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ArtistCard from '../components/ArtistCard'
import Footer from '../components/Footer'
import { TextField } from "@mui/material";
import '../styles/artists.css'

export default function Artists(){
const [artists, setArtists] = useState([])
const [artSearch, setArtSearch] = useState('')

useEffect(() => {
  fetch('http://localhost:3000/artists')
  .then(res => res.json())
  .then(data => setArtists(data))
}, [])


const filteredSearch = artists.filter(artist => {
  return artist.name.toLowerCase().includes(artSearch.toLowerCase())
})

  return (
    <div className="artist-page-search">
      <NavBar />

      <div className="artists-page-container">
        <h1 style={{color: 'white'}}>ARTISTS</h1>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={artSearch}
          onChange={event => setArtSearch(event.target.value)}
        /> 
      </div>
    <div className="recs-container">
      {filteredSearch.map(artist => {
        return <ArtistCard key={artist.id} {...artist} />
      })} 
    </div>
        <Footer />
    </div>
  )
}