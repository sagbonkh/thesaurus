import React from 'react';
import aboutImg from '../../assets/images/donald-oliver-uM4lQmRieos-unsplash.jpg';
import './About.css'; 

function About() {
  return (
    <div className='container'>
      <div class='image'>
        <img src= {aboutImg} alt='about' width="500" height="500"/>
      </div>
      <div className='about-text'>
        <h3>About</h3>
          <p>
              Thesaurus is an expression of love for simple style and artistic creativity. 
              This page offers a unique collection of images that showcase our personalized 
              take on fashion and design.
              Through Thesaurus we explore different aspects of fashion while
              expanding on how we think about art in general. The goal of this project is to 
              educate readers on the ever-evolving world of streetwear fashion so they can make
              informed decisions when it comes to their fashion choices.
          </p>
      </div>  
    </div>
  )
}

export default About
