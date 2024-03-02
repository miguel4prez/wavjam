import React, { useEffect, useRef, useState } from "react";
import { Rating } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UserCardPlayer from "./UserCardPlayer";
import { useParams, Link } from "react-router-dom"; 
import CircularIndeterminate from "./CircularIndeterminate";

function UserCard({ userData }){
  const [isPlaying, setIsPlaying] = useState(false)

  return (
      <Card className="user-card">
      
      <Link to={`/users/${userData.id}`}>
      <CardMedia
        component="img"
        height="200"
        image={userData.image}
        alt={userData.username}
        className="user-card-img"
      />

      <CardContent style={{padding: '20px 0 0 0'}}>

      <Typography variant="h5" component="div">
        {userData.username}
      </Typography>

      <Typography style={{fontStyle: 'italic'}}>
        {userData.genre}
      </Typography>

      <Typography style={{
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        textAlign: 'center',
        }}>{userData.location} 

        <img style={{
        width: '20px',
        marginLeft: '5px'}} 
        src={`https://flagsapi.com/${userData.country}/flat/64.png`}/> 
      </Typography>

      {/* <Typography style={{marginTop: '15px'}} variant="body2" color="text.secondary">
        {date.biography}
      </Typography> */}

      <hr />

    </CardContent>
    </Link>
    <CardContent >
      <p><strong>Featured Track:</strong></p>
      <UserCardPlayer userData={userData.song_data[0]} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </CardContent>
      


    </Card>
)};   

export default UserCard;