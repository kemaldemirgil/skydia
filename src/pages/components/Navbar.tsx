import { Component } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import "./style.css"

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <ul>
          <li><Link to="/" className="skydia">SKYDIA</Link></li>
          {window.location.pathname === "/saved" ? (
            <li className="right"><Link to="/search"><Icon name='share' size='small' color="black" />Search</Link></li>
            ) : (
            <li className="right"><Link to="/saved"><Icon name='heart' size='small' color="red" />My Favourites</Link></li>
          )}
        </ul>
      </div>
    )
  }
}
