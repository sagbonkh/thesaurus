import React from 'react';
import { Button } from './Button';
import DateTime from './DateTime';
import './HeroSection.css';
import '../App.css';

export default function HeroSection() {
  return (
    <div className='hero-container'>
      <video loop autoPlay muted id="bg-video">
        <source src={require('../assets/videos/backgroundvid.mp4')} type='video/mp4' />
      </video>
      <h2>Discover your style</h2>
      <p> <DateTime></DateTime> </p>
      <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Get Started
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            Watch Trailer <i className='far fa-play-circle' />
          </Button>
        </div>
    </div>
  );
}
