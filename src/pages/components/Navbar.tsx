// imports..........................
import { Component } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import "./style.css"

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <ul>
          <li><Link to="/" className="skydia" data-aos="zoom-out-right">SKYDIA</Link></li>
          {/* if on saved page, display search page else display saved page */}
          {window.location.pathname === "/skydia/saved" ? (
            <li className="right" data-aos="zoom-out-left"><Link to="/search"><Icon name='share' size='small' color="black" />Search</Link></li>
            ) : (
            <li className="right" data-aos="zoom-out-left"><Link to="/saved"><Icon name='heart' size='small' color="red" />My Favourites</Link></li>
          )}
        </ul>
      </div>
    )
  }
}
