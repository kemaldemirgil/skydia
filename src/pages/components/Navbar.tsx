import { Component } from 'react'
import { Link } from 'react-router-dom';
import "./style.css"

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <ul>
          <li><Link to="/" className="skydia">SKYDIA</Link></li>
          {window.location.pathname === "/saved" ? (
            <li className="right"><Link to="/search">Search</Link></li>
            ) : (
            <li className="right"><Link to="/saved">Favorites</Link></li>
          )}
        </ul>
      </div>
    )
  }
}
