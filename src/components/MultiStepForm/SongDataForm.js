import React, { useState, useRef } from "react";

function SongDataForm({ songForm, setSongForm }) {
  const [songFile, setSongFile] = useState("")
  const [songVol, setSongVol] = useState(0.3)
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef()

  function handleFileChange(event) {
    event.preventDefault();
    const selectedFile = event.target.files[0];
    setSongFile(selectedFile)
    setSongForm({...songForm, song_url: URL.createObjectURL(selectedFile)})
  };

  function togglePlay() {
    setIsPlaying(prev => !prev)
    if (songFile){
      if (isPlaying){
        audio.current.pause()
      } else {
        audio.current.play()
      }
    } 
  }

  function volumeControl(event) {
    const newVol = parseFloat(event.target.value)
    setSongVol(newVol)
    if (songFile){
      audio.current.volume = songVol
    }
  }

  return (
    <div className="song-upload-form">
      <p>This would be the first song other users would listen to when viewing your page</p>

        {/* <label htmlFor = 'username'>Song URL:</label> */}
        <input 
        type = 'file' 
        name='username' 
        id='song-file-upload' 
        accept="audio/*"
        onChange={handleFileChange}
        />
        
        {songFile && 
        <div className="song-upload-form">
          <input
          type="text"
          id='song-title-form'
          placeholder={songFile.name} 
          value={songForm.title}
          onChange={event => setSongForm({...songForm, title: event.target.value})}
          />

          <audio src={songForm.song_url} ref={audio} />
          <button onClick={togglePlay}>{isPlaying ? 'Pause': 'Play Preview'}</button>
          <h6>Volume:</h6>
          <input 
          type="range"
          min='0.1'
          max='0.7'
          step='0.1'
          value={songVol}
          onChange={volumeControl}
          />

        </div>
       }

        <p style={{fontWeight: '700'}}>Skip for now if you not have a song to share</p>

    </div>
      
)
}

export default SongDataForm;