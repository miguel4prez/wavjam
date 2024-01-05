import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import FeaturedUserCard from '../components/FeaturedUserCard'
import RecArtistsContainer from "../components/RecArtistsContainer";
import RecProducers from "../components/RecProducers";
import '../styles/home.css'
import Footer from "../components/Footer";
import NavImg from '../assets/navbar_img.png'
import Form from "../components/Form";

function Home(){
const [newData, setNewData] = useState([])
const [recArtists, setRecArtists] = useState([])
const [recProducers, setRecProducers] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/recommended_artists")
  .then(res => res.json())
  .then(data => setRecArtists(data))

  fetch('http://localhost:3000/recommended_producers')
  .then(res => res.json())
  .then(data => setRecProducers(data))

  fetch('http://localhost:3000/new_members')
  .then(res => res.json())
  .then(data => setNewData(data))
}, [])

  return (
    <div>
      <NavBar />
      <div>
        <img src={NavImg} alt="front-page" style={{width: "100%"}}/>
      </div>
      <FeaturedUserCard />
      <RecArtistsContainer recArtists={recArtists} />
      <RecProducers recProducers={recProducers} />
      <Form newData={newData} setNewData={setNewData} />
      <Footer />
    </div>
  )
}

export default Home