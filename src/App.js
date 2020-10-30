import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage'
import BeaconParksPage from './components/BeaconParksPage'
import CoursesPage from './components/CoursesPage'
import SkiAreaPage from './components/SkiAreaPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEdit,
  faBullseye,
  faSkiing
 } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App hero-image">
      <header className="main-header flex-container-center">
        <div className="title">
          <h1>AvyUpskill</h1>
          <h2>Colorado's Backcountry Resource Center</h2>
        </div>
        <div>
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
      <main>
        <Switch>
          <Route path="/courses" render={ () => <CoursesPage /> } />
          <Route path="/beacon-parks" render={ () => <BeaconParksPage /> } />
          <Route path="/ski-areas" render={ () => <SkiAreaPage /> } />
          <Route path="/" render={ () => <LandingPage /> } />
        </Switch>
      </main>
    </div>
  );
}

export default App;
