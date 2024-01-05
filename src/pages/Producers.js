import React, { useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import ArtistCard from '../components/ArtistCard'
import { TextField } from "@mui/material";
import Footer from "../components/Footer";

export default function Producers(){
  const [producers, setProducers] = useState([])
  const [proSearch, setProSearch] = useState('')

useEffect(() => {
  fetch('http://localhost:3000/producers')
  .then(res => res.json())
  .then(data => setProducers(data))
}, [])

const filteredSearch = producers.filter(producer => {
  return producer.name.toLowerCase().includes(proSearch.toLowerCase())
})

  return (
    <div className="artist-page-search">
      <NavBar />

      <div className="artists-page-container">
        <h1 style={{color: 'white'}}>PRODUCERS</h1>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={proSearch}
          onChange={event => setProSearch(event.target.value)}
        /> 
      </div>
    <div className="recs-container">
      {filteredSearch.map(producer => {
        return <ArtistCard key={producer.id} {...producer} />
      })}
     
    </div>
      <Footer />
    </div>
  )
}