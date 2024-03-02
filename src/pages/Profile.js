import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import VerifiedIcon from '@mui/icons-material/Verified';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IosShareIcon from '@mui/icons-material/IosShare';
import DisplayPosts from "../components/DisplayPost";
import SongCard from "../components/SongCard";
import UserCardPlayer from "../components/UserCardPlayer";
import CircularIndeterminate from "../components/CircularIndeterminate";
import '../styles/profile.css';

export default function Profile(){
  const [userData, setUserData] = useState([])
  // const [similarUser, setSimilarUser] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const params = useParams();


  useEffect(() => {
    fetch(`http://127.0.0.1:5555/users/${params.id}`)
    .then(res => res.json())
    .then(data => {
      setUserData(data)
      setIsLoaded(true)
    })
  }, [])

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/users/${params.id}/similar_users`)
    .then(res => res.json())
    .then(data => {
      setAllUsers(data)
      setIsLoaded(true)
    })
  }, [])

  if (!isLoaded){
    return <CircularIndeterminate />
  }
  else {
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
              <img className='user-profile-img' src={userData.image} />
              <div className="profile-top-info">
                <h1>{userData.username}</h1>
                {/* <p>1.6k Followers</p> */}
                <h4>{userData.location} <img className='post-details-flag' src={`https://flagsapi.com/${userData.country}/flat/64.png`}/></h4>
              </div>
            </div>
  
            <div className="profile-top-buttons">
              <button className="follow-btn">Turn on notifications</button>
              <button className="message-btn">Message</button>
            </div>
          </div>
  
          <div className="profile-mid-section">
  
            <div className="about-me-sec">
              <div className="about-me-container">
                <h1>About Me</h1>
                <hr />
                <p className="profile-type">{userData.type}</p>
                <article>{userData.biography}</article>
  
                <hr />
                
                <UserCardPlayer userData={userData.song_data[0]} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                {/* <h2>Inspired By</h2>
                <div className='profile-tags'>
                 {userData.tags.map(tag => {
                  return <p>{tag.tag_name}</p>
                 })}
                </div> */}
              </div>
            </div>
  
  
            <div className="profile-posts-sec">
              <div className="profile-posts-container">
                <h1>POSTS</h1>
                <DisplayPosts userData={userData} />
              </div>
            </div>
        </div>
  
        <div className="tracks-section">
          <h1>Tracks</h1>
          <SongCard />
        </div>

        <div className="similar-artists">
            <h1>Similar Users</h1>
            <div className="similar-artists-container">
              {allUsers.map((user, index) => {
               return <Link to={`/users/${user.id}`} reloadDocument>
                        <div key={index}>
                          <img src={user.image}/>
                          <p>{user.username}</p>
                        </div>
                      </Link>  
              })}
            </div>
        </div>
        
        </div>
      </section>
    )
  }

}