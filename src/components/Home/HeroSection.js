import React from 'react';
import '../Main.css';
import  Button  from '../common/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <img src="/images/home2.jpg"/> */}
      <h1>ClubManager</h1>
      <p>Discover and Connect with College Clubs in a Snap!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          REGISTER YOUR CLUB <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;