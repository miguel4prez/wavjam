import React, { useState } from "react";

function ChooseTagsForm({ tagForm, setTagForm }) {

  const tagArray = [
    'pop', 'drill', 'dark', 
    'rap', 'hiphop', 'rnb', 
    'afro', 'emotional', 'melodic',
    'freestyle', 'hyperpop', 'hardcore',
    'band', 'collab', 'soul', 'musician',
    'artist', 'instrumental', 'ready to join band',
    'lofi', 'guitarist', 'bassist', 'drummer', 
    'keyboardist', 'electronic', 'ambient', 'indie', 
    'rock', 'metal', 'country', 
    'reggae', 'jazz', 'classical', 
    'experimental', 'chill', 'funk', 
    'trap', 'dance', 'folk', 
    'acoustic', 'singer-songwriter', 'punk', 
    'alternative', 'grunge', 'synthwave', 
    'edm', 'pop-rock', 'blues', 
    'latin', 'house', 'techno', 
    'psychedelic', 'orchestral', 'world-music', 
    'vocal', 'progressive', 'trance', 
    'ska', 'instrumentals-only', 'fusion',
    'chiptune', 'ambient-electronica', 'soulful',
    'groovy', 'nostalgic',
    'inspiring','vibrant', 'mellow', 'powerful',
    'ambient-pop', 'modern', 'retro',
    'up-and-coming', 'vocalist', 'lyrical',
    'chill-hop', 'classy', 'trippy',
    'dream-pop', 'bedroom-pop', 'electro-soul', 'funky', 
    'mystical', 'acapella', 'sensual',
    'nostalgia', 'haunting',
    'urban', 'indietronica', 'acoustic-pop',
    'world-beat', 'psychedelic-rock', 'spacey',
    'folk-pop', 'industrial', 'laid-back',
    'futuristic', 'sophisticated', 'gritty',
    'uplifting', 'ethereal', 'soothing',
    'triumphant', 'up-tempo', 'introspective', 'lush',
    'surreal', 'raw', 'hype', 'dynamic','smooth', 
    'ambient-chill','crisp', 'upbeat',
    'emotive', 'cinematic', 'dreamy',
    'mind-bending', 'colorful', 'trance-inducing',
    'cathartic', 'timeless',
    'minimalistic', 'intense',
    'vivid', 'immersive', 'captivating',
  ]

  function handleClick(value) {
    if (!tagForm.tag_name.includes(value)){
      setTagForm(prev => ({...prev, tag_name: [...prev.tag_name, value]}))
    }
  }

  function handleRemove(value){
    const updatedTags = tagForm.tag_name.filter(tag => tag !== value);
    setTagForm({ ...tagForm, tag_name: updatedTags });
  }

  return (
    <div className="form-tags-container">
      <div className="form-tag-elements">

        {tagArray.map((tag, index) => {
          return (
          <button 
            key={index}
            disabled={tagForm.tag_name.length === 5} 
            onClick={() => {
            handleClick(tag)
          }} className="form-tags">
            {tag}
          </button>)
        })}

      </div>

      <hr />
      {tagForm.tag_name.length === 5 && <span style={{color: 'red', margin: '10px 10px'}}>Reached Limit</span>}
      <div className="saved-tags">
        {tagForm.tag_name.length > 0 ? tagForm.tag_name.map(tag => {
          return (
              <p onClick={() => {
                handleRemove(tag)
              }} 
              >{tag}</p>
          )}) : <span>Click on a tag to display it here</span> }

      </div>
      <hr />
    </div>
  )
}

export default ChooseTagsForm;

