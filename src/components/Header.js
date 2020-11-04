import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEdit,
  faBullseye,
  faSkiing
 } from '@fortawesome/free-solid-svg-icons';

function Header() {
  
  const hoverIcon = (event, selection) => {
    const navBarName = document.querySelector('#nav-name')
    navBarName.innerHTML = `${selection}`
  }

  return (
    <div className="header">
      <header className="main-header">
        <div className="title">
          <h1>AvyUpskill</h1>
          <h2>Colorado's Backcountry Resource Center</h2>
        </div>
        <div className="stack-sections right-align">
          <a>Login / Create User</a>
          <nav className="nav-bar">
            <Link to="/beacon-parks">
              <FontAwesomeIcon icon={faBullseye} 
                size="2x" 
                className="nav-icon" 
                onMouseEnter={(_) => hoverIcon(_,"Beacon Parks")} 
                onMouseLeave={(_) => hoverIcon(_, "")}
              />
            </Link>
            <Link to="/courses">
              <FontAwesomeIcon icon={faEdit} 
                size="2x" 
                className="nav-icon" 
                onMouseEnter={(_) => hoverIcon(_,"Courses")} 
                onMouseLeave={(_) => hoverIcon(_, "")}
              />
            </Link>
            <Link to="/ski-areas">
              <FontAwesomeIcon icon={faSkiing} 
                size="2x" 
                className="nav-icon" 
                onMouseEnter={(_) => hoverIcon(_,"Backcountry Zones")} 
                onMouseLeave={(_) => hoverIcon(_, "")}
              />
            </Link>
          </nav>
          <h4 id="nav-name"></h4>
        </div>
      </header>
    </div>
  );
}

export default Header;
