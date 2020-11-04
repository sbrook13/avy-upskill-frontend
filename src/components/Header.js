import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEdit,
  faBullseye,
  faSkiing
 } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <header className="main-header flex-container-center">
        <div className="title">
          <h1>AvyUpskill</h1>
          <h2>Colorado's Backcountry Resource Center</h2>
        </div>
        <div className="stack-sections">
          <a>Login</a>
          <nav className="nav-bar">
            <Link to="/beacon-parks">
              <FontAwesomeIcon icon={faBullseye} 
                size="2x" 
                className="nav-icon" 
              />
            </Link>
            <Link to="/courses">
              <FontAwesomeIcon icon={faEdit} 
                size="2x" 
                className="nav-icon" 
              />
            </Link>
            <Link to="/ski-areas">
              <FontAwesomeIcon icon={faSkiing} 
                size="2x" 
                className="nav-icon" 
              />
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
