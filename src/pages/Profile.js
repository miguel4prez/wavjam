import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IosShareIcon from '@mui/icons-material/IosShare';
import DisplayPosts from "../components/DisplayPost";
import SongCard from "../components/SongCard";
import '../styles/profile.css';

export default function Profile(){

  return (
    <section className="profile-sec">
      <div className="profile-container">

        <div className="top-of-profile">
          <div className="social-icons">
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <IosShareIcon />
          </div>

          <div className="profile-img-and-info">
            <img src='https://framethestage.com/wp-content/uploads/2019/12/Ronx.jpg'/>
            <div className="profile-top-info">
              <h1>RONX</h1>
              <p>1.6k Followers</p>
              <h4>Hollywoord, CA</h4>
            </div>
          </div>

          <div className="profile-top-buttons">
            <button className="follow-btn">Follow</button>
            <button className="message-btn">Message</button>
          </div>
        </div>

        <div className="profile-mid-section">

          <div className="about-me-sec">
            <div className="about-me-container">
              <h1>About Me</h1>
              <hr />
              <p className="profile-type">Band</p>
              <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dui sapien eget mi proin sed libero enim sed. Orci eu lobortis 
              elementum nibh tellus molestie nunc non. Etiam tempor orci eu 
              lobortis elementum nibh tellus molestie nunc. Nisl condimentum id 
              venenatis a condimentum vitae sapien pellentesque habitant. 
              Massa sed elementum tempus egestas sed sed risus pretium quam. 
              Cursus in hac habitasse platea. Integer eget aliquet nibh praesent 
              tristique magna sit. Commodo sed ege.
              </article>

              <hr />

              <h2>Inspired By</h2>
              <div className='profile-tags'>
                <p>Blink 182</p>
                <p>MCR</p>
                <p>Neck Deep</p>
                <p>The Story So Far</p>
                <p>Fall Out Boy</p>
              </div>
            </div>
          </div>


          <div className="profile-posts-sec">
            <div className="profile-posts-container">
              <h1>POSTS</h1>
              <DisplayPosts />
            </div>
          </div>
      </div>

      <div className="tracks-section">
        <h1>Tracks</h1>
        <SongCard />
      </div>
      
      </div>
    </section>
  )
}