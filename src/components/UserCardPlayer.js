import React, { useRef, useState } from "react";
import Play_Img from '../assets/outline_play_arrow_black_24dp.png'
import Pause_Img from '../assets/outline_pause_black_24dp.png'
import '../styles/usercardplayer.css'

function UserCardPlayer({ userData, isPlaying, setIsPlaying }){
  const [currentSong, setCurrentSong] = useState(userData)
  const audioEl = useRef()
  const clickref = useRef()

  function handlePlayPause() {
    setIsPlaying(preval => !preval)
    if (!isPlaying){
      audioEl.current.play()
    }
    else {
      audioEl.current.pause()
    }
  }

  function onPlaying(){
    const duration = audioEl.current.duration;
    const ct = audioEl.current.currentTime;

    setCurrentSong({ ...currentSong, 'progress': ct / duration * 100, 'length': duration})
  }

  function checkWidth(event) {
    let width = clickref.current.clientWidth
    const offset = event.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioEl.current.currentTime = divprogress / 100 * currentSong.length;
  }

  return (
    <div className="card-media-sec">
      <p>{userData.title}</p>
      <div className="card-media-container">

        <audio src={userData.song_url} ref={audioEl} onTimeUpdate={onPlaying} />
        <img onClick={handlePlayPause} src={isPlaying ? Pause_Img : Play_Img} />

        <div className="seek-wrapper" onClick={checkWidth} ref={clickref}>
          <div className="song-seek" style={{width: `${currentSong.progress + '%'}`}}></div>
        </div>
  
      </div>

      <div className="user-card-time-stamp">
        <p>0:00</p>
        <p>{currentSong.length}</p>
      </div>

    </div>
  )
}

export default UserCardPlayer