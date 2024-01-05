import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ArtistCard from "../components/ArtistCard";
import { TextField } from "@mui/material";
import Footer from '../components/Footer'

export default function Saved(){
const [savedData, setSavedData] = useState([])
const [savedSearch, setSavedSearch] = useState('')

useEffect(() => {
  fetch('http://localhost:3000/saved_data')
  .then(res => res.json())
  .then(data => setSavedData(data))
}, [])

const filteredSearch = savedData.filter(data => {
  return data.name.toLowerCase().includes(savedSearch.toLowerCase())
})



  return(
    <div className="artist-page-search" >
      <NavBar />

      <div className="artists-page-container" >
        <h1 style={{color: 'white'}}>YOUR SAVES</h1>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={savedSearch}
          onChange={event => setSavedSearch(event.target.value)}
        /> 
      </div>
    <div className="recs-container" >
      
      {filteredSearch.map(data => {
        return <ArtistCard key={data.id} {...data} />
      })} 
    </div>
      <Footer />
    </div>
  )
}