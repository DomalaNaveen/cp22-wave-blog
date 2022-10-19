import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <div className="title-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="link">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header