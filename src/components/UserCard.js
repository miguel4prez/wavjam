import React, { useEffect, useRef, useState } from "react";
import { Rating } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UserCardPlayer from "./UserCardPlayer";

function UserCard({ date }){
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Card className="user-card">
      
        <CardMedia
          component="img"
          height="200"
          image={date.image}
          alt={date.name}
        />
        <CardContent>

        <Typography variant="h5" component="div">
          {date.name}
        </Typography>

        <Typography style={{fontStyle: 'italic'}}>
          {date.genre}
        </Typography>

        <Typography style={{
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center', 
          textAlign: 'center',
          }}>{date.location} 

          <img style={{
          width: '20px',
          marginLeft: '5px'}} 
          src={`https://flagsapi.com/${date.country}/flat/64.png`}/> 
        </Typography>

        {/* <Typography style={{marginTop: '15px'}} variant="body2" color="text.secondary">
          {date.biography}
        </Typography> */}

        <hr />

        <p><strong>Featured Track:</strong></p>
        <UserCardPlayer date={date.song_data[0]} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      </CardContent>
  
  </Card>
)};   

export default UserCard;