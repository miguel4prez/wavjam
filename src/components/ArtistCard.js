import React, { useState } from "react";
import { Rating } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ArtistCard({ name, genre, image, biography, location, country, rating, id }){
const [isHeartClicked, setIsHeartClicked] = useState(false);
const [savedData, setSavedData] = useState([])

function handleClick(){
  setIsHeartClicked(prevVal => !prevVal)

  fetch('http://localhost:3000/saved_data', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      genre,
      image,
      biography,
      location,
      country,
      rating
    })
  })
  .then(res => res.json())
  .then(data => setSavedData(data))
}

function handleDelete(){
  const deletedCard = savedData.filter(data => data.id !== savedData.id)
  setSavedData(deletedCard)

  fetch(`http://localhost:3000/saved_data/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}


  return (
    <Card sx={{ maxWidth: 345 }} className="recs-card">
      
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent>

        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography style={{fontStyle: 'italic'}}>
          {genre}
        </Typography>

        <Typography style={{
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center', 
          textAlign: 'center',
          }}>{location} 

          <img style={{
          width: '20px',
          marginLeft: '5px'}} 
          src={`https://flagsapi.com/${country}/flat/64.png`}/> 
        </Typography>

        <Typography style={{marginTop: '15px'}} variant="body2" color="text.secondary">
          {biography}
        </Typography>

        <Typography style={{marginTop: '20px'}}>
          <Rating name="read-only" value={rating} />
        </Typography>

        <IconButton onClick={handleClick} aria-label="add to favorites">
          {isHeartClicked ? <FavoriteIcon style={{color: 'red'}} /> : <FavoriteIcon style={{color: 'black'}} />}
        </IconButton>
          
        <button className="danger-btn" onClick={handleDelete}>Delete From Saves</button>
      </CardContent>
  </Card>
)};   