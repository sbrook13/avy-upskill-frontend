import React from 'react';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEdit,
  faBullseye,
  faSkiing,
  faUser
 } from '@fortawesome/free-solid-svg-icons';

function Header({user, setUser, history}) {
  
  const hoverIcon = (event, selection) => {
    const navBarName = document.querySelector('#nav-name')
    navBarName.innerHTML = `${selection}`
  }

  const handleSignupClick = () => {
    console.log("signup")
  }

  const handleLoginClick = () => {
    console.log("login")
  }

  const handleLogoutClick = () => {
    console.log("logout")
    setUser(null)
    localStorage.clear()
    window.location.href = '/'
  }


  return (
    <div className="header">
      <header className="main-header">
        <div className="title">
          <h1 data-tip='' data-for="title">AvyUpskill</h1>
          
          <h2>Colorado's Backcountry Resource Center</h2>
        </div>
        <div className="stack-sections right-align">
          {user ? 
            <button className="login-button" onClick={() => handleLogoutClick()}>Logout</button> : 
            (<div>
              <Link to="/login">
                <button className="login-button" >Login</button>
              </Link>
              <Link to="/signup">
                <button className="login-button" >Signup</button>
              </Link>
            </div>
            )
          }
          <nav className="nav-bar">
          <ReactTooltip id='title'>this is the title</ReactTooltip>
            {user ? 
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} 
                size="2x" 
                className="nav-icon" 
                role="profile link"
                onMouseEnter={(_) => hoverIcon(_,"Profile")} 
                onMouseLeave={(_) => hoverIcon(_, "")}
              />
            </Link> :
            null
            }
            <Link to="/beacon-parks">
              <FontAwesomeIcon icon={faBullseye} 
                size="2x" 
                className="nav-icon" 
                role="beacon parks link"
                onMouseEnter={(_) => hoverIcon(_,"Beacon Parks")} 
                onMouseLeave={(_) => hoverIcon(_, "")}
              />
            </Link>
            <Link to="/courses">
              <FontAwesomeIcon icon={faEdit} 
                size="2x" 
                className="nav-icon" 
                role="courses link"
                onMouseEnter={(_) => hoverIcon(_,"Courses")} 
                onMouseLeave={(_) => hoverIcon(_, "")}
              />
            </Link>
            <Link to="/backcountry-zones">
              <FontAwesomeIcon icon={faSkiing} 
                size="2x" 
                className="nav-icon" 
                role="backcountry areas link"
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
