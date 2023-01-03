import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

export default function HeroSection() {
  return (
    <div>
      <video loop autoPlay muted id="bg-video">
        <source src={require('../assets/videos/video1.mp4')} type='video/mp4' />
      </video>
    </div>
  )
}
