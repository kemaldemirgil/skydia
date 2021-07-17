import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="wrapper">
        <h1 data-aos="fade-down" data-aos-easing="linear">SKYDIA</h1>
        <p data-aos="zoom-out-up">Weather App</p>
      </div>
      <div className="bottom-wrapper">
        <Link to="/search" className="enter-wrapper" data-aos="zoom-in"><button>Enter</button></Link>
      <small data-aos="zoom-out-down">created with ☮️ &amp; ❤️</small>
      </div>
    </div>
  )
}

export default Header
