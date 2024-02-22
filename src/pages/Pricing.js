import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import '../styles/pricing.css'
import PricingCards from "../components/PricingCards";

export default function Pricing() {
  const [pricing, setPricing] = useState([])

  useEffect(() => { 
    fetch('http://localhost:3000/pricing')
    .then(res => res.json())
    .then(data => setPricing(data))
  }, [])

  return (
    <>
      <NavBar />
        <div style={{textAlign: 'center'}}>
         {pricing.map(price => {
          return <PricingCards key={price.id} {...price} />
         })}
        </div>
      <Footer /> 
    </>
  )
}