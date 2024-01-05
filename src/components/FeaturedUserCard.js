import React from "react";
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FeaturedUserCard(){
  return (
    <div className="featured-section">

      <h1 style={{
        textAlign: 'center', 
        margin: '30px 0',  
        color: 'gold'}}>ARTIST OF THE WEEK</h1>

      <div className="featured-card-container">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image='https://bloximages.chicago2.vip.townnews.com/qchron.com/content/tncms/assets/v3/editorial/5/7b/57b90b44-d695-5e72-9dc3-323972f02c63/523b096ea621f.image.jpg?resize=760%2C574'
          alt='The Pheonix Within'
        />
        <CardContent>

          <Typography variant="h5" component="div">
            The Pheonix Within
          </Typography>

          <Typography style={{fontStyle: 'italic'}}>
            Alternative Rock
          </Typography>

          <Typography> 
          Queens, NY  
          <img style={{
          width: '20px',
          marginLeft: '5px'}} 
          src="https://flagsapi.com/US//flat/64.png"/> 
          </Typography>

          <Typography style={{marginTop: '15px'}} variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.
          </Typography>

          <Typography style={{marginTop: '20px'}}>
            <Rating name="read-only" value={5} />
          </Typography>

        </CardContent>
      </CardActionArea>
      </Card>
      </div>
    
      
    </div>
  )
}