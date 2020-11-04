import React, {useState, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import BeaconParksPage from './components/BeaconParksPage';
import CoursesPage from './components/CoursesPage';
import SkiAreaPage from './components/SkiAreaPage';
import ScrollToTop from './utils/ScrollToTop';
import ReactTooltip from 'react-tooltip';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Header />
      <main>
        <Fragment>
          <ScrollToTop/>
          <Switch>
            <Route path="/profile" render={ () => <ProfilePage user={user} /> } />
            <Route path="/courses" render={ () => <CoursesPage /> } />
            <Route path="/beacon-parks" render={ () => <BeaconParksPage user={user} /> } />
            <Route path="/ski-areas" render={ () => <SkiAreaPage user={user} /> } />
            <Route path="/" render={ () => <LandingPage /> } />
          </Switch>
        </Fragment>
      </main>
      <Footer />
    </div>
  );
}

export default App;
