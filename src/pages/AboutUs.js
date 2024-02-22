import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavImg from '../assets/navbar_img.png'
import Logo from '../assets/wavjam_logo.png'

import '../styles/aboutus.css'

export default function AboutUs(){
  return (
    <div>
      <NavBar />
      <div className="hero">
        <img src={NavImg} alt="front-page" style={{width: "100%", 'max-height':'700px'}}/>
        <img src={Logo} alt='wavjam-logo' id ='home-wavjam-logo'/>
      </div>
      <section>
         <div className='home-info-section'>
          <h1>What is WaveJam?</h1>
        </div> 
      </section> 
      <Footer />
    </div>
  )
}