import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEdit,
  faBullseye,
  faSkiing,
  faUser,
  faHome
 } from '@fortawesome/free-solid-svg-icons';
import LoginOrSignupForm from './LoginOrSignupForm';


function Header({user, setUser, history, setIsOpen, setOption}) {

  
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
          <h1>AvyUpskill</h1>
          <h2>Colorado's Backcountry Resource Center</h2>
        </div>
        <div className="stack-sections right-align">
          {user ? 
            <button className="login-button" onClick={() => handleLogoutClick()}>Logout</button> : 
            (<div>
              <button className="login-button" onClick={() => (setIsOpen(true), setOption('login'))}>Login</button>
              <button className="login-button" onClick={() => (setIsOpen(true), setOption('signup'))}>Signup</button>
            </div>
            )
          }
          <nav className="nav-bar">
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
            <Link to="/">
              <FontAwesomeIcon icon={faHome} 
                size="2x" 
                className="nav-icon" 
                role="home link"
                onMouseEnter={(_) => hoverIcon(_,"Home")} 
                onMouseLeave={(_) => hoverIcon(_, "")}
              />
            </Link>
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
