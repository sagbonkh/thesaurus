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
        <h2>About</h2>
          <p>
              Sidney Agbonkhese's passion project, Thesaurus, is an expression of his love
              for simple style and artistic creativity. On the page, he offers a unique 
              collection of images that showcase his personalized take on fashion and design.
              Through Thesaurus he has been able to explore different aspects of fashion while
              expanding on how we think about art in general.  
          </p>
      </div>  
    </div>
  )
}

export default About
