import React, { useEffect, useState} from "react";
import HomeSection from "../components/HomeSection";
import { Link, useLocation } from "react-router-dom"; 
import '../styles/home.css'

import NavImg from '../assets/navbar_img.png'
import Logo from '../assets/wavjam_logo.png'

import Collab_Img from '../assets/collab_img.png';
import Matching_Img from '../assets/matching_img.png';
import Musician_Img from '../assets/musician_img.png';

import Pop_Img from '../assets/pop_img.png'
import Rap_Img from '../assets/rap_img.png'
import Punk_Img from '../assets/punk_img.png'
import Rock_Img from '../assets/rock_img.png'
import Country_Img from '../assets/country_img.png'
import Classical_Img from '../assets/classical_img.png'
import Bachata_Img from '../assets/bachata_img.png'
import EDM_Img from '../assets/edm_img.png'

const homeInfoData = [
  {
    img: Collab_Img,
    title: 'Built For Collaboration',
    description: 'WavJam is meant to make collaboration easy for those new to music and for those who want to expand on their musical taste',
  },
  {
    img: Matching_Img,
    title: 'Smart Matching Algorithm',
    description: 'Get your search match based on your personal preferences. If you are looking for something specific, let us do the work for you!',
  },
  {
    img: Musician_Img,
    title: 'Rent a Musician!',
    description: 'In need of a musician ASAP? No problem! WavJam offers a section where you can locate a musician near your area and pay them for their time.',
  },
];

const popularGenresData = [
  { img: Pop_Img, genre: 'Pop' },
  { img: Rap_Img, genre: 'Rap' },
  { img: Punk_Img, genre: 'Punk' },
  { img: Rock_Img, genre: 'Rock' },
  { img: Country_Img, genre: 'Country' },
  { img: Classical_Img, genre: 'Classical' },
  { img: Bachata_Img, genre: 'Bachata' },
  { img: EDM_Img, genre: 'EDM' },
];

function Home() {
  return (
    <div>
      <div className="hero">
        <img src={NavImg} alt="front-page" className="home-hero-img" />
        <img src={Logo} alt='wavjam-logo' className='home-wavjam-logo' />
      </div>

      <section className="home-info-sec">
        <div className="home-info-container">
          {homeInfoData.map((info, index) => (
            <HomeSection key={index} img={info.img} title={info.title} description={info.description} />
          ))}
        </div>
      </section>

      <section className="home-find-wav-sec">
          <div className="home-find-wav-container">
            <h1>Find Your <span>Wav</span></h1>
            <div>
              <Link to={`/search`} state='Artist'>Collaborate</Link>
              <Link to={`/search`} state='Band'>Join a Band</Link>
              <Link to={`/search`} state='Musician'>Find Members</Link>
              {/* <Link to='/search'>Rent A Musician</Link>
              <Link to='/search'>Engineers/Producers</Link>
              <Link to='/search'>Visuals</Link> */}
            </div>
          </div>
      </section>

      <section className="popular-genres-sec">
        <h1>Popular Genres</h1>
        <div className='popular-genres-container'>
          {popularGenresData.map((genre, index) => (
            <Link to={`/search/${genre.genre}`}>
              <div key={index}>
                <img src={genre.img} alt={genre.genre} />
                <p>{genre.genre}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to='/search'><button>See All</button></Link>
      </section>
    </div>
  );
}

export default Home;