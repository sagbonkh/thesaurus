import React from 'react'
import { Link } from 'react-router-dom';
import "./Designers.css";
import adidasImg from '../../assets/images/adidas.jpg';
import adidasLogo from '../../assets/images/Logo_Adidas.png'
import aldImg from '../../assets/images/ALD.jpg';
import aldLogo from '../../assets/images/ALD-logo.png';
import axelImg from '../../assets/images/axel.jpg';
import axelLogo from '../../assets/images/axel-arigato-logo.png';
import nikeImg from '../../assets/images/nike.jpg';
import nikeLogo from '../../assets/images/Nike-Logo.png';
import offImg from '../../assets/images/off-white.jpg';
import offLogo from '../../assets/images/off-white-logo.png';
import palaceImg from '../../assets/images/palace.jpg';
import palaceLogo from '../../assets/images/palace-logo.png';
import kithImg from '../../assets/images/kith.png';
import kithLogo from '../../assets/images/kith-logo.png';
import stussyImg from '../../assets/images/stussy.jpg';
import stussyLogo from '../../assets/images/Logo-Stussy.png';
import supremeImg from '../../assets/images/supreme.jpg';
import supremeLogo from '../../assets/images/supreme-logo.png';
import bapeImg from '../../assets/images/bape.jpg';
import bapeLogo from '../../assets/images/BAPE-Logo.png';

function Designers() {
    return (
      <div className='home' style={{overflow:'auto', height: 'inherit', display: 'block'}}>
        <div className='title'>
          <h1>10 of my favourite streetwear brands this year</h1>
          <p className='name'>By Sidney Agbonkhese</p>
        </div>
        <div className='posts'>
          <p>
            My top 10 favourite streetwear brands of 2023 offer up something for everyone, from casual comfort to bold and edgy looks. From Nike's classic designs to Supreme's buzzworthy
            collaborations, these brands have set the bar for fashionable urban apparel this year.
          </p>
          <div className='post'>
            <h2>Adidas</h2>
            <div className='img'>
              <img src={adidasImg} alt=""/>
            </div>
            <div className='logo'>
              <img src={adidasLogo} alt=""/>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, neque vehicula gravida sodales, nunc dolor condimentum ipsum, at tincidunt sapien lectus eget nisi. </p>
          <div className='post'>
            <h2>Aimé Leon Dore</h2>
            <div className='img'>
              <img src={aldImg} alt=""/>
            </div>
            <div className='logo'>
              <img src={aldLogo} alt=""/>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, neque vehicula gravida sodales, nunc dolor condimentum ipsum, at tincidunt sapien lectus eget nisi. </p>
          <div className='post'>
            <h2>Axel Arigato</h2>
            <div className='img'>
              <img src={axelImg} alt=""/>
            </div>
            <div className='logo'>
              <img src={axelLogo} alt=""/>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, neque vehicula gravida sodales, nunc dolor condimentum ipsum, at tincidunt sapien lectus eget nisi. </p>
          <div className='post'>
            <h2>A Bathing Ape</h2>
            <div className='img'>
              <img src={bapeImg} alt=""/>
            </div>
            <div className='logo'>
              <img src={bapeLogo} alt=""/>
            </div>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, neque vehicula gravida sodales, nunc dolor condimentum ipsum, at tincidunt sapien lectus eget nisi. </p>
          <div className='post'>
            <h2>Nike</h2>
            <div className='img'>
              <img src={nikeImg} alt=""/>
            </div>
            <div className='logo'>
              <img src={nikeLogo} alt=""/>
            </div>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, neque vehicula gravida sodales, nunc dolor condimentum ipsum, at tincidunt sapien lectus eget nisi. </p>
          <div className='post'>
            <h2>Off-White</h2>
            <div className='img'>
              <img src={offImg} alt=""/>
            </div>
            <div className='logo'>
              <img src={offLogo} alt=""/>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, neque vehicula gravida sodales, nunc dolor condimentum ipsum, at tincidunt sapien lectus eget nisi. </p>
          <div className='post'>
            <h2>Palace</h2>
            <div className='img'>
              <img src={palaceImg} alt=""/>
            </div>
            <div className='logo'>
              <img src={palaceLogo} alt=""/>
            </div>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, neque vehicula gravida sodales, nunc dolor condimentum ipsum, at tincidunt sapien lectus eget nisi. </p>
          <div className='post'>
            <h2>Ralph Lauren</h2>
            <div className='img'>
              <img src={kithImg} alt=""/>
            </div>
            <div className='logo'>
              <img src={kithLogo} alt=""/>
            </div>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, neque vehicula gravida sodales, nunc dolor condimentum ipsum, at tincidunt sapien lectus eget nisi. </p>
          <div className='post'>
            <h2>Stussy</h2>
            <div className='img'>
              <img src={stussyImg} alt=""/>
            </div>
            <div className='logo'>
              <img src={stussyLogo} alt=""/>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, neque vehicula gravida sodales, nunc dolor condimentum ipsum, at tincidunt sapien lectus eget nisi. </p>
          <div className='post'>
            <h2>Supreme</h2>
            <div className='img'>
              <img src={supremeImg} alt=""/>
            </div>
            <div className='logo'>
              <img src={supremeLogo} alt=""/>
            </div>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, neque vehicula gravida sodales, nunc dolor condimentum ipsum, at tincidunt sapien lectus eget nisi. </p>
        </div>
      </div>
    );
}

export default Designers
