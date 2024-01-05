import React, { useState } from "react";
import NewMembers from "./NewMembers";

export default function Form({ newData, setNewData }) {
const [name, setName] = useState('')
const [location, setLocation] = useState('')
const [genre, setGenre] = useState('')
const [image, setImage] = useState('')
const [biography, setBiography] = useState('')
const [country, setCountry] = useState('')
const [rating, setRating] = useState(0)

const resetForm = () => {
  setName('');
  setLocation('');
  setGenre('');
  setImage('');
  setBiography('');
  setBiography('');
  setCountry('');
  setRating(0);
}

  function handleSubmit(event){
    event.preventDefault();

    fetch('http://localhost:3000/new_members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        location,
        genre,
        image,
        biography,
        country,
        rating
      })
    })
    .then(res => res.json())
    .then(newMember => {
      setNewData([...newData, newMember]);
      resetForm();
    })
  }

  return (
    <>
    {<NewMembers newData={newData} />}
    <div className="form-container">
       
       <h1>New Member? Add Them Here!</h1>
       <form onSubmit={handleSubmit}>

        <label>Enter Name:</label>
         <input 
         type="text" 
         name="name" 
         id="form-name"
         value={name}
         onChange={event => setName(event.target.value)}
         />

         <label>Enter Location:</label>
         <input 
         type="text" 
         name="location" 
         id="form-location"
         value={location}
         onChange={event => setLocation(event.target.value)} 
         />

         <label>Enter Genre:</label>
         <input 
         type="text" 
         name="genre" 
         id="form-genre" 
         value={genre}
         onChange={event => setGenre(event.target.value)}
         />

         <label>Enter Photo URL:</label>
         <input 
         type="text" 
         name="image" 
         id="form-image" 
         value={image}
         onChange={event => setImage(event.target.value)}
         />

         <label>Enter Description:</label>
         <textarea
         type="text" 
         name="description"  
         id="form-description"
         value={biography}
         onChange={event => setBiography(event.target.value)}
         ></textarea>

         <label>Enter Country Initials:</label>
        <input 
         type="text" 
         name="flag" 
         id="form-flag"
         value={country}
         onChange={event => setCountry(event.target.value)}
         />

         <label>Rate [0-5]:</label>
         <input 
         type="number" 
         name="rating" 
         max="5"
         min="0"
         id="form-rating" 
         value={rating}
         onChange={event => setRating(parseInt(event.target.value))}
         />
         <button type="submit">Submit</button>
       </form>
     </div>
    </>
  )
}