import React, { useRef } from "react";
import Play_Img from '../assets/outline_play_arrow_black_24dp.png'
import Pause_Img from '../assets/outline_pause_black_24dp.png'
import '../styles/usercardplayer.css'

function UserCardPlayer({ date, isPlaying, setIsPlaying }){

  const audioEl = useRef()

  function handlePlayPause() {
    setIsPlaying(preval => !preval)
    audioEl.current.play()
  }

  return (
    <div className="card-media-sec">
      <p>{date.title}</p>
      <div className="card-media-container">
        <audio src={date.song_url} ref={audioEl} />
        <img onClick={handlePlayPause} src={isPlaying ? Pause_Img : Play_Img} />

        <div className="seek-wrapper">
          <div className="song-seek" style={{width: '50%'}}></div>
        </div>
        
      </div>
    </div>
  )
}

export default UserCardPlayer