import React from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function PricingCards({ price, price_name, offers }) {
  return (
      <CardContent style={{display: 'inline-block', backgroundColor:'white', width: '300px', maxHeight: '400px'}} className="single-card">
        <Typography className="price-name" variant="h5" component="div">
          {price_name}
        </Typography>
        <Typography m={{ mb: 1.5 }} color="text.secondary" className="price">
          ${price}<small>/MO</small>
        </Typography>
        <ul style={{listStyle: 'none'}}>
          {offers.map(offer => {
            return <li>&#x2713;{offer}</li>
          })}
        </ul>
          <button className="button">Choose Plan</button>
      </CardContent>
  )
}