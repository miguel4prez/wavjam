import React, { useState } from "react";

function GenreForm({ form, setForm }) {

  const genreArray = [
    'pop', 'drill', 'rap', 'hiphop', 
    'rnb', 'afro', 'emo',
    'freestyle', 'hyperpop', 'hardcore',
    'soul', 'artist', 'instrumental', 
    'lofi', 'electronic', 'indie', 
    'rock', 'metal', 'country', 
    'reggae', 'jazz', 'classical', 
    'funk', 'trap', 'dance', 'folk', 
    'singer-songwriter', 'punk', 
    'alternative', 'grunge', 'synthwave', 
    'edm', 'pop-rock', 'blues', 
    'latin', 'house', 'techno', 'vocal', 
    'psychedelic', 'orchestral', 'world-music', 
    'progressive', 'ska', 'fusion',
    'ambient-electronica', 'soulful', 'nostalgic',
    'ambient-pop', 'retro','chill-hop', 'dream-pop', 
    'bedroom-pop', 'electro-soul', 'mystical', 
    'acapella', 'nostalgia', 'urban', 'acoustic-pop',
    'world-beat', 'psychedelic-rock',
    'folk-pop', 'industrial', 'gritty',
    'ambient-chill', 'cinematic',
];


  function handleClick(value) {
    setForm({...form, genre: value})
  }

  function handleRemove(){
    setForm({...form, genre: ''})
  }

  return (
    <div className="form-tags-container">
      <div className="form-tag-elements">

        {genreArray.map((item, index) => {
          return (
          <button
            key={index} 
            disabled={form.genre} 
            onClick={() => {
            handleClick(item)
          }} className="form-tags">
            {item}
          </button>)
        })}

      </div>

      <hr />
      {form.genre && <span style={{color: 'red', margin: '10px 10px'}}>Reached Limit</span>}
      <div className="saved-tags">
        {form.genre ?
              (<p onClick={() => {
              handleRemove(form.genre)
              }} 
              >{form.genre}</p>) : 
              <span>Click on a tag to display it here</span> }

      </div>
      <hr />
    </div>
  )
}

export default GenreForm;