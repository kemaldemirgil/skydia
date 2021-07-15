import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="wrapper">
        <h1>SKYDIA</h1>
        <p>Weather App</p>
      </div>
      <div className="bottom-wrapper">
        <Link to="/search" className="enter-wrapper"><button>Enter</button></Link>
      <small>created with ☮️ &amp; ❤️</small>
      </div>
    </div>
  )
}

export default Header
