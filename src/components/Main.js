import React from 'react'
import videoBg from '../assets/videos/video2.mp4'
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
      <video src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default Main
