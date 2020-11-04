import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import ProfilePage from './components/ProfilePage'
import LandingPage from './components/LandingPage'
import BeaconParksPage from './components/BeaconParksPage'
import CoursesPage from './components/CoursesPage'
import SkiAreaPage from './components/SkiAreaPage'
import ScrollToTop from './utils/ScrollToTop';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Fragment>
          <ScrollToTop/>
          <Switch>
            <Route path="/profile" render={ () => <ProfilePage /> } />
            <Route path="/courses" render={ () => <CoursesPage /> } />
            <Route path="/beacon-parks" render={ () => <BeaconParksPage /> } />
            <Route path="/ski-areas" render={ () => <SkiAreaPage /> } />
            <Route path="/" render={ () => <LandingPage /> } />
          </Switch>
        </Fragment>
      </main>
    </div>
  );
}

export default App;
