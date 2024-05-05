import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import './HeroSection.css';

function HeroSection() {
  let navigate = useNavigate();

  const routeChange = () => { 
    let path = '/'; 
    navigate(path);
  }


  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>

      <form className='search'>
          <div className='search-container'>
            <label >Where are you going?</label>
            <input id='location' type='text' placeholder='Search your location' />
          </div>
          
          <div className='search-container'>
              <button
                className='hero-btn'
                type='submit'
                onClick={routeChange}
              >
                Explore
              </button>
          </div>
      </form>
    </div>
  )
}

export default HeroSection;